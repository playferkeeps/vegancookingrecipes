import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { supabaseToRecipe } from '@/data/recipes/supabase';

/**
 * GET /api/search?q=query&limit=50
 * Fast server-side search using PostgreSQL full-text search
 * Uses GIN indexes for sub-millisecond search performance
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.trim();
  const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 200); // Max 200 results

  if (!query || query.length < 2) {
    return NextResponse.json({ recipes: [], count: 0 });
  }

  if (!isSupabaseConfigured() || !supabase) {
    return NextResponse.json(
      { error: 'Search not available - database not configured' },
      { status: 500 }
    );
  }

  try {
    // Use PostgreSQL full-text search with ranking
    // This is MUCH faster than ILIKE queries, especially with GIN indexes
    const { data: searchResults, error: searchError } = await supabase.rpc(
      'search_recipes',
      {
        search_query: query,
        result_limit: limit,
      }
    );

    // Fallback to manual full-text search if function doesn't exist
    if (searchError && searchError.message?.includes('function') && searchError.message?.includes('does not exist')) {
      console.warn('Search function not found, using fallback query');
      
      // Fallback: Use direct full-text search query
      const { data: fallbackResults, error: fallbackError } = await supabase
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
        .or(`title.ilike.%${query}%,description.ilike.%${query}%,prologue.ilike.%${query}%`)
        .limit(limit);

      if (fallbackError) throw fallbackError;

      const recipes = (fallbackResults || []).map((row: any) => {
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

      return NextResponse.json({
        recipes,
        count: recipes.length,
      });
    }

    if (searchError) throw searchError;

    // If we got results from the function, fetch full recipe data
    if (!searchResults || searchResults.length === 0) {
      return NextResponse.json({ recipes: [], count: 0 });
    }

    const recipeIds = searchResults.map((r: any) => r.id);

    // Fetch full recipe data with all relations, ordered by rank
    const { data: fullRecipes, error: fetchError } = await supabase
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
      .in('id', recipeIds)
      .limit(limit);

    if (fetchError) throw fetchError;

    // Sort by the rank from search results
    const rankMap = new Map<string, number>(
      searchResults.map((r: any) => [r.id, (r.rank as number) || 0])
    );

    const recipes = (fullRecipes || [])
      .map((row: any) => {
        if (row.ingredients) {
          row.ingredients.sort((a: any, b: any) => (a.orderIndex || 0) - (b.orderIndex || 0));
        }
        if (row.instructions) {
          row.instructions.sort((a: any, b: any) => (a.step || 0) - (b.step || 0));
        }
        if (row.faqs) {
          row.faqs.sort((a: any, b: any) => (a.orderIndex || 0) - (b.orderIndex || 0));
        }
        return {
          recipe: supabaseToRecipe(row),
          rank: rankMap.get(row.id) || 0,
        };
      })
      .sort((a, b) => (b.rank as number) - (a.rank as number))
      .map((item) => item.recipe);

    return NextResponse.json({
      recipes,
      count: recipes.length,
    });
  } catch (error: any) {
    console.error('Error searching recipes:', error);
    return NextResponse.json(
      { error: 'Failed to search recipes', details: error.message },
      { status: 500 }
    );
  }
}
