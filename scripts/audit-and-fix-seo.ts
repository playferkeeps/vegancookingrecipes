/**
 * Comprehensive SEO Audit and Fix Script
 * Identifies and fixes critical SEO issues for Google Search Console
 * 
 * Usage:
 *   npm run audit-seo              # Audit only (dry run)
 *   npm run audit-seo -- --execute # Audit and fix issues
 */

import 'dotenv/config';
import { getPrismaClient } from '../lib/prisma';
import { getAllRecipesAsync } from '../data/recipes/helpers';
import * as fs from 'fs';
import * as path from 'path';

interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  page: string;
  field: string;
  issue: string;
  fix?: string;
  fixable: boolean;
}

interface SEOReport {
  totalIssues: number;
  errors: number;
  warnings: number;
  info: number;
  fixable: number;
  issues: SEOIssue[];
  score: number; // 0-100
}

/**
 * Audit recipe pages for SEO issues
 */
async function auditRecipes(): Promise<SEOIssue[]> {
  const issues: SEOIssue[] = [];
  const recipes = await getAllRecipesAsync();
  
  console.log(`\n📋 Auditing ${recipes.length} recipes...\n`);
  
  for (const recipe of recipes) {
    const url = `/recipes/${recipe.slug}`;
    
    // 1. Check title length (50-60 chars optimal for Google)
    if (recipe.title.length > 60) {
      issues.push({
        type: 'warning',
        page: url,
        field: 'title',
        issue: `Title too long (${recipe.title.length} chars, optimal: 50-60)`,
        fix: recipe.title.substring(0, 57) + '...',
        fixable: true,
      });
    } else if (recipe.title.length < 30) {
      issues.push({
        type: 'warning',
        page: url,
        field: 'title',
        issue: `Title too short (${recipe.title.length} chars, optimal: 50-60)`,
        fixable: false,
      });
    }
    
    // 2. Check description length (150-160 chars optimal)
    if (recipe.description.length > 160) {
      issues.push({
        type: 'warning',
        page: url,
        field: 'description',
        issue: `Description too long (${recipe.description.length} chars, optimal: 150-160)`,
        fix: recipe.description.substring(0, 157) + '...',
        fixable: true,
      });
    } else if (recipe.description.length < 120) {
      issues.push({
        type: 'info',
        page: url,
        field: 'description',
        issue: `Description could be longer (${recipe.description.length} chars, optimal: 150-160)`,
        fixable: false,
      });
    }
    
    // 3. Check for missing image
    if (!recipe.image || recipe.image.trim() === '') {
      issues.push({
        type: 'error',
        page: url,
        field: 'image',
        issue: 'Missing recipe image (required for rich results)',
        fixable: false,
      });
    }
    
    // 4. Check image URL format (must be absolute for structured data)
    if (recipe.image && !recipe.image.startsWith('http') && !recipe.image.startsWith('/')) {
      issues.push({
        type: 'error',
        page: url,
        field: 'image',
        issue: `Invalid image URL format: ${recipe.image}`,
        fix: recipe.image.startsWith('recipe-images') ? `/recipe-images/${recipe.image}` : `/${recipe.image}`,
        fixable: true,
      });
    }
    
    // 5. Check for missing datePublished
    if (!recipe.datePublished) {
      issues.push({
        type: 'error',
        page: url,
        field: 'datePublished',
        issue: 'Missing publication date (required for structured data)',
        fix: new Date().toISOString(),
        fixable: true,
      });
    }
    
    // 6. Check for missing ingredients
    if (!recipe.ingredients || recipe.ingredients.length === 0) {
      issues.push({
        type: 'error',
        page: url,
        field: 'ingredients',
        issue: 'Missing ingredients (required for Recipe schema)',
        fixable: false,
      });
    }
    
    // 7. Check for missing instructions
    if (!recipe.instructions || recipe.instructions.length === 0) {
      issues.push({
        type: 'error',
        page: url,
        field: 'instructions',
        issue: 'Missing instructions (required for Recipe schema)',
        fixable: false,
      });
    }
    
    // 8. Check for missing prepTime/cookTime
    if (recipe.prepTime === undefined || recipe.prepTime === null) {
      issues.push({
        type: 'error',
        page: url,
        field: 'prepTime',
        issue: 'Missing prepTime (required for Recipe schema)',
        fix: 0,
        fixable: true,
      });
    }
    
    if (recipe.cookTime === undefined || recipe.cookTime === null) {
      issues.push({
        type: 'error',
        page: url,
        field: 'cookTime',
        issue: 'Missing cookTime (required for Recipe schema)',
        fix: 0,
        fixable: true,
      });
    }
    
    if (recipe.totalTime === undefined || recipe.totalTime === null) {
      issues.push({
        type: 'error',
        page: url,
        field: 'totalTime',
        issue: 'Missing totalTime (required for Recipe schema)',
        fix: (recipe.prepTime || 0) + (recipe.cookTime || 0),
        fixable: true,
      });
    }
    
    // 9. Check slug format (must be URL-friendly)
    if (!/^[a-z0-9-]+$/.test(recipe.slug)) {
      issues.push({
        type: 'error',
        page: url,
        field: 'slug',
        issue: `Invalid slug format: ${recipe.slug} (must be lowercase, alphanumeric, hyphens only)`,
        fixable: false,
      });
    }
    
    // 10. Check for empty categories
    if (!recipe.category || recipe.category.length === 0) {
      issues.push({
        type: 'warning',
        page: url,
        field: 'category',
        issue: 'Missing categories (helps with categorization)',
        fixable: false,
      });
    }
  }
  
  return issues;
}

