'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { HiSearch, HiX } from 'react-icons/hi';
// Client component - uses API route to fetch recipes
import { Recipe } from '@/types/recipe';
import SearchAutocomplete from './SearchAutocomplete';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

export default function SearchBar({ 
  className = '', 
  placeholder = 'Search recipes...',
  autoFocus = false 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Load recipes on client side via API
    const loadRecipes = async () => {
      try {
        const response = await fetch('/api/recipes');
        const data = await response.json();
        setRecipes(data.recipes || []);
      } catch (error) {
        console.error('Error loading recipes:', error);
        setRecipes([]);
      }
    };
    loadRecipes();
  }, []);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Close autocomplete when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    if (isFocused) {
      // Use a small delay to allow click events on autocomplete items
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isFocused]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setIsFocused(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setQuery('');
      setIsFocused(false);
      inputRef.current?.blur();
    }
  };

  const clearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleSelectRecipe = (recipe: Recipe) => {
    router.push(`/recipes/${recipe.slug}`);
    setQuery('');
    setIsFocused(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form 
        onSubmit={handleSubmit}
        className="relative"
        role="search"
        aria-label="Recipe search"
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
            <HiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="block w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white min-h-[44px]"
            aria-label="Search recipes"
            aria-autocomplete="list"
            aria-controls="search-autocomplete"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Clear search"
            >
              <HiX className="h-5 w-5" />
            </button>
          )}
        </div>
      </form>

      {/* Autocomplete Dropdown */}
      {isFocused && recipes.length > 0 && (
        <SearchAutocomplete
          query={query}
          recipes={recipes}
          onSelect={handleSelectRecipe}
          maxResults={5}
        />
      )}
    </div>
  );
}

