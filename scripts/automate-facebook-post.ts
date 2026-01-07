/**
 * Script to automate Facebook Business Composer posting
 * Opens Chrome, navigates to vegancooking.recipes, selects a random recipe,
 * then posts it to Facebook Business Composer with image and hashtags
 * 
 * Usage:
 *   npm run automate-facebook-post
 */

import 'dotenv/config';
import puppeteer, { Browser, Page } from 'puppeteer';
import * as path from 'path';
import * as fs from 'fs';
import { getAllRecipesAsync } from '../data/recipes/helpers';
import { Recipe, RecipeCategory } from '../types/recipe';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vegancooking.recipes';
const FACEBOOK_COMPOSER_URL = 'https://business.facebook.com/latest/composer/?asset_id=887687477768953&business_id=1550392349534195';
const FACEBOOK_LOGIN_URL = 'https://www.facebook.com/login';
const RECIPE_IMAGES_DIR = path.join(process.cwd(), 'public', 'recipe-images');
const PNG_IMAGES_DIR = path.join(RECIPE_IMAGES_DIR, 'png');

// Facebook login credentials from environment
const FACEBOOK_EMAIL = process.env.FACEBOOK_EMAIL || '';
const FACEBOOK_PASSWORD = process.env.FACEBOOK_PASSWORD || '';

/**
 * Helper function to wait/delay (replacement for waitForTimeout)
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Get random recipe from database
 */
