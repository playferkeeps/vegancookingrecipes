/**
 * Script to post recipe images to Instagram Business Account
 * Uses Instagram Graph API to post photos
 * 
 * Prerequisites:
 * - Instagram Business Account
 * - Facebook Page connected to Instagram
 * - Instagram Business Account ID
 * 
 * Usage:
 *   npm run post-recipe-to-instagram
 * 
 * Or run on a schedule with cron:
 *   0 0,6,12,18 * * * cd /path/to/cooking-site && npm run post-recipe-to-instagram
 */

import 'dotenv/config';
import { getAllRecipesAsync } from '../data/recipes/helpers';

interface InstagramApiConfig {
  accessToken: string;
  instagramBusinessAccountId: string;
  instagramAppId: string;
  facebookPageId: string;
}

/**
 * Get formatted timestamp for logging
 */
function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Log with timestamp
 */
function logWithTimestamp(message: string, type: 'log' | 'error' | 'warn' = 'log'): void {
  const timestamp = getTimestamp();
  const formattedMessage = `[${timestamp}] ${message}`;
  
  switch (type) {
    case 'error':
      console.error(formattedMessage);
      break;
    case 'warn':
      console.warn(formattedMessage);
      break;
    default:
      console.log(formattedMessage);
  }
}

/**
 * Get random recipe
 */
async function getRandomRecipe() {
  const recipes = await getAllRecipesAsync();
  if (recipes.length === 0) {
    throw new Error('No recipes found');
  }
  
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

/**
 * Get and validate site URL
 */
function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const defaultUrl = 'https://vegancooking.recipes';
  
  if (!envUrl) {
    logWithTimestamp(`⚠️  NEXT_PUBLIC_SITE_URL not set, using default: ${defaultUrl}`, 'warn');
    return defaultUrl;
  }
  
  let url: URL;
  try {
    url = new URL(envUrl);
  } catch {
    logWithTimestamp(`⚠️  Invalid NEXT_PUBLIC_SITE_URL format, using default: ${defaultUrl}`, 'warn');
    return defaultUrl;
  }
  
  const allowedDomains = [
    'vegancooking.recipes',
    'www.vegancooking.recipes',
    'localhost',
  ];
  
  const hostname = url.hostname.toLowerCase();
  const isAllowed = allowedDomains.some(domain => 
    hostname === domain || hostname.endsWith(`.${domain}`)
  );
  
  if (!isAllowed) {
    logWithTimestamp(`❌ NEXT_PUBLIC_SITE_URL (${envUrl}) is not from vegancooking.recipes domain!`, 'error');
    return defaultUrl;
  }
  
  if (!hostname.includes('localhost') && url.protocol !== 'https:') {
    url.protocol = 'https:';
  }
  
  return url.toString().replace(/\/$/, '');
}

/**
 * Generate engaging Instagram caption for a recipe with engagement hooks
 * Instagram doesn't allow clickable links in posts, so we include the URL in the caption
 */
