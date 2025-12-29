/**
 * Save a recipe to Supabase using Prisma
 */

import 'dotenv/config';
import { Recipe, RecipeCategory, VeganType, Ingredient, Instruction, FAQ } from '../types/recipe';

// Use the singleton Prisma client from lib/prisma to avoid duplicate connection pools
function getPrismaClient() {
  // Import the singleton Prisma client
  const { prisma } = require('../lib/prisma');
  if (!prisma) {
    throw new Error('Prisma Client is not initialized. Check DATABASE_URL configuration.');
  }
  return prisma;
}

export async function saveRecipeToSupabase(recipe: Recipe): Promise<void> {
  const prisma = getPrismaClient();
  
  try {
    // Check if recipe already exists
    const existing = await prisma.recipe.findUnique({
      where: { slug: recipe.slug },
    });
    
    if (existing) {
      throw new Error(`Recipe with slug "${recipe.slug}" already exists`);
    }
    
    // Create recipe with all relations
    await prisma.recipe.create({
      data: {
        id: recipe.id,
        title: recipe.title,
        slug: recipe.slug,
        description: recipe.description,
        prologue: recipe.prologue,
        image: recipe.image,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        totalTime: recipe.totalTime,
        servings: recipe.servings,
        difficulty: recipe.difficulty,
        author: recipe.author,
        datePublished: new Date(recipe.datePublished),
        dateModified: recipe.dateModified ? new Date(recipe.dateModified) : undefined,
        ingredientNotes: recipe.ingredientNotes,
        tips: recipe.tips || [],
        variations: recipe.variations || [],
        storage: recipe.storage,
        // Categories
        categories: {
          create: recipe.category.map((cat: RecipeCategory) => ({ category: cat })),
        },
        // Vegan types
        veganTypes: {
          create: recipe.veganType.map((vt: VeganType) => ({ veganType: vt })),
        },
        // Ingredients
        ingredients: {
          create: recipe.ingredients.map((ing: string | Ingredient, index: number) => ({
            name: typeof ing === 'string' ? ing : ing.name,
            amount: typeof ing === 'string' ? '' : (ing.amount || ''),
            unit: typeof ing === 'string' ? undefined : ing.unit,
            notes: typeof ing === 'string' ? undefined : ing.notes,
            orderIndex: index,
          })),
        },
        // Instructions
        instructions: {
          create: recipe.instructions.map((inst: Instruction) => ({
            step: inst.step,
            text: inst.text,
            image: inst.image,
          })),
        },
        // Nutrition info
        nutritionInfo: recipe.nutritionInfo ? {
          create: {
            calories: recipe.nutritionInfo.calories,
            protein: recipe.nutritionInfo.protein,
            carbs: recipe.nutritionInfo.carbs,
            fat: recipe.nutritionInfo.fat,
            fiber: recipe.nutritionInfo.fiber,
            sugar: recipe.nutritionInfo.sugar,
          },
        } : undefined,
        // FAQs
        faqs: recipe.faqs ? {
          create: recipe.faqs.map((faq: FAQ, index: number) => ({
            question: faq.question,
            answer: faq.answer,
            orderIndex: index,
          })),
        } : undefined,
        // Tags
        tags: {
          create: recipe.tags.map((tag: string) => ({ tag })),
        },
        // Related recipes (will be linked separately if needed)
        relatedRecipes: {
          create: [],
        },
      },
    });
    
    // Link related recipes if they exist
    if (recipe.relatedRecipeIds && recipe.relatedRecipeIds.length > 0) {
      const relatedRecipes = await prisma.recipe.findMany({
        where: {
          id: { in: recipe.relatedRecipeIds },
        },
        select: { id: true },
      });
      
      if (relatedRecipes.length > 0) {
        await prisma.relatedRecipe.createMany({
          data: relatedRecipes.map((related: { id: string }) => ({
            recipeId: recipe.id,
            relatedId: related.id,
          })),
          skipDuplicates: true,
        });
      }
    }
    
    console.log(`✅ Saved recipe "${recipe.title}" to Supabase`);
  } catch (error: any) {
    throw new Error(`Failed to save recipe to Supabase: ${error.message}`);
  }
}

export async function checkRecipeExistsInSupabase(slug: string): Promise<boolean> {
  try {
    const prisma = getPrismaClient();
    const existing = await prisma.recipe.findUnique({
      where: { slug },
      select: { id: true },
    });
    return !!existing;
  } catch (error) {
    return false;
  }
}

export async function getAllRecipeSlugsFromSupabase(): Promise<Set<string>> {
  try {
    const prisma = getPrismaClient();
    const recipes = await prisma.recipe.findMany({
      select: { slug: true, title: true },
    });
    return new Set(recipes.map(r => r.slug));
  } catch (error) {
    return new Set();
  }
}

export async function getAllRecipeTitlesFromSupabase(): Promise<Set<string>> {
  try {
    const prisma = getPrismaClient();
    const recipes = await prisma.recipe.findMany({
      select: { title: true },
    });
    return new Set(recipes.map(r => r.title.toLowerCase().trim()));
  } catch (error) {
    return new Set();
  }
}


