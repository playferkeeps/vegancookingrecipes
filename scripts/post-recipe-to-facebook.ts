/**
 * Script to post random recipe URLs to Facebook Page
 * Uses Facebook Graph API to post to a page
 * 
 * Usage:
 *   npm run post-recipe-to-facebook
 * 
 * Or run on a schedule with cron:
 *   0 \*\/6 * * * cd /path/to/cooking-site && npm run post-recipe-to-facebook
 */

import 'dotenv/config';
import { getAllRecipesAsync } from '../data/recipes/helpers';

interface FacebookApiConfig {
  pageAccessToken: string;
  pageId: string;
}

/**
 * Get formatted timestamp for logging
 */
function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Log with timestamp
 */
function logWithTimestamp(message: string, type: 'log' | 'error' | 'warn' = 'log'): void {
  const timestamp = getTimestamp();
  const formattedMessage = `[${timestamp}] ${message}`;
  
  switch (type) {
    case 'error':
      console.error(formattedMessage);
      break;
    case 'warn':
      console.warn(formattedMessage);
      break;
    default:
      console.log(formattedMessage);
  }
}

/**
 * Get random recipe
 */
async function getRandomRecipe() {
  const recipes = await getAllRecipesAsync();
  if (recipes.length === 0) {
    throw new Error('No recipes found');
  }
  
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

/**
 * Get and validate site URL
 * Ensures URLs are always from our domain
 */
function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const defaultUrl = 'https://vegancooking.recipes';
  
  // If no env var, use default
  if (!envUrl) {
    logWithTimestamp(`⚠️  NEXT_PUBLIC_SITE_URL not set, using default: ${defaultUrl}`, 'warn');
    return defaultUrl;
  }
  
  // Validate URL format
  let url: URL;
  try {
    url = new URL(envUrl);
  } catch {
    logWithTimestamp(`⚠️  Invalid NEXT_PUBLIC_SITE_URL format, using default: ${defaultUrl}`, 'warn');
    return defaultUrl;
  }
  
  // Ensure it's from our domain (vegancooking.recipes)
  const allowedDomains = [
    'vegancooking.recipes',
    'www.vegancooking.recipes',
    'localhost', // For development
  ];
  
  const hostname = url.hostname.toLowerCase();
  const isAllowed = allowedDomains.some(domain => 
    hostname === domain || hostname.endsWith(`.${domain}`)
  );
  
  if (!isAllowed) {
    logWithTimestamp(`❌ NEXT_PUBLIC_SITE_URL (${envUrl}) is not from vegancooking.recipes domain!`, 'error');
    logWithTimestamp(`   Using default: ${defaultUrl}`, 'error');
    return defaultUrl;
  }
  
  // Ensure HTTPS in production (unless localhost)
  if (!hostname.includes('localhost') && url.protocol !== 'https:') {
    logWithTimestamp(`⚠️  NEXT_PUBLIC_SITE_URL should use HTTPS in production`, 'warn');
    url.protocol = 'https:';
  }
  
  // Remove trailing slash
  return url.toString().replace(/\/$/, '');
}

/**
 * Generate engaging Facebook post text for a recipe with engagement hooks
 */