function generateInstagramCaption(recipe: { title: string; slug: string; description?: string; category?: string[] }): string {
  const baseUrl = getSiteUrl();
  const recipeUrl = `${baseUrl}/recipes/${recipe.slug}`;
  
  const emojis = ['🌱', '🥕', '🥗', '🍽️', '✨', '💚', '🌿', '🥑', '🍃', '🥬'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Engagement questions based on recipe type
  const engagementQuestions = [
    "Who's making this tonight? 👇",
    "Save this for later! 📌",
    "Tag someone who needs to try this! 👥",
    "What's your favorite vegan recipe? Let me know below! 💬",
    "Have you tried this before? Share your experience! ✨",
    "Which ingredient are you most excited about? 🥕",
    "Drop a ❤️ if you're saving this recipe!",
    "What would you serve this with? Let's chat! 💭",
    "Who's ready to cook this weekend? 🙋‍♀️",
    "Comment your favorite vegan cooking tip! 💡",
  ];

  // Call-to-action variations
  const ctas = [
    "👉 Full recipe in bio link!",
    "👉 Get the full recipe:",
    "👉 Recipe link in bio!",
    "👉 Full recipe below!",
    "👉 Check out the full recipe:",
  ];

  // Recipe-specific engagement hooks
  const getRecipeHook = (title: string, category?: string[]): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('cake') || lowerTitle.includes('dessert') || lowerTitle.includes('cookie')) {
      return "Perfect for satisfying that sweet tooth! 🍰";
    }
    if (lowerTitle.includes('soup') || lowerTitle.includes('stew')) {
      return "Comfort food at its finest! Perfect for cozy nights. 🍲";
    }
    if (lowerTitle.includes('salad')) {
      return "Fresh, healthy, and absolutely delicious! 🥗";
    }
    if (lowerTitle.includes('pasta') || lowerTitle.includes('noodle')) {
      return "The ultimate comfort food, vegan style! 🍝";
    }
    if (category?.some(c => c.toLowerCase().includes('breakfast'))) {
      return "Start your day right with this! ☀️";
    }
    return "A new favorite in the making! 🌟";
  };

  const randomQuestion = engagementQuestions[Math.floor(Math.random() * engagementQuestions.length)];
  const randomCta = ctas[Math.floor(Math.random() * ctas.length)];
  const recipeHook = getRecipeHook(recipe.title, recipe.category);

  let caption = `${randomEmoji} ${recipe.title}\n\n`;
  
  // Add recipe hook
  caption += `${recipeHook}\n\n`;
  
  if (recipe.description) {
    const maxDescriptionLength = 120; // Keep shorter to leave room for engagement
    if (recipe.description.length > maxDescriptionLength) {
      caption += `${recipe.description.substring(0, maxDescriptionLength)}...\n\n`;
    } else {
      caption += `${recipe.description}\n\n`;
    }
  }
  
  // Add engagement question
  caption += `${randomQuestion}\n\n`;
  
  // Add CTA and URL
  caption += `${randomCta}\n${recipeUrl}\n\n`;
  
  // Comprehensive hashtag strategy - 30 hashtags for maximum reach
  const baseHashtags = [
    '#VeganRecipes', '#PlantBased', '#VeganCooking', '#HealthyEating', '#VeganFood',
    '#VeganMeals', '#PlantBasedCooking', '#VeganRecipe', '#VeganLife', '#VeganFoodie',
    '#VeganCommunity', '#VeganFoodShare', '#PlantBasedRecipes', '#VeganCookingTips', '#VeganMealIdeas',
    '#VeganDinner', '#VeganLunch', '#VeganBreakfast', '#VeganDessert', '#VeganSnacks',
    '#VeganBaking', '#VeganChef', '#VeganFoodBlog', '#VeganFoodPorn', '#VeganFoodLover',
    '#PlantBasedFood', '#PlantBasedDiet', '#VeganEats', '#VeganYum', '#VeganInspiration',
  ];
  
  // Category-specific hashtags
  const categoryHashtags = recipe.category?.map(cat => {
    const capitalized = cat.charAt(0).toUpperCase() + cat.slice(1);
    return `#Vegan${capitalized}`;
  }) || [];
  
  // Additional niche hashtags
  const nicheHashtags = [
    '#VeganFoodPhotography', '#VeganFoodBlogger', '#PlantBasedLiving', '#VeganLifestyle',
    '#VeganFoodJourney', '#VeganFoodAdventure', '#VeganFoodLove', '#VeganFoodGram',
  ];
  
  // Combine all hashtags, remove duplicates, and ensure we have exactly 30
  const hashtagSet = new Set([
    ...baseHashtags,
    ...categoryHashtags.slice(0, 5), // Up to 5 category hashtags
    ...nicheHashtags.slice(0, 5), // Up to 5 niche hashtags
  ]);
  
  // Convert to array and trim to exactly 30 hashtags
  const allHashtags = Array.from(hashtagSet).slice(0, 30);
  
  caption += allHashtags.join(' ');
  
  return caption;
}


/**
 * Upload image to Instagram using Graph API
 * Instagram requires a two-step process:
 * 1. Create a media container with the image URL
 * 2. Publish the container
 * 
 * Note: Instagram requires images to be publicly accessible via HTTPS
 */
