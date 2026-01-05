import { MetadataRoute } from 'next';
import { getAllRecipesAsync } from '@/data/recipes/helpers';
import { getPrismaClient } from '@/lib/prisma';

// Force dynamic generation to ensure we get fresh data from database
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

async function getBlogPosts() {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      return [];
    }

    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      select: {
        slug: true,
        dateModified: true,
        datePublished: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
    });

    return posts;
  } catch (error: any) {
    console.error('Error fetching blog posts for sitemap:', error?.message || error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vegancooking.recipes';
  
  // Fetch recipes and blog posts in parallel
  const [recipes, blogPosts] = await Promise.all([
    getAllRecipesAsync(),
    getBlogPosts(),
  ]);

  console.log(`[Sitemap] Generating sitemap with ${recipes.length} recipes and ${blogPosts.length} blog posts`);

  const recipeUrls = recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.slug}`,
    lastModified: recipe.dateModified 
      ? new Date(recipe.dateModified) 
      : (recipe.datePublished ? new Date(recipe.datePublished) : new Date()),
    changeFrequency: 'weekly' as const, // Changed from monthly to weekly for better indexing
    priority: 0.9, // Increased priority for recipe pages
  }));

  // Get unique categories for category pages
  const categories = Array.from(new Set(recipes.flatMap(r => r.category)));
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Blog post URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified 
      ? new Date(post.dateModified) 
      : (post.datePublished ? new Date(post.datePublished) : new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const sitemapEntries = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/recipes`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/meal-prep`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    ...categoryUrls,
    ...recipeUrls,
    ...blogUrls,
  ];

  console.log(`[Sitemap] Generated ${sitemapEntries.length} total URLs`);

  return sitemapEntries;
}

