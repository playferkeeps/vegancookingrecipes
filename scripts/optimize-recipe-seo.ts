/**
 * SEO Optimization Script for Recipes
 * 
 * This script optimizes recipes for high-converting SEO content. It can be:
 * 1. Called by the recipe generator to enhance new recipes
 * 2. Run standalone on existing recipes to improve their SEO
 * 
 * Usage:
 *   npm run optimize-seo -- --recipe-id <id>        # Optimize specific recipe
 *   npm run optimize-seo -- --limit 10                # Optimize first 10 recipes
 *   npm run optimize-seo -- --execute                # Actually update recipes (default is dry-run)
 *   npm run optimize-seo -- --all                    # Optimize all recipes
 * 
 * SEO Optimizations Applied:
 * - Title optimization (keyword-rich, compelling, 50-60 chars)
 * - Meta description optimization (150-160 chars, compelling, keyword-rich)
 * - Prologue enhancement (SEO-optimized intro, 200-300 words)
 * - FAQ optimization (for featured snippets)
 * - Tag enhancement (relevant, searchable keywords)
 * - Content length optimization
 * - Keyword density optimization
 * - Conversion-focused language
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

interface SEOOptimizations {
  title?: string;
  description?: string;
  prologue?: string;
  tags?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  ingredientNotes?: string;
}

/**
 * Optimize recipe for high-converting SEO using AI
 * Works with both Recipe objects (from generator) and database records (from Prisma)
 */
