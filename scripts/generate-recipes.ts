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
import { 
  saveRecipeToSupabase, 
  checkRecipeExistsInSupabase,
  getAllRecipeSlugsFromSupabase,
  getAllRecipeTitlesFromSupabase,
} from './save-recipe-to-supabase';

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
 */
async function generateRecipeImage(recipeTitle: string, description: string, retryCount: number = 0): Promise<string> {
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
    
    // Create a detailed prompt for food photography
    const imagePrompt = `Professional food photography of ${recipeTitle}, ${description}, vegan recipe, high quality, appetizing, well-lit, food styling, shallow depth of field, restaurant quality, food blog style, natural lighting, vibrant colors, on a clean background, professional photography`;

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
 * Get a unique recipe title for a category
 * Tries multiple random titles until finding one that doesn't exist
 * Returns null if no unique title can be found after max attempts
 */
function getUniqueRecipeTitle(
  category: RecipeCategory,
  existingRecipes: { byTitle: Map<string, Recipe> },
  maxAttempts: number = 50
): string | null {
  const titles = RECIPE_TITLES_BY_CATEGORY[category];
  const attemptedTitles = new Set<string>();
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const randomTitle = getRandomRecipeTitle(category);
    const normalizedTitle = randomTitle.toLowerCase().trim();
    
    // Check if we've already tried this title in this search
    if (attemptedTitles.has(normalizedTitle)) {
      continue;
    }
    attemptedTitles.add(normalizedTitle);
    
    // Check if this title already exists in our recipe database
    if (!existingRecipes.byTitle.has(normalizedTitle)) {
      return randomTitle; // Found a unique title!
    }
  }
  
  // Couldn't find a unique title after max attempts
  return null;
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
}

