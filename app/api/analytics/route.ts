import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { getPrismaClient } from '@/lib/prisma';

/**
 * GET /api/analytics
 * Returns analytics data for the admin dashboard
 */
export async function GET() {
  if (!isSupabaseConfigured() || !supabase) {
    return NextResponse.json(
      { error: 'Supabase not configured' },
      { status: 500 }
    );
  }

  try {
    // Check if tables exist
    const { data: tablesCheck, error: tablesError } = await supabase
      .from('Recipe')
      .select('id')
      .limit(1);

    if (tablesError || !tablesCheck) {
      return NextResponse.json(
        { error: 'Database tables not found', details: tablesError?.message },
        { status: 500 }
      );
    }

    // Check if recipe_views table exists
    const { error: viewsTableError } = await supabase
      .from('recipe_views')
      .select('id')
      .limit(1);

    // If table doesn't exist, return 0 for views but continue with other analytics
    const viewsTableExists = !viewsTableError;

    // Helper to create empty response for views if table doesn't exist
    const emptyViewsResponse = { count: 0, data: null, error: null };
    const emptyViewsArrayResponse = { data: [], error: null };

    // Get Prisma client for blog posts and veganized recipes
    const prisma = getPrismaClient();

    // Fetch all analytics data in parallel
    const [
      totalRecipes,
      totalComments,
      totalVotes,
      totalViews,
      topRecipesByViews,
      topRecipesByVotes,
      topRecipesByComments,
      recentComments,
      recentViews,
      blogPostsData,
      veganizedRecipesData,
      recentVeganizedRecipes,
    ] = await Promise.all([
      // Total recipes
      supabase.from('Recipe').select('id', { count: 'exact', head: true }),
      
      // Total comments
      supabase.from('comments').select('id', { count: 'exact', head: true }),
      
      // Total votes
      supabase.from('votes').select('id', { count: 'exact', head: true }),
      
      // Total views (only if table exists)
      viewsTableExists
        ? supabase.from('recipe_views').select('id', { count: 'exact', head: true })
        : Promise.resolve(emptyViewsResponse),
      
      // Top recipes by views (last 30 days) (only if table exists)
      viewsTableExists
        ? supabase
            .from('recipe_views')
            .select('recipe_id, Recipe!inner(id, title, slug)')
            .gte('viewed_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())
            .limit(1000)
        : Promise.resolve(emptyViewsArrayResponse),
      
      // Top recipes by votes
      supabase
        .from('votes')
        .select('recipe_id, vote_type, Recipe!inner(id, title, slug)')
        .limit(1000),
      
      // Top recipes by comments
      supabase
        .from('comments')
        .select('recipe_id, Recipe!inner(id, title, slug)')
        .limit(1000),
      
      // Recent comments (last 10)
      supabase
        .from('comments')
        .select('*, Recipe!inner(id, title, slug)')
        .order('created_at', { ascending: false })
        .limit(10),
      
      // Recent views (last 10) (only if table exists)
      viewsTableExists
        ? supabase
            .from('recipe_views')
            .select('*, Recipe!inner(id, title, slug)')
            .order('viewed_at', { ascending: false })
            .limit(10)
        : Promise.resolve(emptyViewsArrayResponse),
      
      // Blog posts data (using Prisma)
      prisma
        ? Promise.all([
            prisma.blogPost.count(),
            prisma.blogPost.count({ where: { published: true } }),
          ]).then(([total, published]) => ({ total, published, error: null }))
        : Promise.resolve({ total: 0, published: 0, error: null }),
      
      // Veganized recipes data (using Prisma)
      prisma
        ? prisma.recipe.count({
            where: {
              originalUrl: {
                not: null,
              },
            },
          }).then((count) => ({ count, error: null }))
        : Promise.resolve({ count: 0, error: null }),
      
      // Recent veganized recipes (last 10) (using Prisma)
      prisma
        ? prisma.recipe.findMany({
            where: {
              originalUrl: {
                not: null,
              },
            },
            select: {
              id: true,
              title: true,
              slug: true,
              originalUrl: true,
              datePublished: true,
            },
            orderBy: {
              datePublished: 'desc',
            },
            take: 10,
          }).then((recipes) => ({ data: recipes, error: null }))
        : Promise.resolve({ data: [], error: null }),
    ]);

    // Process top recipes by views
    const viewsMap = new Map<string, { count: number; recipe: any }>();
    if (topRecipesByViews.data) {
      topRecipesByViews.data.forEach((view: any) => {
        const recipeId = view.recipe_id;
        const current = viewsMap.get(recipeId) || { count: 0, recipe: view.Recipe };
        viewsMap.set(recipeId, { count: current.count + 1, recipe: current.recipe });
      });
    }
    const topByViews = Array.from(viewsMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
      .map(item => ({
        recipeId: item.recipe.id,
        title: item.recipe.title,
        slug: item.recipe.slug,
        views: item.count,
      }));

    // Process top recipes by votes
    const votesMap = new Map<string, { up: number; down: number; recipe: any }>();
    if (topRecipesByVotes.data) {
      topRecipesByVotes.data.forEach((vote: any) => {
        const recipeId = vote.recipe_id;
        const current = votesMap.get(recipeId) || { up: 0, down: 0, recipe: vote.Recipe };
        if (vote.vote_type === 'up') {
          current.up++;
        } else {
          current.down++;
        }
        votesMap.set(recipeId, current);
      });
    }
    const topByVotes = Array.from(votesMap.entries())
      .map(([recipeId, data]) => ({
        recipeId: data.recipe.id,
        title: data.recipe.title,
        slug: data.recipe.slug,
        upVotes: data.up,
        downVotes: data.down,
        totalVotes: data.up + data.down,
        rating: data.up + data.down > 0 ? Math.round((data.up / (data.up + data.down)) * 100) : 0,
      }))
      .sort((a, b) => b.totalVotes - a.totalVotes)
      .slice(0, 10);

    // Process top recipes by comments
    const commentsMap = new Map<string, { count: number; recipe: any }>();
    if (topRecipesByComments.data) {
      topRecipesByComments.data.forEach((comment: any) => {
        const recipeId = comment.recipe_id;
        const current = commentsMap.get(recipeId) || { count: 0, recipe: comment.Recipe };
        commentsMap.set(recipeId, { count: current.count + 1, recipe: current.recipe });
      });
    }
    const topByComments = Array.from(commentsMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
      .map(item => ({
        recipeId: item.recipe.id,
        title: item.recipe.title,
        slug: item.recipe.slug,
        comments: item.count,
      }));

    // Format recent comments
    const formattedRecentComments = recentComments.data?.map((comment: any) => ({
      id: comment.id,
      recipeId: comment.Recipe?.id,
      recipeTitle: comment.Recipe?.title,
      recipeSlug: comment.Recipe?.slug,
      name: comment.name,
      email: comment.email,
      comment: comment.comment.substring(0, 100) + (comment.comment.length > 100 ? '...' : ''),
      createdAt: comment.created_at,
    })) || [];

    // Format recent views
    const formattedRecentViews = recentViews.data?.map((view: any) => ({
      id: view.id,
      recipeId: view.Recipe?.id,
      recipeTitle: view.Recipe?.title,
      recipeSlug: view.Recipe?.slug,
      viewedAt: view.viewed_at,
    })) || [];

    // Format recent veganized recipes
    const formattedRecentVeganized = recentVeganizedRecipes.data?.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      slug: recipe.slug,
      originalUrl: recipe.originalUrl,
      datePublished: recipe.datePublished?.toISOString() || new Date().toISOString(),
    })) || [];

    return NextResponse.json({
      summary: {
        totalRecipes: totalRecipes.count || 0,
        totalComments: totalComments.count || 0,
        totalVotes: totalVotes.count || 0,
        totalViews: totalViews.count || 0,
        totalBlogPosts: blogPostsData.total || 0,
        publishedBlogPosts: blogPostsData.published || 0,
        totalVeganizedRecipes: veganizedRecipesData.count || 0,
      },
      topRecipes: {
        byViews: topByViews,
        byVotes: topByVotes,
        byComments: topByComments,
      },
      recent: {
        comments: formattedRecentComments,
        views: formattedRecentViews,
        veganizedRecipes: formattedRecentVeganized,
      },
    });
  } catch (error: any) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics', details: error.message },
      { status: 500 }
    );
  }
}

