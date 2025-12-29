import { Recipe } from '@/types/recipe';
import { all250Recipes } from './all250Recipes';
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

// Combine all recipes: existing 8 + generated 250 = 258 total
// For now, using the generated 250 recipes
// Existing recipes can be added back when migrated
export const allRecipes: Recipe[] = [
  ...originalRecipes, // Original 8 recipes (IDs 1-8)
  ...all250Recipes, // 250 new recipes (IDs 9-258)
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

