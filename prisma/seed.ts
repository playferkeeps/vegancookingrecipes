/**
 * Seed script to migrate existing recipes from TypeScript files to Supabase
 * Run with: npx prisma db seed
 */

// Load environment variables from .env file
import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { Recipe, RecipeCategory, VeganType, Ingredient, Instruction, FAQ } from '../types/recipe';
import { getAllRecipes } from '../data/recipes/static';
import { getDatabaseUrl } from '../lib/db-connection';

// Check if DATABASE_URL is set
const databaseUrl = getDatabaseUrl();
if (!databaseUrl) {
  console.error('❌ DATABASE_URL is not set. Cannot run seed.');
  process.exit(1);
}

// Create Prisma client with adapter (required for Prisma 7)
const pool = new Pool({ 
  connectionString: databaseUrl,
  // Disable prepared statements to avoid conflicts with Supabase pooler
  statement_timeout: 0,
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

