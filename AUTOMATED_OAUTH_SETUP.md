# Fully Automated Instagram/Facebook OAuth Setup

This guide explains how to set up Facebook and Instagram posting with **zero manual token management**. After a one-time web-based setup, everything runs automatically forever.

## Overview

The automated OAuth flow eliminates all manual steps:

- ✅ No manual token copying/pasting
- ✅ No Graph API Explorer needed
- ✅ Automatic token exchange (short-lived → long-lived)
- ✅ Automatic Page Access Token retrieval
- ✅ Automatic Instagram Business Account ID discovery
- ✅ Automatic token refresh every 60 days
- ✅ All tokens saved to `.env.local` automatically

## Security Note

**IMPORTANT**: The setup page is protected and requires a secret token to access. This prevents unauthorized access in production.

To enable the setup page, set an environment variable:

```bash
NEXT_PUBLIC_SETUP_TOKEN=your-secret-token-here
```

Then access the page with:

```
http://localhost:3000/setup-social-media?token=your-secret-token-here
```

**In production**: The setup page is disabled by default unless `SETUP_TOKEN` or `NEXT_PUBLIC_SETUP_TOKEN` is configured. Always use a strong, random token.

## One-Time Setup (5 Minutes)

### Step 1: Prerequisites

Before starting, ensure you have:

