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
 * Get random image URL for a category
 */
export function getImageUrl(category: RecipeCategory): string {
  const imageMap: Record<RecipeCategory, string[]> = {
    baking: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800',
      'https://images.unsplash.com/photo-1587132137056-bfbf0166836f?w=800',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
    ],
    savory: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    ],
    ethnic: [
      'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
      'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    ],
    breakfast: [
      'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
      'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?w=800',
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800',
    ],
    lunch: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    ],
    dinner: [
      'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800',
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    ],
    dessert: [
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800',
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
    ],
    snack: [
      'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800',
      'https://images.unsplash.com/photo-1504113888839-1c8eb50233d9?w=800',
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800',
    ],
    beverage: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
      'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800',
      'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800',
    ],
  };
  
  const images = imageMap[category] || imageMap.savory;
  return images[Math.floor(Math.random() * images.length)];
}

