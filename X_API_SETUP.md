# X (Twitter) API Setup Guide

This guide explains how to set up the X API to automatically post recipe URLs to your X account.

## Prerequisites

- An X (Twitter) account
- A free X Developer account

## Step 1: Create X Developer Account

1. Go to [developer.twitter.com](https://developer.twitter.com)
2. Sign in with your X account
3. Click **"Apply"** for a developer account
4. Fill out the application form:
   - **Use case**: Select "Making a bot" or "Exploring the API"
   - **Description**: "Automated posting of vegan recipe content"
   - Accept the terms and submit
5. Wait for approval (usually instant for free tier)

## Step 2: Create an App

1. Once approved, go to [developer.twitter.com/en/portal/dashboard](https://developer.twitter.com/en/portal/dashboard)
2. Click **"Create App"** or **"Create Project"**
3. Fill in the details:
   - **App name**: "Vegan Cooking Recipes Bot" (or your choice)
   - **App environment**: Development
4. Click **"Create"**

## Step 3: Get API Keys

1. In your app dashboard, go to **"Keys and tokens"** tab
2. You'll need these credentials:

### For OAuth 1.0a (Recommended for posting):

- **API Key** (Consumer Key)
- **API Secret Key** (Consumer Secret)
- **Access Token**
- **Access Token Secret**

### Generate Access Token and Secret:

1. Scroll down to **"Access Token and Secret"**
2. Click **"Generate"**
3. Copy both the **Access Token** and **Access Token Secret**
4. **Important**: Save these immediately - you won't be able to see them again!

## Step 4: Set App Permissions

1. Go to **"App permissions"** tab
2. Set permissions to **"Read and Write"** (required for posting tweets)
3. Click **"Save"**

## Step 5: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# X API Credentials (OAuth 1.0a)
X_API_KEY=your_api_key_here
X_API_SECRET=your_api_secret_here
X_ACCESS_TOKEN=your_access_token_here
X_ACCESS_TOKEN_SECRET=your_access_token_secret_here

# Optional: Posting interval (in hours, default: 6)
X_POST_INTERVAL_HOURS=6

# Site URL (for generating recipe links)
NEXT_PUBLIC_SITE_URL=https://vegancooking.recipes
```

**For production (Vercel/etc):**
Add these same variables in your deployment platform's environment variables.

## Step 6: Install Dependencies

The script uses `oauth-1.0a` for OAuth signing. Install it:

```bash
npm install oauth-1.0a
npm install --save-dev @types/node
```

**Note:** `oauth-1.0a` is required for OAuth 1.0a authentication with X API.

## Step 7: Test the Script

Run the script manually to test:

```bash
npm run post-recipe-to-x
```

You should see:

- A random recipe selected
- Tweet text generated
- Tweet posted to X
- Success message with tweet ID

## Step 8: Schedule Posts

### Option 1: Use the Scheduler Script (Development)

Run the scheduler script that posts at regular intervals:

```bash
npm run schedule-x-posts
```

This will:

- Post immediately
- Then post every X hours (set by `X_POST_INTERVAL_HOURS`)

### Option 2: Use Cron (Production/Server)

For production, use cron to run the script at intervals:

```bash
# Edit crontab
crontab -e

# Add this line to post every 6 hours:
0 */6 * * * cd /path/to/cooking-site && npm run post-recipe-to-x >> /path/to/logs/x-posts.log 2>&1

# Or post daily at 9 AM:
0 9 * * * cd /path/to/cooking-site && npm run post-recipe-to-x >> /path/to/logs/x-posts.log 2>&1
```

### Option 3: Use Vercel Cron Jobs

If deploying on Vercel, add a `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/post-to-x",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

Then create `app/api/cron/post-to-x/route.ts` that calls the script.

## Troubleshooting

### "Invalid or expired token"

- Regenerate your Access Token and Secret
- Make sure tokens are copied correctly (no extra spaces)

### "Forbidden" or "Unauthorized"

- Check that app permissions are set to "Read and Write"
- Verify all API keys are correct
- Make sure you're using OAuth 1.0a credentials, not OAuth 2.0

### "Rate limit exceeded"

- Free tier has rate limits (300 tweets per 3 hours)
- Reduce posting frequency if hitting limits
- Consider upgrading to a paid tier

### Script fails silently

- Check environment variables are set correctly
- Run with `DEBUG=* npm run post-recipe-to-x` for verbose output
- Check X Developer Portal for API status

## Rate Limits (Free Tier)

- **Tweets**: 1,500 per month
- **Posting**: ~300 tweets per 3 hours
- **Reading**: 10,000 tweets per month

**Recommendation**: Post every 6-12 hours to stay within limits.

## Security Notes

- **Never commit API keys to git**
- Use environment variables only
- Rotate keys periodically
- Monitor API usage in X Developer Portal

## Next Steps

- Customize tweet text format
- Add hashtags
- Include recipe images
- Track engagement metrics
- Set up error notifications
