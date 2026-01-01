/**
 * Admin Tool: Recipe Generator
 * 
 * This is a pre-deployment tool to generate accurate vegan recipes using OpenAI.
 * Use this BEFORE deploying the site to generate and save recipes.
 * 
 * Usage:
 *   npm run generate-recipes -- --count 50
 *   npm run generate-recipes -- --count 100
 *   npm run generate-recipes -- --count 50 --supabase  # Save to Supabase instead of files
 * 
 * The tool will automatically cycle through all categories and generate recipes randomly.
 * 
 * Make sure to create a .env file in the root directory with:
 *   OPENAI_API_KEY=your_api_key_here
 *   DATABASE_URL=your_supabase_connection_string  # Optional, for Supabase mode
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
import { execSync } from 'child_process';

// Debug logging helper for Node.js
function debugLog(location: string, message: string, data: any, hypothesisId: string) {
  const logEntry = JSON.stringify({
    location,
    message,
    data,
    timestamp: Date.now(),
    sessionId: 'debug-session',
    runId: 'run1',
    hypothesisId,
  }) + '\n';
  try {
    fs.appendFileSync('/home/pfk/dev/cooking-site/.cursor/debug.log', logEntry);
  } catch (e) {
    // Ignore log errors
  }
}
import { 
  saveRecipeToSupabase, 
  checkRecipeExistsInSupabase,
  getAllRecipeSlugsFromSupabase,
  getAllRecipeTitlesFromSupabase,
} from './save-recipe-to-supabase';
import { optimizeRecipeSEO } from './optimize-recipe-seo';
import { commitAndPushRecipeImages } from './git-utils';

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
 * Check if an image file already exists for a recipe
 */
function checkForExistingImage(recipeTitle: string): string | null {
  const safeTitle = recipeTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
  
  const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
  if (!fs.existsSync(imagesDir)) {
    return null;
  }
  
  const files = fs.readdirSync(imagesDir);
  const matchingFile = files.find(file => 
    file.startsWith(safeTitle) && /\.(webp|jpg|jpeg|png)$/i.test(file)
  );
  
  if (matchingFile) {
    return `/recipe-images/${matchingFile}`;
  }
  
  return null;
}

/**
 * Generate an AI image for a recipe using Replicate with retry logic for rate limits
 * Uses FLUX Schnell for fast and cost-effective food photography ($3 per 1000 images)
 * Checks for existing images first to avoid regenerating
 * @param recipeTitle - The recipe title to use in the image prompt (can be custom title)
 * @param description - Recipe description for context
 * @param customImagePrompt - Optional custom prompt for image generation (uses recipeTitle if not provided)
 */
