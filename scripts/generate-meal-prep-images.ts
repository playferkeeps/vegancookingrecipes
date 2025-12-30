/**
 * Generate images for the Meal Prep Guide using OpenAI DALL-E
 * 
 * Usage:
 *   npm run generate-meal-prep-images
 * 
 * This script generates images for the meal prep guide page.
 */

import 'dotenv/config';
import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured. Set it as an environment variable.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

/**
 * Download image from URL and save to public directory
 */
async function downloadAndSaveImage(url: string, filename: string): Promise<string> {
  const publicDir = path.join(process.cwd(), 'public', 'img', 'meal-prep');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const filePath = path.join(publicDir, filename);
  
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        const relativePath = `/img/meal-prep/${filename}`;
        console.log(`   ✅ Saved: ${relativePath}`);
        resolve(relativePath);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

/**
 * Generate image using OpenAI DALL-E
 */
async function generateImage(prompt: string, filename: string): Promise<string> {
  const openai = getOpenAIClient();
  
  console.log(`   🖼️  Generating: ${filename}...`);
  console.log(`   📝 Prompt: ${prompt.substring(0, 100)}...`);
  
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      quality: 'standard',
      response_format: 'url',
    });
    
    const imageUrl = response.data[0]?.url;
    
    if (!imageUrl) {
      throw new Error('No image URL returned from OpenAI');
    }
    
    // Download and save the image
    const savedPath = await downloadAndSaveImage(imageUrl, filename);
    return savedPath;
  } catch (error: any) {
    console.error(`   ❌ Error generating image: ${error.message}`);
    throw error;
  }
}

async function main() {
  console.log('\n🍳 Meal Prep Guide Image Generator');
  console.log('===================================\n');
  
  const images = [
    {
      prompt: 'A clean, organized kitchen counter with meal prep containers, fresh vegetables, and a meal prep guide. Bright, inviting, modern kitchen setting. Professional food photography style, high quality, well-lit.',
      filename: 'meal-prep-hero.webp',
    },
    {
      prompt: 'A handwritten meal prep plan on paper with colorful vegetables and ingredients around it. Clean, simple, inspiring. Professional food photography style.',
      filename: 'meal-prep-planning.webp',
    },
    {
      prompt: 'A shopping cart filled with fresh vegetables, grains, and plant-based ingredients. Bright, colorful, healthy. Professional food photography style.',
      filename: 'meal-prep-shopping.webp',
    },
    {
      prompt: 'A kitchen counter with prepped ingredients - chopped vegetables, cooked grains, and containers ready for meal prep. Clean, organized, appetizing. Professional food photography style.',
      filename: 'meal-prep-prepping.webp',
    },
    {
      prompt: 'Beautiful glass meal prep containers filled with colorful vegan meals, arranged neatly. Professional food photography style, appetizing, well-lit.',
      filename: 'meal-prep-containers.webp',
    },
    {
      prompt: 'A refrigerator organized with labeled meal prep containers. Clean, organized, inspiring. Professional food photography style.',
      filename: 'meal-prep-storage.webp',
    },
  ];
  
  console.log(`📸 Generating ${images.length} images for the meal prep guide...\n`);
  
  const results: Array<{ filename: string; path: string }> = [];
  
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    console.log(`[${i + 1}/${images.length}] ${image.filename}`);
    
    try {
      // Add delay between requests to avoid rate limits
      if (i > 0) {
        console.log('   ⏳ Waiting 5 seconds before next request...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
      
      const path = await generateImage(image.prompt, image.filename);
      results.push({ filename: image.filename, path });
    } catch (error: any) {
      console.error(`   ❌ Failed to generate ${image.filename}: ${error.message}`);
    }
    
    console.log(''); // Empty line for readability
  }
  
  console.log('\n✨ Image generation complete!');
  console.log(`✅ Successfully generated: ${results.length}/${images.length} images`);
  console.log('\n📁 Images saved to: public/img/meal-prep/');
  console.log('\n💡 You can now use these images in the meal prep guide page.');
}

main()
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });

