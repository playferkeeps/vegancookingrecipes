/**
 * Seed script to migrate existing recipes from TypeScript files to Supabase
 * Run with: npx prisma db seed
 */

// Load environment variables from .env file
import 'dotenv/config';

import { Recipe, RecipeCategory, VeganType, Ingredient, Instruction, FAQ } from '../types/recipe';
import { getAllRecipes } from '../data/recipes/static';
import { getDatabaseUrl } from '../lib/db-connection';

// Check if DATABASE_URL is set
const databaseUrl = getDatabaseUrl();
if (!databaseUrl) {
  console.error('❌ DATABASE_URL is not set. Cannot run seed.');
  process.exit(1);
}

// Use the singleton Prisma client from lib/prisma to avoid duplicate connection pools
// For seed script, we'll create a temporary instance since it runs standalone
// But we'll use the same pool configuration
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

// Create a temporary Prisma client for the seed script (runs standalone)
// This is okay since seed runs separately from the server
const pool = new Pool({ 
  connectionString: databaseUrl,
  max: 1, // Use single connection like the singleton
  min: 0,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 3000,
  statement_timeout: 0,
  allowExitOnIdle: true,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

async function main() {
  console.log('🌱 Starting recipe seed...');
  
  // Check if tables exist first
  try {
    await prisma.$queryRaw`SELECT 1 FROM "Recipe" LIMIT 1`;
  } catch (error: any) {
    // Check for various error codes and messages indicating table doesn't exist
    const errorCode = error?.code || error?.meta?.code;
    const errorMessage = error?.message || '';
    
    // P2021 = Prisma error for table not found
    // 42P01 = PostgreSQL error for relation does not exist
    if (errorCode === 'P2021' || 
        errorCode === '42P01' || 
        errorMessage.includes('does not exist') ||
        errorMessage.includes('relation') && errorMessage.includes('does not exist')) {
      console.error('❌ Database tables do not exist.');
      console.error('   Please run migrations first: npm run db:migrate');
      console.error('   Or push the schema: npm run db:push');
      process.exit(1);
    }
    throw error;
  }
  
  // Get all existing recipes from TypeScript files
  const recipes = getAllRecipes();
  console.log(`📚 Found ${recipes.length} recipes to migrate`);
  
  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;
  
  for (const recipe of recipes) {
    try {
      // Check if recipe already exists
      const existing = await prisma.recipe.findUnique({
        where: { slug: recipe.slug },
      });
      
      if (existing) {
        console.log(`⏭️  Skipping "${recipe.title}" (already exists)`);
        skipCount++;
        continue;
      }
      
      // Create recipe with all relations
      await prisma.recipe.create({
        data: {
          id: recipe.id,
          title: recipe.title,
          slug: recipe.slug,
          description: recipe.description,
          prologue: recipe.prologue,
          image: recipe.image,
          prepTime: recipe.prepTime,
          cookTime: recipe.cookTime,
          totalTime: recipe.totalTime,
          servings: recipe.servings,
          difficulty: recipe.difficulty,
          author: recipe.author,
          datePublished: new Date(recipe.datePublished),
          dateModified: recipe.dateModified ? new Date(recipe.dateModified) : undefined,
          ingredientNotes: recipe.ingredientNotes,
          tips: recipe.tips || [],
          variations: recipe.variations || [],
          storage: recipe.storage,
          // Categories
          categories: {
            create: recipe.category.map((cat: RecipeCategory) => ({ category: cat })),
          },
          // Vegan types
          veganTypes: {
            create: recipe.veganType.map((vt: VeganType) => ({ veganType: vt })),
          },
          // Ingredients
          ingredients: {
            create: recipe.ingredients.map((ing: string | Ingredient, index: number) => ({
              name: typeof ing === 'string' ? ing : ing.name,
              amount: typeof ing === 'string' ? '' : (ing.amount || ''),
              unit: typeof ing === 'string' ? undefined : ing.unit,
              notes: typeof ing === 'string' ? undefined : ing.notes,
              orderIndex: index,
            })),
          },
          // Instructions
          instructions: {
            create: recipe.instructions.map((inst: Instruction) => ({
              step: inst.step,
              text: inst.text,
              image: inst.image,
            })),
          },
          // Nutrition info
          nutritionInfo: recipe.nutritionInfo ? {
            create: {
              calories: recipe.nutritionInfo.calories,
              protein: recipe.nutritionInfo.protein,
              carbs: recipe.nutritionInfo.carbs,
              fat: recipe.nutritionInfo.fat,
              fiber: recipe.nutritionInfo.fiber,
              sugar: recipe.nutritionInfo.sugar,
            },
          } : undefined,
          // FAQs
          faqs: recipe.faqs ? {
            create: recipe.faqs.map((faq: FAQ, index: number) => ({
              question: faq.question,
              answer: faq.answer,
              orderIndex: index,
            })),
          } : undefined,
          // Tags
          tags: {
            create: recipe.tags.map((tag: string) => ({ tag })),
          },
          // Related recipes (will be created after all recipes exist)
          relatedRecipes: {
            create: [],
          },
        },
      });
      
      successCount++;
      console.log(`✅ Migrated: "${recipe.title}"`);
    } catch (error: any) {
      errorCount++;
      console.error(`❌ Error migrating "${recipe.title}":`, error.message);
    }
  }
  
  // Now handle related recipes (second pass)
  console.log('\n🔗 Linking related recipes...');
  for (const recipe of recipes) {
    if (recipe.relatedRecipeIds && recipe.relatedRecipeIds.length > 0) {
      try {
        // Find the recipe in the database
        const dbRecipe = await prisma.recipe.findUnique({
          where: { slug: recipe.slug },
          select: { id: true },
        });
        
        if (!dbRecipe) continue;
        
        // Find related recipes
        const relatedRecipes = await prisma.recipe.findMany({
          where: {
            id: { in: recipe.relatedRecipeIds },
          },
          select: { id: true },
        });
        
        // Create relations
        await prisma.relatedRecipe.createMany({
          data: relatedRecipes.map((related: { id: string }) => ({
            recipeId: dbRecipe.id,
            relatedId: related.id,
          })),
          skipDuplicates: true,
        });
        
        console.log(`✅ Linked ${relatedRecipes.length} related recipes for "${recipe.title}"`);
      } catch (error: any) {
        console.error(`❌ Error linking related recipes for "${recipe.title}":`, error.message);
      }
    }
  }
  
  // Seed sample votes and comments for a few popular recipes
  console.log('\n💬 Seeding sample votes and comments...');
  try {
    // Get a few recipes to add votes/comments to
    const sampleRecipes = await prisma.recipe.findMany({
      take: 5,
      select: { id: true, title: true, slug: true },
    });
    
    if (sampleRecipes.length > 0) {
      // Add some sample votes
      const sampleVotes = [
        { voteType: 'up', userId: 'user_sample_1' },
        { voteType: 'up', userId: 'user_sample_2' },
        { voteType: 'up', userId: 'user_sample_3' },
        { voteType: 'down', userId: 'user_sample_4' },
        { voteType: 'up', userId: 'user_sample_5' },
      ];
      
      for (const recipe of sampleRecipes.slice(0, 3)) {
        // Add votes for first 3 recipes
        for (const vote of sampleVotes) {
          try {
            await prisma.vote.upsert({
              where: {
                recipeId_userId: {
                  recipeId: recipe.id,
                  userId: vote.userId,
                },
              },
              create: {
                recipeId: recipe.id,
                userId: vote.userId,
                voteType: vote.voteType,
              },
              update: {
                voteType: vote.voteType,
              },
            });
          } catch (error) {
            // Ignore duplicate errors
          }
        }
      }
      console.log(`✅ Added sample votes for ${Math.min(3, sampleRecipes.length)} recipes`);
      
      // Add some sample comments
      const sampleComments = [
        {
          name: 'Sarah M.',
          email: 'sarah@example.com',
          comment: 'This recipe is amazing! I made it last week and my whole family loved it. The flavors are incredible!',
        },
        {
          name: 'Mike T.',
          email: 'mike@example.com',
          comment: 'Great recipe! I added a bit more spice and it turned out perfect. Will definitely make again.',
        },
        {
          name: 'Emma L.',
          email: 'emma@example.com',
          comment: 'So easy to follow and the results were restaurant-quality. Thank you for sharing!',
        },
      ];
      
      for (const recipe of sampleRecipes.slice(0, 2)) {
        // Add comments for first 2 recipes
        for (const comment of sampleComments) {
          try {
            await prisma.comment.create({
              data: {
                recipeId: recipe.id,
                name: comment.name,
                email: comment.email,
                comment: comment.comment,
              },
            });
          } catch (error) {
            // Ignore errors
          }
        }
      }
      console.log(`✅ Added sample comments for ${Math.min(2, sampleRecipes.length)} recipes`);
    } else {
      console.log('⏭️  No recipes found to add votes/comments to');
    }
  } catch (error: any) {
    console.warn('⚠️  Could not seed votes/comments:', error.message);
    // Don't fail the entire seed if votes/comments fail
  }
  
  console.log('\n✨ Seed complete!');
  console.log(`✅ Successfully migrated: ${successCount} recipes`);
  console.log(`⏭️  Skipped (already exist): ${skipCount} recipes`);
  console.log(`❌ Errors: ${errorCount} recipes`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });

