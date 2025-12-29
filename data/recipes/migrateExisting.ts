/**
 * Migration script to move existing recipes to new modular structure
 * This preserves the existing 8 recipes
 */

import { Recipe } from '@/types/recipe';
import { generateSlug, getImageUrl } from '../recipeHelpers';
import { createRecipe } from '../recipeHelpers';

// This file contains the existing 8 recipes migrated to use the new structure
// They'll be split into appropriate category files

export const existingRecipes: Recipe[] = [
  // Will be populated from recipes.ts
];

