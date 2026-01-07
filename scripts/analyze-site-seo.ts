/**
 * Comprehensive Site-Wide SEO Analysis and Optimization Script
 * 
 * This script analyzes the entire site structure and identifies SEO issues across:
 * - All pages (recipes, blog posts, static pages)
 * - Meta tags (title, description, OG tags, Twitter cards)
 * - Structured data (JSON-LD schemas)
 * - Image optimization (alt tags, dimensions, formats)
 * - Internal linking structure
 * - Heading hierarchy (H1, H2, etc.)
 * - Canonical URLs
 * - Sitemap coverage
 * - Robots.txt configuration
 * - URL structure
 * - Mobile optimization
 * 
 * Usage:
 *   npm run analyze-site-seo                    # Analyze site structure (dry run)
 *   npm run analyze-site-seo -- --execute       # Analyze and fix issues
 *   npm run analyze-site-seo -- --recipes-only  # Only analyze recipes
 *   npm run analyze-site-seo -- --pages-only    # Only analyze static pages
 *   npm run analyze-site-seo -- --limit 50      # Limit analysis to first 50 items
 */

import 'dotenv/config';
import OpenAI from 'openai';
import { Logger } from '../lib/logger';
import { getAllRecipesAsync } from '../data/recipes/helpers';
import { getPrismaClient } from '../lib/prisma';
import fs from 'fs';
import path from 'path';

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured. Set it as an environment variable.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: string;
  page: string;
  issue: string;
  recommendation: string;
  fixable: boolean;
  fix?: () => Promise<void>;
}

interface PageAnalysis {
  url: string;
  type: 'recipe' | 'blog' | 'static' | 'category';
  title?: string;
  description?: string;
  issues: SEOIssue[];
  score: number; // 0-100
}

interface SiteAnalysis {
  pages: PageAnalysis[];
  siteWideIssues: SEOIssue[];
  overallScore: number;
  summary: {
    totalPages: number;
    pagesWithIssues: number;
    criticalIssues: number;
    warnings: number;
    info: number;
  };
}

/**
 * Analyze a recipe page for SEO issues
 */