/**
 * Audit sitemap
 */
async function auditSitemap(): Promise<SEOIssue[]> {
  const issues: SEOIssue[] = [];
  
  try {
    // Check if sitemap.ts exists
    const sitemapPath = path.join(process.cwd(), 'app', 'sitemap.ts');
    if (!fs.existsSync(sitemapPath)) {
      issues.push({
        type: 'error',
        page: 'sitemap',
        field: 'file',
        issue: 'Sitemap file not found',
        fixable: false,
      });
    }
    
    // Check robots.txt references sitemap
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
      if (!robotsContent.includes('sitemap.xml')) {
        issues.push({
          type: 'warning',
          page: 'robots.txt',
          field: 'sitemap',
          issue: 'robots.txt does not reference sitemap.xml',
          fix: 'Sitemap: https://vegancooking.recipes/sitemap.xml',
          fixable: true,
        });
      }
    }
  } catch (error: any) {
    issues.push({
      type: 'error',
      page: 'sitemap',
      field: 'audit',
      issue: `Error auditing sitemap: ${error.message}`,
      fixable: false,
    });
  }
  
  return issues;
}

/**
 * Check for critical SEO configuration issues
 */
async function auditConfiguration(): Promise<SEOIssue[]> {
  const issues: SEOIssue[] = [];
  
  // Check if recipe pages use force-dynamic (BAD for SEO)
  const recipePagePath = path.join(process.cwd(), 'app', 'recipes', '[slug]', 'page.tsx');
  if (fs.existsSync(recipePagePath)) {
    const content = fs.readFileSync(recipePagePath, 'utf-8');
    
    if (content.includes("export const dynamic = 'force-dynamic'")) {
      issues.push({
        type: 'error',
        page: 'app/recipes/[slug]/page.tsx',
        field: 'rendering',
        issue: "Using 'force-dynamic' prevents static generation - CRITICAL for SEO",
        fix: "Remove 'force-dynamic' or change to 'auto' for better SEO",
        fixable: true,
      });
    }
    
    // Check if generateStaticParams exists
    if (!content.includes('generateStaticParams')) {
      issues.push({
        type: 'warning',
        page: 'app/recipes/[slug]/page.tsx',
        field: 'static-generation',
        issue: 'Missing generateStaticParams - pages won\'t be pre-generated',
        fixable: false,
      });
    }
  }
  
  return issues;
}

/**
 * Generate SEO report
 */
function generateReport(issues: SEOIssue[]): SEOReport {
  const errors = issues.filter(i => i.type === 'error').length;
  const warnings = issues.filter(i => i.type === 'warning').length;
  const info = issues.filter(i => i.type === 'info').length;
  const fixable = issues.filter(i => i.fixable).length;
  
  // Calculate score (0-100)
  // Start with 100, deduct points for issues
  let score = 100;
  score -= errors * 5; // Each error costs 5 points
  score -= warnings * 2; // Each warning costs 2 points
  score -= info * 1; // Each info costs 1 point
  score = Math.max(0, score);
  
  return {
    totalIssues: issues.length,
    errors,
    warnings,
    info,
    fixable,
    issues,
    score,
  };
}

/**
 * Print report
 */
function printReport(report: SEOReport) {
  console.log('\n' + '='.repeat(80));
  console.log('📊 SEO AUDIT REPORT');
  console.log('='.repeat(80));
  console.log(`\nOverall SEO Score: ${report.score}/100`);
  console.log(`\nTotal Issues: ${report.totalIssues}`);
  console.log(`  ❌ Errors: ${report.errors}`);
  console.log(`  ⚠️  Warnings: ${report.warnings}`);
  console.log(`  ℹ️  Info: ${report.info}`);
  console.log(`  ✅ Fixable: ${report.fixable}`);
  
  if (report.errors > 0) {
    console.log('\n❌ ERRORS (Critical - Fix Immediately):');
    report.issues
      .filter(i => i.type === 'error')
      .forEach(issue => {
        console.log(`\n  Page: ${issue.page}`);
        console.log(`  Field: ${issue.field}`);
        console.log(`  Issue: ${issue.issue}`);
        if (issue.fix) {
          console.log(`  Fix: ${issue.fix}`);
        }
      });
  }
  
  if (report.warnings > 0) {
    console.log('\n⚠️  WARNINGS (Should Fix):');
    report.issues
      .filter(i => i.type === 'warning')
      .slice(0, 20) // Limit to first 20
      .forEach(issue => {
        console.log(`\n  Page: ${issue.page}`);
        console.log(`  Field: ${issue.field}`);
        console.log(`  Issue: ${issue.issue}`);
        if (issue.fix) {
          console.log(`  Fix: ${issue.fix}`);
        }
      });
    
    if (report.warnings > 20) {
      console.log(`\n  ... and ${report.warnings - 20} more warnings`);
    }
  }
  
  console.log('\n' + '='.repeat(80));
}

