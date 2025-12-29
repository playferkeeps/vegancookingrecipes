/**
 * This file contains all 250 recipes
 * Recipes are organized and can be split into category files for better organization
 */

import { Recipe } from '@/types/recipe';
import { generateRecipe } from './recipeGenerator';
import { RecipeCategory, VeganType } from '@/types/recipe';

// Import existing recipes (will be migrated)
// For now, we'll create them here and then organize into category files

// Recipe ID counter - starts after existing 8 recipes
let recipeId = 9;

// Helper to create recipe with auto-incrementing ID
function createRecipeWithId(template: Parameters<typeof generateRecipe>[0]): Recipe {
  // The generator handles ID, but we need to ensure uniqueness
  // For now, recipes will be generated with sequential IDs
  return generateRecipe(template);
}

// This file will contain all 250 recipes
// Due to size, recipes will be generated programmatically
// For now, exporting empty array - recipes will be added in batches

export const all250Recipes: Recipe[] = [
  // Recipes will be added here
  // This is a placeholder - actual recipes will be in category files
];


