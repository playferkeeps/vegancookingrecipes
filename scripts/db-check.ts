/**
 * Database check and auto-seed script
 * Runs on app startup to ensure database is seeded if empty
 * This happens BEFORE the server starts serving content
 */

// Load environment variables from .env file
import 'dotenv/config';

import { Recipe, RecipeCategory, VeganType, Ingredient, Instruction, FAQ } from '../types/recipe';
import { getDatabaseUrl } from '../lib/db-connection';

// Only run if DATABASE_URL is set
const databaseUrl = getDatabaseUrl();
if (!databaseUrl) {
  console.log('ℹ️  DATABASE_URL not set, skipping database check');
  process.exit(0);
}

// Use the singleton Prisma client from lib/prisma to avoid duplicate connection pools
const { prisma } = require('../lib/prisma');
if (!prisma) {
  console.error('❌ Prisma Client is not initialized. Check DATABASE_URL configuration.');
  process.exit(1);
}

/**
 * Check if database needs seeding and seed if necessary
 */
async function checkAndSeed(): Promise<void> {
  try {
    console.log('🔍 Checking database...');
    
    // Check if tables exist by trying a simple query
    try {
      await prisma.$queryRaw`SELECT 1 FROM "Recipe" LIMIT 1`;
    } catch (error: any) {
      // P2021 = Prisma error for table not found
      // 42P01 = PostgreSQL error for relation does not exist
      if (error?.code === 'P2021' || 
          error?.code === '42P01' || 
          error?.message?.includes('does not exist') ||
          (error?.message?.includes('relation') && error?.message?.includes('does not exist'))) {
        console.log('⚠️  Database tables do not exist.');
        console.log('   Run migrations: npm run db:migrate');
        console.log('   Or push schema: npm run db:push');
        console.log('   App will continue with static file fallback.');
        process.exit(0);
      }
      throw error;
    }
    
    // Check if there are any recipes
    const recipeCount = await prisma.recipe.count();
    
    if (recipeCount === 0) {
      console.log('🌱 Database is empty. Starting automatic seed...');
      await runSeed();
      console.log('✅ Database seeded successfully');
    } else {
      console.log(`✅ Database is ready (${recipeCount} recipes found)`);
    }
  } catch (error: any) {
    // Don't fail startup if database check fails - just log and continue
    // This allows the app to fall back to static files
    console.warn('⚠️  Database check failed:', error?.message || error);
    console.warn('⚠️  App will continue with static file fallback');
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * Run the seed migration from static files to database
 */
async function runSeed(): Promise<void> {
  // Dynamically import static recipes to avoid bundling issues
  const { getAllRecipes } = require('../data/recipes/static');
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
      if (successCount % 10 === 0) {
        console.log(`  ✅ Migrated ${successCount}/${recipes.length} recipes...`);
      }
    } catch (error: any) {
      errorCount++;
      console.error(`  ❌ Error migrating "${recipe.title}":`, error.message);
    }
  }
  
  // Now handle related recipes (second pass)
  console.log('🔗 Linking related recipes...');
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
      } catch (error: any) {
        console.error(`  ❌ Error linking related recipes for "${recipe.title}":`, error.message);
      }
    }
  }
  
  console.log(`  ✅ Migrated: ${successCount} recipes`);
  console.log(`  ⏭️  Skipped (already exist): ${skipCount} recipes`);
  if (errorCount > 0) {
    console.log(`  ❌ Errors: ${errorCount} recipes`);
  }
}

// Run the check
checkAndSeed()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Database check failed:', error);
    process.exit(0); // Exit with 0 so app can still start with static files
  });

