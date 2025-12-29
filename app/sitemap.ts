import { MetadataRoute } from 'next';
import { getAllRecipes } from '@/data/recipes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vegancooking.recipes';
  const recipes = getAllRecipes();

  const recipeUrls = recipes.map((recipe) => ({
    url: `${baseUrl}/recipes/${recipe.slug}`,
    lastModified: recipe.dateModified || recipe.datePublished,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/recipes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...recipeUrls,
  ];
}

