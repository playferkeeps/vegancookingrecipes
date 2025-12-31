/**
 * Script to analyze recipes and add relevant tags for better searchability
 * 
 * Usage:
 *   npm run analyze-tags -- --dry-run    # Show what tags would be added (default)
 *   npm run analyze-tags -- --execute    # Actually update tags in database
 *   npm run analyze-tags -- --limit 10   # Only analyze first 10 recipes
 *   npm run analyze-tags -- --recipe-id <id>  # Analyze specific recipe
 * 
 * This script:
 * - Analyzes recipe content (title, description, ingredients, instructions, etc.)
 * - Uses AI to generate relevant tags based on:
 *   - Ingredients used
 *   - Cooking methods
 *   - Cuisine types
 *   - Dietary attributes
 *   - Meal types
 *   - Flavor profiles
 *   - Time/difficulty
 * - Updates recipes with new tags (preserving existing ones)
 */

import 'dotenv/config';
import OpenAI from 'openai';
import { Logger } from '../lib/logger';

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

interface RecipeAnalysis {
  recipeId: string;
  title: string;
  currentTags: string[];
  suggestedTags: string[];
  newTags: string[];
  removedTags: string[];
}

/**
 * Analyze a recipe and generate relevant tags using AI
 */
async function analyzeRecipeTags(
  openai: OpenAI,
  recipe: any
): Promise<string[]> {
  // Collect all recipe content for analysis
  const ingredients = recipe.ingredients.map((ing: any) => ing.name).join(', ');
  const instructions = recipe.instructions
    .map((inst: any) => inst.text)
    .join(' ');
  const categories = recipe.categories.map((cat: any) => cat.category).join(', ');
  const veganTypes = recipe.veganTypes.map((vt: any) => vt.veganType).join(', ');
  const currentTags = recipe.tags.map((tag: any) => tag.tag).join(', ');

  const analysisPrompt = `You are a recipe tagging expert. Analyze this vegan recipe and suggest relevant tags for better searchability.

Recipe Title: "${recipe.title}"
Description: "${recipe.description || ''}"
Categories: ${categories}
Vegan Types: ${veganTypes}
Current Tags: ${currentTags || 'none'}
Prep Time: ${recipe.prepTime} minutes
Cook Time: ${recipe.cookTime} minutes
Total Time: ${recipe.totalTime} minutes
Difficulty: ${recipe.difficulty}
Servings: ${recipe.servings}

Ingredients: ${ingredients}

Instructions Summary: ${instructions.substring(0, 500)}${instructions.length > 500 ? '...' : ''}

${recipe.ingredientNotes ? `Ingredient Notes: ${recipe.ingredientNotes}` : ''}

Generate 10-20 relevant tags that would help users find this recipe. Consider:
1. **Key Ingredients**: Main ingredients (e.g., "chickpea", "quinoa", "tofu", "mushroom")
2. **Cooking Methods**: How it's prepared (e.g., "baked", "stir-fry", "one-pot", "no-cook")
3. **Cuisine Types**: Cultural origins (e.g., "italian", "mexican", "asian", "mediterranean")
4. **Meal Types**: When it's eaten (e.g., "breakfast", "lunch", "dinner", "snack", "dessert")
5. **Dietary Attributes**: Special diets (e.g., "gluten-free", "nut-free", "oil-free", "high-protein")
6. **Flavor Profiles**: Taste characteristics (e.g., "spicy", "sweet", "savory", "umami", "tangy")
7. **Time Attributes**: Quickness (e.g., "quick", "15-minute", "30-minute", "meal-prep")
8. **Texture/Type**: Dish characteristics (e.g., "creamy", "crispy", "soup", "salad", "bowl")
9. **Occasion**: When to serve (e.g., "weeknight", "weekend", "party", "holiday")
10. **Health Focus**: Nutritional benefits (e.g., "high-fiber", "protein-rich", "low-calorie")

Return a JSON object with a "tags" array containing tag strings, lowercase, hyphenated (e.g., ["chickpea", "curry", "one-pot", "30-minute", "gluten-free"]).
Do not include existing tags unless they're highly relevant.
Focus on tags that improve searchability and discovery.

Example response format:
{"tags": ["tag1", "tag2", "tag3", ...]}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a recipe tagging expert. Analyze recipes and suggest relevant, searchable tags. Always return valid JSON objects with a "tags" array containing lowercase, hyphenated tag strings.',
        },
        {
          role: 'user',
          content: analysisPrompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3, // Lower temperature for more consistent tagging
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let responseData;
    try {
      responseData = JSON.parse(content);
    } catch (e) {
      // Try to extract JSON from markdown code blocks
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (jsonMatch) {
        responseData = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('Failed to parse tag JSON');
      }
    }

    // Extract tags from response (could be in different formats)
    let tags: string[] = [];
    if (Array.isArray(responseData)) {
      tags = responseData;
    } else if (responseData.tags && Array.isArray(responseData.tags)) {
      tags = responseData.tags;
    } else if (responseData.suggestedTags && Array.isArray(responseData.suggestedTags)) {
      tags = responseData.suggestedTags;
    } else {
      // Try to find any array in the response
      const arrayKeys = Object.keys(responseData).filter(key => Array.isArray(responseData[key]));
      if (arrayKeys.length > 0) {
        tags = responseData[arrayKeys[0]];
      }
    }

    // Normalize tags: lowercase, trim, replace spaces with hyphens
    tags = tags
      .map((tag: string) => tag.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))
      .filter((tag: string) => tag.length > 0 && tag.length <= 50) // Reasonable tag length
      .filter((tag: string, index: number, arr: string[]) => arr.indexOf(tag) === index); // Remove duplicates

    return tags;
  } catch (error: any) {
    throw new Error(`Failed to analyze recipe tags: ${error.message}`);
  }
}

/**
 * Analyze all recipes and generate tag suggestions
 */
async function analyzeAllRecipes(
  prisma: any,
  openai: OpenAI,
  logger: Logger,
  options: {
    limit?: number;
    recipeId?: string;
  }
): Promise<RecipeAnalysis[]> {
  logger.log('📊 Loading recipes from database...');

  // Build query
  const where: any = {};
  if (options.recipeId) {
    where.id = options.recipeId;
  }

  const recipes = await prisma.recipe.findMany({
    where,
    include: {
      ingredients: {
        orderBy: { orderIndex: 'asc' },
      },
      instructions: {
        orderBy: { step: 'asc' },
      },
      categories: true,
      veganTypes: true,
      tags: true,
    },
    take: options.limit,
    orderBy: { datePublished: 'desc' },
  });

  logger.log(`   ✅ Loaded ${recipes.length} recipe(s) to analyze\n`);

  const analyses: RecipeAnalysis[] = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    logger.log(`[${i + 1}/${recipes.length}] Analyzing: "${recipe.title}"`);

    try {
      const currentTags = recipe.tags.map((tag: any) => tag.tag);
      const suggestedTags = await analyzeRecipeTags(openai, recipe);

      // Determine new tags (tags not already present)
      const newTags = suggestedTags.filter(
        (tag: string) => !currentTags.includes(tag)
      );

      // Keep existing tags that are still relevant (in suggested tags)
      const keptTags = currentTags.filter((tag: string) =>
        suggestedTags.includes(tag)
      );

      // Tags to remove (existing tags not in suggestions)
      const removedTags = currentTags.filter(
        (tag: string) => !suggestedTags.includes(tag)
      );

      // Final tags: kept existing + new tags
      const finalTags = [...keptTags, ...newTags];

      analyses.push({
        recipeId: recipe.id,
        title: recipe.title,
        currentTags,
        suggestedTags,
        newTags,
        removedTags,
      });

      logger.success(
        `   ✅ Generated ${suggestedTags.length} tags (${newTags.length} new, ${keptTags.length} kept, ${removedTags.length} to remove)`
      );
      if (newTags.length > 0) {
        logger.log(`   📝 New tags: ${newTags.join(', ')}`);
      }
      if (removedTags.length > 0) {
        logger.warn(`   🗑️  Tags to remove: ${removedTags.join(', ')}`);
      }
    } catch (error: any) {
      logger.error(`Failed to analyze "${recipe.title}": ${error.message}`);
      analyses.push({
        recipeId: recipe.id,
        title: recipe.title,
        currentTags: recipe.tags.map((tag: any) => tag.tag),
        suggestedTags: [],
        newTags: [],
        removedTags: [],
      });
    }

    logger.log(''); // Empty line for readability
  }

  return analyses;
}

/**
 * Update recipe tags in database
 */
async function updateRecipeTags(
  prisma: any,
  logger: Logger,
  analysis: RecipeAnalysis
): Promise<void> {
  const { recipeId, suggestedTags, currentTags, newTags, removedTags } = analysis;

  // Remove tags that are no longer relevant
  if (removedTags.length > 0) {
    await prisma.recipeTag.deleteMany({
      where: {
        recipeId,
        tag: { in: removedTags },
      },
    });
    logger.log(`   🗑️  Removed ${removedTags.length} tag(s): ${removedTags.join(', ')}`);
  }

  // Add new tags
  if (newTags.length > 0) {
    await prisma.recipeTag.createMany({
      data: newTags.map((tag: string) => ({
        recipeId,
        tag,
      })),
      skipDuplicates: true,
    });
    logger.log(`   ➕ Added ${newTags.length} tag(s): ${newTags.join(', ')}`);
  }
}

/**
 * Print analysis report
 */
function printReport(
  logger: Logger,
  analyses: RecipeAnalysis[],
  isDryRun: boolean
): void {
  logger.separator();
  logger.log('📋 TAG ANALYSIS REPORT');
  logger.separator();
  logger.log('');

  const totalRecipes = analyses.length;
  const totalNewTags = analyses.reduce((sum, a) => sum + a.newTags.length, 0);
  const totalRemovedTags = analyses.reduce((sum, a) => sum + a.removedTags.length, 0);
  const totalKeptTags = analyses.reduce(
    (sum, a) => sum + a.currentTags.filter((t) => a.suggestedTags.includes(t)).length,
    0
  );

  logger.log(`📊 Summary:`);
  logger.log(`   Recipes analyzed: ${totalRecipes}`);
  logger.log(`   New tags to add: ${totalNewTags}`);
  logger.log(`   Tags to keep: ${totalKeptTags}`);
  logger.log(`   Tags to remove: ${totalRemovedTags}`);
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
    logger.log(`   Current tags (${analysis.currentTags.length}): ${analysis.currentTags.join(', ') || 'none'}`);
    logger.log(`   Suggested tags (${analysis.suggestedTags.length}): ${analysis.suggestedTags.join(', ')}`);

    if (analysis.newTags.length > 0) {
      logger.success(`   ➕ New tags (${analysis.newTags.length}): ${analysis.newTags.join(', ')}`);
    }

    if (analysis.removedTags.length > 0) {
      logger.warn(`   🗑️  Tags to remove (${analysis.removedTags.length}): ${analysis.removedTags.join(', ')}`);
    }

    if (analysis.newTags.length === 0 && analysis.removedTags.length === 0) {
      logger.log(`   ✅ No changes needed`);
    }
  }

  logger.log('');
  logger.separator();
  if (isDryRun) {
    logger.log(`\n🔍 DRY RUN MODE: No tags were updated.`);
    logger.log(`   To actually update tags, run:`);
    logger.log(`   npm run analyze-tags -- --execute\n`);
  } else {
    logger.log(`\n⚠️  EXECUTE MODE: Tags will be updated in the database.\n`);
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
  const logger = new Logger('Recipe Tag Analysis', 'analyze-tags');

  if (!isDryRun && !isExecute) {
    logger.warn('No mode specified. Running in DRY RUN mode by default.\n');
  }

  logger.log('\n🏷️  Recipe Tag Analysis Tool');
  logger.separator();
  logger.log(`Mode: ${isDryRun ? '🔍 DRY RUN (no changes will be made)' : '⚠️  EXECUTE (tags will be updated)'}`);
  if (limit) {
    logger.log(`Limit: Analyzing first ${limit} recipes`);
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

    // Analyze recipes
    logger.log('🔍 Starting recipe analysis...');
    const analyses = await analyzeAllRecipes(prisma, openai, logger, {
      limit,
      recipeId,
    });

    // Print report
    logger.log('📋 Generating analysis report...');
    printReport(logger, analyses, isDryRun);

    // Update tags if not dry run
    if (!isDryRun) {
      logger.log('💾 Updating tags in database...');
      let updatedCount = 0;
      let errorCount = 0;

      for (const analysis of analyses) {
        try {
          await updateRecipeTags(prisma, logger, analysis);
          updatedCount++;
        } catch (error: any) {
          logger.error(`Failed to update tags for "${analysis.title}": ${error.message}`);
          errorCount++;
        }
      }

      logger.log('');
      logger.log(`📊 Update Summary:`);
      logger.log(`   Recipes updated: ${updatedCount}`);
      if (errorCount > 0) {
        logger.warn(`   Errors: ${errorCount}`);
      }
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

export { main as analyzeRecipeTags };

