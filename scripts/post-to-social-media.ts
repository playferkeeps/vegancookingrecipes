/**
 * Unified script to post recipes to both Facebook and Instagram
 * Uses Facebook Graph API and Instagram Graph API
 * 
 * Usage:
 *   npm run post-to-social-media
 * 
 * Or run on a schedule with cron:
 *   0 0,6,12,18 * * * cd /path/to/cooking-site && npm run post-to-social-media
 */

import 'dotenv/config';
import { postRecipeToFacebook } from './post-recipe-to-facebook';
import { postRecipeToInstagram } from './post-recipe-to-instagram';

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
 * Main function to post to both platforms
 */
async function main(shouldExit: boolean = false) {
  logWithTimestamp('🚀 Starting social media posts...\n');

  const platforms = {
    facebook: process.env.ENABLE_FACEBOOK_POSTS !== 'false', // Default to true if not explicitly disabled
    instagram: process.env.ENABLE_INSTAGRAM_POSTS !== 'false', // Default to true if not explicitly disabled
  };

  logWithTimestamp(`📱 Platforms enabled:`);
  logWithTimestamp(`   Facebook: ${platforms.facebook ? '✅' : '❌'}`);
  logWithTimestamp(`   Instagram: ${platforms.instagram ? '✅' : '❌'}\n`);

  const results = {
    facebook: { success: false, error: null as string | null },
    instagram: { success: false, error: null as string | null },
  };

  // Post to Facebook
  if (platforms.facebook) {
    try {
      logWithTimestamp('📘 Posting to Facebook...\n');
      await postRecipeToFacebook(false);
      results.facebook.success = true;
      logWithTimestamp('✅ Facebook post completed\n');
    } catch (error: any) {
      results.facebook.error = error.message;
      logWithTimestamp(`❌ Facebook post failed: ${error.message}\n`, 'error');
    }
  }

  // Post to Instagram
  if (platforms.instagram) {
    try {
      logWithTimestamp('📷 Posting to Instagram...\n');
      await postRecipeToInstagram(false);
      results.instagram.success = true;
      logWithTimestamp('✅ Instagram post completed\n');
    } catch (error: any) {
      results.instagram.error = error.message;
      logWithTimestamp(`❌ Instagram post failed: ${error.message}\n`, 'error');
    }
  }

  // Summary
  logWithTimestamp('\n📊 Summary:');
  if (platforms.facebook) {
    logWithTimestamp(`   Facebook: ${results.facebook.success ? '✅ Success' : `❌ Failed - ${results.facebook.error}`}`);
  }
  if (platforms.instagram) {
    logWithTimestamp(`   Instagram: ${results.instagram.success ? '✅ Success' : `❌ Failed - ${results.instagram.error}`}`);
  }

  const allFailed = 
    (platforms.facebook && !results.facebook.success) &&
    (platforms.instagram && !results.instagram.success);

  if (allFailed) {
    const error = new Error('All social media posts failed');
    if (shouldExit) process.exit(1);
    throw error;
  }

  const anySuccess = results.facebook.success || results.instagram.success;
  if (anySuccess) {
    logWithTimestamp('\n✅ At least one platform posted successfully!');
  }
}

// Run if called directly
if (require.main === module) {
  main(true);
}

export { main as postToSocialMedia };
