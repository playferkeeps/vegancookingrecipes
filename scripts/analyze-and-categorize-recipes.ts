/**
 * Script to analyze recipes and ensure they belong to the correct categories
 * 
 * Usage:
 *   npm run analyze-categories -- --dry-run    # Show what categories would be added/removed (default, analyzes ALL recipes)
 *   npm run analyze-categories -- --execute     # Actually update categories in database (analyzes ALL recipes)
 *   npm run analyze-categories -- --limit 10    # Only analyze first 10 recipes
 *   npm run analyze-categories -- --recipe-id <id>  # Analyze specific recipe
 * 
 * This script:
 * - Analyzes recipe content (title, description, ingredients, instructions, etc.)
 * - Uses AI to determine which categories a recipe should belong to
 * - A recipe can belong to multiple categories
 * - Updates recipes with correct categories (adding missing ones, removing incorrect ones)
 */

import 'dotenv/config';
import OpenAI from 'openai';
import { Logger } from '../lib/logger';
import { RecipeCategory } from '../types/recipe';

// Use the singleton Prisma client from lib/prisma to avoid duplicate connection pools
function getPrismaClient() {
  const { prisma } = require('../lib/prisma');
  if (!prisma) {
    throw new Error('Prisma Client is not initialized. Check DATABASE_URL configuration.');
  }
  return prisma;
}

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured. Set it as an environment variable.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

const ALL_CATEGORIES: RecipeCategory[] = [
  'baking',
  'savory',
  'international',
  'breakfast',
  'lunch',
  'dinner',
  'dessert',
  'snack',
  'beverage',
];

interface RecipeCategoryAnalysis {
  recipeId: string;
  title: string;
  currentCategories: string[];
  suggestedCategories: string[];
  categoriesToAdd: string[];
  categoriesToRemove: string[];
}

/**
 * Analyze a recipe and determine which categories it should belong to
 */
