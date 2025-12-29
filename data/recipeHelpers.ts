import { Recipe, RecipeCategory, VeganType } from '@/types/recipe';

/**
 * Helper function to create a recipe with default values
 */
export function createRecipe(recipe: Partial<Recipe> & {
  id: string;
  title: string;
  slug: string;
  description: string;
  prologue: string;
  image: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: RecipeCategory[];
  veganType: VeganType[];
  ingredients: Recipe['ingredients'];
  instructions: Recipe['instructions'];
  tags: string[];
}): Recipe {
  return {
    author: 'vegancooking.recipes',
    datePublished: new Date().toISOString().split('T')[0],
    ...recipe,
  };
}

/**
 * Generate a slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Get placeholder image URL - using a simple data URI placeholder
 * Images should be added per recipe when actual photos are available
 */
export function getImageUrl(category: RecipeCategory): string {
  // Return a simple placeholder - actual recipe images should be added individually
  // Using a 1x1 transparent pixel as placeholder
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';
}

