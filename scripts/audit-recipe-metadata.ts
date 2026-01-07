#!/usr/bin/env ts-node

/**
 * Audit script to find and fix metadata inconsistencies in recipes
 * 
 * Checks for:
 * - Beverages with non-zero cook time
 * - Baking/dessert recipes tagged as "savory"
 * - Mismatched categories (e.g., baking ingredients but not in baking category)
 * - Unrealistic cook times
 * 
 * Usage:
 *   npm run audit-metadata [--execute] [--recipe-id <id>] [--recipe-slug <slug>]
 */

import 'dotenv/config';
import { getPrismaClient } from '../lib/prisma';

interface MetadataIssue {
  recipeId: string;
  slug: string;
  title: string;
  issue: string;
  severity: 'error' | 'warning';
  suggestedFix?: string;
}

async function auditRecipeMetadata(
  recipeId?: string,
  recipeSlug?: string,
  execute: boolean = false
): Promise<void> {
  const prisma = getPrismaClient();
  
  if (!prisma) {
    console.error('❌ Prisma Client is not available. Make sure DATABASE_URL is set in your .env file.');
    process.exit(1);
  }
  
  try {
    // Find recipes to audit
    let recipes;
    if (recipeId) {
      recipes = await prisma.recipe.findMany({
        where: { id: recipeId },
        include: {
          categories: true,
          ingredients: true,
        },
      });
    } else if (recipeSlug) {
      recipes = await prisma.recipe.findMany({
        where: { slug: recipeSlug },
        include: {
          categories: true,
          ingredients: true,
        },
      });
    } else {
      recipes = await prisma.recipe.findMany({
        include: {
          categories: true,
          ingredients: true,
          instructions: true,
        },
      });
    }

    console.log(`\n🔍 Auditing ${recipes.length} recipe(s) for metadata issues...\n`);

    const issues: MetadataIssue[] = [];

    for (const recipe of recipes) {
      const categories = recipe.categories.map(c => c.category.toLowerCase());
      const ingredientNames = recipe.ingredients.map(ing => ing.name.toLowerCase()).join(' ');
      
      // Issue 1: Beverages with non-zero cook time
      if (categories.includes('beverage') && recipe.cookTime > 0) {
        issues.push({
          recipeId: recipe.id,
          slug: recipe.slug,
          title: recipe.title,
          issue: `Beverage has cookTime=${recipe.cookTime} (should be 0)`,
          severity: 'error',
          suggestedFix: 'Set cookTime to 0',
        });
      }

      // Issue 1b: Cold desserts/no-cook dishes with non-zero cook time
      const titleLower = recipe.title.toLowerCase();
      const descriptionLower = (recipe.description || '').toLowerCase();
      const prologueLower = (recipe.prologue || '').toLowerCase();
      const allText = `${titleLower} ${descriptionLower} ${prologueLower}`;
      
      // Cold dessert keywords (no cooking required)
      const coldDessertKeywords = [
        'ice cream', 'gelato', 'sorbet', 'pudding', 'mousse', 'tiramisu', 
        'cheesecake', 'flan', 'panna cotta', 'parfait', 'trifle', 'no-bake',
        'raw', 'chilled', 'cold', 'frozen dessert', 'frozen treat'
      ];
      
      // No-cook dish keywords
      const noCookKeywords = [
        'salad', 'salsa', 'guacamole', 'hummus', 'dip', 'spread', 
        'smoothie', 'juice', 'raw', 'no-cook', 'uncooked'
      ];
      
      const isColdDessert = categories.includes('dessert') && 
        coldDessertKeywords.some(keyword => allText.includes(keyword));
      const isNoCookDish = noCookKeywords.some(keyword => 
        titleLower.includes(keyword) || descriptionLower.includes(keyword)
      );
      
      if ((isColdDessert || isNoCookDish) && recipe.cookTime > 0) {
        issues.push({
          recipeId: recipe.id,
          slug: recipe.slug,
          title: recipe.title,
          issue: `Cold/no-cook dish has cookTime=${recipe.cookTime} (should be 0)`,
          severity: 'error',
          suggestedFix: 'Set cookTime to 0',
        });
      }

      // Issue 2: Baking/dessert tagged as savory
      if ((categories.includes('baking') || categories.includes('dessert')) && categories.includes('savory')) {
        issues.push({
          recipeId: recipe.id,
          slug: recipe.slug,
          title: recipe.title,
          issue: 'Baking/dessert recipe is tagged as "savory"',
          severity: 'error',
          suggestedFix: 'Remove "savory" category',
        });
      }

      // Issue 3: Baking ingredients but not in baking/dessert category
      const bakingKeywords = ['flour', 'sugar', 'baking powder', 'baking soda', 'yeast', 'vanilla extract'];
      const hasBakingIngredients = bakingKeywords.some(keyword => ingredientNames.includes(keyword));
      if (hasBakingIngredients && !categories.includes('baking') && !categories.includes('dessert')) {
        issues.push({
          recipeId: recipe.id,
          slug: recipe.slug,
          title: recipe.title,
          issue: 'Has baking ingredients but not in baking/dessert category',
          severity: 'warning',
          suggestedFix: 'Consider adding "baking" or "dessert" category',
        });
      }

      // Issue 4: Total time doesn't match prep + cook
      const expectedTotal = recipe.prepTime + recipe.cookTime;
      if (recipe.totalTime !== expectedTotal) {
        issues.push({
          recipeId: recipe.id,
          slug: recipe.slug,
          title: recipe.title,
          issue: `totalTime=${recipe.totalTime} but prepTime + cookTime = ${expectedTotal}`,
          severity: 'error',
          suggestedFix: `Set totalTime to ${expectedTotal}`,
        });
      }

      // Issue 5: Unrealistic cook times (beverages should be 0, most recipes shouldn't be > 4 hours)
      if (!categories.includes('beverage') && recipe.cookTime > 240) {
        issues.push({
          recipeId: recipe.id,
          slug: recipe.slug,
          title: recipe.title,
          issue: `Cook time is ${recipe.cookTime} minutes (${Math.round(recipe.cookTime / 60)} hours) - seems unrealistic`,
          severity: 'warning',
          suggestedFix: 'Review and correct cook time',
        });
      }
    }

    // Report issues
    if (issues.length === 0) {
      console.log('✅ No metadata issues found!\n');
      return;
    }

    console.log(`\n📊 Found ${issues.length} issue(s):\n`);
    
    const errors = issues.filter(i => i.severity === 'error');
    const warnings = issues.filter(i => i.severity === 'warning');

    if (errors.length > 0) {
      console.log(`❌ ${errors.length} Error(s):\n`);
      errors.forEach((issue, idx) => {
        console.log(`  ${idx + 1}. ${issue.title} (${issue.slug})`);
        console.log(`     Issue: ${issue.issue}`);
        if (issue.suggestedFix) {
          console.log(`     Fix: ${issue.suggestedFix}`);
        }
        console.log('');
      });
    }

    if (warnings.length > 0) {
      console.log(`⚠️  ${warnings.length} Warning(s):\n`);
      warnings.forEach((issue, idx) => {
        console.log(`  ${idx + 1}. ${issue.title} (${issue.slug})`);
        console.log(`     Issue: ${issue.issue}`);
        if (issue.suggestedFix) {
          console.log(`     Fix: ${issue.suggestedFix}`);
        }
        console.log('');
      });
    }

    // Apply fixes if --execute flag is set
    if (execute) {
      console.log('\n🔧 Applying fixes...\n');
      
      for (const issue of errors) {
        const recipe = recipes.find(r => r.id === issue.recipeId);
        if (!recipe) continue;

        try {
          if (issue.issue.includes('cookTime') && issue.issue.includes('should be 0')) {
            // Fix: Set cookTime to 0 for beverages, cold desserts, and no-cook dishes
            await prisma.recipe.update({
              where: { id: issue.recipeId },
              data: {
                cookTime: 0,
                totalTime: recipe.prepTime,
              },
            });
            console.log(`  ✅ Fixed: ${issue.title} - Set cookTime to 0`);
          } else if (issue.issue.includes('savory')) {
            // Fix: Remove savory category
            const savoryCategory = recipe.categories.find(c => c.category.toLowerCase() === 'savory');
            if (savoryCategory) {
              await prisma.recipeCategory.delete({
                where: { id: savoryCategory.id },
              });
              console.log(`  ✅ Fixed: ${issue.title} - Removed "savory" category`);
            }
          } else if (issue.issue.includes('totalTime')) {
            // Fix: Set totalTime to prepTime + cookTime
            const expectedTotal = recipe.prepTime + recipe.cookTime;
            await prisma.recipe.update({
              where: { id: issue.recipeId },
              data: { totalTime: expectedTotal },
            });
            console.log(`  ✅ Fixed: ${issue.title} - Set totalTime to ${expectedTotal}`);
          }
        } catch (error: any) {
          console.error(`  ❌ Failed to fix ${issue.title}: ${error.message}`);
        }
      }

      console.log('\n✅ Fixes applied!\n');
    } else {
      console.log('\n💡 Run with --execute to automatically fix errors.\n');
    }

  } catch (error: any) {
    console.error('Error auditing recipes:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
let execute = false;
let recipeId: string | undefined;
let recipeSlug: string | undefined;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--execute') {
    execute = true;
  } else if (args[i] === '--recipe-id' && i + 1 < args.length) {
    recipeId = args[i + 1];
    i++;
  } else if (args[i] === '--recipe-slug' && i + 1 < args.length) {
    recipeSlug = args[i + 1];
    i++;
  }
}

auditRecipeMetadata(recipeId, recipeSlug, execute)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
