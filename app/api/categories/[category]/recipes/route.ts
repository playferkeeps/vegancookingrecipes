import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { supabaseToRecipe } from '@/data/recipes/supabase';

/**
 * GET /api/categories/[category]/recipes?offset=0&limit=3
 * Fetch recipes for a category with pagination
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const { searchParams } = new URL(request.url);
  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const limit = parseInt(searchParams.get('limit') || '2', 10);

  if (!isSupabaseConfigured() || !supabase) {
    return NextResponse.json({ recipes: [], total: 0 }, { status: 200 });
  }

  try {
    // Get all recipe IDs for this category
    const { data: categoryRows, error: categoryError } = await supabase
      .from('RecipeCategory')
      .select('recipeId')
      .eq('category', category.toLowerCase());

    if (categoryError) throw categoryError;
    if (!categoryRows || categoryRows.length === 0) {
      return NextResponse.json({ recipes: [], total: 0 });
    }

    const recipeIds = categoryRows.map((r: any) => r.recipeId).filter(Boolean);
    const total = recipeIds.length;

    // Shuffle IDs for variety, then paginate
    const shuffledIds = [...recipeIds].sort(() => Math.random() - 0.5);
    const paginatedIds = shuffledIds.slice(offset, offset + limit);

    if (paginatedIds.length === 0) {
      return NextResponse.json({ recipes: [], total });
    }

    // Fetch the paginated recipes
    const { data: recipeData, error: recipeError } = await supabase
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
      .in('id', paginatedIds)
      .limit(limit);

    if (recipeError) throw recipeError;

    const recipes = (recipeData || []).map((row: any) => {
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

    return NextResponse.json({ recipes, total });
  } catch (error: any) {
    console.error(`Error fetching recipes for category "${category}":`, error);
    return NextResponse.json(
      { error: 'Failed to fetch recipes', details: error.message },
      { status: 500 }
    );
  }
}
