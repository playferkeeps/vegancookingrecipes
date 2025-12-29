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
  maxResults = 5,
}: SearchAutocompleteProps) {
  const [results, setResults] = useState<Recipe[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = searchRecipes(recipes, query, {
        limit: maxResults,
        minScore: 0.5, // Slightly more lenient for autocomplete
      });
      setResults(searchResults);
      setIsVisible(searchResults.length > 0);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsVisible(false);
      setSelectedIndex(-1);
    }
  }, [query, recipes, maxResults]);

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
    if (!isVisible || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleSelect(results[selectedIndex]);
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
      className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto"
      role="listbox"
      aria-label="Search suggestions"
      onKeyDown={handleKeyDown}
      onMouseDown={(e) => e.preventDefault()} // Prevent input blur when clicking on autocomplete
    >
      <ul ref={listRef} className="divide-y divide-gray-200">
        {results.map((recipe, index) => (
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
      </ul>
    </div>
  );
}