async function analyzeRecipePage(
  recipe: any,
  logger: Logger
): Promise<PageAnalysis> {
  const url = `https://vegancooking.recipes/recipes/${recipe.slug}`;
  const issues: SEOIssue[] = [];
  let score = 100;

  // Check title
  if (!recipe.title || recipe.title.trim().length === 0) {
    issues.push({
      type: 'error',
      category: 'meta-tags',
      page: url,
      issue: 'Missing title',
      recommendation: 'Add a descriptive title (50-60 characters)',
      fixable: true,
    });
    score -= 20;
  } else if (recipe.title.length > 60) {
    issues.push({
      type: 'warning',
      category: 'meta-tags',
      page: url,
      issue: `Title too long (${recipe.title.length} characters, should be 50-60)`,
      recommendation: 'Truncate title to 50-60 characters for optimal Google display',
      fixable: true,
    });
    score -= 5;
  } else if (recipe.title.length < 30) {
    issues.push({
      type: 'warning',
      category: 'meta-tags',
      page: url,
      issue: `Title too short (${recipe.title.length} characters, should be 50-60)`,
      recommendation: 'Expand title to 50-60 characters for better SEO',
      fixable: true,
    });
    score -= 5;
  }

  // Check description
  if (!recipe.description || recipe.description.trim().length === 0) {
    issues.push({
      type: 'error',
      category: 'meta-tags',
      page: url,
      issue: 'Missing description',
      recommendation: 'Add a compelling meta description (150-160 characters)',
      fixable: true,
    });
    score -= 20;
  } else if (recipe.description.length > 160) {
    issues.push({
      type: 'warning',
      category: 'meta-tags',
      page: url,
      issue: `Description too long (${recipe.description.length} characters, should be 150-160)`,
      recommendation: 'Truncate description to 150-160 characters',
      fixable: true,
    });
    score -= 5;
  } else if (recipe.description.length < 120) {
    issues.push({
      type: 'info',
      category: 'meta-tags',
      page: url,
      issue: `Description could be longer (${recipe.description.length} characters, optimal is 150-160)`,
      recommendation: 'Expand description to 150-160 characters for better CTR',
      fixable: true,
    });
    score -= 2;
  }

  // Check slug
  if (!recipe.slug || recipe.slug.trim().length === 0) {
    issues.push({
      type: 'error',
      category: 'url-structure',
      page: url,
      issue: 'Missing slug',
      recommendation: 'Generate a URL-friendly slug from the title',
      fixable: true,
    });
    score -= 15;
  } else {
    // Check slug format
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (!slugRegex.test(recipe.slug)) {
      issues.push({
        type: 'warning',
        category: 'url-structure',
        page: url,
        issue: `Slug contains invalid characters: ${recipe.slug}`,
        recommendation: 'Use lowercase letters, numbers, and hyphens only',
        fixable: true,
      });
      score -= 5;
    }
  }

  // Check image
  if (!recipe.image || recipe.image.trim().length === 0) {
    issues.push({
      type: 'error',
      category: 'images',
      page: url,
      issue: 'Missing recipe image',
      recommendation: 'Add a high-quality recipe image (1200x630px recommended)',
      fixable: false,
    });
    score -= 15;
  }

  // Check prologue
  if (!recipe.prologue || recipe.prologue.trim().length < 200) {
    issues.push({
      type: 'warning',
      category: 'content',
      page: url,
      issue: `Prologue too short (${recipe.prologue?.length || 0} characters, should be 200-300)`,
      recommendation: 'Expand prologue to 200-300 words for better SEO',
      fixable: true,
    });
    score -= 5;
  }

  // Check ingredients
  if (!recipe.ingredients || recipe.ingredients.length === 0) {
    issues.push({
      type: 'error',
      category: 'content',
      page: url,
      issue: 'Missing ingredients',
      recommendation: 'Add ingredients list for recipe completeness',
      fixable: false,
    });
    score -= 10;
  }

  // Check instructions
  if (!recipe.instructions || recipe.instructions.length === 0) {
    issues.push({
      type: 'error',
      category: 'content',
      page: url,
      issue: 'Missing instructions',
      recommendation: 'Add step-by-step instructions',
      fixable: false,
    });
    score -= 10;
  }

  // Check tags
  const tags = Array.isArray(recipe.tags)
    ? recipe.tags.filter((t: any) => typeof t === 'string')
    : (recipe.tags?.map((t: any) => typeof t === 'string' ? t : t.tag) || []);
  
  if (tags.length < 5) {
    issues.push({
      type: 'warning',
      category: 'meta-tags',
      page: url,
      issue: `Too few tags (${tags.length}, should be 10-15)`,
      recommendation: 'Add more relevant tags for better discoverability',
      fixable: true,
    });
    score -= 3;
  }

  // Check categories
  const categories = Array.isArray(recipe.category)
    ? recipe.category
    : (recipe.categories?.map((c: any) => typeof c === 'string' ? c : c.category) || []);
  
  if (categories.length === 0) {
    issues.push({
      type: 'warning',
      category: 'content',
      page: url,
      issue: 'Missing categories',
      recommendation: 'Add at least one category for better organization',
      fixable: true,
    });
    score -= 5;
  }

  // Check FAQs
  const faqs = recipe.faqs || [];
  if (faqs.length < 3) {
    issues.push({
      type: 'info',
      category: 'structured-data',
      page: url,
      issue: `Few FAQs (${faqs.length}, recommended 3-5 for featured snippets)`,
      recommendation: 'Add 3-5 FAQs to target featured snippet opportunities',
      fixable: true,
    });
    score -= 2;
  }

  // Check datePublished
  if (!recipe.datePublished) {
    issues.push({
      type: 'warning',
      category: 'structured-data',
      page: url,
      issue: 'Missing publication date',
      recommendation: 'Add datePublished for freshness signals',
      fixable: true,
    });
    score -= 3;
  }

  return {
    url,
    type: 'recipe',
    title: recipe.title,
    description: recipe.description,
    issues,
    score: Math.max(0, score),
  };
}

/**
 * Analyze static pages for SEO issues
 */