async function postToInstagram(
  imageUrl: string,
  caption: string,
  config: InstagramApiConfig
): Promise<{ success: boolean; mediaId?: string; error?: string }> {
  try {
    // Validate image URL is publicly accessible via HTTPS (Instagram requirement)
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      return {
        success: false,
        error: 'Image URL must be publicly accessible via HTTPS. Recipe images must be hosted online.',
      };
    }

    // Instagram requires HTTPS - convert HTTP to HTTPS if needed
    if (imageUrl.startsWith('http://')) {
      imageUrl = imageUrl.replace('http://', 'https://');
      logWithTimestamp('⚠️  Converted HTTP to HTTPS for Instagram compatibility', 'warn');
    }

    // Validate URL format
    try {
      new URL(imageUrl);
    } catch {
      return {
        success: false,
        error: `Invalid image URL format: ${imageUrl}`,
      };
    }

    logWithTimestamp(`📸 Image URL validated: ${imageUrl}`);

    // Step 1: Create media container with image
    logWithTimestamp('📸 Creating Instagram media container with image...');
    logWithTimestamp(`   Image URL: ${imageUrl}`);
    logWithTimestamp(`   Caption length: ${caption.length} characters`);
    
    const containerUrl = `https://graph.facebook.com/v18.0/${config.instagramBusinessAccountId}/media`;
    
    // Instagram API requires image_url parameter to attach the photo
    const containerParams = new URLSearchParams({
      image_url: imageUrl, // This attaches the recipe image to the post
      caption: caption.substring(0, 2200), // Instagram has 2200 character limit
      access_token: config.accessToken,
    });
    
    logWithTimestamp(`   Container URL: ${containerUrl}`);
    logWithTimestamp(`   Image will be attached from: ${imageUrl}`);
    
    const containerResponse = await fetch(`${containerUrl}?${containerParams.toString()}`, {
      method: 'POST',
    });
    
    const containerData = await containerResponse.json();
    
    if (!containerResponse.ok) {
      logWithTimestamp(`Instagram API Error (container): ${JSON.stringify(containerData)}`, 'error');
      return {
        success: false,
        error: containerData.error?.message || containerData.error?.error_user_msg || 'Failed to create media container',
      };
    }
    
    const creationId = containerData.id;
    logWithTimestamp(`✅ Media container created with image: ${creationId}`);
    logWithTimestamp(`   Image is being processed by Instagram...`);
    
    // Step 2: Check container status and publish
    logWithTimestamp('⏳ Waiting for image container to be ready...');
    
    // Instagram requires waiting for the container to be ready
    let status = 'IN_PROGRESS';
    let attempts = 0;
    const maxAttempts = 10;
    
    while (status === 'IN_PROGRESS' && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
      
      const statusUrl = `https://graph.facebook.com/v18.0/${creationId}?fields=status_code&access_token=${config.accessToken}`;
      const statusResponse = await fetch(statusUrl);
      const statusData = await statusResponse.json();
      
      if (statusData.status_code === 'FINISHED') {
        status = 'FINISHED';
        break;
      } else if (statusData.status_code === 'ERROR') {
        return {
          success: false,
          error: 'Container processing failed. Check image URL and format.',
        };
      }
      
      attempts++;
      logWithTimestamp(`   Attempt ${attempts}/${maxAttempts}...`);
    }
    
    if (status !== 'FINISHED') {
      return {
        success: false,
        error: 'Container did not finish processing in time. Try again later.',
      };
    }
    
    // Step 3: Publish the container (with image attached)
    logWithTimestamp('📤 Publishing post to Instagram with image...');
    
    const publishUrl = `https://graph.facebook.com/v18.0/${config.instagramBusinessAccountId}/media_publish`;
    const publishParams = new URLSearchParams({
      creation_id: creationId,
      access_token: config.accessToken,
    });
    
    const publishResponse = await fetch(`${publishUrl}?${publishParams.toString()}`, {
      method: 'POST',
    });
    
    const publishData = await publishResponse.json();
    
    if (!publishResponse.ok) {
      logWithTimestamp(`Instagram API Error (publish): ${JSON.stringify(publishData)}`, 'error');
      return {
        success: false,
        error: publishData.error?.message || publishData.error?.error_user_msg || 'Failed to publish to Instagram',
      };
    }
    
    return {
      success: true,
      mediaId: publishData.id,
    };
  } catch (error: any) {
    logWithTimestamp(`Error posting to Instagram: ${error.message || error}`, 'error');
    return {
      success: false,
      error: error.message || 'Unknown error',
    };
  }
}

