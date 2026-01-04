/**
 * Script to post random recipe URLs to X (Twitter)
 * Uses X API v2 to post tweets
 * 
 * Usage:
 *   npm run post-recipe-to-x
 * 
 * Or run on a schedule with cron:
 *   0 \*\/6 * * * cd /path/to/cooking-site && npm run post-recipe-to-x
 */

import 'dotenv/config';
import OAuth from 'oauth-1.0a';
import crypto from 'crypto';
import { getAllRecipesAsync } from '../data/recipes/helpers';
import { Logger } from '../lib/logger';

interface XApiConfig {
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  accessTokenSecret: string;
  bearerToken?: string; // Optional: for OAuth 2.0
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
    // Note: Logger not available here, use console for early warnings
    console.warn(`⚠️  [${new Date().toISOString()}] NEXT_PUBLIC_SITE_URL not set, using default: ${defaultUrl}`);
    return defaultUrl;
  }
  
  // Validate URL format
  let url: URL;
  try {
    url = new URL(envUrl);
  } catch {
    // Note: Logger not available here, use console for early warnings
    console.warn(`⚠️  [${new Date().toISOString()}] Invalid NEXT_PUBLIC_SITE_URL format, using default: ${defaultUrl}`);
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
    // Note: Logger not available here, use console for early errors
    console.error(`❌ [${new Date().toISOString()}] NEXT_PUBLIC_SITE_URL (${envUrl}) is not from vegancooking.recipes domain!`);
    console.error(`   [${new Date().toISOString()}] Using default: ${defaultUrl}`);
    return defaultUrl;
  }
  
  // Ensure HTTPS in production (unless localhost)
  if (!hostname.includes('localhost') && url.protocol !== 'https:') {
    // Note: Logger not available here, use console for early warnings
    console.warn(`⚠️  [${new Date().toISOString()}] NEXT_PUBLIC_SITE_URL should use HTTPS in production`);
    url.protocol = 'https:';
  }
  
  // Remove trailing slash
  return url.toString().replace(/\/$/, '');
}

/**
 * Generate engaging tweet text for a recipe with engagement hooks
 * Ensures the full URL is always included and never truncated
 */
