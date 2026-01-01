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
 * Download and save image from URL
 */
function downloadImage(url: string, filename: string): Promise<string> {
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
    const output = await replicate.run(
      'black-forest-labs/flux-schnell',
      {
        input: {
          prompt: prompt,
          aspect_ratio: '16:9',
          output_format: 'webp',
        },
      }
    );

    let imageUrl: string;
    if (Array.isArray(output) && output.length > 0) {
      imageUrl = output[0] as string;
    } else if (typeof output === 'string') {
      imageUrl = output;
    } else {
      throw new Error('Unexpected output format from Replicate');
    }

    // Download and save image
    const savedPath = await downloadImage(imageUrl, filename);
    return savedPath;
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

  const prompt = `You are Katie, a warm and authentic vegan chef who writes engaging, SEO-optimized blog posts. Create a comprehensive blog post about this vegan recipe.

Recipe: "${recipe.title}"
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
1. Is engaging and personal (written in Katie's voice - warm, authentic, conversational)
2. Is SEO-optimized with relevant keywords naturally integrated
3. Tells a story about the recipe (why it's special, when to make it, etc.)
4. Includes helpful tips and variations
5. Is 800-1200 words long
6. Has a compelling introduction that hooks the reader
7. Includes sections on ingredients, preparation tips, serving suggestions
8. Has a strong conclusion that encourages readers to try the recipe

Also suggest 3-5 image prompts for blog post images (ingredients, cooking process, final dish, etc.). Make them descriptive and appetizing.

Return a JSON object with this structure:
{
  "title": "SEO-optimized blog post title (60-70 characters)",
  "excerpt": "Compelling excerpt (150-160 characters for meta description)",
  "content": "Full blog post content in HTML format (use <p>, <h2>, <h3>, <ul>, <li> tags)",
  "metaTitle": "SEO meta title (50-60 characters)",
  "metaDescription": "SEO meta description (150-160 characters)",
  "metaKeywords": "Comma-separated SEO keywords",
  "imagePrompts": ["prompt 1", "prompt 2", "prompt 3", "prompt 4", "prompt 5"]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are Katie, a warm, authentic vegan chef who writes engaging, SEO-optimized blog posts. Always return valid JSON.',
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
 * Generate blog post images
 */
async function generateBlogImages(
  replicate: Replicate,
  logger: Logger,
  imagePrompts: string[],
  recipeTitle: string
): Promise<string[]> {
  const imageUrls: string[] = [];

  for (let i = 0; i < Math.min(imagePrompts.length, 5); i++) {
    const prompt = imagePrompts[i];
    const filename = `${generateSlug(recipeTitle)}-blog-${i + 1}-${Date.now()}.webp`;

    try {
      logger.log(`   🖼️  Generating image ${i + 1}/${Math.min(imagePrompts.length, 5)}: ${prompt.substring(0, 50)}...`);
      const imageUrl = await generateBlogImage(replicate, prompt, filename);
      imageUrls.push(imageUrl);
      logger.success(`   ✅ Image ${i + 1} saved: ${imageUrl}`);
    } catch (error: any) {
      logger.warn(`   ⚠️  Failed to generate image ${i + 1}: ${error.message}`);
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

  // Check if blog post already exists
  const existing = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (existing) {
    logger.warn(`   ⚠️  Blog post with slug "${slug}" already exists. Skipping.`);
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
      author: 'Katie',
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
      process.exit(0);
    }

    logger.success(`Found ${recipes.length} recipe(s)\n`);

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