async function getRandomRecipe(): Promise<Recipe> {
  const recipes = await getAllRecipesAsync();
  if (recipes.length === 0) {
    throw new Error('No recipes found in database');
  }
  
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

/**
 * Find image file for recipe
 * Searches in PNG folder first, then falls back to webp
 */
function findRecipeImage(recipeTitle: string): string | null {
  // Normalize recipe title to match filename format
  const normalizedTitle = recipeTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  // Try PNG folder first
  if (fs.existsSync(PNG_IMAGES_DIR)) {
    const pngFiles = fs.readdirSync(PNG_IMAGES_DIR);
    const matchingPng = pngFiles.find(file => 
      file.toLowerCase().includes(normalizedTitle) && file.endsWith('.png')
    );
    if (matchingPng) {
      return path.join(PNG_IMAGES_DIR, matchingPng);
    }
  }

  // Fallback to webp in main directory
  if (fs.existsSync(RECIPE_IMAGES_DIR)) {
    const webpFiles = fs.readdirSync(RECIPE_IMAGES_DIR).filter(f => f.endsWith('.webp'));
    const matchingWebp = webpFiles.find(file => 
      file.toLowerCase().includes(normalizedTitle)
    );
    if (matchingWebp) {
      return path.join(RECIPE_IMAGES_DIR, matchingWebp);
    }
  }

  return null;
}

/**
 * Generate 30 high-performing hashtags based on recipe
 * Uses data-driven approach with popular, high-engagement hashtags
 */
function generateHashtags(recipe: Recipe): string[] {
  // Tier 1: Ultra-high volume hashtags (millions of posts) - guaranteed reach
  const tier1Hashtags = [
    '#veganfood',        // 30M+ posts
    '#veganrecipes',     // 9M+ posts
    '#plantbased',       // 20M+ posts
    '#veganlife',        // High engagement
    '#healthyfood',      // Broad appeal
    '#veganfoodshare',   // Community engagement
    '#govegan',          // Lifestyle appeal
  ];

  // Tier 2: High-performing recipe and cooking hashtags
  const tier2Hashtags = [
    '#vegancooking',
    '#plantbasedrecipes',
    '#veganmeals',
    '#whatveganseat',
    '#vegancommunity',
    '#vegansofig',       // Cross-platform reach
    '#veganfoodie',
    '#plantbasedfood',
    '#veganeats',
  ];

  // Category-specific high-performing hashtags (based on actual popularity)
  const categoryHashtags: string[] = [];
  recipe.category.forEach(cat => {
    const catMap: Record<RecipeCategory, string[]> = {
      'baking': ['#veganbaking', '#veganbakedgoods', '#plantbasedbaking', '#vegancakes'],
      'savory': ['#veganmaindish', '#veganfoodporn', '#veganfoodlover'],
      'international': ['#veganinternational', '#globalvegan', '#veganworldcuisine'],
      'breakfast': ['#veganbreakfast', '#plantbasedbreakfast', '#veganbrunch', '#healthybreakfast'],
      'lunch': ['#veganlunch', '#plantbasedlunch', '#healthylunch'],
      'dinner': ['#vegandinner', '#plantbaseddinner', '#veganfoodideas'],
      'dessert': ['#vegandessert', '#plantbaseddessert', '#vegansweets', '#veganbaking'],
      'snack': ['#vegansnacks', '#plantbasedsnacks', '#healthysnacks', '#vegantreats'],
      'beverage': ['#vegandrinks', '#plantbaseddrinks', '#healthybeverages', '#veganjuice'],
    };
    categoryHashtags.push(...(catMap[cat] || []));
  });

  // Vegan type hashtags (niche but high engagement)
  const veganTypeHashtags: string[] = [];
  recipe.veganType.forEach(type => {
    const typeMap: Record<string, string[]> = {
      'raw-vegan': ['#rawvegan', '#rawfood', '#rawveganfood'],
      'whole-food-plant-based': ['#wfpb', '#wholefoodplantbased', '#wfpbnooil'],
      'gluten-free-vegan': ['#glutenfreevegan', '#gfvegan', '#veganglutenfree'],
      'oil-free-vegan': ['#oilfreevegan', '#nooil', '#wfpbnooil'],
      'high-protein-vegan': ['#highproteinvegan', '#veganprotein', '#plantprotein'],
      'budget-vegan': ['#budgetvegan', '#cheapvegan', '#affordablevegan'],
      'gourmet-vegan': ['#gourmetvegan', '#vegangourmet', '#fancyvegan'],
    };
    veganTypeHashtags.push(...(typeMap[type] || []));
  });

  // Tier 3: Engagement-focused hashtags (good for community building)
  const tier3Hashtags = [
    '#veganfoodphotography',
    '#veganfoodblogger',
    '#plantbasedliving',
    '#veganlifestyle',
    '#veganinspiration',
    '#veganfoodlove',
    '#veganfoodgram',
    '#veganyum',
    '#veganfoodadventure',
  ];

  // Strategic combination: Mix of broad reach + niche engagement
  // Start with tier 1 for maximum reach
  const selectedHashtags: string[] = [...tier1Hashtags];
  
  // Add tier 2 for recipe-specific reach
  selectedHashtags.push(...tier2Hashtags.slice(0, 5));
  
  // Add category-specific (up to 4)
  selectedHashtags.push(...categoryHashtags.slice(0, 4));
  
  // Add vegan type hashtags (up to 3)
  selectedHashtags.push(...veganTypeHashtags.slice(0, 3));
  
  // Fill remaining slots with tier 3 engagement hashtags
  const remaining = 30 - selectedHashtags.length;
  selectedHashtags.push(...tier3Hashtags.slice(0, remaining));

  // Remove duplicates and ensure exactly 30
  const uniqueHashtags = Array.from(new Set(selectedHashtags.map(h => h.toLowerCase())));
  return uniqueHashtags.slice(0, 30);
}

/**
 * Wait for element with timeout
 */
async function waitForElement(
  page: Page,
  selector: string,
  timeout: number = 30000
): Promise<void> {
  try {
    await page.waitForSelector(selector, { timeout, visible: true });
  } catch (error) {
    throw new Error(`Element not found: ${selector}`);
  }
}

/**
 * Login to Facebook
 */
async function loginToFacebook(page: Page): Promise<void> {
  // Check if credentials are provided
  if (!FACEBOOK_EMAIL || !FACEBOOK_PASSWORD) {
    throw new Error('Facebook credentials not provided! Set FACEBOOK_EMAIL and FACEBOOK_PASSWORD environment variables.');
  }

  console.log('🔐 Logging into Facebook...');
  await page.goto(FACEBOOK_LOGIN_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  await delay(2000);

  // Fill in email
  const emailSelectors = [
    'input[type="email"]',
    'input[name="email"]',
    'input[id="email"]',
    'input[placeholder*="Email"]',
    'input[placeholder*="email"]',
  ];

  let emailFilled = false;
  for (const selector of emailSelectors) {
    try {
      await page.waitForSelector(selector, { timeout: 3000, visible: true });
      await page.click(selector);
      await delay(500);
      await page.type(selector, FACEBOOK_EMAIL, { delay: 50 });
      emailFilled = true;
      console.log('✅ Email entered');
      break;
    } catch (error) {
      continue;
    }
  }

  if (!emailFilled) {
    throw new Error('Could not find email input field');
  }

  // Fill in password
  const passwordSelectors = [
    'input[type="password"]',
    'input[name="pass"]',
    'input[id="pass"]',
    'input[placeholder*="Password"]',
    'input[placeholder*="password"]',
  ];

  let passwordFilled = false;
  for (const selector of passwordSelectors) {
    try {
      await page.waitForSelector(selector, { timeout: 3000, visible: true });
      await page.click(selector);
      await delay(500);
      await page.type(selector, FACEBOOK_PASSWORD, { delay: 50 });
      passwordFilled = true;
      console.log('✅ Password entered');
      break;
    } catch (error) {
      continue;
    }
  }

  if (!passwordFilled) {
    throw new Error('Could not find password input field');
  }

  // Click login button
  const loginButtonSelectors = [
    'button[type="submit"]',
    'button[name="login"]',
    'button[id="loginbutton"]',
    'input[type="submit"][value*="Log"]',
    'button:has-text("Log In")',
  ];

  let loginClicked = false;
  for (const selector of loginButtonSelectors) {
    try {
      await page.waitForSelector(selector, { timeout: 3000, visible: true });
      await page.click(selector);
      await delay(2000);
      loginClicked = true;
      console.log('✅ Login button clicked');
      break;
    } catch (error) {
      continue;
    }
  }

  if (!loginClicked) {
    throw new Error('Could not find login button');
  }

  // Wait for navigation after login
  await delay(5000);

  // Check if we're logged in (look for common post-login elements)
  const currentUrl = page.url();
  if (currentUrl.includes('login') || currentUrl.includes('checkpoint')) {
    console.warn('⚠️  May need to complete 2FA or security check manually');
    console.warn('   Waiting 30 seconds for manual intervention...');
    await delay(30000);
  } else {
    console.log('✅ Successfully logged into Facebook');
  }
}

/**
 * Main automation function
 */
async function automateFacebookPost() {
  console.log('🚀 Starting Facebook post automation...\n');

  // Validate Facebook credentials
  if (!FACEBOOK_EMAIL || !FACEBOOK_PASSWORD) {
    throw new Error('Facebook credentials required! Set FACEBOOK_EMAIL and FACEBOOK_PASSWORD environment variables.');
  }

  // Get random recipe
  console.log('📖 Fetching random recipe...');
  const recipe = await getRandomRecipe();
  console.log(`✅ Selected recipe: "${recipe.title}"`);
  console.log(`   Slug: ${recipe.slug}`);
  console.log(`   URL: ${SITE_URL}/recipes/${recipe.slug}\n`);

  // Find recipe image
  console.log('🖼️  Looking for recipe image...');
  const imagePath = findRecipeImage(recipe.title);
  if (!imagePath) {
    throw new Error(`Image not found for recipe: ${recipe.title}`);
  }
  console.log(`✅ Found image: ${path.basename(imagePath)}\n`);

  // Generate hashtags
  const hashtags = generateHashtags(recipe);
  console.log(`📝 Generated ${hashtags.length} hashtags\n`);

  // Launch browser
  console.log('🌐 Launching Chrome browser...');
  
  // Try to use system Chrome/Chromium if available, otherwise use bundled Chrome
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false, // Show browser for debugging
      defaultViewport: { width: 1280, height: 720 },
      args: [
        '--start-maximized',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
      ],
    });
  } catch (error: any) {
    if (error.message?.includes('shared libraries') || error.message?.includes('libnspr4')) {
      console.error('\n❌ Missing system dependencies for Chrome!');
      console.error('\n📦 Please install required dependencies:');
      console.error('   sudo apt-get update');
      console.error('   sudo apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libdbus-1-3 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2t64 libpango-1.0-0 libcairo2 libxshmfence1');
      console.error('\n💡 Or try using system Chrome/Chromium:');
      console.error('   sudo apt-get install -y chromium-browser');
      console.error('   Then update the script to use: executablePath: "/usr/bin/chromium-browser"');
      throw new Error('Missing Chrome dependencies. See instructions above.');
    }
    throw error;
  }

  const page = await browser.newPage();
  
  try {
    // Login to Facebook first
    await loginToFacebook(page);
    await delay(2000);

    // Navigate to the recipe page on vegancooking.recipes
    // Ensure URL has protocol
    let recipeUrl = `${SITE_URL}/recipes/${recipe.slug}`;
    if (!recipeUrl.startsWith('http://') && !recipeUrl.startsWith('https://')) {
      recipeUrl = `https://${recipeUrl}`;
    }
    console.log('📱 Navigating to recipe page...');
    console.log(`   URL: ${recipeUrl}`);
    await page.goto(recipeUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000); // Wait for page to fully load
    console.log('✅ Loaded recipe page\n');

    // Navigate to Facebook Business Composer
    console.log('📘 Navigating to Facebook Business Composer...');
    await page.goto(FACEBOOK_COMPOSER_URL, { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(3000); // Wait for composer to load
    console.log('✅ Loaded Facebook Composer\n');

    // Wait for and fill in the post text area
    console.log('✍️  Writing post content...');
    const postText = `${recipe.title}\n\n${recipe.description || ''}\n\nGet the full recipe: ${recipeUrl}\n\n${hashtags.join(' ')}`;

    // Try multiple selectors for the text area (Facebook Business Composer)
    const textAreaSelectors = [
      'div[contenteditable="true"][role="textbox"]',
      'div[contenteditable="true"][aria-label*="text"]',
      'div[contenteditable="true"][aria-label*="What"]',
      'div[contenteditable="true"]',
      'textarea[placeholder*="What"]',
      'textarea',
      '[data-testid="post-composer-text-input"]',
      'div[data-contents="true"]',
    ];

    let textAreaFound = false;
    for (const selector of textAreaSelectors) {
      try {
        await page.waitForSelector(selector, { timeout: 8000, visible: true });
        await page.click(selector, { clickCount: 3 }); // Triple click to select all if there's placeholder text
        await delay(500);
        
        // Clear any existing content
        await page.keyboard.down('Control');
        await page.keyboard.press('a');
        await page.keyboard.up('Control');
        await delay(200);
        
        // Type the post text
        await page.type(selector, postText, { delay: 30 });
        textAreaFound = true;
        console.log('✅ Post text entered\n');
        break;
      } catch (error) {
        // Try next selector
        continue;
      }
    }

    if (!textAreaFound) {
      throw new Error('Could not find post text area. Make sure you are on the Facebook Business Composer page.');
    }

    // Click "Add photo/video" button in the Media section
    console.log('📷 Clicking "Add photo/video" button...');
    const photoButtonSelectors = [
      'button:has-text("Add photo/video")',
      'button:has-text("Add photo")',
      'button:has-text("Add video")',
      'div[aria-label*="Add photo/video"]',
      'div[aria-label*="Add photo"]',
      'button[aria-label*="Add photo/video"]',
      'button[aria-label*="Add photo"]',
      'div[role="button"]:has-text("Add photo/video")',
      'div[role="button"]:has-text("Add photo")',
      '[data-testid="photo-upload-button"]',
      'button:has([aria-label*="photo"])',
    ];

    let photoButtonFound = false;
    for (const selector of photoButtonSelectors) {
      try {
        await page.waitForSelector(selector, { timeout: 8000, visible: true });
        await page.click(selector);
        await delay(2000); // Wait for file picker or upload dialog
        photoButtonFound = true;
        console.log('✅ Photo button clicked\n');
        break;
      } catch (error) {
        continue;
      }
    }

    if (!photoButtonFound) {
      console.warn('⚠️  Could not find photo button, trying file input directly...');
    }

    // Handle file upload - try file chooser first (most reliable)
    console.log('📤 Uploading image...');
    let fileInputFound = false;

    // Method 1: Wait for file chooser (most reliable for Facebook)
    try {
      // If we just clicked the button, file chooser might already be open
      // Otherwise, click again to trigger it
      if (!photoButtonFound) {
        const photoBtn = await page.$('button:has-text("Add photo/video")');
        if (photoBtn) {
          await photoBtn.click();
          await delay(1000);
        }
      }

      const fileChooser = await page.waitForFileChooser({ timeout: 5000 });
      await fileChooser.accept([imagePath]);
      await delay(3000); // Wait for upload to process
      fileInputFound = true;
      console.log('✅ Image uploaded via file chooser\n');
    } catch (error) {
      // Method 2: Try direct file input
      console.log('   Trying direct file input...');
      const fileInputSelectors = [
        'input[type="file"]',
        'input[accept*="image"]',
        'input[accept*="video"]',
      ];

      for (const selector of fileInputSelectors) {
        try {
          const fileInput = await page.$(selector);
          if (fileInput) {
            await fileInput.uploadFile(imagePath);
            await delay(3000); // Wait for upload
            fileInputFound = true;
            console.log('✅ Image uploaded via file input\n');
            break;
          }
        } catch (error) {
          continue;
        }
      }
    }

    if (!fileInputFound) {
      console.warn('⚠️  Could not upload image automatically. You may need to upload manually.');
      console.warn('   Image path:', imagePath);
    }

    // Wait a bit for image to process
    await delay(3000);

    // Click Publish button (blue button at bottom)
    console.log('📮 Clicking Publish button...');
    const publishButtonSelectors = [
      'button:has-text("Publish")',
      'button[aria-label="Publish"]',
      'div[role="button"]:has-text("Publish")',
      'button:has-text("Post")',
      'button[aria-label="Post"]',
      'div[aria-label="Publish"]',
      'div[aria-label="Post"]',
      '[data-testid="publish-button"]',
      '[data-testid="post-button"]',
      'button[type="submit"]:has-text("Publish")',
    ];

    let publishButtonFound = false;
    for (const selector of publishButtonSelectors) {
      try {
        // Scroll to button to ensure it's visible
        await page.evaluate((sel) => {
          const btn = document.querySelector(sel);
          if (btn) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, selector);
        
        await delay(1000);
        await page.waitForSelector(selector, { timeout: 8000, visible: true });
        await page.click(selector);
        await delay(3000); // Wait for post to be submitted
        publishButtonFound = true;
        console.log('✅ Publish button clicked\n');
        break;
      } catch (error) {
        continue;
      }
    }

    if (!publishButtonFound) {
      throw new Error('Could not find Publish button. Make sure you are on the Facebook Business Composer page.');
    }

    // Wait for post to be submitted
    console.log('⏳ Waiting for post to be submitted...');
    await delay(5000);

    console.log('✅ Post automation completed!\n');
    console.log('📊 Summary:');
    console.log(`   Recipe: ${recipe.title}`);
    console.log(`   URL: ${recipeUrl}`);
    console.log(`   Image: ${path.basename(imagePath)}`);
    console.log(`   Hashtags: ${hashtags.length}`);

  } catch (error: any) {
    console.error('❌ Error during automation:', error.message);
    console.error('\n💡 Tips:');
    console.error('   - Make sure you are logged into Facebook Business Manager');
    console.error('   - Check that the composer URL is correct');
    console.error('   - Facebook UI may have changed - you may need to update selectors');
    throw error;
  } finally {
    // Keep browser open for 10 seconds to see the result
    console.log('\n⏸️  Keeping browser open for 10 seconds...');
    await delay(10000);
    await browser.close();
  }
}

// Run if called directly
if (require.main === module) {
  automateFacebookPost()
    .then(() => {
      console.log('\n✅ Script completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Script failed:', error);
      process.exit(1);
    });
}

export { automateFacebookPost };
