'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';
import { searchRecipes } from '@/lib/search';

interface SearchAutocompleteProps {
  query: string;
  recipes: Recipe[];
  onSelect?: (recipe: Recipe) => void;
  maxResults?: number;
}

export default function SearchAutocomplete({
  query,
  recipes,
  onSelect,
  maxResults,
}: SearchAutocompleteProps) {
  const [results, setResults] = useState<Recipe[]>([]);
  const [displayedResults, setDisplayedResults] = useState<Recipe[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const INITIAL_DISPLAY_COUNT = 10;
  const LOAD_MORE_COUNT = 10;

  // Debounced search - wait for typing pause to avoid blocking input
  useEffect(() => {
    // Clear any existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (query.trim().length >= 2) {
      // Wait for typing pause before searching (prevents blocking input)
      debounceTimerRef.current = setTimeout(() => {
        // User paused typing - show search results
        // Use a simple, fast search for autocomplete (only search titles and tags)
        const queryLower = query.toLowerCase();
        const searchResults = recipes
          .filter(recipe => {
            const titleMatch = recipe.title.toLowerCase().includes(queryLower);
            const tagMatch = recipe.tags.some(tag => tag.toLowerCase().includes(queryLower));
            return titleMatch || tagMatch;
          })
          .slice(0, 20); // Limit to 20 results for autocomplete
        
        setResults(searchResults);
        setDisplayedResults(searchResults.slice(0, INITIAL_DISPLAY_COUNT));
        setIsVisible(searchResults.length > 0);
        setSelectedIndex(-1);
      }, 300); // 300ms debounce for autocomplete
    } else if (query.trim().length === 0 && recipes.length > 0) {
      // Empty query - show popular recipes immediately (no search needed)
      setResults(recipes);
      setDisplayedResults(recipes.slice(0, INITIAL_DISPLAY_COUNT));
      setIsVisible(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setDisplayedResults([]);
      setIsVisible(false);
      setSelectedIndex(-1);
    }

    // Cleanup on unmount or query change
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, recipes]);

  // Handle infinite scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container || results.length <= displayedResults.length) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // Load more when user scrolls near bottom (within 100px)
      if (scrollHeight - scrollTop - clientHeight < 100) {
        const nextCount = Math.min(
          displayedResults.length + LOAD_MORE_COUNT,
          results.length
        );
        if (nextCount > displayedResults.length) {
          setDisplayedResults(results.slice(0, nextCount));
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [results, displayedResults]);

  useEffect(() => {
    // Scroll selected item into view
    if (selectedIndex >= 0 && listRef.current) {
      const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isVisible || displayedResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => {
          const nextIndex = prev < displayedResults.length - 1 ? prev + 1 : prev;
          // Load more if near end
          if (nextIndex >= displayedResults.length - 2 && results.length > displayedResults.length) {
            const nextCount = Math.min(
              displayedResults.length + LOAD_MORE_COUNT,
              results.length
            );
            setDisplayedResults(results.slice(0, nextCount));
          }
          return nextIndex;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < displayedResults.length) {
          handleSelect(displayedResults[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsVisible(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSelect = (recipe: Recipe) => {
    if (onSelect) {
      onSelect(recipe);
    }
    setIsVisible(false);
    setSelectedIndex(-1);
  };

  if (!isVisible || results.length === 0) {
    return null;
  }

  return (
    <div
      id="search-autocomplete"
      ref={containerRef}
      className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto"
      role="listbox"
      aria-label="Search suggestions"
      onKeyDown={handleKeyDown}
      onMouseDown={(e) => e.preventDefault()} // Prevent input blur when clicking on autocomplete
    >
      <ul ref={listRef} className="divide-y divide-gray-200">
        {displayedResults.map((recipe, index) => (
          <li
            key={recipe.id}
            role="option"
            aria-selected={index === selectedIndex}
            className={`
              ${index === selectedIndex ? 'bg-green-50' : 'bg-white hover:bg-gray-50'}
              transition-colors cursor-pointer
            `}
          >
            <Link
              href={`/recipes/${recipe.slug}`}
              onClick={() => handleSelect(recipe)}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
            >
              {/* Recipe Image */}
              <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-200" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={recipe.image}
                  alt={`${recipe.title} - Vegan recipe`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 64px, 80px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Recipe Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 line-clamp-1">
                  {recipe.title}
                </h3>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Prep:</span>
                    <span>{recipe.prepTime} min</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Servings:</span>
                    <span>{recipe.servings}</span>
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
        {results.length > displayedResults.length && (
          <li className="px-4 py-2 text-sm text-gray-500 text-center bg-gray-50">
            Showing {displayedResults.length} of {results.length} results. Scroll for more...
          </li>
        )}
      </ul>
    </div>
  );
}