/**
 * Get absolute image URL for recipe
 * Ensures the image URL is publicly accessible via HTTPS for Instagram
 */
function getRecipeImageUrl(recipe: { image: string }): string {
  const baseUrl = getSiteUrl();
  
  // If already an absolute URL, ensure it's HTTPS
  if (recipe.image.startsWith('http://') || recipe.image.startsWith('https://')) {
    // Convert HTTP to HTTPS for Instagram (requires HTTPS)
    if (recipe.image.startsWith('http://')) {
      return recipe.image.replace('http://', 'https://');
    }
    return recipe.image;
  }
  
  // Convert relative path to absolute HTTPS URL
  const imagePath = recipe.image.startsWith('/') ? recipe.image : `/${recipe.image}`;
  const fullUrl = `${baseUrl}${imagePath}`;
  
  // Ensure HTTPS
  if (fullUrl.startsWith('http://')) {
    return fullUrl.replace('http://', 'https://');
  }
  
  return fullUrl;
}

/**
 * Main function
 */
async function main(shouldExit: boolean = false) {
  logWithTimestamp('📷 Starting recipe post to Instagram...\n');

  const siteUrl = getSiteUrl();
  logWithTimestamp(`🌐 Using site URL: ${siteUrl}`);
  
  if (!siteUrl.includes('vegancooking.recipes') && !siteUrl.includes('localhost')) {
    const error = new Error(`Site URL must be from vegancooking.recipes domain! Current: ${siteUrl}`);
    logWithTimestamp(`❌ ${error.message}`, 'error');
    if (shouldExit) process.exit(1);
    throw error;
  }

  const config: InstagramApiConfig = {
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN || '',
    instagramBusinessAccountId: process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID || '',
    instagramAppId: process.env.INSTAGRAM_APP_ID || '',
    facebookPageId: process.env.FACEBOOK_PAGE_ID || '',
  };

  if (!config.accessToken || !config.instagramBusinessAccountId) {
    const error = new Error('Missing Instagram API credentials!');
    logWithTimestamp(`❌ ${error.message}`, 'error');
    logWithTimestamp('\nRequired environment variables:', 'error');
    logWithTimestamp('  INSTAGRAM_ACCESS_TOKEN', 'error');
    logWithTimestamp('  INSTAGRAM_BUSINESS_ACCOUNT_ID', 'error');
    logWithTimestamp('\nSee INSTAGRAM_API_SETUP.md for instructions.', 'error');
    if (shouldExit) process.exit(1);
    throw error;
  }

  try {
    logWithTimestamp('📖 Fetching recipes...');
    const recipe = await getRandomRecipe();
    logWithTimestamp(`✅ Selected recipe: "${recipe.title}"`);

    const caption = generateInstagramCaption(recipe);
    const imageUrl = getRecipeImageUrl(recipe);
    
    logWithTimestamp(`\n📝 Caption:\n${caption}\n`);
    logWithTimestamp(`🖼️  Image URL: ${imageUrl}\n`);

    logWithTimestamp('📷 Posting to Instagram with recipe image...');
    logWithTimestamp(`   Recipe: "${recipe.title}"`);
    logWithTimestamp(`   Image URL: ${imageUrl}`);
    if (config.instagramAppId) {
      logWithTimestamp(`   Instagram App ID: ${config.instagramAppId}`);
    }
    logWithTimestamp(`   ✅ Image will be attached to the Instagram post`);
    const result = await postToInstagram(imageUrl, caption, config);

    if (result.success) {
      logWithTimestamp(`✅ Successfully posted to Instagram with image!`);
      logWithTimestamp(`   Media ID: ${result.mediaId}`);
      logWithTimestamp(`   Recipe: "${recipe.title}"`);
      logWithTimestamp(`   Image: ${imageUrl}`);
    } else {
      logWithTimestamp(`❌ Failed to post to Instagram: ${result.error}`, 'error');
      if (shouldExit) process.exit(1);
      throw new Error(result.error);
    }
  } catch (error: any) {
    logWithTimestamp(`❌ Error: ${error.message}`, 'error');
    if (shouldExit) process.exit(1);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  main(true);
}

export { main as postRecipeToInstagram };
