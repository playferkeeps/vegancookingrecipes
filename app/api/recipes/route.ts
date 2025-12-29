import { NextResponse } from 'next/server';
import { getAllRecipes, getRecipesByCategory, getRecipesByVeganType } from '@/data/recipes';
import { RecipeCategory, VeganType } from '@/types/recipe';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') as RecipeCategory | null;
  const veganType = searchParams.get('veganType') as VeganType | null;

  let recipes = getAllRecipes();

  if (category) {
    recipes = getRecipesByCategory(category);
  }

  if (veganType) {
    recipes = recipes.filter((recipe) => recipe.veganType.includes(veganType));
  }

  return NextResponse.json({ recipes, count: recipes.length });
}

