/**
 * Script to generate AI images for existing recipes that use placeholder images
 * 
 * Usage:
 *   npm run generate-images-for-existing
 * 
 * This script will:
 * 1. Read all recipes from originalRecipesData.ts
 * 2. Check if they use the placeholder image
 * 3. Generate new images using Replicate
 * 4. Update the file with the new image URLs
 */

import 'dotenv/config';
import Replicate from 'replicate';
import * as fs from 'fs';
import * as path from 'path';
import { Recipe } from '../types/recipe';
import * as https from 'https';
import * as http from 'http';

const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';

function getReplicateClient() {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error('REPLICATE_API_TOKEN is not configured. Set it in your .env file.');
  }
  return new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });
}

/**
 * Generate an AI image for a recipe using Replicate with retry logic for rate limits
 * Uses FLUX Schnell for fast and cost-effective food photography ($3 per 1000 images)
 */
async function generateRecipeImage(recipeTitle: string, description: string, retryCount: number = 0): Promise<string> {
  const maxRetries = 5;
  const baseDelay = 10000; // 10 seconds base delay (6 requests per minute = 10 seconds between requests)
  
  try {
    const replicate = getReplicateClient();
    
    // Create a detailed prompt for food photography
    const imagePrompt = `Professional food photography of ${recipeTitle}, ${description}, vegan recipe, high quality, appetizing, well-lit, food styling, shallow depth of field, restaurant quality, food blog style, natural lighting, vibrant colors, on a clean background, professional photography`;

    console.log(`   🖼️  Generating image for "${recipeTitle}"...`);

    // Use FLUX Schnell - fastest and most cost-effective ($0.003 per image = $3 per 1000 images)
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: imagePrompt,
          aspect_ratio: "16:9", // Good for recipe hero images
          output_format: "webp", // Smaller file size
          output_quality: 90,
        }
      }
    );

    // Handle different output formats from Replicate
    let imageUrl: string;
    
    // Check if output is a ReadableStream
    if (output && typeof output === 'object' && 'getReader' in output) {
      // It's a ReadableStream - convert to buffer
      const buffer = await streamToBuffer(output as ReadableStream);
      imageUrl = await saveBufferImage(buffer, recipeTitle);
    } else if (typeof output === 'string') {
      // Could be a URL or base64 data
      if (output.startsWith('http')) {
        imageUrl = await downloadAndSaveImage(output, recipeTitle);
      } else if (output.startsWith('data:')) {
        // Base64 data URL - save it to a file
        imageUrl = await saveBase64Image(output, recipeTitle);
      } else {
        throw new Error(`Unexpected string format: ${output.substring(0, 50)}...`);
      }
    } else if (Buffer.isBuffer(output)) {
      // Binary image data - save it to a file
      imageUrl = await saveBufferImage(output, recipeTitle);
    } else if (Array.isArray(output) && output.length > 0) {
      const firstOutput = output[0];
      if (firstOutput && typeof firstOutput === 'object' && 'getReader' in firstOutput) {
        // ReadableStream in array
        const buffer = await streamToBuffer(firstOutput as ReadableStream);
        imageUrl = await saveBufferImage(buffer, recipeTitle);
      } else if (typeof firstOutput === 'string') {
        if (firstOutput.startsWith('http')) {
          imageUrl = await downloadAndSaveImage(firstOutput, recipeTitle);
        } else if (firstOutput.startsWith('data:')) {
          imageUrl = await saveBase64Image(firstOutput, recipeTitle);
        } else {
          throw new Error(`Unexpected array element format: ${firstOutput.substring(0, 50)}...`);
        }
      } else if (Buffer.isBuffer(firstOutput)) {
        imageUrl = await saveBufferImage(firstOutput, recipeTitle);
      } else {
        imageUrl = firstOutput;
      }
    } else if (output && typeof output === 'object' && 'url' in output) {
      imageUrl = await downloadAndSaveImage((output as any).url, recipeTitle);
    } else {
      console.error('   Debug - Output type:', typeof output);
      console.error('   Debug - Output value:', JSON.stringify(output, null, 2));
      throw new Error(`Unexpected output format from Replicate: ${typeof output}`);
    }

    if (!imageUrl || typeof imageUrl !== 'string') {
      console.error('   Debug - Image URL:', imageUrl);
      throw new Error(`Invalid image URL format from Replicate: ${typeof imageUrl}`);
    }
    
    console.log(`   ✅ Image generated and saved: ${imageUrl.substring(0, 60)}...`);
    
    return imageUrl;
  } catch (error: any) {
    // Check if it's a rate limit error
    if (error.status === 429 || error.message?.includes('rate limit') || error.message?.includes('throttled')) {
      const retryAfter = error.retry_after || error.retryAfter || 10; // Default to 10 seconds
      
      if (retryCount < 5) {
        const delay = retryAfter * 1000 + (retryCount * 2000); // Add extra delay for each retry
        console.log(`   ⚠️  Rate limited. Waiting ${delay / 1000} seconds before retry ${retryCount + 1}/5...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return generateRecipeImage(recipeTitle, description, retryCount + 1);
      } else {
        throw new Error(`Rate limit exceeded after 5 retries. Please wait and try again later.`);
      }
    }
    
    console.error(`   ⚠️  Failed to generate image: ${error.message}`);
    throw error;
  }
}

function escapeString(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

/**
 * Convert a ReadableStream to a Buffer
 */
async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
      }
    }
  } finally {
    reader.releaseLock();
  }
  
  // Combine all chunks into a single buffer
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  
  return Buffer.from(result);
}

/**
 * Save a base64 data URL image to a file
 */
async function saveBase64Image(dataUrl: string, recipeTitle: string): Promise<string> {
  const matches = dataUrl.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!matches) {
    throw new Error('Invalid base64 data URL format');
  }
  
  const [, format, base64Data] = matches;
  const buffer = Buffer.from(base64Data, 'base64');
  return saveBufferImage(buffer, recipeTitle, format);
}

/**
 * Save a buffer image to a file
 */
async function saveBufferImage(buffer: Buffer, recipeTitle: string, format: string = 'webp'): Promise<string> {
  const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Generate a safe filename from recipe title
  const safeTitle = recipeTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 50);
  
  const filename = `${safeTitle}-${Date.now()}.${format}`;
  const filePath = path.join(imagesDir, filename);
  
  fs.writeFileSync(filePath, buffer);
  
  // Return the public URL path
  return `/recipe-images/${filename}`;
}

/**
 * Download an image from a URL and save it locally
 */
async function downloadAndSaveImage(url: string, recipeTitle: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const safeTitle = recipeTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 50);
    
    // Get file extension from URL or default to webp
    const urlPath = new URL(url).pathname;
    const ext = urlPath.match(/\.(\w+)$/)?.[1] || 'webp';
    const filename = `${safeTitle}-${Date.now()}.${ext}`;
    
    const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(`/recipe-images/${filename}`);
      });
      
      file.on('error', (err) => {
        fs.unlinkSync(filePath);
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Process a single recipe file and update images
 */
async function processRecipeFile(filePath: string, fileName: string): Promise<{ successCount: number; failCount: number }> {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${fileName}, skipping...`);
    return { successCount: 0, failCount: 0 };
  }

  let fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Extract recipes that need images by finding all instances of image: PLACEHOLDER_IMAGE
  const recipesToUpdate: Array<{ id: string; title: string; description: string; placeholderIndex: number; placeholderLength: number; needsGeneration: boolean; existingImagePath: string | null }> = [];
  
  // Placeholder SVG base64 (the default placeholder image)
  const PLACEHOLDER_SVG_BASE64 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';
  
  // Find all image fields in recipes - check both placeholder and existing images
  // Match: image: '...' or image: "..." or image: PLACEHOLDER_IMAGE
  // Need to handle multi-line values for base64 strings
  const imagePattern = /image:\s*((?:'[^']*'|"[^"]*"|PLACEHOLDER_IMAGE|[^,\n}]+))/g;
  let match;
  const matches: RegExpMatchArray[] = [];
  
  while ((match = imagePattern.exec(fileContent)) !== null) {
    matches.push(match);
  }
  
  console.log(`   Found ${matches.length} image field(s) in ${fileName}`);
  
  // For each match, extract the recipe info and check if image exists
  for (const match of matches) {
    const matchIndex = match.index!;
    const fullMatch = match[0]; // e.g., "image: PLACEHOLDER_IMAGE" or "image: 'data:image/...'"
    let imageValue = match[1].trim(); // The value after "image:"
    
    // Keep original with quotes for replacement
    const originalImageValue = imageValue;
    // Remove quotes if present for comparison
    const unquotedValue = imageValue.replace(/^['"]|['"]$/g, '');
    
    // Check if it's a placeholder (PLACEHOLDER_IMAGE constant or the base64 SVG)
    const isPlaceholderConstant = unquotedValue.includes('PLACEHOLDER_IMAGE');
    // Check for the base64 SVG placeholder - it starts with this prefix
    const isPlaceholderSVG = unquotedValue.startsWith('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29u') ||
                             unquotedValue === PLACEHOLDER_SVG_BASE64 ||
                             unquotedValue.includes('Image Coming Soon');
    const isRecipeImagePath = unquotedValue.includes('/recipe-images/');
    
    // Skip if it's not a placeholder and not a recipe-images path
    if (!isPlaceholderConstant && !isPlaceholderSVG && !isRecipeImagePath) {
      continue;
    }
    
    // If it's a placeholder, check if file already exists first
    // If it's a recipe-images path, check if file exists
    let needsUpdate = false;
    let needsGeneration = false;
    let placeholderIndex = 0;
    let placeholderLength = 0;
    let existingImagePath: string | null = null;
    
    if (isPlaceholderConstant || isPlaceholderSVG) {
      // It's a placeholder - first check if an image file already exists
      // Find where the placeholder value starts in the full match
      if (isPlaceholderConstant) {
        // PLACEHOLDER_IMAGE constant
        const placeholderStartInMatch = fullMatch.indexOf('PLACEHOLDER_IMAGE');
        if (placeholderStartInMatch === -1) {
          placeholderIndex = matchIndex + fullMatch.indexOf(unquotedValue) + unquotedValue.indexOf('PLACEHOLDER_IMAGE');
        } else {
          placeholderIndex = matchIndex + placeholderStartInMatch;
        }
        placeholderLength = 'PLACEHOLDER_IMAGE'.length;
      } else {
        // Base64 SVG placeholder - replace the entire quoted value (including quotes)
        // The originalImageValue includes quotes, so use that for replacement
        const imageValueStartInMatch = fullMatch.indexOf(originalImageValue);
        if (imageValueStartInMatch !== -1) {
          placeholderIndex = matchIndex + imageValueStartInMatch;
          placeholderLength = originalImageValue.length; // Includes quotes
        } else {
          // Fallback: find the value and include quotes
          const valueStart = fullMatch.indexOf(unquotedValue);
          if (valueStart > 0 && (fullMatch[valueStart - 1] === "'" || fullMatch[valueStart - 1] === '"')) {
            // Find the opening quote
            let quoteStart = valueStart - 1;
            let quoteEnd = valueStart + unquotedValue.length;
            // Check if there's a closing quote
            if (quoteEnd < fullMatch.length && (fullMatch[quoteEnd] === "'" || fullMatch[quoteEnd] === '"')) {
              quoteEnd++;
            }
            placeholderIndex = matchIndex + quoteStart;
            placeholderLength = quoteEnd - quoteStart;
          } else {
            placeholderIndex = matchIndex + fullMatch.indexOf(unquotedValue);
            placeholderLength = unquotedValue.length;
          }
        }
      }
      
      // We'll check for existing files later when we have the recipe title
      needsUpdate = true;
    } else if (isRecipeImagePath) {
      // It's an existing path - check if file exists
      // Extract the filename from the path (remove quotes and /recipe-images/)
      const imagePath = unquotedValue.replace(/^\/recipe-images\//, '');
      const imageFilePath = path.join(process.cwd(), 'public', 'recipe-images', imagePath);
      
      if (!fs.existsSync(imageFilePath)) {
        // File doesn't exist - needs regeneration
        needsGeneration = true;
        // Find the start of the image value (after "image: ")
        // Use originalImageValue to include quotes
        const imageValueStart = fullMatch.indexOf(originalImageValue);
        if (imageValueStart !== -1) {
          placeholderIndex = matchIndex + imageValueStart;
          placeholderLength = originalImageValue.length;
        } else {
          placeholderIndex = matchIndex + fullMatch.indexOf(unquotedValue);
          placeholderLength = unquotedValue.length;
        }
      } else {
        // File exists - skip this recipe
        continue;
      }
    }
    
    if (!needsUpdate && !needsGeneration) continue;
    
    // Find the recipe object containing this image by looking backwards
    // Find the nearest recipe start (look for pattern: id: 'X',)
    const beforeMatch = fileContent.substring(0, matchIndex);
    const recipeStartMatch = beforeMatch.match(/\{\s*id:\s*'([^']+)'/g);
    
    if (!recipeStartMatch || recipeStartMatch.length === 0) continue;
    
    // Get the last recipe start before this match
    const lastRecipeStart = recipeStartMatch[recipeStartMatch.length - 1];
    const recipeStartIndex = beforeMatch.lastIndexOf(lastRecipeStart);
    
    // Extract recipe info from the section between recipe start and image
    const recipeSection = fileContent.substring(recipeStartIndex, matchIndex);
    const idMatch = recipeSection.match(/id:\s*'([^']+)'/);
    const titleMatch = recipeSection.match(/title:\s*'([^']+)'/);
    const descMatch = recipeSection.match(/description:\s*'([^']+)'/);
    
    if (idMatch && titleMatch && descMatch) {
      // If it's a placeholder, check if an image file already exists
      if (needsUpdate && !needsGeneration) {
        const recipeTitle = titleMatch[1];
        const safeTitle = recipeTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
          .substring(0, 50);
        
        // Check if any image file exists that matches this recipe title
        const imagesDir = path.join(process.cwd(), 'public', 'recipe-images');
        if (fs.existsSync(imagesDir)) {
          const files = fs.readdirSync(imagesDir);
          const matchingFile = files.find(file => 
            file.startsWith(safeTitle) && /\.(webp|jpg|jpeg|png)$/i.test(file)
          );
          
          if (matchingFile) {
            // Found existing file - just update the path, don't generate
            existingImagePath = `/recipe-images/${matchingFile}`;
            needsGeneration = false;
          } else {
            // No existing file - needs generation
            needsGeneration = true;
          }
        } else {
          // Directory doesn't exist - needs generation
          needsGeneration = true;
        }
      }
      
      recipesToUpdate.push({
        id: idMatch[1],
        title: titleMatch[1],
        description: descMatch[1],
        placeholderIndex: placeholderIndex,
        placeholderLength: placeholderLength,
        needsGeneration: needsGeneration,
        existingImagePath: existingImagePath,
      });
    }
  }

  if (recipesToUpdate.length === 0) {
    return { successCount: 0, failCount: 0 };
  }

  console.log(`\n🖼️  Found ${recipesToUpdate.length} recipe(s) that need images (missing or placeholder)`);
  console.log('📝 Generating images...\n');

  let successCount = 0;
  let failCount = 0;
  const replacements: Array<{ index: number; length: number; replacement: string }> = [];

  // Process each recipe - generate or use existing image
  for (let i = 0; i < recipesToUpdate.length; i++) {
    const recipe = recipesToUpdate[i];
    console.log(`[${i + 1}/${recipesToUpdate.length}] Processing: "${recipe.title}"`);

    try {
      let imageUrl: string;
      
      if (recipe.existingImagePath) {
        // Use existing image file - just update the path
        imageUrl = recipe.existingImagePath;
        console.log(`   ✅ Found existing image: ${imageUrl}`);
      } else if (recipe.needsGeneration) {
        // Generate new image
        imageUrl = await generateRecipeImage(recipe.title, recipe.description);
      } else {
        // Should not happen, but skip if neither
        continue;
      }
      
      // Store the replacement (we'll apply in reverse order to maintain indices)
      // Replace just PLACEHOLDER_IMAGE with the actual image path
      console.log(`   📝 Storing replacement for "${recipe.title}":`);
      console.log(`      Index: ${recipe.placeholderIndex}, Length: ${recipe.placeholderLength}`);
      console.log(`      Image URL: ${imageUrl}`);
      
      // Verify the text at that position matches what we expect
      const textAtPosition = fileContent.substring(recipe.placeholderIndex, recipe.placeholderIndex + recipe.placeholderLength);
      console.log(`      Text at position: "${textAtPosition.substring(0, 50)}${textAtPosition.length > 50 ? '...' : ''}"`);
      
      // Determine replacement format - if it's a quoted value, replace the whole quote, otherwise just the value
      let replacementText: string;
      const beforePlaceholder = fileContent.substring(Math.max(0, recipe.placeholderIndex - 5), recipe.placeholderIndex);
      const afterPlaceholder = fileContent.substring(recipe.placeholderIndex + recipe.placeholderLength, recipe.placeholderIndex + recipe.placeholderLength + 5);
      
      // Check if it's already quoted
      if (beforePlaceholder.includes("'") || beforePlaceholder.includes('"')) {
        // Already quoted - just replace the content
        replacementText = escapeString(imageUrl);
      } else {
        // Not quoted - add quotes
        replacementText = `'${escapeString(imageUrl)}'`;
      }
      
      replacements.push({
        index: recipe.placeholderIndex,
        length: recipe.placeholderLength,
        replacement: replacementText,
      });
      
      successCount++;
      
      // Delay to respect rate limits (only for generation)
      // With <$5 credit: 6 requests per minute = 10 seconds between requests
      if (recipe.needsGeneration && i < recipesToUpdate.length - 1) {
        const delay = 11000; // 11 seconds to be safe (slightly more than 10 seconds)
        console.log(`   ⏳ Waiting ${delay / 1000} seconds to respect rate limits...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error: any) {
      console.error(`   ❌ Failed to process image: ${error.message}`);
      failCount++;
    }
  }

  // Apply replacements in reverse order to maintain correct indices
  if (replacements.length > 0) {
    replacements.sort((a, b) => b.index - a.index); // Sort descending by index
    
    console.log(`\n📝 Applying ${replacements.length} replacement(s) to recipe file...`);
    
    for (const replacement of replacements) {
      // Debug: show what we're replacing
      const beforeText = fileContent.substring(Math.max(0, replacement.index - 20), replacement.index + replacement.length + 20);
      console.log(`   Replacing at index ${replacement.index}: "${beforeText.substring(0, 40)}..." with "${replacement.replacement}"`);
      
      fileContent = fileContent.substring(0, replacement.index) + 
                    replacement.replacement + 
                    fileContent.substring(replacement.index + replacement.length);
    }
    
    // Verify replacements were applied
    const remainingPlaceholders = (fileContent.match(/PLACEHOLDER_IMAGE/g) || []).length;
    console.log(`   ✅ Replacements applied. Remaining placeholders: ${remainingPlaceholders}`);
  }

  // Write the updated file
  if (successCount > 0) {
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`\n✅ Successfully updated ${successCount} recipe(s) with new images in ${fileName}`);
    if (failCount > 0) {
      console.log(`⚠️  Failed to generate images for ${failCount} recipe(s)`);
    }
  }

  return { successCount, failCount };
}

async function main() {
  if (!process.env.REPLICATE_API_TOKEN) {
    console.error('❌ Error: REPLICATE_API_TOKEN environment variable is not set');
    console.log('\n💡 Get your Replicate API token from: https://replicate.com/account/api-tokens');
    console.log('   Add it to your .env file:');
    console.log('   REPLICATE_API_TOKEN=your_replicate_token_here');
    process.exit(1);
  }

  // List of all recipe files to process
  const recipeFiles = [
    'originalRecipesData.ts',
    'baking.ts',
    'savory.ts',
    'ethnic.ts',
    'breakfast.ts',
    'lunch.ts',
    'dinner.ts',
    'dessert.ts',
    'snack.ts',
    'beverage.ts',
  ];

  const recipesDir = path.join(process.cwd(), 'data', 'recipes');
  
  console.log('\n🖼️  Image Generator for All Recipes');
  console.log('====================================\n');
  console.log(`📂 Processing ${recipeFiles.length} recipe file(s)...\n`);

  let totalSuccess = 0;
  let totalFail = 0;

  // Process each recipe file
  for (const fileName of recipeFiles) {
    const filePath = path.join(recipesDir, fileName);
    console.log(`\n📄 Processing: ${fileName}`);
    console.log('─'.repeat(50));
    
    const { successCount, failCount } = await processRecipeFile(filePath, fileName);
    totalSuccess += successCount;
    totalFail += failCount;
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary');
  console.log('='.repeat(50));
  console.log(`✅ Successfully processed: ${totalSuccess} recipe(s)`);
  if (totalFail > 0) {
    console.log(`❌ Failed: ${totalFail} recipe(s)`);
  }
  
  if (totalSuccess > 0) {
    console.log('\n⚠️  Next step: Run "npm run build" to rebuild the site with new images\n');
  } else if (totalFail === 0) {
    console.log('\n✅ All recipes already have images! No updates needed.\n');
  } else {
    console.log('\n❌ No images were generated. Please check the errors above.\n');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