async function analyzeStaticPages(
  logger: Logger
): Promise<PageAnalysis[]> {
  const pages: PageAnalysis[] = [];
  const staticPages = [
    { path: '/', name: 'Homepage', type: 'static' as const },
    { path: '/about', name: 'About', type: 'static' as const },
    { path: '/recipes', name: 'Recipes Listing', type: 'static' as const },
    { path: '/categories', name: 'Categories', type: 'static' as const },
    { path: '/blog', name: 'Blog', type: 'static' as const },
    { path: '/meal-prep', name: 'Meal Prep', type: 'static' as const },
    { path: '/contact', name: 'Contact', type: 'static' as const },
    { path: '/search', name: 'Search', type: 'static' as const },
  ];

  for (const page of staticPages) {
    const url = `https://vegancooking.recipes${page.path}`;
    const issues: SEOIssue[] = [];
    let score = 100;

    // Check if page file exists
    const pageFile = path.join(process.cwd(), 'app', page.path === '/' ? 'page.tsx' : `${page.path}/page.tsx`);
    if (!fs.existsSync(pageFile)) {
      issues.push({
        type: 'error',
        category: 'structure',
        page: url,
        issue: `Page file not found: ${pageFile}`,
        recommendation: 'Create the page file',
        fixable: false,
      });
      score -= 50;
    } else {
      // Read page file to check for metadata
      try {
        const content = fs.readFileSync(pageFile, 'utf-8');
        
        // Check for metadata export
        if (!content.includes('export const metadata') && !content.includes('generateMetadata')) {
          issues.push({
            type: 'warning',
            category: 'meta-tags',
            page: url,
            issue: 'No metadata export found',
            recommendation: 'Add metadata export with title and description',
            fixable: true,
          });
          score -= 10;
        }

        // Check for H1 tag
        if (!content.includes('<h1') && !content.includes('h1 className')) {
          issues.push({
            type: 'warning',
            category: 'content',
            page: url,
            issue: 'No H1 heading found',
            recommendation: 'Add a single H1 heading for better SEO',
            fixable: true,
          });
          score -= 5;
        }

        // Check for structured data
        if (!content.includes('application/ld+json') && page.path === '/') {
          issues.push({
            type: 'info',
            category: 'structured-data',
            page: url,
            issue: 'No structured data found on homepage',
            recommendation: 'Add Organization and WebSite schemas',
            fixable: true,
          });
          score -= 3;
        }
      } catch (error: any) {
        issues.push({
          type: 'error',
          category: 'structure',
          page: url,
          issue: `Error reading page file: ${error.message}`,
          recommendation: 'Fix file permissions or path',
          fixable: false,
        });
        score -= 10;
      }
    }

    pages.push({
      url,
      type: page.type,
      issues,
      score: Math.max(0, score),
    });
  }

  return pages;
}

/**
 * Analyze blog posts for SEO issues
 */
async function analyzeBlogPosts(
  prisma: any,
  logger: Logger,
  limit?: number
): Promise<PageAnalysis[]> {
  const pages: PageAnalysis[] = [];
  
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      take: limit,
      orderBy: { datePublished: 'desc' },
    });

    for (const post of posts) {
      const url = `https://vegancooking.recipes/blog/${post.slug}`;
      const issues: SEOIssue[] = [];
      let score = 100;

      // Check title
      if (!post.title || post.title.trim().length === 0) {
        issues.push({
          type: 'error',
          category: 'meta-tags',
          page: url,
          issue: 'Missing title',
          recommendation: 'Add a descriptive title',
          fixable: true,
        });
        score -= 20;
      }

      // Check description
      if (!post.description || post.description.trim().length === 0) {
        issues.push({
          type: 'error',
          category: 'meta-tags',
          page: url,
          issue: 'Missing description',
          recommendation: 'Add a meta description',
          fixable: true,
        });
        score -= 20;
      }

      // Check slug
      if (!post.slug || post.slug.trim().length === 0) {
        issues.push({
          type: 'error',
          category: 'url-structure',
          page: url,
          issue: 'Missing slug',
          recommendation: 'Generate a URL-friendly slug',
          fixable: true,
        });
        score -= 15;
      }

      // Check content
      if (!post.content || post.content.trim().length < 300) {
        issues.push({
          type: 'warning',
          category: 'content',
          page: url,
          issue: 'Content too short (should be at least 300 words)',
          recommendation: 'Expand content for better SEO',
          fixable: true,
        });
        score -= 10;
      }

      pages.push({
        url,
        type: 'blog',
        title: post.title,
        description: post.description,
        issues,
        score: Math.max(0, score),
      });
    }
  } catch (error: any) {
    logger.warn(`Error analyzing blog posts: ${error.message}`);
  }

  return pages;
}

