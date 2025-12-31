/**
 * Script to find and purge duplicate recipes from the database
 * 
 * Usage:
 *   npm run purge-duplicates -- --dry-run    # Show what would be deleted (default)
 *   npm run purge-duplicates -- --execute    # Actually delete duplicates
 * 
 * Duplicate detection criteria:
 * - Same slug (exact match)
 * - Same title (case-insensitive)
 * - Same core recipe name (after removing prefixes/suffixes)
 * 
 * When duplicates are found, keeps the oldest recipe (by datePublished) and deletes the rest.
 */

import 'dotenv/config';
import { Logger } from '../lib/logger';

// Use the singleton Prisma client from lib/prisma to avoid duplicate connection pools
function getPrismaClient() {
  const { prisma } = require('../lib/prisma');
  if (!prisma) {
    throw new Error('Prisma Client is not initialized. Check DATABASE_URL configuration.');
  }
  return prisma;
}

/**
 * Extract core recipe name by removing common prefixes and suffixes
 */
function extractCoreRecipeName(title: string): string {
  const prefixes = ['vegan', 'plant-based', 'easy', 'simple', 'quick', 'homemade', 'classic', 'best', 'creamy', 'spicy', 'bbq', 'smoky', 'herbed', 'garlic', 'lemon', 'coconut', 'thai', 'italian', 'mexican', 'asian', 'weeknight', 'sunday', 'morning', 'breakfast'];
  const suffixes = ['recipe', 'dish', 'bowl', 'plate', 'style', 'version', 'dinner'];
  
  let core = title.toLowerCase().trim();
  
  // Remove prefixes
  for (const prefix of prefixes) {
    if (core.startsWith(prefix + ' ')) {
      core = core.substring(prefix.length + 1).trim();
    }
  }
  
  // Remove suffixes
  for (const suffix of suffixes) {
    if (core.endsWith(' ' + suffix)) {
      core = core.substring(0, core.length - suffix.length - 1).trim();
    }
  }
  
  return core;
}

interface DuplicateGroup {
  keep: {
    id: string;
    title: string;
    slug: string;
    datePublished: Date;
  };
  delete: Array<{
    id: string;
    title: string;
    slug: string;
    datePublished: Date;
    reason: string;
  }>;
}

/**
 * Find duplicate recipes grouped by duplicate criteria
 */
