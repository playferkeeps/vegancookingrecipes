import { MetadataRoute } from 'next';
import { getAllRecipesAsync } from '@/data/recipes/helpers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vegancooking.recipes';
  const recipes = await getAllRecipesAsync();

  const recipeUrls = recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.slug}`,
    lastModified: recipe.dateModified || recipe.datePublished,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Get unique categories for category pages
  const categories = Array.from(new Set(recipes.flatMap(r => r.category)));
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
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
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    },
    ...categoryUrls,
    ...recipeUrls,
  ];
}

