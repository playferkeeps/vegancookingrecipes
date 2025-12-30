'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getCurrentUser, isAdmin, signOut } from '@/lib/auth';

interface AnalyticsData {
  summary: {
    totalRecipes: number;
    totalComments: number;
    totalVotes: number;
    totalViews: number;
  };
  topRecipes: {
    byViews: Array<{
      recipeId: string;
      title: string;
      slug: string;
      views: number;
    }>;
    byVotes: Array<{
      recipeId: string;
      title: string;
      slug: string;
      upVotes: number;
      downVotes: number;
      totalVotes: number;
      rating: number;
    }>;
    byComments: Array<{
      recipeId: string;
      title: string;
      slug: string;
      comments: number;
    }>;
  };
  recent: {
    comments: Array<{
      id: string;
      recipeId: string;
      recipeTitle: string;
      recipeSlug: string;
      name: string;
      email: string;
      comment: string;
      createdAt: string;
    }>;
    views: Array<{
      id: string;
      recipeId: string;
      recipeTitle: string;
      recipeSlug: string;
      viewedAt: string;
    }>;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
          router.push('/admin/login');
          return;
        }

        const admin = await isAdmin();
        if (!admin) {
          setError('Access denied. This account is not authorized to access the admin area.');
          setIsCheckingAuth(false);
          return;
        }

        setUser(currentUser);
      } catch (err) {
        router.push('/admin/login');
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    if (isCheckingAuth || !user) return;

    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics');
        if (!response.ok) {
          throw new Error('Failed to fetch analytics');
        }
        const data = await response.json();
        setAnalytics(data);
      } catch (err: any) {
        setError(err.message || 'Failed to load analytics');
        console.error('Error fetching analytics:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [isCheckingAuth, user]);

  const handleLogout = async () => {
    await signOut();
    router.push('/admin/login');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isCheckingAuth) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center py-12">
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center py-12">
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-red-800 mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Analytics and insights for vegancooking.recipes</p>
            {user && (
              <p className="text-sm text-gray-500 mt-1">Logged in as: {user.email}</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Total Recipes</h3>
          <p className="text-3xl font-bold text-gray-900">{analytics.summary.totalRecipes}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Total Views</h3>
          <p className="text-3xl font-bold text-gray-900">{analytics.summary.totalViews.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Total Votes</h3>
          <p className="text-3xl font-bold text-gray-900">{analytics.summary.totalVotes.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Total Comments</h3>
          <p className="text-3xl font-bold text-gray-900">{analytics.summary.totalComments.toLocaleString()}</p>
        </div>
      </div>

      {/* Top Recipes Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Top Recipes by Views */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Top Recipes by Views (30 days)</h2>
          {analytics.topRecipes.byViews.length > 0 ? (
            <ol className="space-y-3">
              {analytics.topRecipes.byViews.map((recipe, index) => (
                <li key={recipe.recipeId} className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-gray-500 font-semibold mr-2">#{index + 1}</span>
                    <Link
                      href={`/recipes/${recipe.slug}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {recipe.title}
                    </Link>
                  </div>
                  <span className="text-gray-600 font-semibold">{recipe.views}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-500">No views tracked yet</p>
          )}
        </div>

        {/* Top Recipes by Votes */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Top Recipes by Votes</h2>
          {analytics.topRecipes.byVotes.length > 0 ? (
            <ol className="space-y-3">
              {analytics.topRecipes.byVotes.map((recipe, index) => (
                <li key={recipe.recipeId} className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-gray-500 font-semibold mr-2">#{index + 1}</span>
                    <Link
                      href={`/recipes/${recipe.slug}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {recipe.title}
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">
                      👍 {recipe.upVotes} | 👎 {recipe.downVotes} | ⭐ {recipe.rating}%
                    </div>
                  </div>
                  <span className="text-gray-600 font-semibold">{recipe.totalVotes}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-500">No votes yet</p>
          )}
        </div>

        {/* Top Recipes by Comments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Top Recipes by Comments</h2>
          {analytics.topRecipes.byComments.length > 0 ? (
            <ol className="space-y-3">
              {analytics.topRecipes.byComments.map((recipe, index) => (
                <li key={recipe.recipeId} className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-gray-500 font-semibold mr-2">#{index + 1}</span>
                    <Link
                      href={`/recipes/${recipe.slug}`}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {recipe.title}
                    </Link>
                  </div>
                  <span className="text-gray-600 font-semibold">{recipe.comments}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-500">No comments yet</p>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Comments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Comments</h2>
          {analytics.recent.comments.length > 0 ? (
            <div className="space-y-4">
              {analytics.recent.comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Link
                        href={`/recipes/${comment.recipeSlug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                      >
                        {comment.recipeTitle}
                      </Link>
                    </div>
                    <span className="text-sm text-gray-500">{formatDate(comment.createdAt)}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-semibold">{comment.name}</span> ({comment.email})
                  </p>
                  <p className="text-gray-600">{comment.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No comments yet</p>
          )}
        </div>

        {/* Recent Views */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Views</h2>
          {analytics.recent.views.length > 0 ? (
            <div className="space-y-3">
              {analytics.recent.views.map((view) => (
                <div key={view.id} className="flex items-center justify-between border-b border-gray-200 pb-3 last:border-0">
                  <Link
                    href={`/recipes/${view.recipeSlug}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {view.recipeTitle}
                  </Link>
                  <span className="text-sm text-gray-500">{formatDate(view.viewedAt)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No views tracked yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

