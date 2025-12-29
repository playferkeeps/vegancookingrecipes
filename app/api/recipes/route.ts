import { NextResponse } from 'next/server';
import { getAllRecipesAsync, getRecipesByCategoryAsync } from '@/data/recipes/helpers';
import { RecipeCategory, VeganType } from '@/types/recipe';

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

  return NextResponse.json({ recipes, count: recipes.length });
}

