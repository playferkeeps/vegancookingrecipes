/**
 * Supabase data access layer for recipes
 * This replaces the static file-based approach with database queries
 * 
 * IMPORTANT: Prisma can only be used server-side. This module should only be imported
 * in server components or API routes, never in client components.
 */

import { Recipe, Ingredient, Instruction, NutritionInfo, FAQ } from '@/types/recipe';

// Lazy load Prisma to avoid client-side imports
let prisma: any = null;
let tablesChecked = false;
let tablesExist = false;

async function checkTablesExist(): Promise<boolean> {
  if (tablesChecked) {
    return tablesExist;
  }
  
  // Don't check if DATABASE_URL is not set
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.trim() === '') {
    tablesChecked = true;
    tablesExist = false;
    return false;
  }
  
  // During build, if SKIP_DB_CHECK is set, assume tables don't exist
  // This prevents Prisma errors during build when migrations haven't been run
  if (process.env.SKIP_DB_CHECK === 'true') {
    tablesChecked = true;
    tablesExist = false;
    return false;
  }
  
  try {
    const prismaClient = getPrisma();
    if (!prismaClient) {
      tablesChecked = true;
      tablesExist = false;
      return false;
    }
    
    // Try a simple query to check if tables exist
    // Use findFirst with a limit 1 query which is less likely to error
    await prismaClient.recipe.findFirst({ take: 1 });
    tablesChecked = true;
    tablesExist = true;
    return true;
  } catch (error: any) {
    // P2021 = table does not exist
    // Any error means tables likely don't exist or connection failed
    tablesChecked = true;
    tablesExist = false;
    // Silently return false - don't log during build
    if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PHASE) {
      // Only log in dev mode, not during build
      if (error?.code !== 'P2021') {
        console.warn('Database check failed, falling back to static files:', error?.code || error?.message);
      }
    }
    return false;
  }
}

function getPrisma() {
  if (typeof window !== 'undefined') {
    throw new Error('Prisma cannot be used in client components. Use API routes or server components instead.');
  }
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set. Cannot use Prisma Client.');
  }
  if (!prisma) {
    // Dynamic import to avoid bundling Prisma in client
    const { prisma: prismaClient } = require('@/lib/prisma');
    if (!prismaClient) {
      throw new Error('Prisma Client is not initialized. Check DATABASE_URL configuration.');
    }
    prisma = prismaClient;
  }
  return prisma;
}

/**
 * Convert Prisma recipe to Recipe type
 */
function prismaToRecipe(prismaRecipe: any): Recipe {
  return {
    id: prismaRecipe.id,
    title: prismaRecipe.title,
    slug: prismaRecipe.slug,
    description: prismaRecipe.description,
    prologue: prismaRecipe.prologue,
    image: prismaRecipe.image,
    prepTime: prismaRecipe.prepTime,
    cookTime: prismaRecipe.cookTime,
    totalTime: prismaRecipe.totalTime,
    servings: prismaRecipe.servings,
    difficulty: prismaRecipe.difficulty as 'easy' | 'medium' | 'hard',
    category: prismaRecipe.categories.map((c: any) => c.category) as any[],
    veganType: prismaRecipe.veganTypes.map((vt: any) => vt.veganType) as any[],
    ingredients: prismaRecipe.ingredients
      .sort((a: any, b: any) => a.orderIndex - b.orderIndex)
      .map((ing: any): Ingredient => ({
        name: ing.name,
        amount: ing.amount,
        unit: ing.unit || undefined,
        notes: ing.notes || undefined,
      })),
    instructions: prismaRecipe.instructions
      .sort((a: any, b: any) => a.step - b.step)
      .map((inst: any): Instruction => ({
        step: inst.step,
        text: inst.text,
        image: inst.image || undefined,
      })),
    nutritionInfo: prismaRecipe.nutritionInfo ? {
      calories: prismaRecipe.nutritionInfo.calories || undefined,
      protein: prismaRecipe.nutritionInfo.protein || undefined,
      carbs: prismaRecipe.nutritionInfo.carbs || undefined,
      fat: prismaRecipe.nutritionInfo.fat || undefined,
      fiber: prismaRecipe.nutritionInfo.fiber || undefined,
      sugar: prismaRecipe.nutritionInfo.sugar || undefined,
    } as NutritionInfo : undefined,
    tags: prismaRecipe.tags.map((t: any) => t.tag),
    author: prismaRecipe.author,
    datePublished: prismaRecipe.datePublished.toISOString().split('T')[0],
    dateModified: prismaRecipe.dateModified?.toISOString().split('T')[0],
    ingredientNotes: prismaRecipe.ingredientNotes || undefined,
    faqs: prismaRecipe.faqs
      .sort((a: any, b: any) => a.orderIndex - b.orderIndex)
      .map((faq: any): FAQ => ({
        question: faq.question,
        answer: faq.answer,
      })),
    tips: prismaRecipe.tips || [],
    variations: prismaRecipe.variations || [],
    storage: prismaRecipe.storage || undefined,
    relatedRecipeIds: prismaRecipe.relatedRecipes.map((r: any) => r.relatedId),
  };
}

/**
 * Get all recipes with caching
 */
