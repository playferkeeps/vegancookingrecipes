import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

// Path to recipe images directory
const RECIPE_IMAGES_DIR = path.join(process.cwd(), 'public', 'recipe-images');
const PNG_OUTPUT_DIR = path.join(RECIPE_IMAGES_DIR, 'png');

async function convertWebpToPng() {
  try {
    // Check if recipe-images directory exists
    try {
      await fs.access(RECIPE_IMAGES_DIR);
    } catch {
      console.error(`❌ Directory not found: ${RECIPE_IMAGES_DIR}`);
      process.exit(1);
    }

    // Create png output directory if it doesn't exist
    try {
      await fs.mkdir(PNG_OUTPUT_DIR, { recursive: true });
      console.log(`✅ Created output directory: ${PNG_OUTPUT_DIR}`);
    } catch (error) {
      console.error(`❌ Failed to create output directory: ${error}`);
      process.exit(1);
    }

    // Read all files in the recipe-images directory
    const files = await fs.readdir(RECIPE_IMAGES_DIR);
    const webpFiles = files.filter((file) => file.toLowerCase().endsWith('.webp'));

    if (webpFiles.length === 0) {
      console.log('ℹ️  No .webp files found in recipe-images directory');
      return;
    }

    console.log(`📸 Found ${webpFiles.length} .webp file(s) to convert\n`);

    let successCount = 0;
    let errorCount = 0;

    // Convert each webp file to png
    for (const webpFile of webpFiles) {
      const inputPath = path.join(RECIPE_IMAGES_DIR, webpFile);
      const outputFileName = webpFile.replace(/\.webp$/i, '.png');
      const outputPath = path.join(PNG_OUTPUT_DIR, outputFileName);

      try {
        await sharp(inputPath).png().toFile(outputPath);
        console.log(`✅ Converted: ${webpFile} → png/${outputFileName}`);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to convert ${webpFile}: ${error}`);
        errorCount++;
      }
    }

    console.log(`\n📊 Conversion complete!`);
    console.log(`   ✅ Successful: ${successCount}`);
    if (errorCount > 0) {
      console.log(`   ❌ Failed: ${errorCount}`);
    }
    console.log(`   📁 Output directory: ${PNG_OUTPUT_DIR}`);
  } catch (error) {
    console.error('❌ An error occurred:', error);
    process.exit(1);
  }
}

// Run the conversion
convertWebpToPng();
