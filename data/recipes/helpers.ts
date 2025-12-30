/**
 * Helper functions to handle sync/async recipe functions
 * These functions normalize the return type to always be async
 */

import { Recipe } from '@/types/recipe';
import { getAllRecipes, getRecipeBySlug, getRecipesByCategory, getRecipesByVeganType, getRecipesByTag } from './index';

/**
 * Get all recipes (always returns Promise)
 */
export async function getAllRecipesAsync(): Promise<Recipe[]> {
  const result = getAllRecipes();
  return Array.isArray(result) ? Promise.resolve(result) : result;
}

/**
 * Get recipe by slug (always returns Promise)
 */
export async function getRecipeBySlugAsync(slug: string): Promise<Recipe | undefined> {
  const result = getRecipeBySlug(slug);
  return result instanceof Promise ? result : Promise.resolve(result);
}

/**
 * Get recipes by category (always returns Promise)
 */
export async function getRecipesByCategoryAsync(category: string): Promise<Recipe[]> {
  const result = getRecipesByCategory(category);
  return Array.isArray(result) ? Promise.resolve(result) : result;
}

/**
 * Get recipes by vegan type (always returns Promise)
 */
export async function getRecipesByVeganTypeAsync(veganType: string): Promise<Recipe[]> {
  const result = getRecipesByVeganType(veganType);
  return Array.isArray(result) ? Promise.resolve(result) : result;
}

/**
 * Get recipes by tag (always returns Promise)
 */
export async function getRecipesByTagAsync(tag: string): Promise<Recipe[]> {
  const result = getRecipesByTag(tag);
  return Array.isArray(result) ? Promise.resolve(result) : result;
}



