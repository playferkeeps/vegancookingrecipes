/**
 * Search utilities using Fuse.js for fuzzy search
 */

import Fuse, { IFuseOptions } from 'fuse.js';
import { Recipe } from '@/types/recipe';

/**
 * Prepare recipe data for search indexing
 */
export function prepareRecipeForSearch(recipe: Recipe) {
  // Combine all searchable text into a single string
  const ingredientsText = recipe.ingredients
    .map(ing => typeof ing === 'string' ? ing : ing.name)
    .join(' ');
  
  const tagsText = recipe.tags.join(' ');
  const categoryText = recipe.category.join(' ');
  const veganTypeText = recipe.veganType.join(' ');

  return {
    ...recipe,
    // Create a searchable text field that combines everything
    searchableText: [
      recipe.title,
      recipe.description,
      recipe.prologue || '',
      ingredientsText,
      tagsText,
      categoryText,
      veganTypeText,
    ].join(' ').toLowerCase(),
    // Individual fields for weighted search
    titleLower: recipe.title.toLowerCase(),
    descriptionLower: recipe.description.toLowerCase(),
    ingredientsText: ingredientsText.toLowerCase(),
    tagsText: tagsText.toLowerCase(),
    categoryText: categoryText.toLowerCase(),
  };
}

/**
 * Create a Fuse.js instance with optimized search configuration
 */
export function createSearchIndex(recipes: Recipe[]): Fuse<Recipe> {
  const preparedRecipes = recipes.map(prepareRecipeForSearch);

  const fuseOptions: IFuseOptions<Recipe> = {
    keys: [
      {
        name: 'title',
        weight: 0.4, // Highest weight for title matches
      },
      {
        name: 'description',
        weight: 0.3,
      },
      {
        name: 'ingredientsText',
        weight: 0.15,
      },
      {
        name: 'tagsText',
        weight: 0.1,
      },
      {
        name: 'categoryText',
        weight: 0.05,
      },
    ],
    threshold: 0.3, // Lower = more strict (0.0 = exact match, 1.0 = match anything)
    distance: 100, // Maximum distance for character matching
    minMatchCharLength: 2, // Minimum character length to match
    includeScore: true, // Include relevance scores
    includeMatches: true, // Include match details
    ignoreLocation: true, // Don't consider position in string
    findAllMatches: true, // Find all matches, not just the first
    useExtendedSearch: true, // Enable advanced search syntax
  };

  return new Fuse(preparedRecipes, fuseOptions);
}

/**
 * Search recipes with fuzzy matching
 */
export function searchRecipes(
  recipes: Recipe[],
  query: string,
  options?: {
    limit?: number;
    minScore?: number;
  }
): Recipe[] {
  if (!query || query.trim().length === 0) {
    return recipes;
  }

  const searchIndex = createSearchIndex(recipes);
  const trimmedQuery = query.trim();

  // Use Fuse.js search
  const results = searchIndex.search(trimmedQuery, {
    limit: options?.limit || 50,
  });

  // Filter by minimum score if provided
  const filteredResults = options?.minScore
    ? results.filter(result => (result.score || 0) <= options.minScore!)
    : results;

  // Return recipes in order of relevance
  return filteredResults.map(result => result.item);
}

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(
  recipes: Recipe[],
  query: string,
  limit: number = 5
): string[] {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchIndex = createSearchIndex(recipes);
  const trimmedQuery = query.trim().toLowerCase();

  // Search for matching recipes
  const results = searchIndex.search(trimmedQuery, {
    limit: limit * 2, // Get more results to extract suggestions
  });

  // Extract unique suggestions from titles and tags
  const suggestions = new Set<string>();

  results.forEach(result => {
    const recipe = result.item;
    
    // Add title if it contains the query
    if (recipe.title.toLowerCase().includes(trimmedQuery)) {
      suggestions.add(recipe.title);
    }

    // Add matching tags
    recipe.tags.forEach(tag => {
      if (tag.toLowerCase().includes(trimmedQuery)) {
        suggestions.add(tag);
      }
    });

    // Add matching categories
    recipe.category.forEach(cat => {
      if (cat.toLowerCase().includes(trimmedQuery)) {
        suggestions.add(cat);
      }
    });
  });

  return Array.from(suggestions).slice(0, limit);
}