function generatePostText(recipe: { title: string; slug: string; description?: string; category?: string[] }): string {
  const baseUrl = getSiteUrl();
  const recipeUrl = `${baseUrl}/recipes/${recipe.slug}`;
  
  // Validate the URL is from our domain before posting
  if (!recipeUrl.includes('vegancooking.recipes') && !recipeUrl.includes('localhost')) {
    throw new Error(`Invalid recipe URL: ${recipeUrl} - must be from vegancooking.recipes domain`);
  }

  const emojis = ['🌱', '🥕', '🥗', '🍽️', '✨', '💚', '🌿', '🥑', '🍃', '🥬'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Engagement questions for Facebook
  const engagementQuestions = [
    "Who's trying this recipe this week? Let me know in the comments! 👇",
    "Have you made something similar? Share your tips below! 💬",
    "What's your go-to vegan recipe? Drop it in the comments! 🥕",
    "Tag a friend who would love this! 👥",
    "What would you pair this with? Let's chat! 💭",
    "Save this post for later! 📌",
    "Who's cooking this weekend? 🙋‍♀️",
  ];

  // Recipe-specific hooks
  const getRecipeHook = (title: string, category?: string[]): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('easy') || lowerTitle.includes('quick')) {
      return "Quick, easy, and absolutely delicious! Perfect for busy weeknights. ⚡";
    }
    if (lowerTitle.includes('comfort') || lowerTitle.includes('cozy')) {
      return "The ultimate comfort food, made vegan! Perfect for those cozy nights in. 🏠";
    }
    if (category?.some(c => c.toLowerCase().includes('dessert'))) {
      return "Who says vegan desserts can't be amazing? This one will blow your mind! 🍰";
    }
    return "A new favorite that's sure to impress! 🌟";
  };

  const randomQuestion = engagementQuestions[Math.floor(Math.random() * engagementQuestions.length)];
  const recipeHook = getRecipeHook(recipe.title, recipe.category);

  let postText = `${randomEmoji} ${recipe.title}\n\n`;
  
  // Add recipe hook
  postText += `${recipeHook}\n\n`;
  
  if (recipe.description) {
    // Truncate description if too long (Facebook has a 5000 character limit, but we'll keep it shorter)
    const maxDescriptionLength = 180;
    if (recipe.description.length > maxDescriptionLength) {
      postText += `${recipe.description.substring(0, maxDescriptionLength)}...\n\n`;
    } else {
      postText += `${recipe.description}\n\n`;
    }
  }
  
  // Add engagement question
  postText += `${randomQuestion}\n\n`;
  
  // Add CTA and URL
  postText += `👉 Get the full recipe: ${recipeUrl}\n\n`;
  
  // Comprehensive hashtag strategy - 30 hashtags for maximum reach
  const baseHashtags = [
    '#VeganRecipes', '#PlantBased', '#VeganCooking', '#HealthyEating', '#VeganFood',
    '#VeganMeals', '#PlantBasedCooking', '#VeganRecipe', '#VeganLife', '#VeganFoodie',
    '#VeganCommunity', '#VeganFoodShare', '#PlantBasedRecipes', '#VeganCookingTips', '#VeganMealIdeas',
    '#VeganDinner', '#VeganLunch', '#VeganBreakfast', '#VeganDessert', '#VeganSnacks',
    '#VeganBaking', '#VeganChef', '#VeganFoodBlog', '#VeganFoodPorn', '#VeganFoodLover',
    '#PlantBasedFood', '#PlantBasedDiet', '#VeganEats', '#VeganYum', '#VeganInspiration',
  ];
  
  // Category-specific hashtags
  const categoryHashtags = recipe.category?.map(cat => {
    const capitalized = cat.charAt(0).toUpperCase() + cat.slice(1);
    return `#Vegan${capitalized}`;
  }) || [];
  
  // Additional niche hashtags
  const nicheHashtags = [
    '#VeganFoodPhotography', '#VeganFoodBlogger', '#PlantBasedLiving', '#VeganLifestyle',
    '#VeganFoodJourney', '#VeganFoodAdventure', '#VeganFoodLove', '#VeganFoodGram',
  ];
  
  // Combine all hashtags, remove duplicates, and ensure we have exactly 30
  const hashtagSet = new Set([
    ...baseHashtags,
    ...categoryHashtags.slice(0, 5), // Up to 5 category hashtags
    ...nicheHashtags.slice(0, 5), // Up to 5 niche hashtags
  ]);
  
  // Convert to array and trim to exactly 30 hashtags
  const allHashtags = Array.from(hashtagSet).slice(0, 30);
  
  postText += allHashtags.join(' ');

  return postText;
}

/**
 * Post to Facebook Page using Graph API
 */
