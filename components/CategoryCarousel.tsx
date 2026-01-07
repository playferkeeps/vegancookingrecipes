'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

interface CategoryCarouselProps {
  category: string;
  totalRecipes: number;
}

export default function CategoryCarousel({ category, totalRecipes }: CategoryCarouselProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const RECIPES_PER_PAGE = 2;

  const loadRecipes = useCallback(async (offset: number) => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/categories/${encodeURIComponent(category)}/recipes?offset=${offset}&limit=${RECIPES_PER_PAGE}`
      );
      if (!response.ok) throw new Error('Failed to load recipes');
      
      const data = await response.json();
      const newRecipes = data.recipes || [];
      
      if (offset === 0) {
        // First load - replace all recipes
        setRecipes(newRecipes);
      } else {
        // Subsequent loads - append to existing
        setRecipes(prev => [...prev, ...newRecipes]);
      }
      
      setHasMore(offset + RECIPES_PER_PAGE < data.total);
    } catch (error) {
      console.error('Error loading recipes:', error);
    } finally {
      setIsLoading(false);
    }
  }, [category, isLoading]);

  // Load initial recipes
  useEffect(() => {
    loadRecipes(0);
    setCurrentPage(0);
  }, [category, loadRecipes]);

  const handleNext = async () => {
    const nextPage = currentPage + 1;
    const nextOffset = nextPage * RECIPES_PER_PAGE;
    
    // If we need more recipes and haven't loaded them yet, load them first
    if (nextOffset >= recipes.length && hasMore && !isLoading) {
      await loadRecipes(recipes.length);
    }
    
    // Check if we can move to next page
    const maxPage = Math.ceil(totalRecipes / RECIPES_PER_PAGE) - 1;
    if (nextPage <= maxPage && (nextOffset < recipes.length || hasMore)) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrev = () => {
    const prevPage = Math.max(0, currentPage - 1);
    setCurrentPage(prevPage);
  };

  const maxPage = Math.ceil(totalRecipes / RECIPES_PER_PAGE) - 1;
  const canGoNext = currentPage < maxPage && (currentPage * RECIPES_PER_PAGE + RECIPES_PER_PAGE < recipes.length || hasMore);
  const canGoPrev = currentPage > 0;

  // Get the 3 recipes for current page
  const startIndex = currentPage * RECIPES_PER_PAGE;
  const endIndex = startIndex + RECIPES_PER_PAGE;
  const visibleRecipes = recipes.slice(startIndex, endIndex);

  // Show loading state on first load
  if (recipes.length === 0 && isLoading) {
    return (
      <div className="mt-auto pt-5 border-t border-gray-200">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Preview Recipes</p>
        <div className="flex gap-4">
          {Array.from({ length: RECIPES_PER_PAGE }).map((_, i) => (
            <div key={`loading-${i}`} className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] max-w-[180px]">
              <div className="relative h-32 sm:h-36 w-full rounded-lg overflow-hidden mb-2 bg-gray-200 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (recipes.length === 0) {
    return null;
  }

  return (
    <div className="mt-auto pt-5 border-t border-gray-200">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Preview Recipes</p>
      
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div className="flex gap-4">
            {visibleRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.slug}`}
                className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] max-w-[180px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg group"
              >
                <div className="relative h-32 sm:h-36 w-full rounded-lg overflow-hidden mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 144px, 160px"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug text-gray-900 group-hover:text-green-600 transition-colors">
                  {recipe.title}
                </h3>
              </Link>
            ))}
            
            {/* Loading placeholder slots when loading more */}
            {isLoading && visibleRecipes.length < RECIPES_PER_PAGE && (
              Array.from({ length: RECIPES_PER_PAGE - visibleRecipes.length }).map((_, i) => (
                <div key={`loading-${i}`} className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] max-w-[180px]">
                  <div className="relative h-32 sm:h-36 w-full rounded-lg overflow-hidden mb-2 bg-gray-200 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        {totalRecipes > RECIPES_PER_PAGE && (
          <>
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              disabled={!canGoPrev || isLoading}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10 ${
                canGoPrev && !isLoading
                  ? 'text-gray-700 hover:text-green-600 cursor-pointer'
                  : 'text-gray-300 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous recipes"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!canGoNext || isLoading}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10 ${
                canGoNext && !isLoading
                  ? 'text-gray-700 hover:text-green-600 cursor-pointer'
                  : 'text-gray-300 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next recipes"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Page Indicator */}
      {totalRecipes > RECIPES_PER_PAGE && (
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="text-xs text-gray-500">
            {currentPage + 1} of {maxPage + 1}
          </span>
        </div>
      )}
    </div>
  );
}
