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
  
  // Seed sample blog posts
  console.log('\n📝 Seeding sample blog posts...');
  try {
    // Get a few recipes to create blog posts for
    const recipesForBlog = await prisma.recipe.findMany({
      take: 3,
      include: {
        categories: true,
        tags: true,
      },
      orderBy: { datePublished: 'desc' },
    });

    if (recipesForBlog.length > 0) {
      for (const recipe of recipesForBlog) {
        const blogSlug = `how-to-make-${recipe.slug}`;
        
        // Check if blog post already exists
        const existingBlog = await prisma.blogPost.findUnique({
          where: { slug: blogSlug },
        });

        if (existingBlog) {
          console.log(`⏭️  Skipping blog post for "${recipe.title}" (already exists)`);
          continue;
        }

        const categories = recipe.categories.map((c: any) => c.category).join(', ');
        const tags = recipe.tags.map((t: any) => t.tag).slice(0, 5).join(', ');

        await prisma.blogPost.create({
          data: {
            title: `How to Make the Perfect ${recipe.title}`,
            slug: blogSlug,
            excerpt: `Learn how to make this delicious vegan ${recipe.title.toLowerCase()}. This recipe is perfect for ${categories} and takes just ${recipe.totalTime} minutes to prepare.`,
            content: `
              <h2>Introduction</h2>
              <p>Welcome to my kitchen! Today I'm sharing my favorite recipe for ${recipe.title}. This dish has become a staple in my home, and I'm excited to show you how to make it.</p>
              
              <h2>Why This Recipe Works</h2>
              <p>This ${recipe.title.toLowerCase()} is special because it combines simple, whole-food ingredients in a way that creates incredible flavor. With just ${recipe.totalTime} minutes from start to finish, it's perfect for busy weeknights.</p>
              
              <h2>Key Ingredients</h2>
              <p>The secret to this recipe is using fresh, quality ingredients. Each component plays an important role in creating the final dish.</p>
              
              <h2>Step-by-Step Instructions</h2>
              <p>Follow these simple steps to create a delicious ${recipe.title.toLowerCase()} that will impress your family and friends.</p>
              
              <h2>Tips for Success</h2>
              <ul>
                <li>Use fresh ingredients whenever possible</li>
                <li>Don't rush the cooking process</li>
                <li>Taste as you go and adjust seasonings</li>
              </ul>
              
              <h2>Variations</h2>
              <p>Feel free to customize this recipe to your taste. You can add extra vegetables, adjust the spices, or try different cooking methods.</p>
              
              <h2>Conclusion</h2>
              <p>I hope you love this ${recipe.title.toLowerCase()} as much as I do! It's a recipe that's close to my heart, and I'm so happy to share it with you. Happy cooking!</p>
            `,
            featuredImage: recipe.image,
            author: 'Katie',
            published: true,
            datePublished: new Date(),
            metaTitle: `How to Make ${recipe.title} - Vegan Recipe Guide`,
            metaDescription: `Learn how to make delicious vegan ${recipe.title.toLowerCase()}. This easy recipe takes ${recipe.totalTime} minutes and is perfect for ${categories}.`,
            metaKeywords: `${tags}, vegan, recipe, ${categories}`,
            ogImage: recipe.image,
            relatedRecipeIds: [recipe.slug],
            images: {
              create: [
                {
                  url: recipe.image,
                  alt: `Featured image for ${recipe.title}`,
                  orderIndex: 0,
                },
              ],
            },
          },
        });

        console.log(`✅ Created blog post: "How to Make the Perfect ${recipe.title}"`);
      }
      console.log(`✅ Created ${Math.min(3, recipesForBlog.length)} sample blog posts`);
    } else {
      console.log('⏭️  No recipes found to create blog posts for');
    }
  } catch (error: any) {
    console.warn('⚠️  Could not seed blog posts:', error.message);
    // Don't fail the entire seed if blog posts fail
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

