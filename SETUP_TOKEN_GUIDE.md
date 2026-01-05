# Setup Token Configuration Guide

This guide explains how to set the access token for the `/setup-social-media` page.

## Quick Setup

### Step 1: Generate a Secure Token

Generate a strong, random token. You can use one of these methods:

**Option A: Using Node.js (Recommended)**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

**Option B: Using OpenSSL**

```bash
openssl rand -hex 32
```

**Option C: Using Online Generator**
Visit https://randomkeygen.com/ and use a "CodeIgniter Encryption Keys" token

**Option D: Manual (Less Secure)**
Create a long random string like: `my-super-secret-setup-token-2024-xyz123`

### Step 2: Add to `.env.local` File

1. **Create or edit** `.env.local` in your project root directory:

   ```bash
   # If file doesn't exist, create it
   touch .env.local
   ```

2. **Add the token** to the file:

   ```bash
   # Setup page access token (required for /setup-social-media)
   NEXT_PUBLIC_SETUP_TOKEN=your-generated-token-here
   ```

   **Example:**

   ```bash
   NEXT_PUBLIC_SETUP_TOKEN=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
   ```

3. **Save the file**

### Step 3: Restart Your Development Server

After adding the token, restart your Next.js server:

```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

### Step 4: Access the Setup Page

Visit the setup page with your token in the URL:

```
http://localhost:3000/setup-social-media?token=your-generated-token-here
```

**Example:**

```
http://localhost:3000/setup-social-media?token=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
```

## Production Setup (Vercel)

### Step 1: Add Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Click **"Add New"**
4. Enter:
   - **Name**: `NEXT_PUBLIC_SETUP_TOKEN`
   - **Value**: Your generated token (same one from development)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **"Save"**

### Step 2: Redeploy

After adding the variable, trigger a new deployment:

```bash
# Option A: Push to git (if auto-deploy is enabled)
git commit --allow-empty -m "Trigger deployment"
git push

# Option B: Redeploy from Vercel dashboard
# Go to Deployments → Click "..." → Redeploy
```

### Step 3: Access in Production

Visit your production URL with the token:

```
https://vegancooking.recipes/setup-social-media?token=your-generated-token-here
```

## Security Best Practices

1. **Use a Strong Token**: At least 32 characters, random and unpredictable
2. **Don't Commit to Git**: `.env.local` is already in `.gitignore` - never commit tokens
3. **Keep It Secret**: Don't share the token publicly or in screenshots
4. **Rotate Periodically**: Change the token every few months for better security
5. **Production Only**: In production, the page is disabled if no token is set

## Troubleshooting

### "Access Denied" Error

**Problem**: You see "Access Denied" when visiting the setup page.

**Solutions:**

1. Check that `NEXT_PUBLIC_SETUP_TOKEN` is set in `.env.local`
2. Verify the token in the URL matches the token in `.env.local` exactly
3. Restart your development server after adding the token
4. Check for typos or extra spaces in the token

### Token Not Working in Production

**Problem**: Token works locally but not in production.

**Solutions:**

1. Verify the environment variable is set in Vercel (Settings → Environment Variables)
2. Make sure you selected all environments (Production, Preview, Development)
3. Redeploy after adding the variable
4. Check that the token in the URL matches exactly (no extra spaces)

### "Setup page requires a token in production"

**Problem**: You see this error in production.

**Solution**: Add `NEXT_PUBLIC_SETUP_TOKEN` to your Vercel environment variables and redeploy.

## Example `.env.local` File

Here's a complete example of what your `.env.local` might look like:

```bash
# Database
DATABASE_URL=your_database_url

# Setup Page Access Token
NEXT_PUBLIC_SETUP_TOKEN=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6

# Facebook/Instagram (will be auto-populated by setup page)
FACEBOOK_APP_ID=your_app_id
FACEBOOK_APP_SECRET=your_app_secret
FACEBOOK_USER_ACCESS_TOKEN=your_user_token
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_token
FACEBOOK_PAGE_ID=your_page_id
INSTAGRAM_ACCESS_TOKEN=your_page_token
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_instagram_id

# Other variables...
NEXT_PUBLIC_SITE_URL=https://vegancooking.recipes
```

## Quick Reference

- **Environment Variable**: `NEXT_PUBLIC_SETUP_TOKEN`
- **File**: `.env.local` (in project root)
- **URL Format**: `/setup-social-media?token=YOUR_TOKEN`
- **Development**: Token is optional but recommended
- **Production**: Token is required (page disabled without it)