function generateTweetText(recipe: { title: string; slug: string; description?: string; category?: string[] }): string {
  const baseUrl = getSiteUrl();
  const recipeUrl = `${baseUrl}/recipes/${recipe.slug}`;
  
  // Validate the URL is from our domain before posting
  if (!recipeUrl.includes('vegancooking.recipes') && !recipeUrl.includes('localhost')) {
    throw new Error(`Invalid recipe URL: ${recipeUrl} - must be from vegancooking.recipes domain`);
  }
  
  // Create engaging tweet text
  const emojis = ['🌱', '🥕', '🥗', '🍽️', '✨', '💚', '🌿', '🍃'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Short engagement hooks that fit in tweets
  const engagementHooks = [
    "Who's trying this? 👇",
    "Save for later! 📌",
    "Tag someone! 👥",
    "Drop a ❤️ if you're saving this!",
    "What do you think? 💭",
  ];
  
  // Build the fixed parts (emoji, title, URL with spacing)
  // Twitter counts URLs as 23 characters, but we need to ensure the full URL is included
  const urlWithSpacing = `\n\n${recipeUrl}`;
  const titleWithEmoji = `${randomEmoji} ${recipe.title}`;
  const randomHook = engagementHooks[Math.floor(Math.random() * engagementHooks.length)];
  
  // Calculate available space for description and hook
  // 280 char limit - title - URL - spacing - hook
  const fixedPartsLength = titleWithEmoji.length + urlWithSpacing.length + randomHook.length + 3; // +3 for spacing
  const maxDescriptionLength = Math.max(0, 280 - fixedPartsLength - 10); // -10 for safety buffer
  
  // Start with title and emoji
  let tweetText = titleWithEmoji;
  
  // Add description if it fits (truncate description only, never the URL)
  if (recipe.description && maxDescriptionLength > 0) {
    const description = recipe.description.substring(0, maxDescriptionLength);
    if (description.length > 0) {
      tweetText += ` - ${description}`;
    }
  }
  
  // Add engagement hook
  tweetText += `\n\n${randomHook}`;
  
  // Always append the full URL (never truncate this)
  tweetText += urlWithSpacing;
  
  // Final safety check: if somehow still too long, truncate description further
  // But NEVER truncate the URL or hook
  if (tweetText.length > 280) {
    const currentDescriptionLength = tweetText.length - titleWithEmoji.length - urlWithSpacing.length - randomHook.length - 6;
    const newMaxDescriptionLength = Math.max(0, currentDescriptionLength - (tweetText.length - 280));
    
    if (recipe.description && newMaxDescriptionLength > 0) {
      const truncatedDescription = recipe.description.substring(0, newMaxDescriptionLength);
      tweetText = `${titleWithEmoji} - ${truncatedDescription}\n\n${randomHook}${urlWithSpacing}`;
    } else {
      // If we can't fit description, just use title, hook, and URL
      tweetText = `${titleWithEmoji}\n\n${randomHook}${urlWithSpacing}`;
    }
  }
  
  // Final validation: ensure URL is always present and complete
  if (!tweetText.includes(recipeUrl)) {
    throw new Error('URL was truncated - this should never happen!');
  }
  
  return tweetText;
}

/**
 * Post tweet to X using OAuth 1.0a
 */
async function postTweet(text: string, config: XApiConfig): Promise<{ success: boolean; tweetId?: string; error?: string }> {
  try {
    // Use OAuth 1.0a for posting tweets (required for free tier)
    const oauth = new OAuth({
      consumer: {
        key: config.apiKey,
        secret: config.apiSecret,
      },
      signature_method: 'HMAC-SHA1',
      hash_function: (baseString: string, key: string) => {
        return crypto.createHmac('sha1', key).update(baseString).digest('base64');
      },
    });

    const token = {
      key: config.accessToken,
      secret: config.accessTokenSecret,
    };

    const url = 'https://api.twitter.com/2/tweets';
    const requestData = {
      url,
      method: 'POST',
    };

    const authHeader = oauth.toHeader(oauth.authorize(requestData, token));

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Logger not available in this function, error will be caught in main()
      throw new Error(`X API Error: ${JSON.stringify(data)}`);
      return {
        success: false,
        error: data.detail || data.title || data.errors?.[0]?.message || 'Failed to post tweet',
      };
    }

    return {
      success: true,
      tweetId: data.data?.id,
    };
  } catch (error: any) {
    // Logger not available in this function, error will be caught in main()
    throw error;
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
  const logger = new Logger('X Recipe Post');
  logger.log('🍽️  Starting recipe post to X...\n');

  // Validate site URL first - ensure it's from our domain
  const siteUrl = getSiteUrl();
  logger.log(`🌐 Using site URL: ${siteUrl}`);
  
  // Verify it's from our domain
  if (!siteUrl.includes('vegancooking.recipes') && !siteUrl.includes('localhost')) {
    const error = new Error(`Site URL must be from vegancooking.recipes domain! Current: ${siteUrl}`);
    logger.error(error.message);
    logger.error('   Set NEXT_PUBLIC_SITE_URL to https://vegancooking.recipes');
    if (shouldExit) {
      logger.close();
      process.exit(1);
    }
    throw error;
  }

  // Check environment variables
  const config: XApiConfig = {
    apiKey: process.env.X_API_KEY || '',
    apiSecret: process.env.X_API_SECRET || '',
    accessToken: process.env.X_ACCESS_TOKEN || '',
    accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET || '',
    bearerToken: process.env.X_BEARER_TOKEN,
  };

  if (!config.apiKey || !config.apiSecret || !config.accessToken || !config.accessTokenSecret) {
    const error = new Error('Missing X API credentials!');
    logger.error(error.message);
    logger.error('\nRequired environment variables:');
    logger.error('  X_API_KEY');
    logger.error('  X_API_SECRET');
    logger.error('  X_ACCESS_TOKEN');
    logger.error('  X_ACCESS_TOKEN_SECRET');
    logger.error('\nSee X_API_SETUP.md for instructions.');
    if (shouldExit) {
      logger.close();
      process.exit(1);
    }
    throw error;
  }

  try {
    // Get random recipe
    logger.log('📖 Fetching recipes...');
    const recipe = await getRandomRecipe();
    logger.success(`Selected recipe: "${recipe.title}"`);

    // Generate tweet text
    const tweetText = generateTweetText(recipe);
    logger.log(`\n📝 Tweet text:\n${tweetText}\n`);

    // Post to X
    logger.log('🐦 Posting to X...');
    const result = await postTweet(tweetText, config);

    if (result.success) {
      const siteUrl = getSiteUrl();
      logger.success('Successfully posted to X!');
      logger.log(`   Tweet ID: ${result.tweetId}`);
      logger.log(`   Recipe: ${recipe.title}`);
      logger.log(`   URL: ${siteUrl}/recipes/${recipe.slug}`);
    } else {
      const error = new Error(`Failed to post to X: ${result.error}`);
      logger.error(error.message);
      if (shouldExit) {
        logger.close();
        process.exit(1);
      }
      throw error;
    }
  } catch (error: any) {
    logger.error(error.message, error);
    if (shouldExit) {
      logger.close();
      process.exit(1);
    }
    throw error;
  } finally {
    logger.close();
  }
}

// Run if called directly
if (require.main === module) {
  main(true); // Exit on errors when called directly
}

// Export function that throws errors instead of exiting (for scheduler)
export async function postRecipeToX() {
  return main(false); // Don't exit on errors when used as module
}

