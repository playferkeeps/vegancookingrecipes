# CDN Configuration for vegancooking.recipes

## Overview

This Next.js site is configured to serve all static assets (images, JavaScript, CSS) from a CDN for optimal performance and SEO.

## Vercel CDN (Automatic)

If deployed on **Vercel**, all static assets are **automatically served from Vercel's global CDN**. This includes:

- All files in the `public/` directory
- Next.js optimized images
- JavaScript bundles
- CSS files
- Fonts

Vercel uses their edge network with automatic CDN distribution, so no additional configuration is needed.

## Configuration Details

### 1. Next.js Image Optimization

The `next.config.js` file is configured with:

- Image optimization enabled
- AVIF and WebP format support
- Proper caching headers
- CDN-friendly settings

### 2. Cache Headers

Static assets are served with aggressive caching headers:

- **Cache-Control**: `public, max-age=31536000, immutable` (1 year)
- **CDN-Cache-Control**: Explicit CDN caching directives

This ensures:

- Assets are cached at the CDN level
- Reduced server load
- Faster page loads for returning visitors

### 3. Resource Hints

The site includes DNS prefetch and preconnect hints for:

- Google AdSense (`pagead2.googlesyndication.com`)
- Google services (`www.google.com`, `www.gstatic.com`)

This allows the browser to:

- Resolve DNS early
- Establish connections before they're needed
- Reduce latency for third-party resources

### 4. Non-Blocking Scripts

All external scripts are loaded asynchronously:

- AdSense script uses `lazyOnload` strategy
- Scripts don't block page rendering
- Improves Core Web Vitals scores

## SEO Checker Notes

If an SEO checker reports that resources aren't served from CDN:

1. **Vercel automatically uses CDN** - All assets are served from `*.vercel.app` or your custom domain with CDN
2. **The checker may not recognize Vercel's CDN** - Some tools only recognize traditional CDN providers (Cloudflare, CloudFront, etc.)
3. **Check the response headers** - Look for `x-vercel-cache` or `cf-cache-status` headers
4. **Verify asset URLs** - Assets should be served from your domain, which is behind Vercel's CDN

## Custom CDN Setup (Optional)

If you want to use a custom CDN (Cloudflare, AWS CloudFront, etc.):

1. **Set up your CDN** and point it to your Vercel deployment
2. **Update `next.config.js`** with `assetPrefix`:

   ```js
   const nextConfig = {
     assetPrefix: process.env.CDN_URL || '',
     // ... rest of config
   };
   ```

3. **Set environment variable**:
   ```bash
   CDN_URL=https://cdn.vegancooking.recipes
   ```

## Verification

To verify CDN is working:

1. **Check response headers**:

   ```bash
   curl -I https://vegancooking.recipes/_next/static/css/app.css
   ```

   Look for `Cache-Control` and CDN-related headers

2. **Use browser DevTools**:
   - Network tab → Check if assets load from CDN
   - Look for cache headers in response

3. **Test with PageSpeed Insights**:
   - Should show assets served from CDN
   - Check "Serve static assets with an efficient cache policy"

## Performance Benefits

✅ **Faster Load Times**: Assets served from edge locations closest to users  
✅ **Reduced Server Load**: CDN handles static asset requests  
✅ **Better SEO**: Faster sites rank higher in search results  
✅ **Improved Core Web Vitals**: Better LCP, FID, and CLS scores  
✅ **Global Distribution**: Content available worldwide with low latency

## Maintenance

- No maintenance required for Vercel CDN (automatic)
- Cache headers are set automatically
- Images are optimized on-the-fly by Next.js
- All static assets are automatically distributed

## Troubleshooting

### Assets not loading from CDN

- Verify deployment is on Vercel
- Check that assets are in `public/` directory
- Ensure `next.config.js` doesn't have `unoptimized: true`

### Cache not working

- Check response headers include `Cache-Control`
- Verify CDN configuration in Vercel dashboard
- Clear browser cache and test again

### SEO checker still shows warning

- Some checkers don't recognize Vercel's CDN
- Verify assets are actually served from CDN (check headers)
- Consider using a custom CDN if checker requires specific providers
