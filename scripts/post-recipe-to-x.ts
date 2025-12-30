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
    console.warn(`⚠️  NEXT_PUBLIC_SITE_URL not set, using default: ${defaultUrl}`);
    return defaultUrl;
  }
  
  // Validate URL format
  let url: URL;
  try {
    url = new URL(envUrl);
  } catch {
    console.warn(`⚠️  Invalid NEXT_PUBLIC_SITE_URL format, using default: ${defaultUrl}`);
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
    console.error(`❌ NEXT_PUBLIC_SITE_URL (${envUrl}) is not from vegancooking.recipes domain!`);
    console.error(`   Using default: ${defaultUrl}`);
    return defaultUrl;
  }
  
  // Ensure HTTPS in production (unless localhost)
  if (!hostname.includes('localhost') && url.protocol !== 'https:') {
    console.warn(`⚠️  NEXT_PUBLIC_SITE_URL should use HTTPS in production`);
    url.protocol = 'https:';
  }
  
  // Remove trailing slash
  return url.toString().replace(/\/$/, '');
}

/**
 * Generate tweet text for a recipe
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
  
  // Keep tweet under 280 characters (leave room for URL which is ~23 chars)
  const maxTextLength = 280 - 24 - 10; // URL + spacing + emoji
  
  let tweetText = `${randomEmoji} ${recipe.title}`;
  
  // Add description if it fits
  if (recipe.description) {
    const description = recipe.description.substring(0, maxTextLength - tweetText.length - 3);
    if (description.length > 0) {
      tweetText += ` - ${description}`;
    }
  }
  
  tweetText += `\n\n${recipeUrl}`;
  
  // Truncate if still too long
  if (tweetText.length > 280) {
    tweetText = tweetText.substring(0, 277) + '...';
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
      console.error('X API Error:', data);
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
    console.error('Error posting to X:', error);
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
  console.log('🍽️  Starting recipe post to X...\n');

  // Validate site URL first - ensure it's from our domain
  const siteUrl = getSiteUrl();
  console.log(`🌐 Using site URL: ${siteUrl}`);
  
  // Verify it's from our domain
  if (!siteUrl.includes('vegancooking.recipes') && !siteUrl.includes('localhost')) {
    const error = new Error(`Site URL must be from vegancooking.recipes domain! Current: ${siteUrl}`);
    console.error('❌', error.message);
    console.error('   Set NEXT_PUBLIC_SITE_URL to https://vegancooking.recipes');
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
    console.error('❌', error.message);
    console.error('\nRequired environment variables:');
    console.error('  X_API_KEY');
    console.error('  X_API_SECRET');
    console.error('  X_ACCESS_TOKEN');
    console.error('  X_ACCESS_TOKEN_SECRET');
    console.error('\nSee X_API_SETUP.md for instructions.');
    if (shouldExit) process.exit(1);
    throw error;
  }

  try {
    // Get random recipe
    console.log('📖 Fetching recipes...');
    const recipe = await getRandomRecipe();
    console.log(`✅ Selected recipe: "${recipe.title}"`);

    // Generate tweet text
    const tweetText = generateTweetText(recipe);
    console.log(`\n📝 Tweet text:\n${tweetText}\n`);

    // Post to X
    console.log('🐦 Posting to X...');
    const result = await postTweet(tweetText, config);

    if (result.success) {
      const siteUrl = getSiteUrl();
      console.log(`✅ Successfully posted to X!`);
      console.log(`   Tweet ID: ${result.tweetId}`);
      console.log(`   Recipe: ${recipe.title}`);
      console.log(`   URL: ${siteUrl}/recipes/${recipe.slug}`);
    } else {
      const error = new Error(`Failed to post to X: ${result.error}`);
      console.error(`❌ ${error.message}`);
      if (shouldExit) process.exit(1);
      throw error;
    }
  } catch (error: any) {
    console.error('❌ Error:', error.message);
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

