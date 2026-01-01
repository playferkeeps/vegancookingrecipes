/**
 * Script to generate recipes from a text file with comma-delimited titles
 * 
 * Usage:
 *   npm run generate-from-file -- recipes.txt
 *   npm run generate-from-file -- recipes.txt --category baking
 *   npm run generate-from-file -- recipes.txt --supabase
 * 
 * The text file should contain recipe titles separated by commas.
 * Example: "Vegan Pizza, Vegan Burgers, Vegan Tacos"
 * Whitespace around commas is automatically trimmed.
 */

import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { commitAndPushRecipeImages } from './git-utils';

interface Options {
  filePath: string;
  category?: string;
  useSupabase?: boolean;
  ingredients?: string;
  allergenFriendly?: boolean;
  keywords?: string;
  theme?: string;
  gitPush?: boolean;
}

function parseArgs(): Options {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('❌ Error: Please provide a file path');
    console.error('Usage: npm run generate-from-file -- <file-path> [options]');
    console.error('\nOptions:');
    console.error('  --category <category>     Recipe category (baking, dinner, etc.)');
    console.error('  --supabase                Save to Supabase instead of files');
    console.error('  --ingredients <list>       Comma-delimited ingredients to include');
    console.error('  --allergen-friendly        Make recipe allergen-friendly');
    console.error('  --keywords <list>          Comma-delimited keywords for context');
    console.error('  --theme <theme>           Recipe theme (e.g., Mediterranean, Asian)');
    console.error('  --git-push                 Commit and push recipe images to git at the end');
    process.exit(1);
  }

  const filePath = args[0];
  const options: Options = {
    filePath,
  };

  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--category' && args[i + 1]) {
      options.category = args[i + 1];
      i++;
    } else if (args[i] === '--supabase') {
      options.useSupabase = true;
    } else if (args[i] === '--ingredients' && args[i + 1]) {
      options.ingredients = args[i + 1];
      i++;
    } else if (args[i] === '--allergen-friendly') {
      options.allergenFriendly = true;
    } else if (args[i] === '--keywords' && args[i + 1]) {
      options.keywords = args[i + 1];
      i++;
    } else if (args[i] === '--theme' && args[i + 1]) {
      options.theme = args[i + 1];
      i++;
    } else if (args[i] === '--git-push') {
      options.gitPush = true;
    }
  }

  return options;
}

function readTitlesFromFile(filePath: string): string[] {
  // Resolve path relative to current working directory
  const resolvedPath = path.isAbsolute(filePath) 
    ? filePath 
    : path.join(process.cwd(), filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  const content = fs.readFileSync(resolvedPath, 'utf-8');
  // Split by comma and trim whitespace from each title
  const titles = content
    .split(',')
    .map(title => title.trim())
    .filter(title => title.length > 0); // Remove empty titles

  if (titles.length === 0) {
    throw new Error(`No valid titles found in file: ${resolvedPath}`);
  }

  return titles;
}

function buildGenerateCommand(title: string, options: Options): string {
  let command = 'npm run generate-recipes -- --count 1 --title "' + title.replace(/"/g, '\\"') + '"';
  
  if (options.category) {
    command += ` --category ${options.category}`;
  }
  
  if (options.useSupabase) {
    command += ' --supabase';
  }
  
  if (options.ingredients) {
    command += ` --ingredients "${options.ingredients.replace(/"/g, '\\"')}"`;
  }
  
  if (options.allergenFriendly) {
    command += ' --allergen-friendly';
  }
  
  if (options.keywords) {
    command += ` --keywords "${options.keywords.replace(/"/g, '\\"')}"`;
  }
  
  if (options.theme) {
    command += ` --theme "${options.theme.replace(/"/g, '\\"')}"`;
  }
  
  return command;
}

async function generateRecipeForTitle(title: string, options: Options, index: number, total: number): Promise<boolean> {
  console.log(`\n[${index + 1}/${total}] Generating recipe: "${title}"`);
  console.log('─'.repeat(60));
  
  try {
    const command = buildGenerateCommand(title, options);
    console.log(`📝 Running: ${command}\n`);
    
    execSync(command, {
      cwd: process.cwd(),
      stdio: 'inherit', // Show output in real-time
      encoding: 'utf-8',
    });
    
    console.log(`\n✅ Successfully generated recipe: "${title}"`);
    return true;
  } catch (error: any) {
    console.error(`\n❌ Failed to generate recipe: "${title}"`);
    if (error.message) {
      console.error(`   Error: ${error.message}`);
    }
    return false;
  }
}

async function main() {
  console.log('📋 Recipe Generator from File');
  console.log('═'.repeat(60));
  
  const options = parseArgs();
  
  // Read titles from file
  console.log(`\n📖 Reading titles from: ${options.filePath}`);
  let titles: string[];
  try {
    titles = readTitlesFromFile(options.filePath);
    console.log(`   ✅ Found ${titles.length} recipe title(s)\n`);
  } catch (error: any) {
    console.error(`❌ Error reading file: ${error.message}`);
    process.exit(1);
  }
  
  // Display options
  console.log('⚙️  Options:');
  if (options.category) {
    console.log(`   Category: ${options.category}`);
  }
  if (options.useSupabase) {
    console.log(`   Save to: Supabase`);
  } else {
    console.log(`   Save to: Files`);
  }
  if (options.ingredients) {
    console.log(`   Ingredients: ${options.ingredients}`);
  }
  if (options.allergenFriendly) {
    console.log(`   Allergen-friendly: Yes`);
  }
  if (options.keywords) {
    console.log(`   Keywords: ${options.keywords}`);
  }
  if (options.theme) {
    console.log(`   Theme: ${options.theme}`);
  }
  if (options.gitPush) {
    console.log(`   Git push: Enabled`);
  }
  console.log('');
  
  // Generate recipes
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const success = await generateRecipeForTitle(title, options, i, titles.length);
    
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Add a small delay between recipes to respect rate limits
    if (i < titles.length - 1) {
      console.log('\n⏳ Waiting 2 seconds before next recipe...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('✨ Recipe generation complete!');
  console.log(`✅ Successfully generated: ${successCount} recipe(s)`);
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount} recipe(s)`);
  }
  console.log('');
  
  // Commit and push recipe images to git (only if flag is set and recipes were successfully generated)
  if (options.gitPush && successCount > 0) {
    try {
      console.log('🔍 Checking for new recipe images...');
      const result = await commitAndPushRecipeImages(successCount);
      
      if (result.success) {
        if (result.filesCommitted > 0) {
          console.log(`   ✅ ${result.message}`);
        } else {
          console.log(`   ℹ️  ${result.message}`);
        }
      } else {
        console.warn(`   ⚠️  ${result.message || result.error}`);
        console.warn('   Recipe images were generated but not committed to git.');
      }
    } catch (error: any) {
      console.warn(`\n⚠️  Warning: Failed to commit/push recipe images: ${error.message}`);
      console.warn('   Recipe images were generated but not committed to git.');
    }
  } else if (successCount > 0 && !options.gitPush) {
    console.log('💡 Tip: Use --git-push flag to automatically commit and push recipe images to git.');
  }
}

// Run if called directly
if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Fatal error:', error.message);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  });
}

export { main as generateRecipesFromFile };