async function findDuplicates(prisma: any, logger: Logger): Promise<{
  bySlug: Map<string, DuplicateGroup>;
  byTitle: Map<string, DuplicateGroup>;
  byCoreName: Map<string, DuplicateGroup>;
}> {
  logger.log('📊 Loading all recipes from database...\n');
  
  // Load all recipes with their relations
  const allRecipes = await prisma.recipe.findMany({
    orderBy: { datePublished: 'asc' }, // Oldest first
    select: {
      id: true,
      title: true,
      slug: true,
      datePublished: true,
    },
  });

  logger.log(`   ✅ Loaded ${allRecipes.length} recipes from database\n`);

  const bySlug = new Map<string, DuplicateGroup>();
  const byTitle = new Map<string, DuplicateGroup>();
  const byCoreName = new Map<string, DuplicateGroup>();

  // Track which recipes we've already processed
  const processedIds = new Set<string>();

  // Group by slug (exact match)
  logger.log('🔍 Checking for duplicate slugs...');
  const slugGroups = new Map<string, typeof allRecipes>();
  for (const recipe of allRecipes) {
    if (!slugGroups.has(recipe.slug)) {
      slugGroups.set(recipe.slug, []);
    }
    slugGroups.get(recipe.slug)!.push(recipe);
  }

  for (const [slug, recipes] of slugGroups.entries()) {
    if (recipes.length > 1) {
      // Sort by datePublished (oldest first)
      recipes.sort((a, b) => a.datePublished.getTime() - b.datePublished.getTime());
      const keep = recipes[0];
      const toDelete = recipes.slice(1);

      bySlug.set(slug, {
        keep: {
          id: keep.id,
          title: keep.title,
          slug: keep.slug,
          datePublished: keep.datePublished,
        },
        delete: toDelete.map((r) => ({
          id: r.id,
          title: r.title,
          slug: r.slug,
          datePublished: r.datePublished,
          reason: `Duplicate slug: "${slug}"`,
        })),
      });

      // Mark all as processed
      recipes.forEach((r) => processedIds.add(r.id));
    }
  }

  logger.log(`   Found ${bySlug.size} duplicate slug groups\n`);

  // Group by title (case-insensitive)
  logger.log('🔍 Checking for duplicate titles...');
  const titleGroups = new Map<string, typeof allRecipes>();
  for (const recipe of allRecipes) {
    if (processedIds.has(recipe.id)) continue; // Skip already processed

    const normalizedTitle = recipe.title.toLowerCase().trim();
    if (!titleGroups.has(normalizedTitle)) {
      titleGroups.set(normalizedTitle, []);
    }
    titleGroups.get(normalizedTitle)!.push(recipe);
  }

  for (const [normalizedTitle, recipes] of titleGroups.entries()) {
    if (recipes.length > 1) {
      // Sort by datePublished (oldest first)
      recipes.sort((a, b) => a.datePublished.getTime() - b.datePublished.getTime());
      const keep = recipes[0];
      const toDelete = recipes.slice(1);

      byTitle.set(normalizedTitle, {
        keep: {
          id: keep.id,
          title: keep.title,
          slug: keep.slug,
          datePublished: keep.datePublished,
        },
        delete: toDelete.map((r) => ({
          id: r.id,
          title: r.title,
          slug: r.slug,
          datePublished: r.datePublished,
          reason: `Duplicate title: "${r.title}" (normalized: "${normalizedTitle}")`,
        })),
      });

      // Mark all as processed
      recipes.forEach((r) => processedIds.add(r.id));
    }
  }

  logger.log(`   Found ${byTitle.size} duplicate title groups\n`);

  // Group by core recipe name
  logger.log('🔍 Checking for duplicate core recipe names...');
  const coreNameGroups = new Map<string, typeof allRecipes>();
  for (const recipe of allRecipes) {
    if (processedIds.has(recipe.id)) continue; // Skip already processed

    const coreName = extractCoreRecipeName(recipe.title);
    if (!coreNameGroups.has(coreName)) {
      coreNameGroups.set(coreName, []);
    }
    coreNameGroups.get(coreName)!.push(recipe);
  }

  for (const [coreName, recipes] of coreNameGroups.entries()) {
    if (recipes.length > 1) {
      // Sort by datePublished (oldest first)
      recipes.sort((a, b) => a.datePublished.getTime() - b.datePublished.getTime());
      const keep = recipes[0];
      const toDelete = recipes.slice(1);

      byCoreName.set(coreName, {
        keep: {
          id: keep.id,
          title: keep.title,
          slug: keep.slug,
          datePublished: keep.datePublished,
        },
        delete: toDelete.map((r) => ({
          id: r.id,
          title: r.title,
          slug: r.slug,
          datePublished: r.datePublished,
          reason: `Duplicate core recipe: "${coreName}" (from title: "${r.title}")`,
        })),
      });

      // Mark all as processed
      recipes.forEach((r) => processedIds.add(r.id));
    }
  }

  logger.log(`   Found ${byCoreName.size} duplicate core recipe groups\n`);

  return { bySlug, byTitle, byCoreName };
}

/**
 * Print duplicate report
 */
