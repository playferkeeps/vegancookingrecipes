# Social Media Automation Guide

This guide explains how to automate posting vegan recipes to Facebook and Instagram using the Facebook Graph API and Instagram Graph API.

## Overview

The automation system consists of:

1. **Facebook Posting** - Posts recipe links to your Facebook Page
2. **Instagram Posting** - Posts recipe images to your Instagram Business Account
3. **Unified Script** - Posts to both platforms simultaneously
4. **Scheduler** - Automatically posts at regular intervals

## Quick Start

### 1. Set Up Facebook (Required for both platforms)

Follow the [Facebook API Setup Guide](./FACEBOOK_API_SETUP.md) to:

- Create a Facebook Developer account
- Create a Facebook App
- Get Page Access Token
- Get Page ID

### 2. Set Up Instagram (Optional)

Follow the [Instagram API Setup Guide](./INSTAGRAM_API_SETUP.md) to:

- Convert Instagram to Business Account
- Connect Instagram to Facebook Page
- Get Instagram Business Account ID
- Get Instagram Access Token

### 3. Configure Environment Variables

Add to your `.env.local`:

```bash
# Facebook (Required)
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_access_token_here
FACEBOOK_PAGE_ID=your_page_id_here

# Instagram (Optional)
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_instagram_business_account_id_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://vegancooking.recipes

# Platform Control (Optional)
ENABLE_FACEBOOK_POSTS=true
ENABLE_INSTAGRAM_POSTS=true

# Scheduling (Optional)
SOCIAL_MEDIA_POST_INTERVAL_HOURS=6
FACEBOOK_POST_INTERVAL_HOURS=6
```

### 4. Test Individual Platforms

```bash
# Test Facebook only
npm run post-recipe-to-facebook

# Test Instagram only
npm run post-recipe-to-instagram

# Test both platforms
npm run post-to-social-media
```

### 5. Schedule Automated Posts

```bash
# Run scheduler for both platforms
npm run schedule-social-media-posts

# Or run scheduler for Facebook only
npm run schedule-facebook-posts
```

## Available Scripts

### Individual Platform Scripts

- `npm run post-recipe-to-facebook` - Post a random recipe to Facebook
- `npm run post-recipe-to-instagram` - Post a random recipe to Instagram
- `npm run schedule-facebook-posts` - Schedule Facebook posts at intervals

### Unified Scripts

- `npm run post-to-social-media` - Post to both Facebook and Instagram
- `npm run schedule-social-media-posts` - Schedule posts to both platforms

## How It Works

### Facebook Posts

