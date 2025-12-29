import { Recipe } from '@/types/recipe';
// Import original recipes from a separate file to avoid circular dependency
import { originalRecipes } from './originalRecipesData';
import { bakingRecipes } from './baking';
import { savoryRecipes } from './savory';
import { ethnicRecipes } from './ethnic';
import { breakfastRecipes } from './breakfast';
import { lunchRecipes } from './lunch';
import { dinnerRecipes } from './dinner';
import { dessertRecipes } from './dessert';
import { snackRecipes } from './snack';
import { beverageRecipes } from './beverage';

// Combine all recipes: Only include recipes with accurate, detailed ingredients and instructions
// The 250 generated recipes were removed as they contained placeholder data
// New recipes should be added individually with proper ingredients and instructions
export const allRecipes: Recipe[] = [
  ...originalRecipes, // Original 8 recipes (IDs 1-8) - these have accurate, detailed recipes
  // ...all250Recipes, // REMOVED: These contained placeholder ingredients/instructions
  ...bakingRecipes,
  ...savoryRecipes,
  ...ethnicRecipes,
  ...breakfastRecipes,
  ...lunchRecipes,
  ...dinnerRecipes,
  ...dessertRecipes,
  ...snackRecipes,
  ...beverageRecipes,
];

// Helper functions to query recipes
export function getRecipesByCategory(category: string): Recipe[] {
  return allRecipes.filter(recipe => recipe.category.includes(category as any));
}

export function getRecipesByVeganType(veganType: string): Recipe[] {
  return allRecipes.filter(recipe => recipe.veganType.includes(veganType as any));
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find(recipe => recipe.slug === slug);
}

export function getAllRecipes(): Recipe[] {
  return allRecipes;
}

export function getRecipesByTag(tag: string): Recipe[] {
  return allRecipes.filter(recipe => recipe.tags.includes(tag.toLowerCase()));
}

// Export individual category arrays for specific use cases
export {
  bakingRecipes,
  savoryRecipes,
  ethnicRecipes,
  breakfastRecipes,
  lunchRecipes,
  dinnerRecipes,
  dessertRecipes,
  snackRecipes,
  beverageRecipes,
};