async function printReport(
  prisma: any,
  logger: Logger,
  duplicates: {
    bySlug: Map<string, DuplicateGroup>;
    byTitle: Map<string, DuplicateGroup>;
    byCoreName: Map<string, DuplicateGroup>;
  },
  isDryRun: boolean
): Promise<void> {
  const allToDelete = new Map<string, { recipe: any; reason: string }>();

  // Collect all recipes to delete
  for (const group of duplicates.bySlug.values()) {
    for (const recipe of group.delete) {
      allToDelete.set(recipe.id, { recipe, reason: recipe.reason });
    }
  }

  for (const group of duplicates.byTitle.values()) {
    for (const recipe of group.delete) {
      // Only add if not already marked for deletion
      if (!allToDelete.has(recipe.id)) {
        allToDelete.set(recipe.id, { recipe, reason: recipe.reason });
      }
    }
  }

  for (const group of duplicates.byCoreName.values()) {
    for (const recipe of group.delete) {
      // Only add if not already marked for deletion
      if (!allToDelete.has(recipe.id)) {
        allToDelete.set(recipe.id, { recipe, reason: recipe.reason });
      }
    }
  }

  const totalToDelete = allToDelete.size;
  const totalSlugDuplicates = Array.from(duplicates.bySlug.values()).reduce((sum, g) => sum + g.delete.length, 0);
  const totalTitleDuplicates = Array.from(duplicates.byTitle.values()).reduce((sum, g) => sum + g.delete.length, 0);
  const totalCoreDuplicates = Array.from(duplicates.byCoreName.values()).reduce((sum, g) => sum + g.delete.length, 0);

  logger.log('\n' + '='.repeat(80));
  logger.log('📋 DUPLICATE RECIPE REPORT');
  logger.log('='.repeat(80) + '\n');

  const totalRecipes = await prisma.recipe.count();
  logger.log(`📊 Summary:`);
  logger.log(`   Total recipes in database: ${totalRecipes}`);
  logger.log(`   Duplicate slug groups: ${duplicates.bySlug.size} (${totalSlugDuplicates} duplicates)`);
  logger.log(`   Duplicate title groups: ${duplicates.byTitle.size} (${totalTitleDuplicates} duplicates)`);
  logger.log(`   Duplicate core name groups: ${duplicates.byCoreName.size} (${totalCoreDuplicates} duplicates)`);
  logger.log(`   Total unique duplicates to delete: ${totalToDelete}\n`);

  if (totalToDelete === 0) {
    logger.success('No duplicates found! Database is clean.\n');
    return;
  }

  // Show duplicates by slug
  if (duplicates.bySlug.size > 0) {
    logger.log('\n🔴 Duplicates by Slug:');
    logger.log('-'.repeat(80));
    for (const [slug, group] of duplicates.bySlug.entries()) {
      logger.log(`\n   Slug: "${slug}"`);
      logger.log(`   ✅ KEEP: "${group.keep.title}" (ID: ${group.keep.id}, Published: ${group.keep.datePublished.toISOString().split('T')[0]})`);
      for (const recipe of group.delete) {
        logger.log(`   ❌ DELETE: "${recipe.title}" (ID: ${recipe.id}, Published: ${recipe.datePublished.toISOString().split('T')[0]})`);
        logger.log(`      Reason: ${recipe.reason}`);
      }
    }
  }

  // Show duplicates by title
  if (duplicates.byTitle.size > 0) {
    logger.log('\n\n🔴 Duplicates by Title:');
    logger.log('-'.repeat(80));
    for (const [normalizedTitle, group] of duplicates.byTitle.entries()) {
      logger.log(`\n   Title: "${normalizedTitle}"`);
      logger.log(`   ✅ KEEP: "${group.keep.title}" (ID: ${group.keep.id}, Slug: ${group.keep.slug}, Published: ${group.keep.datePublished.toISOString().split('T')[0]})`);
      for (const recipe of group.delete) {
        logger.log(`   ❌ DELETE: "${recipe.title}" (ID: ${recipe.id}, Slug: ${recipe.slug}, Published: ${recipe.datePublished.toISOString().split('T')[0]})`);
        logger.log(`      Reason: ${recipe.reason}`);
      }
    }
  }

  // Show duplicates by core name
  if (duplicates.byCoreName.size > 0) {
    logger.log('\n\n🔴 Duplicates by Core Recipe Name:');
    logger.log('-'.repeat(80));
    for (const [coreName, group] of duplicates.byCoreName.entries()) {
      logger.log(`\n   Core Name: "${coreName}"`);
      logger.log(`   ✅ KEEP: "${group.keep.title}" (ID: ${group.keep.id}, Slug: ${group.keep.slug}, Published: ${group.keep.datePublished.toISOString().split('T')[0]})`);
      for (const recipe of group.delete) {
        logger.log(`   ❌ DELETE: "${recipe.title}" (ID: ${recipe.id}, Slug: ${recipe.slug}, Published: ${recipe.datePublished.toISOString().split('T')[0]})`);
        logger.log(`      Reason: ${recipe.reason}`);
      }
    }
  }

  logger.log('\n' + '='.repeat(80));
  if (isDryRun) {
    logger.log(`\n🔍 DRY RUN MODE: No recipes were deleted.`);
    logger.log(`   To actually delete these duplicates, run:`);
    logger.log(`   npm run purge-duplicates -- --execute\n`);
  } else {
    logger.log(`\n⚠️  EXECUTE MODE: ${totalToDelete} recipe(s) will be deleted.\n`);
  }
  logger.log('='.repeat(80) + '\n');
}