async function generateRecipeImage(
  recipeTitle: string, 
  description: string, 
  retryCount: number = 0,
  customImagePrompt?: string
): Promise<string> {
  // First, check if an image already exists for this recipe
  const existingImage = checkForExistingImage(recipeTitle);
  if (existingImage) {
    console.log(`   ✅ Found existing image: ${existingImage}`);
    return existingImage;
  }
  
  const maxRetries = 5;
  const baseDelay = 10000; // 10 seconds base delay (6 requests per minute = 10 seconds between requests)
  
  try {
    const replicate = getReplicateClient();
    
    // Use custom prompt if provided, otherwise create a detailed prompt for food photography
    const imagePrompt = customImagePrompt || 
      `Professional food photography of ${recipeTitle}, ${description}, vegan recipe, high quality, appetizing, well-lit, food styling, shallow depth of field, restaurant quality, food blog style, natural lighting, vibrant colors, on a clean background, professional photography`;

    console.log(`   🖼️  Generating image for "${recipeTitle}"...`);

    // Use FLUX Schnell - fastest and most cost-effective ($0.003 per image = $3 per 1000 images)
    const output: unknown = await replicate.run(
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
    if (error.status === 429 || error.message?.includes('rate limit') || error.message?.includes('throttled') || error.message?.includes('429')) {
      const retryAfterMatch = error.message?.match(/retry_after["\s:]*(\d+)/i) || 
                              error.message?.match(/retryAfter["\s:]*(\d+)/i);
      const retryAfter = retryAfterMatch ? parseInt(retryAfterMatch[1]) : (error.retry_after || error.retryAfter || 10);
      
      if (retryCount < maxRetries) {
        const delay = (retryAfter + 1) * 1000 + (retryCount * 5000); // Add extra delay for each retry
        console.log(`   ⚠️  Rate limited. Waiting ${delay / 1000} seconds before retry ${retryCount + 1}/${maxRetries}...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return generateRecipeImage(recipeTitle, description, retryCount + 1);
      } else {
        console.error(`   ❌ Rate limit exceeded after ${maxRetries} retries. Using placeholder.`);
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
  'international',
  'breakfast',
  'lunch',
  'dinner',
  'dessert',
  'snack',
  'beverage',
];

// Comprehensive recipe title suggestions by category - covering ALL vegan cuisine types
const RECIPE_TITLES_BY_CATEGORY: Record<RecipeCategory, string[]> = {
  baking: [
    'Chocolate Chip Cookies', 'Oatmeal Cookies', 'Sugar Cookies', 'Brownies', 'Blondies',
    'Banana Bread', 'Zucchini Bread', 'Pumpkin Bread', 'Cornbread', 'Blueberry Muffins',
    'Chocolate Muffins', 'Vanilla Cupcakes', 'Chocolate Cupcakes', 'Carrot Cake', 'Lemon Cake',
    'Cinnamon Rolls', 'Scones', 'Biscuits', 'Bagels', 'Donuts', 'Apple Pie', 'Pecan Pie',
    'Cherry Pie', 'Lemon Bars', 'Peanut Butter Cookies', 'Oatmeal Raisin Cookies', 'Snickerdoodles',
    'Shortbread Cookies', 'Gingerbread Cookies', 'Pumpkin Pie', 'Sweet Potato Pie', 'Key Lime Pie',
    'Chocolate Chip Muffins', 'Banana Muffins', 'Corn Muffins', 'English Muffins', 'Pretzels',
    'Cinnamon Bread', 'Raisin Bread', 'Focaccia', 'Garlic Bread', 'Dinner Rolls'
  ],
  savory: [
    'Tomato Soup', 'Lentil Soup', 'Minestrone', 'Broccoli Soup', 'Vegetable Stew',
    'Bean Stew', 'Mushroom Stew', 'Chickpea Stew', 'Green Bean Casserole', 'Potato Casserole',
    'Roasted Vegetables', 'Stuffed Peppers', 'Stuffed Zucchini', 'Ratatouille', 'Vegetable Curry',
    'Chickpea Curry', 'Lentil Curry', 'Potato Curry', 'Vegetable Stir Fry', 'Tofu Stir Fry',
    'Mushroom Risotto', 'Butternut Squash Soup', 'Carrot Soup', 'Pea Soup', 'Corn Chowder',
    'Vegetable Lasagna', 'Eggplant Parmesan', 'Stuffed Mushrooms', 'Baked Beans', 'Refried Beans',
    'Black Bean Soup', 'White Bean Soup', 'Split Pea Soup', 'Cabbage Rolls', 'Stuffed Cabbage',
    'Vegetable Pot Pie', 'Shepherd\'s Pie', 'Mushroom Gravy', 'Onion Gravy', 'Vegetable Broth'
  ],
  international: [
    // Asian
    'Pad Thai', 'Thai Curry', 'Thai Soup', 'Indian Curry', 'Dal', 'Biryani', 'Samosas',
    'Fried Rice', 'Kung Pao Tofu', 'Mapo Tofu', 'Dumplings', 'Ramen', 'Sushi Rolls',
    'Teriyaki', 'Miso Soup', 'General Tso\'s Tofu', 'Sweet and Sour Tofu', 'Orange Tofu',
    'Szechuan Tofu', 'Thai Basil Tofu', 'Pad See Ew', 'Pad Kee Mao', 'Drunken Noodles',
    'Pho', 'Banh Mi', 'Spring Rolls', 'Summer Rolls', 'Bao Buns', 'Char Siu Tofu',
    'Katsu Curry', 'Yakisoba', 'Okonomiyaki', 'Takoyaki', 'Onigiri', 'Miso Ramen',
    'Tom Kha Soup', 'Tom Yum Soup', 'Green Curry', 'Red Curry', 'Massaman Curry',
    'Palak Paneer', 'Chana Masala', 'Aloo Gobi', 'Baingan Bharta', 'Dal Makhani',
    'Vegetable Biryani', 'Pulao', 'Jeera Rice', 'Naan', 'Roti', 'Paratha',
    // Middle Eastern
    'Falafel', 'Hummus', 'Baba Ganoush', 'Tabbouleh', 'Greek Salad', 'Fattoush',
    'Mujaddara', 'Shakshuka', 'Ful Medames', 'Koshari', 'Dolma', 'Stuffed Grape Leaves',
    'Pita Bread', 'Za\'atar Bread', 'Labneh', 'Muhammara', 'Mutabal', 'Kibbeh',
    // Mediterranean
    'Greek Moussaka', 'Spanakopita', 'Dolmades', 'Greek Lemon Potatoes', 'Briam',
    'Fasolada', 'Gigantes', 'Horta', 'Tzatziki', 'Tahini Sauce',
    // Latin American
    'Tacos', 'Enchiladas', 'Burritos', 'Quesadillas', 'Tamales', 'Empanadas',
    'Arepas', 'Pupusas', 'Chiles Rellenos', 'Mole', 'Salsa Verde', 'Pico de Gallo',
    'Black Bean Tacos', 'Jackfruit Tacos', 'Cauliflower Tacos', 'Ceviche', 'Guacamole',
    // European
    'Pasta', 'Pizza', 'Risotto', 'Gnocchi', 'Polenta', 'Ratatouille',
    'Bouillabaisse', 'Minestrone', 'Ribollita', 'Panzanella', 'Caponata',
    'Borscht', 'Pierogi', 'Goulash', 'Schnitzel', 'Spaetzle'
  ],
  breakfast: [
    'Avocado Toast', 'Pancakes', 'Waffles', 'French Toast', 'Overnight Oats', 'Granola',
    'Smoothie Bowl', 'Chia Pudding', 'Breakfast Burrito', 'Breakfast Bowl', 'Tofu Scramble',
    'Breakfast Sandwich', 'Muffins', 'Scones', 'Bagels', 'English Muffins', 'Breakfast Cookies',
    'Energy Bars', 'Breakfast Smoothie', 'Green Smoothie', 'Breakfast Casserole', 'Breakfast Hash',
    'Vegan Eggs', 'Just Egg Scramble', 'Breakfast Tacos', 'Breakfast Quesadilla', 'Breakfast Pizza',
    'Oatmeal', 'Steel Cut Oats', 'Quinoa Porridge', 'Cream of Wheat', 'Grits',
    'Breakfast Sausage', 'Vegan Bacon', 'Breakfast Sausage Patties', 'Hash Browns', 'Home Fries',
    'Breakfast Potatoes', 'Breakfast Skillet', 'Breakfast Wrap', 'Breakfast Burrito Bowl',
    'Acai Bowl', 'Chia Seed Pudding', 'Overnight Chia Oats', 'Breakfast Parfait', 'Yogurt Bowl'
  ],
  lunch: [
    'Caesar Salad', 'Greek Salad', 'Cobb Salad', 'Quinoa Salad', 'Lentil Salad', 'Chickpea Salad',
    'Pasta Salad', 'Potato Salad', 'Sandwich', 'Wrap', 'Burrito', 'Quesadilla', 'Soup', 'Stew',
    'Chili', 'Curry', 'Bowl', 'Stir Fry', 'Fried Rice', 'Noodles', 'Pizza', 'Flatbread', 'Tacos',
    'Sushi', 'Buddha Bowl', 'Grain Bowl', 'Power Bowl', 'Nourish Bowl', 'Mediterranean Bowl',
    'Mexican Bowl', 'Asian Bowl', 'BBQ Bowl', 'Teriyaki Bowl', 'Poke Bowl', 'Burrito Bowl',
    'Taco Bowl', 'Fajita Bowl', 'Gyro Bowl', 'Falafel Bowl', 'Hummus Bowl', 'Quinoa Bowl',
    'Rice Bowl', 'Noodle Bowl', 'Ramen Bowl', 'Pho Bowl', 'Soba Bowl', 'Udon Bowl',
    'Club Sandwich', 'BLT', 'Reuben Sandwich', 'Grilled Cheese', 'Panini', 'Sub Sandwich',
    'Hoagie', 'Hero Sandwich', 'Banh Mi', 'Veggie Burger', 'Black Bean Burger', 'Chickpea Burger',
    'Lentil Burger', 'Mushroom Burger', 'Quinoa Burger', 'Sweet Potato Burger', 'Falafel Burger'
  ],
  dinner: [
    // Pasta & Italian
    'Lasagna', 'Spaghetti', 'Penne', 'Fettuccine', 'Ravioli', 'Gnocchi', 'Risotto', 'Paella',
    'Linguine', 'Fusilli', 'Rigatoni', 'Macaroni', 'Manicotti', 'Cannelloni', 'Tortellini',
    'Penne Arrabbiata', 'Spaghetti Aglio e Olio', 'Pasta Primavera', 'Pasta Puttanesca',
    'Pasta Carbonara', 'Pasta Alfredo', 'Pasta Marinara', 'Pasta Pomodoro',
    // Casseroles & Bakes
    'Shepherd\'s Pie', 'Pot Pie', 'Casserole', 'Bake', 'Enchilada Casserole', 'Taco Casserole',
    'Lasagna Roll Ups', 'Stuffed Shells', 'Baked Ziti', 'Eggplant Rollatini', 'Stuffed Manicotti',
    // Seitan & Meat Alternatives
    'Vegan Ribs', 'Vegan Sausages', 'Seitan Ribs', 'Seitan Sausages', 'Seitan Steaks',
    'Seitan Roast', 'Seitan Brisket', 'Seitan Wings', 'Seitan Nuggets', 'Seitan Cutlets',
    'Vegan Pulled Pork', 'Jackfruit Pulled Pork', 'Vegan Chicken', 'Vegan Beef', 'Vegan Turkey',
    'Vegan Meatballs', 'Vegan Meatloaf', 'Vegan Burgers', 'Vegan Hot Dogs', 'Vegan Bratwurst',
    'Vegan Chorizo', 'Vegan Italian Sausage', 'Vegan Breakfast Sausage', 'Vegan Bacon',
    'Vegan Ham', 'Vegan Deli Slices', 'Vegan Jerky', 'Vegan Pepperoni',
    // Main Dishes
    'Stir Fry', 'Curry', 'Stew', 'Soup', 'Tacos', 'Enchiladas', 'Burritos', 'Fajitas',
    'Pizza', 'Flatbread', 'Calzone', 'Focaccia', 'Burgers', 'Sliders', 'Meatballs', 'Meatloaf',
    'Roast', 'Skewers', 'Kebabs', 'Shish Kebabs', 'Satay', 'Teriyaki', 'General Tso\'s',
    'Orange Chicken', 'Sweet and Sour', 'Kung Pao', 'Mapo Tofu', 'Szechuan', 'Thai Basil',
    'Pad Thai', 'Pad See Ew', 'Drunken Noodles', 'Fried Rice', 'Lo Mein', 'Chow Mein',
    'Ramen', 'Pho', 'Udon', 'Soba', 'Dumplings', 'Bao Buns', 'Sushi', 'Poke Bowl',
    'Falafel', 'Shawarma', 'Gyro', 'Kebab', 'Kofta', 'Biryani', 'Dal', 'Curry',
    'Tagine', 'Couscous', 'Paella', 'Risotto', 'Polenta', 'Gnocchi', 'Ratatouille',
    'Moussaka', 'Spanakopita', 'Dolmades', 'Stuffed Peppers', 'Stuffed Zucchini',
    'Stuffed Cabbage', 'Stuffed Grape Leaves', 'Cabbage Rolls', 'Eggplant Parmesan',
    'Chiles Rellenos', 'Tamales', 'Empanadas', 'Arepas', 'Pupusas', 'Pierogi',
    'Goulash', 'Borscht', 'Schnitzel', 'Spaetzle', 'Rouladen', 'Sauerbraten'
  ],
  dessert: [
    'Chocolate Cake', 'Vanilla Cake', 'Carrot Cake', 'Red Velvet Cake', 'Cheesecake', 'Ice Cream',
    'Sorbet', 'Pudding', 'Mousse', 'Truffles', 'Fudge', 'Caramels', 'Cookies', 'Brownies', 'Blondies',
    'Bars', 'Tarts', 'Pies', 'Cobbler', 'Crisp', 'Crumble', 'Parfait', 'Trifle', 'Tiramisu',
    'Panna Cotta', 'Creme Brulee', 'Flan', 'Gelato', 'Frozen Yogurt', 'Nice Cream',
    'Chocolate Mousse', 'Lemon Mousse', 'Strawberry Mousse', 'Chocolate Pudding', 'Vanilla Pudding',
    'Rice Pudding', 'Bread Pudding', 'Chia Pudding', 'Tapioca Pudding', 'Coconut Pudding',
    'Apple Pie', 'Cherry Pie', 'Pecan Pie', 'Pumpkin Pie', 'Sweet Potato Pie', 'Key Lime Pie',
    'Lemon Meringue Pie', 'Banana Cream Pie', 'Coconut Cream Pie', 'Chocolate Cream Pie',
    'Strawberry Pie', 'Blueberry Pie', 'Peach Pie', 'Rhubarb Pie', 'Blackberry Pie',
    'Lemon Bars', 'Lime Bars', 'Raspberry Bars', 'Strawberry Bars', 'Date Bars', 'Oatmeal Bars',
    'Chocolate Chip Cookies', 'Oatmeal Cookies', 'Sugar Cookies', 'Snickerdoodles', 'Gingerbread Cookies',
    'Peanut Butter Cookies', 'Shortbread Cookies', 'Macarons', 'Macaroons', 'Biscotti',
    'Cupcakes', 'Muffins', 'Scones', 'Donuts', 'Cinnamon Rolls', 'Sticky Buns',
    'Churros', 'Beignets', 'Funnel Cake', 'Fried Dough', 'Zeppole', 'Cannoli',
    'Baklava', 'Knafeh', 'Halva', 'Turkish Delight', 'Loukoumades', 'Kataifi'
  ],
  snack: [
    'Trail Mix', 'Granola Bars', 'Energy Balls', 'Protein Bars', 'Crackers', 'Chips', 'Popcorn',
    'Nuts', 'Seeds', 'Dried Fruit', 'Fruit Leather', 'Veggie Chips', 'Hummus', 'Guacamole',
    'Salsa', 'Dip', 'Spread', 'Butter', 'Cheese', 'Yogurt', 'Smoothie', 'Juice', 'Tea', 'Coffee',
    'Hot Chocolate', 'Roasted Nuts', 'Spiced Nuts', 'Candied Nuts', 'Trail Mix Bars',
    'Protein Balls', 'Date Balls', 'Energy Bites', 'Granola', 'Roasted Chickpeas',
    'Kale Chips', 'Zucchini Chips', 'Sweet Potato Chips', 'Plantain Chips', 'Beet Chips',
    'Carrot Chips', 'Parsnip Chips', 'Apple Chips', 'Banana Chips', 'Coconut Chips',
    'Pita Chips', 'Tortilla Chips', 'Crackers', 'Rice Crackers', 'Seed Crackers',
    'Nut Butter', 'Almond Butter', 'Peanut Butter', 'Cashew Butter', 'Sunflower Butter',
    'Tahini', 'Hummus', 'Baba Ganoush', 'Guacamole', 'Salsa', 'Pico de Gallo',
    'Salsa Verde', 'Mango Salsa', 'Corn Salsa', 'Black Bean Dip', 'White Bean Dip',
    'Spinach Dip', 'Artichoke Dip', 'Buffalo Cauliflower Dip', 'Queso', 'Cheese Sauce',
    'Vegan Cheese', 'Cream Cheese', 'Ricotta', 'Mozzarella', 'Cheddar', 'Parmesan'
  ],
  beverage: [
    'Smoothie', 'Green Smoothie', 'Protein Smoothie', 'Fruit Smoothie', 'Juice', 'Green Juice',
    'Vegetable Juice', 'Fruit Juice', 'Tea', 'Herbal Tea', 'Iced Tea', 'Chai Tea', 'Coffee',
    'Cold Brew', 'Latte', 'Cappuccino', 'Hot Chocolate', 'Cocoa', 'Golden Milk', 'Turmeric Latte',
    'Lemonade', 'Limeade', 'Punch', 'Mocktail', 'Milkshake', 'Smoothie Bowl', 'Acai Bowl',
    'Matcha Latte', 'Chai Latte', 'London Fog', 'Dirty Chai', 'Pumpkin Spice Latte',
    'Peppermint Mocha', 'Caramel Macchiato', 'Vanilla Latte', 'Hazelnut Latte', 'Almond Latte',
    'Oat Milk Latte', 'Soy Milk Latte', 'Coconut Milk Latte', 'Cashew Milk Latte',
    'Hot Toddy', 'Mulled Cider', 'Spiced Cider', 'Apple Cider', 'Cranberry Juice',
    'Orange Juice', 'Grapefruit Juice', 'Pomegranate Juice', 'Coconut Water', 'Aloe Vera Juice',
    'Kombucha', 'Kefir', 'Probiotic Drink', 'Kvass', 'Tepache', 'Jun Tea',
    'Bubble Tea', 'Boba Tea', 'Thai Iced Tea', 'Vietnamese Iced Coffee', 'Cafe au Lait',
    'Cortado', 'Macchiato', 'Americano', 'Espresso', 'Affogato', 'Frappe', 'Frappuccino'
  ],
};

function getRandomCategory(): RecipeCategory {
  return ALL_CATEGORIES[Math.floor(Math.random() * ALL_CATEGORIES.length)];
}

function getRandomRecipeTitle(category: RecipeCategory | string): string {
  // Handle new categories that aren't in the predefined list
  if (category in RECIPE_TITLES_BY_CATEGORY) {
    const titles = RECIPE_TITLES_BY_CATEGORY[category as RecipeCategory];
    if (titles && titles.length > 0) {
      return titles[Math.floor(Math.random() * titles.length)];
    }
  }
  // For new categories, generate a generic title
  return `Vegan ${category.charAt(0).toUpperCase() + category.slice(1)} Recipe`;
}

/**
 * Extract the core recipe name by removing common prefixes and suffixes
 */
function extractCoreRecipeName(title: string): string {
  const prefixes = ['vegan', 'plant-based', 'easy', 'simple', 'quick', 'homemade', 'classic', 'best', 'creamy', 'spicy', 'bbq', 'smoky', 'herbed', 'garlic', 'lemon', 'coconut', 'thai', 'italian', 'mexican', 'asian', 'weeknight', 'sunday', 'morning', 'breakfast'];
  const suffixes = ['recipe', 'dish', 'bowl', 'plate', 'style', 'version', 'dinner'];
  
  let core = title.toLowerCase().trim();
  
  // Remove prefixes
  for (const prefix of prefixes) {
    if (core.startsWith(prefix + ' ')) {
      core = core.substring(prefix.length + 1).trim();
    }
  }
  
  // Remove suffixes
  for (const suffix of suffixes) {
    if (core.endsWith(' ' + suffix)) {
      core = core.substring(0, core.length - suffix.length - 1).trim();
    }
  }
  
  return core;
}

/**
 * Generate variations of a title to find unique options
 * But avoid generating variations of the same core recipe
 */
function generateTitleVariations(
  baseTitle: string, 
  category: RecipeCategory | string,
  usedCoreRecipes: Set<string>
): string[] {
  const variations: string[] = [];
  const coreName = extractCoreRecipeName(baseTitle);
  
  // If this core recipe has already been used, don't generate variations
  if (usedCoreRecipes.has(coreName)) {
    return [];
  }
  
  // Only generate a few variations, not all prefixes
  const limitedPrefixes = ['Vegan', 'Plant-Based', 'Easy', 'Simple', 'Quick', 'Classic', 'Creamy', 'Spicy'];
  
  // Try adding a limited set of prefixes (only 3-4 variations)
  const selectedPrefixes = limitedPrefixes
    .filter(prefix => !baseTitle.toLowerCase().includes(prefix.toLowerCase()))
    .slice(0, 3); // Only 3 variations max
  
  for (const prefix of selectedPrefixes) {
    variations.push(`${prefix} ${baseTitle}`);
  }
  
  return variations;
}

/**
 * Generate multiple unique title suggestions using OpenAI
 */
async function generateAITitleSuggestions(
  openai: OpenAI,
  category: RecipeCategory | string,
  existingTitles: string[],
  attemptedTitles: Set<string>,
  count: number = 5
): Promise<string[]> {
  try {
    const existingTitlesList = existingTitles.slice(0, 30).join(', '); // Show more existing titles
    const attemptedList = Array.from(attemptedTitles).slice(0, 15).join(', ');
    
    const prompt = `Generate ${count} unique, creative vegan recipe titles for the "${category}" category.

CRITICAL REQUIREMENTS:
- Each title must be completely unique and different from these existing titles: ${existingTitlesList}
- Each title must be different from these attempted titles: ${attemptedList}
- Each should be a real, cookable vegan recipe (not generic like "Vegan Food")
- Each should be specific and appetizing
- Each should be 2-5 words long
- Titles should be DIVERSE - avoid generating variations of the same base recipe (e.g., don't generate "Lasagna", "Easy Lasagna", "Simple Lasagna" - these are all the same base recipe)
- Each title should represent a DISTINCTLY different recipe, not just a variation with a prefix/suffix
- Be creative and think of different ingredients, cooking methods, cuisines, and flavor profiles

Return ONLY a JSON array of titles, like this:
{"titles": ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"]}

Examples of good, diverse titles for ${category}:
- "BBQ Jackfruit Sandwiches"
- "Creamy Mushroom Risotto"
- "Spicy Thai Basil Tofu"
- "Lemon Herb Quinoa Bowl"
- "Smoky Chipotle Black Bean Tacos"
- "Garlic Herb Stuffed Portobellos"
- "Coconut Curry Lentil Soup"
- "Mediterranean Stuffed Eggplant"
- "Teriyaki Tofu Skewers"
- "Mushroom Wellington"

BAD examples (these are variations of the same recipe):
- "Lasagna", "Easy Lasagna", "Simple Lasagna" ❌
- "Pasta", "Vegan Pasta", "Quick Pasta" ❌

Generate ${count} unique, diverse titles now as a JSON array:`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a creative recipe naming expert. Generate unique, specific vegan recipe titles. Return only a JSON array of titles, no other text.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.9, // Higher temperature for more creativity
      max_tokens: 200,
    });

    const content = completion.choices[0]?.message?.content?.trim();
    if (!content) {
      return [];
    }
    
    try {
      const parsed = JSON.parse(content);
      // Handle different response formats
      let titles: string[] = [];
      if (Array.isArray(parsed)) {
        titles = parsed;
      } else if (parsed.titles && Array.isArray(parsed.titles)) {
        titles = parsed.titles;
      } else if (parsed.suggestions && Array.isArray(parsed.suggestions)) {
        titles = parsed.suggestions;
      } else {
        // Try to extract array from any key
        const values = Object.values(parsed);
        if (values.length > 0 && Array.isArray(values[0])) {
          titles = values[0] as string[];
        }
      }
      
      // Clean up titles (remove quotes, trim)
      return titles
        .map((t: any) => String(t).trim().replace(/^["']|["']$/g, ''))
        .filter((t: string) => t.length > 0);
    } catch (parseError) {
      // If JSON parsing fails, try to extract titles from text
      const lines = content.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      return lines
        .map(line => line.replace(/^[-*•]\s*/, '').replace(/^["']|["']$/g, '').trim())
        .filter(t => t.length > 0 && t.length < 100);
    }
  } catch (error: any) {
    console.error(`   ⚠️  Error generating AI title suggestions: ${error.message}`);
    return [];
  }
}

/**
 * Generate a new unique title using OpenAI when the pool is exhausted
 */
async function generateNewUniqueTitle(
  openai: OpenAI,
  category: RecipeCategory | string,
  existingTitles: string[],
  attemptedTitles: Set<string>,
  attemptedSlugs: Set<string>,
  existingRecipes: { byTitle: Map<string, Recipe>, bySlug: Map<string, Recipe> }
): Promise<string | null> {
  // Use the batch generation function and return the first unique one
  const suggestions = await generateAITitleSuggestions(openai, category, existingTitles, attemptedTitles, 3);
  
  for (const title of suggestions) {
    const normalizedTitle = title.toLowerCase().trim();
    const candidateSlug = generateSlug(title);
    
    // Check if this generated title is unique
    if (existingRecipes.byTitle.has(normalizedTitle) || attemptedTitles.has(normalizedTitle)) {
      continue;
    }
    
    if (existingRecipes.bySlug.has(candidateSlug) || attemptedSlugs.has(candidateSlug)) {
      continue;
    }
    
    return title;
  }
  
  return null;
}

/**
 * Get a unique recipe title for a category
 * Tries multiple random titles until finding one that doesn't exist
 * Uses AI to generate title suggestions proactively, not just as fallback
 * Falls back to generating variations, then AI-generated titles if pool is exhausted
 */
async function getUniqueRecipeTitle(
  category: RecipeCategory | string,
  existingRecipes: { byTitle: Map<string, Recipe>, bySlug: Map<string, Recipe>, byCoreName: Set<string> },
  attemptedTitles: Set<string>,
  attemptedSlugs: Set<string>,
  usedCoreRecipes: Set<string>,
  openai: OpenAI | null = null,
  maxAttempts: number = 100
): Promise<string | null> {
  // #region agent log
  debugLog('generate-recipes.ts:589', 'getUniqueRecipeTitle entry', { category, isBaking: category === 'baking' }, 'C');
  // #endregion
  
  // First, try random titles from the predefined list
  const titles = category in RECIPE_TITLES_BY_CATEGORY 
    ? RECIPE_TITLES_BY_CATEGORY[category as RecipeCategory] 
    : [];
  
  // #region agent log
  debugLog('generate-recipes.ts:602', 'Titles list loaded', { category, titlesCount: titles.length, hasOatmealRaisin: titles.some((t: string) => t.toLowerCase().includes('oatmeal') && t.toLowerCase().includes('raisin')) }, 'C');
  // #endregion
  
  const triedFromList = new Set<string>();
  const existingTitlesArray = Array.from(existingRecipes.byTitle.keys());
  
  // If we have OpenAI and the pool is getting low, proactively generate AI suggestions
  let aiSuggestions: string[] = [];
  let aiSuggestionsIndex = 0;
  const shouldUseAI = openai && (titles.length === 0 || triedFromList.size > titles.length * 0.7);
  
  if (shouldUseAI && aiSuggestions.length === 0) {
    console.log(`   🤖 Generating AI title suggestions for ${category}...`);
    aiSuggestions = await generateAITitleSuggestions(openai, category, existingTitlesArray, attemptedTitles, 10);
    if (aiSuggestions.length > 0) {
      console.log(`   ✅ Generated ${aiSuggestions.length} AI title suggestions`);
    }
  }
  
  // Try titles from the list first (try up to 2x the list size to account for duplicates)
  const maxListAttempts = titles.length > 0 ? Math.min(maxAttempts, titles.length * 3) : 50;
  for (let attempt = 0; attempt < maxListAttempts; attempt++) {
    // Alternate between predefined titles and AI suggestions
    let randomTitle: string;
    if (aiSuggestions.length > 0 && attempt % 3 === 0) {
      // Use AI suggestion every 3rd attempt
      if (aiSuggestionsIndex < aiSuggestions.length) {
        randomTitle = aiSuggestions[aiSuggestionsIndex++];
      } else {
        // Refresh AI suggestions if we've used them all
        if (openai) {
          aiSuggestions = await generateAITitleSuggestions(openai, category, existingTitlesArray, attemptedTitles, 10);
          aiSuggestionsIndex = 0;
          if (aiSuggestions.length > 0) {
            randomTitle = aiSuggestions[aiSuggestionsIndex++];
          } else {
            randomTitle = getRandomRecipeTitle(category);
          }
        } else {
          randomTitle = getRandomRecipeTitle(category);
        }
      }
    } else {
      randomTitle = getRandomRecipeTitle(category);
    }
    
    // #region agent log
    debugLog('generate-recipes.ts:643', 'Random title selected in getUniqueRecipeTitle', { randomTitle, category, isOatmealRaisin: randomTitle.toLowerCase().includes('oatmeal') && randomTitle.toLowerCase().includes('raisin') }, 'C');
    // #endregion
    
    const normalizedTitle = randomTitle.toLowerCase().trim();
    const candidateSlug = generateSlug(randomTitle);
    
    // Check if we've already tried this title in this search
    if (attemptedTitles.has(normalizedTitle) || triedFromList.has(normalizedTitle)) {
      continue;
    }
    
    // Check if we've already tried this slug
    if (attemptedSlugs.has(candidateSlug)) {
      continue;
    }
    
    triedFromList.add(normalizedTitle);
    
    // Check if this title already exists in our recipe database
    if (existingRecipes.byTitle.has(normalizedTitle)) {
      attemptedTitles.add(normalizedTitle);
      continue;
    }
    
    // Check if this slug already exists in our recipe database
    if (existingRecipes.bySlug.has(candidateSlug)) {
      attemptedSlugs.add(candidateSlug);
      continue;
    }
    
    // Check if the core recipe name already exists in the database
    const coreName = extractCoreRecipeName(randomTitle);
    if (existingRecipes.byCoreName.has(coreName)) {
      attemptedTitles.add(normalizedTitle);
      attemptedSlugs.add(candidateSlug);
      continue; // Skip - this core recipe already exists
    }
    
    // Found a unique title AND slug AND core recipe name!
    usedCoreRecipes.add(coreName);
    
    if (aiSuggestions.includes(randomTitle)) {
      console.log(`   ✨ Using AI-generated title: "${randomTitle}"`);
    }
    return randomTitle;
  }
  
  // If we've exhausted the list, try variations of existing titles
  // But only if the core recipe hasn't been used yet
  const sampleTitles = titles.length > 0 ? titles.slice(0, Math.min(20, titles.length)) : ['Vegan Recipe', 'Plant-Based Dish'];
  
  for (const baseTitle of sampleTitles) {
    const coreName = extractCoreRecipeName(baseTitle);
    if (usedCoreRecipes.has(coreName)) {
      continue; // Skip if we've already used this core recipe
    }
    
    const variations = generateTitleVariations(baseTitle, category, usedCoreRecipes);
    for (const variation of variations) {
      const normalizedTitle = variation.toLowerCase().trim();
      const candidateSlug = generateSlug(variation);
      
      if (attemptedTitles.has(normalizedTitle) || attemptedSlugs.has(candidateSlug)) {
        continue;
      }
      
      if (existingRecipes.byTitle.has(normalizedTitle) || existingRecipes.bySlug.has(candidateSlug)) {
        attemptedTitles.add(normalizedTitle);
        attemptedSlugs.add(candidateSlug);
        continue;
      }
      
      // Check if the core recipe name already exists
      const variationCore = extractCoreRecipeName(variation);
      if (existingRecipes.byCoreName.has(variationCore)) {
        attemptedTitles.add(normalizedTitle);
        attemptedSlugs.add(candidateSlug);
        continue; // Skip - this core recipe already exists
      }
      
      // Found a unique variation! Mark the core recipe as used
      usedCoreRecipes.add(variationCore);
      return variation;
    }
  }
  
  // Also try variations of some random titles from the list
  const randomSample = titles.length > 0 
    ? titles.sort(() => Math.random() - 0.5).slice(0, 10)
    : [];
  for (const baseTitle of randomSample) {
    const coreName = extractCoreRecipeName(baseTitle);
    if (usedCoreRecipes.has(coreName)) {
      continue; // Skip if we've already used this core recipe
    }
    
    const variations = generateTitleVariations(baseTitle, category, usedCoreRecipes);
    for (const variation of variations) {
      const normalizedTitle = variation.toLowerCase().trim();
      const candidateSlug = generateSlug(variation);
      
      if (attemptedTitles.has(normalizedTitle) || attemptedSlugs.has(candidateSlug)) {
        continue;
      }
      
      if (existingRecipes.byTitle.has(normalizedTitle) || existingRecipes.bySlug.has(candidateSlug)) {
        attemptedTitles.add(normalizedTitle);
        attemptedSlugs.add(candidateSlug);
        continue;
      }
      
      // Check if the core recipe name already exists
      const variationCore = extractCoreRecipeName(variation);
      if (existingRecipes.byCoreName.has(variationCore)) {
        attemptedTitles.add(normalizedTitle);
        attemptedSlugs.add(candidateSlug);
        continue; // Skip - this core recipe already exists
      }
      
      // Found a unique variation! Mark the core recipe as used
      usedCoreRecipes.add(variationCore);
      return variation;
    }
  }
  
  // Last resort: Use AI to generate a completely new title
  if (openai) {
    console.log(`   🤖 Title pool exhausted, generating new unique title suggestions with AI...`);
    
    // Generate a fresh batch of AI suggestions
    const freshAISuggestions = await generateAITitleSuggestions(
      openai,
      category,
      existingTitlesArray,
      attemptedTitles,
      10
    );
    
    // Try each AI suggestion, but check core recipe names too
    for (const aiTitle of freshAISuggestions) {
      const normalizedTitle = aiTitle.toLowerCase().trim();
      const candidateSlug = generateSlug(aiTitle);
      const coreName = extractCoreRecipeName(aiTitle);
      
      // Check if this generated title is unique
      if (existingRecipes.byTitle.has(normalizedTitle) || attemptedTitles.has(normalizedTitle)) {
        continue;
      }
      
      if (existingRecipes.bySlug.has(candidateSlug) || attemptedSlugs.has(candidateSlug)) {
        continue;
      }
      
      // Check if the core recipe name already exists in the database
      if (existingRecipes.byCoreName.has(coreName)) {
        continue; // Skip - this core recipe already exists in database
      }
      
      // Check if we've already used this core recipe in this batch
      if (usedCoreRecipes.has(coreName)) {
        continue;
      }
      
      usedCoreRecipes.add(coreName);
      console.log(`   ✅ AI generated unique title: "${aiTitle}"`);
      return aiTitle;
    }
    
    // If all suggestions were duplicates, try one more batch
    console.log(`   🔄 All AI suggestions were duplicates, generating another batch...`);
    const secondBatch = await generateAITitleSuggestions(
      openai,
      category,
      existingTitlesArray,
      attemptedTitles,
      10
    );
    
    for (const aiTitle of secondBatch) {
      const normalizedTitle = aiTitle.toLowerCase().trim();
      const candidateSlug = generateSlug(aiTitle);
      const coreName = extractCoreRecipeName(aiTitle);
      
      if (existingRecipes.byTitle.has(normalizedTitle) || attemptedTitles.has(normalizedTitle)) {
        continue;
      }
      
      if (existingRecipes.bySlug.has(candidateSlug) || attemptedSlugs.has(candidateSlug)) {
        continue;
      }
      
      // Check if the core recipe name already exists in the database
      if (existingRecipes.byCoreName.has(coreName)) {
        continue; // Skip - this core recipe already exists in database
      }
      
      // Check if we've already used this core recipe in this batch
      if (usedCoreRecipes.has(coreName)) {
        continue;
      }
      
      usedCoreRecipes.add(coreName);
      console.log(`   ✅ AI generated unique title: "${aiTitle}"`);
      return aiTitle;
    }
    
    console.log(`   ⚠️  AI title generation failed after 2 batches (20 suggestions)`);
  } else {
    console.log(`   ⚠️  OpenAI not available for title generation fallback`);
  }
  
  // Couldn't find a unique title after all attempts
  return null;
}

/**
 * Infer category from recipe title using keyword matching
 */
function inferCategoryFromTitle(title: string): RecipeCategory | string {
  const titleLower = title.toLowerCase();
  
  // Baking keywords
  if (titleLower.match(/\b(cookie|cake|bread|muffin|pie|brownie|cupcake|scone|biscuit|bagel|donut|pretzel|roll|pastry|tart|bar)\b/)) {
    return 'baking';
  }
  
  // Beverage keywords
  if (titleLower.match(/\b(smoothie|juice|drink|tea|coffee|cocktail|shake|punch|lemonade|soda)\b/)) {
    return 'beverage';
  }
  
  // Breakfast keywords
  if (titleLower.match(/\b(pancake|waffle|toast|scramble|omelet|crepe|granola|overnight|oats)\b/)) {
    return 'breakfast';
  }
  
  // Dessert keywords
  if (titleLower.match(/\b(ice cream|gelato|sorbet|pudding|mousse|tiramisu|cheesecake|flan|panna cotta)\b/)) {
    return 'dessert';
  }
  
  // Snack keywords
  if (titleLower.match(/\b(chip|cracker|dip|spread|hummus|guacamole|trail mix|popcorn)\b/)) {
    return 'snack';
  }
  
  // International keywords
  if (titleLower.match(/\b(pad thai|curry|sushi|ramen|pho|taco|burrito|lasagna|risotto|paella|gnocchi|dumpling|bao|gyro|falafel|moussaka)\b/)) {
    return 'international';
  }
  
  // Soup/stew keywords
  if (titleLower.match(/\b(soup|stew|chili|chowder|bisque|gumbo|jambalaya)\b/)) {
    return 'savory';
  }
  
  // Salad keywords
  if (titleLower.match(/\b(salad|coleslaw)\b/)) {
    return 'lunch';
  }
  
  // Default to savory for main dishes
  return 'savory';
}

function distributeRecipesAcrossCategories(
  count: number, 
  targetCategories: (RecipeCategory | string)[] = ALL_CATEGORIES
): Array<{ category: RecipeCategory | string; title: string }> {
  const recipes: Array<{ category: RecipeCategory | string; title: string }> = [];
  
  // Use only target categories
  const categories = [...targetCategories];
  
  if (categories.length === 0) {
    throw new Error('No valid categories specified. Use --category to specify categories.');
  }
  
  // First, ensure each category gets at least one recipe
  for (let i = 0; i < Math.min(count, categories.length); i++) {
    const category = categories[i];
    recipes.push({
      category,
      title: getRandomRecipeTitle(category),
    });
  }
  
  // Then randomly distribute the remaining recipes across target categories
  for (let i = categories.length; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
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
  maxTime?: number; // Maximum total time in minutes
  recipeTitle?: string; // Optional specific recipe title to use
  ingredients?: string; // Comma-delimited list of ingredients to include
  allergenFriendly?: boolean; // Flag for allergen-friendly version (gluten-free, nut-free, etc.)
  keywords?: string; // Comma-delimited keywords to set context for recipe type (e.g., "comfort food, winter, hearty, spicy")
  theme?: string; // Recipe theme (e.g., "Mediterranean", "Asian", "Holiday", "Comfort Food", "Summer", "Winter")
}

/**
 * Find vegan alternatives for non-vegan ingredients using AI
 */
async function findVeganAlternatives(
  openai: OpenAI,
  nonVeganIngredients: string[],
  recipeContext: any
): Promise<Map<string, string>> {
  const replacements = new Map<string, string>();
  
  // Create a prompt to find vegan alternatives
  const prompt = `You are a vegan cooking expert. Find appropriate vegan alternatives for these non-vegan ingredients found in a recipe.

Recipe context:
- Title: ${recipeContext.title || 'Unknown'}
- Description: ${recipeContext.description || 'N/A'}

Non-vegan ingredients found:
${nonVeganIngredients.map((ing, i) => `${i + 1}. ${ing}`).join('\n')}

For each non-vegan ingredient, provide a specific, appropriate vegan alternative that:
1. Works well in the recipe context
2. Maintains similar flavor/texture/function
3. Is commonly available
4. Is a direct 1:1 replacement (same amount/measurement)

Return a JSON object with this exact structure:
{
  "${nonVeganIngredients[0].toLowerCase()}": "vegan alternative name",
  ${nonVeganIngredients.length > 1 ? `"${nonVeganIngredients[1].toLowerCase()}": "vegan alternative name"` : ''}
}

Examples:
- "butter" → "vegan butter" or "coconut oil"
- "milk" → "almond milk" or "oat milk" or "coconut milk"
- "cheese" → "nutritional yeast" or "vegan cheese" or "cashew cheese"
- "egg" → "flax egg" or "chia egg" or "aquafaba"
- "honey" → "maple syrup" or "agave nectar"
- "chicken" → "seitan" or "tofu" or "chickpeas"
- "fish sauce" → "coconut aminos" or "soy sauce alternative"

Return ONLY the JSON object, no other text.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a vegan cooking expert who provides accurate, appropriate vegan ingredient substitutions. Always return valid JSON.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3, // Lower temperature for more consistent replacements
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let alternatives;
    try {
      alternatives = JSON.parse(content);
    } catch (e) {
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (jsonMatch) {
        alternatives = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('Failed to parse alternatives JSON');
      }
    }

    // Build replacement map (case-insensitive matching)
    nonVeganIngredients.forEach((ing) => {
      const key = ing.toLowerCase();
      if (alternatives[key]) {
        replacements.set(ing, alternatives[key]);
      } else {
        // Try to find a close match
        const foundKey = Object.keys(alternatives).find((k) => 
          k.toLowerCase().includes(key) || key.includes(k.toLowerCase())
        );
        if (foundKey) {
          replacements.set(ing, alternatives[foundKey]);
        } else {
          // Fallback to generic replacement
          replacements.set(ing, getGenericVeganAlternative(ing));
        }
      }
    });

    return replacements;
  } catch (error: any) {
    throw new Error(`Failed to find vegan alternatives: ${error.message}`);
  }
}

/**
 * Get a generic vegan alternative for common non-vegan ingredients
 */
function getGenericVeganAlternative(nonVeganIngredient: string): string {
  const lower = nonVeganIngredient.toLowerCase();
  
  if (lower.includes('butter')) return 'vegan butter';
  if (lower.includes('milk')) return 'plant-based milk';
  if (lower.includes('cheese')) return 'vegan cheese';
  if (lower.includes('cream')) return 'coconut cream';
  if (lower.includes('egg')) return 'flax egg';
  if (lower.includes('honey')) return 'maple syrup';
  if (lower.includes('chicken') || lower.includes('meat')) return 'seitan';
  if (lower.includes('fish')) return 'jackfruit';
  if (lower.includes('gelatin')) return 'agar agar';
  if (lower.includes('bacon') || lower.includes('ham')) return 'tempeh bacon';
  
  return 'vegan alternative';
}

/**
 * Apply vegan replacements to all recipe text fields
 */
function applyVeganReplacements(recipeData: any, replacements: Map<string, string>): any {
  const replaceInText = (text: string): string => {
    let result = text;
    replacements.forEach((veganAlt, nonVegan) => {
      // Case-insensitive replacement with word boundaries
      const regex = new RegExp(`\\b${nonVegan.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      result = result.replace(regex, veganAlt);
    });
    return result;
  };

  // Replace in ingredients
  if (recipeData.ingredients && Array.isArray(recipeData.ingredients)) {
    recipeData.ingredients = recipeData.ingredients.map((ing: any) => ({
      ...ing,
      name: replaceInText(ing.name || ''),
      notes: ing.notes ? replaceInText(ing.notes) : undefined,
    }));
  }

  // Replace in instructions
  if (recipeData.instructions && Array.isArray(recipeData.instructions)) {
    recipeData.instructions = recipeData.instructions.map((inst: any) => ({
      ...inst,
      text: replaceInText(inst.text || ''),
    }));
  }

  // Replace in text fields
  if (recipeData.description) {
    recipeData.description = replaceInText(recipeData.description);
  }
  if (recipeData.prologue) {
    recipeData.prologue = replaceInText(recipeData.prologue);
  }
  if (recipeData.ingredientNotes) {
    recipeData.ingredientNotes = replaceInText(recipeData.ingredientNotes);
  }
  if (recipeData.storage) {
    recipeData.storage = replaceInText(recipeData.storage);
  }

  // Replace in tips and variations
  if (recipeData.tips && Array.isArray(recipeData.tips)) {
    recipeData.tips = recipeData.tips.map((tip: string) => replaceInText(tip));
  }
  if (recipeData.variations && Array.isArray(recipeData.variations)) {
    recipeData.variations = recipeData.variations.map((variation: string) => replaceInText(variation));
  }

  // Replace in FAQs
  if (recipeData.faqs && Array.isArray(recipeData.faqs)) {
    recipeData.faqs = recipeData.faqs.map((faq: any) => ({
      question: replaceInText(faq.question || ''),
      answer: replaceInText(faq.answer || ''),
    }));
  }

  return recipeData;
}

async function generateRecipeWithOpenAI(options: GenerateOptions): Promise<Recipe> {
  const { 
    title, 
    category, 
    veganType = ['whole-food-plant-based'], 
    maxTime,
    recipeTitle,
    ingredients,
    allergenFriendly,
    keywords,
    theme
  } = options;
  const openai = getOpenAIClient();

  // Use provided recipe title ONLY if it matches the verified unique title
  // If recipeTitle was a duplicate and we're using a different uniqueTitle, ignore recipeTitle
  // This prevents OpenAI from using a duplicate title that would cause slug conflicts
  const finalTitle = (recipeTitle && recipeTitle.toLowerCase().trim() === title.toLowerCase().trim()) 
    ? recipeTitle 
    : title;

  const maxTimeConstraint = maxTime 
    ? `\nCRITICAL TIME CONSTRAINT: The total time (prepTime + cookTime) MUST be ${maxTime} minutes or less. This is a hard requirement - the recipe must be quick and simple enough to complete within ${maxTime} minutes total.`
    : '';

  const ingredientsConstraint = ingredients
    ? `\nCRITICAL INGREDIENT REQUIREMENT: The recipe MUST include these specific ingredients: ${ingredients}. These ingredients should be prominently featured in the recipe. You can add other ingredients as needed, but these must be included.`
    : '';

  const allergenFriendlyConstraint = allergenFriendly
    ? `\nCRITICAL ALLERGEN-FRIENDLY REQUIREMENT: This recipe MUST be allergen-friendly. This means:
- NO gluten (use gluten-free alternatives like rice flour, almond flour, or certified gluten-free oats)
- NO nuts (avoid all tree nuts and peanuts - use seeds like sunflower seeds or pumpkin seeds as alternatives)
- NO soy (avoid tofu, tempeh, soy sauce - use alternatives like chickpea flour, coconut aminos, etc.)
- NO common allergens (avoid sesame, shellfish, eggs, dairy - all should already be vegan, but double-check)
- Clearly note in the recipe that it's allergen-friendly
- Provide allergen-free alternatives in ingredient notes where applicable`
    : '';

  const keywordsConstraint = keywords
    ? `\nRECIPE CONTEXT KEYWORDS: The recipe should embody these characteristics: ${keywords}. Use these keywords to guide the recipe's style, flavor profile, cooking method, and overall vibe. For example:
- If keywords include "comfort food", make it hearty, satisfying, and warming
- If "spicy", incorporate heat and bold flavors
- If "winter", use seasonal ingredients and warming spices
- If "quick" or "easy", keep it simple and fast
- If "healthy", emphasize whole foods and nutrition
- If "indulgent" or "decadent", make it rich and special
- If "light" or "fresh", keep it bright and not too heavy
- Let these keywords influence ingredient choices, cooking techniques, and the overall character of the dish`
    : '';

  const themeConstraint = theme
    ? `\nRECIPE THEME: This recipe should follow the "${theme}" theme. The theme should strongly influence:
- Ingredient selection (use ingredients typical of this theme)
- Flavor profiles (match the theme's characteristic flavors)
- Cooking methods (use techniques associated with this theme)
- Presentation style (reflect the theme's aesthetic)
- Cultural context (if applicable, honor the theme's culinary traditions)

Examples:
- "Mediterranean" theme: Use olive oil, tomatoes, herbs (oregano, basil, thyme), legumes, whole grains, fresh vegetables. Focus on simple, fresh, vibrant flavors.
- "Asian" theme: Use soy sauce alternatives (coconut aminos), ginger, garlic, sesame, rice, noodles, bok choy, mushrooms. Focus on umami, balance, and aromatic flavors.
- "Holiday" theme: Use warming spices (cinnamon, nutmeg, cloves), festive ingredients, rich flavors, special presentation. Make it feel celebratory and indulgent.
- "Comfort Food" theme: Use hearty, satisfying ingredients, rich textures, familiar flavors. Make it feel like a warm hug.
- "Summer" theme: Use fresh, light ingredients, cooling elements, bright flavors, minimal cooking. Make it refreshing and vibrant.
- "Winter" theme: Use hearty, warming ingredients, root vegetables, warming spices, slow-cooked methods. Make it cozy and nourishing.
- "Mexican" theme: Use beans, corn, peppers, cilantro, lime, avocado, cumin, chili. Focus on bold, vibrant, spicy flavors.
- "Italian" theme: Use tomatoes, basil, garlic, olive oil, herbs, pasta alternatives, legumes. Focus on simple, fresh, herbaceous flavors.

Let the theme guide every aspect of the recipe while keeping it 100% vegan.`
    : '';

  const prompt = `You are Katie, a barefoot chef who believes the kitchen is a sacred space and that plants are our best medicine. You're obsessed with whole foods, healing herbs, and cooking with intention. Your food philosophy is: nourish your body, respect Mother Earth, and eat with joy.

Create a detailed, accurate vegan recipe for "${finalTitle}" written in YOUR personal voice - warm, authentic, and conversational, like you're sharing a recipe with a friend.

CRITICAL REQUIREMENT: The "title" field in your JSON response MUST be exactly "${finalTitle}" - do not modify or change it.

ABSOLUTE VEGAN REQUIREMENT - NON-NEGOTIABLE:
This recipe MUST be 100% vegan. This is not optional. The following are FORBIDDEN and must NEVER appear in any form:
- NO meat (beef, pork, chicken, turkey, lamb, fish, seafood, etc.)
- NO dairy (milk, cheese, butter, cream, yogurt, sour cream, buttermilk, etc.)
- NO eggs (chicken eggs, duck eggs, or any egg products)
- NO honey (use maple syrup, agave, or other plant-based sweeteners)
- NO gelatin (use agar agar, pectin, or other plant-based gelling agents)
- NO animal-derived ingredients (whey, casein, lard, tallow, etc.)
- NO hidden animal products (check all ingredients carefully)

REQUIRED VEGAN SUBSTITUTIONS:
- Use plant-based milks (almond, soy, oat, coconut, cashew, etc.)
- Use vegan butter or oils instead of dairy butter
- Use plant-based cheeses (cashew cheese, nutritional yeast, etc.)
- Use egg substitutes (flax eggs, chia eggs, aquafaba, silken tofu, etc.)
- Use plant-based proteins (tofu, tempeh, seitan, legumes, etc.)
- Use plant-based sweeteners (maple syrup, agave, coconut sugar, etc.)

Requirements:
- The recipe must be completely vegan (no animal products) - this is MANDATORY
- All ingredients must be real, specific, and measurable
- Instructions must be detailed, step-by-step, and accurate
- Include realistic prep time, cook time, and servings
- Make it suitable for ${category.join(' and ')} category
- Vegan type: ${veganType.join(', ')}${maxTimeConstraint}${ingredientsConstraint}${allergenFriendlyConstraint}${keywordsConstraint}${themeConstraint}
- Write in first person ("I", "my", "me") - sound like a real person who has tested this recipe
- Include personal touches: specific tips you discovered, why you love this recipe, or a brief memory/anecdote
- Avoid generic marketing phrases like "absolutely delicious", "perfect for", "sure to become a favorite"
- Be warm, friendly, and slightly casual - use contractions

Return a JSON object with this exact structure:
{
  "title": "${finalTitle}",
  "description": "A brief, personal description (1-2 sentences) - mention something specific you love about this recipe, avoid generic phrases",
  "prologue": "A personal introduction (3-4 sentences) written in your voice - include a personal tip, memory, or why this recipe matters to you. Write conversationally, not like marketing copy.",
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
  "ingredientNotes": "Conversational notes about key ingredients and substitutions - write like you're explaining to a friend",
  "faqs": [
    {"question": "Common question", "answer": "Personal, helpful answer in your voice"}
  ],
  "tips": ["Personal tip from your experience (e.g., 'I keep mine in a glass jar - they stay fresh for days')", "Another personal tip"],
  "variations": ["Personal variation suggestion (e.g., 'Sometimes I'll throw in dark chocolate chunks if I'm feeling fancy')", "Another variation"],
  "storage": "Storage instructions written conversationally"
}

Ensure:
- All measurements are accurate and standard (cups, tbsp, tsp, oz, etc.)
- Cooking temperatures are specified (e.g., "350°F" or "175°C")
- Instructions are clear and actionable
- Times are realistic for the recipe type
- The recipe is actually cookable and accurate
- DOUBLE-CHECK: Every single ingredient must be plant-based - verify there are NO animal products in any form`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are Katie, a warm, authentic vegan chef who writes recipes in a personal, conversational style. You write like you\'re sharing recipes with friends who have actually tested them, not like a marketing department. Create accurate, detailed, and tested vegan recipes. CRITICAL: ALL recipes MUST be 100% vegan - NO animal products whatsoever (no meat, dairy, eggs, honey, gelatin, or any animal-derived ingredients). Use only plant-based ingredients and vegan substitutes. Always return valid JSON.',
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
  // Use the verified unique title (finalTitle) to ensure we check for the correct image
  // Don't use options.recipeTitle if it was a duplicate - use the unique title instead
  const imageTitle = finalTitle || recipeData.title || title;
  const recipeDescription = recipeData.description || '';
  
  const imageUrl = await generateRecipeImage(imageTitle, recipeDescription);

  let prepTime = recipeData.prepTime || 15;
  let cookTime = recipeData.cookTime || 20;
  let totalTime = prepTime + cookTime;
  
  // Validate and adjust maxTime constraint if provided
  if (maxTime && totalTime > maxTime) {
    // Try to proportionally reduce times to fit within maxTime
    const ratio = maxTime / totalTime;
    prepTime = Math.max(5, Math.floor(prepTime * ratio)); // Minimum 5 min prep
    cookTime = Math.max(5, Math.floor(cookTime * ratio)); // Minimum 5 min cook
    totalTime = prepTime + cookTime;
    
    // If still over, throw error (will trigger retry)
    if (totalTime > maxTime) {
      throw new Error(`Recipe total time (${totalTime}min) exceeds maxTime constraint (${maxTime}min). Retrying with adjusted times.`);
    }
    
    console.log(`   ⚠️  Adjusted times to fit maxTime: ${prepTime}min prep + ${cookTime}min cook = ${totalTime}min`);
  }

  // CRITICAL: Force the title to match what was requested (finalTitle/uniqueTitle) to prevent slug conflicts
  // OpenAI may ignore instructions and return a different title, but we must use the unique title
  // that was verified to be unique before the API call
  // Always prioritize the requested title (finalTitle) over what OpenAI returns
  const finalRecipeTitle = finalTitle || recipeData.title || title;
  
  // VALIDATE AND REPLACE: Ensure recipe is 100% vegan - detect and swap non-vegan ingredients
  // Use word boundaries to avoid false positives (e.g., "butternut" contains "butter", "coconut" contains "nut")
  const nonVeganPatterns = [
    /\b(beef|pork|chicken|turkey|lamb|veal|duck|goose)\b/i,
    /\b(fish|salmon|tuna|shrimp|crab|lobster|anchovy|sardine|mackerel|cod|halibut|seafood)\b/i,
    /\b(cow|sheep|goat)\s*(milk|cheese|yogurt|cream)\b/i,
    /\b(dairy|milk|buttermilk|whey|casein|lactose)\b/i,
    /\b(cheese|parmesan|mozzarella|cheddar|gouda|brie|feta|swiss|provolone|ricotta)\b/i,
    /\b(butter|cream|sour\s*cream|heavy\s*cream|whipping\s*cream)\b/i,
    /\b(egg|eggs|yolk|yolks|egg\s*white|egg\s*whites)\b/i,
    /\b(honey|beeswax|royal\s*jelly)\b/i,
    /\b(gelatin|gelatine|collagen)\b/i,
    /\b(lard|tallow|suet)\b/i,
    /\b(bacon|ham|sausage|pepperoni|prosciutto|pancetta)\b/i,
    /\b(worcestershire|anchovy|fish\s*sauce)\b/i,
  ];
  
  // Collect all text fields to check
  const allIngredientText = [
    ...(recipeData.ingredients || []).map((ing: any) => 
      `${ing.name || ''} ${ing.notes || ''}`.toLowerCase()
    ),
    ...(recipeData.instructions || []).map((inst: any) => 
      `${inst.text || ''}`.toLowerCase()
    ),
    (recipeData.ingredientNotes || '').toLowerCase(),
    (recipeData.description || '').toLowerCase(),
    (recipeData.prologue || '').toLowerCase(),
  ].join(' ');
  
  // Find all non-vegan ingredients
  const foundNonVegan: Set<string> = new Set();
  nonVeganPatterns.forEach((pattern) => {
    // matchAll requires a global regex, so create a new global version
    // Ensure 'g' flag is present (add it if not already there)
    const flags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
    const globalPattern = new RegExp(pattern.source, flags);
    const matches = allIngredientText.matchAll(globalPattern);
    for (const match of matches) {
      if (match[0]) {
        foundNonVegan.add(match[0].trim());
      }
    }
  });
  
  // If non-vegan ingredients found, replace them with vegan alternatives
  if (foundNonVegan.size > 0) {
    console.log(`   ⚠️  Found non-vegan ingredients: ${Array.from(foundNonVegan).join(', ')}`);
    console.log(`   🔄 Finding vegan alternatives and replacing...`);
    
    try {
      // Get vegan alternatives for all found non-vegan ingredients
      const replacements = await findVeganAlternatives(openai, Array.from(foundNonVegan), recipeData);
      
      // Apply replacements to all text fields
      recipeData = applyVeganReplacements(recipeData, replacements);
      
      console.log(`   ✅ Replaced non-vegan ingredients with vegan alternatives`);
    } catch (error: any) {
      console.warn(`   ⚠️  Failed to replace non-vegan ingredients: ${error.message}`);
      // If replacement fails, throw error to trigger regeneration
      throw new Error(
        `❌ VEGAN VALIDATION FAILED: Recipe contains non-vegan ingredients: ${Array.from(foundNonVegan).join(', ')}. ` +
        `Failed to find vegan alternatives. Please regenerate with only plant-based ingredients.`
      );
    }
  }
  
  const recipe: Recipe = {
    id,
    title: finalRecipeTitle,
    slug: generateSlug(finalRecipeTitle),
    description: recipeDescription,
    prologue: recipeData.prologue || '',
    image: imageUrl,
    prepTime,
    cookTime,
    totalTime,
    servings: recipeData.servings || 4,
    difficulty: recipeData.difficulty || 'easy',
    category,
    veganType,
    ingredients: recipeData.ingredients || [],
    instructions: recipeData.instructions || [],
    nutritionInfo: recipeData.nutritionInfo,
    tags: [...new Set([...(recipeData.tags || []), ...category, ...veganType])],
    author: 'Katie',
    datePublished: new Date().toISOString().split('T')[0],
    ingredientNotes: recipeData.ingredientNotes,
    faqs: recipeData.faqs,
    tips: recipeData.tips,
    variations: recipeData.variations,
    storage: recipeData.storage,
  };

  return recipe;
}

function getCategoryFilePath(category: RecipeCategory | string): string {
  const categoryMap: Record<string, string> = {
    baking: 'baking.ts',
    savory: 'savory.ts',
    international: 'international.ts',
    breakfast: 'breakfast.ts',
    lunch: 'lunch.ts',
    dinner: 'dinner.ts',
    dessert: 'dessert.ts',
    snack: 'snack.ts',
    beverage: 'beverage.ts',
  };

  // For new categories, use the category name as filename (sanitized)
  const filename = categoryMap[category] || `${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ts`;
  return path.join(process.cwd(), 'data', 'recipes', filename);
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

/**
 * Load all existing recipes from Supabase or static files
 * Returns a map of slug -> recipe and title -> recipe for duplicate checking
 */
async function loadAllExistingRecipes(useSupabase: boolean): Promise<{ bySlug: Map<string, Recipe>, byTitle: Map<string, Recipe>, byCoreName: Set<string> }> {
  const bySlug = new Map<string, Recipe>();
  const byTitle = new Map<string, Recipe>();
  const byCoreName = new Set<string>();
  
  // Always check Supabase if database is configured (regardless of useSupabase flag)
  // This ensures we catch duplicates even if saving to files
  const hasDatabaseConfig = !!(process.env.DIRECT_URL || process.env.DATABASE_URL);
  if (hasDatabaseConfig) {
    try {
      console.log('📊 Loading existing recipes from Supabase...');
      const slugs = await getAllRecipeSlugsFromSupabase();
      const titles = await getAllRecipeTitlesFromSupabase();
      
      // Add Supabase recipes to the maps
      for (const slug of slugs) {
        bySlug.set(slug, { slug } as Recipe);
      }
      
      for (const title of titles) {
        const normalizedTitle = title.toLowerCase().trim();
        byTitle.set(normalizedTitle, { title } as Recipe);
        // Also track core recipe names
        const coreName = extractCoreRecipeName(title);
        byCoreName.add(coreName);
      }
      
      console.log(`   ✅ Loaded ${slugs.size} recipes from Supabase (${slugs.size} slugs, ${titles.size} titles)`);
    } catch (error) {
      console.warn('⚠️  Could not load from Supabase:', error);
      // Continue to load static files even if Supabase fails
    }
  }
  
  // Also load from static files to catch any recipes not yet in Supabase
  // This ensures comprehensive duplicate checking
  console.log('📊 Loading existing recipes from static files...');
  
  // Load original recipes
  try {
    const originalPath = path.join(process.cwd(), 'data', 'recipes', 'originalRecipesData.ts');
    if (fs.existsSync(originalPath)) {
      const originalContent = fs.readFileSync(originalPath, 'utf-8');
      const slugMatches = Array.from(originalContent.matchAll(/slug:\s*'([^']+)'/g));
      const titleMatches = Array.from(originalContent.matchAll(/title:\s*'([^']+)'/g));
      
      // Extract slugs and titles (we'll use these for checking)
      for (const match of slugMatches) {
        const slug = match[1];
        // Find the corresponding title
        const recipeStart = originalContent.lastIndexOf('{', match.index!);
        const recipeEnd = originalContent.indexOf('},', match.index!);
        if (recipeStart !== -1 && recipeEnd !== -1) {
          const recipeBlock = originalContent.substring(recipeStart, recipeEnd);
          const titleMatch = recipeBlock.match(/title:\s*'([^']+)'/);
          if (titleMatch) {
            const title = titleMatch[1];
            const normalizedTitle = title.toLowerCase().trim();
            bySlug.set(slug, { slug } as Recipe);
            byTitle.set(normalizedTitle, { title } as Recipe);
            // Also track core recipe names
            const coreName = extractCoreRecipeName(title);
            byCoreName.add(coreName);
          }
        }
      }
    }
  } catch (error) {
    console.warn('⚠️  Could not load original recipes for duplicate check:', error);
  }
  
  // Load all category files
  const categoryFiles = [
    'baking.ts', 'savory.ts', 'international.ts', 'breakfast.ts',
    'lunch.ts', 'dinner.ts', 'dessert.ts', 'snack.ts', 'beverage.ts'
  ];
  
  for (const categoryFile of categoryFiles) {
    try {
      const categoryPath = path.join(process.cwd(), 'data', 'recipes', categoryFile);
      if (fs.existsSync(categoryPath)) {
        const categoryContent = fs.readFileSync(categoryPath, 'utf-8');
        
        // Extract all slugs and titles from this file
        const slugMatches = Array.from(categoryContent.matchAll(/slug:\s*'([^']+)'/g));
        const titleMatches = Array.from(categoryContent.matchAll(/title:\s*'([^']+)'/g));
        
        // Match slugs with titles by finding recipe blocks
        for (const slugMatch of slugMatches) {
          const slug = slugMatch[1];
          const slugIndex = slugMatch.index!;
          
          // Find the recipe block containing this slug
          const recipeStart = categoryContent.lastIndexOf('{', slugIndex);
          const recipeEnd = categoryContent.indexOf('},', slugIndex);
          
          if (recipeStart !== -1 && recipeEnd !== -1) {
            const recipeBlock = categoryContent.substring(recipeStart, recipeEnd);
            const titleMatch = recipeBlock.match(/title:\s*'([^']+)'/);
            if (titleMatch) {
              const title = titleMatch[1];
              const normalizedTitle = title.toLowerCase().trim();
              bySlug.set(slug, { slug, title } as Recipe);
              byTitle.set(normalizedTitle, { slug, title } as Recipe);
              // Also track core recipe names
              const coreName = extractCoreRecipeName(title);
              byCoreName.add(coreName);
            }
          }
        }
      }
    } catch (error) {
      console.warn(`⚠️  Could not load ${categoryFile} for duplicate check:`, error);
    }
  }
  
  const totalSlugs = bySlug.size;
  const totalTitles = byTitle.size;
  console.log(`   ✅ Loaded ${totalSlugs} total recipes from all sources (${totalSlugs} slugs, ${totalTitles} titles, ${byCoreName.size} unique core recipes)`);
  
  return { bySlug, byTitle, byCoreName };
}

/**
 * Check if a recipe is a duplicate (STRICT UNIQUE PROTOCOL)
 * Checks by both slug and title across ALL recipe files
 */
function isDuplicateRecipe(recipe: Recipe, existingRecipes: { bySlug: Map<string, Recipe>, byTitle: Map<string, Recipe>, byCoreName: Set<string> }): { isDuplicate: boolean; reason?: string } {
  // Check by slug (most important - must be unique)
  if (existingRecipes.bySlug.has(recipe.slug)) {
    const existing = existingRecipes.bySlug.get(recipe.slug)!;
    return {
      isDuplicate: true,
      reason: `Recipe with slug "${recipe.slug}" already exists (title: "${existing.title || 'unknown'}")`
    };
  }
  
  // Check by title (case-insensitive, trimmed)
  const normalizedTitle = recipe.title.toLowerCase().trim();
  if (existingRecipes.byTitle.has(normalizedTitle)) {
    const existing = existingRecipes.byTitle.get(normalizedTitle)!;
    return {
      isDuplicate: true,
      reason: `Recipe with title "${recipe.title}" already exists (slug: "${existing.slug || 'unknown'}")`
    };
  }
  
  // Also check if the core recipe name already exists
  const coreName = extractCoreRecipeName(recipe.title);
  if (existingRecipes.byCoreName.has(coreName)) {
    return {
      isDuplicate: true,
      reason: `Core recipe "${coreName}" already exists (variation of existing recipe)`
    };
  }
  
  return { isDuplicate: false };
}

async function saveRecipeToCategoryFile(recipe: Recipe, category: RecipeCategory | string): Promise<void> {
  const filePath = getCategoryFilePath(category);
  
  // Generate a valid variable name from category (e.g., "new-category" -> "newCategory")
  const categoryVarName = typeof category === 'string' 
    ? category.replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
              .replace(/^./, char => char.toLowerCase())
    : category;
  
  // Check if file exists, if not create it
  let fileContent: string;
  if (!fs.existsSync(filePath)) {
    // Create new category file
    console.log(`📁 Creating new category file: ${path.basename(filePath)}`);
    fileContent = `import { Recipe } from '@/types/recipe';

export const ${categoryVarName}Recipes: Recipe[] = [
];
`;
  } else {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  }

  // Find the export statement - match more flexibly
  const exportMatch = fileContent.match(/export const \w+Recipes: Recipe\[\] = \[([\s\S]*?)\];/);
  
  if (!exportMatch) {
    throw new Error(`Could not find export statement in ${filePath}. File content:\n${fileContent.substring(0, 200)}`);
  }

  const existingRecipes = exportMatch[1].trim();
  
  // STRICT UNIQUE CHECK: Check by slug in this file
  if (existingRecipes.includes(`slug: '${recipe.slug}'`)) {
    throw new Error(`❌ DUPLICATE DETECTED: Recipe with slug "${recipe.slug}" already exists in ${filePath}. STRICT UNIQUE PROTOCOL: Recipe not saved.`);
  }
  
  // Also check by title in this file (case-insensitive)
  const normalizedTitle = recipe.title.toLowerCase().trim();
  const titlePattern = new RegExp(`title:\\s*'([^']+)'`, 'gi');
  const titleMatches = Array.from(existingRecipes.matchAll(titlePattern));
  for (const match of titleMatches) {
    if (match[1].toLowerCase().trim() === normalizedTitle) {
      throw new Error(`❌ DUPLICATE DETECTED: Recipe with title "${recipe.title}" already exists in ${filePath}. STRICT UNIQUE PROTOCOL: Recipe not saved.`);
    }
  }
  
  const recipeString = formatRecipeForFile(recipe);
  
  // Add the new recipe before the closing bracket
  const newContent = fileContent.replace(
    /export const \w+Recipes: Recipe\[\] = \[([\s\S]*?)\];/,
    (match, existing) => {
      const trimmed = existing.trim();
      if (trimmed && !trimmed.endsWith(',')) {
        return `export const ${categoryVarName}Recipes: Recipe[] = [\n${trimmed},\n${recipeString}\n];`;
      } else if (trimmed) {
        return `export const ${categoryVarName}Recipes: Recipe[] = [\n${trimmed}\n${recipeString}\n];`;
      } else {
        return `export const ${categoryVarName}Recipes: Recipe[] = [\n${recipeString}\n];`;
      }
    }
  );

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`✅ Saved recipe "${recipe.title}" to ${path.basename(filePath)}`);
}

async function main() {
  const args = process.argv.slice(2);
  
  // Check for --supabase flag or if database is configured
  // Default to Supabase if DIRECT_URL or DATABASE_URL is set (unless --no-supabase flag is used)
  const hasDatabaseConfig = !!(process.env.DIRECT_URL || process.env.DATABASE_URL);
  const useSupabase = args.includes('--no-supabase') 
    ? false 
    : (args.includes('--supabase') || process.env.USE_SUPABASE === 'true' || hasDatabaseConfig);
  
  let count = 0;

  let maxTime: number | undefined;
  const targetCategories: RecipeCategory[] = [];
  const newCategories: string[] = [];
  let recipeTitle: string | undefined;
  let ingredients: string | undefined;
  let allergenFriendly = false;
  let keywords: string | undefined;
  let theme: string | undefined;
  let optimizeSEO = false;
  let gitPush = false;

  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--count' && args[i + 1]) {
      count = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--maxTime' && args[i + 1]) {
      maxTime = parseInt(args[i + 1], 10);
      if (isNaN(maxTime) || maxTime <= 0) {
        console.error('❌ Error: --maxTime must be a positive number');
        process.exit(1);
      }
      i++;
    } else if (args[i] === '--category' && args[i + 1]) {
      const category = args[i + 1].toLowerCase();
      if (ALL_CATEGORIES.includes(category as RecipeCategory)) {
        targetCategories.push(category as RecipeCategory);
      } else {
        console.error(`❌ Error: Invalid category "${category}". Valid categories: ${ALL_CATEGORIES.join(', ')}`);
        process.exit(1);
      }
      i++;
    } else if (args[i] === '--newCategory' && args[i + 1]) {
      const newCategory = args[i + 1].trim();
      if (newCategory.length === 0) {
        console.error('❌ Error: --newCategory requires a category name');
        process.exit(1);
      }
      newCategories.push(newCategory);
      i++;
    } else if (args[i] === '--title' && args[i + 1]) {
      recipeTitle = args[i + 1].trim();
      if (recipeTitle.length === 0) {
        console.error('❌ Error: --title requires a recipe title');
        process.exit(1);
      }
      i++;
    } else if (args[i] === '--ingredients' && args[i + 1]) {
      ingredients = args[i + 1].trim();
      if (ingredients.length === 0) {
        console.error('❌ Error: --ingredients requires a comma-delimited list');
        process.exit(1);
      }
      i++;
    } else if (args[i] === '--allergenFriendly' || args[i] === '--allergen-friendly') {
      allergenFriendly = true;
    } else if (args[i] === '--keywords' && args[i + 1]) {
      keywords = args[i + 1].trim();
      if (keywords.length === 0) {
        console.error('❌ Error: --keywords requires a comma-delimited list');
        process.exit(1);
      }
      i++;
    } else if (args[i] === '--theme' && args[i + 1]) {
      theme = args[i + 1].trim();
      if (theme.length === 0) {
        console.error('❌ Error: --theme requires a theme name');
        process.exit(1);
      }
      i++;
    } else if (args[i] === '--optimize-seo') {
      optimizeSEO = true;
    } else if (args[i] === '--git-push') {
      gitPush = true;
    }
  }
  
  // Add new categories to target categories (cast as RecipeCategory for type compatibility)
  const allTargetCategories: (RecipeCategory | string)[] = [
    ...targetCategories,
    ...newCategories,
  ];
  
  // Use all categories if none specified
  const categoriesToUse = allTargetCategories.length > 0 
    ? allTargetCategories 
    : ALL_CATEGORIES;

  if (!count || count <= 0) {
    console.error('❌ Error: --count is required and must be greater than 0');
    console.log('\n📖 Usage:');
    console.log('  npm run generate-recipes -- --count 50');
    console.log('  npm run generate-recipes -- --count 100 --category baking --category dessert');
    console.log('  npm run generate-recipes -- --count 20 --newCategory "raw-food" --maxTime 15');
    console.log('  npm run generate-recipes -- --count 1 --title "Vegan Chocolate Cake" --category dessert');
    console.log('  npm run generate-recipes -- --count 1 --title "Quinoa Salad" --ingredients "quinoa, tomatoes, cucumber, olive oil"');
    console.log('  npm run generate-recipes -- --count 1 --title "Gluten-Free Brownies" --allergenFriendly');
    console.log('  npm run generate-recipes -- --count 5 --keywords "comfort food, winter, hearty, spicy"');
    console.log('  npm run generate-recipes -- --count 1 --title "Cozy Soup" --keywords "warm, creamy, seasonal"');
    console.log('  npm run generate-recipes -- --count 5 --theme "Mediterranean"');
    console.log('  npm run generate-recipes -- --count 1 --title "Pad Thai" --theme "Asian"');
    console.log('\n💡 Options:');
    console.log('  --count <number>          Number of recipes to generate (required)');
    console.log('  --category <name>          Target specific category (can be used multiple times)');
    console.log('  --newCategory <name>       Create recipes in a new category (can be used multiple times)');
    console.log('  --maxTime <minutes>        Maximum total time for recipes');
    console.log('  --title <name>            Specific recipe title to use (for recipe and image generation)');
    console.log('  --ingredients <list>      Comma-delimited list of ingredients to include (e.g., "quinoa, tomatoes, olive oil")');
    console.log('  --allergenFriendly        Make recipe allergen-friendly (gluten-free, nut-free, soy-free, etc.)');
    console.log('  --keywords <list>          Comma-delimited keywords to set context (e.g., "comfort food, winter, hearty, spicy, quick, healthy")');
    console.log('  --theme <name>            Recipe theme (e.g., "Mediterranean", "Asian", "Holiday", "Comfort Food", "Summer", "Winter", "Mexican", "Italian")');
    console.log('  --supabase                Save to Supabase database');
    console.log('  --no-supabase             Force saving to static files');
    console.log('\n💡 If no categories are specified, recipes will be generated across all categories.');
    console.log('💡 If --title is provided, it will be used for both the recipe and image generation.');
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
  console.log(`📝 Generating ${count} recipe(s)`);
  if (categoriesToUse.length === ALL_CATEGORIES.length) {
    console.log(`📂 Categories: All categories (${ALL_CATEGORIES.join(', ')})`);
  } else {
    console.log(`📂 Target Categories: ${categoriesToUse.join(', ')}`);
    if (newCategories.length > 0) {
      console.log(`   🆕 New Categories: ${newCategories.join(', ')}`);
    }
  }
  if (maxTime) {
    console.log(`⏱️  Max Total Time: ${maxTime} minutes`);
  }
  if (recipeTitle) {
    console.log(`📝 Recipe Title: "${recipeTitle}"`);
  }
  if (ingredients) {
    console.log(`🥕 Required Ingredients: ${ingredients}`);
  }
  if (allergenFriendly) {
    console.log(`🌾 Allergen-Friendly: Enabled (gluten-free, nut-free, soy-free, etc.)`);
  }
  if (keywords) {
    console.log(`🏷️  Context Keywords: ${keywords}`);
  }
  if (theme) {
    console.log(`🎨 Theme: ${theme}`);
  }
  console.log(`💾 Saving to: ${useSupabase ? 'Supabase (database)' : 'Static files'}`);
  if (useSupabase && !hasDatabaseConfig) {
    console.log('   ⚠️  Warning: Database not configured, but --supabase flag was used');
  }
  console.log('');

  // Distribute recipes across categories
  // #region agent log
  debugLog('generate-recipes.ts:2007', 'Before distributeRecipesAcrossCategories', { count, hasRecipeTitle: !!recipeTitle, categoriesToUse, categoriesToUseLength: categoriesToUse.length }, 'B');
  // #endregion
  
  // If a specific recipe title is provided, we should infer category from title instead of using plan
  // Only create a recipe plan if we don't have a specific title
  let recipePlan: Array<{ category: RecipeCategory | string; title: string }>;
  if (recipeTitle && categoriesToUse.length === ALL_CATEGORIES.length) {
    // Infer category from title when no category is specified
    const inferredCategory = inferCategoryFromTitle(recipeTitle);
    recipePlan = [{ category: inferredCategory, title: recipeTitle }];
    
    // #region agent log
    debugLog('generate-recipes.ts:2010', 'Inferred category from title', { recipeTitle, inferredCategory }, 'B');
    // #endregion
  } else {
    recipePlan = distributeRecipesAcrossCategories(count, categoriesToUse);
    
    // #region agent log
    debugLog('generate-recipes.ts:2010', 'After distributeRecipesAcrossCategories', { planLength: recipePlan.length, firstCategory: recipePlan[0]?.category, firstTitle: recipePlan[0]?.title, hasRecipeTitle: !!recipeTitle }, 'B');
    // #endregion
  }
  
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

  // STRICT UNIQUE PROTOCOL: Load all existing recipes ONCE at the start
  console.log('🔍 Loading all existing recipes for duplicate checking...');
  const existingRecipes = await loadAllExistingRecipes(useSupabase);
  console.log(`   ✅ Found ${existingRecipes.bySlug.size} existing recipes (by slug)`);
  console.log(`   ✅ Found ${existingRecipes.byTitle.size} existing recipes (by title)`);
  console.log('');

  // Initialize OpenAI client for AI fallback when title pool is exhausted
  let openai: OpenAI | null = null;
  try {
    openai = getOpenAIClient();
  } catch (error) {
    console.warn('⚠️  OpenAI not available for title generation fallback. Will rely on predefined titles only.');
  }

  let successCount = 0;
  let failCount = 0;
  let skippedCount = 0;
  
  // Track all attempted titles/slugs in this batch to prevent duplicates within the same run
  const attemptedTitles = new Set<string>();
  const attemptedSlugs = new Set<string>();
  // Track core recipe names (without prefixes/suffixes) to prevent generating the same base recipe multiple times
  const usedCoreRecipes = new Set<string>();

  for (let i = 0; i < recipePlan.length; i++) {
    const { category, title: originalTitle } = recipePlan[i];
    console.log(`\n[${i + 1}/${count}] Generating recipe for category: ${category}...`);
    
    // #region agent log
    debugLog('generate-recipes.ts:2047', 'Recipe generation loop start', { i, count, category, originalTitle, hasRecipeTitle: !!recipeTitle, recipeTitle }, 'B');
    // #endregion
    
    try {
      // STRICT UNIQUE PROTOCOL: Find a unique title BEFORE generating
      // Retry loop: Keep checking until unique is found, max 100 attempts
      let uniqueTitle: string | null = null;
      let uniqueSlug: string | null = null;
      let checkAttempts = 0;
      const maxCheckAttempts = 100;
      
      // If a recipe title was provided via --title, use it directly (but still check for uniqueness)
      // Otherwise, start with the original title from the plan, or get a random one
      let candidateTitle: string | null = recipeTitle || originalTitle || getRandomRecipeTitle(category);
      
      // #region agent log
      debugLog('generate-recipes.ts:2061', 'Candidate title determined', { candidateTitle, category, hasRecipeTitle: !!recipeTitle, recipeTitle, originalTitle }, 'B');
      // #endregion
      
      while (checkAttempts < maxCheckAttempts) {
        checkAttempts++;
        
        if (!candidateTitle) {
          // If we have a recipeTitle, infer category from it instead of using the plan's category
          let categoryForNewTitle = category;
          if (recipeTitle) {
            const inferredCategory = inferCategoryFromTitle(recipeTitle);
            categoryForNewTitle = inferredCategory;
            
            // #region agent log
            debugLog('generate-recipes.ts:2175', 'Inferring category from recipeTitle', { recipeTitle, inferredCategory, originalCategory: category }, 'C');
            // #endregion
          }
          
          // Try to get a unique title (checks both title AND slug)
          candidateTitle = await getUniqueRecipeTitle(categoryForNewTitle, existingRecipes, attemptedTitles, attemptedSlugs, usedCoreRecipes, openai);
          if (!candidateTitle) {
            console.log(`   ⚠️  SKIPPED: No more unique recipe titles available for ${categoryForNewTitle} category after ${checkAttempts} attempts.`);
            skippedCount++;
            break; // Exit the retry loop
          }
        }
        
        const normalizedCandidate = candidateTitle.toLowerCase().trim();
        const candidateSlug = generateSlug(candidateTitle);
        
        // Check if this title/slug is unique (not in existing recipes AND not attempted in this batch)
        const isTitleUnique = !existingRecipes.byTitle.has(normalizedCandidate) && 
                              !attemptedTitles.has(normalizedCandidate);
        const isSlugUnique = !existingRecipes.bySlug.has(candidateSlug) && 
                             !attemptedSlugs.has(candidateSlug);
        
        if (isTitleUnique && isSlugUnique) {
          // Triple-check with the duplicate function for extra safety
          const testRecipe = { title: candidateTitle, slug: candidateSlug } as Recipe;
          const duplicateCheck = isDuplicateRecipe(testRecipe, existingRecipes);
          
          if (!duplicateCheck.isDuplicate) {
            // Found a unique title and slug!
            uniqueTitle = candidateTitle;
            uniqueSlug = candidateSlug;
            attemptedTitles.add(normalizedCandidate);
            attemptedSlugs.add(candidateSlug);
            
            // Track the core recipe name to prevent generating variations of the same base recipe
            const coreName = extractCoreRecipeName(candidateTitle);
            usedCoreRecipes.add(coreName);
            
            if (recipeTitle && normalizedCandidate !== recipeTitle.toLowerCase().trim()) {
              console.log(`   ⚠️  WARNING: Provided title "${recipeTitle}" was duplicate, using: "${uniqueTitle}"`);
            } else if (originalTitle && normalizedCandidate !== originalTitle.toLowerCase().trim()) {
              console.log(`   ℹ️  Original title "${originalTitle}" was duplicate, using: "${uniqueTitle}"`);
            }
            break; // Exit the retry loop - we found a unique title
          } else {
            // Mark as attempted even though it's a duplicate (shouldn't happen, but safety check)
            attemptedTitles.add(normalizedCandidate);
            attemptedSlugs.add(candidateSlug);
            console.log(`   ⚠️  Attempt ${checkAttempts}/${maxCheckAttempts}: "${candidateTitle}" is duplicate (${duplicateCheck.reason}). Trying another...`);
            candidateTitle = null; // Force getting a new title
            continue;
          }
        } else {
          // Mark as attempted
          attemptedTitles.add(normalizedCandidate);
          attemptedSlugs.add(candidateSlug);
          
          if (!isTitleUnique) {
            console.log(`   ⚠️  Attempt ${checkAttempts}/${maxCheckAttempts}: Title "${candidateTitle}" already exists. Trying another...`);
          } else if (!isSlugUnique) {
            console.log(`   ⚠️  Attempt ${checkAttempts}/${maxCheckAttempts}: Slug "${candidateSlug}" already exists. Trying another...`);
          }
          
          // Get a new candidate title for the next iteration (checks both title AND slug)
          // If we have a recipeTitle, infer category from it instead of using the plan's category
          let categoryForNewTitle = category;
          if (recipeTitle) {
            const inferredCategory = inferCategoryFromTitle(recipeTitle);
            categoryForNewTitle = inferredCategory;
            
            // #region agent log
            debugLog('generate-recipes.ts:2245', 'Inferring category from recipeTitle for new title', { recipeTitle, inferredCategory, originalCategory: category }, 'C');
            // #endregion
          }
          
          // #region agent log
          debugLog('generate-recipes.ts:2251', 'Calling getUniqueRecipeTitle after duplicate', { category: categoryForNewTitle, checkAttempts, previousCandidate: candidateTitle }, 'C');
          // #endregion
          
          candidateTitle = await getUniqueRecipeTitle(categoryForNewTitle, existingRecipes, attemptedTitles, attemptedSlugs, usedCoreRecipes, openai);
          
          // #region agent log
          debugLog('generate-recipes.ts:2256', 'getUniqueRecipeTitle returned after duplicate', { newCandidateTitle: candidateTitle, category: categoryForNewTitle, isOatmealRaisin: candidateTitle?.toLowerCase().includes('oatmeal') && candidateTitle?.toLowerCase().includes('raisin') }, 'C');
          // #endregion
        }
      }
      
      // If we exhausted all attempts without finding a unique title, skip this recipe
      if (!uniqueTitle || !uniqueSlug) {
        console.log(`   ⚠️  SKIPPED: Could not find a unique recipe title/slug for ${category} after ${checkAttempts} attempts.`);
        console.log(`   📋 STRICT UNIQUE PROTOCOL: Maximum check attempts (${maxCheckAttempts}) reached.`);
        skippedCount++;
        continue;
      }
      
      // If we have a recipeTitle, use inferred category instead of plan's category
      let categoryToUse = category;
      if (recipeTitle) {
        const inferredCategory = inferCategoryFromTitle(recipeTitle);
        categoryToUse = inferredCategory;
        
        // #region agent log
        debugLog('generate-recipes.ts:2278', 'Using inferred category for recipe generation', { recipeTitle, inferredCategory, originalCategory: category }, 'B');
        // #endregion
      }
      
      console.log(`   📝 Generating: "${uniqueTitle}" (${categoryToUse})...`);
      console.log(`   🔍 Pre-check: Title and slug are unique before API call (verified after ${checkAttempts} check(s))`);
      
      // Generate the recipe with the unique title
      // Retry if maxTime constraint is violated
      let recipe: Recipe | null = null;
      let generationAttempts = 0;
      const maxGenerationAttempts = 3;
      
      while (!recipe && generationAttempts < maxGenerationAttempts) {
        try {
          // #region agent log
          debugLog('generate-recipes.ts:2295', 'Before generateRecipeWithOpenAI', { uniqueTitle, category: categoryToUse, hasRecipeTitle: !!recipeTitle, recipeTitle }, 'B');
          // #endregion
          
          recipe = await generateRecipeWithOpenAI({
            maxTime,
            title: uniqueTitle!,
            category: [categoryToUse],
            veganType: ['whole-food-plant-based'],
            recipeTitle: recipeTitle, // Use provided title if available
            ingredients: ingredients, // Use provided ingredients if available
            allergenFriendly: allergenFriendly, // Use allergen-friendly flag if set
            keywords: keywords, // Use provided keywords if available
            theme: theme, // Use provided theme if available
          });
          
          // #region agent log
          debugLog('generate-recipes.ts:2310', 'After generateRecipeWithOpenAI', { generatedTitle: recipe?.title, generatedCategory: recipe?.category, requestedCategory: categoryToUse }, 'B');
          // #endregion
        } catch (error: any) {
          if (error.message?.includes('exceeds maxTime') && generationAttempts < maxGenerationAttempts - 1) {
            generationAttempts++;
            console.log(`   ⚠️  Recipe exceeded maxTime, retrying (attempt ${generationAttempts + 1}/${maxGenerationAttempts})...`);
            continue;
          }
          throw error;
        }
      }
      
      if (!recipe) {
        throw new Error('Failed to generate recipe within maxTime constraint after retries');
      }
      
      // CRITICAL: Always check for duplicates after generation
      // Even though we checked before, OpenAI might have modified the title despite our instructions
      const normalizedGeneratedTitle = recipe.title.toLowerCase().trim();
      const generatedSlug = recipe.slug;
      const titleChanged = normalizedGeneratedTitle !== uniqueTitle!.toLowerCase().trim();
      const slugChanged = generatedSlug !== uniqueSlug;
      
      // Check against existing recipes
      let duplicateCheck = isDuplicateRecipe(recipe, existingRecipes);
      
      // Check against batch attempts - but EXCLUDE the slug/title we reserved for this recipe
      // If the generated slug/title matches what we reserved, it's NOT a duplicate
      const isReservedSlug = generatedSlug === uniqueSlug;
      const isReservedTitle = normalizedGeneratedTitle === uniqueTitle!.toLowerCase().trim();
      
      // Only check for batch duplicates if it's NOT the reserved slug/title
      const isDuplicateInBatch = (!isReservedSlug && attemptedSlugs.has(generatedSlug)) || 
                                 (!isReservedTitle && attemptedTitles.has(normalizedGeneratedTitle));
      
      // If OpenAI changed the title/slug, we need to verify the new title/slug is unique
      if (titleChanged || slugChanged) {
        if (titleChanged) {
          console.log(`   ⚠️  WARNING: OpenAI changed title from "${uniqueTitle}" to "${recipe.title}"`);
        }
        if (slugChanged) {
          console.log(`   ⚠️  WARNING: Generated slug "${generatedSlug}" differs from expected "${uniqueSlug}"`);
        }
        // Re-check with the new title/slug
        duplicateCheck = isDuplicateRecipe(recipe, existingRecipes);
        
        if (duplicateCheck.isDuplicate || isDuplicateInBatch) {
          console.log(`   ❌ DUPLICATE DETECTED due to title/slug change: ${duplicateCheck.reason || `slug "${generatedSlug}" or title already in batch`}`);
          console.log(`   📋 STRICT UNIQUE PROTOCOL: Recipe not saved. Marking as attempted and skipping.`);
          
          // Mark as attempted so we don't try it again
          attemptedTitles.add(normalizedGeneratedTitle);
          attemptedSlugs.add(generatedSlug);
          
          failCount++;
          continue;
        }
      }
      
      // Final duplicate checks
      if (duplicateCheck.isDuplicate) {
        console.log(`   ❌ DUPLICATE DETECTED after generation: ${duplicateCheck.reason}`);
        console.log(`   📋 STRICT UNIQUE PROTOCOL: Recipe not saved (this should be rare).`);
        
        // Mark this title/slug as attempted so we don't try it again
        attemptedTitles.add(normalizedGeneratedTitle);
        attemptedSlugs.add(generatedSlug);
        
        failCount++;
        continue;
      }
      
      // Check if the generated slug conflicts with any attempted slugs in this batch (excluding reserved)
      if (isDuplicateInBatch) {
        console.log(`   ❌ DUPLICATE SLUG/TITLE DETECTED in this batch: "${generatedSlug}"`);
        console.log(`   📋 STRICT UNIQUE PROTOCOL: Recipe not saved.`);
        
        // Mark as attempted
        attemptedTitles.add(normalizedGeneratedTitle);
        attemptedSlugs.add(generatedSlug);
        
        failCount++;
        continue;
      }

      console.log(`✅ Generated: ${recipe.title}`);
      console.log(`   ⏱️  Prep: ${recipe.prepTime}min | Cook: ${recipe.cookTime}min | Total: ${recipe.totalTime}min`);
      console.log(`   👥 Servings: ${recipe.servings} | Difficulty: ${recipe.difficulty}`);
      console.log(`   📦 Ingredients: ${recipe.ingredients.length} | Steps: ${recipe.instructions.length}`);

      // Final duplicate check before saving (includes file-level checks)
      // This is the last line of defense against duplicates
      const finalDuplicateCheck = isDuplicateRecipe(recipe, existingRecipes);
      if (finalDuplicateCheck.isDuplicate) {
        console.log(`   ❌ DUPLICATE DETECTED before saving: ${finalDuplicateCheck.reason}`);
        console.log(`   📋 STRICT UNIQUE PROTOCOL: Recipe not saved.`);
        attemptedTitles.add(recipe.title.toLowerCase().trim());
        attemptedSlugs.add(recipe.slug);
        failCount++;
        continue;
      }
      
      // Optimize for SEO if flag is set
      if (optimizeSEO) {
        try {
          console.log(`   🔧 Optimizing for SEO...`);
          const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
          });
          // Create a simple logger for the optimization
          const logger = {
            log: (msg: string) => console.log(`      ${msg}`),
            success: (msg: string) => console.log(`      ✅ ${msg}`),
            warn: (msg: string) => console.log(`      ⚠️  ${msg}`),
            error: (msg: string) => console.log(`      ❌ ${msg}`),
          } as any;
          
          const seoOptimizations = await optimizeRecipeSEO(openai, recipe, logger);
          
          // Apply optimizations to recipe
          if (seoOptimizations.title) {
            recipe.title = seoOptimizations.title;
            recipe.slug = generateSlug(seoOptimizations.title);
          }
          if (seoOptimizations.description) {
            recipe.description = seoOptimizations.description;
          }
          if (seoOptimizations.prologue) {
            recipe.prologue = seoOptimizations.prologue;
          }
          if (seoOptimizations.tags) {
            recipe.tags = seoOptimizations.tags;
          }
          if (seoOptimizations.faqs) {
            recipe.faqs = seoOptimizations.faqs;
          }
          if (seoOptimizations.ingredientNotes) {
            recipe.ingredientNotes = seoOptimizations.ingredientNotes;
          }
          
          console.log(`   ✅ SEO optimization complete`);
        } catch (error: any) {
          console.warn(`   ⚠️  SEO optimization failed: ${error.message}`);
          // Continue with recipe generation even if SEO optimization fails
        }
      }
      
      // Save to Supabase or category file
      if (useSupabase) {
        try {
          await saveRecipeToSupabase(recipe);
          console.log(`   💾 Saved to Supabase`);
        } catch (error: any) {
          console.error(`   ❌ Error saving to Supabase: ${error.message}`);
          failCount++;
          continue;
        }
      } else {
        // Save to the category file (includes additional duplicate checks at file level)
        await saveRecipeToCategoryFile(recipe, category);
      }
      
      // CRITICAL: Add to existing recipes map IMMEDIATELY after successful save
      // This prevents duplicates in the same batch
      existingRecipes.bySlug.set(recipe.slug, recipe);
      existingRecipes.byTitle.set(recipe.title.toLowerCase().trim(), recipe);
      
      // Also mark as attempted in this batch
      attemptedTitles.add(recipe.title.toLowerCase().trim());
      attemptedSlugs.add(recipe.slug);
      
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
  if (skippedCount > 0) {
    console.log(`⚠️  Skipped (duplicates): ${skippedCount} recipe(s)`);
  }
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount} recipe(s)`);
  }
  console.log(`\n📋 STRICT UNIQUE PROTOCOL: All saved recipes are guaranteed unique by slug and title.`);
  
  // Commit and push recipe images to git (only if flag is set and recipes were successfully generated)
  if (gitPush && successCount > 0) {
    try {
      console.log('\n🔍 Checking for new recipe images...');
      const result = await commitAndPushRecipeImages(successCount);
      
      if (result.success) {
        if (result.filesCommitted > 0) {
          console.log(`   ✅ ${result.message}`);
        } else {
          console.log(`   ℹ️  ${result.message}`);
        }
      } else {
        console.warn(`   ⚠️  ${result.message || result.error}`);
        console.warn('   Recipe images were generated but not committed to git.');
      }
    } catch (error: any) {
      console.warn(`\n⚠️  Warning: Failed to commit/push recipe images: ${error.message}`);
      console.warn('   Recipe images were generated but not committed to git.');
    }
  } else if (successCount > 0 && !gitPush) {
    console.log('\n💡 Tip: Use --git-push flag to automatically commit and push recipe images to git.');
  }
  
  console.log('⚠️  Next step: Run "npm run build" to rebuild the site with new recipes\n');
}

if (require.main === module) {
  main().catch(console.error);
}

export { generateRecipeWithOpenAI, saveRecipeToCategoryFile };
