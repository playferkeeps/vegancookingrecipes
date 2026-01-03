/**
 * Script to automatically refresh Facebook/Instagram Page Access Tokens
 * 
 * Facebook long-lived tokens expire after ~60 days. This script refreshes them
 * automatically by exchanging the current long-lived token for a new one.
 * 
 * Usage:
 *   npm run refresh-tokens
 * 
 * Or schedule it to run monthly (before tokens expire):
 *   0 0 1 * * cd /path/to/cooking-site && npm run refresh-tokens
 * 
 * This will update your .env.local file with the new tokens.
 */

import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

interface TokenRefreshResult {
  success: boolean;
  newToken?: string;
  expiresIn?: number;
  error?: string;
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
 * Refresh a long-lived access token by exchanging it for a new one
 */
async function refreshLongLivedToken(
  currentToken: string,
  appId: string,
  appSecret: string
): Promise<TokenRefreshResult> {
  try {
    logWithTimestamp('🔄 Refreshing long-lived token...');
    
    const url = `https://graph.facebook.com/v18.0/oauth/access_token?` +
      `grant_type=fb_exchange_token&` +
      `client_id=${appId}&` +
      `client_secret=${appSecret}&` +
      `fb_exchange_token=${currentToken}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!response.ok) {
      logWithTimestamp(`❌ Token refresh failed: ${JSON.stringify(data)}`, 'error');
      return {
        success: false,
        error: data.error?.message || 'Failed to refresh token',
      };
    }
    
    logWithTimestamp(`✅ Token refreshed successfully`);
    logWithTimestamp(`   Expires in: ${data.expires_in} seconds (${Math.round(data.expires_in / 86400)} days)`);
    
    return {
      success: true,
      newToken: data.access_token,
      expiresIn: data.expires_in,
    };
  } catch (error: any) {
    logWithTimestamp(`❌ Error refreshing token: ${error.message}`, 'error');
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Get Page Access Token from a long-lived user token
 */
async function getPageAccessToken(
  userToken: string,
  pageId: string
): Promise<TokenRefreshResult> {
  try {
    logWithTimestamp(`🔍 Getting Page Access Token for page ${pageId}...`);
    
    const url = `https://graph.facebook.com/v18.0/${pageId}?fields=access_token&access_token=${userToken}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!response.ok) {
      logWithTimestamp(`❌ Failed to get Page Access Token: ${JSON.stringify(data)}`, 'error');
      return {
        success: false,
        error: data.error?.message || 'Failed to get Page Access Token',
      };
    }
    
    if (!data.access_token) {
      return {
        success: false,
        error: 'No access_token in response',
      };
    }
    
    logWithTimestamp(`✅ Page Access Token retrieved`);
    
    return {
      success: true,
      newToken: data.access_token,
    };
  } catch (error: any) {
    logWithTimestamp(`❌ Error getting Page Access Token: ${error.message}`, 'error');
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Update .env.local file with new token
 */
function updateEnvFile(tokenName: string, newToken: string): boolean {
  try {
    const envPath = path.join(process.cwd(), '.env.local');
    
    if (!fs.existsSync(envPath)) {
      logWithTimestamp(`⚠️  .env.local file not found. Creating it...`, 'warn');
      fs.writeFileSync(envPath, `${tokenName}=${newToken}\n`);
      return true;
    }
    
    let envContent = fs.readFileSync(envPath, 'utf-8');
    
    // Check if token already exists in file
    const tokenRegex = new RegExp(`^${tokenName}=.*$`, 'm');
    
    if (tokenRegex.test(envContent)) {
      // Replace existing token
      envContent = envContent.replace(tokenRegex, `${tokenName}=${newToken}`);
      logWithTimestamp(`✅ Updated ${tokenName} in .env.local`);
    } else {
      // Append new token
      envContent += `\n${tokenName}=${newToken}\n`;
      logWithTimestamp(`✅ Added ${tokenName} to .env.local`);
    }
    
    fs.writeFileSync(envPath, envContent);
    return true;
  } catch (error: any) {
    logWithTimestamp(`❌ Error updating .env.local: ${error.message}`, 'error');
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  logWithTimestamp('🔄 Starting token refresh process...\n');
  
  // Get required environment variables
  const facebookAppId = process.env.FACEBOOK_APP_ID || '';
  const facebookAppSecret = process.env.FACEBOOK_APP_SECRET || '';
  const currentPageToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN || '';
  const pageId = process.env.FACEBOOK_PAGE_ID || '';
  
  // Check if we have the required credentials
  if (!facebookAppId || !facebookAppSecret) {
    logWithTimestamp('❌ Missing Facebook App credentials!', 'error');
    logWithTimestamp('   Required: FACEBOOK_APP_ID and FACEBOOK_APP_SECRET', 'error');
    logWithTimestamp('   Add these to your .env.local file', 'error');
    process.exit(1);
  }
  
  if (!currentPageToken) {
    logWithTimestamp('❌ Missing FACEBOOK_PAGE_ACCESS_TOKEN!', 'error');
    logWithTimestamp('   Cannot refresh without current token', 'error');
    process.exit(1);
  }
  
  if (!pageId) {
    logWithTimestamp('❌ Missing FACEBOOK_PAGE_ID!', 'error');
    process.exit(1);
  }
  
  logWithTimestamp(`📱 Facebook App ID: ${facebookAppId}`);
  logWithTimestamp(`📄 Page ID: ${pageId}\n`);
  
  // Step 1: Refresh the long-lived user token (if we have one)
  // Note: We need a long-lived USER token to get the Page Access Token
  // If you only have a Page Access Token, you'll need to manually refresh it
  // or use a long-lived user token
  
  // For now, we'll try to refresh the Page Access Token directly
  // This works if the token is still valid but close to expiring
  
  logWithTimestamp('📝 Note: To fully automate token refresh, you need:');
  logWithTimestamp('   1. A long-lived USER access token (not Page token)');
  logWithTimestamp('   2. Or use this script with a valid Page token before it expires\n');
  
  // Try to get a new Page Access Token using the current one
  // This works if the current token is still valid
  logWithTimestamp('🔄 Attempting to refresh Page Access Token...');
  
  // First, we need to get a user token to exchange
  // Since we only have the Page token, we'll need to refresh it differently
  // The best approach is to use a long-lived user token
  
  // Check if we have a long-lived user token
  const userToken = process.env.FACEBOOK_USER_ACCESS_TOKEN || '';
  
  if (!userToken) {
    logWithTimestamp('❌ Missing FACEBOOK_USER_ACCESS_TOKEN!', 'error');
    logWithTimestamp('\n📖 To enable automatic token refresh:', 'error');
    logWithTimestamp('   1. Get a long-lived USER access token (see TOKEN_REFRESH_AUTOMATION.md)', 'error');
    logWithTimestamp('   2. Add FACEBOOK_USER_ACCESS_TOKEN to your .env.local', 'error');
    logWithTimestamp('   3. Run this script again', 'error');
    process.exit(1);
  }
  
  logWithTimestamp('🔄 Refreshing long-lived USER token...\n');
  
  // Step 1: Refresh the user token
  const userTokenResult = await refreshLongLivedToken(
    userToken,
    facebookAppId,
    facebookAppSecret
  );
  
  if (!userTokenResult.success || !userTokenResult.newToken) {
    logWithTimestamp(`❌ Failed to refresh USER token: ${userTokenResult.error}`, 'error');
    process.exit(1);
  }
  
  // Step 2: Update user token in .env.local
  updateEnvFile('FACEBOOK_USER_ACCESS_TOKEN', userTokenResult.newToken);
  logWithTimestamp('');
  
  // Step 3: Get new Page Access Token using refreshed user token
  logWithTimestamp('🔄 Getting fresh Page Access Token...\n');
  const pageTokenResult = await getPageAccessToken(
    userTokenResult.newToken,
    pageId
  );
  
  if (!pageTokenResult.success || !pageTokenResult.newToken) {
    logWithTimestamp(`❌ Failed to get Page Access Token: ${pageTokenResult.error}`, 'error');
    process.exit(1);
  }
  
  // Step 4: Update Page Access Token (same for Facebook and Instagram)
  updateEnvFile('FACEBOOK_PAGE_ACCESS_TOKEN', pageTokenResult.newToken);
  updateEnvFile('INSTAGRAM_ACCESS_TOKEN', pageTokenResult.newToken);
  
  logWithTimestamp('\n✅ Token refresh complete!');
  logWithTimestamp('   ✅ Updated FACEBOOK_USER_ACCESS_TOKEN');
  logWithTimestamp('   ✅ Updated FACEBOOK_PAGE_ACCESS_TOKEN');
  logWithTimestamp('   ✅ Updated INSTAGRAM_ACCESS_TOKEN');
  logWithTimestamp('\n⚠️  Remember to restart your application to use the new tokens', 'warn');
}

// Run if called directly
if (require.main === module) {
  main();
}

export { main as refreshAccessTokens };
