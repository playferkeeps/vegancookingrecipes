/**
 * Script to replace all references to "Katie" with "Noah" in the database
 * 
 * This script updates:
 * - Recipe author fields
 * - Blog post author fields
 * - Text content in recipes (description, prologue, tips, variations, ingredientNotes, storage)
 * - Text content in blog posts (title, excerpt, content)
 * 
 * Usage:
 *   npm run update-katie-to-noah
 *   npm run update-katie-to-noah -- --dry-run  (preview changes without applying)
 */

import 'dotenv/config';
import { getPrismaClient } from '../lib/prisma';

/**
 * Replace all occurrences of "Katie" with "Noah" in a string (case-insensitive)
 */
function replaceKatieWithNoah(text: string | null | undefined): string | null {
  if (!text) return text;
  // Case-insensitive replacement, preserving original case where possible
  return text
    .replace(/Katie/gi, (match) => {
      // Preserve capitalization: "Katie" -> "Noah", "katie" -> "noah", "KATIE" -> "NOAH"
      if (match === 'Katie') return 'Noah';
      if (match === 'KATIE') return 'NOAH';
      if (match === 'katie') return 'noah';
      // Handle mixed case (e.g., "KaTiE")
      return 'Noah';
    })
    .replace(/Katie's/gi, (match) => {
      if (match === "Katie's") return "Noah's";
      if (match === "KATIE'S") return "NOAH'S";
      if (match === "katie's") return "noah's";
      return "Noah's";
    });
}

/**
 * Replace "Katie" with "Noah" in an array of strings
 */
function replaceInArray(items: string[] | null | undefined): string[] | null {
  if (!items || items.length === 0) return items;
  return items.map(item => replaceKatieWithNoah(item) || item);
}

/**
 * Update recipes in the database
 */