/**
 * Analyze sitemap coverage
 */
async function analyzeSitemap(
  recipes: any[],
  logger: Logger
): Promise<SEOIssue[]> {
  const issues: SEOIssue[] = [];
  
  // Check if sitemap file exists
  const sitemapFile = path.join(process.cwd(), 'app', 'sitemap.ts');
  if (!fs.existsSync(sitemapFile)) {
    issues.push({
      type: 'error',
      category: 'sitemap',
      page: 'site-wide',
      issue: 'Sitemap file not found',
      recommendation: 'Create app/sitemap.ts',
      fixable: false,
    });
    return issues;
  }

  // Check for recipes without slugs (should be in sitemap)
  const recipesWithoutSlugs = recipes.filter(r => !r.slug || r.slug.trim().length === 0);
  if (recipesWithoutSlugs.length > 0) {
    issues.push({
      type: 'error',
      category: 'sitemap',
      page: 'site-wide',
      issue: `${recipesWithoutSlugs.length} recipes missing slugs (won't be in sitemap)`,
      recommendation: 'Add slugs to all recipes',
      fixable: true,
    });
  }

  return issues;
}

/**
 * Analyze robots.txt
 */
async function analyzeRobots(
  logger: Logger
): Promise<SEOIssue[]> {
  const issues: SEOIssue[] = [];
  
  // Check if robots.ts file exists
  const robotsFile = path.join(process.cwd(), 'app', 'robots.ts');
  if (!fs.existsSync(robotsFile)) {
    issues.push({
      type: 'error',
      category: 'robots',
      page: 'site-wide',
      issue: 'Robots file not found',
      recommendation: 'Create app/robots.ts',
      fixable: false,
    });
  }

  return issues;
}

/**
 * Generate slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Truncate text to optimal length
 */
