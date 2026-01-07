/**
 * Script to populate full-text search vectors for all recipes
 * Run this after adding the search_vector column to update existing recipes
 */

import 'dotenv/config';
import { getPrismaClient } from '@/lib/prisma';

const prisma = getPrismaClient();

async function populateSearchVectors() {
  try {
    console.log('🔄 Populating search vectors for all recipes...');

    // Trigger update by updating each recipe (the trigger will populate search_vector)
    // We'll do this in batches to avoid memory issues
    const batchSize = 100;
    let offset = 0;
    let totalUpdated = 0;

    while (true) {
      const recipes = await prisma.recipe.findMany({
        select: { id: true },
        skip: offset,
        take: batchSize,
      });

      if (recipes.length === 0) {
        break;
      }

      // Update each recipe to trigger the search vector update
      // Setting search_vector to NULL triggers the update function
      for (const recipe of recipes) {
        await prisma.$executeRaw`
          UPDATE "Recipe"
          SET "search_vector" = NULL
          WHERE id = ${recipe.id}
        `;
      }

      totalUpdated += recipes.length;
      console.log(`   ✅ Updated ${totalUpdated} recipes...`);

      offset += batchSize;
    }

    console.log(`\n✅ Successfully populated search vectors for ${totalUpdated} recipes!`);
    console.log('   Search is now optimized and ready to use.');
  } catch (error) {
    console.error('❌ Error populating search vectors:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

populateSearchVectors();
