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

// Persistent browser profile directory (saves cookies and session)
const BROWSER_USER_DATA_DIR = path.join(process.cwd(), '.browser-profile');

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
 * Check if already logged into Facebook
 */
async function isLoggedIntoFacebook(page: Page): Promise<boolean> {
  try {
    // Navigate to Facebook home page
    await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await delay(3000); // Wait for page to fully load
    
    // Check URL first - if redirected to login, we're not logged in
    const currentUrl = page.url();
    if (currentUrl.includes('/login') || currentUrl.includes('/checkpoint')) {
      console.log('   URL indicates not logged in');
      return false;
    }
    
    // Check for login form elements (strong indicator of not logged in)
    const loginFormExists = await page.evaluate(() => {
      const emailInput = document.querySelector('input[name="email"]') || document.querySelector('input[type="email"]');
      const loginButton = document.querySelector('button[name="login"]') || document.querySelector('button[type="submit"]');
      return !!(emailInput && loginButton);
    });
    
    if (loginFormExists) {
      console.log('   Login form found - not logged in');
      return false;
    }
    
    // Check for logged-in indicators (strong indicators of being logged in)
    const loggedInIndicators = [
      'div[aria-label*="Account"]',
      'div[aria-label*="Menu"]',
      'a[href*="/me"]',
      'div[role="banner"]',
      'div[data-pagelet="LeftRail"]', // Facebook left sidebar when logged in
      'div[role="navigation"]', // Navigation bar when logged in
    ];
    
    for (const selector of loggedInIndicators) {
      try {
        const element = await page.$(selector);
        if (element) {
          console.log(`   Found logged-in indicator: ${selector}`);
          return true; // Logged in
        }
      } catch (error) {
        continue;
      }
    }
    
    // Check if we can access a protected page (like business.facebook.com)
    try {
      await page.goto('https://business.facebook.com', { waitUntil: 'domcontentloaded', timeout: 10000 });
      await delay(2000);
      const businessUrl = page.url();
      if (!businessUrl.includes('login') && !businessUrl.includes('checkpoint')) {
        console.log('   Can access business.facebook.com - logged in');
        return true;
      }
    } catch (error) {
      // If we can't access business.facebook.com, might not be logged in
    }
    
    // If URL doesn't have login/checkpoint and no login form, assume logged in
    if (!currentUrl.includes('login') && !currentUrl.includes('checkpoint')) {
      console.log('   No login indicators found - assuming logged in');
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`   Error checking login status: ${error}`);
    return false;
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

  console.log('🔐 Checking Facebook login status...');
  
  // Check if already logged in - try multiple times
  let loggedIn = false;
  for (let i = 0; i < 3; i++) {
    loggedIn = await isLoggedIntoFacebook(page);
    if (loggedIn) {
      console.log('✅ Already logged into Facebook (using saved session)\n');
      // Save cookies explicitly
      const cookies = await page.cookies();
      console.log(`   Session has ${cookies.length} cookies saved`);
      return;
    }
    await delay(1000);
  }

  console.log('🔐 Not logged in, attempting login...');
  await page.goto(FACEBOOK_LOGIN_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await delay(3000);

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
    
    // Explicitly save cookies after login
    const cookies = await page.cookies();
    console.log(`   Saved ${cookies.length} cookies to persistent profile`);
    
    // Wait a bit for cookies to persist
    await delay(2000);
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

  // Launch browser with persistent user data directory (saves cookies/session)
  console.log('🌐 Launching Chrome browser...');
  console.log(`   Using persistent profile: ${BROWSER_USER_DATA_DIR}`);
  
  // Ensure the profile directory exists
  if (!fs.existsSync(BROWSER_USER_DATA_DIR)) {
    fs.mkdirSync(BROWSER_USER_DATA_DIR, { recursive: true });
    console.log('   Created new browser profile directory');
  } else {
    console.log('   Using existing browser profile (session should be saved)');
  }
  
  // Try to use system Chrome/Chromium if available, otherwise use bundled Chrome
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: false, // Show browser for debugging
      userDataDir: BROWSER_USER_DATA_DIR, // Persistent profile - saves cookies and session
      defaultViewport: { width: 1280, height: 720 },
      args: [
        '--start-maximized',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-blink-features=AutomationControlled', // Reduce detection
        '--disable-notifications', // Block notifications
      ],
    });
    console.log('   Browser launched with persistent profile');
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
  
  // Set user agent to reduce detection
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  // Block notifications
  const context = browser.defaultBrowserContext();
  await context.overridePermissions('https://www.facebook.com', ['notifications']);
  await context.overridePermissions('https://business.facebook.com', ['notifications']);
  
  // Function to dismiss notification popups - AGGRESSIVE VERSION
  async function dismissNotificationPopup(): Promise<void> {
    try {
      // Wait a bit for popup to appear
      await delay(1000);
      
      // Try multiple times with different strategies
      for (let attempt = 0; attempt < 5; attempt++) {
        // Strategy 1: Find by text content (most reliable)
        const clicked = await page.evaluate(() => {
          const allClickable = Array.from(document.querySelectorAll('button, div[role="button"], a, span[role="button"]'));
          for (const el of allClickable) {
            const text = (el as HTMLElement).textContent?.trim() || '';
            const ariaLabel = el.getAttribute('aria-label')?.trim() || '';
            const lowerText = text.toLowerCase();
            const lowerAria = ariaLabel.toLowerCase();
            
            // Check if it's a dismiss button
            if (lowerText.includes('not now') || lowerText.includes('notnow') ||
                lowerText.includes('close') || lowerText.includes('dismiss') ||
                lowerText.includes('skip') || lowerText.includes('cancel') ||
                lowerAria.includes('not now') || lowerAria.includes('close') ||
                lowerAria.includes('dismiss')) {
              // Check if visible
              const rect = (el as HTMLElement).getBoundingClientRect();
              if (rect.width > 0 && rect.height > 0) {
                (el as HTMLElement).click();
                return true;
              }
            }
          }
          return false;
        });
        
        if (clicked) {
          console.log(`   Dismissed notification popup (attempt ${attempt + 1})`);
          await delay(1000);
          return;
        }
        
        // Strategy 2: Find dialogs/modals and close them
        const dialogClosed = await page.evaluate(() => {
          // Find any dialog or modal
          const dialogs = document.querySelectorAll('[role="dialog"], div[class*="modal"], div[class*="popup"], div[class*="overlay"]');
          for (const dialog of dialogs) {
            // Look for close buttons inside dialog
            const closeButtons = dialog.querySelectorAll('button, div[role="button"]');
            for (const btn of closeButtons) {
              const text = (btn as HTMLElement).textContent?.toLowerCase() || '';
              const ariaLabel = btn.getAttribute('aria-label')?.toLowerCase() || '';
              if (text.includes('close') || text.includes('not now') || text.includes('dismiss') ||
                  ariaLabel.includes('close') || ariaLabel.includes('not now')) {
                (btn as HTMLElement).click();
                return true;
              }
            }
            // If no close button found, try clicking outside or pressing Escape
            (dialog as HTMLElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
          }
          return false;
        });
        
        if (dialogClosed) {
          console.log(`   Closed dialog/modal (attempt ${attempt + 1})`);
          await delay(1000);
          return;
        }
        
        // Strategy 3: Press Escape key
        await page.keyboard.press('Escape');
        await delay(500);
        
        // Strategy 4: Click outside popup (click at center of viewport)
        await page.mouse.click(640, 360);
        await delay(500);
      }
    } catch (error) {
      // Ignore errors
    }
  }
  
  // Set up popup listener to automatically dismiss
  page.on('dialog', async (dialog) => {
    console.log('   Auto-dismissing dialog:', dialog.type());
    await dialog.dismiss();
  });
  
  try {
    // Login to Facebook first (will check if already logged in)
    await loginToFacebook(page);
    await delay(2000);
    
    // Dismiss any notification popups
    await dismissNotificationPopup();
    
    // Verify session is saved by checking again
    console.log('🔍 Verifying session persistence...');
    const stillLoggedIn = await isLoggedIntoFacebook(page);
    if (stillLoggedIn) {
      console.log('✅ Session verified - you are logged in\n');
    } else {
      console.log('⚠️  Session check failed - you may need to log in again\n');
    }

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
    
    // Dismiss any notification popups
    await dismissNotificationPopup();
    
    console.log('✅ Loaded Facebook Composer\n');

    // Wait for and fill in the post text area using REAL clipboard paste
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
        await page.click(selector, { clickCount: 3 }); // Triple click to select all
        await delay(500);
        
        // Clear any existing content
        await page.keyboard.down('Control');
        await page.keyboard.press('a');
        await page.keyboard.up('Control');
        await delay(300);
        
        // Set clipboard content using page.evaluate with proper clipboard API
        await page.evaluate(async (text) => {
          // Try modern clipboard API first
          try {
            await navigator.clipboard.writeText(text);
          } catch (e) {
            // Fallback: create temporary textarea
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }
        }, postText);
        
        await delay(300);
        
        // PASTE using keyboard shortcut (Ctrl+V)
        await page.keyboard.down('Control');
        await page.keyboard.press('v');
        await page.keyboard.up('Control');
        await delay(1000);
        
        // Verify text was pasted by checking content
        const pastedContent = await page.evaluate((sel) => {
          const el = document.querySelector(sel);
          return el ? (el.textContent || el.innerText || '') : '';
        }, selector);
        
        if (pastedContent.includes(recipe.title) || pastedContent.length > 10) {
          textAreaFound = true;
          console.log('✅ Post text pasted from clipboard\n');
          break;
        } else {
          // Fallback: set text directly via JavaScript
          await page.evaluate((sel, text) => {
            const el = document.querySelector(sel);
            if (el) {
              el.textContent = text;
              el.innerText = text;
              // Trigger all necessary events
              ['input', 'change', 'keyup', 'paste'].forEach(eventType => {
                const event = new Event(eventType, { bubbles: true });
                el.dispatchEvent(event);
              });
            }
          }, selector, postText);
          await delay(500);
          textAreaFound = true;
          console.log('✅ Post text set directly (fallback method)\n');
          break;
        }
      } catch (error) {
        // Try next selector
        continue;
      }
    }

    if (!textAreaFound) {
      throw new Error('Could not find post text area. Make sure you are on the Facebook Business Composer page.');
    }

    // Handle file upload - AGGRESSIVE MULTIPLE METHODS
    console.log('📷 Setting up file upload...');
    
    let fileChooser = null;
    let fileUploaded = false;
    
    // Wait a bit for page to fully load
    await delay(2000);
    
    // Method 1: Direct file input click with file chooser listener
    try {
      console.log('   Method 1: Direct file input click...');
      
      // Set up file chooser listener FIRST
      const fileChooserPromise = page.waitForFileChooser({ timeout: 5000 }).catch(() => null);
      
      // Find ALL file inputs
      const fileInputs = await page.$$('input[type="file"]');
      console.log(`   Found ${fileInputs.length} file input(s)`);
      
      if (fileInputs.length > 0) {
        // Try clicking each file input
        for (let i = 0; i < fileInputs.length; i++) {
          try {
            // Click using Puppeteer
            await fileInputs[i].click();
            await delay(500);
            
            // Also try JavaScript click
            await page.evaluate((index) => {
              const inputs = document.querySelectorAll('input[type="file"]');
              if (inputs[index]) {
                (inputs[index] as HTMLInputElement).click();
                // Dispatch events
                const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
                (inputs[index] as HTMLElement).dispatchEvent(clickEvent);
              }
            }, i);
            
            await delay(500);
            fileChooser = await fileChooserPromise;
            if (fileChooser) {
              console.log(`✅ File chooser opened via file input #${i + 1}`);
              break;
            }
          } catch (error) {
            continue;
          }
        }
      }
    } catch (error) {
      console.log('   Method 1 failed');
    }
    
    // Method 2: Find and click "Add photo/video" button
    if (!fileChooser && !fileUploaded) {
      try {
        console.log('   Method 2: Clicking "Add photo/video" button...');
        
        const fileChooserPromise = page.waitForFileChooser({ timeout: 5000 }).catch(() => null);
        
        // Find button by text/aria-label using JavaScript
        const buttonClicked = await page.evaluate(() => {
          const allElements = Array.from(document.querySelectorAll('button, div[role="button"], span[role="button"], a[role="button"]'));
          for (const el of allElements) {
            const text = (el as HTMLElement).textContent?.toLowerCase() || '';
            const ariaLabel = el.getAttribute('aria-label')?.toLowerCase() || '';
            const title = el.getAttribute('title')?.toLowerCase() || '';
            
            if (text.includes('add photo') || text.includes('photo/video') ||
                ariaLabel.includes('add photo') || ariaLabel.includes('photo/video') ||
                title.includes('add photo') || title.includes('photo/video')) {
              // Check if visible
              const rect = (el as HTMLElement).getBoundingClientRect();
              if (rect.width > 0 && rect.height > 0) {
                (el as HTMLElement).click();
                // Also dispatch events
                const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });
                el.dispatchEvent(clickEvent);
                return true;
              }
            }
          }
          return false;
        });
        
        if (buttonClicked) {
          await delay(1000);
          fileChooser = await fileChooserPromise;
          if (fileChooser) {
            console.log('✅ File chooser opened via button click');
          }
        }
      } catch (error) {
        console.log('   Method 2 failed');
      }
    }
    
    // Method 3: Try clicking button using selectors
    if (!fileChooser && !fileUploaded) {
      try {
        console.log('   Method 3: Trying button selectors...');
        const fileChooserPromise = page.waitForFileChooser({ timeout: 3000 }).catch(() => null);
        
        const buttonSelectors = [
          'button[aria-label*="Add photo/video"]',
          'button[aria-label*="Add photo"]',
          'div[role="button"][aria-label*="Add photo/video"]',
          'div[role="button"][aria-label*="Add photo"]',
          'button:has-text("Add photo/video")',
          'button:has-text("Add photo")',
          '[data-testid*="photo"]',
          '[data-testid*="upload"]',
        ];
        
        for (const selector of buttonSelectors) {
          try {
            const element = await page.$(selector);
            if (element) {
              await element.click();
              await delay(1000);
              fileChooser = await fileChooserPromise;
              if (fileChooser) {
                console.log(`✅ File chooser opened via selector: ${selector}`);
                break;
              }
            }
          } catch (error) {
            continue;
          }
        }
      } catch (error) {
        console.log('   Method 3 failed');
      }
    }
    
    // Method 4: Direct upload to file input (bypass file chooser)
    if (!fileChooser && !fileUploaded) {
      try {
        console.log('   Method 4: Direct file upload (bypassing file chooser)...');
        const fileInputs = await page.$$('input[type="file"]');
        if (fileInputs.length > 0) {
          // Try uploading to each input
          for (let i = 0; i < fileInputs.length; i++) {
            try {
              await fileInputs[i].uploadFile(imagePath);
              await delay(3000);
              fileUploaded = true;
              console.log(`✅ File uploaded directly to input #${i + 1}`);
              break;
            } catch (error) {
              continue;
            }
          }
        }
      } catch (error) {
        console.log('   Method 4 failed');
      }
    }
    
    // Method 5: Use JavaScript to set file directly
    if (!fileChooser && !fileUploaded) {
      try {
        console.log('   Method 5: JavaScript file assignment...');
        await page.evaluate((imgPath) => {
          const inputs = document.querySelectorAll('input[type="file"]');
          for (const input of inputs) {
            try {
              // Create a File object (this is a hack but might work)
              const dataTransfer = new DataTransfer();
              // Note: This won't work with local paths, but worth trying
              const file = new File([''], imgPath.split('/').pop() || 'image.png', { type: 'image/png' });
              dataTransfer.items.add(file);
              (input as HTMLInputElement).files = dataTransfer.files;
              
              // Trigger change event
              const changeEvent = new Event('change', { bubbles: true });
              input.dispatchEvent(changeEvent);
            } catch (e) {
              // Ignore
            }
          }
        }, imagePath);
        await delay(2000);
      } catch (error) {
        console.log('   Method 5 failed');
      }
    }

    // Handle file upload using the file chooser we opened
    console.log('📤 Uploading image...');
    let fileUploaded = false;

    // If we got a file chooser, use it
    if (fileChooser) {
      try {
        await fileChooser.accept([imagePath]);
        await delay(3000); // Wait for upload to process
        fileUploaded = true;
        console.log('✅ Image uploaded via file chooser\n');
      } catch (error) {
        console.log('   File chooser accept failed, trying direct upload...');
      }
    }
    
    // If file chooser didn't work, try direct file input upload
    if (!fileUploaded) {
      try {
        const fileInputs = await page.$$('input[type="file"]');
        if (fileInputs.length > 0) {
          await fileInputs[0].uploadFile(imagePath);
          await delay(3000);
          fileUploaded = true;
          console.log('✅ Image uploaded directly to file input\n');
        }
      } catch (error) {
        console.log('   Direct upload failed');
      }
    }
    
    // Final fallback: Use JavaScript to set file
    if (!fileUploaded) {
      try {
        await page.evaluate((imgPath) => {
          const input = document.querySelector('input[type="file"]') as HTMLInputElement;
          if (input) {
            // Create a FileList with the file
            const dataTransfer = new DataTransfer();
            // Note: This won't work with local file paths, but worth trying
            const file = new File([''], imgPath, { type: 'image/png' });
            dataTransfer.items.add(file);
            input.files = dataTransfer.files;
            
            // Trigger change event
            const changeEvent = new Event('change', { bubbles: true });
            input.dispatchEvent(changeEvent);
          }
        }, imagePath);
        await delay(2000);
        console.log('   Attempted JavaScript file upload');
      } catch (error) {
        // Ignore
      }
    }

    if (!fileUploaded) {
      console.warn('⚠️  Could not upload image automatically.');
      console.warn('   Please upload the image manually:');
      console.warn(`   Image path: ${imagePath}`);
      console.warn('   Waiting 10 seconds for manual upload...');
      await delay(10000);
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
    // Save session before closing - wait a bit for cookies to persist
    console.log('\n💾 Saving session...');
    await delay(3000);
    
    // Verify cookies are saved
    const cookies = await page.cookies();
    console.log(`   Saved ${cookies.length} cookies to persistent profile`);
    
    // Keep browser open for a few seconds to ensure everything is saved
    console.log('⏸️  Keeping browser open for 5 seconds to ensure session is saved...');
    await delay(5000);
    
    // Close pages first
    const pages = await browser.pages();
    for (const p of pages) {
      if (p !== page) {
        await p.close();
      }
    }
    
    // Close browser (cookies should be saved to userDataDir)
    await browser.close();
    console.log('✅ Browser closed - session saved to:', BROWSER_USER_DATA_DIR);
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
