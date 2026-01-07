'use client';

import { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import RecipeFilters from '@/components/RecipeFilters';
import { Recipe, RecipeCategory, VeganType } from '@/types/recipe';
import { trackSearchQuery } from '@/lib/search-tracking';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [displayedRecipes, setDisplayedRecipes] = useState<Recipe[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  
  // Time filters
  const [cookTimeMax, setCookTimeMax] = useState<number | null>(null);
  const [prepTimeMax, setPrepTimeMax] = useState<number | null>(null);
  const [totalTimeMax, setTotalTimeMax] = useState<number | null>(null);
  
  // Category filters
  const [selectedCategories, setSelectedCategories] = useState<RecipeCategory[]>([]);
  
  // Difficulty filter
  const [selectedDifficulty, setSelectedDifficulty] = useState<('easy' | 'medium' | 'hard')[]>([]);
  
  // Vegan type filters
  const [selectedVeganTypes, setSelectedVeganTypes] = useState<VeganType[]>([]);
  
  // Servings filters
  const [servingsMin, setServingsMin] = useState<number | null>(null);
  const [servingsMax, setServingsMax] = useState<number | null>(null);
  
  // Allergen filters
  const [glutenFree, setGlutenFree] = useState(false);
  const [nutFree, setNutFree] = useState(false);
  const [soyFree, setSoyFree] = useState(false);
  
  // Tag filters
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const INITIAL_DISPLAY_COUNT = 12;
  const LOAD_MORE_COUNT = 12;

  // Load popular recipes when no search query
  useEffect(() => {
    if (!query) {
      setIsLoading(true);
      fetch('/api/recipes?limit=100')
        .then(res => res.json())
        .then(data => {
          const recipes = data.recipes || [];
          setSearchResults(recipes);
          setDisplayedRecipes(recipes.slice(0, INITIAL_DISPLAY_COUNT));
        })
        .catch(err => {
          console.error('Error loading recipes:', err);
          setSearchResults([]);
          setDisplayedRecipes([]);
        })
        .finally(() => setIsLoading(false));
    }
  }, [query]);

  // Apply all filters to recipes
  const applyAllFilters = useCallback((recipes: Recipe[]): Recipe[] => {
    return recipes.filter((recipe) => {
      // Time filters
      if (prepTimeMax !== null && recipe.prepTime > prepTimeMax) {
        return false;
      }
      if (cookTimeMax !== null && recipe.cookTime > cookTimeMax) {
        return false;
      }
      if (totalTimeMax !== null && recipe.totalTime > totalTimeMax) {
        return false;
      }
      
      // Category filters
      if (selectedCategories.length > 0) {
        const hasMatchingCategory = recipe.category.some((cat) =>
          selectedCategories.includes(cat)
        );
        if (!hasMatchingCategory) {
          return false;
        }
      }
      
      // Difficulty filter
      if (selectedDifficulty.length > 0) {
        if (!selectedDifficulty.includes(recipe.difficulty)) {
          return false;
        }
      }
      
      // Vegan type filters
      if (selectedVeganTypes.length > 0) {
        const hasMatchingVeganType = recipe.veganType.some((type) =>
          selectedVeganTypes.includes(type)
        );
        if (!hasMatchingVeganType) {
          return false;
        }
      }
      
      // Servings filters
      if (servingsMin !== null && recipe.servings < servingsMin) {
        return false;
      }
      if (servingsMax !== null && recipe.servings > servingsMax) {
        return false;
      }
      
      // Allergen filters
      if (glutenFree) {
        const isGlutenFree =
          recipe.veganType.includes('gluten-free-vegan') ||
          recipe.tags.some((tag) => tag.toLowerCase().includes('gluten-free')) ||
          recipe.tags.some((tag) => tag.toLowerCase().includes('gluten free'));
        if (!isGlutenFree) {
          return false;
        }
      }
      
      if (nutFree) {
        const hasNuts =
          recipe.tags.some((tag) =>
            ['nut', 'almond', 'walnut', 'pecan', 'hazelnut', 'cashew', 'pistachio', 'peanut'].some(
              (nut) => tag.toLowerCase().includes(nut)
            )
          ) ||
          recipe.ingredients.some((ing) => {
            const ingName = typeof ing === 'string' ? ing : ing.name;
            return ['nut', 'almond', 'walnut', 'pecan', 'hazelnut', 'cashew', 'pistachio', 'peanut'].some(
              (nut) => ingName.toLowerCase().includes(nut)
            );
          });
        if (hasNuts) {
          return false;
        }
      }
      
      if (soyFree) {
        const hasSoy =
          recipe.tags.some((tag) =>
            ['soy', 'tofu', 'tempeh', 'edamame', 'miso'].some((soyItem) =>
              tag.toLowerCase().includes(soyItem)
            )
          ) ||
          recipe.ingredients.some((ing) => {
            const ingName = typeof ing === 'string' ? ing : ing.name;
            return ['soy', 'tofu', 'tempeh', 'edamame', 'miso', 'soy sauce', 'tamari'].some(
              (soyItem) => ingName.toLowerCase().includes(soyItem)
            );
          });
        if (hasSoy) {
          return false;
        }
      }
      
      // Tag filters
      if (selectedTags.length > 0) {
        const recipeTags = recipe.tags.map((tag) => tag.toLowerCase());
        const hasMatchingTag = selectedTags.some((selectedTag) =>
          recipeTags.includes(selectedTag.toLowerCase())
        );
        if (!hasMatchingTag) {
          return false;
        }
      }
      
      return true;
    });
  }, [
    prepTimeMax,
    cookTimeMax,
    totalTimeMax,
    selectedCategories,
    selectedDifficulty,
    selectedVeganTypes,
    servingsMin,
    servingsMax,
    glutenFree,
    nutFree,
    soyFree,
    selectedTags,
  ]);

  // Perform API search with debouncing
  const performSearch = useCallback(async (searchTerm: string) => {
    // Cancel previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    if (!searchTerm.trim()) {
      setSearchResults([]);
      setDisplayedRecipes([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    trackSearchQuery(searchTerm);

    // Create new abort controller
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}&limit=200`, {
        signal: abortController.signal,
      });

      if (abortController.signal.aborted) {
        return;
      }

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      const recipes = data.recipes || [];

      // Store original results before filtering
      originalSearchResultsRef.current = recipes;

      // Apply filters
      const filtered = applyAllFilters(recipes);

      setSearchResults(filtered);
      setDisplayedRecipes(filtered.slice(0, INITIAL_DISPLAY_COUNT));
    } catch (error: any) {
      if (error.name === 'AbortError') {
        return; // Request was cancelled
      }
      console.error('Error searching recipes:', error);
      setSearchResults([]);
      setDisplayedRecipes([]);
    } finally {
      setIsSearching(false);
    }
  }, [applyAllFilters]);

  // Debounced search - wait for typing pause
  const debouncedSearch = useCallback((searchTerm: string) => {
    // Clear any existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Cancel any in-flight search request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Don't show loading state while user is typing
    setIsSearching(false);

    // Require at least 2 characters before searching
    if (searchTerm.trim().length < 2) {
      setSearchResults([]);
      setDisplayedRecipes([]);
      return;
    }

    // Wait for typing pause (600ms) before searching
    // This prevents search from running while user is actively typing
    debounceTimerRef.current = setTimeout(() => {
      performSearch(searchTerm);
    }, 600); // 600ms debounce - waits for typing pause
  }, [performSearch]);

  // Handle search query changes with debouncing
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      debouncedSearch(query);
    } else {
      // Clear immediately if query is empty
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      setSearchQuery('');
      setSearchResults([]);
      setDisplayedRecipes([]);
      setIsSearching(false);
    }
  }, [query, debouncedSearch]);

  // Store original search results (before filtering) in a ref
  const originalSearchResultsRef = useRef<Recipe[]>([]);

  // Apply filters when they change
  useEffect(() => {
    if (originalSearchResultsRef.current.length > 0) {
      const filtered = applyAllFilters(originalSearchResultsRef.current);
      setSearchResults(filtered);
      setDisplayedRecipes(filtered.slice(0, INITIAL_DISPLAY_COUNT));
    }
  }, [
    applyAllFilters,
    prepTimeMax,
    cookTimeMax,
    totalTimeMax,
    selectedCategories,
    selectedDifficulty,
    selectedVeganTypes,
    servingsMin,
    servingsMax,
    glutenFree,
    nutFree,
    soyFree,
    selectedTags,
  ]);

  // Infinite scroll - use refs to avoid dependency issues
  const searchResultsRef = useRef(searchResults);
  const displayedRecipesRef = useRef(displayedRecipes);
  const isLoadingMoreRef = useRef(isLoadingMore);

  useEffect(() => {
    searchResultsRef.current = searchResults;
  }, [searchResults]);

  useEffect(() => {
    displayedRecipesRef.current = displayedRecipes;
  }, [displayedRecipes]);

  useEffect(() => {
    isLoadingMoreRef.current = isLoadingMore;
  }, [isLoadingMore]);

  useEffect(() => {
    const handleScroll = () => {
      const currentResults = searchResultsRef.current;
      const currentDisplayed = displayedRecipesRef.current;
      const currentLoading = isLoadingMoreRef.current;

      if (currentLoading || currentResults.length <= currentDisplayed.length) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceFromBottom < 500) {
        setIsLoadingMore(true);
        const nextCount = Math.min(
          currentDisplayed.length + LOAD_MORE_COUNT,
          currentResults.length
        );
        setDisplayedRecipes(currentResults.slice(0, nextCount));
        setTimeout(() => setIsLoadingMore(false), 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty deps - using refs for latest values

  const clearAllFilters = useCallback(() => {
    setCookTimeMax(null);
    setPrepTimeMax(null);
    setTotalTimeMax(null);
    setSelectedCategories([]);
    setSelectedDifficulty([]);
    setSelectedVeganTypes([]);
    setServingsMin(null);
    setServingsMax(null);
    setGlutenFree(false);
    setNutFree(false);
    setSoyFree(false);
    setSelectedTags([]);
  }, []);

  const handleSearch = (newQuery: string) => {
    // Update local state immediately for responsive UI
    setSearchQuery(newQuery);
    
    // Update URL after debounce (only when search actually happens)
    // This prevents URL updates on every keystroke
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      const url = new URL(window.location.href);
      if (newQuery.trim()) {
        url.searchParams.set('q', newQuery.trim());
      } else {
        url.searchParams.delete('q');
      }
      router.push(url.pathname + url.search, { scroll: false });
    }, 600); // Same debounce as search
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

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

        <RecipeFilters
          recipes={searchResults}
          cookTimeMax={cookTimeMax}
          prepTimeMax={prepTimeMax}
          totalTimeMax={totalTimeMax}
          onCookTimeChange={setCookTimeMax}
          onPrepTimeChange={setPrepTimeMax}
          onTotalTimeChange={setTotalTimeMax}
          selectedCategories={selectedCategories}
          onCategoriesChange={setSelectedCategories}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          selectedVeganTypes={selectedVeganTypes}
          onVeganTypesChange={setSelectedVeganTypes}
          servingsMin={servingsMin}
          servingsMax={servingsMax}
          onServingsMinChange={setServingsMin}
          onServingsMaxChange={setServingsMax}
          glutenFree={glutenFree}
          nutFree={nutFree}
          soyFree={soyFree}
          onGlutenFreeChange={setGlutenFree}
          onNutFreeChange={setNutFree}
          onSoyFreeChange={setSoyFree}
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
          onClearAll={clearAllFilters}
        />

        {searchQuery && (
          <p className="text-base sm:text-lg text-gray-600 px-1 sm:px-0">
            {isSearching ? (
              <span>Searching...</span>
            ) : searchResults.length > 0 ? (
              <>
                Found <span className="font-semibold">{searchResults.length}</span>{' '}
                {searchResults.length === 1 ? 'recipe' : 'recipes'} for &quot;{searchQuery}&quot;
                {displayedRecipes.length < searchResults.length && (
                  <span className="text-sm text-gray-500 ml-2">
                    (showing {displayedRecipes.length})
                  </span>
                )}
              </>
            ) : (
              <>
                No recipes found for &quot;{searchQuery}&quot;. Try different keywords.
              </>
            )}
          </p>
        )}
      </header>

      {!searchQuery && !isLoading && (
        <div className="text-center py-6 mb-8">
          <p className="text-gray-600 text-base sm:text-lg mb-2">
            Enter a search term to find recipes
          </p>
          <div className="text-sm text-gray-500 space-y-1">
            <p>💡 <strong>Tip:</strong> Search by recipe name, ingredients, tags, or category</p>
          </div>
        </div>
      )}

      {(isLoading || isSearching) && (
        <div className="text-center py-12">
          <p className="text-gray-600">Searching...</p>
        </div>
      )}

      {!isLoading && !isSearching && displayedRecipes.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {displayedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {isLoadingMore && (
            <div className="text-center py-4">
              <p className="text-gray-500">Loading more recipes...</p>
            </div>
          )}
          {displayedRecipes.length < searchResults.length && !isLoadingMore && (
            <div className="text-center py-4 text-sm text-gray-500">
              Scroll down to load more ({displayedRecipes.length} of {searchResults.length} shown)
            </div>
          )}
        </>
      )}

      {!isLoading && !isSearching && searchQuery && searchResults.length === 0 && (
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
            </ul>
          </div>
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