async function updateRecipes(isDryRun: boolean) {
  const prisma = getPrismaClient();
  if (!prisma) {
    throw new Error('Prisma Client is not initialized.');
  }

  console.log('\n📖 Updating Recipes...\n');

  // Find all recipes
  const recipes = await prisma.recipe.findMany({
    include: {
      categories: true,
      tags: true,
    },
  });

  console.log(`Found ${recipes.length} recipes to check`);

  let updatedCount = 0;
  let authorUpdatedCount = 0;
  let contentUpdatedCount = 0;

  for (const recipe of recipes) {
    let needsUpdate = false;
    const updates: any = {};

    // Update author if it's "Katie"
    if (recipe.author === 'Katie' || recipe.author.toLowerCase() === 'katie') {
      updates.author = 'Noah';
      needsUpdate = true;
      authorUpdatedCount++;
    }

    // Update description
    if (recipe.description && /katie/gi.test(recipe.description)) {
      updates.description = replaceKatieWithNoah(recipe.description);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update prologue
    if (recipe.prologue && /katie/gi.test(recipe.prologue)) {
      updates.prologue = replaceKatieWithNoah(recipe.prologue);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update ingredientNotes
    if (recipe.ingredientNotes && /katie/gi.test(recipe.ingredientNotes)) {
      updates.ingredientNotes = replaceKatieWithNoah(recipe.ingredientNotes);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update storage
    if (recipe.storage && /katie/gi.test(recipe.storage)) {
      updates.storage = replaceKatieWithNoah(recipe.storage);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update tips array
    if (recipe.tips && recipe.tips.some(tip => /katie/gi.test(tip))) {
      updates.tips = replaceInArray(recipe.tips);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update variations array
    if (recipe.variations && recipe.variations.some(variation => /katie/gi.test(variation))) {
      updates.variations = replaceInArray(recipe.variations);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    if (needsUpdate) {
      updatedCount++;
      if (isDryRun) {
        console.log(`  [DRY RUN] Would update recipe: "${recipe.title}"`);
        if (updates.author) console.log(`    - Author: ${recipe.author} → ${updates.author}`);
        if (updates.description) console.log(`    - Description: Contains "Katie"`);
        if (updates.prologue) console.log(`    - Prologue: Contains "Katie"`);
        if (updates.ingredientNotes) console.log(`    - Ingredient Notes: Contains "Katie"`);
        if (updates.storage) console.log(`    - Storage: Contains "Katie"`);
        if (updates.tips) console.log(`    - Tips: Contains "Katie"`);
        if (updates.variations) console.log(`    - Variations: Contains "Katie"`);
      } else {
        await prisma.recipe.update({
          where: { id: recipe.id },
          data: updates,
        });
        console.log(`  ✅ Updated recipe: "${recipe.title}"`);
      }
    }
  }

  console.log(`\n📊 Recipe Update Summary:`);
  console.log(`   Total recipes checked: ${recipes.length}`);
  console.log(`   Recipes updated: ${updatedCount}`);
  console.log(`   Author fields updated: ${authorUpdatedCount}`);
  console.log(`   Content fields updated: ${contentUpdatedCount}`);

  return { updatedCount, authorUpdatedCount, contentUpdatedCount };
}

/**
 * Update blog posts in the database
 */
async function updateBlogPosts(isDryRun: boolean) {
  const prisma = getPrismaClient();
  if (!prisma) {
    throw new Error('Prisma Client is not initialized.');
  }

  console.log('\n📝 Updating Blog Posts...\n');

  // Find all blog posts
  const blogPosts = await prisma.blogPost.findMany();

  console.log(`Found ${blogPosts.length} blog posts to check`);

  let updatedCount = 0;
  let authorUpdatedCount = 0;
  let contentUpdatedCount = 0;

  for (const post of blogPosts) {
    let needsUpdate = false;
    const updates: any = {};

    // Update author if it's "Katie"
    if (post.author === 'Katie' || post.author.toLowerCase() === 'katie') {
      updates.author = 'Noah';
      needsUpdate = true;
      authorUpdatedCount++;
    }

    // Update title
    if (post.title && /katie/gi.test(post.title)) {
      updates.title = replaceKatieWithNoah(post.title);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update excerpt
    if (post.excerpt && /katie/gi.test(post.excerpt)) {
      updates.excerpt = replaceKatieWithNoah(post.excerpt);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update content
    if (post.content && /katie/gi.test(post.content)) {
      updates.content = replaceKatieWithNoah(post.content);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update metaTitle
    if (post.metaTitle && /katie/gi.test(post.metaTitle)) {
      updates.metaTitle = replaceKatieWithNoah(post.metaTitle);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    // Update metaDescription
    if (post.metaDescription && /katie/gi.test(post.metaDescription)) {
      updates.metaDescription = replaceKatieWithNoah(post.metaDescription);
      needsUpdate = true;
      contentUpdatedCount++;
    }

    if (needsUpdate) {
      updatedCount++;
      if (isDryRun) {
        console.log(`  [DRY RUN] Would update blog post: "${post.title}"`);
        if (updates.author) console.log(`    - Author: ${post.author} → ${updates.author}`);
        if (updates.title) console.log(`    - Title: Contains "Katie"`);
        if (updates.excerpt) console.log(`    - Excerpt: Contains "Katie"`);
        if (updates.content) console.log(`    - Content: Contains "Katie"`);
        if (updates.metaTitle) console.log(`    - Meta Title: Contains "Katie"`);
        if (updates.metaDescription) console.log(`    - Meta Description: Contains "Katie"`);
      } else {
        await prisma.blogPost.update({
          where: { id: post.id },
          data: updates,
        });
        console.log(`  ✅ Updated blog post: "${post.title}"`);
      }
    }
  }

  console.log(`\n📊 Blog Post Update Summary:`);
  console.log(`   Total blog posts checked: ${blogPosts.length}`);
  console.log(`   Blog posts updated: ${updatedCount}`);
  console.log(`   Author fields updated: ${authorUpdatedCount}`);
  console.log(`   Content fields updated: ${contentUpdatedCount}`);

  return { updatedCount, authorUpdatedCount, contentUpdatedCount };
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');

  console.log('🔄 Katie to Noah Database Update Script');
  console.log('========================================\n');

  if (isDryRun) {
    console.log('⚠️  DRY RUN MODE - No changes will be saved\n');
  }

  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      throw new Error('Prisma Client is not initialized.');
    }

    // Update recipes
    const recipeStats = await updateRecipes(isDryRun);

    // Update blog posts
    const blogStats = await updateBlogPosts(isDryRun);

    // Final summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL SUMMARY');
    console.log('='.repeat(50));
    console.log(`\nRecipes:`);
    console.log(`  - Total checked: ${recipeStats.updatedCount > 0 ? 'See above' : 'All recipes'}`);
    console.log(`  - Recipes updated: ${recipeStats.updatedCount}`);
    console.log(`  - Author fields: ${recipeStats.authorUpdatedCount}`);
    console.log(`  - Content fields: ${recipeStats.contentUpdatedCount}`);
    console.log(`\nBlog Posts:`);
    console.log(`  - Total checked: ${blogStats.updatedCount > 0 ? 'See above' : 'All blog posts'}`);
    console.log(`  - Blog posts updated: ${blogStats.updatedCount}`);
    console.log(`  - Author fields: ${blogStats.authorUpdatedCount}`);
    console.log(`  - Content fields: ${blogStats.contentUpdatedCount}`);

    if (isDryRun) {
      console.log('\n✅ Dry run complete! Run without --dry-run to apply changes.');
    } else {
      console.log('\n✅ Database update complete!');
      console.log('   All references to "Katie" have been replaced with "Noah".');
    }
  } catch (error: any) {
    console.error(`\n❌ Error: ${error.message}`);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  } finally {
    const prisma = getPrismaClient();
    if (prisma) {
      await prisma.$disconnect();
    }
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

export { main as updateKatieToNoah };
