/**
 * Supabase data access layer for recipes
 * Uses Supabase JS client (HTTP/REST) instead of Prisma to avoid connection pooling issues
 * 
 * This is much more efficient - no connection limits, built-in caching, works everywhere
 */

import { Recipe, Ingredient, Instruction, NutritionInfo, FAQ } from '@/types/recipe';
import { supabase } from '@/lib/supabase';

// Aggressive caching to minimize database queries
let recipesCache: Recipe[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes cache

let tablesChecked = false;
let tablesExist = false;

async function checkTablesExist(): Promise<boolean> {
  if (tablesChecked) {
    return tablesExist;
  }
  
  if (!supabase) {
    tablesChecked = true;
    tablesExist = false;
    return false;
  }
  
  if (process.env.SKIP_DB_CHECK === 'true') {
    tablesChecked = true;
    tablesExist = false;
    return false;
  }
  
  try {
    // Simple query to check if tables exist
    const { error } = await supabase
      .from('Recipe')
      .select('id')
      .limit(1);
    
    if (error) {
      // PGRST116 = relation does not exist
      if (error.code === 'PGRST116' || error.message?.includes('does not exist')) {
        tablesChecked = true;
        tablesExist = false;
        return false;
      }
      throw error;
    }
    
    tablesChecked = true;
    tablesExist = true;
    return true;
  } catch (error: any) {
    tablesChecked = true;
    tablesExist = false;
    if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PHASE) {
      console.warn('Database check failed, falling back to static files:', error?.message);
    }
    return false;
  }
}

/**
 * Convert Supabase recipe to Recipe type
 */
function supabaseToRecipe(row: any): Recipe {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description,
    prologue: row.prologue,
    image: row.image,
    prepTime: row.prepTime,
    cookTime: row.cookTime,
    totalTime: row.totalTime,
    servings: row.servings,
    difficulty: row.difficulty,
    category: row.categories?.map((c: any) => c.category) || [],
    veganType: row.veganTypes?.map((vt: any) => vt.veganType) || [],
    author: row.author,
    datePublished: row.datePublished,
    dateModified: row.dateModified,
    ingredientNotes: row.ingredientNotes,
    tips: row.tips || [],
    variations: row.variations || [],
    storage: row.storage,
    ingredients: (row.ingredients || []).map((ing: any) => ({
      name: ing.name,
      amount: ing.amount || '',
      unit: ing.unit,
      notes: ing.notes,
    })),
    instructions: (row.instructions || []).map((inst: any) => ({
      step: inst.step,
      text: inst.text,
      image: inst.image,
    })),
    nutritionInfo: row.nutritionInfo ? {
      calories: row.nutritionInfo.calories,
      protein: row.nutritionInfo.protein,
      carbs: row.nutritionInfo.carbs,
      fat: row.nutritionInfo.fat,
      fiber: row.nutritionInfo.fiber,
      sugar: row.nutritionInfo.sugar,
    } : undefined,
    faqs: (row.faqs || []).map((faq: any) => ({
      question: faq.question,
      answer: faq.answer,
    })),
    tags: (row.tags || []).map((tagRow: any) => tagRow.tag),
    relatedRecipeIds: row.relatedRecipes?.map((rr: any) => rr.relatedId) || [],
  };
}

/**
 * Get all recipes with aggressive caching
 */