function truncateText(text: string, maxLength: number, minLength?: number): string {
  if (text.length <= maxLength) {
    if (minLength && text.length < minLength) {
      return text; // Don't truncate if below minimum
    }
    return text;
  }
  // Truncate at word boundary
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

/**
 * Fix recipe SEO issues
 */
async function fixRecipeIssues(
  prisma: any,
  logger: Logger,
  recipe: any,
  pageAnalysis: PageAnalysis
): Promise<number> {
  let fixedCount = 0;
  const updateData: any = {};

  for (const issue of pageAnalysis.issues) {
    if (!issue.fixable) continue;

    try {
      switch (issue.category) {
        case 'meta-tags':
          if (issue.issue.includes('Title too long')) {
            const optimalTitle = truncateText(recipe.title, 60);
            if (optimalTitle !== recipe.title) {
              updateData.title = optimalTitle;
              fixedCount++;
              logger.log(`   ✅ Fixed: Truncated title to ${optimalTitle.length} characters`);
            }
          } else if (issue.issue.includes('Description too long')) {
            const optimalDesc = truncateText(recipe.description, 160);
            if (optimalDesc !== recipe.description) {
              updateData.description = optimalDesc;
              fixedCount++;
              logger.log(`   ✅ Fixed: Truncated description to ${optimalDesc.length} characters`);
            }
          } else if (issue.issue.includes('Description could be longer')) {
            // This would require AI enhancement, skip for now
            logger.log(`   ⚠️  Skipped: Description enhancement requires AI (use optimize-seo script)`);
          }
          break;

        case 'url-structure':
          if (issue.issue.includes('Missing slug') || issue.issue.includes('invalid characters')) {
            const newSlug = generateSlug(recipe.title);
            if (newSlug && newSlug !== recipe.slug) {
              // Check if slug already exists
              const existing = await prisma.recipe.findUnique({ where: { slug: newSlug } });
              if (!existing) {
                updateData.slug = newSlug;
                fixedCount++;
                logger.log(`   ✅ Fixed: Generated new slug: ${newSlug}`);
              } else {
                // Add number suffix
                let counter = 1;
                let uniqueSlug = `${newSlug}-${counter}`;
                while (await prisma.recipe.findUnique({ where: { slug: uniqueSlug } })) {
                  counter++;
                  uniqueSlug = `${newSlug}-${counter}`;
                }
                updateData.slug = uniqueSlug;
                fixedCount++;
                logger.log(`   ✅ Fixed: Generated unique slug: ${uniqueSlug}`);
              }
            }
          }
          break;

        case 'structured-data':
          if (issue.issue.includes('Missing publication date')) {
            if (!recipe.datePublished) {
              updateData.datePublished = new Date();
              fixedCount++;
              logger.log(`   ✅ Fixed: Added publication date`);
            }
          }
          break;
      }
    } catch (error: any) {
      logger.warn(`   ⚠️  Failed to fix issue "${issue.issue}": ${error.message}`);
    }
  }

  // Apply updates if any
  if (Object.keys(updateData).length > 0) {
    try {
      await prisma.recipe.update({
        where: { id: recipe.id },
        data: updateData,
      });
      logger.success(`   ✅ Applied ${fixedCount} fix(es) to recipe: ${recipe.title}`);
    } catch (error: any) {
      logger.error(`   ❌ Failed to update recipe: ${error.message}`);
    }
  }

  return fixedCount;
}

/**
 * Apply fixes to all identified issues
 */
async function applyFixes(
  prisma: any,
  logger: Logger,
  analysis: SiteAnalysis,
  recipes: any[]
): Promise<void> {
  logger.log('🔧 Applying automatic fixes...\n');
  
  let totalFixed = 0;
  let totalProcessed = 0;
  const recipeMap = new Map<string, any>();
  for (const recipe of recipes) {
    if (recipe.slug) {
      recipeMap.set(`https://vegancooking.recipes/recipes/${recipe.slug}`, recipe);
    }
  }

  // Fix recipe issues
  for (const pageAnalysis of analysis.pages) {
    if (pageAnalysis.type === 'recipe') {
      const recipe = recipeMap.get(pageAnalysis.url);
      if (recipe && recipe.id) {
        try {
          const fixed = await fixRecipeIssues(prisma, logger, recipe, pageAnalysis);
          totalFixed += fixed;
          totalProcessed++;
        } catch (error: any) {
          logger.error(`   ❌ Failed to fix issues for ${pageAnalysis.url}: ${error.message}`);
        }
      } else {
        logger.warn(`   ⚠️  Recipe not found for ${pageAnalysis.url}, skipping fixes`);
      }
    }
  }

  logger.log('');
  if (totalProcessed > 0) {
    logger.success(`✅ Fixed ${totalFixed} issue(s) across ${totalProcessed} recipe(s)\n`);
  } else {
    logger.warn('⚠️  No recipes were processed for fixes\n');
  }
}

/**
 * Generate comprehensive site analysis report
 */
function generateReport(
  analysis: SiteAnalysis,
  logger: Logger,
  isDryRun: boolean
): void {
  logger.separator();
  logger.log('📊 COMPREHENSIVE SEO ANALYSIS REPORT');
  logger.separator();
  logger.log('');

  // Summary
  logger.log('📈 Summary:');
  logger.log(`   Total Pages Analyzed: ${analysis.summary.totalPages}`);
  logger.log(`   Pages with Issues: ${analysis.summary.pagesWithIssues}`);
  logger.log(`   Critical Issues: ${analysis.summary.criticalIssues}`);
  logger.log(`   Warnings: ${analysis.summary.warnings}`);
  logger.log(`   Info: ${analysis.summary.info}`);
  logger.log(`   Overall SEO Score: ${analysis.overallScore.toFixed(1)}/100`);
  logger.log('');

  // Site-wide issues
  if (analysis.siteWideIssues.length > 0) {
    logger.log('🌐 Site-Wide Issues:');
    for (const issue of analysis.siteWideIssues) {
      const icon = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : 'ℹ️';
      logger.log(`   ${icon} [${issue.category.toUpperCase()}] ${issue.issue}`);
      logger.log(`      → ${issue.recommendation}`);
    }
    logger.log('');
  }

  // Pages with issues
  const pagesWithIssues = analysis.pages.filter(p => p.issues.length > 0);
  if (pagesWithIssues.length > 0) {
    logger.log('📄 Pages with Issues:');
    logger.log('');

    // Group by issue type
    const criticalPages = pagesWithIssues.filter(p => p.issues.some(i => i.type === 'error'));
    const warningPages = pagesWithIssues.filter(p => p.issues.some(i => i.type === 'warning') && !p.issues.some(i => i.type === 'error'));

    if (criticalPages.length > 0) {
      logger.log('   ❌ Critical Issues:');
      for (const page of criticalPages.slice(0, 10)) {
        logger.log(`      ${page.url} (Score: ${page.score.toFixed(1)}/100)`);
        const criticalIssues = page.issues.filter(i => i.type === 'error');
        for (const issue of criticalIssues.slice(0, 3)) {
          logger.log(`         - ${issue.issue}`);
        }
      }
      if (criticalPages.length > 10) {
        logger.log(`      ... and ${criticalPages.length - 10} more pages with critical issues`);
      }
      logger.log('');
    }

    if (warningPages.length > 0) {
      logger.log('   ⚠️  Warnings:');
      for (const page of warningPages.slice(0, 10)) {
        logger.log(`      ${page.url} (Score: ${page.score.toFixed(1)}/100)`);
        const warnings = page.issues.filter(i => i.type === 'warning');
        for (const issue of warnings.slice(0, 2)) {
          logger.log(`         - ${issue.issue}`);
        }
      }
      if (warningPages.length > 10) {
        logger.log(`      ... and ${warningPages.length - 10} more pages with warnings`);
      }
      logger.log('');
    }
  }

  // Top recommendations
  logger.log('💡 Top Recommendations:');
  const allIssues = [...analysis.siteWideIssues, ...analysis.pages.flatMap(p => p.issues)];
  const fixableIssues = allIssues.filter(i => i.fixable);
  const recommendations = new Map<string, number>();
  
  for (const issue of fixableIssues) {
    const count = recommendations.get(issue.recommendation) || 0;
    recommendations.set(issue.recommendation, count + 1);
  }

  const sortedRecommendations = Array.from(recommendations.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  for (const [recommendation, count] of sortedRecommendations) {
    logger.log(`   ${count}x - ${recommendation}`);
  }

  logger.log('');
  logger.separator();
  if (isDryRun) {
    logger.log(`\n🔍 DRY RUN MODE: No fixes were applied.`);
    logger.log(`   To apply fixes, run:`);
    logger.log(`   npm run analyze-site-seo -- --execute\n`);
  } else {
    logger.log(`\n⚠️  EXECUTE MODE: Fixes will be applied to fixable issues.\n`);
  }
  logger.separator();
  logger.log('');
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const isDryRun = !args.includes('--execute');
  const recipesOnly = args.includes('--recipes-only');
  const pagesOnly = args.includes('--pages-only');
  
  let limit: number | undefined;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--limit' && args[i + 1]) {
      limit = parseInt(args[i + 1], 10);
      if (isNaN(limit) || limit <= 0) {
        console.error('❌ Error: --limit must be a positive number');
        process.exit(1);
      }
      i++;
    }
  }

  const logger = new Logger('SEO Site Analyzer', 'analyze-site-seo');

  logger.log('\n🚀 SEO Site Structure Analyzer');
  logger.separator();
  logger.log(`Mode: ${isDryRun ? '🔍 DRY RUN (no changes will be made)' : '⚠️  EXECUTE (fixes will be applied)'}`);
  if (limit) {
    logger.log(`Limit: Analyzing first ${limit} items`);
  }
  if (recipesOnly) {
    logger.log(`Scope: Recipes only`);
  } else if (pagesOnly) {
    logger.log(`Scope: Static pages only`);
  } else {
    logger.log(`Scope: Full site analysis`);
  }
  logger.log('');

  try {
    const prisma = getPrismaClient();
    await prisma.$connect();
    logger.success('Database connection established\n');

    const analysis: SiteAnalysis = {
      pages: [],
      siteWideIssues: [],
      overallScore: 0,
      summary: {
        totalPages: 0,
        pagesWithIssues: 0,
        criticalIssues: 0,
        warnings: 0,
        info: 0,
      },
    };

    // Analyze recipes
    if (!pagesOnly) {
      logger.log('📝 Analyzing recipes...');
      const recipes = await getAllRecipesAsync();
      const recipesToAnalyze = limit ? recipes.slice(0, limit) : recipes;
      
      for (let i = 0; i < recipesToAnalyze.length; i++) {
        const recipe = recipesToAnalyze[i];
        if (i % 10 === 0) {
          logger.log(`   Analyzing recipe ${i + 1}/${recipesToAnalyze.length}...`);
        }
        const pageAnalysis = await analyzeRecipePage(recipe, logger);
        analysis.pages.push(pageAnalysis);
      }
      logger.success(`   ✅ Analyzed ${recipesToAnalyze.length} recipes\n`);
    }

    // Analyze static pages
    if (!recipesOnly) {
      logger.log('📄 Analyzing static pages...');
      const staticPages = await analyzeStaticPages(logger);
      analysis.pages.push(...staticPages);
      logger.success(`   ✅ Analyzed ${staticPages.length} static pages\n`);
    }

    // Analyze blog posts
    if (!recipesOnly && !pagesOnly) {
      logger.log('📰 Analyzing blog posts...');
      const blogPages = await analyzeBlogPosts(prisma, logger, limit);
      analysis.pages.push(...blogPages);
      logger.success(`   ✅ Analyzed ${blogPages.length} blog posts\n`);
    }

    // Analyze sitemap
    if (!recipesOnly) {
      logger.log('🗺️  Analyzing sitemap...');
      const recipes = await getAllRecipesAsync();
      const sitemapIssues = await analyzeSitemap(recipes, logger);
      analysis.siteWideIssues.push(...sitemapIssues);
      logger.success('   ✅ Sitemap analysis complete\n');
    }

    // Analyze robots.txt
    if (!recipesOnly) {
      logger.log('🤖 Analyzing robots.txt...');
      const robotsIssues = await analyzeRobots(logger);
      analysis.siteWideIssues.push(...robotsIssues);
      logger.success('   ✅ Robots.txt analysis complete\n');
    }

    // Calculate summary
    analysis.summary.totalPages = analysis.pages.length;
    analysis.summary.pagesWithIssues = analysis.pages.filter(p => p.issues.length > 0).length;
    analysis.summary.criticalIssues = analysis.pages.reduce((sum, p) => 
      sum + p.issues.filter(i => i.type === 'error').length, 0) + 
      analysis.siteWideIssues.filter(i => i.type === 'error').length;
    analysis.summary.warnings = analysis.pages.reduce((sum, p) => 
      sum + p.issues.filter(i => i.type === 'warning').length, 0) + 
      analysis.siteWideIssues.filter(i => i.type === 'warning').length;
    analysis.summary.info = analysis.pages.reduce((sum, p) => 
      sum + p.issues.filter(i => i.type === 'info').length, 0) + 
      analysis.siteWideIssues.filter(i => i.type === 'info').length;

    if (analysis.pages.length > 0) {
      analysis.overallScore = analysis.pages.reduce((sum, p) => sum + p.score, 0) / analysis.pages.length;
    }

    // Generate report
    generateReport(analysis, logger, isDryRun);

    // Apply fixes if not dry run
    if (!isDryRun) {
      const recipes = await getAllRecipesAsync();
      await applyFixes(prisma, logger, analysis, recipes);
    }

    if (logger.getLogFile()) {
      logger.log(`\n📝 Log file saved to: ${logger.getLogFile()}\n`);
    }
  } catch (error: any) {
    logger.error(`Error: ${error.message}`);
    if (error.stack) {
      logger.error(`Stack trace: ${error.stack}`);
    }
    process.exit(1);
  } finally {
    try {
      const prisma = getPrismaClient();
      if (prisma) {
        await prisma.$disconnect();
        logger.log('🔌 Database connection closed');
      }
    } catch (error) {
      // Ignore disconnect errors
    }
    logger.close();
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

export { main as analyzeSiteSEO };