1. Selects a random recipe from your database
2. Generates post text with:
   - Recipe title with emoji
   - Recipe description (truncated to 200 chars)
   - Link to full recipe
   - Hashtags (#VeganRecipes #PlantBased #VeganCooking)
3. Posts to Facebook Page using Graph API
4. Returns post ID for tracking

### Instagram Posts

1. Selects a random recipe from your database
2. Gets recipe image URL (must be publicly accessible via HTTPS)
3. Generates caption with:
   - Recipe title with emoji
   - Recipe description (truncated to 150 chars)
   - Full recipe URL (Instagram doesn't allow clickable links)
   - Hashtags
4. Creates media container with image URL
5. Waits for container to process
6. Publishes container to Instagram
7. Returns media ID for tracking

### Unified Script

The unified script (`post-to-social-media`) posts to both platforms:

- Posts to Facebook first
- Then posts to Instagram
- Provides summary of results
- Continues even if one platform fails

## Scheduling Options

### Option 1: Scheduler Script (Development/Testing)

Run the scheduler script which posts at regular intervals:

```bash
npm run schedule-social-media-posts
```

This will:

- Post immediately on start
- Post every X hours (set by `SOCIAL_MEDIA_POST_INTERVAL_HOURS`)
- Run continuously until stopped

### Option 2: Cron (Linux/Mac)

Add to crontab (`crontab -e`):

```bash
# Post every 6 hours
0 */6 * * * cd /path/to/cooking-site && npm run post-to-social-media >> /path/to/logs/social-media.log 2>&1

# Post at specific times (9 AM and 3 PM daily)
0 9 * * * cd /path/to/cooking-site && npm run post-to-social-media >> /path/to/logs/social-media.log 2>&1
0 15 * * * cd /path/to/cooking-site && npm run post-to-social-media >> /path/to/logs/social-media.log 2>&1
```

### Option 3: GitHub Actions (Recommended for Production)

Create `.github/workflows/social-media-posts.yml`:

```yaml
name: Post to Social Media

on:
  schedule:
    - cron: '0 */6 * * *' # Every 6 hours
  workflow_dispatch: # Allow manual trigger

jobs:
  post:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run post-to-social-media
        env:
          FACEBOOK_PAGE_ACCESS_TOKEN: ${{ secrets.FACEBOOK_PAGE_ACCESS_TOKEN }}
          FACEBOOK_PAGE_ID: ${{ secrets.FACEBOOK_PAGE_ID }}
          INSTAGRAM_ACCESS_TOKEN: ${{ secrets.INSTAGRAM_ACCESS_TOKEN }}
          INSTAGRAM_BUSINESS_ACCOUNT_ID: ${{ secrets.INSTAGRAM_BUSINESS_ACCOUNT_ID }}
          NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}
```

### Option 4: Vercel Cron (If hosting on Vercel)

Add to `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/social-media",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

Then create `app/api/cron/social-media/route.ts` that calls the script.

## Platform-Specific Notes

### Facebook

- ✅ Supports clickable links
- ✅ Can post text-only or with link preview
- ✅ Link previews automatically generated from Open Graph tags
- ⚠️ Rate limits vary by app
- ⚠️ Requires Page Access Token (not User Token)

### Instagram

- ❌ No clickable links in posts (only in bio)
- ✅ Great for visual content
- ✅ Supports hashtags
- ⚠️ Images must be publicly accessible via HTTPS
- ⚠️ Requires Instagram Business Account
- ⚠️ Must be connected to Facebook Page
- ⚠️ Rate limits are strict

## Best Practices

### Posting Frequency

- **Facebook**: 2-4 times per day maximum
- **Instagram**: 1-2 times per day maximum
- **Combined**: 3-6 posts per day total

### Content Strategy

- Mix recipe types (baking, savory, international)
- Use different emojis for variety
- Rotate hashtags
- Include compelling descriptions
- Post at optimal times (9 AM, 12 PM, 3 PM, 6 PM)

### Image Quality

- Use high-quality recipe images
- Ensure images are 1080x1080 (square) or 1080x1350 (portrait) for Instagram
- Images must be publicly accessible via HTTPS
- Optimize file sizes (under 8MB for Instagram)

### Hashtags

Use a mix of:

- Broad: #VeganRecipes #PlantBased #VeganCooking
- Specific: #VeganBaking #VeganMeals #HealthyEating
- Niche: #VeganFood #PlantBasedCooking #VeganMeals

## Troubleshooting

### Common Issues

1. **"Invalid access token"**
   - Token may have expired
   - Regenerate long-lived token
   - Check token permissions

2. **"Rate limit exceeded"**
   - Reduce posting frequency
   - Wait before retrying
   - Check platform-specific limits

3. **"Image URL not accessible"**
   - Ensure images are on HTTPS
   - Check image URLs are absolute
   - Verify images aren't behind authentication

4. **"Permission denied"**
   - Check app permissions in Facebook Developers
   - Verify Instagram is connected to Facebook Page
   - Ensure using correct access token type

### Getting Help

- Check [Facebook API Documentation](https://developers.facebook.com/docs/graph-api)
- Check [Instagram API Documentation](https://developers.facebook.com/docs/instagram-api)
- Review error messages in logs
- Test with Graph API Explorer

## Security Notes

- **Never commit access tokens to git**
- Store tokens in `.env.local` (already in `.gitignore`)
- Use environment variables in production
- Rotate tokens regularly
- Monitor API usage in Facebook Developers dashboard

## Resources

- [Facebook Graph API Overview](https://developers.facebook.com/docs/graph-api/overview)
- [Instagram Graph API](https://developers.facebook.com/docs/instagram-api)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer)
- [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
