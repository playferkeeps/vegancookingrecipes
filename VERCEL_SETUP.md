# Vercel Deployment Setup

This project is configured for optimal deployment on Vercel.

## Configuration Files

### `vercel.json`

- Framework: Next.js (auto-detected)
- Build command: `npm run build`
- Install command: `npm install`
- Region: `iad1` (US East - Washington, D.C.)
- Function timeout: 10 seconds (for API routes if needed)

### `next.config.js`

- ✅ Uses `remotePatterns` instead of deprecated `domains` for images
- ✅ Standalone output for optimized builds
- ✅ SWC minification enabled
- ✅ Compression enabled
- ✅ React strict mode enabled

### `tsconfig.json`

- ✅ Target: ES2017 (supports modern JavaScript features like `matchAll`)
- ✅ Path aliases configured (`@/*`)
- ✅ Next.js plugin enabled

## Environment Variables

Set these in your Vercel project settings (Settings → Environment Variables):

### Required for Production:

```bash
# AdSense (if using)
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE=your-verification-code

# OpenAI (for recipe generation - admin tool only, not needed for build)
OPENAI_API_KEY=your_openai_api_key_here

# Replicate (for image generation - admin tool only, not needed for build)
REPLICATE_API_TOKEN=your_replicate_api_token_here
```

### Important Notes:

- `NEXT_PUBLIC_*` variables are exposed to the browser
- Non-public variables are only available server-side
- Admin scripts (recipe generation) are not run during Vercel builds

## Build Process

Vercel will automatically:

1. Install dependencies (`npm install`)
2. Run the build (`npm run build`)
3. Deploy the optimized output

## Static Generation

All recipe pages are statically generated at build time using:

- `generateStaticParams()` for dynamic routes
- Pre-rendered pages for optimal performance
- Automatic ISR (Incremental Static Regeneration) if configured

## Image Optimization

- Next.js Image component is configured
- Remote patterns are set for external images
- Local images in `public/recipe-images/` are automatically optimized

## Performance Optimizations

- ✅ Standalone output for faster cold starts
- ✅ SWC minification for smaller bundles
- ✅ Compression enabled
- ✅ Static generation for all recipe pages
- ✅ Optimized images with Next.js Image component

## Deployment Checklist

Before deploying to Vercel:

- [ ] Set all required environment variables in Vercel dashboard
- [ ] Verify `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` is set (if using AdSense)
- [ ] Ensure all recipe images are in `public/recipe-images/`
- [ ] Test build locally: `npm run build`
- [ ] Verify no TypeScript errors: `npm run lint`
- [ ] Check that all static pages generate correctly

## Troubleshooting

### Build Fails

- Check environment variables are set correctly
- Verify TypeScript compilation passes locally
- Check build logs in Vercel dashboard

### Images Not Loading

- Verify image paths are correct
- Check `next.config.js` remote patterns
- Ensure images are in `public/` directory

### AdSense Not Working

- Verify `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` is set
- Check ad slot IDs are correct in components
- Verify site is approved by AdSense

### Function Timeouts

- API routes are limited to 10 seconds
- For longer operations, use background jobs or external services
- Recipe generation scripts should be run locally, not on Vercel

## Admin Scripts

The following scripts are for local/admin use only and should NOT be run on Vercel:

- `npm run generate-recipes` - Generate new recipes
- `npm run generate-images-for-existing` - Generate images for recipes

These scripts require API keys and should be run locally before committing changes.
