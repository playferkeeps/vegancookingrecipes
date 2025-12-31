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

interface XApiConfig {
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  accessTokenSecret: string;
  bearerToken?: string; // Optional: for OAuth 2.0
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
 * Generate tweet text for a recipe
 * Ensures the full URL is always included and never truncated
 */
function generateTweetText(recipe: { title: string; slug: string; description?: string }): string {
  const baseUrl = getSiteUrl();
  const recipeUrl = `${baseUrl}/recipes/${recipe.slug}`;
  
  // Validate the URL is from our domain before posting
  if (!recipeUrl.includes('vegancooking.recipes') && !recipeUrl.includes('localhost')) {
    throw new Error(`Invalid recipe URL: ${recipeUrl} - must be from vegancooking.recipes domain`);
  }
  
  // Create engaging tweet text
  const emojis = ['🌱', '🥕', '🥗', '🍽️', '✨', '💚', '🌿'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Build the fixed parts (emoji, title, URL with spacing)
  // Twitter counts URLs as 23 characters, but we need to ensure the full URL is included
  const urlWithSpacing = `\n\n${recipeUrl}`;
  const titleWithEmoji = `${randomEmoji} ${recipe.title}`;
  
  // Calculate available space for description
  // 280 char limit - title - URL - spacing - description separator
  const fixedPartsLength = titleWithEmoji.length + urlWithSpacing.length + 3; // +3 for " - "
  const maxDescriptionLength = 280 - fixedPartsLength;
  
  // Start with title and emoji
  let tweetText = titleWithEmoji;
  
  // Add description if it fits (truncate description only, never the URL)
  if (recipe.description && maxDescriptionLength > 0) {
    const description = recipe.description.substring(0, maxDescriptionLength);
    if (description.length > 0) {
      tweetText += ` - ${description}`;
    }
  }
  
  // Always append the full URL (never truncate this)
  tweetText += urlWithSpacing;
  
  // Final safety check: if somehow still too long, truncate description further
  // But NEVER truncate the URL
  if (tweetText.length > 280) {
    const currentDescriptionLength = tweetText.length - titleWithEmoji.length - urlWithSpacing.length - 3;
    const newMaxDescriptionLength = Math.max(0, currentDescriptionLength - (tweetText.length - 280));
    
    if (recipe.description && newMaxDescriptionLength > 0) {
      const truncatedDescription = recipe.description.substring(0, newMaxDescriptionLength);
      tweetText = `${titleWithEmoji} - ${truncatedDescription}${urlWithSpacing}`;
    } else {
      // If we can't fit description, just use title and URL
      tweetText = `${titleWithEmoji}${urlWithSpacing}`;
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
      logWithTimestamp(`X API Error: ${JSON.stringify(data)}`, 'error');
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
    logWithTimestamp(`Error posting to X: ${error.message || error}`, 'error');
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
  logWithTimestamp('🍽️  Starting recipe post to X...\n');

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
  const config: XApiConfig = {
    apiKey: process.env.X_API_KEY || '',
    apiSecret: process.env.X_API_SECRET || '',
    accessToken: process.env.X_ACCESS_TOKEN || '',
    accessTokenSecret: process.env.X_ACCESS_TOKEN_SECRET || '',
    bearerToken: process.env.X_BEARER_TOKEN,
  };

  if (!config.apiKey || !config.apiSecret || !config.accessToken || !config.accessTokenSecret) {
    const error = new Error('Missing X API credentials!');
    logWithTimestamp(`❌ ${error.message}`, 'error');
    logWithTimestamp('\nRequired environment variables:', 'error');
    logWithTimestamp('  X_API_KEY', 'error');
    logWithTimestamp('  X_API_SECRET', 'error');
    logWithTimestamp('  X_ACCESS_TOKEN', 'error');
    logWithTimestamp('  X_ACCESS_TOKEN_SECRET', 'error');
    logWithTimestamp('\nSee X_API_SETUP.md for instructions.', 'error');
    if (shouldExit) process.exit(1);
    throw error;
  }

  try {
    // Get random recipe
    logWithTimestamp('📖 Fetching recipes...');
    const recipe = await getRandomRecipe();
    logWithTimestamp(`✅ Selected recipe: "${recipe.title}"`);

    // Generate tweet text
    const tweetText = generateTweetText(recipe);
    logWithTimestamp(`\n📝 Tweet text:\n${tweetText}\n`);

    // Post to X
    logWithTimestamp('🐦 Posting to X...');
    const result = await postTweet(tweetText, config);

    if (result.success) {
      const siteUrl = getSiteUrl();
      logWithTimestamp(`✅ Successfully posted to X!`);
      logWithTimestamp(`   Tweet ID: ${result.tweetId}`);
      logWithTimestamp(`   Recipe: ${recipe.title}`);
      logWithTimestamp(`   URL: ${siteUrl}/recipes/${recipe.slug}`);
    } else {
      const error = new Error(`Failed to post to X: ${result.error}`);
      logWithTimestamp(`❌ ${error.message}`, 'error');
      if (shouldExit) process.exit(1);
      throw error;
    }
  } catch (error: any) {
    logWithTimestamp(`❌ Error: ${error.message}`, 'error');
    if (shouldExit) process.exit(1);
    throw error;
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

