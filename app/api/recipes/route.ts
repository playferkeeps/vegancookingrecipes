import { NextResponse } from 'next/server';
import { getAllRecipesAsync, getRecipesByCategoryAsync } from '@/data/recipes/helpers';
import { RecipeCategory, VeganType, Recipe } from '@/types/recipe';

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') as RecipeCategory | null;
  const veganType = searchParams.get('veganType') as VeganType | null;

  let recipes = await getAllRecipesAsync();

  if (category) {
    recipes = await getRecipesByCategoryAsync(category);
  }

  if (veganType) {
    recipes = recipes.filter((recipe) => recipe.veganType.includes(veganType));
  }

  // Shuffle recipes for random display
  const shuffledRecipes = shuffleArray(recipes);

  return NextResponse.json({ recipes: shuffledRecipes, count: shuffledRecipes.length });
}

