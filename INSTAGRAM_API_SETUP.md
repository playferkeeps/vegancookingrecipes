# Instagram Graph API Setup Guide

This guide explains how to set up the Instagram Graph API to automatically post recipe images to your Instagram Business Account.

## Prerequisites

- A Facebook account
- A Facebook Page (create one at [facebook.com/pages/create](https://www.facebook.com/pages/create))
- An Instagram Business Account (convert from personal at [instagram.com/accounts/convert_to_business_account](https://www.instagram.com/accounts/convert_to_business_account))
- The Instagram account must be connected to your Facebook Page
- A Facebook Developer account (free)

## Step 1: Convert Instagram to Business Account

1. Open Instagram app on your phone
2. Go to **Settings** → **Account** → **Switch to Professional Account**
3. Choose **Business** account type
4. Connect to your Facebook Page (or create a new one)
5. Complete the setup

## Step 2: Create Facebook Developer Account

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Click **"Get Started"** or **"My Apps"**
3. Sign in with your Facebook account
4. Accept the Facebook Platform Terms of Service
5. Complete the developer account setup

## Step 3: Create a Facebook App

1. In the Facebook Developers dashboard, click **"Create App"**
2. Select **"Business"** as the app type
3. Fill in the details:
   - **App Display Name**: "Vegan Cooking Recipes Bot" (or your choice)
   - **App Contact Email**: Your email address
4. Click **"Create App"**
5. Complete the security check if prompted

## Step 4: Add Instagram Basic Display Product

1. In your app dashboard, go to **"Products"** in the left sidebar
2. Find **"Instagram"** and click **"Set Up"**
3. Select **"Basic Display"** (for posting, you'll need the Graph API)
4. Complete the setup

## Step 5: Add Required Permissions

1. Go to **"App Review"** → **"Permissions and Features"**
2. Request the following permissions:
   - `instagram_basic` (usually auto-approved)
   - `pages_show_list` (usually auto-approved)
   - `instagram_content_publish` (requires App Review for production)
   - `pages_read_engagement` (usually auto-approved)

## Step 6: Get Instagram Business Account ID

1. Go to [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
2. Select your app from the dropdown
3. Get a User Access Token with `instagram_basic` and `pages_show_list` permissions
4. Make a GET request to: `https://graph.facebook.com/v18.0/me/accounts?access_token=YOUR_TOKEN`
5. Find your Facebook Page in the response
6. Get the Page Access Token for that page
7. Make a GET request to: `https://graph.facebook.com/v18.0/PAGE_ID?fields=instagram_business_account&access_token=PAGE_ACCESS_TOKEN`
8. The `instagram_business_account.id` is your Instagram Business Account ID

**Alternative method using Graph API Explorer:**

1. Go to [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
2. Select your app
3. Get a Page Access Token (see Facebook setup guide)
4. In the explorer, enter: `PAGE_ID?fields=instagram_business_account`
5. Click **"Submit"**
6. Copy the `instagram_business_account.id` value

## Step 7: Get Long-Lived Access Token

Instagram requires a long-lived access token. Here's how to get one:

1. Go to [developers.facebook.com/tools/accesstoken](https://developers.facebook.com/tools/accesstoken)
2. Select your app
3. Generate a User Access Token with these permissions:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
4. Exchange it for a long-lived token:
   ```
   https://graph.facebook.com/v18.0/oauth/access_token?
     grant_type=fb_exchange_token&
     client_id=YOUR_APP_ID&
     client_secret=YOUR_APP_SECRET&
     fb_exchange_token=SHORT_LIVED_TOKEN
   ```
5. Use this long-lived token as your `INSTAGRAM_ACCESS_TOKEN`

**Note:** Long-lived tokens expire after 60 days. For production, consider using a system user token or implementing token refresh.

## Step 8: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# Instagram API Credentials
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_instagram_business_account_id_here

# Facebook Page ID (same as used for Facebook posts)
FACEBOOK_PAGE_ID=your_facebook_page_id_here

# Site URL (for recipe links in captions)
NEXT_PUBLIC_SITE_URL=https://vegancooking.recipes

# Optional: Control which platforms to post to
ENABLE_FACEBOOK_POSTS=true
ENABLE_INSTAGRAM_POSTS=true

# Posting interval (for scheduler)
SOCIAL_MEDIA_POST_INTERVAL_HOURS=6
```

## Step 9: Test the Setup

Run the Instagram posting script:

```bash
npm run post-recipe-to-instagram
```

Expected output:

- ✅ Selected recipe
- ✅ Media container created
- ✅ Published to Instagram
- ✅ Successfully posted to Instagram!

## Step 10: Schedule Automated Posts

### Option A: Using the Scheduler Script

Run the unified scheduler that posts to both Facebook and Instagram:

```bash
npm run schedule-social-media-posts
```

This will:

- Post immediately on start
- Then post every X hours (set by `SOCIAL_MEDIA_POST_INTERVAL_HOURS`)

### Option B: Using Cron (Linux/Mac)

Add to your crontab (`crontab -e`):

```bash
# Post to both Facebook and Instagram every 6 hours
0 */6 * * * cd /path/to/cooking-site && npm run post-to-social-media >> /path/to/logs/social-media-posts.log 2>&1

# Or post at specific times (e.g., 9 AM and 3 PM daily)
0 9 * * * cd /path/to/cooking-site && npm run post-to-social-media >> /path/to/logs/social-media-posts.log 2>&1
0 15 * * * cd /path/to/cooking-site && npm run post-to-social-media >> /path/to/logs/social-media-posts.log 2>&1
```

### Option C: Using a Cloud Scheduler (Recommended for Production)

Use services like:

- **Vercel Cron Jobs** (if hosting on Vercel)
- **GitHub Actions** (with scheduled workflows)
- **AWS EventBridge** (if using AWS)
- **Google Cloud Scheduler** (if using GCP)

Example GitHub Actions workflow (`.github/workflows/social-media-posts.yml`):

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
          INSTAGRAM_ACCESS_TOKEN: ${{ secrets.INSTAGRAM_ACCESS_TOKEN }}
          INSTAGRAM_BUSINESS_ACCOUNT_ID: ${{ secrets.INSTAGRAM_BUSINESS_ACCOUNT_ID }}
          FACEBOOK_PAGE_ACCESS_TOKEN: ${{ secrets.FACEBOOK_PAGE_ACCESS_TOKEN }}
          FACEBOOK_PAGE_ID: ${{ secrets.FACEBOOK_PAGE_ID }}
          NEXT_PUBLIC_SITE_URL: ${{ secrets.NEXT_PUBLIC_SITE_URL }}
```

## Important Notes

### Image Requirements

- Images must be publicly accessible via HTTPS
- Recommended size: 1080x1080 pixels (square) or 1080x1350 (portrait)
- Supported formats: JPG, PNG
- Maximum file size: 8MB

### Instagram Limitations

- **No clickable links**: Instagram doesn't allow clickable links in post captions (except in Stories and bio)
- **Link in bio**: Consider adding "Link in bio" to your captions and updating your bio link regularly
- **Rate limits**: Instagram has strict rate limits (varies by account)
- **Content policy**: Ensure recipes comply with Instagram's community guidelines

### Access Token Expiration

- Long-lived tokens expire after 60 days
- For production, implement token refresh or use a system user token
- Monitor token expiration and refresh before it expires

### App Review (For Production)

If you plan to use this in production with many users:

1. Go to **App Review** in Facebook Developers
2. Submit your app for review
3. Request `instagram_content_publish` permission
4. Provide use case and demo video
5. Wait for approval (can take several days)

## Troubleshooting

### Error: "Invalid OAuth access token"

- Token may have expired
- Regenerate a long-lived token
- Ensure token has required permissions

### Error: "User does not have permission"

- Check that Instagram account is connected to Facebook Page
- Verify permissions are granted in App Review
- Ensure you're using a Page Access Token, not User Access Token

### Error: "Image URL must be publicly accessible"

- Ensure recipe images are hosted on HTTPS
- Check that images are not behind authentication
- Verify image URLs are absolute (not relative)

### Error: "Rate limit exceeded"

- Instagram has rate limits per account
- Reduce posting frequency
- Wait before retrying

### Images not posting

- Verify image URL is accessible
- Check image format (JPG/PNG)
- Ensure image size is within limits
- Verify Instagram Business Account is active

## Resources

- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-api)
- [Instagram Content Publishing](https://developers.facebook.com/docs/instagram-api/guides/content-publishing)
- [Facebook Graph API Overview](https://developers.facebook.com/docs/graph-api/overview)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer)
- [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
