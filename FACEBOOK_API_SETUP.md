# Facebook API Setup Guide

This guide explains how to set up the Facebook Graph API to automatically post recipe URLs to your Facebook Page.

## Prerequisites

- A Facebook account
- A Facebook Page (create one at [facebook.com/pages/create](https://www.facebook.com/pages/create))
- A Facebook Developer account (free)

## Step 1: Create Facebook Developer Account

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Click **"Get Started"** or **"My Apps"**
3. Sign in with your Facebook account
4. Accept the Facebook Platform Terms of Service
5. Complete the developer account setup (usually instant)

## Step 2: Create a Facebook App

1. In the Facebook Developers dashboard, click **"Create App"**
2. Select **"Business"** as the app type (or "Other" if Business isn't available)
3. Fill in the details:
   - **App Display Name**: "Vegan Cooking Recipes Bot" (or your choice)
   - **App Contact Email**: Your email address
   - **Business Account** (optional): Link to your business account if you have one
4. Click **"Create App"**
5. Complete the security check if prompted

## Step 3: Add Facebook Login Product

1. In your app dashboard, find **"Add Products"** or go to **"Products"** in the left sidebar
2. Find **"Facebook Login"** and click **"Set Up"**
3. Select **"Web"** as the platform
4. Enter your site URL: `https://vegancooking.recipes` (or your domain)
5. Click **"Save"**

## Step 4: Get App ID and App Secret

1. In your app dashboard, go to **"Settings"** → **"Basic"**
2. Note your **App ID** (you'll need this)
3. Find **"App Secret"** and click **"Show"**
4. Enter your password to reveal the secret
5. Copy the **App Secret** (save it securely - you won't see it again easily!)

## Step 5: Get Page Access Token

You need a **Page Access Token** (not a User Access Token) to post to your page.

### Option A: Using Graph API Explorer (Easiest)

1. Go to [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
2. In the top right, select your app from the dropdown
3. Click **"Get Token"** → **"Get User Access Token"**
4. Select these permissions:
   - `pages_show_list`
   - `pages_read_engagement`
   - `pages_manage_posts` (required for posting)
   - `pages_read_user_content`
5. Click **"Generate Access Token"**
6. Authorize the app when prompted
7. Copy the token (this is a **short-lived token**, we'll convert it next)

### Convert to Long-Lived Token:

1. In Graph API Explorer, change the endpoint to:
   ```
   /oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN
   ```
   Replace:
   - `YOUR_APP_ID` with your App ID
   - `YOUR_APP_SECRET` with your App Secret
   - `YOUR_SHORT_LIVED_TOKEN` with the token from step 7 above
2. Click **"Submit"**
3. Copy the `access_token` from the response (this is your **long-lived token**)

### Get Page Access Token:

1. In Graph API Explorer, change the endpoint to:
   ```
   /me/accounts?access_token=YOUR_LONG_LIVED_TOKEN
   ```
   Replace `YOUR_LONG_LIVED_TOKEN` with the token from the previous step
2. Click **"Submit"**
3. Find your page in the response and copy the `access_token` (this is your **Page Access Token**)

### Option B: Using Access Token Tool (Alternative)

1. Go to [developers.facebook.com/tools/accesstoken](https://developers.facebook.com/tools/accesstoken)
2. Find your app in the list
3. Click **"Generate Token"** for your page
4. Select the required permissions
5. Copy the generated token

## Step 6: Get Your Page ID

1. Go to your Facebook Page
2. Click **"About"** in the left sidebar
3. Scroll down to find **"Page ID"** (it's a long number)
4. Copy this ID

**Alternative method:**

1. Go to [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
2. Select your app
3. Use endpoint: `/me/accounts`
4. Find your page and note the `id` field

## Step 7: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# Facebook API Credentials
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_access_token_here
FACEBOOK_PAGE_ID=your_page_id_here

# Optional: Posting interval (in hours, default: 6)
FACEBOOK_POST_INTERVAL_HOURS=6

# Site URL (for generating recipe links)
NEXT_PUBLIC_SITE_URL=https://vegancooking.recipes
```

**For production (Vercel/etc):**
Add these same variables in your deployment platform's environment variables.

## Step 8: Test the Script

Run the script manually to test:

```bash
npm run post-recipe-to-facebook
```

You should see:

- A random recipe selected
- Post text generated
- Post published to Facebook
- Success message with post ID

## Step 9: Schedule Posts

### Option 1: Use the Scheduler Script (Development)

Run the scheduler script that posts at regular intervals:

```bash
npm run schedule-facebook-posts
```

This will:

- Post immediately
- Then post every X hours (set by `FACEBOOK_POST_INTERVAL_HOURS`)

### Option 2: Use Cron (Production/Server)

For production, use cron to run the script at intervals:

```bash
# Edit crontab
crontab -e

# Add this line to post every 6 hours:
0 */6 * * * cd /path/to/cooking-site && npm run post-recipe-to-facebook >> /path/to/logs/facebook-posts.log 2>&1

# Or post daily at 9 AM:
0 9 * * * cd /path/to/cooking-site && npm run post-recipe-to-facebook >> /path/to/logs/facebook-posts.log 2>&1
```

### Option 3: Use Vercel Cron Jobs

If deploying on Vercel, add a `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/post-to-facebook",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

Then create `app/api/cron/post-to-facebook/route.ts` that calls the script.

## Troubleshooting

### "Invalid OAuth access token"

- Your Page Access Token may have expired
- Generate a new long-lived token (they last ~60 days)
- For permanent tokens, set up a scheduled task to refresh tokens automatically

### "Insufficient permissions"

- Make sure you granted `pages_manage_posts` permission
- Verify you're using a **Page Access Token**, not a User Access Token
- Check that your app has the correct permissions in App Review (if required)

### "Page not found" or "Invalid page ID"

- Verify your Page ID is correct (it's a long number, not the page username)
- Make sure you're using the Page Access Token for the correct page
- Ensure the page exists and is published

### "Rate limit exceeded"

- Facebook has rate limits (varies by app)
- Reduce posting frequency if hitting limits
- Check your app's rate limit status in Facebook App Dashboard

### Token expires frequently

- Short-lived tokens expire in ~1 hour
- Long-lived tokens expire in ~60 days
- Consider setting up token refresh automation
- For production, use a service account or automated token refresh

## Token Expiration & Refresh

### Long-Lived Tokens

- **Duration**: ~60 days
- **Refresh**: Before expiration, exchange for a new long-lived token
- **Automation**: Set up a cron job to refresh tokens monthly

### Permanent Tokens (Advanced)

For production, you may want to set up permanent tokens:

1. Go to your app's **"Settings"** → **"Advanced"**
2. Enable **"Require App Secret"** for API calls
3. Use **System User** tokens (requires Business Manager setup)
4. Or implement automatic token refresh

## Rate Limits

Facebook rate limits vary by:

- App type
- App review status
- User engagement
- Page size

**Typical limits:**

- **New apps**: ~200 posts per hour
- **Established apps**: Higher limits
- **Page posts**: Generally more lenient than user posts

**Recommendation**: Post every 6-12 hours to stay well within limits.

## Security Notes

- **Never commit tokens to git**
- Use environment variables only
- Rotate tokens periodically
- Monitor API usage in Facebook App Dashboard
- Set up alerts for unusual activity
- Use long-lived tokens, not short-lived ones in production

## App Review (If Required)

If your app needs additional permissions:

1. Go to **"App Review"** in your app dashboard
2. Request the permissions you need:
   - `pages_manage_posts` (usually approved quickly)
   - `pages_read_engagement` (for analytics)
3. Submit for review (can take a few days)
4. Once approved, permissions are permanent

## Next Steps

- Customize post text format
- Add recipe images to posts
- Track engagement metrics
- Set up error notifications
- Implement token refresh automation
- Add post scheduling (e.g., post at optimal times)

## Additional Resources

- [Facebook Graph API Documentation](https://developers.facebook.com/docs/graph-api)
- [Page Access Tokens Guide](https://developers.facebook.com/docs/pages/access-tokens)
- [Facebook App Review](https://developers.facebook.com/docs/app-review)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer)
