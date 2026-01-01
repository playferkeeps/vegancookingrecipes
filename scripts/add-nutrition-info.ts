/**
 * Script to add accurate nutritional information to recipes that don't have it
 * 
 * Usage:
 *   npm run add-nutrition -- --dry-run    # Show what would be added (default)
 *   npm run add-nutrition -- --execute    # Actually add nutrition info
 *   npm run add-nutrition -- --limit 10   # Only process first 10 recipes
 *   npm run add-nutrition -- --recipe-id <id>  # Process specific recipe
 * 
 * This script:
 * - Finds recipes without nutrition info
 * - Uses AI to calculate accurate nutritional values based on ingredients and amounts
 * - Calculates per-serving values
 * - Updates recipes with accurate nutrition info
 */

import 'dotenv/config';
import OpenAI from 'openai';
import { Logger } from '../lib/logger';

// Use the singleton Prisma client from lib/prisma
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

interface NutritionInfo {
  calories: number;
  protein: string; // e.g., "15g"
  carbs: string; // e.g., "30g"
  fat: string; // e.g., "10g"
  fiber: string; // e.g., "5g"
  sugar: string; // e.g., "8g"
}

/**
 * Calculate nutritional information for a recipe using AI
 */
async function calculateNutritionInfo(
  openai: OpenAI,
  recipe: any,
  logger: Logger
): Promise<NutritionInfo> {
  // Build detailed ingredient list with amounts
  const ingredientList = recipe.ingredients
    .map((ing: any) => {
      const amount = ing.amount || '';
      const unit = ing.unit || '';
      const name = ing.name || '';
      return `${amount} ${unit} ${name}`.trim();
    })
    .filter((ing: string) => ing.length > 0)
    .join('\n');

  const prompt = `You are a nutrition expert. Calculate accurate nutritional information for this vegan recipe.

Recipe: "${recipe.title}"
Servings: ${recipe.servings}
Total Time: ${recipe.totalTime} minutes

Ingredients:
${ingredientList}

${recipe.ingredientNotes ? `Ingredient Notes: ${recipe.ingredientNotes}` : ''}

Calculate the TOTAL nutritional information for the ENTIRE recipe (all servings combined), then divide by ${recipe.servings} to get per-serving values.

IMPORTANT CALCULATION RULES:
1. Calculate TOTAL nutrition for ALL ingredients combined (entire recipe)
2. Then divide by ${recipe.servings} to get per-serving values
3. Use standard USDA nutrition databases for accurate values
4. Account for cooking methods (some nutrients may be lost or concentrated)
5. Be precise with measurements - convert all units to standard measurements
6. Round to reasonable precision:
   - Calories: whole number
   - Protein, Carbs, Fat, Fiber, Sugar: round to nearest gram (format as "Xg")

Example calculations:
- If recipe has 2 cups chickpeas (400g) = ~800 calories total, and serves 4, then per serving = 200 calories
- If recipe has 1 cup quinoa (185g) = ~222g carbs total, and serves 4, then per serving = 55.5g carbs (round to "56g")

Return a JSON object with this exact structure:
{
  "calories": 250,
  "protein": "12g",
  "carbs": "35g",
  "fat": "8g",
  "fiber": "6g",
  "sugar": "5g"
}

Ensure all values are accurate and realistic for the ingredients listed.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a nutrition expert who calculates accurate nutritional information for recipes. Always return valid JSON with precise nutritional values based on USDA nutrition databases.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.1, // Low temperature for accuracy
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let nutritionData;
    try {
      nutritionData = JSON.parse(content);
    } catch (e) {
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (jsonMatch) {
        nutritionData = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('Failed to parse nutrition JSON');
      }
    }

    // Validate and normalize the data
    const calories = Math.round(Number(nutritionData.calories) || 0);
    const protein = String(nutritionData.protein || '0g').replace(/\s+/g, '');
    const carbs = String(nutritionData.carbs || '0g').replace(/\s+/g, '');
    const fat = String(nutritionData.fat || '0g').replace(/\s+/g, '');
    const fiber = String(nutritionData.fiber || '0g').replace(/\s+/g, '');
    const sugar = String(nutritionData.sugar || '0g').replace(/\s+/g, '');

    // Ensure all values have 'g' suffix if they're numbers
    const normalizeGramValue = (val: string): string => {
      const num = parseFloat(val.replace(/[^\d.]/g, ''));
      if (isNaN(num)) return '0g';
      return `${Math.round(num)}g`;
    };

    return {
      calories: calories > 0 ? calories : 0,
      protein: normalizeGramValue(protein),
      carbs: normalizeGramValue(carbs),
      fat: normalizeGramValue(fat),
      fiber: normalizeGramValue(fiber),
      sugar: normalizeGramValue(sugar),
    };
  } catch (error: any) {
    throw new Error(`Failed to calculate nutrition info: ${error.message}`);
  }
}

/**
 * Find recipes without nutrition info
 */
async function findRecipesWithoutNutrition(
  prisma: any,
  logger: Logger,
  options: {
    limit?: number;
    recipeId?: string;
  }
): Promise<any[]> {
  logger.log('📊 Finding recipes without nutrition info...');

  // Use a more efficient query - get recipe IDs that don't have nutrition info
  let recipeIds: string[] | undefined;
  
  if (options.recipeId) {
    // Check if this specific recipe has nutrition info
    const recipe = await prisma.recipe.findUnique({
      where: { id: options.recipeId },
      include: { nutritionInfo: true },
    });
    if (!recipe) {
      return [];
    }
    // Check if nutrition info exists AND has actual values
    const hasValidNutrition = recipe.nutritionInfo && (
      recipe.nutritionInfo.calories !== null ||
      recipe.nutritionInfo.protein !== null ||
      recipe.nutritionInfo.carbs !== null ||
      recipe.nutritionInfo.fat !== null
    );
    if (hasValidNutrition) {
      return [];
    }
    recipeIds = [options.recipeId];
  } else {
    // Get all recipe IDs
    const allRecipeIds = await prisma.recipe.findMany({
      select: { id: true },
    });
    
    // Get all nutrition records and filter for meaningful values
    // We can't use Prisma queries for this because we need to check for > 0 and non-empty strings
    const allNutritionRecords = await prisma.nutritionInfo.findMany({
      select: { 
        recipeId: true,
        calories: true,
        protein: true,
        carbs: true,
        fat: true,
      },
    });
    
    // Filter to only recipes with meaningful nutrition values
    // A value is meaningful if: calories > 0, or protein/carbs/fat are non-empty and not "0g"
    const recipesWithNutrition = allNutritionRecords.filter((n: any) => {
      const hasCalories = n.calories !== null && n.calories !== undefined && n.calories > 0;
      const hasProtein = n.protein && n.protein !== '' && n.protein !== '0g';
      const hasCarbs = n.carbs && n.carbs !== '' && n.carbs !== '0g';
      const hasFat = n.fat && n.fat !== '' && n.fat !== '0g';
      return hasCalories || hasProtein || hasCarbs || hasFat;
    });
    
    const nutritionRecipeIds = new Set(recipesWithNutrition.map((n: any) => n.recipeId));
    
    // Filter to recipes without valid nutrition info
    recipeIds = allRecipeIds
      .map((r: any) => r.id)
      .filter((id: string) => !nutritionRecipeIds.has(id));
  }

  if (!recipeIds || recipeIds.length === 0) {
    logger.log(`   📊 Total recipes: ${await prisma.recipe.count()}`);
    logger.log(`   ✅ Found 0 recipe(s) without nutrition info\n`);
    return [];
  }

  // Get full recipe data for recipes without nutrition info
  const allRecipes = await prisma.recipe.findMany({
    where: {
      id: { in: recipeIds },
    },
    include: {
      ingredients: {
        orderBy: { orderIndex: 'asc' },
      },
      nutritionInfo: true, // Should be null or empty for all of these
    },
    orderBy: { datePublished: 'desc' },
  });

  // Double-check filter (shouldn't be needed, but safety check)
  // Also handle recipes that have NutritionInfo records but all values are null/empty/zero
  const recipesWithoutNutrition = allRecipes.filter((recipe: any) => {
    if (!recipe.nutritionInfo) return true;
    // Check if nutrition info has any actual meaningful values
    // A value is meaningful if it's not null, not undefined, not empty string, and not 0
    const hasValidNutrition = 
      (recipe.nutritionInfo.calories !== null && 
       recipe.nutritionInfo.calories !== undefined && 
       recipe.nutritionInfo.calories > 0) ||
      (recipe.nutritionInfo.protein !== null && 
       recipe.nutritionInfo.protein !== undefined && 
       recipe.nutritionInfo.protein !== '' && 
       recipe.nutritionInfo.protein !== '0g') ||
      (recipe.nutritionInfo.carbs !== null && 
       recipe.nutritionInfo.carbs !== undefined && 
       recipe.nutritionInfo.carbs !== '' && 
       recipe.nutritionInfo.carbs !== '0g') ||
      (recipe.nutritionInfo.fat !== null && 
       recipe.nutritionInfo.fat !== undefined && 
       recipe.nutritionInfo.fat !== '' && 
       recipe.nutritionInfo.fat !== '0g');
    return !hasValidNutrition;
  });

  // Apply limit after filtering
  const recipes = options.limit
    ? recipesWithoutNutrition.slice(0, options.limit)
    : recipesWithoutNutrition;

  logger.log(`   📊 Total recipes: ${await prisma.recipe.count()}`);
  logger.log(`   ✅ Found ${recipes.length} recipe(s) without nutrition info\n`);
  return recipes;
}

/**
 * Update recipe with nutrition info
 */
async function updateRecipeNutrition(
  prisma: any,
  logger: Logger,
  recipeId: string,
  nutritionInfo: NutritionInfo
): Promise<void> {
  // Check if nutrition info already exists
  const existing = await prisma.nutritionInfo.findUnique({
    where: { recipeId },
  });

  if (existing) {
    // Update existing
    await prisma.nutritionInfo.update({
      where: { recipeId },
      data: nutritionInfo,
    });
    logger.log(`   ✅ Updated nutrition info for recipe ID: ${recipeId}`);
  } else {
    // Create new
    await prisma.nutritionInfo.create({
      data: {
        recipeId,
        ...nutritionInfo,
      },
    });
    logger.log(`   ✅ Created nutrition info for recipe ID: ${recipeId}`);
  }
}

/**
 * Print report
 */
function printReport(
  logger: Logger,
  recipes: any[],
  nutritionData: Map<string, NutritionInfo>,
  isDryRun: boolean
): void {
  logger.separator();
  logger.log('📋 NUTRITION INFO REPORT');
  logger.separator();
  logger.log('');

  logger.log(`📊 Summary:`);
  logger.log(`   Recipes without nutrition info: ${recipes.length}`);
  logger.log(`   Nutrition info calculated: ${nutritionData.size}`);
  logger.log('');

  if (recipes.length === 0) {
    logger.success('✅ All recipes already have nutrition info!');
    return;
  }

  logger.log('📝 Detailed Breakdown:');
  logger.log('');

  for (const recipe of recipes) {
    const nutrition = nutritionData.get(recipe.id);
    if (!nutrition) {
      logger.warn(`   ⚠️  "${recipe.title}" - Failed to calculate nutrition`);
      continue;
    }

    logger.log(`\n🔹 "${recipe.title}"`);
    logger.log(`   Servings: ${recipe.servings}`);
    logger.log(`   Per Serving:`);
    logger.log(`      Calories: ${nutrition.calories}`);
    logger.log(`      Protein: ${nutrition.protein}`);
    logger.log(`      Carbs: ${nutrition.carbs}`);
    logger.log(`      Fat: ${nutrition.fat}`);
    logger.log(`      Fiber: ${nutrition.fiber}`);
    logger.log(`      Sugar: ${nutrition.sugar}`);
  }

  logger.log('');
  logger.separator();
  if (isDryRun) {
    logger.log(`\n🔍 DRY RUN MODE: No nutrition info was added.`);
    logger.log(`   To actually add nutrition info, run:`);
    logger.log(`   npm run add-nutrition -- --execute\n`);
  } else {
    logger.log(`\n⚠️  EXECUTE MODE: Nutrition info will be added to ${nutritionData.size} recipe(s).\n`);
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

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--limit' && args[i + 1]) {
      limit = parseInt(args[i + 1], 10);
      if (isNaN(limit) || limit <= 0) {
        console.error('❌ Error: --limit must be a positive number');
        process.exit(1);
      }
      i++;
    } else if (args[i] === '--recipe-id' && args[i + 1]) {
      recipeId = args[i + 1].trim();
      i++;
    }
  }

  // Initialize logger
  const logger = new Logger('Nutrition Info Generator', 'add-nutrition');

  if (!isDryRun && !isExecute) {
    logger.warn('No mode specified. Running in DRY RUN mode by default.\n');
  }

  logger.log('\n🥗 Nutrition Info Generator');
  logger.separator();
  logger.log(`Mode: ${isDryRun ? '🔍 DRY RUN (no changes will be made)' : '⚠️  EXECUTE (nutrition info will be added)'}`);
  if (limit) {
    logger.log(`Limit: Processing first ${limit} recipes`);
  }
  if (recipeId) {
    logger.log(`Target: Specific recipe ID: ${recipeId}`);
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

    // Find recipes without nutrition info
    logger.log('🔍 Finding recipes without nutrition info...');
    const recipes = await findRecipesWithoutNutrition(prisma, logger, {
      limit,
      recipeId,
    });

    if (recipes.length === 0) {
      logger.success('✅ All recipes already have nutrition info!');
      logger.close();
      return;
    }

    // Calculate nutrition info for each recipe
    logger.log('🧮 Calculating nutrition info...');
    const nutritionData = new Map<string, NutritionInfo>();
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      logger.log(`[${i + 1}/${recipes.length}] Calculating for: "${recipe.title}"`);

      try {
        const nutrition = await calculateNutritionInfo(openai, recipe, logger);
        nutritionData.set(recipe.id, nutrition);
        successCount++;

        logger.success(
          `   ✅ Calculated: ${nutrition.calories} cal, ${nutrition.protein} protein, ${nutrition.carbs} carbs, ${nutrition.fat} fat`
        );
      } catch (error: any) {
        logger.error(`Failed to calculate nutrition for "${recipe.title}": ${error.message}`);
        errorCount++;
      }

      logger.log(''); // Empty line for readability
    }

    // Print report
    logger.log('📋 Generating report...');
    printReport(logger, recipes, nutritionData, isDryRun);

    // Update recipes if not dry run
    if (!isDryRun) {
      logger.log('💾 Adding nutrition info to database...');
      let updatedCount = 0;

      for (const recipe of recipes) {
        const nutrition = nutritionData.get(recipe.id);
        if (!nutrition) continue;

        try {
          await updateRecipeNutrition(prisma, logger, recipe.id, nutrition);
          updatedCount++;
        } catch (error: any) {
          logger.error(`Failed to update "${recipe.title}": ${error.message}`);
        }
      }

      logger.log('');
      logger.log(`📊 Update Summary:`);
      logger.log(`   Recipes updated: ${updatedCount}`);
      logger.log(`   Errors: ${errorCount}`);
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

export { main as addNutritionInfo };