async function analyzeRecipeCategories(
  openai: OpenAI,
  recipe: any
): Promise<string[]> {
  // Collect all recipe content for analysis
  // Handle cases where relations might be undefined or empty
  const ingredients = (recipe.ingredients || []).map((ing: any) => ing.name).join(', ');
  const instructions = (recipe.instructions || [])
    .map((inst: any) => inst.text)
    .join(' ');
  const currentCategories = (recipe.categories || []).map((cat: any) => cat.category).join(', ');
  const veganTypes = (recipe.veganTypes || []).map((vt: any) => vt.veganType).join(', ');
  const tags = (recipe.tags || []).map((tag: any) => tag.tag).join(', ');

  const analysisPrompt = `You are a recipe categorization expert. Analyze this vegan recipe and determine which categories it should belong to.

Recipe Title: "${recipe.title}"
Description: "${recipe.description || ''}"
Current Categories: ${currentCategories || 'none'}
Vegan Types: ${veganTypes}
Tags: ${tags || 'none'}
Prep Time: ${recipe.prepTime} minutes
Cook Time: ${recipe.cookTime} minutes
Total Time: ${recipe.totalTime} minutes
Difficulty: ${recipe.difficulty}
Servings: ${recipe.servings}

Ingredients: ${ingredients}

Instructions Summary: ${instructions.substring(0, 500)}${instructions.length > 500 ? '...' : ''}

${recipe.ingredientNotes ? `Ingredient Notes: ${recipe.ingredientNotes}` : ''}

Available Categories:
- baking: Breads, cakes, cookies, pastries, anything baked
- savory: Non-sweet dishes, main courses, side dishes
- international: Dishes from specific cuisines (Italian, Mexican, Asian, etc.)
- breakfast: Morning meals, breakfast foods
- lunch: Midday meals, lunch dishes
- dinner: Evening meals, dinner entrees
- dessert: Sweet treats, desserts, sweet snacks
- snack: Light bites, snacks, appetizers
- beverage: Drinks, beverages, smoothies, juices

IMPORTANT RULES:
1. A recipe can belong to MULTIPLE categories (e.g., a recipe can be both "dinner" and "international")
2. Choose categories based on:
   - When the dish is typically eaten (breakfast, lunch, dinner, snack)
   - What type of dish it is (baking, savory, dessert, beverage)
   - Cultural origin (international if it's from a specific cuisine)
3. Be specific and accurate - only include categories that truly fit
4. Consider the primary purpose and typical use of the recipe

Return a JSON array of category names (lowercase, exactly matching the available categories above):
["category1", "category2", "category3"]

Examples:
- "Vegan Chocolate Chip Cookies" → ["baking", "dessert", "snack"]
- "Vegan Pad Thai" → ["dinner", "lunch", "international", "savory"]
- "Vegan Pancakes" → ["breakfast", "baking"]
- "Vegan Green Smoothie" → ["beverage", "breakfast", "snack"]
- "Vegan Lasagna" → ["dinner", "savory", "international"]
- "Vegan Caesar Salad" → ["lunch", "dinner", "savory"]
- "Vegan Tiramisu" → ["dessert", "baking", "international"]
- "Vegan Hummus" → ["snack", "savory", "international"]

Return ONLY the JSON array, no other text.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a recipe categorization expert. Analyze recipes and determine which categories they belong to. A recipe can belong to multiple categories. Always return a valid JSON array of category names.',
        },
        {
          role: 'user',
          content: analysisPrompt,
        },
      ],
      temperature: 0.3, // Lower temperature for more consistent categorization
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      // Try to extract JSON from markdown code blocks
      const jsonMatch = content.match(/```(?:json)?\s*(\[[\s\S]*\])\s*```/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[1]);
      } else {
        // Try to find array directly
        const arrayMatch = content.match(/\[[\s\S]*\]/);
        if (arrayMatch) {
          parsed = JSON.parse(arrayMatch[0]);
        } else {
          throw new Error('Failed to parse categories JSON');
        }
      }
    }

    // Extract categories - handle both {categories: [...]} and direct array
    let categories: string[] = [];
    if (Array.isArray(parsed)) {
      categories = parsed;
    } else if (parsed.categories && Array.isArray(parsed.categories)) {
      categories = parsed.categories;
    } else if (typeof parsed === 'object') {
      // Try to find any array value
      categories = Object.values(parsed).find((v) => Array.isArray(v)) as string[] || [];
    }

    // Normalize and validate categories
    const normalizedCategories = categories
      .map((cat: string) => cat.toLowerCase().trim())
      .filter((cat: string) => ALL_CATEGORIES.includes(cat as RecipeCategory))
      .filter((cat: string, index: number, arr: string[]) => arr.indexOf(cat) === index); // Remove duplicates

    // Ensure at least one category
    if (normalizedCategories.length === 0) {
      // Fallback: try to infer from title/description
      const titleLower = recipe.title.toLowerCase();
      if (titleLower.includes('cookie') || titleLower.includes('cake') || titleLower.includes('bread') || titleLower.includes('muffin')) {
        normalizedCategories.push('baking');
      } else if (titleLower.includes('smoothie') || titleLower.includes('juice') || titleLower.includes('drink')) {
        normalizedCategories.push('beverage');
      } else if (titleLower.includes('salad')) {
        normalizedCategories.push('lunch', 'dinner', 'savory');
      } else {
        normalizedCategories.push('savory'); // Default fallback
      }
    }

    return normalizedCategories;
  } catch (error: any) {
    throw new Error(`Failed to analyze recipe categories: ${error.message}`);
  }
}

/**
 * Find recipes to analyze
 */
async function findRecipesToAnalyze(
  prisma: any,
  logger: Logger,
  options: {
    limit?: number;
    recipeId?: string;
    all?: boolean;
  }
): Promise<any[]> {
  logger.log('📊 Finding recipes to analyze...');

  const where: any = {};
  if (options.recipeId) {
    where.id = options.recipeId;
  }

  const recipes = await prisma.recipe.findMany({
    where,
    include: {
      categories: true,
      veganTypes: true,
      tags: true,
      ingredients: true,
      instructions: true,
    },
    take: options.all ? undefined : options.limit,
    orderBy: { datePublished: 'desc' },
  });

  logger.log(`   ✅ Loaded ${recipes.length} recipe(s) to analyze\n`);

  return recipes;
}

/**
 * Analyze recipes and determine correct categories
 */
async function analyzeRecipes(
  prisma: any,
  openai: OpenAI,
  logger: Logger,
  options: {
    limit?: number;
    recipeId?: string;
    all?: boolean;
  }
): Promise<RecipeCategoryAnalysis[]> {
  const recipes = await findRecipesToAnalyze(prisma, logger, options);

  const analyses: RecipeCategoryAnalysis[] = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    logger.log(`[${i + 1}/${recipes.length}] Analyzing: "${recipe.title}"`);

    try {
      const currentCategories = recipe.categories.map((cat: any) => cat.category);
      const suggestedCategories = await analyzeRecipeCategories(openai, recipe);

      // Determine categories to add (suggested but not currently assigned)
      const categoriesToAdd = suggestedCategories.filter(
        (cat: string) => !currentCategories.includes(cat)
      );

      // Determine categories to remove (currently assigned but not suggested)
      const categoriesToRemove = currentCategories.filter(
        (cat: string) => !suggestedCategories.includes(cat)
      );

      analyses.push({
        recipeId: recipe.id,
        title: recipe.title,
        currentCategories,
        suggestedCategories,
        categoriesToAdd,
        categoriesToRemove,
      });

      logger.success(
        `   ✅ Suggested ${suggestedCategories.length} category/categories: ${suggestedCategories.join(', ')}`
      );
      if (categoriesToAdd.length > 0) {
        logger.log(`   ➕ Categories to add: ${categoriesToAdd.join(', ')}`);
      }
      if (categoriesToRemove.length > 0) {
        logger.warn(`   🗑️  Categories to remove: ${categoriesToRemove.join(', ')}`);
      }
    } catch (error: any) {
      logger.error(`Failed to analyze "${recipe.title}": ${error.message}`);
      analyses.push({
        recipeId: recipe.id,
        title: recipe.title,
        currentCategories: recipe.categories.map((cat: any) => cat.category),
        suggestedCategories: [],
        categoriesToAdd: [],
        categoriesToRemove: [],
      });
    }

    logger.log(''); // Empty line for readability
  }

  return analyses;
}

/**
 * Update recipe categories in database
 */
async function updateRecipeCategories(
  prisma: any,
  logger: Logger,
  analysis: RecipeCategoryAnalysis
): Promise<void> {
  const { recipeId, suggestedCategories, categoriesToAdd, categoriesToRemove } = analysis;

  // Remove categories that are no longer relevant
  if (categoriesToRemove.length > 0) {
    await prisma.recipeCategory.deleteMany({
      where: {
        recipeId,
        category: { in: categoriesToRemove },
      },
    });
    logger.log(`   🗑️  Removed ${categoriesToRemove.length} category/categories: ${categoriesToRemove.join(', ')}`);
  }

  // Add new categories
  if (categoriesToAdd.length > 0) {
    await prisma.recipeCategory.createMany({
      data: categoriesToAdd.map((category: string) => ({
        recipeId,
        category,
      })),
      skipDuplicates: true,
    });
    logger.log(`   ➕ Added ${categoriesToAdd.length} category/categories: ${categoriesToAdd.join(', ')}`);
  }
}

/**
 * Print analysis report
 */
function printReport(
  logger: Logger,
  analyses: RecipeCategoryAnalysis[],
  isDryRun: boolean
): void {
  logger.separator();
  logger.log('📋 CATEGORY ANALYSIS REPORT');
  logger.separator();
  logger.log('');

  const totalRecipes = analyses.length;
  const totalCategoriesToAdd = analyses.reduce((sum, a) => sum + a.categoriesToAdd.length, 0);
  const totalCategoriesToRemove = analyses.reduce((sum, a) => sum + a.categoriesToRemove.length, 0);
  const totalKeptCategories = analyses.reduce(
    (sum, a) => sum + a.currentCategories.filter((c) => a.suggestedCategories.includes(c)).length,
    0
  );

  logger.log(`📊 Summary:`);
  logger.log(`   Recipes analyzed: ${totalRecipes}`);
  logger.log(`   Categories to add: ${totalCategoriesToAdd}`);
  logger.log(`   Categories to keep: ${totalKeptCategories}`);
  logger.log(`   Categories to remove: ${totalCategoriesToRemove}`);
  logger.log('');

  if (totalRecipes === 0) {
    logger.warn('No recipes found to analyze.');
    return;
  }

  // Show detailed breakdown
  logger.log('📝 Detailed Breakdown:');
  logger.log('');

  for (const analysis of analyses) {
    logger.log(`\n🔹 "${analysis.title}"`);
    logger.log(`   Current categories (${analysis.currentCategories.length}): ${analysis.currentCategories.join(', ') || 'none'}`);
    logger.log(`   Suggested categories (${analysis.suggestedCategories.length}): ${analysis.suggestedCategories.join(', ') || 'none'}`);
    
    if (analysis.categoriesToAdd.length > 0) {
      logger.log(`   ➕ To add: ${analysis.categoriesToAdd.join(', ')}`);
    }
    if (analysis.categoriesToRemove.length > 0) {
      logger.log(`   🗑️  To remove: ${analysis.categoriesToRemove.join(', ')}`);
    }
    if (analysis.categoriesToAdd.length === 0 && analysis.categoriesToRemove.length === 0) {
      logger.log(`   ✅ Categories are correct`);
    }
  }

  logger.log('');
  logger.separator();
  if (isDryRun) {
    logger.log(`\n🔍 DRY RUN MODE: No categories were updated.`);
    logger.log(`   To actually update categories, run:`);
    logger.log(`   npm run analyze-categories -- --execute\n`);
  } else {
    logger.log(`\n⚠️  EXECUTE MODE: Categories will be updated for ${totalRecipes} recipe(s).\n`);
  }
  logger.separator();
  logger.log('');
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = !args.includes('--execute');
  const isExecute = args.includes('--execute');

  // Parse options
  let limit: number | undefined;
  let recipeId: string | undefined;
  let all = true; // Default to analyzing all recipes

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--limit' && args[i + 1]) {
      limit = parseInt(args[i + 1], 10);
      if (isNaN(limit) || limit <= 0) {
        console.error('❌ Error: --limit must be a positive number');
        process.exit(1);
      }
      all = false; // If limit is specified, don't analyze all
      i++;
    } else if (args[i] === '--recipe-id' && args[i + 1]) {
      recipeId = args[i + 1].trim();
      all = false; // If specific recipe ID is specified, don't analyze all
      i++;
    } else if (args[i] === '--all') {
      all = true;
    }
  }

  // Initialize logger
  const logger = new Logger('Category Analyzer', 'analyze-categories');

  if (!isDryRun && !isExecute) {
    logger.warn('No mode specified. Running in DRY RUN mode by default.\n');
  }

  logger.log('\n🚀 Recipe Category Analyzer');
  logger.separator();
  logger.log(`Mode: ${isDryRun ? '🔍 DRY RUN (no changes will be made)' : '⚠️  EXECUTE (categories will be updated)'}`);
  if (limit) {
    logger.log(`Limit: Analyzing first ${limit} recipes`);
  }
  if (recipeId) {
    logger.log(`Target: Specific recipe ID: ${recipeId}`);
  }
  if (all) {
    logger.log(`Target: All recipes`);
  }
  logger.log('');

  try {
    // Get Prisma client
    const prisma = getPrismaClient();

    // Get OpenAI client
    const openai = getOpenAIClient();

    // Check database connection
    logger.log('🔌 Connecting to database...');
    await prisma.$connect();
    logger.success('Database connection established\n');

    // Analyze recipes
    logger.log('🔍 Analyzing recipe categories...');
    const analyses = await analyzeRecipes(prisma, openai, logger, {
      limit,
      recipeId,
      all,
    });

    // Print report
    logger.log('📋 Generating report...');
    printReport(logger, analyses, isDryRun);

    // Update recipes if not dry run
    if (!isDryRun) {
      logger.log('💾 Updating recipe categories in database...');
      let updatedCount = 0;

      for (const analysis of analyses) {
        if (analysis.categoriesToAdd.length > 0 || analysis.categoriesToRemove.length > 0) {
          try {
            await updateRecipeCategories(prisma, logger, analysis);
            updatedCount++;
          } catch (error: any) {
            logger.error(`Failed to update "${analysis.title}": ${error.message}`);
          }
        }
      }

      logger.log('');
      logger.log(`📊 Update Summary:`);
      logger.log(`   Recipes updated: ${updatedCount}`);
      logger.log(`   Recipes unchanged: ${analyses.length - updatedCount}`);
      logger.log('');
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

export { analyzeRecipeCategories, main as analyzeCategories };

