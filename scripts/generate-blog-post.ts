/**
 * Script to generate SEO-optimized blog posts for recipes
 * 
 * Usage:
 *   npm run generate-blog -- --category dinner
 *   npm run generate-blog -- --title "Vegan Lasagna"
 *   npm run generate-blog -- --keyword "pasta"
 *   npm run generate-blog -- --category dinner --count 5
 * 
 * This script:
 * - Finds recipes based on category, title, or keyword
 * - Generates SEO-optimized blog posts using AI
 * - Creates relevant images (ingredients, cooking process, etc.)
 * - Saves blog posts to the database
 */

import 'dotenv/config';
import OpenAI from 'openai';
import Replicate from 'replicate';
import { Logger } from '../lib/logger';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

// Use the singleton Prisma client from lib/prisma
function getPrismaClient() {
  const { prisma } = require('../lib/prisma');
  if (!prisma) {
    throw new Error('Prisma Client is not initialized. Check DATABASE_URL configuration.');
  }
  return prisma;
}

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured. Set it as an environment variable.');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function getReplicateClient() {
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error('REPLICATE_API_TOKEN is not configured. Set it as an environment variable.');
  }
  return new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });
}

/**
 * Generate slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Convert ReadableStream to Buffer
 */
async function streamToBuffer(stream: ReadableStream): Promise<Buffer> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  return Buffer.concat(chunks);
}

/**
 * Save base64 image to file
 */
async function saveBase64Image(dataUrl: string, filename: string): Promise<string> {
  const base64Data = dataUrl.split(',')[1];
  const buffer = Buffer.from(base64Data, 'base64');
  return saveBufferImage(buffer, filename);
}

/**
 * Save buffer image to file
 */
