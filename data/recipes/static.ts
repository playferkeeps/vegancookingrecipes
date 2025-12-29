/**
 * Static file-based recipe data access (fallback)
 * This maintains backward compatibility with the existing static file approach
 */

import { Recipe } from '@/types/recipe';
import { originalRecipes } from './originalRecipesData';
import { bakingRecipes } from './baking';
import { savoryRecipes } from './savory';
import { internationalRecipes } from './international';
import { breakfastRecipes } from './breakfast';
import { lunchRecipes } from './lunch';
import { dinnerRecipes } from './dinner';
import { dessertRecipes } from './dessert';
import { snackRecipes } from './snack';
import { beverageRecipes } from './beverage';

// Combine all recipes
export const allRecipes: Recipe[] = [
  ...originalRecipes,
  ...bakingRecipes,
  ...savoryRecipes,
  ...internationalRecipes,
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
  internationalRecipes,
  breakfastRecipes,
  lunchRecipes,
  dinnerRecipes,
  dessertRecipes,
  snackRecipes,
  beverageRecipes,
};