let recipesCache: Recipe[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function getAllRecipesFromDB(): Promise<Recipe[]> {
  const now = Date.now();
  
  // Return cached data if still valid
  if (recipesCache && (now - cacheTimestamp) < CACHE_TTL) {
    return recipesCache;
  }
  
  // Check if tables exist before trying to query
  const tablesExist = await checkTablesExist();
  if (!tablesExist) {
    // Tables don't exist - return empty array (will fall back to static files)
    return [];
  }
  
  try {
    const prisma = getPrisma();
    const prismaRecipes = await prisma.recipe.findMany({
      include: {
        categories: true,
        veganTypes: true,
        ingredients: {
          orderBy: { orderIndex: 'asc' },
        },
        instructions: {
          orderBy: { step: 'asc' },
        },
        nutritionInfo: true,
        faqs: {
          orderBy: { orderIndex: 'asc' },
        },
        tags: true,
        relatedRecipes: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
    });
    
    const recipes = prismaRecipes.map(prismaToRecipe);
    recipesCache = recipes;
    cacheTimestamp = now;
    
    return recipes;
  } catch (error: any) {
    // If tables don't exist (P2021) or connection fails, fall back gracefully
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Database tables do not exist yet. Run migrations with: npm run db:migrate');
      }
    } else {
      console.error('Error fetching recipes from database:', error);
    }
    // Clear cache on error and return empty array (will fall back to static files)
    recipesCache = null;
    cacheTimestamp = 0;
    return [];
  }
}

/**
 * Get recipe by slug
 */
export async function getRecipeBySlugFromDB(slug: string): Promise<Recipe | undefined> {
  // Check if tables exist before trying to query
  const tablesExist = await checkTablesExist();
  if (!tablesExist) {
    return undefined; // Will fall back to static files
  }
  
  try {
    const prisma = getPrisma();
    const prismaRecipe = await prisma.recipe.findUnique({
      where: { slug },
      include: {
        categories: true,
        veganTypes: true,
        ingredients: {
          orderBy: { orderIndex: 'asc' },
        },
        instructions: {
          orderBy: { step: 'asc' },
        },
        nutritionInfo: true,
        faqs: {
          orderBy: { orderIndex: 'asc' },
        },
        tags: true,
        relatedRecipes: true,
      },
    });
    
    if (!prismaRecipe) {
      return undefined;
    }
    
    return prismaToRecipe(prismaRecipe);
  } catch (error) {
    console.error(`Error fetching recipe by slug "${slug}":`, error);
    return undefined;
  }
}

/**
 * Get recipes by category
 */
export async function getRecipesByCategoryFromDB(category: string): Promise<Recipe[]> {
  try {
    const prisma = getPrisma();
    const prismaRecipes = await prisma.recipe.findMany({
      where: {
        categories: {
          some: {
            category: category,
          },
        },
      },
      include: {
        categories: true,
        veganTypes: true,
        ingredients: {
          orderBy: { orderIndex: 'asc' },
        },
        instructions: {
          orderBy: { step: 'asc' },
        },
        nutritionInfo: true,
        faqs: {
          orderBy: { orderIndex: 'asc' },
        },
        tags: true,
        relatedRecipes: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
    });
    
    return prismaRecipes.map(prismaToRecipe);
  } catch (error) {
    console.error(`Error fetching recipes by category "${category}":`, error);
    return [];
  }
}

/**
 * Get recipes by vegan type
 */
export async function getRecipesByVeganTypeFromDB(veganType: string): Promise<Recipe[]> {
  try {
    const prisma = getPrisma();
    const prismaRecipes = await prisma.recipe.findMany({
      where: {
        veganTypes: {
          some: {
            veganType: veganType,
          },
        },
      },
      include: {
        categories: true,
        veganTypes: true,
        ingredients: {
          orderBy: { orderIndex: 'asc' },
        },
        instructions: {
          orderBy: { step: 'asc' },
        },
        nutritionInfo: true,
        faqs: {
          orderBy: { orderIndex: 'asc' },
        },
        tags: true,
        relatedRecipes: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
    });
    
    return prismaRecipes.map(prismaToRecipe);
  } catch (error) {
    console.error(`Error fetching recipes by vegan type "${veganType}":`, error);
    return [];
  }
}

/**
 * Get recipes by tag
 */
export async function getRecipesByTagFromDB(tag: string): Promise<Recipe[]> {
  try {
    const prisma = getPrisma();
    const prismaRecipes = await prisma.recipe.findMany({
      where: {
        tags: {
          some: {
            tag: {
              equals: tag,
              mode: 'insensitive',
            },
          },
        },
      },
      include: {
        categories: true,
        veganTypes: true,
        ingredients: {
          orderBy: { orderIndex: 'asc' },
        },
        instructions: {
          orderBy: { step: 'asc' },
        },
        nutritionInfo: true,
        faqs: {
          orderBy: { orderIndex: 'asc' },
        },
        tags: true,
        relatedRecipes: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
    });
    
    return prismaRecipes.map(prismaToRecipe);
  } catch (error) {
    console.error(`Error fetching recipes by tag "${tag}":`, error);
    return [];
  }
}

/**
 * Clear the recipes cache (useful after adding new recipes)
 */
export function clearRecipesCache(): void {
  recipesCache = null;
  cacheTimestamp = 0;
}