async function saveBufferImage(buffer: Buffer, filename: string): Promise<string> {
  const imagesDir = path.join(process.cwd(), 'public', 'blog-images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const filePath = path.join(imagesDir, filename);
  fs.writeFileSync(filePath, buffer);
  return `/blog-images/${filename}`;
}

/**
 * Download and save image from URL
 */
function downloadAndSaveImage(url: string, filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const imagesDir = path.join(process.cwd(), 'public', 'blog-images');
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
        resolve(`/blog-images/${filename}`);
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
 * Generate image using Replicate
 */
async function generateBlogImage(
  replicate: Replicate,
  prompt: string,
  filename: string
): Promise<string> {
  try {
    const output: unknown = await replicate.run(
      'black-forest-labs/flux-schnell',
      {
        input: {
          prompt: prompt,
          aspect_ratio: '16:9',
          output_format: 'webp',
          output_quality: 90,
        },
      }
    );

    // Handle different output formats from Replicate
    let imageUrl: string;
    
    // Check if output is a ReadableStream
    if (output && typeof output === 'object' && 'getReader' in output) {
      // It's a ReadableStream - convert to buffer
      const buffer = await streamToBuffer(output as ReadableStream);
      imageUrl = await saveBufferImage(buffer, filename);
    } else if (typeof output === 'string') {
      // Could be a URL or base64 data
      if (output.startsWith('http')) {
        imageUrl = await downloadAndSaveImage(output, filename);
      } else if (output.startsWith('data:')) {
        // Base64 data URL - save it to a file
        imageUrl = await saveBase64Image(output, filename);
      } else {
        throw new Error(`Unexpected string format: ${output.substring(0, 50)}...`);
      }
    } else if (Buffer.isBuffer(output)) {
      // Binary image data - save it to a file
      imageUrl = await saveBufferImage(output, filename);
    } else if (Array.isArray(output) && output.length > 0) {
      const firstOutput = output[0];
      if (firstOutput && typeof firstOutput === 'object' && 'getReader' in firstOutput) {
        // ReadableStream in array
        const buffer = await streamToBuffer(firstOutput as ReadableStream);
        imageUrl = await saveBufferImage(buffer, filename);
      } else if (typeof firstOutput === 'string') {
        if (firstOutput.startsWith('http')) {
          imageUrl = await downloadAndSaveImage(firstOutput, filename);
        } else if (firstOutput.startsWith('data:')) {
          imageUrl = await saveBase64Image(firstOutput, filename);
        } else {
          throw new Error(`Unexpected array element format: ${firstOutput.substring(0, 50)}...`);
        }
      } else if (Buffer.isBuffer(firstOutput)) {
        imageUrl = await saveBufferImage(firstOutput, filename);
      } else {
        throw new Error(`Unexpected array element type: ${typeof firstOutput}`);
      }
    } else if (output && typeof output === 'object' && 'url' in output) {
      imageUrl = await downloadAndSaveImage((output as any).url, filename);
    } else {
      throw new Error(`Unexpected output format from Replicate: ${typeof output}`);
    }

    if (!imageUrl || typeof imageUrl !== 'string') {
      throw new Error(`Invalid image URL format from Replicate: ${typeof imageUrl}`);
    }

    return imageUrl;
  } catch (error: any) {
    throw new Error(`Failed to generate image: ${error.message}`);
  }
}

/**
 * Generate blog post content using AI
 */
async function generateBlogPostContent(
  openai: OpenAI,
  recipe: any,
  logger: Logger
): Promise<{
  title: string;
  excerpt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  imagePrompts: string[];
}> {
  const ingredients = recipe.ingredients.map((ing: any) => ing.name).join(', ');
  const instructions = recipe.instructions.map((inst: any) => inst.text).join('\n');
  const categories = recipe.categories.map((cat: any) => cat.category).join(', ');
  const tags = recipe.tags.map((tag: any) => tag.tag).join(', ');

  const prompt = `You are Noah, a warm and authentic vegan chef who writes engaging, SEO-optimized blog posts. Create a comprehensive blog post about this vegan recipe.

Recipe: "${recipe.title}"${recipe.title}"
Description: "${recipe.description}"
Categories: ${categories}
Tags: ${tags}
Prep Time: ${recipe.prepTime} minutes
Cook Time: ${recipe.cookTime} minutes
Total Time: ${recipe.totalTime} minutes
Servings: ${recipe.servings}
Difficulty: ${recipe.difficulty}

Ingredients: ${ingredients}

Instructions:
${instructions}

${recipe.prologue ? `Recipe Introduction: ${recipe.prologue}` : ''}
${recipe.ingredientNotes ? `Ingredient Notes: ${recipe.ingredientNotes}` : ''}
${recipe.tips ? `Tips: ${recipe.tips.join(', ')}` : ''}

Create a blog post that:
1. Is engaging and personal (written in Noah's voice - warm, authentic, conversational, like you're sharing with a friend)
2. Is SEO-optimized with relevant keywords naturally integrated (no keyword stuffing)
3. Tells a story about the recipe (why it's special, when to make it, personal anecdotes, etc.)
4. Includes helpful tips and variations (written from personal experience)
5. Is 800-1200 words long
6. Has a compelling introduction that hooks the reader with a personal story or memory
7. Includes sections on ingredients, preparation tips, serving suggestions
8. Has a strong conclusion that encourages readers to try the recipe
9. Uses first person ("I", "my", "me") throughout - sound like a real person, not a marketing department
10. Avoids generic phrases like "absolutely delicious" or "perfect for" - be specific and personal
11. Includes personal anecdotes, memories, or experiences with this recipe

Also suggest exactly 3 meaningful, contextual image prompts that directly relate to the blog post content. Each image should serve a specific purpose:
1. **Hero/Featured Image**: A stunning, appetizing photo of the final dish that would work as the main featured image. This should be the most visually appealing and make people want to try the recipe.
2. **Process/Ingredients Image**: A beautiful shot showing key ingredients arranged artfully OR a step in the cooking process that's visually interesting (e.g., mixing, chopping, ingredients laid out).
3. **Context/Serving Image**: A lifestyle shot showing the dish in context - either being served, on a table setting, or in a way that shows how it would be enjoyed.

Make each prompt highly descriptive, specific to this recipe, and focused on creating images that enhance the blog post story. Avoid generic prompts - be specific about the dish, ingredients, and context.

Return a JSON object with this structure:
{
  "title": "SEO-optimized blog post title (60-70 characters)",
  "excerpt": "Compelling excerpt (150-160 characters for meta description)",
  "content": "Full blog post content in HTML format (use <p>, <h2>, <h3>, <ul>, <li> tags)",
  "metaTitle": "SEO meta title (50-60 characters)",
  "metaDescription": "SEO meta description (150-160 characters)",
  "metaKeywords": "Comma-separated SEO keywords",
  "imagePrompts": ["hero image prompt", "process/ingredients image prompt", "context/serving image prompt"]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are Noah, a warm, authentic vegan chef who writes engaging, SEO-optimized blog posts. Always return valid JSON.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    let blogData;
    try {
      blogData = JSON.parse(content);
    } catch (e) {
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/);
      if (jsonMatch) {
        blogData = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('Failed to parse blog post JSON');
      }
    }

    return {
      title: blogData.title || `Delicious Vegan ${recipe.title}`,
      excerpt: blogData.excerpt || recipe.description,
      content: blogData.content || '',
      metaTitle: blogData.metaTitle || blogData.title,
      metaDescription: blogData.metaDescription || blogData.excerpt,
      metaKeywords: blogData.metaKeywords || tags,
      imagePrompts: blogData.imagePrompts || [],
    };
  } catch (error: any) {
    throw new Error(`Failed to generate blog post: ${error.message}`);
  }
}

/**
 * Generate blog post images - maximum 3 meaningful, contextual images
 */
async function generateBlogImages(
  replicate: Replicate,
  logger: Logger,
  imagePrompts: string[],
  recipeTitle: string
): Promise<string[]> {
  const imageUrls: string[] = [];
  
  // Limit to maximum 3 images and ensure we have meaningful prompts
  const maxImages = 3;
  const promptsToUse = imagePrompts.slice(0, maxImages);
  
  // Image type labels for better logging
  const imageTypes = ['Hero/Featured', 'Process/Ingredients', 'Context/Serving'];

  if (promptsToUse.length === 0) {
    logger.warn('   ⚠️  No image prompts provided, skipping image generation');
    return imageUrls;
  }

  logger.log(`   📸 Generating ${promptsToUse.length} meaningful blog post image(s)...`);

  for (let i = 0; i < promptsToUse.length; i++) {
    const prompt = promptsToUse[i];
    const imageType = imageTypes[i] || `Image ${i + 1}`;
    const filename = `${generateSlug(recipeTitle)}-blog-${imageType.toLowerCase().replace(/\//g, '-')}-${Date.now()}.webp`;

    try {
      // Add delay between requests to respect rate limits (6 requests per minute = 10 seconds between requests)
      // Wait 11 seconds to be safe (only after the first image)
      if (i > 0) {
        const delay = 11000; // 11 seconds
        logger.log(`   ⏳ Waiting ${delay / 1000} seconds to respect rate limits...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }

      logger.log(`   🖼️  Generating ${imageType} image (${i + 1}/${promptsToUse.length}): ${prompt.substring(0, 60)}...`);
      const imageUrl = await generateBlogImage(replicate, prompt, filename);
      imageUrls.push(imageUrl);
      logger.success(`   ✅ ${imageType} image saved: ${imageUrl}`);
    } catch (error: any) {
      logger.warn(`   ⚠️  Failed to generate ${imageType} image: ${error.message}`);
      // Continue with other images even if one fails
    }
  }

  return imageUrls;
}

/**
 * Create blog post in database
 */
async function createBlogPost(
  prisma: any,
  logger: Logger,
  recipe: any,
  blogData: {
    title: string;
    excerpt: string;
    content: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
  },
  images: string[]
): Promise<void> {
  const slug = generateSlug(blogData.title);

  // Check if blog post already exists (by slug)
  const existing = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (existing) {
    logger.warn(`   ⚠️  Blog post with slug "${slug}" already exists. Skipping.`);
    return;
  }

  // Also check if this recipe already has a blog post (by recipe slug in relatedRecipeIds)
  const existingRecipeBlogPost = await prisma.blogPost.findFirst({
    where: {
      relatedRecipeIds: {
        has: recipe.slug,
      },
    },
  });

  if (existingRecipeBlogPost) {
    logger.warn(`   ⚠️  Recipe "${recipe.title}" (slug: ${recipe.slug}) already has a blog post. Skipping.`);
    return;
  }

  // Create blog post
  const blogPost = await prisma.blogPost.create({
    data: {
      title: blogData.title,
      slug,
      excerpt: blogData.excerpt,
      content: blogData.content,
      featuredImage: images[0] || recipe.image,
      author: 'Noah',
      published: true,
      datePublished: new Date(),
      metaTitle: blogData.metaTitle,
      metaDescription: blogData.metaDescription,
      metaKeywords: blogData.metaKeywords,
      ogImage: images[0] || recipe.image,
      relatedRecipeIds: [recipe.slug], // Store slug for easier lookup
      images: {
        create: images.map((url, index) => ({
          url,
          alt: `Image ${index + 1} for ${blogData.title}`,
          orderIndex: index,
        })),
      },
    },
  });

  logger.success(`   ✅ Blog post created: "${blogData.title}" (slug: ${slug})`);
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  const logger = new Logger('Blog Post Generator', 'generate-blog');

  // Parse arguments
  let category: string | undefined;
  let title: string | undefined;
  let keyword: string | undefined;
  let count = 1;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--category' && args[i + 1]) {
      category = args[i + 1].trim();
      i++;
    } else if (args[i] === '--title' && args[i + 1]) {
      title = args[i + 1].trim();
      i++;
    } else if (args[i] === '--keyword' && args[i + 1]) {
      keyword = args[i + 1].trim();
      i++;
    } else if (args[i] === '--count' && args[i + 1]) {
      count = parseInt(args[i + 1], 10);
      if (isNaN(count) || count <= 0) {
        logger.error('--count must be a positive number');
        process.exit(1);
      }
      i++;
    }
  }

  if (!category && !title && !keyword) {
    logger.error('Error: Must provide --category, --title, or --keyword');
    logger.log('\n📖 Usage:');
    logger.log('  npm run generate-blog -- --category dinner');
    logger.log('  npm run generate-blog -- --title "Vegan Lasagna"');
    logger.log('  npm run generate-blog -- --keyword "pasta"');
    logger.log('  npm run generate-blog -- --category dinner --count 5');
    process.exit(1);
  }

  logger.log('\n📝 Blog Post Generator');
  logger.separator();
  if (category) logger.log(`Category: ${category}`);
  if (title) logger.log(`Title: ${title}`);
  if (keyword) logger.log(`Keyword: ${keyword}`);
  logger.log(`Count: ${count}`);
  logger.log('');

  try {
    const prisma = getPrismaClient();
    const openai = getOpenAIClient();
    const replicate = getReplicateClient();

    await prisma.$connect();
    logger.success('Database connection established\n');

    // Get all existing blog posts to find which recipes already have blog posts
    logger.log('🔍 Checking for existing blog posts...');
    const existingBlogPosts = await prisma.blogPost.findMany({
      select: {
        relatedRecipeIds: true,
      },
    });

    // Extract all recipe slugs that already have blog posts
    const recipesWithBlogPosts = new Set<string>();
    existingBlogPosts.forEach(blogPost => {
      if (blogPost.relatedRecipeIds && Array.isArray(blogPost.relatedRecipeIds)) {
        blogPost.relatedRecipeIds.forEach(slug => {
          if (typeof slug === 'string') {
            recipesWithBlogPosts.add(slug);
          }
        });
      }
    });

    logger.log(`   Found ${recipesWithBlogPosts.size} recipe(s) that already have blog posts`);

    // Find recipes
    logger.log('🔍 Finding recipes...');
    const where: any = {};
    if (title) {
      where.title = { contains: title, mode: 'insensitive' };
    } else if (category) {
      where.categories = {
        some: {
          category: category.toLowerCase(),
        },
      };
    } else if (keyword) {
      where.OR = [
        { title: { contains: keyword, mode: 'insensitive' } },
        { description: { contains: keyword, mode: 'insensitive' } },
        { tags: { some: { tag: { contains: keyword, mode: 'insensitive' } } } },
      ];
    }

    // Exclude recipes that already have blog posts
    if (recipesWithBlogPosts.size > 0) {
      where.slug = {
        notIn: Array.from(recipesWithBlogPosts),
      };
    }

    // Build include for recipe relations
    const include = {
      ingredients: { orderBy: { orderIndex: 'asc' } },
      instructions: { orderBy: { step: 'asc' } },
      categories: true,
      tags: true,
    };

    const recipes = await prisma.recipe.findMany({
      where,
      include,
      take: count,
      orderBy: { datePublished: 'desc' },
    });

    if (recipes.length === 0) {
      logger.warn('No recipes found matching criteria.');
      if (recipesWithBlogPosts.size > 0) {
        logger.warn(`   Note: ${recipesWithBlogPosts.size} recipe(s) already have blog posts and were excluded.`);
      }
      process.exit(0);
    }

    logger.success(`Found ${recipes.length} recipe(s) without existing blog posts\n`);

    // Generate blog posts
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      logger.log(`[${i + 1}/${recipes.length}] Generating blog post for: "${recipe.title}"`);

      try {
        // Generate blog content
        logger.log('   📝 Generating blog post content...');
        const blogData = await generateBlogPostContent(openai, recipe, logger);

        // Generate images
        logger.log('   🖼️  Generating blog post images...');
        const images = await generateBlogImages(replicate, logger, blogData.imagePrompts, recipe.title);

        // Create blog post
        logger.log('   💾 Saving blog post to database...');
        await createBlogPost(prisma, logger, recipe, blogData, images);

        logger.success(`   ✅ Blog post created successfully!\n`);
      } catch (error: any) {
        logger.error(`Failed to create blog post: ${error.message}`, error);
      }
    }

    logger.log('✅ Blog post generation complete!');
  } catch (error: any) {
    logger.error(`Error: ${error.message}`, error);
    process.exit(1);
  } finally {
    const prisma = getPrismaClient();
    if (prisma) {
      await prisma.$disconnect();
    }
    logger.close();
  }
}

if (require.main === module) {
  main();
}

export { main as generateBlogPost };

