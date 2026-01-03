# Automated Token Refresh Guide

This guide explains how to automatically refresh Facebook and Instagram access tokens so you don't have to manually update them every 60 days.

## The Problem

Facebook/Instagram long-lived tokens expire after ~60 days. Without automation, you need to:

1. Manually generate a new token
2. Update your `.env.local` file
3. Restart your application

This is tedious and can cause downtime if tokens expire.

## The Solution

We've created an automated token refresh script that:

1. Exchanges your current long-lived token for a new one (before it expires)
2. Gets a fresh Page Access Token
3. Updates your `.env.local` file automatically
4. Can be scheduled to run monthly

## Setup Instructions

### Step 1: Get a Long-Lived User Access Token

**Important**: To fully automate token refresh, you need a **long-lived USER access token**, not just a Page Access Token.

1. Go to [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
2. Select your app from the dropdown
3. Click **"Get Token"** → **"Get User Access Token"**
4. Select these permissions:
   - `pages_show_list`
   - `pages_read_engagement`
   - `pages_manage_posts`
   - `pages_read_user_content`
5. Click **"Generate Access Token"**
6. Authorize the app when prompted
7. Copy the token (this is a **short-lived token**)

### Step 2: Convert to Long-Lived User Token

1. In Graph API Explorer, change the endpoint to:
   ```
   /oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN
   ```
2. Replace:
   - `YOUR_APP_ID` with your Facebook App ID
   - `YOUR_APP_SECRET` with your App Secret (from Settings → Basic)
   - `YOUR_SHORT_LIVED_TOKEN` with the token from Step 1
3. Click **"Submit"**
4. Copy the `access_token` from the response - this is your **long-lived USER token**

### Step 3: Add Environment Variables

Add these to your `.env.local` file:

```bash
# Facebook App Credentials (for token refresh)
FACEBOOK_APP_ID=your_facebook_app_id_here
FACEBOOK_APP_SECRET=your_facebook_app_secret_here

# Long-lived User Access Token (for automation)
FACEBOOK_USER_ACCESS_TOKEN=your_long_lived_user_token_here

# Current tokens (will be auto-updated by refresh script)
FACEBOOK_PAGE_ACCESS_TOKEN=your_current_page_token_here
INSTAGRAM_ACCESS_TOKEN=your_current_page_token_here
FACEBOOK_PAGE_ID=your_page_id_here
```

**Important Notes:**

- `FACEBOOK_USER_ACCESS_TOKEN` is the long-lived USER token (not Page token)
- `FACEBOOK_PAGE_ACCESS_TOKEN` and `INSTAGRAM_ACCESS_TOKEN` will be automatically updated by the script
- Keep `FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET` secure - never commit them to git

### Step 4: Test the Refresh Script

Run the refresh script manually to test:

```bash
npm run refresh-tokens
```

Expected output:

- ✅ Token refreshed successfully
- ✅ Updated tokens in .env.local
- ✅ New tokens are ready to use

### Step 5: Schedule Automatic Refresh

**Option A: Using Cron (Linux/Mac)**

Add to your crontab (`crontab -e`):

```bash
# Refresh tokens monthly on the 1st at 2 AM
0 2 1 * * cd /path/to/cooking-site && npm run refresh-tokens >> /path/to/logs/token-refresh.log 2>&1
```

**Option B: Using GitHub Actions (Recommended for Cloud)**

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
      # Optionally commit updated tokens back to repo
      - name: Commit updated tokens
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .env.local
          git commit -m "Auto-refresh access tokens" || exit 0
          git push
```

**Option C: Using Vercel Cron Jobs**

If deploying on Vercel, create `app/api/cron/refresh-tokens/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET(request: Request) {
  // Verify cron secret (optional but recommended)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await execAsync('npm run refresh-tokens');
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

Then add to `vercel.json`:

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

## How It Works

1. **Token Exchange**: The script exchanges your long-lived USER token for a fresh one (before it expires)
2. **Get Page Token**: Uses the refreshed USER token to get a new Page Access Token
3. **Update Environment**: Automatically updates `.env.local` with the new tokens
4. **Same Token for Both**: Updates both `FACEBOOK_PAGE_ACCESS_TOKEN` and `INSTAGRAM_ACCESS_TOKEN` (they're the same)

## Token Lifecycle

- **Short-lived token**: Expires in ~1 hour
- **Long-lived USER token**: Expires in ~60 days (can be refreshed)
- **Page Access Token**: Inherits expiration from USER token (can be refreshed)

**Key Insight**: As long as you refresh the USER token before it expires, you can keep getting fresh Page tokens indefinitely!

## Troubleshooting

### "Token refresh failed"

- Check that `FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET` are correct
- Verify `FACEBOOK_USER_ACCESS_TOKEN` is a long-lived token (not short-lived)
- Make sure the token hasn't already expired

### "Failed to get Page Access Token"

- Verify `FACEBOOK_PAGE_ID` is correct
- Check that your USER token has `pages_show_list` permission
- Ensure you're an Admin of the Facebook Page

### Tokens not updating in .env.local

- Check file permissions (script needs write access)
- Verify `.env.local` exists in the project root
- Check for syntax errors in the file

### Script runs but tokens still expire

- Make sure you're running the script **before** tokens expire (schedule monthly)
- Verify the refresh actually succeeded (check logs)
- Restart your application after token refresh

## Best Practices

1. **Schedule Early**: Run the refresh script monthly, well before the 60-day expiration
2. **Monitor Logs**: Check refresh logs to ensure it's working
3. **Backup Tokens**: Keep a backup of working tokens in case refresh fails
4. **Test Regularly**: Manually run the script every few months to verify it works
5. **Secure Secrets**: Never commit `FACEBOOK_APP_SECRET` or tokens to git

## Alternative: System User Tokens (Advanced)

For production environments, consider using **System User Tokens** which don't expire:

1. Requires Business Manager setup
2. More complex initial setup
3. Tokens never expire (no refresh needed)
4. Better for production/enterprise use

See [Facebook System User Tokens](https://developers.facebook.com/docs/marketing-api/system-users) for details.

## Summary

With this automation:

- ✅ Tokens refresh automatically every month
- ✅ No manual intervention needed
- ✅ No downtime from expired tokens
- ✅ Works for both Facebook and Instagram (same token)

Just set it up once and forget about it!
