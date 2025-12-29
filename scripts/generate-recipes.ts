/**
 * Admin Tool: Recipe Generator
 * 
 * This is a pre-deployment tool to generate accurate vegan recipes using OpenAI.
 * Use this BEFORE deploying the site to generate and save recipes to category files.
 * 
 * Usage:
 *   npm run generate-recipes -- --count 50
 *   npm run generate-recipes -- --count 100
 * 
 * The tool will automatically cycle through all categories and generate recipes randomly.
 * 
 * Make sure to create a .env file in the root directory with:
 *   OPENAI_API_KEY=your_api_key_here
 */

import 'dotenv/config';
import OpenAI from 'openai';
import Replicate from 'replicate';
import { Recipe, RecipeCategory, VeganType } from '@/types/recipe';
import { generateSlug } from '../data/recipeHelpers';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured. Set it as an environment variable.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function getReplicateClient() {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error('REPLICATE_API_TOKEN is not configured. Set it as an environment variable.');
  }
  return new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });
}

/**
 * Generate an AI image for a recipe using Replicate with retry logic for rate limits
 * Uses FLUX Schnell for fast and cost-effective food photography ($3 per 1000 images)
 */
async function generateRecipeImage(recipeTitle: string, description: string, retryCount: number = 0): Promise<string> {
  const maxRetries = 5;
  const baseDelay = 10000; // 10 seconds base delay (6 requests per minute = 10 seconds between requests)
  
  try {
    const replicate = getReplicateClient();
    
    // Create a detailed prompt for food photography
    const imagePrompt = `Professional food photography of ${recipeTitle}, ${description}, vegan recipe, high quality, appetizing, well-lit, food styling, shallow depth of field, restaurant quality, food blog style, natural lighting, vibrant colors, on a clean background, professional photography`;

    console.log(`   🖼️  Generating image for "${recipeTitle}"...`);

    // Use FLUX Schnell - fastest and most cost-effective ($0.003 per image = $3 per 1000 images)
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: imagePrompt,
          aspect_ratio: "16:9", // Good for recipe hero images
          output_format: "webp", // Smaller file size
          output_quality: 90,
        }
      }
    );

    // Handle different output formats from Replicate
    let imageUrl: string;
    
    // Check if output is a ReadableStream
    if (output && typeof output === 'object' && 'getReader' in output) {
      // It's a ReadableStream - convert to buffer
      const buffer = await streamToBuffer(output as ReadableStream);
      imageUrl = await saveBufferImage(buffer, recipeTitle);
    } else if (typeof output === 'string') {
      // Could be a URL or base64 data
      if (output.startsWith('http')) {
        imageUrl = await downloadAndSaveImage(output, recipeTitle);
      } else if (output.startsWith('data:')) {
        // Base64 data URL - save it to a file
        imageUrl = await saveBase64Image(output, recipeTitle);
      } else {
        throw new Error(`Unexpected string format: ${output.substring(0, 50)}...`);
      }
    } else if (Buffer.isBuffer(output)) {
      // Binary image data - save it to a file
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
      } else {
        imageUrl = firstOutput;
      }
    } else if (output && typeof output === 'object' && 'url' in output) {
      imageUrl = await downloadAndSaveImage((output as any).url, recipeTitle);
    } else {
      console.error('   Debug - Output type:', typeof output);
      console.error('   Debug - Output value:', JSON.stringify(output, null, 2));
      throw new Error(`Unexpected output format from Replicate: ${typeof output}`);
    }

    if (!imageUrl || typeof imageUrl !== 'string') {
      console.error('   Debug - Image URL:', imageUrl);
      throw new Error(`Invalid image URL format from Replicate: ${typeof imageUrl}`);
    }
    
    console.log(`   ✅ Image generated and saved: ${imageUrl.substring(0, 60)}...`);
    
    return imageUrl;
  } catch (error: any) {
    // Check if it's a rate limit error
    if (error.status === 429 || error.message?.includes('rate limit') || error.message?.includes('throttled')) {
      const retryAfter = error.retry_after || error.retryAfter || 10; // Default to 10 seconds
      
      if (retryCount < 5) {
        const delay = retryAfter * 1000 + (retryCount * 2000); // Add extra delay for each retry
        console.log(`   ⚠️  Rate limited. Waiting ${delay / 1000} seconds before retry ${retryCount + 1}/5...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return generateRecipeImage(recipeTitle, description, retryCount + 1);
      } else {
        console.error(`   ❌ Rate limit exceeded after 5 retries. Using placeholder.`);
        // Fallback to placeholder if rate limit persists
        return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';
      }
    }
    
    console.error(`   ⚠️  Failed to generate image: ${error.message}`);
    // Fallback to placeholder if image generation fails
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';
  }
}

const ALL_CATEGORIES: RecipeCategory[] = [
  'baking',
  'savory',
  'ethnic',
  'breakfast',
  'lunch',
  'dinner',
  'dessert',
  'snack',
  'beverage',
];

// Recipe title suggestions by category
const RECIPE_TITLES_BY_CATEGORY: Record<RecipeCategory, string[]> = {
  baking: [
    'Chocolate Chip Cookies', 'Oatmeal Cookies', 'Sugar Cookies', 'Brownies', 'Blondies',
    'Banana Bread', 'Zucchini Bread', 'Pumpkin Bread', 'Cornbread', 'Blueberry Muffins',
    'Chocolate Muffins', 'Vanilla Cupcakes', 'Chocolate Cupcakes', 'Carrot Cake', 'Lemon Cake',
    'Cinnamon Rolls', 'Scones', 'Biscuits', 'Bagels', 'Donuts'
  ],
  savory: [
    'Tomato Soup', 'Lentil Soup', 'Minestrone', 'Broccoli Soup', 'Vegetable Stew',
    'Bean Stew', 'Mushroom Stew', 'Chickpea Stew', 'Green Bean Casserole', 'Potato Casserole',
    'Roasted Vegetables', 'Stuffed Peppers', 'Stuffed Zucchini', 'Ratatouille', 'Vegetable Curry',
    'Chickpea Curry', 'Lentil Curry', 'Potato Curry', 'Vegetable Stir Fry', 'Tofu Stir Fry'
  ],
  ethnic: [
    'Pad Thai', 'Thai Curry', 'Thai Soup', 'Indian Curry', 'Dal', 'Biryani', 'Samosas',
    'Tacos', 'Enchiladas', 'Burritos', 'Quesadillas', 'Pasta', 'Pizza', 'Risotto',
    'Fried Rice', 'Kung Pao Tofu', 'Mapo Tofu', 'Dumplings', 'Ramen', 'Sushi Rolls',
    'Teriyaki', 'Miso Soup', 'Falafel', 'Hummus', 'Baba Ganoush', 'Tabbouleh', 'Greek Salad'
  ],
  breakfast: [
    'Avocado Toast', 'Pancakes', 'Waffles', 'French Toast', 'Overnight Oats', 'Granola',
    'Smoothie Bowl', 'Chia Pudding', 'Breakfast Burrito', 'Breakfast Bowl', 'Tofu Scramble',
    'Breakfast Sandwich', 'Muffins', 'Scones', 'Bagels', 'English Muffins', 'Breakfast Cookies',
    'Energy Bars', 'Breakfast Smoothie', 'Green Smoothie', 'Breakfast Casserole', 'Breakfast Hash'
  ],
  lunch: [
    'Caesar Salad', 'Greek Salad', 'Cobb Salad', 'Quinoa Salad', 'Lentil Salad', 'Chickpea Salad',
    'Pasta Salad', 'Potato Salad', 'Sandwich', 'Wrap', 'Burrito', 'Quesadilla', 'Soup', 'Stew',
    'Chili', 'Curry', 'Bowl', 'Stir Fry', 'Fried Rice', 'Noodles', 'Pizza', 'Flatbread', 'Tacos',
    'Sushi', 'Buddha Bowl'
  ],
  dinner: [
    'Lasagna', 'Spaghetti', 'Penne', 'Fettuccine', 'Ravioli', 'Gnocchi', 'Risotto', 'Paella',
    'Shepherd\'s Pie', 'Pot Pie', 'Casserole', 'Bake', 'Stir Fry', 'Curry', 'Stew', 'Soup',
    'Tacos', 'Enchiladas', 'Burritos', 'Fajitas', 'Pizza', 'Flatbread', 'Calzone', 'Focaccia',
    'Burgers', 'Sliders', 'Meatballs', 'Meatloaf', 'Roast', 'Skewers'
  ],
  dessert: [
    'Chocolate Cake', 'Vanilla Cake', 'Carrot Cake', 'Red Velvet Cake', 'Cheesecake', 'Ice Cream',
    'Sorbet', 'Pudding', 'Mousse', 'Truffles', 'Fudge', 'Caramels', 'Cookies', 'Brownies', 'Blondies',
    'Bars', 'Tarts', 'Pies', 'Cobbler', 'Crisp', 'Crumble', 'Parfait', 'Trifle', 'Tiramisu',
    'Panna Cotta', 'Creme Brulee', 'Flan', 'Gelato', 'Frozen Yogurt', 'Nice Cream'
  ],
  snack: [
    'Trail Mix', 'Granola Bars', 'Energy Balls', 'Protein Bars', 'Crackers', 'Chips', 'Popcorn',
    'Nuts', 'Seeds', 'Dried Fruit', 'Fruit Leather', 'Veggie Chips', 'Hummus', 'Guacamole',
    'Salsa', 'Dip', 'Spread', 'Butter', 'Cheese', 'Yogurt', 'Smoothie', 'Juice', 'Tea', 'Coffee',
    'Hot Chocolate'
  ],
  beverage: [
    'Smoothie', 'Green Smoothie', 'Protein Smoothie', 'Fruit Smoothie', 'Juice', 'Green Juice',
    'Vegetable Juice', 'Fruit Juice', 'Tea', 'Herbal Tea', 'Iced Tea', 'Chai Tea', 'Coffee',
    'Cold Brew', 'Latte', 'Cappuccino', 'Hot Chocolate', 'Cocoa', 'Golden Milk', 'Turmeric Latte',
    'Lemonade', 'Limeade', 'Punch', 'Mocktail', 'Milkshake'
  ],
};

function getRandomCategory(): RecipeCategory {
  return ALL_CATEGORIES[Math.floor(Math.random() * ALL_CATEGORIES.length)];
}

function getRandomRecipeTitle(category: RecipeCategory): string {
  const titles = RECIPE_TITLES_BY_CATEGORY[category];
  return titles[Math.floor(Math.random() * titles.length)];
}

function distributeRecipesAcrossCategories(count: number): Array<{ category: RecipeCategory; title: string }> {
  const recipes: Array<{ category: RecipeCategory; title: string }> = [];
  
  // First, ensure each category gets at least one recipe
  const categories = [...ALL_CATEGORIES];
  for (let i = 0; i < Math.min(count, categories.length); i++) {
    const category = categories[i];
    recipes.push({
      category,
      title: getRandomRecipeTitle(category),
    });
  }
  
  // Then randomly distribute the remaining recipes
  for (let i = categories.length; i < count; i++) {
    const category = getRandomCategory();
    recipes.push({
      category,
      title: getRandomRecipeTitle(category),
    });
  }
  
  // Shuffle to randomize order
  for (let i = recipes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [recipes[i], recipes[j]] = [recipes[j], recipes[i]];
  }
  
  return recipes;
}

interface GenerateOptions {
  title: string;
  category: RecipeCategory[];
  veganType?: VeganType[];
}

async function generateRecipeWithOpenAI(options: GenerateOptions): Promise<Recipe> {
  const { title, category, veganType = ['whole-food-plant-based'] } = options;
  const openai = getOpenAIClient();

  const prompt = `Create a detailed, accurate vegan recipe for "${title}". 

Requirements:
- The recipe must be completely vegan (no animal products)
- All ingredients must be real, specific, and measurable
- Instructions must be detailed, step-by-step, and accurate
- Include realistic prep time, cook time, and servings
- Make it suitable for ${category.join(' and ')} category
- Vegan type: ${veganType.join(', ')}

Return a JSON object with this exact structure:
{
  "title": "Vegan [Recipe Name]",
  "description": "A brief, enticing description (1-2 sentences)",
  "prologue": "A detailed SEO-optimized introduction (3-4 sentences) mentioning vegancooking.recipes",
  "prepTime": number in minutes,
  "cookTime": number in minutes,
  "servings": number,
  "difficulty": "easy" | "medium" | "hard",
  "ingredients": [
    {"name": "Specific ingredient name", "amount": "exact amount", "unit": "unit", "notes": "optional preparation notes"}
  ],
  "instructions": [
    {"step": 1, "text": "Detailed step-by-step instruction"},
    {"step": 2, "text": "Next step..."}
  ],
  "nutritionInfo": {
    "calories": number,
    "protein": "Xg",
    "carbs": "Xg",
    "fat": "Xg",
    "fiber": "Xg",
    "sugar": "Xg"
  },
  "tags": ["relevant", "tags"],
  "ingredientNotes": "Detailed notes about key ingredients and substitutions",
  "faqs": [
    {"question": "Common question", "answer": "Detailed answer"}
  ],
  "tips": ["Helpful tip 1", "Helpful tip 2"],
  "variations": ["Variation idea 1", "Variation idea 2"],
  "storage": "Detailed storage instructions"
}

Ensure:
- All measurements are accurate and standard (cups, tbsp, tsp, oz, etc.)
- Cooking temperatures are specified (e.g., "350°F" or "175°C")
- Instructions are clear and actionable
- Times are realistic for the recipe type
- The recipe is actually cookable and accurate`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are an expert vegan chef and recipe developer. Create accurate, detailed, and tested vegan recipes. Always return valid JSON.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.7,
  });

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No response from OpenAI');
  }

  let recipeData;
  try {
    recipeData = JSON.parse(content);
  } catch (e) {
    // Try to extract JSON from markdown code blocks
    const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
    if (jsonMatch) {
      recipeData = JSON.parse(jsonMatch[1]);
    } else {
      throw new Error('Failed to parse recipe JSON');
    }
  }

  // Generate ID (starting from 9, after original 8)
  const id = String(Date.now() + Math.random());

  // Generate AI image for the recipe
  const recipeTitle = recipeData.title || title;
  const recipeDescription = recipeData.description || '';
  const imageUrl = await generateRecipeImage(recipeTitle, recipeDescription);

  const recipe: Recipe = {
    id,
    title: recipeTitle,
    slug: generateSlug(recipeTitle),
    description: recipeDescription,
    prologue: recipeData.prologue || '',
    image: imageUrl,
    prepTime: recipeData.prepTime || 15,
    cookTime: recipeData.cookTime || 20,
    totalTime: (recipeData.prepTime || 15) + (recipeData.cookTime || 20),
    servings: recipeData.servings || 4,
    difficulty: recipeData.difficulty || 'easy',
    category,
    veganType,
    ingredients: recipeData.ingredients || [],
    instructions: recipeData.instructions || [],
    nutritionInfo: recipeData.nutritionInfo,
    tags: [...(recipeData.tags || []), ...category, ...veganType],
    author: 'vegancooking.recipes',
    datePublished: new Date().toISOString().split('T')[0],
    ingredientNotes: recipeData.ingredientNotes,
    faqs: recipeData.faqs,
    tips: recipeData.tips,
    variations: recipeData.variations,
    storage: recipeData.storage,
  };

  return recipe;
}

function getCategoryFilePath(category: RecipeCategory): string {
  const categoryMap: Record<RecipeCategory, string> = {
    baking: 'baking.ts',
    savory: 'savory.ts',
    ethnic: 'ethnic.ts',
    breakfast: 'breakfast.ts',
    lunch: 'lunch.ts',
    dinner: 'dinner.ts',
    dessert: 'dessert.ts',
    snack: 'snack.ts',
    beverage: 'beverage.ts',
  };

  return path.join(process.cwd(), 'data', 'recipes', categoryMap[category] || 'savory.ts');
}

function escapeString(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

/**
 * Convert a ReadableStream to a Buffer
 */
async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
      }
    }
  } finally {
    reader.releaseLock();
  }
  
  // Combine all chunks into a single buffer
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  
  return Buffer.from(result);
}

/**
 * Save a base64 data URL image to a file
 */
async function saveBase64Image(dataUrl: string, recipeTitle: string): Promise<string> {
  const matches = dataUrl.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!matches) {
    throw new Error('Invalid base64 data URL format');
  }
  
  const [, format, base64Data] = matches;
  const buffer = Buffer.from(base64Data, 'base64');
  return saveBufferImage(buffer, recipeTitle, format);
}

/**
 * Save a buffer image to a file
 */
async function saveBufferImage(buffer: Buffer, recipeTitle: string, format: string = 'webp'): Promise<string> {
  const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Generate a safe filename from recipe title
  const safeTitle = recipeTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
  
  const filename = `${safeTitle}-${Date.now()}.${format}`;
  const filePath = path.join(imagesDir, filename);
  
  fs.writeFileSync(filePath, buffer);
  
  // Return the public URL path
  return `/recipe-images/${filename}`;
}

/**
 * Download an image from a URL and save it locally
 */
async function downloadAndSaveImage(url: string, recipeTitle: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const safeTitle = recipeTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 50);
    
    // Get file extension from URL or default to webp
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
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function formatRecipeForFile(recipe: Recipe): string {
  const lines: string[] = [];
  lines.push('  {');
  lines.push(`    id: '${recipe.id}',`);
  lines.push(`    title: '${escapeString(recipe.title)}',`);
  lines.push(`    slug: '${recipe.slug}',`);
  lines.push(`    description: '${escapeString(recipe.description)}',`);
  lines.push(`    prologue: '${escapeString(recipe.prologue)}',`);
  lines.push(`    image: '${recipe.image}',`);
  lines.push(`    prepTime: ${recipe.prepTime},`);
  lines.push(`    cookTime: ${recipe.cookTime},`);
  lines.push(`    totalTime: ${recipe.totalTime},`);
  lines.push(`    servings: ${recipe.servings},`);
  lines.push(`    difficulty: '${recipe.difficulty}',`);
  lines.push(`    category: ${JSON.stringify(recipe.category)},`);
  lines.push(`    veganType: ${JSON.stringify(recipe.veganType)},`);
  lines.push(`    ingredients: ${JSON.stringify(recipe.ingredients, null, 2).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')},`);
  lines.push(`    instructions: ${JSON.stringify(recipe.instructions, null, 2).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')},`);
  if (recipe.nutritionInfo) {
    lines.push(`    nutritionInfo: ${JSON.stringify(recipe.nutritionInfo, null, 2).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')},`);
  }
  lines.push(`    tags: ${JSON.stringify(recipe.tags)},`);
  lines.push(`    author: '${recipe.author}',`);
  lines.push(`    datePublished: '${recipe.datePublished}',`);
  if (recipe.ingredientNotes) {
    lines.push(`    ingredientNotes: '${escapeString(recipe.ingredientNotes)}',`);
  }
  if (recipe.faqs && recipe.faqs.length > 0) {
    lines.push(`    faqs: ${JSON.stringify(recipe.faqs, null, 2).split('\n').map((line, i) => i === 0 ? line : '      ' + line).join('\n')},`);
  }
  if (recipe.tips && recipe.tips.length > 0) {
    lines.push(`    tips: ${JSON.stringify(recipe.tips)},`);
  }
  if (recipe.variations && recipe.variations.length > 0) {
    lines.push(`    variations: ${JSON.stringify(recipe.variations)},`);
  }
  if (recipe.storage) {
    lines.push(`    storage: '${escapeString(recipe.storage)}',`);
  }
  lines.push('  },');
  return lines.join('\n');
}

async function saveRecipeToCategoryFile(recipe: Recipe, category: RecipeCategory): Promise<void> {
  const filePath = getCategoryFilePath(category);
  let fileContent = fs.readFileSync(filePath, 'utf-8');

  // Find the export statement - match more flexibly
  const exportMatch = fileContent.match(/export const \w+Recipes: Recipe\[\] = \[([\s\S]*?)\];/);
  
  if (!exportMatch) {
    throw new Error(`Could not find export statement in ${filePath}. File content:\n${fileContent.substring(0, 200)}`);
  }

  const existingRecipes = exportMatch[1].trim();
  
  // Check if recipe already exists (by slug)
  if (existingRecipes.includes(`slug: '${recipe.slug}'`)) {
    console.log(`⚠️  Recipe with slug "${recipe.slug}" already exists in ${filePath}. Skipping.`);
    return;
  }
  
  const recipeString = formatRecipeForFile(recipe);
  
  // Add the new recipe before the closing bracket
  const newContent = fileContent.replace(
    /export const \w+Recipes: Recipe\[\] = \[([\s\S]*?)\];/,
    (match, existing) => {
      const trimmed = existing.trim();
      if (trimmed && !trimmed.endsWith(',')) {
        return `export const ${category}Recipes: Recipe[] = [\n${trimmed},\n${recipeString}\n];`;
      } else if (trimmed) {
        return `export const ${category}Recipes: Recipe[] = [\n${trimmed}\n${recipeString}\n];`;
      } else {
        return `export const ${category}Recipes: Recipe[] = [\n${recipeString}\n];`;
      }
    }
  );

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`✅ Saved recipe "${recipe.title}" to ${path.basename(filePath)}`);
}

async function main() {
  const args = process.argv.slice(2);
  
  let count = 0;

  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--count' && args[i + 1]) {
      count = parseInt(args[i + 1], 10);
      i++;
    }
  }

  if (!count || count <= 0) {
    console.error('❌ Error: --count is required and must be greater than 0');
    console.log('\n📖 Usage:');
    console.log('  npm run generate-recipes -- --count 50');
    console.log('  npm run generate-recipes -- --count 100');
    console.log('\n💡 The tool will automatically cycle through all categories and generate recipes randomly.');
    process.exit(1);
  }

  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set');
    console.log('\n💡 Create a .env file in the root directory with:');
    console.log('   OPENAI_API_KEY=your_api_key_here');
    console.log('   REPLICATE_API_TOKEN=your_replicate_token_here');
    console.log('\n📝 You can copy .env.example to .env and add your keys:');
    console.log('   cp .env.example .env');
    console.log('   # Then edit .env and add your API keys');
    process.exit(1);
  }

  if (!process.env.REPLICATE_API_TOKEN) {
    console.error('❌ Error: REPLICATE_API_TOKEN environment variable is not set');
    console.log('\n💡 Get your Replicate API token from: https://replicate.com/account/api-tokens');
    console.log('   Add it to your .env file:');
    console.log('   REPLICATE_API_TOKEN=your_replicate_token_here');
    process.exit(1);
  }

  console.log('\n🍳 Recipe Generator - Admin Tool');
  console.log('================================\n');
  console.log(`📝 Generating ${count} recipe(s) randomly across all categories`);
  console.log(`📂 Categories: ${ALL_CATEGORIES.join(', ')}`);
  console.log('');

  // Distribute recipes across categories
  const recipePlan = distributeRecipesAcrossCategories(count);
  
  // Count recipes per category
  const categoryCounts: Record<string, number> = {};
  recipePlan.forEach(({ category }) => {
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
  });
  
  console.log('📊 Distribution plan:');
  Object.entries(categoryCounts).forEach(([cat, num]) => {
    console.log(`   ${cat}: ${num} recipe(s)`);
  });
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < recipePlan.length; i++) {
    const { category, title } = recipePlan[i];
    console.log(`\n[${i + 1}/${count}] Generating: "${title}" (${category})...`);
    
    try {
      const recipe = await generateRecipeWithOpenAI({
        title,
        category: [category],
        veganType: ['whole-food-plant-based'],
      });

      console.log(`✅ Generated: ${recipe.title}`);
      console.log(`   ⏱️  Prep: ${recipe.prepTime}min | Cook: ${recipe.cookTime}min | Total: ${recipe.totalTime}min`);
      console.log(`   👥 Servings: ${recipe.servings} | Difficulty: ${recipe.difficulty}`);
      console.log(`   📦 Ingredients: ${recipe.ingredients.length} | Steps: ${recipe.instructions.length}`);

      // Save to the category file
      await saveRecipeToCategoryFile(recipe, category);
      successCount++;

      // Delay to respect rate limits
      // With <$5 credit: 6 requests per minute = 10 seconds between requests
      if (i < recipePlan.length - 1) {
        const delay = 11000; // 11 seconds to be safe (slightly more than 10 seconds)
        console.log(`   ⏳ Waiting ${delay / 1000} seconds to respect rate limits...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error: any) {
      console.error(`❌ Error generating recipe ${i + 1}:`, error.message);
      failCount++;
      if (error.message.includes('API key')) {
        console.error('   Make sure OPENAI_API_KEY is set correctly');
      }
    }
  }

  console.log('\n✨ Recipe generation complete!');
  console.log(`✅ Successfully generated: ${successCount} recipe(s)`);
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount} recipe(s)`);
  }
  console.log('⚠️  Next step: Run "npm run build" to rebuild the site with new recipes\n');
}

if (require.main === module) {
  main().catch(console.error);
}

export { generateRecipeWithOpenAI, saveRecipeToCategoryFile };
