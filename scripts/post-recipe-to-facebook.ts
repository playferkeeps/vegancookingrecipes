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
 * Generate post text for a recipe
 */
function generatePostText(recipe: { title: string; slug: string; description?: string }): string {
  const baseUrl = getSiteUrl();
  const recipeUrl = `${baseUrl}/recipes/${recipe.slug}`;
  
  // Validate the URL is from our domain before posting
  if (!recipeUrl.includes('vegancooking.recipes') && !recipeUrl.includes('localhost')) {
    throw new Error(`Invalid recipe URL: ${recipeUrl} - must be from vegancooking.recipes domain`);
  }

  const emojis = ['🌱', '🥕', '🥗', '🍽️', '✨', '💚', '🌿', '🥑'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  let postText = `${randomEmoji} ${recipe.title}\n\n`;
  
  if (recipe.description) {
    // Truncate description if too long (Facebook has a 5000 character limit, but we'll keep it shorter)
    const maxDescriptionLength = 200;
    if (recipe.description.length > maxDescriptionLength) {
      postText += `${recipe.description.substring(0, maxDescriptionLength)}...\n\n`;
    } else {
      postText += `${recipe.description}\n\n`;
    }
  }
  
  postText += `👉 Get the full recipe: ${recipeUrl}\n\n`;
  postText += `#VeganRecipes #PlantBased #VeganCooking #HealthyEating`;

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