export async function optimizeRecipeSEO(
  openai: OpenAI,
  recipe: any,
  logger?: Logger
): Promise<SEOOptimizations> {
  // Build context about the recipe - handle both Recipe objects and Prisma records
  const ingredientList = (recipe.ingredients || [])
    .map((ing: any) => {
      if (typeof ing === 'string') return ing;
      return `${ing.amount || ''} ${ing.unit || ''} ${ing.name || ''}`.trim();
    })
    .filter((ing: string) => ing.length > 0)
    .join(', ');

  // Handle categories - can be array of strings or array of objects with .category property
  const categories = Array.isArray(recipe.category) 
    ? recipe.category.join(', ')
    : (recipe.categories?.map((c: any) => typeof c === 'string' ? c : c.category).join(', ') || '');
  
  // Handle vegan types - can be array of strings or array of objects with .veganType property
  const veganTypes = Array.isArray(recipe.veganType)
    ? recipe.veganType.join(', ')
    : (recipe.veganTypes?.map((vt: any) => typeof vt === 'string' ? vt : vt.veganType).join(', ') || '');
  
  // Handle tags - can be array of strings or array of objects with .tag property
  const existingTags = Array.isArray(recipe.tags)
    ? recipe.tags.filter((t: any) => typeof t === 'string').join(', ')
    : (recipe.tags?.map((t: any) => typeof t === 'string' ? t : t.tag).join(', ') || '');

  const prompt = `You are an SEO expert specializing in high-converting recipe content. Optimize this vegan recipe for maximum search visibility and conversion.

Current Recipe:
- Title: "${recipe.title}"
- Description: "${recipe.description}"
- Prologue: "${recipe.prologue || 'N/A'}"
- Category: ${categories}
- Vegan Type: ${veganTypes}
- Servings: ${recipe.servings}
- Prep Time: ${recipe.prepTime} min
- Cook Time: ${recipe.cookTime} min
- Difficulty: ${recipe.difficulty}
- Ingredients: ${ingredientList}
- Existing Tags: ${existingTags}

SEO OPTIMIZATION REQUIREMENTS:

1. TITLE OPTIMIZATION (50-60 characters):
   - Include primary keyword (recipe name) at the beginning
   - Add compelling modifiers (e.g., "Easy", "Best", "Perfect", "Delicious")
   - Include "Vegan" if not already present
   - Make it click-worthy and search-friendly
   - Example: "Easy Vegan Chocolate Chip Cookies Recipe" (not "Chocolate Chip Cookies")

2. DESCRIPTION OPTIMIZATION (150-160 characters):
   - Start with primary keyword
   - Include compelling benefit or unique selling point
   - Add call-to-action or urgency
   - Include relevant secondary keywords naturally
   - Make it irresistible to click
   - Example: "Make the best vegan chocolate chip cookies in just 20 minutes! Soft, chewy, and perfectly sweet. This easy recipe uses simple ingredients you already have."

3. PROLOGUE OPTIMIZATION (200-300 words):
   - Start with a hook that includes primary keyword
   - Answer "why this recipe" in first 2 sentences
   - Include 2-3 relevant keywords naturally
   - Add personal touch (Katie's voice)
   - Include a benefit or unique feature
   - End with transition to recipe
   - Optimize for featured snippets (answer common questions)

4. TAG ENHANCEMENT:
   - Include primary keyword variations
   - Add long-tail keywords
   - Include category and vegan type tags
   - Add seasonal/occasion tags if relevant
   - Include ingredient-based tags
   - Add difficulty and time-based tags
   - Total: 10-15 highly relevant tags

4. FAQ OPTIMIZATION (3-5 questions):
   - Target featured snippet opportunities
   - Answer common search queries
   - Include "how to", "what is", "can I" questions
   - Make answers comprehensive (50-100 words)
   - Include keywords naturally
   - Example: "How long do vegan cookies last?" with detailed answer

5. INGREDIENT NOTES ENHANCEMENT:
   - Add SEO-friendly explanations
   - Include substitution tips (for search queries)
   - Mention health benefits where relevant
   - Add storage tips for ingredients

CONVERSION OPTIMIZATION:
- Use power words: "easy", "quick", "delicious", "perfect", "best", "amazing"
- Include time/servings in descriptions when relevant
- Add urgency or scarcity (subtle)
- Emphasize benefits over features
- Use emotional language (Katie's warm voice)

Return a JSON object with this exact structure:
{
  "title": "Optimized title (50-60 chars)",
  "description": "Optimized description (150-160 chars)",
  "prologue": "Optimized prologue (200-300 words, SEO-optimized)",
  "tags": ["tag1", "tag2", "tag3", ...],
  "faqs": [
    {"question": "SEO-optimized question", "answer": "Comprehensive answer (50-100 words)"}
  ],
  "ingredientNotes": "Enhanced ingredient notes with SEO value"
}

Ensure all optimizations maintain Katie's authentic, warm voice while maximizing SEO value.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an SEO expert who optimizes recipe content for high search rankings and conversions while maintaining authentic, warm, human voice. Always return valid JSON.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.5, // Balanced creativity and consistency
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let optimizations;
    try {
      optimizations = JSON.parse(content);
    } catch (e) {
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (jsonMatch) {
        optimizations = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('Failed to parse optimizations JSON');
      }
    }

    // Validate and normalize
    return {
      title: optimizations.title && optimizations.title.length <= 70 ? optimizations.title : undefined,
      description: optimizations.description && optimizations.description.length <= 170 ? optimizations.description : undefined,
      prologue: optimizations.prologue || undefined,
      tags: Array.isArray(optimizations.tags) ? optimizations.tags.slice(0, 15) : undefined,
      faqs: Array.isArray(optimizations.faqs) ? optimizations.faqs.slice(0, 5) : undefined,
      ingredientNotes: optimizations.ingredientNotes || undefined,
    };
  } catch (error: any) {
    throw new Error(`Failed to optimize recipe SEO: ${error.message}`);
  }
}

/**
 * Find recipes to optimize
 */
async function findRecipesToOptimize(
  prisma: any,
  logger: Logger,
  options: {
    limit?: number;
    recipeId?: string;
    all?: boolean;
  }
): Promise<any[]> {
  logger.log('📊 Finding recipes to optimize...');

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
      faqs: {
        orderBy: { orderIndex: 'asc' },
      },
    },
    take: options.all ? undefined : (options.limit || 10),
    orderBy: { datePublished: 'desc' },
  });

  logger.log(`   ✅ Found ${recipes.length} recipe(s) to optimize\n`);
  return recipes;
}

/**
 * Update recipe with SEO optimizations
 */
async function updateRecipeSEO(
  prisma: any,
  logger: Logger,
  recipeId: string,
  optimizations: SEOOptimizations
): Promise<void> {
  const updateData: any = {};

  if (optimizations.title) {
    updateData.title = optimizations.title;
  }
  if (optimizations.description) {
    updateData.description = optimizations.description;
  }
  if (optimizations.prologue) {
    updateData.prologue = optimizations.prologue;
  }
  if (optimizations.ingredientNotes) {
    updateData.ingredientNotes = optimizations.ingredientNotes;
  }
  if (optimizations.tags) {
    // Delete existing tags and create new ones
    await prisma.recipeTag.deleteMany({
      where: { recipeId },
    });
    updateData.tags = {
      create: optimizations.tags.map((tag: string) => ({ tag })),
    };
  }
  if (optimizations.faqs) {
    // Delete existing FAQs and create new ones
    await prisma.faq.deleteMany({
      where: { recipeId },
    });
    updateData.faqs = {
      create: optimizations.faqs.map((faq: any, index: number) => ({
        question: faq.question,
        answer: faq.answer,
        orderIndex: index,
      })),
    };
  }

  if (Object.keys(updateData).length > 0) {
    await prisma.recipe.update({
      where: { id: recipeId },
      data: updateData,
    });
    logger.log(`   ✅ Updated SEO optimizations for recipe ID: ${recipeId}`);
  }
}

/**
 * Print optimization report
 */
function printReport(
  logger: Logger,
  recipes: any[],
  optimizations: Map<string, SEOOptimizations>,
  isDryRun: boolean
): void {
  logger.separator();
  logger.log('📋 SEO OPTIMIZATION REPORT');
  logger.separator();
  logger.log('');

  logger.log(`📊 Summary:`);
  logger.log(`   Recipes analyzed: ${recipes.length}`);
  logger.log(`   Recipes optimized: ${optimizations.size}`);
  logger.log('');

  if (recipes.length === 0) {
    logger.warn('⚠️  No recipes found to optimize');
    return;
  }

  logger.log('📝 Detailed Breakdown:');
  logger.log('');

  for (const recipe of recipes) {
    const optimization = optimizations.get(recipe.id);
    if (!optimization) {
      logger.warn(`   ⚠️  "${recipe.title}" - Failed to optimize`);
      continue;
    }

    logger.log(`\n🔹 "${recipe.title}"`);
    
    if (optimization.title && optimization.title !== recipe.title) {
      logger.log(`   Title: "${recipe.title}" → "${optimization.title}"`);
    }
    
    if (optimization.description) {
      logger.log(`   Description: ${optimization.description.substring(0, 80)}...`);
    }
    
    if (optimization.prologue) {
      logger.log(`   Prologue: ${optimization.prologue.substring(0, 100)}...`);
    }
    
    if (optimization.tags) {
      logger.log(`   Tags: ${optimization.tags.length} tags (${optimization.tags.slice(0, 5).join(', ')}...)`);
    }
    
    if (optimization.faqs) {
      logger.log(`   FAQs: ${optimization.faqs.length} questions`);
    }
  }

  logger.log('');
  logger.separator();
  if (isDryRun) {
    logger.log(`\n🔍 DRY RUN MODE: No optimizations were applied.`);
    logger.log(`   To actually apply optimizations, run:`);
    logger.log(`   npm run optimize-seo -- --execute\n`);
  } else {
    logger.log(`\n⚠️  EXECUTE MODE: SEO optimizations will be applied to ${optimizations.size} recipe(s).\n`);
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
  let all = false;

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
    } else if (args[i] === '--all') {
      all = true;
    }
  }

  // Initialize logger
  const logger = new Logger('SEO Optimizer', 'optimize-seo');

  if (!isDryRun && !isExecute) {
    logger.warn('No mode specified. Running in DRY RUN mode by default.\n');
  }

  logger.log('\n🚀 SEO Recipe Optimizer');
  logger.separator();
  logger.log(`Mode: ${isDryRun ? '🔍 DRY RUN (no changes will be made)' : '⚠️  EXECUTE (optimizations will be applied)'}`);
  if (limit) {
    logger.log(`Limit: Processing first ${limit} recipes`);
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

    // Find recipes to optimize
    logger.log('🔍 Finding recipes to optimize...');
    const recipes = await findRecipesToOptimize(prisma, logger, {
      limit,
      recipeId,
      all,
    });

    if (recipes.length === 0) {
      logger.warn('⚠️  No recipes found to optimize');
      logger.close();
      return;
    }

    // Optimize each recipe
    logger.log('🔧 Optimizing recipes for SEO...');
    const optimizations = new Map<string, SEOOptimizations>();
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      logger.log(`[${i + 1}/${recipes.length}] Optimizing: "${recipe.title}"`);

      try {
        const optimization = await optimizeRecipeSEO(openai, recipe, logger);
        optimizations.set(recipe.id, optimization);
        successCount++;

        logger.success(`   ✅ Optimized: Title, Description, Prologue, Tags, FAQs`);
      } catch (error: any) {
        logger.error(`Failed to optimize "${recipe.title}": ${error.message}`);
        errorCount++;
      }

      logger.log(''); // Empty line for readability
    }

    // Print report
    logger.log('📋 Generating report...');
    printReport(logger, recipes, optimizations, isDryRun);

    // Update recipes if not dry run
    if (!isDryRun) {
      logger.log('💾 Applying SEO optimizations to database...');
      let updatedCount = 0;

      for (const recipe of recipes) {
        const optimization = optimizations.get(recipe.id);
        if (!optimization) continue;

        try {
          await updateRecipeSEO(prisma, logger, recipe.id, optimization);
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

// optimizeRecipeSEO is already exported inline above
export { main as optimizeSEO };