/**
 * Fix issues
 */
async function fixIssues(issues: SEOIssue[], execute: boolean): Promise<void> {
  if (!execute) {
    console.log('\n💡 Run with --execute flag to apply fixes');
    return;
  }
  
  const fixableIssues = issues.filter(i => i.fixable && i.fix);
  if (fixableIssues.length === 0) {
    console.log('\n✅ No fixable issues found');
    return;
  }
  
  console.log(`\n🔧 Fixing ${fixableIssues.length} issues...\n`);
  
  const prisma = getPrismaClient();
  if (!prisma) {
    console.error('❌ Cannot connect to database');
    return;
  }
  
  // Group by page/field for batch updates
  const updates: Map<string, any> = new Map();
  
  for (const issue of fixableIssues) {
    if (issue.page.startsWith('/recipes/')) {
      const slug = issue.page.replace('/recipes/', '');
      
      if (!updates.has(slug)) {
        updates.set(slug, {});
      }
      
      const update = updates.get(slug)!;
      
      switch (issue.field) {
        case 'title':
          if (issue.fix) update.title = issue.fix;
          break;
        case 'description':
          if (issue.fix) update.description = issue.fix;
          break;
        case 'image':
          if (issue.fix) update.image = issue.fix;
          break;
        case 'datePublished':
          if (issue.fix) update.datePublished = issue.fix;
          break;
        case 'prepTime':
          if (issue.fix !== undefined) update.prepTime = issue.fix;
          break;
        case 'cookTime':
          if (issue.fix !== undefined) update.cookTime = issue.fix;
          break;
        case 'totalTime':
          if (issue.fix !== undefined) update.totalTime = issue.fix;
          break;
      }
    }
  }
  
  // Apply updates
  let fixed = 0;
  for (const [slug, update] of updates) {
    try {
      await prisma.recipe.updateMany({
        where: { slug },
        data: update,
      });
      fixed++;
      console.log(`  ✅ Fixed: ${slug}`);
    } catch (error: any) {
      console.error(`  ❌ Failed to fix ${slug}: ${error.message}`);
    }
  }
  
  // Fix robots.txt if needed
  const robotsIssues = issues.filter(i => i.page === 'robots.txt' && i.fixable);
  if (robotsIssues.length > 0) {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    const content = fs.readFileSync(robotsPath, 'utf-8');
    if (!content.includes('Sitemap:')) {
      fs.appendFileSync(robotsPath, '\nSitemap: https://vegancooking.recipes/sitemap.xml\n');
      console.log('  ✅ Fixed: robots.txt');
    }
  }
  
  // Fix force-dynamic issue
  const configIssues = issues.filter(i => i.page.includes('page.tsx') && i.fixable);
  if (configIssues.length > 0) {
    const recipePagePath = path.join(process.cwd(), 'app', 'recipes', '[slug]', 'page.tsx');
    let content = fs.readFileSync(recipePagePath, 'utf-8');
    
    if (content.includes("export const dynamic = 'force-dynamic'")) {
      // Change to auto for better SEO
      content = content.replace(
        "export const dynamic = 'force-dynamic';",
        "export const dynamic = 'auto'; // Changed from 'force-dynamic' for better SEO"
      );
      fs.writeFileSync(recipePagePath, content);
      console.log('  ✅ Fixed: Changed force-dynamic to auto for better SEO');
    }
  }
  
  console.log(`\n✅ Fixed ${fixed} recipe(s) and configuration issues`);
}

/**
 * Main function
 */
async function main() {
  const execute = process.argv.includes('--execute');
  
  console.log('🔍 Starting SEO Audit...\n');
  
  const prisma = getPrismaClient();
  if (!prisma) {
    console.error('❌ Cannot connect to database');
    process.exit(1);
  }
  
  try {
    // Run audits
    const [recipeIssues, sitemapIssues, configIssues] = await Promise.all([
      auditRecipes(),
      auditSitemap(),
      auditConfiguration(),
    ]);
    
    const allIssues = [...recipeIssues, ...sitemapIssues, ...configIssues];
    const report = generateReport(allIssues);
    
    printReport(report);
    
    // Fix issues if requested
    if (execute) {
      await fixIssues(allIssues, true);
    } else {
      console.log('\n💡 To apply fixes, run: npm run audit-seo -- --execute');
    }
    
    // Exit with error code if critical issues found
    if (report.errors > 0) {
      process.exit(1);
    }
  } catch (error: any) {
    console.error('❌ Error during SEO audit:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  main();
}

export { main as auditSEO };
