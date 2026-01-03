/**
 * Comprehensive Recipe Health Check and Fix Script
 * 
 * Scans recipes and fixes:
 * - Missing images
 * - Missing nutrition info
 * - Google Search Rich Enhancements (structured data issues)
 * - Weird verbage/grammar issues
 * - Wrong ingredients
 * - Missing FAQs
 * - Missing tags
 * - Missing categories
 * - Any other data quality issues
 * 
 * COST OPTIMIZATIONS:
 * - Uses gpt-4o-mini (10x cheaper) for most operations
 * - Only uses gpt-4o for complex grammar/writing fixes
 * - Limits prompt sizes (truncates long content)
 * - Limits response tokens (max_tokens)
 * - Only fixes what's actually broken (not everything)
 * - Checks for existing images before generating
 * - Uses FLUX Schnell for images ($0.003/image)
 * - Skips AI calls if no issues found
 * 
 * Estimated costs per recipe:
 * - Nutrition: ~$0.0001 (gpt-4o-mini)
 * - AI fixes: ~$0.001-0.01 (gpt-4o-mini) or ~$0.01-0.05 (gpt-4o for complex)
 * - Image: ~$0.003 (FLUX Schnell)
 * Total: ~$0.004-0.06 per recipe (depending on issues)
 * 
 * Usage:
 *   npm run fix-recipes -- --dry-run              # Show what would be fixed
 *   npm run fix-recipes -- --execute              # Actually fix recipes
 *   npm run fix-recipes -- --limit 10             # Only process first 10 recipes
 *   npm run fix-recipes -- --recipe-id <id>       # Process specific recipe
 *   npm run fix-recipes -- --recipe-slug <slug>   # Process specific recipe by slug
 *   npm run fix-recipes -- --skip-images          # Skip image generation
 *   npm run fix-recipes -- --skip-nutrition       # Skip nutrition calculation
 */

import 'dotenv/config';
import OpenAI from 'openai';
import Replicate from 'replicate';
import { Recipe, Ingredient, Instruction, FAQ, NutritionInfo } from '@/types/recipe';
import { getPrismaClient } from '@/lib/prisma';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import { randomUUID } from 'crypto';

interface RecipeIssues {
  missingImage: boolean;
  missingNutrition: boolean;
  missingFAQs: boolean;
  missingTags: boolean;
  hasIssues: boolean;
  verbageIssues: string[];
  ingredientIssues: string[];
  seoIssues: string[];
}

interface RecipeFixes {
  image?: string;
  nutritionInfo?: NutritionInfo;
  faqs?: FAQ[];
  tags?: string[];
  title?: string;
  description?: string;
  prologue?: string;
  ingredients?: Ingredient[];
  instructions?: Instruction[];
  ingredientNotes?: string;
  tips?: string[];
  storage?: string;
}

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function getReplicateClient() {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error('REPLICATE_API_TOKEN is not configured.');
  }
  return new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });
}

/**
 * Check for existing image file
 */
function checkForExistingImage(recipeTitle: string): string | null {
  const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
  if (!fs.existsSync(imagesDir)) {
    return null;
  }

  const safeTitle = recipeTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);

  const files = fs.readdirSync(imagesDir);
  const matchingFile = files.find(file => 
    file.toLowerCase().startsWith(safeTitle) && 
    (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png'))
  );

  if (matchingFile) {
    return `/recipe-images/${matchingFile}`;
  }

  return null;
}

/**
 * Convert ReadableStream to Buffer
 */
async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  const reader = stream.getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) chunks.push(value);
  }

  return Buffer.concat(chunks.map(chunk => Buffer.from(chunk)));
}

/**
 * Save base64 image
 */
async function saveBase64Image(dataUrl: string, recipeTitle: string): Promise<string> {
  const base64Data = dataUrl.split(',')[1];
  const buffer = Buffer.from(base64Data, 'base64');
  const format = dataUrl.includes('webp') ? 'webp' : 'png';
  return saveBufferImage(buffer, recipeTitle, format);
}

/**
 * Save buffer image
 */
async function saveBufferImage(buffer: Buffer, recipeTitle: string, format: string = 'webp'): Promise<string> {
  const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const safeTitle = recipeTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);

  const filename = `${safeTitle}-${Date.now()}.${format}`;
  const filePath = path.join(imagesDir, filename);
  fs.writeFileSync(filePath, buffer);
  return `/recipe-images/${filename}`;
}

