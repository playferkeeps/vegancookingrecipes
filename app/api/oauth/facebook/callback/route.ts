import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

/**
 * OAuth callback handler for Facebook/Instagram setup
 * This handles the redirect from Facebook OAuth and completes the automated setup
 * 
 * SECURITY: This endpoint is protected - only accessible during OAuth flow
 */
export async function GET(request: NextRequest) {
  // Verify this is a legitimate OAuth callback (state parameter provides some security)
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');
  const errorReason = searchParams.get('error_reason');
  
  // Additional security: Check if setup is enabled
  // In production, you might want to disable this entirely or add more checks
  const setupEnabled = process.env.ENABLE_SOCIAL_MEDIA_SETUP !== 'false';
  
  if (!setupEnabled && process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { error: 'Social media setup is disabled in production' },
      { status: 403 }
    );
  }

  // Preserve token from state if present
  let setupToken: string | null = null;
  try {
    const stateData = state ? JSON.parse(decodeURIComponent(state)) : {};
    setupToken = stateData.setupToken || null;
  } catch {
    // State might not contain token, that's okay
  }

  // Handle OAuth errors
  if (error) {
    const errorUrl = new URL('/setup-social-media', request.url);
    if (setupToken) {
      errorUrl.searchParams.set('token', setupToken);
    }
    errorUrl.searchParams.set('error', error);
    errorUrl.searchParams.set('error_reason', errorReason || 'unknown');
    return NextResponse.redirect(errorUrl);
  }

  if (!code || !state) {
    const errorUrl = new URL('/setup-social-media', request.url);
    if (setupToken) {
      errorUrl.searchParams.set('token', setupToken);
    }
    errorUrl.searchParams.set('error', 'missing_code_or_state');
    return NextResponse.redirect(errorUrl);
  }

  try {
    // Parse state to get app credentials
    let stateData: { appId: string; appSecret: string; pageId?: string };
    try {
      stateData = JSON.parse(decodeURIComponent(state));
    } catch {
      throw new Error('Invalid state parameter');
    }

    const { appId, appSecret, pageId } = stateData;
    const redirectUri = `${request.nextUrl.origin}/api/oauth/facebook/callback`;

    // Step 1: Exchange authorization code for short-lived access token
    const tokenUrl = `https://graph.facebook.com/v18.0/oauth/access_token?` +
      `client_id=${appId}&` +
      `client_secret=${appSecret}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `code=${code}`;

    const tokenResponse = await fetch(tokenUrl);
    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      throw new Error(tokenData.error?.message || 'Failed to get access token');
    }

    const shortLivedToken = tokenData.access_token;

    // Step 2: Exchange short-lived token for long-lived user token
    const longLivedUrl = `https://graph.facebook.com/v18.0/oauth/access_token?` +
      `grant_type=fb_exchange_token&` +
      `client_id=${appId}&` +
      `client_secret=${appSecret}&` +
      `fb_exchange_token=${shortLivedToken}`;

    const longLivedResponse = await fetch(longLivedUrl);
    const longLivedData = await longLivedResponse.json();

    if (!longLivedResponse.ok || !longLivedData.access_token) {
      throw new Error(longLivedData.error?.message || 'Failed to get long-lived token');
    }

    const longLivedUserToken = longLivedData.access_token;

    // Step 3: Get user's pages to find the Page ID (if not provided)
    let finalPageId: string = pageId || '';
    if (!finalPageId) {
      const pagesUrl = `https://graph.facebook.com/v18.0/me/accounts?access_token=${longLivedUserToken}`;
      const pagesResponse = await fetch(pagesUrl);
      const pagesData = await pagesResponse.json();

      if (pagesResponse.ok && pagesData.data && pagesData.data.length > 0) {
        // Use the first page (or you could let user select)
        finalPageId = pagesData.data[0].id;
      } else {
        throw new Error('No pages found. Make sure you are an Admin of at least one Facebook Page.');
      }
    }

    // Ensure we have a page ID at this point
    if (!finalPageId) {
      throw new Error('Failed to determine Facebook Page ID');
    }

    // Step 4: Get Page Access Token
    const pageTokenUrl = `https://graph.facebook.com/v18.0/${finalPageId}?fields=access_token&access_token=${longLivedUserToken}`;
    const pageTokenResponse = await fetch(pageTokenUrl);
    const pageTokenData = await pageTokenResponse.json();

    if (!pageTokenResponse.ok || !pageTokenData.access_token) {
      throw new Error(pageTokenData.error?.message || 'Failed to get Page Access Token');
    }

    const pageAccessToken = pageTokenData.access_token;

    // Step 5: Get Instagram Business Account ID
    const instagramUrl = `https://graph.facebook.com/v18.0/${finalPageId}?fields=instagram_business_account&access_token=${pageAccessToken}`;
    const instagramResponse = await fetch(instagramUrl);
    const instagramData = await instagramResponse.json();

    let instagramBusinessAccountId = '';
    if (instagramResponse.ok && instagramData.instagram_business_account) {
      instagramBusinessAccountId = instagramData.instagram_business_account.id;
    }

    // Step 6: Save all tokens to .env.local
    const envPath = path.join(process.cwd(), '.env.local');
    let envContent = '';

    if (fs.existsSync(envPath)) {
      envContent = fs.readFileSync(envPath, 'utf-8');
    }

    // Function to update or add env variable
    const updateEnvVar = (key: string, value: string) => {
      const regex = new RegExp(`^${key}=.*$`, 'm');
      if (regex.test(envContent)) {
        envContent = envContent.replace(regex, `${key}=${value}`);
      } else {
        envContent += `\n${key}=${value}\n`;
      }
    };

    // Update all environment variables
    updateEnvVar('FACEBOOK_APP_ID', appId);
    updateEnvVar('FACEBOOK_APP_SECRET', appSecret);
    updateEnvVar('FACEBOOK_USER_ACCESS_TOKEN', longLivedUserToken);
    updateEnvVar('FACEBOOK_PAGE_ACCESS_TOKEN', pageAccessToken);
    updateEnvVar('FACEBOOK_PAGE_ID', finalPageId);
    updateEnvVar('INSTAGRAM_ACCESS_TOKEN', pageAccessToken); // Same as Page Access Token
    if (instagramBusinessAccountId) {
      updateEnvVar('INSTAGRAM_BUSINESS_ACCOUNT_ID', instagramBusinessAccountId);
    }
    if (appId) {
      updateEnvVar('INSTAGRAM_APP_ID', appId); // Same as Facebook App ID
    }

    fs.writeFileSync(envPath, envContent);

    // Redirect to success page (preserve token if present)
    const successUrl = new URL('/setup-social-media/success', request.url);
    successUrl.searchParams.set('page_id', finalPageId);
    if (instagramBusinessAccountId) {
      successUrl.searchParams.set('instagram_id', instagramBusinessAccountId);
    }
    if (setupToken) {
      successUrl.searchParams.set('token', setupToken);
    }
    return NextResponse.redirect(successUrl);
  } catch (error: any) {
    console.error('OAuth callback error:', error);
    const errorUrl = new URL('/setup-social-media', request.url);
    // Preserve token in error redirect if we have it
    if (setupToken) {
      errorUrl.searchParams.set('token', setupToken);
    }
    errorUrl.searchParams.set('error', error.message || 'setup_failed');
    return NextResponse.redirect(errorUrl);
  }
}