/**
 * Delete duplicate recipes
 */
async function deleteDuplicates(
  prisma: any,
  logger: Logger,
  duplicates: {
    bySlug: Map<string, DuplicateGroup>;
    byTitle: Map<string, DuplicateGroup>;
    byCoreName: Map<string, DuplicateGroup>;
  }
): Promise<number> {
  const allToDelete = new Set<string>();

  // Collect all recipe IDs to delete
  for (const group of duplicates.bySlug.values()) {
    group.delete.forEach((r) => allToDelete.add(r.id));
  }

  for (const group of duplicates.byTitle.values()) {
    group.delete.forEach((r) => allToDelete.add(r.id));
  }

  for (const group of duplicates.byCoreName.values()) {
    group.delete.forEach((r) => allToDelete.add(r.id));
  }

  if (allToDelete.size === 0) {
    logger.log('✅ No duplicates to delete.\n');
    return 0;
  }

  logger.log(`\n🗑️  Deleting ${allToDelete.size} duplicate recipe(s)...\n`);

  // Delete recipes (cascade will handle related records)
  const deleteIds = Array.from(allToDelete);
  let deletedCount = 0;

  for (const id of deleteIds) {
    try {
      // Get recipe info before deleting for logging
      const recipe = await prisma.recipe.findUnique({
        where: { id },
        select: { title: true, slug: true },
      });

      await prisma.recipe.delete({
        where: { id },
      });
      deletedCount++;
      logger.success(`Deleted recipe ID: ${id} - "${recipe?.title || 'unknown'}" (slug: ${recipe?.slug || 'unknown'})`);
    } catch (error: any) {
      logger.error(`Failed to delete recipe ID ${id}: ${error.message}`);
    }
  }

  logger.success(`Successfully deleted ${deletedCount} of ${deleteIds.length} duplicate recipe(s).\n`);
  return deletedCount;
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = !args.includes('--execute');
  const isExecute = args.includes('--execute');

  // Initialize logger
  const logger = new Logger('Duplicate Recipe Purge', 'purge-duplicates');

  if (!isDryRun && !isExecute) {
    logger.warn('No mode specified. Running in DRY RUN mode by default.\n');
  }

  logger.log('\n🔍 Duplicate Recipe Purge Tool');
  logger.log('='.repeat(80));
  logger.log(`Mode: ${isDryRun ? '🔍 DRY RUN (no changes will be made)' : '⚠️  EXECUTE (duplicates will be deleted)'}\n`);

  try {
    // Get Prisma client
    const prisma = getPrismaClient();
    
    // Check database connection
    logger.log('🔌 Connecting to database...');
    await prisma.$connect();
    logger.success('Database connection established\n');

    // Find duplicates
    logger.log('🔍 Starting duplicate detection...');
    const duplicates = await findDuplicates(prisma, logger);

    // Print report
    logger.log('📋 Generating duplicate report...');
    await printReport(prisma, logger, duplicates, isDryRun);

    // Delete if not dry run
    if (!isDryRun) {
      logger.log('🗑️  Starting deletion process...');
      const deletedCount = await deleteDuplicates(prisma, logger, duplicates);
      const remainingCount = await prisma.recipe.count();
      logger.log(`\n📊 Final Summary:`);
      logger.log(`   Recipes deleted: ${deletedCount}`);
      logger.log(`   Remaining recipes: ${remainingCount}\n`);
    }

    if (logger.getLogFile()) {
      logger.log(`\n📝 Log file saved to: ${logger.getLogFile()}\n`);
    }
  } catch (error: any) {
    logger.error(`Error: ${error.message}`);
    if (error.stack) {
      logger.error(`Stack trace: ${error.stack}`);
    }
    process.exit(1);
  } finally {
    const prisma = getPrismaClient();
    if (prisma) {
      await prisma.$disconnect();
      logger.log('🔌 Database connection closed');
    }
    logger.close();
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

export { main as purgeDuplicateRecipes };

