/**
 * Recipe data access layer
 * Uses Supabase when available, falls back to static files for 100% functionality parity
 * 
 * IMPORTANT: For backward compatibility, these functions work both sync and async:
 * - If Supabase is configured, they return Promises
 * - If not, they return values directly (synchronous)
 * 
 * In Next.js App Router, always use await when calling these functions.
 */

import { Recipe } from '@/types/recipe';
import * as staticRecipes from './static';

// Check if Supabase is configured
// Use Supabase JS client (HTTP/REST) - no connection pooling issues!
// Works in both client and server components
const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build' || 
                     process.env.NEXT_PHASE === 'phase-development-build';
const USE_SUPABASE = !isBuildPhase &&
                     process.env.NEXT_PUBLIC_SUPABASE_URL &&
                     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
                     process.env.SKIP_DB_CHECK !== 'true';

// Lazy load Supabase functions only on server-side
let supabaseRecipes: any = null;
function getSupabaseRecipes() {
  if (typeof window !== 'undefined') {
    return null; // Never use Supabase on client
  }
  if (!supabaseRecipes) {
    supabaseRecipes = require('./supabase');
  }
  return supabaseRecipes;
}

/**
 * Get all recipes
 * Returns Promise<Recipe[]> if Supabase is configured, Recipe[] otherwise
 */
export function getAllRecipes(): Promise<Recipe[]> | Recipe[] {
  if (USE_SUPABASE) {
    const supabase = getSupabaseRecipes();
    if (supabase) {
      return supabase.getAllRecipesFromDB();
    }
  }
  return staticRecipes.getAllRecipes();
}

/**
 * Get recipe by slug
 * Returns Promise<Recipe | undefined> if Supabase is configured, Recipe | undefined otherwise
 */
export function getRecipeBySlug(slug: string): Promise<Recipe | undefined> | Recipe | undefined {
  if (USE_SUPABASE) {
    const supabase = getSupabaseRecipes();
    if (supabase) {
      return supabase.getRecipeBySlugFromDB(slug);
    }
  }
  return staticRecipes.getRecipeBySlug(slug);
}

/**
 * Get recipes by category
 * Returns Promise<Recipe[]> if Supabase is configured, Recipe[] otherwise
 */
export function getRecipesByCategory(category: string): Promise<Recipe[]> | Recipe[] {
  if (USE_SUPABASE) {
    const supabase = getSupabaseRecipes();
    if (supabase) {
      return supabase.getRecipesByCategoryFromDB(category);
    }
  }
  return staticRecipes.getRecipesByCategory(category);
}

/**
 * Get recipes by vegan type
 * Returns Promise<Recipe[]> if Supabase is configured, Recipe[] otherwise
 */
export function getRecipesByVeganType(veganType: string): Promise<Recipe[]> | Recipe[] {
  if (USE_SUPABASE) {
    const supabase = getSupabaseRecipes();
    if (supabase) {
      return supabase.getRecipesByVeganTypeFromDB(veganType);
    }
  }
  return staticRecipes.getRecipesByVeganType(veganType);
}

/**
 * Get recipes by tag
 * Returns Promise<Recipe[]> if Supabase is configured, Recipe[] otherwise
 */
export function getRecipesByTag(tag: string): Promise<Recipe[]> | Recipe[] {
  if (USE_SUPABASE) {
    const supabase = getSupabaseRecipes();
    if (supabase) {
      return supabase.getRecipesByTagFromDB(tag);
    }
  }
  return staticRecipes.getRecipesByTag(tag);
}

// Re-export static functions for backward compatibility
export {
  allRecipes,
  bakingRecipes,
  savoryRecipes,
  internationalRecipes,
  breakfastRecipes,
  lunchRecipes,
  dinnerRecipes,
  dessertRecipes,
  snackRecipes,
  beverageRecipes,
} from './static';
