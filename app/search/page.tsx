'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllRecipes } from '@/data/recipes';
import { searchRecipes } from '@/lib/search';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import { Recipe } from '@/types/recipe';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    // Load all recipes on client side
    const recipes = getAllRecipes();
    setAllRecipes(recipes);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    } else {
      setRecipes([]);
    }
  }, [query]);

  const performSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setRecipes([]);
      return;
    }

    const results = searchRecipes(allRecipes, searchTerm, {
      limit: 100,
      minScore: 0.4, // Only show reasonably relevant results
    });

    setRecipes(results);
  };

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    if (newQuery.trim()) {
      performSearch(newQuery);
      // Update URL without page reload
      const url = new URL(window.location.href);
      url.searchParams.set('q', newQuery);
      window.history.pushState({}, '', url.toString());
    } else {
      setRecipes([]);
      const url = new URL(window.location.href);
      url.searchParams.delete('q');
      window.history.pushState({}, '', url.toString());
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center py-12">
          <p className="text-gray-600">Loading recipes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-1 sm:px-0">
          Search Recipes
        </h1>
        
        <div className="max-w-2xl mb-4 sm:mb-6">
          <SearchBar
            placeholder="Search by name, ingredients, tags, or category..."
            autoFocus={!query}
            className="w-full"
          />
        </div>

        {searchQuery && (
          <p className="text-base sm:text-lg text-gray-600 px-1 sm:px-0">
            {recipes.length > 0 ? (
              <>
                Found <span className="font-semibold">{recipes.length}</span>{' '}
                {recipes.length === 1 ? 'recipe' : 'recipes'} for "{searchQuery}"
              </>
            ) : (
              <>
                No recipes found for "{searchQuery}". Try different keywords or check your spelling.
              </>
            )}
          </p>
        )}
      </header>

      {!searchQuery && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Enter a search term to find recipes
          </p>
          <div className="text-sm text-gray-500 space-y-2">
            <p>💡 <strong>Tip:</strong> Search by recipe name, ingredients, tags, or category</p>
            <p>Example searches: "chocolate", "banana bread", "pasta", "gluten-free"</p>
          </div>
        </div>
      )}

      {searchQuery && recipes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            No results found
          </p>
          <div className="text-sm text-gray-500 space-y-2">
            <p>Try:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Using different keywords</li>
              <li>Checking your spelling</li>
              <li>Searching for ingredients or categories</li>
              <li>Using fewer words</li>
            </ul>
          </div>
        </div>
      )}

      {recipes.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center py-12">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