async function postToFacebook(
  message: string,
  link: string,
  config: FacebookApiConfig
): Promise<{ success: boolean; postId?: string; error?: string }> {
  try {
    // Facebook Graph API endpoint for posting to a page
    const url = `https://graph.facebook.com/v18.0/${config.pageId}/feed`;

    const params = new URLSearchParams({
      message: message,
      link: link,
      access_token: config.pageAccessToken,
    });

    const response = await fetch(`${url}?${params.toString()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      logWithTimestamp(`Facebook API Error: ${JSON.stringify(data)}`, 'error');
      return {
        success: false,
        error: data.error?.message || data.error?.error_user_msg || 'Failed to post to Facebook',
      };
    }

    return {
      success: true,
      postId: data.id,
    };
  } catch (error: any) {
    logWithTimestamp(`Error posting to Facebook: ${error.message || error}`, 'error');
    return {
      success: false,
      error: error.message || 'Unknown error',
    };
  }
}

/**
 * Main function
 * @param shouldExit - If true, calls process.exit() on errors (for direct execution)
 */
async function main(shouldExit: boolean = false) {
  logWithTimestamp('🍽️  Starting recipe post to Facebook...\n');

  // Validate site URL first - ensure it's from our domain
  const siteUrl = getSiteUrl();
  logWithTimestamp(`🌐 Using site URL: ${siteUrl}`);
  
  // Verify it's from our domain
  if (!siteUrl.includes('vegancooking.recipes') && !siteUrl.includes('localhost')) {
    const error = new Error(`Site URL must be from vegancooking.recipes domain! Current: ${siteUrl}`);
    logWithTimestamp(`❌ ${error.message}`, 'error');
    logWithTimestamp('   Set NEXT_PUBLIC_SITE_URL to https://vegancooking.recipes', 'error');
    if (shouldExit) process.exit(1);
    throw error;
  }

  // Check environment variables
  const config: FacebookApiConfig = {
    pageAccessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN || '',
    pageId: process.env.FACEBOOK_PAGE_ID || '',
  };

  if (!config.pageAccessToken || !config.pageId) {
    const error = new Error('Missing Facebook API credentials!');
    logWithTimestamp(`❌ ${error.message}`, 'error');
    logWithTimestamp('\nRequired environment variables:', 'error');
    logWithTimestamp('  FACEBOOK_PAGE_ACCESS_TOKEN', 'error');
    logWithTimestamp('  FACEBOOK_PAGE_ID', 'error');
    logWithTimestamp('\nSee FACEBOOK_API_SETUP.md for instructions.', 'error');
    if (shouldExit) process.exit(1);
    throw error;
  }

  try {
    // Get random recipe
    logWithTimestamp('📖 Fetching recipes...');
    const recipe = await getRandomRecipe();
    logWithTimestamp(`✅ Selected recipe: "${recipe.title}"`);

    // Generate post text
    const postText = generatePostText(recipe);
    const recipeUrl = `${siteUrl}/recipes/${recipe.slug}`;
    
    logWithTimestamp(`\n📝 Post text:\n${postText}\n`);
    logWithTimestamp(`🔗 Recipe URL: ${recipeUrl}\n`);

    // Post to Facebook
    logWithTimestamp('📘 Posting to Facebook...');
    const result = await postToFacebook(postText, recipeUrl, config);

    if (result.success) {
      logWithTimestamp(`✅ Successfully posted to Facebook!`);
      logWithTimestamp(`   Post ID: ${result.postId}`);
      logWithTimestamp(`   Recipe: ${recipe.title}`);
      logWithTimestamp(`   URL: ${recipeUrl}`);
    } else {
      logWithTimestamp(`❌ Failed to post to Facebook: ${result.error}`, 'error');
      if (shouldExit) process.exit(1);
      throw new Error(result.error);
    }
  } catch (error: any) {
    logWithTimestamp(`❌ Error: ${error.message}`, 'error');
    if (shouldExit) process.exit(1);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  main(true);
}

export { main as postRecipeToFacebook };