async function generateRecipeWithOpenAI(options: GenerateOptions): Promise<Recipe> {
  const { title, category, veganType = ['whole-food-plant-based'], maxTime } = options;
  const openai = getOpenAIClient();

  const maxTimeConstraint = maxTime 
    ? `\nCRITICAL TIME CONSTRAINT: The total time (prepTime + cookTime) MUST be ${maxTime} minutes or less. This is a hard requirement - the recipe must be quick and simple enough to complete within ${maxTime} minutes total.`
    : '';

  const prompt = `Create a detailed, accurate vegan recipe for "${title}". 

CRITICAL REQUIREMENT: The "title" field in your JSON response MUST be exactly "${title}" - do not modify or change it.

Requirements:
- The recipe must be completely vegan (no animal products)
- All ingredients must be real, specific, and measurable
- Instructions must be detailed, step-by-step, and accurate
- Include realistic prep time, cook time, and servings
- Make it suitable for ${category.join(' and ')} category
- Vegan type: ${veganType.join(', ')}${maxTimeConstraint}

Return a JSON object with this exact structure:
{
  "title": "${title}",
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

  const recipe: Recipe = {
    id,
    title: recipeTitle,
    slug: generateSlug(recipeTitle),
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
async function loadAllExistingRecipes(useSupabase: boolean): Promise<{ bySlug: Map<string, Recipe>, byTitle: Map<string, Recipe> }> {
  const bySlug = new Map<string, Recipe>();
  const byTitle = new Map<string, Recipe>();
  
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
            bySlug.set(slug, { slug } as Recipe);
            byTitle.set(title.toLowerCase().trim(), { title } as Recipe);
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
              bySlug.set(slug, { slug, title } as Recipe);
              byTitle.set(title.toLowerCase().trim(), { slug, title } as Recipe);
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
  console.log(`   ✅ Loaded ${totalSlugs} total recipes from all sources (${totalSlugs} slugs, ${totalTitles} titles)`);
  
  return { bySlug, byTitle };
}

/**
 * Check if a recipe is a duplicate (STRICT UNIQUE PROTOCOL)
 * Checks by both slug and title across ALL recipe files
 */
function isDuplicateRecipe(recipe: Recipe, existingRecipes: { bySlug: Map<string, Recipe>, byTitle: Map<string, Recipe> }): { isDuplicate: boolean; reason?: string } {
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
    console.log('\n💡 Options:');
    console.log('  --count <number>          Number of recipes to generate (required)');
    console.log('  --category <name>          Target specific category (can be used multiple times)');
    console.log('  --newCategory <name>       Create recipes in a new category (can be used multiple times)');
    console.log('  --maxTime <minutes>        Maximum total time for recipes');
    console.log('  --supabase                Save to Supabase database');
    console.log('  --no-supabase             Force saving to static files');
    console.log('\n💡 If no categories are specified, recipes will be generated across all categories.');
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
  console.log(`💾 Saving to: ${useSupabase ? 'Supabase (database)' : 'Static files'}`);
  if (useSupabase && !hasDatabaseConfig) {
    console.log('   ⚠️  Warning: Database not configured, but --supabase flag was used');
  }
  console.log('');

  // Distribute recipes across categories
  const recipePlan = distributeRecipesAcrossCategories(count, categoriesToUse);
  
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

  let successCount = 0;
  let failCount = 0;
  let skippedCount = 0;
  
  // Track all attempted titles/slugs in this batch to prevent duplicates within the same run
  const attemptedTitles = new Set<string>();
  const attemptedSlugs = new Set<string>();

  for (let i = 0; i < recipePlan.length; i++) {
    const { category, title: originalTitle } = recipePlan[i];
    console.log(`\n[${i + 1}/${count}] Generating recipe for category: ${category}...`);
    
    try {
      // STRICT UNIQUE PROTOCOL: Find a unique title BEFORE generating
      // Retry loop: Keep checking until unique is found, max 100 attempts
      let uniqueTitle: string | null = null;
      let uniqueSlug: string | null = null;
      let checkAttempts = 0;
      const maxCheckAttempts = 100;
      
      // Start with the original title from the plan, or get a random one
      let candidateTitle: string | null = originalTitle || getRandomRecipeTitle(category);
      
      while (checkAttempts < maxCheckAttempts) {
        checkAttempts++;
        
        if (!candidateTitle) {
          // No more titles available, try getting a random one
          candidateTitle = getRandomRecipeTitle(category);
          if (!candidateTitle) {
            console.log(`   ⚠️  SKIPPED: No more recipe titles available for ${category} category.`);
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
          // Double-check with the duplicate function
          const testRecipe = { title: candidateTitle, slug: candidateSlug } as Recipe;
          const duplicateCheck = isDuplicateRecipe(testRecipe, existingRecipes);
          
          if (!duplicateCheck.isDuplicate) {
            // Found a unique title and slug!
            uniqueTitle = candidateTitle;
            uniqueSlug = candidateSlug;
            attemptedTitles.add(normalizedCandidate);
            attemptedSlugs.add(candidateSlug);
            
            if (originalTitle && normalizedCandidate !== originalTitle.toLowerCase().trim()) {
              console.log(`   ℹ️  Original title "${originalTitle}" was duplicate, using: "${uniqueTitle}"`);
            }
            break; // Exit the retry loop - we found a unique title
          } else {
            // Mark as attempted even though it's a duplicate
            attemptedTitles.add(normalizedCandidate);
            attemptedSlugs.add(candidateSlug);
            console.log(`   ⚠️  Attempt ${checkAttempts}/${maxCheckAttempts}: "${candidateTitle}" is duplicate (${duplicateCheck.reason}). Trying another...`);
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
        }
        
        // Get a new candidate title for the next iteration
        candidateTitle = getUniqueRecipeTitle(category, existingRecipes);
      }
      
      // If we exhausted all attempts without finding a unique title, skip this recipe
      if (!uniqueTitle || !uniqueSlug) {
        console.log(`   ⚠️  SKIPPED: Could not find a unique recipe title/slug for ${category} after ${checkAttempts} attempts.`);
        console.log(`   📋 STRICT UNIQUE PROTOCOL: Maximum check attempts (${maxCheckAttempts}) reached.`);
        skippedCount++;
        continue;
      }
      
      console.log(`   📝 Generating: "${uniqueTitle}" (${category})...`);
      console.log(`   🔍 Pre-check: Title and slug are unique before API call (verified after ${checkAttempts} check(s))`);
      
      // Generate the recipe with the unique title
      // Retry if maxTime constraint is violated
      let recipe: Recipe | null = null;
      let generationAttempts = 0;
      const maxGenerationAttempts = 3;
      
      while (!recipe && generationAttempts < maxGenerationAttempts) {
        try {
          recipe = await generateRecipeWithOpenAI({
            maxTime,
            title: uniqueTitle!,
            category: [category],
            veganType: ['whole-food-plant-based'],
          });
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
  console.log('⚠️  Next step: Run "npm run build" to rebuild the site with new recipes\n');
}

if (require.main === module) {
  main().catch(console.error);
}

export { generateRecipeWithOpenAI, saveRecipeToCategoryFile };
