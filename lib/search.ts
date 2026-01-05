/**
 * Search utilities using Fuse.js for fuzzy search
 */

import Fuse, { IFuseOptions } from 'fuse.js';
import { Recipe } from '@/types/recipe';

/**
 * Normalize text for better search matching (handles plurals, common variations)
 */
function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    // Remove common plural endings and add both forms
    .replace(/\b(\w+)s\b/g, '$1') // Remove trailing 's' (chickpeas -> chickpea)
    .replace(/\b(\w+)es\b/g, '$1') // Remove trailing 'es' (tomatoes -> tomato)
    .replace(/\b(\w+)ies\b/g, '$1y'); // Remove trailing 'ies' (berries -> berry)
}

/**
 * Prepare recipe data for search indexing
 */
export function prepareRecipeForSearch(recipe: Recipe) {
  // Combine all searchable text into a single string
  const ingredientsText = recipe.ingredients
    .map(ing => typeof ing === 'string' ? ing : ing.name)
    .join(' ');
  
  // Include instructions content
  const instructionsText = recipe.instructions
    .map(inst => typeof inst === 'string' ? inst : inst.text)
    .join(' ');
  
  const tagsText = recipe.tags.join(' ');
  const categoryText = recipe.category.join(' ');
  const veganTypeText = recipe.veganType.join(' ');
  const prologueText = recipe.prologue || '';

  const titleLower = recipe.title.toLowerCase();
  const descriptionLower = recipe.description.toLowerCase();
  const ingredientsTextLower = ingredientsText.toLowerCase();
  const instructionsTextLower = instructionsText.toLowerCase();
  const prologueTextLower = prologueText.toLowerCase();

  return {
    ...recipe,
    // Create a searchable text field that combines everything
    searchableText: [
      recipe.title,
      recipe.description,
      prologueText,
      ingredientsText,
      instructionsText,
      tagsText,
      categoryText,
      veganTypeText,
    ].join(' ').toLowerCase(),
    // Individual fields for weighted search
    titleLower,
    descriptionLower,
    ingredientsText: ingredientsTextLower,
    instructionsText: instructionsTextLower,
    prologueText: prologueTextLower,
    tagsText: tagsText.toLowerCase(),
    categoryText: categoryText.toLowerCase(),
    // Normalized versions for better plural/singular matching
    titleNormalized: normalizeSearchText(recipe.title),
    ingredientsNormalized: normalizeSearchText(ingredientsText),
    instructionsNormalized: normalizeSearchText(instructionsText),
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
        weight: 0.35, // Highest weight for title matches
      },
      {
        name: 'titleNormalized',
        weight: 0.30, // High weight for normalized title (handles plurals)
      },
      {
        name: 'description',
        weight: 0.20,
      },
      {
        name: 'tagsText',
        weight: 0.15, // Increased weight for tags
      },
      {
        name: 'categoryText',
        weight: 0.12, // Increased weight for categories
      },
      {
        name: 'ingredientsText',
        weight: 0.10,
      },
      {
        name: 'ingredientsNormalized',
        weight: 0.08, // Normalized ingredients (handles plurals)
      },
      {
        name: 'instructionsText',
        weight: 0.06, // Search in instructions
      },
      {
        name: 'instructionsNormalized',
        weight: 0.05, // Normalized instructions
      },
      {
        name: 'prologueText',
        weight: 0.04, // Search in prologue
      },
      {
        name: 'searchableText',
        weight: 0.02, // Fallback: search in combined text
      },
    ],
    threshold: 0.5, // More lenient to catch partial matches and content matches
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
  
  // Normalize the query for better plural/singular matching
  const normalizedQuery = normalizeSearchText(trimmedQuery);

  // Search with both original and normalized query
  // This ensures we catch matches even with plural/singular differences
  // Use a very high limit if no limit specified to get all results
  const searchLimit = options?.limit || 10000;
  const results1 = searchIndex.search(trimmedQuery, {
    limit: searchLimit,
  });
  
  // Also search with normalized query if different
  const results2 = normalizedQuery !== trimmedQuery.toLowerCase()
    ? searchIndex.search(normalizedQuery, {
        limit: searchLimit,
      })
    : [];

  // Combine and deduplicate results
  const combinedResults = [...results1, ...results2];
  const uniqueResults = new Map<string, typeof results1[0]>();
  
  combinedResults.forEach(result => {
    const recipeId = result.item.id;
    if (!uniqueResults.has(recipeId) || (uniqueResults.get(recipeId)?.score || 1) > (result.score || 1)) {
      uniqueResults.set(recipeId, result);
    }
  });

  // Filter by minimum score if provided
  const filteredResults = options?.minScore
    ? Array.from(uniqueResults.values()).filter(result => (result.score || 0) <= options.minScore!)
    : Array.from(uniqueResults.values());

  // Sort by score and return recipes
  return filteredResults
    .sort((a, b) => (a.score || 0) - (b.score || 0))
    .map(result => result.item);
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