1. **Facebook App** created at [developers.facebook.com](https://developers.facebook.com)
   - Get your **App ID** and **App Secret** from Settings → Basic
2. **Facebook Page** created and you're an Admin
3. **Instagram Business Account** connected to your Facebook Page
4. **Instagram Product** added to your Facebook App

### Step 2: Run the Automated Setup

1. **Start your development server** (if not already running):

   ```bash
   npm run dev
   ```

2. **Navigate to the setup page**:

   ```
   http://localhost:3000/setup-social-media
   ```

   (Or `https://vegancooking.recipes/setup-social-media` in production)

3. **Enter your credentials**:
   - Facebook App ID
   - Facebook App Secret
   - Facebook Page ID (optional - we can auto-discover it)

4. **Click "Start Automated Setup"**

5. **Authorize the app**:
   - You'll be redirected to Facebook
   - Log in and authorize the requested permissions
   - You'll be redirected back automatically

6. **Done!** The system will:
   - Exchange your authorization code for tokens
   - Convert to long-lived tokens
   - Get Page Access Token
   - Discover Instagram Business Account ID
   - Save everything to `.env.local`

### Step 3: Verify Setup

Visit the test endpoint:

```
http://localhost:3000/api/test-social-media
```

Or test posting:

```bash
npm run post-recipe-to-facebook
npm run post-recipe-to-instagram
```

## How It Works

### The OAuth Flow

1. **User Authorization** (One-time):
   - User clicks "Start Automated Setup"
   - Redirected to Facebook OAuth
   - User authorizes permissions
   - Facebook redirects back with authorization code

2. **Automatic Token Exchange**:
   - Server exchanges code for short-lived token
   - Automatically converts to long-lived user token
   - Retrieves Page Access Token
   - Discovers Instagram Business Account ID

3. **Automatic Configuration**:
   - All tokens saved to `.env.local`
   - Environment variables configured
   - Ready to use immediately

### Token Refresh (Fully Automated)

After initial setup, tokens refresh automatically:

1. **Scheduled Refresh**: Run `npm run refresh-tokens` monthly (or schedule it)
2. **Automatic Exchange**: Script exchanges long-lived token for fresh one
3. **Auto-Update**: `.env.local` updated automatically
4. **No Manual Steps**: Everything happens automatically

## Scheduling Token Refresh

### Option 1: Cron (Linux/Mac)

```bash
# Refresh tokens monthly on the 1st at 2 AM
0 2 1 * * cd /path/to/cooking-site && npm run refresh-tokens >> /path/to/logs/token-refresh.log 2>&1
```

### Option 2: GitHub Actions

Create `.github/workflows/refresh-tokens.yml`:

```yaml
name: Refresh Access Tokens

on:
  schedule:
    - cron: '0 2 1 * *' # Monthly on the 1st at 2 AM UTC
  workflow_dispatch: # Allow manual trigger

jobs:
  refresh:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run refresh-tokens
        env:
          FACEBOOK_APP_ID: ${{ secrets.FACEBOOK_APP_ID }}
          FACEBOOK_APP_SECRET: ${{ secrets.FACEBOOK_APP_SECRET }}
          FACEBOOK_USER_ACCESS_TOKEN: ${{ secrets.FACEBOOK_USER_ACCESS_TOKEN }}
          FACEBOOK_PAGE_ACCESS_TOKEN: ${{ secrets.FACEBOOK_PAGE_ACCESS_TOKEN }}
          FACEBOOK_PAGE_ID: ${{ secrets.FACEBOOK_PAGE_ID }}
          INSTAGRAM_ACCESS_TOKEN: ${{ secrets.INSTAGRAM_ACCESS_TOKEN }}
      - name: Commit updated tokens
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .env.local
          git commit -m "Auto-refresh access tokens" || exit 0
          git push
```

### Option 3: Vercel Cron Jobs

If deploying on Vercel, create `app/api/cron/refresh-tokens/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Import and run refresh script
  const { refreshAccessTokens } = await import('@/scripts/refresh-access-tokens');
  await refreshAccessTokens();

  return NextResponse.json({ success: true });
}
```

Add to `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/refresh-tokens",
      "schedule": "0 2 1 * *"
    }
  ]
}
```

## Environment Variables Created

After setup, your `.env.local` will contain:

```bash
# Facebook App Credentials
FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret

# Long-lived User Token (for refresh automation)
FACEBOOK_USER_ACCESS_TOKEN=your_long_lived_user_token

# Page Access Token (used for posting)
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_access_token
FACEBOOK_PAGE_ID=your_page_id

# Instagram (uses same Page Access Token)
INSTAGRAM_ACCESS_TOKEN=your_page_access_token  # Same as FACEBOOK_PAGE_ACCESS_TOKEN
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_instagram_id
INSTAGRAM_APP_ID=your_app_id  # Same as FACEBOOK_APP_ID
```

## Troubleshooting

### "Redirect URI mismatch"

- Make sure your Facebook App has the correct redirect URI:
  - Development: `http://localhost:3000/api/oauth/facebook/callback`
  - Production: `https://vegancooking.recipes/api/oauth/facebook/callback`
- Add these in Facebook App → Settings → Basic → Add Platform → Website

### "Invalid OAuth access token"

- Token may have expired
- Re-run the setup flow to get fresh tokens

### "No pages found"

- Ensure you're an Admin of at least one Facebook Page
- Check Page Roles in your Facebook Page settings

### "Instagram Business Account not found"

- Verify Instagram is connected to your Facebook Page
- Ensure Instagram account is set to Business (not Personal)
- Check that Instagram product is added to your Facebook App

## Security Notes

- **Never commit `.env.local`** to git (it's in `.gitignore`)
- **App Secret** is sensitive - keep it secure
- **Tokens** are sensitive - don't share them
- **OAuth callback** uses state parameter for security

## What Happens After Setup?

1. ✅ **Immediate**: You can start posting recipes
2. ✅ **Monthly**: Tokens refresh automatically (if scheduled)
3. ✅ **Forever**: No manual intervention needed

## Manual Override

If you need to manually refresh tokens:

```bash
npm run refresh-tokens
```

This will:

- Refresh the long-lived user token
- Get a fresh Page Access Token
- Update `.env.local` automatically

## Summary

**Before**: Manual token copying, Graph API Explorer, manual refresh every 60 days

**After**: One-time web setup → Everything automated forever

Just visit `/setup-social-media`, enter your App ID and Secret, authorize once, and you're done!