export async function getAllRecipesFromDB(): Promise<Recipe[]> {
  const now = Date.now();
  
  // Return cached data if still valid
  if (recipesCache && (now - cacheTimestamp) < CACHE_TTL) {
    return recipesCache;
  }
  
  if (!supabase) {
    return [];
  }
  
  const tablesExist = await checkTablesExist();
  if (!tablesExist) {
    return [];
  }
  
  try {
    // Fetch all recipes with relations in a single optimized query
    // Supabase uses PostgREST syntax for joins
    const { data, error } = await supabase
      .from('Recipe')
      .select(`
        *,
        categories:RecipeCategory(category),
        veganTypes:RecipeVeganType(veganType),
        ingredients:Ingredient(name, amount, unit, notes, orderIndex),
        instructions:Instruction(step, text, image),
        nutritionInfo:NutritionInfo(calories, protein, carbs, fat, fiber, sugar),
        faqs:FAQ(question, answer, orderIndex),
        tags:RecipeTag(tag),
        relatedRecipes:RelatedRecipe(relatedId)
      `)
      .order('datePublished', { ascending: false })
      .limit(10000); // Get all recipes
    
    if (error) throw error;
    if (!data) return [];
    
    // Sort ingredients and instructions by order
    const recipes = data.map((row: any) => {
      if (row.ingredients) {
        row.ingredients.sort((a: any, b: any) => (a.orderIndex || 0) - (b.orderIndex || 0));
      }
      if (row.instructions) {
        row.instructions.sort((a: any, b: any) => (a.step || 0) - (b.step || 0));
      }
      if (row.faqs) {
        row.faqs.sort((a: any, b: any) => (a.orderIndex || 0) - (b.orderIndex || 0));
      }
      return supabaseToRecipe(row);
    });
    
    // Update cache
    recipesCache = recipes;
    cacheTimestamp = now;
    
    return recipes;
  } catch (error: any) {
    console.error('Error fetching recipes from database:', error);
    recipesCache = null;
    cacheTimestamp = 0;
    return [];
  }
}

/**
 * Get recipe by slug
 */
export async function getRecipeBySlugFromDB(slug: string): Promise<Recipe | undefined> {
  if (!supabase) {
    return undefined;
  }
  
  const tablesExist = await checkTablesExist();
  if (!tablesExist) {
    return undefined;
  }
  
  try {
    const { data, error } = await supabase
      .from('Recipe')
      .select(`
        *,
        categories:RecipeCategory(category),
        veganTypes:RecipeVeganType(veganType),
        ingredients:Ingredient(name, amount, unit, notes, orderIndex),
        instructions:Instruction(step, text, image),
        nutritionInfo:NutritionInfo(calories, protein, carbs, fat, fiber, sugar),
        faqs:FAQ(question, answer, orderIndex),
        tags:RecipeTag(tag),
        relatedRecipes:RelatedRecipe(relatedId)
      `)
      .eq('slug', slug)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return undefined; // Not found
      throw error;
    }
    
    if (!data) return undefined;
    
    // Sort by order
    if (data.ingredients) {
      data.ingredients.sort((a: any, b: any) => (a.orderIndex || 0) - (b.orderIndex || 0));
    }
    if (data.instructions) {
      data.instructions.sort((a: any, b: any) => (a.step || 0) - (b.step || 0));
    }
    if (data.faqs) {
      data.faqs.sort((a: any, b: any) => (a.orderIndex || 0) - (b.orderIndex || 0));
    }
    
    return supabaseToRecipe(data);
  } catch (error) {
    console.error(`Error fetching recipe by slug "${slug}":`, error);
    return undefined;
  }
}

/**
 * Get recipes by category
 */
export async function getRecipesByCategoryFromDB(category: string): Promise<Recipe[]> {
  if (!supabase) {
    return [];
  }
  
  const tablesExist = await checkTablesExist();
  if (!tablesExist) {
    return [];
  }
  
  try {
    // Use the cached all recipes if available
    const now = Date.now();
    if (recipesCache && (now - cacheTimestamp) < CACHE_TTL) {
      return recipesCache.filter(r => r.category.includes(category as any));
    }
    
    // Fetch all and filter - more efficient with caching
    // Supabase PostgREST doesn't easily filter on nested relations
    const allRecipes = await getAllRecipesFromDB();
    return allRecipes.filter(r => r.category.includes(category as any));
  } catch (error) {
    console.error(`Error fetching recipes by category "${category}":`, error);
    return [];
  }
}
