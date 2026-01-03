# Instagram Graph API Setup Guide

This guide explains how to set up the Instagram Graph API to automatically post recipe images to your Instagram Business Account.

## Quick Start (If You Already Set Up Facebook)

If you've already completed the Facebook setup:

1. **Convert Instagram to Business Account** and connect it to your Facebook Page
2. **Add Instagram Product** to your existing Facebook app
3. **Get Instagram Business Account ID** using your Page Access Token:
   - In Graph API Explorer: `/PAGE_ID?fields=instagram_business_account`
   - Use your **Page Access Token** (same as Facebook)
4. **Set Environment Variables**:
   - `INSTAGRAM_ACCESS_TOKEN` = Your **Page Access Token** (same as `FACEBOOK_PAGE_ACCESS_TOKEN`)
   - `INSTAGRAM_BUSINESS_ACCOUNT_ID` = The ID from step 3
5. **Test**: `npm run post-recipe-to-instagram`

**Key Point**: Instagram uses the **same Page Access Token** as Facebook!

## Prerequisites

- A Facebook account
- A Facebook Page (create one at [facebook.com/pages/create](https://www.facebook.com/pages/create))
- An Instagram Business Account (convert from personal at [instagram.com/accounts/convert_to_business_account](https://www.instagram.com/accounts/convert_to_business_account))
- The Instagram account must be connected to your Facebook Page
- A Facebook Developer account (free)
- **Recommended**: Complete Facebook setup first (see `FACEBOOK_API_SETUP.md`)

## Step 1: Convert Instagram to Business Account

1. Open Instagram app on your phone
2. Go to **Settings** → **Account** → **Switch to Professional Account**
3. Choose **Business** account type
4. **Connect to your Facebook Page** (the same one you use for Facebook posts)
   - If you don't have a Facebook Page, create one at [facebook.com/pages/create](https://www.facebook.com/pages/create)
   - Make sure you're an Admin of the Facebook Page
5. Complete the setup

**Important**: Your Instagram Business Account MUST be connected to your Facebook Page for the API to work.

## Step 2: Use Your Existing Facebook App

Since you already set up Facebook, you can use the **same Facebook App** for Instagram. No need to create a new app!

If you haven't set up Facebook yet, follow the Facebook setup guide first, then come back here.

## Step 3: Add Instagram Product to Your App

**IMPORTANT**: You must add the Instagram product to your app BEFORE you can see Instagram permissions!

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Select your existing app (the one you use for Facebook posts)
3. **Go to the Dashboard** (click "Dashboard" in the left sidebar)
   - You need to be on the Dashboard page, not Testing or other pages
   - The "Add Product" button is usually on the Dashboard
4. Look for **"Add Product"** or **"Add use case"** button:
   - It might be in the top right of the dashboard
   - Or in the main content area
   - Or click **"Use cases"** in the sidebar, then look for "Add use case"
5. Once you find it, look for **"Instagram"** or **"Instagram Graph API"**:
   - If you see it listed, click **"Set Up"** or **"Add"**
   - If not listed, search for "Instagram" in the product browser
6. Complete the setup (usually just clicking through)

**If you still can't find "Add Product":**

Try going directly to your app's dashboard:

```text
https://developers.facebook.com/apps/YOUR_APP_ID/dashboard/
```

(Replace `YOUR_APP_ID` with your App ID - find it in Settings → Basic → App ID)

**After adding the Instagram product**, you'll be able to see Instagram-specific permissions.

## Step 4: Add Required Permissions

**Where to find permissions (multiple ways to access):**

### Method 1: Via "Use Cases" (Most Common)

1. In your app dashboard, click **"Use cases"** in the left sidebar
2. You should see use cases listed. Look for or add:
   - **"Manage everything on your Page"** (for pages permissions)
   - **"Instagram Content Publishing"** or similar (for Instagram permissions)
3. Click on a use case to see its required permissions
4. You can request permissions from there

### Method 2: Via "Testing" Section

1. In your app dashboard, click **"Testing"** in the left sidebar
2. Look for **"Permissions and Features"** or **"Roles"** submenu
3. You may see permissions listed there

### Method 3: Via "App Review" (If Available)

1. In your app dashboard, look for **"App Review"** in the left sidebar
   - **Note**: This may not appear until your app is in a certain state
   - If you don't see it, use Method 1 or 2 above
2. Click **"App Review"** → **"Permissions and Features"**
3. In the search box, type: `instagram` to filter Instagram permissions

### Method 4: Direct URL

If the above don't work, try going directly to:

```text
https://developers.facebook.com/apps/YOUR_APP_ID/appreview/permissions/
```

(Replace `YOUR_APP_ID` with your actual App ID - you can find it in your app's Settings → Basic)

**Request the following permissions:**

- **`instagram_basic`** - Basic Instagram access (usually auto-approved for development)
- **`instagram_content_publish`** - Required for posting to Instagram (may need App Review for production)
- **`pages_show_list`** - You may already have this from Facebook setup
- **`pages_read_engagement`** - You may already have this from Facebook setup
- **`pages_manage_posts`** - You may already have this from Facebook setup

**If you don't see `instagram_basic` or `instagram_content_publish`:**

- Make sure you added the **Instagram product** in Step 3 above
- The permissions only appear after the Instagram product is added
- Try refreshing the page or navigating away and back

**For Development Mode:**

- `instagram_basic` is usually available immediately for testing
- `instagram_content_publish` may require App Review for production use
- You can test with your own Instagram account in Development Mode

**Note**: If you already set up Facebook, you likely have `pages_show_list`, `pages_read_engagement`, and `pages_manage_posts` already. You mainly need to add `instagram_basic` and `instagram_content_publish`.

## Step 5: Set Up Instagram API (Add Account)

**On the Instagram API setup page you're currently on:**

1. **Step 1: Generate access tokens**
   - Click the **"Add account"** button
   - This will let you connect your Instagram Business Account
   - Follow the prompts to authorize your Instagram account
   - This will generate the access tokens you need

2. **Step 2: Configure webhooks** (Optional - you can skip this for basic posting)
   - For basic recipe posting, you don't need webhooks
   - You can leave "Callback URL" and "Verify token" **empty** for now
   - Webhooks are only needed if you want to receive notifications about comments, messages, etc.
   - Click the caret to collapse this section if you're not using it

**Important Notes:**

- Make sure your Instagram account is a **Business Account** and connected to your Facebook Page
- The Instagram account you add here should be the one you want to post to
- After adding the account, you'll get access tokens that you can use

## Step 6: Get Instagram Business Account ID

**Good news**: You can use the **same Page Access Token** you got for Facebook! Instagram uses the Facebook Page Access Token.

1. Go to [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
2. Select your app from the dropdown
3. In the **Access Token** field, enter your **Page Access Token** (the one you use for Facebook posts)
4. In the endpoint field, enter:

   ```text
   /PAGE_ID?fields=instagram_business_account
   ```

   Replace `PAGE_ID` with your Facebook Page ID (the same one you use for Facebook)

5. Click **"Submit"**
6. In the response, find `instagram_business_account.id` - this is your **Instagram Business Account ID**
7. Copy this ID (it's a long number)

**If you get an error or empty response:**

- Make sure your Instagram Business Account is connected to your Facebook Page
- Verify you're using the Page Access Token (not User Access Token)
- Check that your Instagram account is set to Business (not Personal)

## Step 6: Get Instagram Access Token

**Important**: For Instagram, you use the **same Page Access Token** that you use for Facebook posts!

The `INSTAGRAM_ACCESS_TOKEN` environment variable should be set to your **Facebook Page Access Token** (the same one as `FACEBOOK_PAGE_ACCESS_TOKEN`).

**Why?** Instagram Business Accounts are connected to Facebook Pages, and they use the same Page Access Token for API access.

**If you don't have a Page Access Token yet:**

1. Follow the Facebook setup guide to get your Page Access Token
2. Use that same token for Instagram

**Note:** Long-lived tokens expire after 60 days. For production, consider using a system user token or implementing token refresh.

## Step 7: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# Instagram API Credentials
# IMPORTANT: Use the SAME Page Access Token as Facebook!
INSTAGRAM_ACCESS_TOKEN=your_facebook_page_access_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_instagram_business_account_id_here
INSTAGRAM_APP_ID=your_instagram_app_id_here

# Facebook API Credentials (if not already set)
FACEBOOK_PAGE_ACCESS_TOKEN=your_facebook_page_access_token_here
FACEBOOK_PAGE_ID=your_facebook_page_id_here

# Site URL (for recipe links in captions)
NEXT_PUBLIC_SITE_URL=https://vegancooking.recipes

# Optional: Control which platforms to post to
ENABLE_FACEBOOK_POSTS=true
ENABLE_INSTAGRAM_POSTS=true

# Posting interval (for scheduler)
SOCIAL_MEDIA_POST_INTERVAL_HOURS=6
```

**Key Points:**

- `INSTAGRAM_ACCESS_TOKEN` should be the **same value** as `FACEBOOK_PAGE_ACCESS_TOKEN` (your Page Access Token)
- `FACEBOOK_PAGE_ID` is the same for both Facebook and Instagram
- `INSTAGRAM_BUSINESS_ACCOUNT_ID` is the ID you got from Step 5

## Step 8: Test the Setup

Run the Instagram posting script:

```bash
npm run post-recipe-to-instagram
```

Expected output:

- ✅ Selected recipe
- ✅ Media container created
- ✅ Published to Instagram
- ✅ Successfully posted to Instagram!

**If you get errors:**

- Verify `INSTAGRAM_ACCESS_TOKEN` matches your `FACEBOOK_PAGE_ACCESS_TOKEN`
- Check that `INSTAGRAM_BUSINESS_ACCOUNT_ID` is correct
- Ensure your Instagram account is connected to your Facebook Page
- Make sure you have `instagram_content_publish` permission

## Step 9: Schedule Automated Posts

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
