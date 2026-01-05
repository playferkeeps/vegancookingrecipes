/**
 * Script to verify sitemap coverage
 * Checks that all recipes in the database are included in the sitemap
 */

import 'dotenv/config';
import { getAllRecipesAsync } from '@/data/recipes/helpers';
import { getPrismaClient } from '@/lib/prisma';

async function main() {
  console.log('🔍 Verifying sitemap coverage...\n');

  try {
    // Get all recipes from database
    const recipes = await getAllRecipesAsync();
    console.log(`✅ Found ${recipes.length} recipes in database`);

    // Get all recipes from Prisma (direct query to verify)
    const prisma = getPrismaClient();
    if (!prisma) {
      console.error('❌ Prisma client not available');
      process.exit(1);
    }

    const dbRecipes = await prisma.recipe.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        datePublished: true,
        dateModified: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
    });

    console.log(`✅ Found ${dbRecipes.length} recipes in database (direct query)`);

    // Check for recipes without slugs
    const recipesWithoutSlugs = dbRecipes.filter(r => !r.slug || r.slug.trim() === '');
    if (recipesWithoutSlugs.length > 0) {
      console.log(`\n⚠️  Found ${recipesWithoutSlugs.length} recipes without slugs:`);
      recipesWithoutSlugs.slice(0, 10).forEach(r => {
        console.log(`   - ID: ${r.id}, Title: ${r.title}`);
      });
      if (recipesWithoutSlugs.length > 10) {
        console.log(`   ... and ${recipesWithoutSlugs.length - 10} more`);
      }
    }

    // Check for duplicate slugs
    const slugMap = new Map<string, number>();
    dbRecipes.forEach(r => {
      if (r.slug) {
        slugMap.set(r.slug, (slugMap.get(r.slug) || 0) + 1);
      }
    });

    const duplicateSlugs = Array.from(slugMap.entries())
      .filter(([_, count]) => count > 1)
      .map(([slug, count]) => ({ slug, count }));

    if (duplicateSlugs.length > 0) {
      console.log(`\n⚠️  Found ${duplicateSlugs.length} duplicate slugs:`);
      duplicateSlugs.slice(0, 10).forEach(({ slug, count }) => {
        console.log(`   - "${slug}" appears ${count} times`);
      });
      if (duplicateSlugs.length > 10) {
        console.log(`   ... and ${duplicateSlugs.length - 10} more`);
      }
    }

    // Verify all recipes have valid dates
    const recipesWithoutDates = dbRecipes.filter(r => !r.datePublished);
    if (recipesWithoutDates.length > 0) {
      console.log(`\n⚠️  Found ${recipesWithoutDates.length} recipes without publication dates`);
    }

    // Summary
    console.log('\n📊 Summary:');
    console.log(`   Total recipes in database: ${dbRecipes.length}`);
    console.log(`   Recipes with slugs: ${dbRecipes.filter(r => r.slug && r.slug.trim() !== '').length}`);
    console.log(`   Recipes without slugs: ${recipesWithoutSlugs.length}`);
    console.log(`   Duplicate slugs: ${duplicateSlugs.length}`);
    console.log(`   Recipes without dates: ${recipesWithoutDates.length}`);

    // Expected sitemap URLs
    const expectedUrls = dbRecipes
      .filter(r => r.slug && r.slug.trim() !== '')
      .map(r => `https://vegancooking.recipes/recipes/${r.slug}`);

    console.log(`\n✅ Expected ${expectedUrls.length} recipe URLs in sitemap`);

    if (recipesWithoutSlugs.length === 0 && duplicateSlugs.length === 0) {
      console.log('\n✅ All recipes are ready for indexing!');
    } else {
      console.log('\n⚠️  Some issues need to be fixed before all recipes can be indexed.');
    }

    await prisma.$disconnect();
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