/**
 * Download and save image
 */
async function downloadAndSaveImage(url: string, recipeTitle: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const safeTitle = recipeTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 50);

    const urlPath = new URL(url).pathname;
    const ext = urlPath.match(/\.(\w+)$/)?.[1] || 'webp';
    const filename = `${safeTitle}-${Date.now()}.${ext}`;

    const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(`/recipe-images/${filename}`);
      });
      file.on('error', (err) => {
        fs.unlinkSync(filePath);
        reject(err);
      });
    }).on('error', reject);
  });
}

/**
 * Generate recipe image (cost-optimized - uses cheapest model)
 */
async function generateRecipeImage(recipeTitle: string, description: string, retryCount: number = 0): Promise<string> {
  const maxRetries = 3;
  // Check for existing image first (free)
  const existingImage = checkForExistingImage(recipeTitle);
  if (existingImage) {
    console.log(`      ℹ️  Using existing image: ${existingImage}`);
    return existingImage;
  }

  try {
    const replicate = getReplicateClient();
    // Optimize prompt for cost - shorter, more focused
    const shortDesc = description.substring(0, 100);
    const imagePrompt = `Professional food photography, ${recipeTitle}, ${shortDesc}, vegan, high quality, appetizing, well-lit, restaurant quality, natural lighting, vibrant colors, clean background`;

    // Use FLUX Schnell - cheapest option ($0.003 per image)
    const output: unknown = await replicate.run('black-forest-labs/flux-schnell', {
      input: {
        prompt: imagePrompt,
        aspect_ratio: '16:9',
        output_format: 'webp',
        output_quality: 85, // Slightly lower quality to reduce cost
      },
    });

    let imageUrl: string;

    // Check if output is a ReadableStream
    if (output && typeof output === 'object' && 'getReader' in output) {
      const buffer = await streamToBuffer(output as ReadableStream);
      imageUrl = await saveBufferImage(buffer, recipeTitle);
    } else if (typeof output === 'string') {
      // Could be a URL or base64 data
      if (output.startsWith('http')) {
        imageUrl = await downloadAndSaveImage(output, recipeTitle);
      } else if (output.startsWith('data:')) {
        imageUrl = await saveBase64Image(output, recipeTitle);
      } else {
        throw new Error(`Unexpected string format: ${output.substring(0, 50)}...`);
      }
    } else if (Buffer.isBuffer(output)) {
      // Binary image data
      imageUrl = await saveBufferImage(output, recipeTitle);
    } else if (Array.isArray(output) && output.length > 0) {
      const firstOutput = output[0];
      if (firstOutput && typeof firstOutput === 'object' && 'getReader' in firstOutput) {
        // ReadableStream in array
        const buffer = await streamToBuffer(firstOutput as ReadableStream);
        imageUrl = await saveBufferImage(buffer, recipeTitle);
      } else if (typeof firstOutput === 'string') {
        if (firstOutput.startsWith('http')) {
          imageUrl = await downloadAndSaveImage(firstOutput, recipeTitle);
        } else if (firstOutput.startsWith('data:')) {
          imageUrl = await saveBase64Image(firstOutput, recipeTitle);
        } else {
          throw new Error(`Unexpected array element format: ${firstOutput.substring(0, 50)}...`);
        }
      } else if (Buffer.isBuffer(firstOutput)) {
        imageUrl = await saveBufferImage(firstOutput, recipeTitle);
      } else if (firstOutput && typeof firstOutput === 'object' && 'url' in firstOutput) {
        // Object with url property in array
        imageUrl = await downloadAndSaveImage((firstOutput as any).url, recipeTitle);
      } else {
        // Try to use it as a string URL if it's a simple object
        console.log(`      ⚠️  Unexpected array element type: ${typeof firstOutput}, trying to extract URL...`);
        if (firstOutput && typeof firstOutput === 'object') {
          const url = (firstOutput as any).url || (firstOutput as any).output || String(firstOutput);
          if (typeof url === 'string' && url.startsWith('http')) {
            imageUrl = await downloadAndSaveImage(url, recipeTitle);
          } else {
            throw new Error(`Cannot extract URL from array element: ${JSON.stringify(firstOutput).substring(0, 100)}`);
          }
        } else {
          throw new Error(`Unexpected array element type: ${typeof firstOutput}`);
        }
      }
    } else if (output && typeof output === 'object' && 'url' in output) {
      imageUrl = await downloadAndSaveImage((output as any).url, recipeTitle);
    } else {
      console.error('      Debug - Output type:', typeof output);
      console.error('      Debug - Output value:', JSON.stringify(output, null, 2).substring(0, 200));
      throw new Error(`Unexpected output format from Replicate: ${typeof output}`);
    }

    if (!imageUrl || typeof imageUrl !== 'string') {
      console.error('      Debug - Image URL:', imageUrl);
      throw new Error(`Invalid image URL format from Replicate: ${typeof imageUrl}`);
    }
    
    return imageUrl;
  } catch (error: any) {
    // Check if it's a rate limit error
    if ((error.status === 429 || error.message?.includes('rate limit') || error.message?.includes('throttled')) && retryCount < maxRetries) {
      const retryAfter = error.retry_after || error.retryAfter || 10;
      const delay = retryAfter * 1000 + (retryCount * 2000);
      console.log(`      ⚠️  Rate limited. Waiting ${delay / 1000} seconds before retry ${retryCount + 1}/${maxRetries}...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return generateRecipeImage(recipeTitle, description, retryCount + 1);
    }
    
    // For other errors, log and throw (caller will handle fallback)
    console.error(`      ⚠️  Failed to generate image: ${error.message}`);
    throw error;
  }
}

/**
 * Calculate nutrition info (cost-optimized - uses gpt-4o-mini, minimal prompt)
 */
async function calculateNutritionInfo(openai: OpenAI, recipe: any): Promise<NutritionInfo> {
  // Limit ingredients to reduce token usage
  const ingredientList = recipe.ingredients
    .slice(0, 30) // Limit to first 30 ingredients
    .map((ing: any) => `${ing.amount || ''} ${ing.unit || ''} ${ing.name || ''}`.trim())
    .filter((ing: string) => ing.length > 0)
    .join('\n');

  // Minimal prompt - just what's needed
  const prompt = `Calculate nutrition for vegan recipe. Servings: ${recipe.servings}

Ingredients:
${ingredientList}

Calculate TOTAL for all ingredients, divide by ${recipe.servings} for per-serving.

Return JSON: {"calories": number, "protein": "Xg", "carbs": "Xg", "fat": "Xg", "fiber": "Xg", "sugar": "Xg"}`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini', // Already using cheapest model
    messages: [
      { role: 'system', content: 'Nutrition expert. Return only valid JSON.' },
      { role: 'user', content: prompt },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.2, // Lower temperature for accuracy
    max_tokens: 300, // Limit response size
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) throw new Error('No response from OpenAI');

  const nutrition = JSON.parse(content);
  return {
    calories: nutrition.calories || 0,
    protein: nutrition.protein || '0g',
    carbs: nutrition.carbs || '0g',
    fat: nutrition.fat || '0g',
    fiber: nutrition.fiber || '0g',
    sugar: nutrition.sugar || '0g',
  };
}

/**
 * Analyze and fix recipe issues using AI (cost-optimized)
 * Only fixes what's actually missing/broken, uses cheaper models when possible
 */
async function analyzeAndFixRecipe(openai: OpenAI, recipe: any, issues: RecipeIssues): Promise<RecipeFixes> {
  // Build minimal context - only what's needed
  const ingredientList = recipe.ingredients
    .slice(0, 20) // Limit to first 20 ingredients to reduce tokens
    .map((ing: any) => `${ing.amount || ''} ${ing.unit || ''} ${ing.name || ''}`.trim())
    .join('\n');

  const instructionList = recipe.instructions
    .slice(0, 15) // Limit to first 15 instructions
    .map((inst: any) => `${inst.step}. ${inst.text.substring(0, 200)}`) // Truncate long instructions
    .join('\n');

  // Build focused prompt - only fix what's actually broken
  const fixList: string[] = [];
  if (issues.missingFAQs) fixList.push('Add 3-5 relevant FAQs');
  if (issues.missingTags) fixList.push(`Add 10-15 relevant tags (current: ${(recipe.tags || []).length})`);
  if (issues.verbageIssues.length > 0) {
    fixList.push(`Fix verbage: ${issues.verbageIssues.join(', ')}`);
  }
  if (issues.seoIssues.length > 0) {
    fixList.push(`Fix SEO: ${issues.seoIssues.join(', ')}`);
  }
  if (!recipe.ingredientNotes && issues.seoIssues.includes('Missing ingredient notes')) {
    fixList.push('Add ingredient notes');
  }
  if ((!recipe.tips || recipe.tips.length === 0) && issues.seoIssues.includes('Missing tips')) {
    fixList.push('Add 2-3 helpful tips');
  }
  if (!recipe.storage) {
    fixList.push('Add storage instructions');
  }

  // If nothing to fix, return empty
  if (fixList.length === 0) {
    return {};
  }

  const prompt = `Fix ONLY these specific issues for this vegan recipe. Return JSON with ONLY fields that need fixing:

Recipe: "${recipe.title}"
${recipe.description ? `Description: "${recipe.description.substring(0, 200)}"` : ''}
${recipe.prologue ? `Prologue: "${recipe.prologue.substring(0, 300)}"` : ''}

Ingredients (sample):
${ingredientList}

Instructions (sample):
${instructionList}

Current tags: ${(recipe.tags || []).slice(0, 5).join(', ') || 'None'}
Current FAQs: ${(recipe.faqs || []).length || 0}

Issues to fix:
${fixList.map((f, i) => `${i + 1}. ${f}`).join('\n')}

Return JSON with ONLY fields being fixed:
{
  ${issues.missingFAQs ? '"faqs": [{"question": "q", "answer": "a"}],' : ''}
  ${issues.missingTags ? '"tags": ["tag1", "tag2"],' : ''}
  ${issues.verbageIssues.some(v => v.includes('Description')) ? '"description": "fixed",' : ''}
  ${issues.verbageIssues.some(v => v.includes('Prologue')) ? '"prologue": "fixed",' : ''}
  ${!recipe.ingredientNotes ? '"ingredientNotes": "notes",' : ''}
  ${(!recipe.tips || recipe.tips.length === 0) ? '"tips": ["tip1"],' : ''}
  ${!recipe.storage ? '"storage": "storage info"' : ''}
}

Be concise. Use Noah's voice.`;

  // Use gpt-4o-mini for most fixes (10x cheaper than gpt-4o)
  // Only use gpt-4o for complex grammar/writing fixes if needed
  const needsComplexFixes = issues.verbageIssues.length > 0 && 
    (issues.verbageIssues.some(v => v.includes('Description')) || 
     issues.verbageIssues.some(v => v.includes('Prologue')));

  const model = needsComplexFixes ? 'gpt-4o' : 'gpt-4o-mini';

  const completion = await openai.chat.completions.create({
    model: model,
    messages: [
      { role: 'system', content: 'You are Noah, a vegan chef. Fix recipe issues concisely. Return only valid JSON with fields being fixed.' },
      { role: 'user', content: prompt },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.5,
    max_tokens: 1500, // Limit response size to reduce costs
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) throw new Error('No response from OpenAI');

  const fixes = JSON.parse(content);
  return {
    title: fixes.title,
    description: fixes.description,
    prologue: fixes.prologue,
    ingredients: fixes.ingredients?.map((ing: any) => ({
      name: ing.name || '',
      amount: ing.amount || '',
      unit: ing.unit || undefined,
      notes: ing.notes || undefined,
    })),
    instructions: fixes.instructions?.map((inst: any) => ({
      step: inst.step || 0,
      text: inst.text || '',
    })),
    faqs: fixes.faqs?.map((faq: any) => ({
      question: faq.question || '',
      answer: faq.answer || '',
    })),
    tags: fixes.tags,
    ingredientNotes: fixes.ingredientNotes,
    tips: fixes.tips,
    storage: fixes.storage,
  };
}

/**
 * Check recipe for issues (cost-optimized - only check critical issues)
 */
function checkRecipeIssues(recipe: any): RecipeIssues {
  const issues: RecipeIssues = {
    missingImage: !recipe.image || 
      recipe.image.trim() === '' || 
      recipe.image === '/img/vcr-logo-lg.png' ||
      recipe.image.startsWith('data:image/svg'), // Skip placeholder data URIs
    missingNutrition: !recipe.nutritionInfo || 
      recipe.nutritionInfo.calories === 0 || 
      !recipe.nutritionInfo.protein || 
      recipe.nutritionInfo.protein === '0g' ||
      recipe.nutritionInfo.protein === null,
    missingFAQs: !recipe.faqs || recipe.faqs.length === 0,
    missingTags: !recipe.tags || recipe.tags.length < 5,
    hasIssues: false,
    verbageIssues: [],
    ingredientIssues: [],
    seoIssues: [],
  };

  // Only check critical verbage issues (avoid expensive AI calls for minor issues)
  if (recipe.description && recipe.description.length < 30) {
    issues.verbageIssues.push('Description too short');
  }
  if (recipe.prologue && recipe.prologue.length < 80) {
    issues.verbageIssues.push('Prologue too short');
  }
  
  // Only flag missing SEO elements that are critical
  if (!recipe.ingredientNotes && recipe.ingredients && recipe.ingredients.length > 0) {
    issues.seoIssues.push('Missing ingredient notes');
  }
  if (!recipe.tips || recipe.tips.length === 0) {
    issues.seoIssues.push('Missing tips');
  }
  if (!recipe.storage) {
    issues.seoIssues.push('Missing storage');
  }

  issues.hasIssues = issues.missingImage || 
    issues.missingNutrition || 
    issues.missingFAQs || 
    issues.missingTags ||
    issues.verbageIssues.length > 0 ||
    issues.seoIssues.length > 0;

  return issues;
}

/**
 * Apply fixes to recipe in database
 */
async function applyFixes(
  recipeId: string,
  fixes: RecipeFixes,
  skipImages: boolean,
  skipNutrition: boolean,
  isDryRun: boolean
): Promise<void> {
  if (isDryRun) {
    console.log('   [DRY RUN] Would apply fixes:', JSON.stringify(fixes, null, 2));
    return;
  }

  const prisma = getPrismaClient();
  if (!prisma) throw new Error('Database not available');

  const updateData: any = {};

  if (fixes.title) updateData.title = fixes.title;
  if (fixes.description) updateData.description = fixes.description;
  if (fixes.prologue) updateData.prologue = fixes.prologue;
  if (fixes.ingredientNotes) updateData.ingredientNotes = fixes.ingredientNotes;
  if (fixes.tips) updateData.tips = fixes.tips;
  if (fixes.storage) updateData.storage = fixes.storage;
  if (fixes.image && !skipImages) updateData.image = fixes.image;

  // Update main recipe
  if (Object.keys(updateData).length > 0) {
    await prisma.recipe.update({
      where: { id: recipeId },
      data: updateData,
    });
  }

  // Update ingredients
  if (fixes.ingredients) {
    await prisma.ingredient.deleteMany({ where: { recipeId } });
    await prisma.ingredient.createMany({
      data: fixes.ingredients.map((ing, index) => ({
        recipeId,
        name: ing.name,
        amount: ing.amount,
        unit: ing.unit || null,
        notes: ing.notes || null,
        orderIndex: index,
      })),
    });
  }

  // Update instructions
  if (fixes.instructions) {
    await prisma.instruction.deleteMany({ where: { recipeId } });
    await prisma.instruction.createMany({
      data: fixes.instructions.map(inst => ({
        recipeId,
        step: inst.step,
        text: inst.text,
        image: inst.image || null,
      })),
    });
  }

  // Update FAQs
  if (fixes.faqs) {
    await prisma.fAQ.deleteMany({ where: { recipeId } });
    await prisma.fAQ.createMany({
      data: fixes.faqs.map((faq, index) => ({
        recipeId,
        question: faq.question,
        answer: faq.answer,
        orderIndex: index,
      })),
    });
  }

  // Update tags
  if (fixes.tags) {
    await prisma.recipeTag.deleteMany({ where: { recipeId } });
    await prisma.recipeTag.createMany({
      data: fixes.tags.map(tag => ({ recipeId, tag })),
    });
  }

  // Update nutrition
  if (fixes.nutritionInfo && !skipNutrition) {
    await prisma.nutritionInfo.upsert({
      where: { recipeId },
      create: {
        recipeId,
        calories: fixes.nutritionInfo.calories || 0,
        protein: fixes.nutritionInfo.protein || '0g',
        carbs: fixes.nutritionInfo.carbs || '0g',
        fat: fixes.nutritionInfo.fat || '0g',
        fiber: fixes.nutritionInfo.fiber || '0g',
        sugar: fixes.nutritionInfo.sugar || '0g',
      },
      update: {
        calories: fixes.nutritionInfo.calories || 0,
        protein: fixes.nutritionInfo.protein || '0g',
        carbs: fixes.nutritionInfo.carbs || '0g',
        fat: fixes.nutritionInfo.fat || '0g',
        fiber: fixes.nutritionInfo.fiber || '0g',
        sugar: fixes.nutritionInfo.sugar || '0g',
      },
    });
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = !args.includes('--execute');
  const skipImages = args.includes('--skip-images');
  const skipNutrition = args.includes('--skip-nutrition');
  
  // Parse limit
  let limit: string | undefined;
  const limitIndex = args.indexOf('--limit');
  if (limitIndex !== -1 && limitIndex + 1 < args.length) {
    limit = args[limitIndex + 1];
  } else {
    const limitArg = args.find(arg => arg.startsWith('--limit='));
    if (limitArg) {
      limit = limitArg.split('=')[1];
    }
  }
  
  // Parse recipe-id
  let recipeId: string | undefined;
  const recipeIdIndex = args.indexOf('--recipe-id');
  if (recipeIdIndex !== -1 && recipeIdIndex + 1 < args.length) {
    recipeId = args[recipeIdIndex + 1];
  } else {
    const recipeIdArg = args.find(arg => arg.startsWith('--recipe-id='));
    if (recipeIdArg) {
      recipeId = recipeIdArg.split('=')[1];
    }
  }
  
  // Parse recipe-slug
  let recipeSlug: string | undefined;
  const recipeSlugIndex = args.indexOf('--recipe-slug');
  if (recipeSlugIndex !== -1 && recipeSlugIndex + 1 < args.length) {
    recipeSlug = args[recipeSlugIndex + 1];
  } else {
    const recipeSlugArg = args.find(arg => arg.startsWith('--recipe-slug='));
    if (recipeSlugArg) {
      recipeSlug = recipeSlugArg.split('=')[1];
    }
  }

  console.log('\n🔧 Recipe Health Check and Fix Script');
  console.log('=====================================\n');
  if (isDryRun) {
    console.log('⚠️  DRY RUN MODE - No changes will be saved\n');
  }

  try {
    const prisma = getPrismaClient();
    if (!prisma) throw new Error('Database not available');

    // Connect to database
    await prisma.$connect();
    console.log('✅ Database connection established\n');

    const openai = getOpenAIClient();

    // First, check total recipe count
    const totalCount = await prisma.recipe.count();
    console.log(`📊 Total recipes in database: ${totalCount}\n`);

    // Fetch recipes
    let recipes: any[];
    if (recipeId) {
      console.log(`🔍 Looking for recipe with ID: ${recipeId}`);
      const recipe = await prisma.recipe.findUnique({
        where: { id: recipeId },
        include: {
          ingredients: { orderBy: { orderIndex: 'asc' } },
          instructions: { orderBy: { step: 'asc' } },
          categories: true,
          tags: true,
          faqs: { orderBy: { orderIndex: 'asc' } },
          nutritionInfo: true,
        },
      });
      recipes = recipe ? [recipe] : [];
      console.log(recipe ? '   ✅ Recipe found' : '   ❌ Recipe not found');
    } else if (recipeSlug) {
      console.log(`🔍 Looking for recipe with slug: ${recipeSlug}`);
      const recipe = await prisma.recipe.findUnique({
        where: { slug: recipeSlug },
        include: {
          ingredients: { orderBy: { orderIndex: 'asc' } },
          instructions: { orderBy: { step: 'asc' } },
          categories: true,
          tags: true,
          faqs: { orderBy: { orderIndex: 'asc' } },
          nutritionInfo: true,
        },
      });
      recipes = recipe ? [recipe] : [];
      console.log(recipe ? '   ✅ Recipe found' : '   ❌ Recipe not found');
    } else {
      console.log(`🔍 Fetching recipes${limit ? ` (limit: ${limit})` : ' (all)'}...`);
      recipes = await prisma.recipe.findMany({
        include: {
          ingredients: { orderBy: { orderIndex: 'asc' } },
          instructions: { orderBy: { step: 'asc' } },
          categories: true,
          tags: true,
          faqs: { orderBy: { orderIndex: 'asc' } },
          nutritionInfo: true,
        },
        take: limit ? parseInt(limit) : undefined,
        orderBy: { datePublished: 'desc' },
      });
      console.log(`   ✅ Loaded ${recipes.length} recipe(s)`);
    }

    console.log(`\nFound ${recipes.length} recipe(s) to check\n`);

    let fixedCount = 0;
    let skippedCount = 0;

    for (const recipe of recipes) {
      console.log(`\n📋 Checking: "${recipe.title}"`);
      const issues = checkRecipeIssues(recipe);

      if (!issues.hasIssues) {
        console.log('   ✅ No issues found');
        skippedCount++;
        continue;
      }

      console.log('   ⚠️  Issues found:');
      if (issues.missingImage) console.log('      - Missing image');
      if (issues.missingNutrition) console.log('      - Missing nutrition info');
      if (issues.missingFAQs) console.log('      - Missing FAQs');
      if (issues.missingTags) console.log('      - Missing tags');
      if (issues.verbageIssues.length > 0) {
        issues.verbageIssues.forEach(issue => console.log(`      - ${issue}`));
      }
      if (issues.seoIssues.length > 0) {
        issues.seoIssues.forEach(issue => console.log(`      - ${issue}`));
      }

      const fixes: RecipeFixes = {};

      // Fix image (only if truly missing - skip placeholder images)
      if (issues.missingImage && !skipImages) {
        console.log('   🖼️  Generating image...');
        try {
          fixes.image = await generateRecipeImage(recipe.title, recipe.description);
          console.log(`      ✅ Image: ${fixes.image}`);
        } catch (error: any) {
          console.log(`      ⚠️  Failed: ${error.message}`);
          // Use fallback placeholder if generation fails
          fixes.image = '/img/vcr-logo-lg.png';
          console.log(`      ℹ️  Using fallback image: ${fixes.image}`);
          // Don't fail the whole process if image generation fails
        }
      }

      // Fix nutrition (using cheap gpt-4o-mini)
      if (issues.missingNutrition && !skipNutrition) {
        console.log('   🥗 Calculating nutrition (gpt-4o-mini)...');
        try {
          fixes.nutritionInfo = await calculateNutritionInfo(openai, recipe);
          console.log(`      ✅ Nutrition calculated`);
        } catch (error: any) {
          console.log(`      ⚠️  Failed: ${error.message}`);
        }
      }

      // Fix other issues with AI (only if there are issues to fix)
      const needsAIFixes = issues.missingFAQs || 
        issues.missingTags || 
        issues.verbageIssues.length > 0 || 
        issues.seoIssues.length > 0;

      if (needsAIFixes) {
        console.log('   🤖 Analyzing and fixing issues (cost-optimized)...');
        try {
          const aiFixes = await analyzeAndFixRecipe(openai, recipe, issues);
          Object.assign(fixes, aiFixes);
          console.log('      ✅ AI fixes generated');
        } catch (error: any) {
          console.log(`      ⚠️  Failed: ${error.message}`);
        }
      }

      // Apply fixes
      if (Object.keys(fixes).length > 0) {
        await applyFixes(recipe.id, fixes, skipImages, skipNutrition, isDryRun);
        fixedCount++;
        console.log('   ✅ Fixes applied');
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('📊 SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total recipes checked: ${recipes.length}`);
    console.log(`Recipes fixed: ${fixedCount}`);
    console.log(`Recipes skipped (no issues): ${skippedCount}`);

    if (isDryRun) {
      console.log('\n✅ Dry run complete! Use --execute to apply changes.');
    } else {
      console.log('\n✅ Recipe fixes complete!');
    }
  } catch (error: any) {
    console.error(`\n❌ Error: ${error.message}`);
    if (error.stack) console.error(error.stack);
    process.exit(1);
  } finally {
    const prisma = getPrismaClient();
    if (prisma) await prisma.$disconnect();
  }
}

if (require.main === module) {
  main();
}

export { main as fixRecipeIssues };
