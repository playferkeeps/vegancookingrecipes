# Indexing Fixes Applied

This document outlines the fixes applied to resolve the 1,000+ recipes not being indexed in Google Search Console.

## Issues Identified

From Google Search Console:

1. **579 pages** - "Alternate page with proper canonical tag" (canonical tags pointing to other pages)
2. **451 pages** - "Discovered - currently not indexed" (Google found them but hasn't indexed yet)
3. **2 pages** - "Crawled - currently not indexed"
4. **2 pages** - "Page with redirect"
5. **1 page** - "Not found (404)"

## Fixes Applied

### 1. Added Explicit Robots Meta Tags

**Recipe Pages** (`app/recipes/[slug]/page.tsx`):

- Added explicit `robots` meta tag with `index: true, follow: true`
- Added Googlebot-specific settings for better indexing

**Blog Post Pages** (`app/blog/[slug]/page.tsx`):

- Added explicit `robots` meta tag with `index: true, follow: true`
- Added Googlebot-specific settings

This ensures Google knows these pages should be indexed.

### 2. Improved Sitemap Configuration

**Sitemap Updates** (`app/sitemap.ts`):

- Changed recipe `changeFrequency` from `monthly` to `weekly` (signals more frequent updates)
- Increased recipe `priority` from `0.8` to `0.9` (higher priority for indexing)
- Added better logging to track sitemap generation

### 3. Created Dynamic Robots.txt

**New File** (`app/robots.ts`):

- Created Next.js robots.ts file (replaces static robots.txt)
- Explicitly allows all pages to be crawled
- Disallows only admin and API routes
- Points to sitemap.xml

### 4. Enhanced Static Params Generation

**Recipe Pages** (`app/recipes/[slug]/page.tsx`):

- Added error handling to `generateStaticParams`
- Added logging to track how many recipes are being pre-generated
- Ensures all recipes are included in static generation

### 5. Verification Script

**New Script** (`scripts/verify-sitemap-coverage.ts`):

- Verifies all recipes have slugs
- Checks for duplicate slugs
- Validates publication dates
- Reports expected sitemap URL count

Run with: `npm run verify-sitemap`

## Next Steps

### Immediate Actions

1. **Rebuild and Deploy**:

   ```bash
   npm run build
   # Deploy to production
   ```

2. **Submit Updated Sitemap**:
   - Go to Google Search Console
   - Navigate to Sitemaps
   - Re-submit `https://vegancooking.recipes/sitemap.xml`

3. **Request Indexing** (for key pages):
   - In Google Search Console, use "URL Inspection" tool
   - Test a few recipe URLs
   - Click "Request Indexing" for important recipes

4. **Verify Coverage**:
   ```bash
   npm run verify-sitemap
   ```
   This will show you how many recipes should be in the sitemap.

### Monitoring

1. **Check Search Console Weekly**:
   - Monitor "Coverage" report
   - Watch for improvements in "Indexed" count
   - Check for new indexing errors

2. **Monitor Sitemap**:
   - Verify sitemap includes all recipes
   - Check sitemap is accessible: `https://vegancooking.recipes/sitemap.xml`
   - Ensure sitemap updates when new recipes are added

3. **Check Indexing Status**:
   - Use "URL Inspection" tool in Search Console
   - Test random recipe URLs to verify they're being indexed

## Expected Results

After these fixes:

- ✅ All recipe pages have explicit `index: true` robots directive
- ✅ Sitemap has higher priority and better changeFrequency
- ✅ Robots.txt explicitly allows all recipe pages
- ✅ All recipes are included in static generation

**Timeline**: Google typically takes 1-2 weeks to re-crawl and index pages. You should see improvements in the Search Console "Coverage" report within 2-4 weeks.

## Troubleshooting

### If Pages Still Not Indexed After 4 Weeks

1. **Check for Duplicate Content**:
   - Ensure canonical tags point to the correct page (not other pages)
   - Verify no duplicate recipes with same content

2. **Check Page Quality**:
   - Ensure recipes have sufficient content (not too short)
   - Verify images are accessible
   - Check for broken links

3. **Check Crawl Budget**:
   - If you have 1,000+ pages, Google might need time to crawl them all
   - Consider splitting sitemap if you have 50,000+ URLs

4. **Verify Noindex Tags**:
   - Check that no pages accidentally have `noindex` tags
   - Verify robots.txt isn't blocking pages

### Common Issues

**"Alternate page with proper canonical tag"**:

- This is actually correct behavior if pages have canonical tags
- Google is recognizing these as alternate versions
- The canonical page should be indexed instead

**"Discovered - currently not indexed"**:

- Google found the pages but hasn't indexed them yet
- This is normal for new or low-traffic pages
- Will improve as Google crawls more frequently

## Additional Recommendations

1. **Internal Linking**: Ensure recipes link to each other (related recipes)
2. **Fresh Content**: Regularly update recipes to signal freshness
3. **Page Speed**: Ensure pages load quickly (affects crawl budget)
4. **Mobile-Friendly**: Verify all pages are mobile-responsive
