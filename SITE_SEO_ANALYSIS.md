# Site-Wide SEO Analysis and Optimization

## Overview

The enhanced SEO optimization system now includes comprehensive site structure analysis that identifies and fixes SEO issues across the entire website, not just individual recipes.

## New Script: `analyze-site-seo.ts`

This script provides comprehensive site-wide SEO analysis and automatic fixes for common issues.

### Features

1. **Multi-Page Analysis**
   - Analyzes all recipes
   - Analyzes all blog posts
   - Analyzes all static pages
   - Validates site-wide configurations

2. **Comprehensive Issue Detection**
   - Meta tags (title, description length optimization)
   - URL structure (slug validation, format checking)
   - Image optimization (alt tags, dimensions)
   - Content quality (prologue length, ingredient/instruction completeness)
   - Structured data (publication dates, FAQs)
   - Sitemap coverage
   - Robots.txt configuration

3. **Automatic Fixes**
   - Truncates titles/descriptions to optimal lengths
   - Generates URL-friendly slugs
   - Adds missing publication dates
   - Validates and fixes common issues

4. **Detailed Reporting**
   - Overall SEO score (0-100)
   - Issue categorization (errors, warnings, info)
   - Page-by-page analysis
   - Top recommendations
   - Fixable vs. non-fixable issues

## Usage

### Basic Analysis (Dry Run)

```bash
# Analyze entire site structure
npm run analyze-site-seo

# Analyze only recipes
npm run analyze-site-seo -- --recipes-only

# Analyze only static pages
npm run analyze-site-seo -- --pages-only

# Limit analysis to first 50 items
npm run analyze-site-seo -- --limit 50
```

### Apply Fixes

```bash
# Analyze and automatically fix issues
npm run analyze-site-seo -- --execute

# Fix only recipes
npm run analyze-site-seo -- --recipes-only --execute

# Fix with limit
npm run analyze-site-seo -- --limit 100 --execute
```

## What Gets Analyzed

### Recipe Pages

- ✅ Title length (50-60 characters optimal)
- ✅ Description length (150-160 characters optimal)
- ✅ Slug format and validity
- ✅ Image presence and quality
- ✅ Prologue length (200-300 words)
- ✅ Ingredients completeness
- ✅ Instructions completeness
- ✅ Tags count (10-15 recommended)
- ✅ Categories presence
- ✅ FAQs count (3-5 for featured snippets)
- ✅ Publication date

### Blog Posts

- ✅ Title presence and quality
- ✅ Description presence
- ✅ Slug format
- ✅ Content length (minimum 300 words)

### Static Pages

- ✅ Page file existence
- ✅ Metadata exports
- ✅ H1 heading presence
- ✅ Structured data (homepage)

### Site-Wide

- ✅ Sitemap coverage
- ✅ Robots.txt configuration
- ✅ URL structure consistency

## Issue Types

### Errors (Critical)

- Missing required fields (title, description, slug)
- Missing content (ingredients, instructions)
- Invalid URL structure

### Warnings

- Suboptimal lengths (title/description)
- Missing optional but recommended fields
- Content quality issues

### Info

- Optimization opportunities
- Enhancement suggestions

## Automatic Fixes

The script can automatically fix:

1. **Title/Description Truncation**
   - Truncates titles to 60 characters
   - Truncates descriptions to 160 characters
   - Preserves word boundaries

2. **Slug Generation**
   - Creates URL-friendly slugs from titles
   - Ensures uniqueness
   - Validates format

3. **Missing Dates**
   - Adds publication dates if missing

## Integration with Existing Scripts

### `optimize-seo` (Recipe Content Optimization)

- Focuses on AI-powered content enhancement
- Optimizes titles, descriptions, prologues with AI
- Enhances tags and FAQs
- **Use for**: Deep content optimization

### `analyze-site-seo` (Site Structure Analysis)

- Focuses on technical SEO issues
- Validates structure and format
- Fixes common problems automatically
- **Use for**: Site-wide health check

### Recommended Workflow

1. **Initial Setup**: Run `analyze-site-seo` to identify structural issues
2. **Fix Issues**: Run `analyze-site-seo --execute` to apply automatic fixes
3. **Content Enhancement**: Run `optimize-seo` for AI-powered content optimization
4. **Ongoing**: Run `analyze-site-seo` periodically to maintain SEO health

## Report Output

The script generates a comprehensive report including:

- **Summary Statistics**
  - Total pages analyzed
  - Pages with issues
  - Critical issues count
  - Overall SEO score

- **Site-Wide Issues**
  - Sitemap problems
  - Robots.txt issues
  - Configuration problems

- **Page-Specific Issues**
  - Grouped by severity
  - Issue descriptions
  - Recommendations

- **Top Recommendations**
  - Most common fixable issues
  - Prioritized by frequency

## Example Output

```
📊 COMPREHENSIVE SEO ANALYSIS REPORT
═══════════════════════════════════════════════════════════

📈 Summary:
   Total Pages Analyzed: 1250
   Pages with Issues: 342
   Critical Issues: 45
   Warnings: 287
   Info: 156
   Overall SEO Score: 87.3/100

🌐 Site-Wide Issues:
   ⚠️ [SITEMAP] 12 recipes missing slugs (won't be in sitemap)
      → Add slugs to all recipes

📄 Pages with Issues:
   ❌ Critical Issues:
      https://vegancooking.recipes/recipes/recipe-123 (Score: 65.0/100)
         - Missing description
         - Title too long (78 characters)
      ... and 44 more pages with critical issues

   ⚠️  Warnings:
      https://vegancooking.recipes/recipes/recipe-456 (Score: 92.0/100)
         - Description could be longer (120 characters, optimal is 150-160)
      ... and 286 more pages with warnings

💡 Top Recommendations:
   45x - Add a compelling meta description (150-160 characters)
   32x - Truncate title to 50-60 characters for optimal Google display
   28x - Add more relevant tags for better discoverability
   ...
```

## Best Practices

1. **Run Regularly**: Schedule weekly or monthly analysis
2. **Fix Before Optimize**: Fix structural issues before content optimization
3. **Review Reports**: Always review the report before applying fixes
4. **Test Changes**: Test fixes on a small subset first (use `--limit`)
5. **Monitor Scores**: Track overall SEO score over time

## Limitations

- Some issues require manual intervention (e.g., missing images)
- Content enhancement requires the `optimize-seo` script
- Some fixes may require AI assistance (use `optimize-seo` for those)

## Future Enhancements

- Image optimization analysis
- Internal linking structure analysis
- Page speed analysis
- Mobile optimization checks
- Schema.org validation
- Open Graph tag validation
- Canonical URL validation
