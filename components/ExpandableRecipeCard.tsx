'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/recipe';
import SocialShareCompact from './SocialShareCompact';

interface ExpandableRecipeCardProps {
  recipe: Recipe;
}

export default function ExpandableRecipeCard({ recipe }: ExpandableRecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure image URL is absolute for social sharing
  const imageUrl = recipe.image.startsWith('http') 
    ? recipe.image 
    : `https://vegancooking.recipes${recipe.image.startsWith('/') ? recipe.image : `/${recipe.image}`}`;
  
  const recipeUrl = `https://vegancooking.recipes/recipes/${recipe.slug}`;
  const shareTitle = `${recipe.title} - Vegan Recipe | vegancooking.recipes`;
  const shareDescription = recipe.description || `Delicious vegan ${recipe.title} recipe. Find this and more plant-based recipes at vegancooking.recipes`;

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Compact Preview View */}
      <div className="relative">
        <Link href={`/recipes/${recipe.slug}`} className="block">
          <div className="relative h-40 sm:h-48 md:h-52 w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={recipe.image}
              alt={`${recipe.title} - Vegan recipe image`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>
        
        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Link href={`/recipes/${recipe.slug}`} className="flex-1">
              <h2 className="text-lg sm:text-xl font-bold line-clamp-2 leading-tight hover:text-green-600 transition-colors">
                {recipe.title}
              </h2>
            </Link>
            <button
              onClick={toggleExpand}
              className="flex-shrink-0 ml-2 p-1 text-gray-500 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
              aria-label={isExpanded ? 'Collapse recipe details' : 'Expand recipe details'}
              aria-expanded={isExpanded}
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
          
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 flex-wrap gap-2">
            <span className="whitespace-nowrap">{recipe.totalTime} min total</span>
            {recipe.cookTime > 0 && (
              <span className="whitespace-nowrap">{recipe.cookTime} min cook</span>
            )}
            <span className="whitespace-nowrap">{recipe.servings} servings</span>
            <span className="capitalize whitespace-nowrap">{recipe.difficulty}</span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {recipe.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-green-100 text-green-800 text-xs rounded-full capitalize"
              >
                {cat}
              </span>
            ))}
            {recipe.category.length > 2 && (
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{recipe.category.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Details View */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 border-t border-gray-200">
          {/* Full Description */}
          {recipe.prologue && (
            <div className="mt-4 mb-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {recipe.prologue}
              </p>
            </div>
          )}

          {/* All Categories */}
          {recipe.category.length > 2 && (
            <div className="mb-4">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Categories:</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {recipe.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-green-100 text-green-800 text-xs rounded-full capitalize"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Ingredients Preview */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Key Ingredients ({recipe.ingredients.length}):
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                {recipe.ingredients.slice(0, 5).map((ing) => ing.name).join(', ')}
                {recipe.ingredients.length > 5 && '...'}
              </p>
            </div>
          )}

          {/* Nutrition Info */}
          {recipe.nutritionInfo && (
            <div className="mb-4">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Nutrition (per serving):</h3>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-600">
                {recipe.nutritionInfo.calories && (
                  <span>{recipe.nutritionInfo.calories} cal</span>
                )}
                {recipe.nutritionInfo.protein && (
                  <span>{recipe.nutritionInfo.protein} protein</span>
                )}
                {recipe.nutritionInfo.carbs && (
                  <span>{recipe.nutritionInfo.carbs} carbs</span>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-200">
            <Link
              href={`/recipes/${recipe.slug}`}
              className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              View Full Recipe
            </Link>
            <div className="flex-shrink-0">
              <SocialShareCompact
                url={recipeUrl}
                title={shareTitle}
                description={shareDescription}
                image={imageUrl}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Share (always visible in compact mode) */}
      {!isExpanded && (
        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-0 flex justify-end">
          <SocialShareCompact
            url={recipeUrl}
            title={shareTitle}
            description={shareDescription}
            image={imageUrl}
          />
        </div>
      )}
    </article>
  );
}

