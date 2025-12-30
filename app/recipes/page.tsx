'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import TimeFilters from '@/components/TimeFilters';
import { Recipe } from '@/types/recipe';

export default function RecipesPage() {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  // Apply filters when recipes or filters change
  useEffect(() => {
    if (allRecipes.length > 0) {
      const filtered = applyTimeFilters(allRecipes);
      setFilteredRecipes(filtered);
      setDisplayedRecipes(filtered.slice(0, INITIAL_DISPLAY_COUNT));
    }
  }, [allRecipes, applyTimeFilters]);

  // Use refs to store latest values for scroll handler
  const filteredRecipesRef = useRef(filteredRecipes);
  const displayedRecipesRef = useRef(displayedRecipes);
  const isLoadingMoreRef = useRef(isLoadingMore);
  
  // Update refs when values change
  useEffect(() => {
    filteredRecipesRef.current = filteredRecipes;
  }, [filteredRecipes]);
  
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
      const filtered = filteredRecipesRef.current;
      const displayed = displayedRecipesRef.current;
      const isLoading = isLoadingMoreRef.current;
      
      if (isLoading || filtered.length <= displayed.length) return;
      
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
          filtered.length
        );
        
        if (nextCount > displayed.length) {
          setDisplayedRecipes(filtered.slice(0, nextCount));
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-1 sm:px-0">All Recipes</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 px-1 sm:px-0">
          Discover our complete collection of delicious vegan recipes.
        </p>
        <div className="max-w-2xl mb-4 sm:mb-6">
          <SearchBar
            placeholder="Search recipes by name, ingredients, or tags..."
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

        {filteredRecipes.length > 0 && (
          <p className="text-base sm:text-lg text-gray-600 px-1 sm:px-0 mb-4">
            Showing <span className="font-semibold">{filteredRecipes.length}</span>{' '}
            {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
            {displayedRecipes.length < filteredRecipes.length && (
              <span className="text-sm text-gray-500 ml-2">
                (displaying {displayedRecipes.length})
              </span>
            )}
          </p>
        )}
      </header>

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
          {displayedRecipes.length < filteredRecipes.length && !isLoadingMore && (
            <div className="text-center py-4 text-sm text-gray-500">
              Scroll down to load more recipes ({displayedRecipes.length} of {filteredRecipes.length} shown)
            </div>
          )}
        </>
      )}

      {filteredRecipes.length === 0 && allRecipes.length > 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            No recipes match your filters
          </p>
          <div className="text-sm text-gray-500 space-y-2">
            <p>Try adjusting your time filters to see more recipes.</p>
          </div>
        </div>
      )}
    </div>
  );
}

