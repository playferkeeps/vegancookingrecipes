/**
 * Search tracking utilities
 * Tracks recipe searches and provides popular recipes based on search history
 */

import { Recipe } from '@/types/recipe';

const SEARCH_STORAGE_KEY = 'vegancooking_search_history';
const MAX_STORED_SEARCHES = 1000; // Limit storage size

interface SearchEntry {
  recipeId: string;
  recipeSlug: string;
  recipeTitle: string;
  timestamp: number;
  searchQuery?: string; // Optional: track what was searched
}

/**
 * Track a recipe search/view
 */
export function trackRecipeSearch(recipe: Recipe, searchQuery?: string): void {
  try {
    const history = getSearchHistory();
    
    // Add new entry
    const entry: SearchEntry = {
      recipeId: recipe.id,
      recipeSlug: recipe.slug,
      recipeTitle: recipe.title,
      timestamp: Date.now(),
      searchQuery,
    };
    
    history.push(entry);
    
    // Keep only recent searches
    if (history.length > MAX_STORED_SEARCHES) {
      history.splice(0, history.length - MAX_STORED_SEARCHES);
    }
    
    // Save back to localStorage
    localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    // Silently fail if localStorage is not available
    console.warn('Could not track search:', error);
  }
}

/**
 * Track a search query (when user searches)
 */
export function trackSearchQuery(query: string): void {
  try {
    const history = getSearchHistory();
    
    // Add search query entry (without recipe)
    const entry: SearchEntry = {
      recipeId: '',
      recipeSlug: '',
      recipeTitle: '',
      timestamp: Date.now(),
      searchQuery: query.toLowerCase().trim(),
    };
    
    history.push(entry);
    
    // Keep only recent searches
    if (history.length > MAX_STORED_SEARCHES) {
      history.splice(0, history.length - MAX_STORED_SEARCHES);
    }
    
    // Save back to localStorage
    localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    // Silently fail if localStorage is not available
    console.warn('Could not track search query:', error);
  }
}

/**
 * Get search history from localStorage
 */
function getSearchHistory(): SearchEntry[] {
  try {
    const stored = localStorage.getItem(SEARCH_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as SearchEntry[];
    }
  } catch (error) {
    console.warn('Could not read search history:', error);
  }
  return [];
}

/**
 * Get most popular recipes based on search history
 * Returns recipes sorted by search frequency
 */
export function getPopularRecipes(
  allRecipes: Recipe[],
  limit: number = 12
): Recipe[] {
  try {
    const history = getSearchHistory();
    
    // Count recipe views (only entries with recipeId)
    const recipeCounts = new Map<string, number>();
    
    history.forEach(entry => {
      if (entry.recipeId) {
        const count = recipeCounts.get(entry.recipeId) || 0;
        recipeCounts.set(entry.recipeId, count + 1);
      }
    });
    
    // Sort by count (descending)
    const sortedRecipeIds = Array.from(recipeCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([recipeId]) => recipeId)
      .slice(0, limit);
    
    // Map to actual recipes
    const popularRecipes: Recipe[] = [];
    const recipeMap = new Map(allRecipes.map(r => [r.id, r]));
    
    for (const recipeId of sortedRecipeIds) {
      const recipe = recipeMap.get(recipeId);
      if (recipe) {
        popularRecipes.push(recipe);
      }
    }
    
    // If we don't have enough popular recipes, fill with random recipes
    if (popularRecipes.length < limit) {
      const remaining = limit - popularRecipes.length;
      const popularIds = new Set(popularRecipes.map(r => r.id));
      const availableRecipes = allRecipes.filter(r => !popularIds.has(r.id));
      
      // Shuffle and take random recipes
      const shuffled = [...availableRecipes].sort(() => Math.random() - 0.5);
      popularRecipes.push(...shuffled.slice(0, remaining));
    }
    
    return popularRecipes.slice(0, limit);
  } catch (error) {
    console.warn('Could not get popular recipes:', error);
    // Fallback: return random recipes
    return allRecipes
      .sort(() => Math.random() - 0.5)
      .slice(0, limit);
  }
}

/**
 * Clear search history
 */
export function clearSearchHistory(): void {
  try {
    localStorage.removeItem(SEARCH_STORAGE_KEY);
  } catch (error) {
    console.warn('Could not clear search history:', error);
  }
}


