'use client';

import { useState, useEffect, useCallback, useRef, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchRecipes } from '@/lib/search';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import TimeFilters from '@/components/TimeFilters';
import { Recipe } from '@/types/recipe';
import { getPopularRecipes, trackSearchQuery } from '@/lib/search-tracking';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [allSearchResults, setAllSearchResults] = useState<Recipe[]>([]);
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const resultsContainerRef = useRef<HTMLDivElement>(null);
  
  // Time filters
  const [cookTimeMax, setCookTimeMax] = useState<number | null>(null);
  const [prepTimeMax, setPrepTimeMax] = useState<number | null>(null);
  const [totalTimeMax, setTotalTimeMax] = useState<number | null>(null);
  
  const INITIAL_DISPLAY_COUNT = 12;
  const LOAD_MORE_COUNT = 12;

  // Shuffle array using Fisher-Yates algorithm
  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  useEffect(() => {
    // Load all recipes on client side via API
    const loadRecipes = async () => {
      try {
        const response = await fetch('/api/recipes');
        const data = await response.json();
        const recipes = data.recipes || [];
        // Recipes are already shuffled from API, but shuffle again for extra randomness
        setAllRecipes(shuffleArray(recipes));
      } catch (error) {
        console.error('Error loading recipes:', error);
        setAllRecipes([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadRecipes();
  }, [shuffleArray]);

  // Apply time filters to recipes
  const applyTimeFilters = useCallback((recipes: Recipe[]): Recipe[] => {
    return recipes.filter((recipe) => {
      if (prepTimeMax !== null && recipe.prepTime > prepTimeMax) {
        return false;
      }
      if (cookTimeMax !== null && recipe.cookTime > cookTimeMax) {
        return false;
      }
      if (totalTimeMax !== null && recipe.totalTime > totalTimeMax) {
        return false;
      }
      return true;
    });
  }, [prepTimeMax, cookTimeMax, totalTimeMax]);

  const performSearch = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) {
      setAllSearchResults([]);
      setDisplayedRecipes([]);
      return;
    }

    // Track the search query
    trackSearchQuery(searchTerm);

    // Get ALL matching results (no limit)
    const results = searchRecipes(allRecipes, searchTerm, {
      minScore: 0.4, // Only show reasonably relevant results
    });

    // Apply time filters
    const filteredResults = applyTimeFilters(results);

    setAllSearchResults(filteredResults);
    // Display initial batch
    setDisplayedRecipes(filteredResults.slice(0, INITIAL_DISPLAY_COUNT));
  }, [allRecipes, applyTimeFilters]);

  // Apply filters when they change
  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      // Show popular recipes when empty, with filters applied
      if (allRecipes.length > 0) {
        const popular = getPopularRecipes(allRecipes, allRecipes.length);
        const filtered = applyTimeFilters(popular);
        setAllSearchResults(filtered);
        setDisplayedRecipes(filtered.slice(0, INITIAL_DISPLAY_COUNT));
      }
    }
  }, [query, performSearch, allRecipes, applyTimeFilters, prepTimeMax, cookTimeMax, totalTimeMax]);
  
  // Use refs to store latest values for scroll handler
  const allSearchResultsRef = useRef(allSearchResults);
  const displayedRecipesRef = useRef(displayedRecipes);
  const isLoadingMoreRef = useRef(isLoadingMore);
  
  // Update refs when values change
  useEffect(() => {
    allSearchResultsRef.current = allSearchResults;
  }, [allSearchResults]);
  
  useEffect(() => {
    displayedRecipesRef.current = displayedRecipes;
  }, [displayedRecipes]);
  
  useEffect(() => {
    isLoadingMoreRef.current = isLoadingMore;
  }, [isLoadingMore]);

  // Infinite scroll handler - uses window scroll
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let rafId: number;
    
    const checkAndLoadMore = () => {
      // Use refs to get latest values without dependencies
      const allResults = allSearchResultsRef.current;
      const displayed = displayedRecipesRef.current;
      const isLoading = isLoadingMoreRef.current;
      
      if (isLoading || allResults.length <= displayed.length) return;
      
      // Check if user scrolled near bottom of page
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Load more when user scrolled near bottom (within 500px)
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      if (distanceFromBottom < 500) {
        setIsLoadingMore(true);
        
        // Load more recipes
        const nextCount = Math.min(
          displayed.length + LOAD_MORE_COUNT,
          allResults.length
        );
        
        if (nextCount > displayed.length) {
          setDisplayedRecipes(allResults.slice(0, nextCount));
        }
        
        // Reset loading state after a brief delay
        setTimeout(() => {
          setIsLoadingMore(false);
        }, 200);
      }
    };
    
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth scrolling
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkAndLoadMore, 50);
      });
    };

    // Always set up listener - it will check if more results are available
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Check immediately on mount and periodically
    checkAndLoadMore();
    const initialCheck = setTimeout(checkAndLoadMore, 100);
    const periodicCheck = setInterval(checkAndLoadMore, 1000); // Check every second as fallback
    
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(initialCheck);
      clearInterval(periodicCheck);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []); // Empty deps - handler uses refs for latest values

  const handleSearch = (newQuery: string) => {
    setSearchQuery(newQuery);
    if (newQuery.trim()) {
      performSearch(newQuery);
      // Update URL without page reload
      const url = new URL(window.location.href);
      url.searchParams.set('q', newQuery);
      window.history.pushState({}, '', url.toString());
    } else {
      setAllSearchResults([]);
      setDisplayedRecipes([]);
      // Show popular recipes when empty, with filters applied
      if (allRecipes.length > 0) {
        const popular = getPopularRecipes(allRecipes, allRecipes.length);
        const filtered = applyTimeFilters(popular);
        setAllSearchResults(filtered);
        setDisplayedRecipes(filtered.slice(0, INITIAL_DISPLAY_COUNT));
      }
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

        {/* Time Filters */}
        <TimeFilters
          cookTimeMax={cookTimeMax}
          prepTimeMax={prepTimeMax}
          totalTimeMax={totalTimeMax}
          onCookTimeChange={setCookTimeMax}
          onPrepTimeChange={setPrepTimeMax}
          onTotalTimeChange={setTotalTimeMax}
        />

        {searchQuery && (
          <p className="text-base sm:text-lg text-gray-600 px-1 sm:px-0">
            {allSearchResults.length > 0 ? (
              <>
                Found <span className="font-semibold">{allSearchResults.length}</span>{' '}
                {allSearchResults.length === 1 ? 'recipe' : 'recipes'} for &quot;{searchQuery}&quot;
                {displayedRecipes.length < allSearchResults.length && (
                  <span className="text-sm text-gray-500 ml-2">
                    (showing {displayedRecipes.length})
                  </span>
                )}
              </>
            ) : (
              <>
                No recipes found for &quot;{searchQuery}&quot;. Try different keywords or check your spelling.
              </>
            )}
          </p>
        )}
      </header>

      {!searchQuery && (
        <>
          <div className="text-center py-6 mb-8">
            <p className="text-gray-600 text-base sm:text-lg mb-2">
              Enter a search term to find recipes
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>💡 <strong>Tip:</strong> Search by recipe name, ingredients, tags, or category</p>
              <p>Example searches: &quot;chocolate&quot;, &quot;banana bread&quot;, &quot;pasta&quot;, &quot;gluten-free&quot;</p>
            </div>
          </div>
          
          {/* Show popular recipes when search is empty */}
          {allRecipes.length > 0 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 px-1 sm:px-0">
                🔥 Most Popular Recipes
                {displayedRecipes.length < allSearchResults.length && (
                  <span className="text-base text-gray-500 font-normal ml-2">
                    (showing {displayedRecipes.length} of {allSearchResults.length})
                  </span>
                )}
              </h2>
            </div>
          )}
        </>
      )}

      {searchQuery && allSearchResults.length === 0 && (
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

      {displayedRecipes.length > 0 && (
        <>
          <div 
            ref={resultsContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {displayedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {isLoadingMore && (
            <div className="text-center py-4">
              <p className="text-gray-500">Loading more recipes...</p>
            </div>
          )}
          {displayedRecipes.length < allSearchResults.length && !isLoadingMore && (
            <div className="text-center py-4 text-sm text-gray-500">
              Scroll down to load more recipes ({displayedRecipes.length} of {allSearchResults.length} shown)
            </div>
          )}
        </>
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

