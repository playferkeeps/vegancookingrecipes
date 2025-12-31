'use client';

import { Recipe, RecipeCategory, VeganType } from '@/types/recipe';
import { useMemo, useState } from 'react';

interface RecipeFiltersProps {
  recipes: Recipe[];
  // Time filters
  cookTimeMax: number | null;
  prepTimeMax: number | null;
  totalTimeMax: number | null;
  onCookTimeChange: (value: number | null) => void;
  onPrepTimeChange: (value: number | null) => void;
  onTotalTimeChange: (value: number | null) => void;
  // Category filters
  selectedCategories: RecipeCategory[];
  onCategoriesChange: (categories: RecipeCategory[]) => void;
  // Difficulty filter
  selectedDifficulty: ('easy' | 'medium' | 'hard')[];
  onDifficultyChange: (difficulty: ('easy' | 'medium' | 'hard')[]) => void;
  // Vegan type filters
  selectedVeganTypes: VeganType[];
  onVeganTypesChange: (types: VeganType[]) => void;
  // Servings filter
  servingsMin: number | null;
  servingsMax: number | null;
  onServingsMinChange: (value: number | null) => void;
  onServingsMaxChange: (value: number | null) => void;
  // Allergen filters
  glutenFree: boolean;
  nutFree: boolean;
  soyFree: boolean;
  onGlutenFreeChange: (value: boolean) => void;
  onNutFreeChange: (value: boolean) => void;
  onSoyFreeChange: (value: boolean) => void;
  // Tag filters
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  // Clear all
  onClearAll: () => void;
}

const ALL_CATEGORIES: RecipeCategory[] = [
  'baking',
  'savory',
  'international',
  'breakfast',
  'lunch',
  'dinner',
  'dessert',
  'snack',
  'beverage',
];

const ALL_VEGAN_TYPES: VeganType[] = [
  'raw-vegan',
  'whole-food-plant-based',
  'gluten-free-vegan',
  'oil-free-vegan',
  'high-protein-vegan',
  'budget-vegan',
  'gourmet-vegan',
];

const DIFFICULTY_OPTIONS: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];

const SERVINGS_OPTIONS = [1, 2, 3, 4, 6, 8, 10, 12, 15, 20];

const TIME_OPTIONS = [
  { label: 'Any', value: null },
  { label: '15 min', value: 15 },
  { label: '30 min', value: 30 },
  { label: '45 min', value: 45 },
  { label: '1 hour', value: 60 },
  { label: '1.5 hours', value: 90 },
  { label: '2 hours', value: 120 },
  { label: '3 hours', value: 180 },
];

export default function RecipeFilters({
  recipes,
  cookTimeMax,
  prepTimeMax,
  totalTimeMax,
  onCookTimeChange,
  onPrepTimeChange,
  onTotalTimeChange,
  selectedCategories,
  onCategoriesChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedVeganTypes,
  onVeganTypesChange,
  servingsMin,
  servingsMax,
  onServingsMinChange,
  onServingsMaxChange,
  glutenFree,
  nutFree,
  soyFree,
  onGlutenFreeChange,
  onNutFreeChange,
  onSoyFreeChange,
  selectedTags,
  onTagsChange,
  onClearAll,
}: RecipeFiltersProps) {
  // Extract all unique tags from recipes
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    recipes.forEach((recipe) => {
      recipe.tags?.forEach((tag) => tagSet.add(tag.toLowerCase()));
    });
    return Array.from(tagSet).sort();
  }, [recipes]);

  const hasActiveFilters = useMemo(() => {
    return (
      prepTimeMax !== null ||
      cookTimeMax !== null ||
      totalTimeMax !== null ||
      selectedCategories.length > 0 ||
      selectedDifficulty.length > 0 ||
      selectedVeganTypes.length > 0 ||
      servingsMin !== null ||
      servingsMax !== null ||
      glutenFree ||
      nutFree ||
      soyFree ||
      selectedTags.length > 0
    );
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

  const toggleCategory = (category: RecipeCategory) => {
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoriesChange([...selectedCategories, category]);
    }
  };

  const toggleDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    if (selectedDifficulty.includes(difficulty)) {
      onDifficultyChange(selectedDifficulty.filter((d) => d !== difficulty));
    } else {
      onDifficultyChange([...selectedDifficulty, difficulty]);
    }
  };

  const toggleVeganType = (type: VeganType) => {
    if (selectedVeganTypes.includes(type)) {
      onVeganTypesChange(selectedVeganTypes.filter((t) => t !== type));
    } else {
      onVeganTypesChange([...selectedVeganTypes, type]);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const formatCategoryLabel = (category: RecipeCategory): string => {
    return category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formatVeganTypeLabel = (type: VeganType): string => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between p-4 sm:p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          {hasActiveFilters && (
            <span className="px-2 py-0.5 text-xs font-medium bg-green-600 text-white rounded-full">
              {[
                prepTimeMax !== null ? 1 : 0,
                cookTimeMax !== null ? 1 : 0,
                totalTimeMax !== null ? 1 : 0,
                selectedCategories.length,
                selectedDifficulty.length,
                selectedVeganTypes.length,
                servingsMin !== null ? 1 : 0,
                servingsMax !== null ? 1 : 0,
                glutenFree ? 1 : 0,
                nutFree ? 1 : 0,
                soyFree ? 1 : 0,
                selectedTags.length,
              ].reduce((a, b) => a + b, 0)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClearAll();
              }}
              className="text-sm text-green-600 hover:text-green-700 font-medium"
            >
              Clear All
            </button>
          )}
          <svg
            className={`w-5 h-5 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-6">
        {/* Time Filters */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Time</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Prep Time (max)</label>
              <select
                value={prepTimeMax ?? ''}
                onChange={(e) => onPrepTimeChange(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {TIME_OPTIONS.map((option) => (
                  <option key={option.value ?? 'any'} value={option.value ?? ''}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Cook Time (max)</label>
              <select
                value={cookTimeMax ?? ''}
                onChange={(e) => onCookTimeChange(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {TIME_OPTIONS.map((option) => (
                  <option key={option.value ?? 'any'} value={option.value ?? ''}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Total Time (max)</label>
              <select
                value={totalTimeMax ?? ''}
                onChange={(e) => onTotalTimeChange(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {TIME_OPTIONS.map((option) => (
                  <option key={option.value ?? 'any'} value={option.value ?? ''}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-700'
                }`}
              >
                {formatCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Difficulty</h3>
          <div className="flex flex-wrap gap-2">
            {DIFFICULTY_OPTIONS.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => toggleDifficulty(difficulty)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors capitalize ${
                  selectedDifficulty.includes(difficulty)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-700'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Servings */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Servings</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Min</label>
              <select
                value={servingsMin ?? ''}
                onChange={(e) => onServingsMinChange(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Any</option>
                {SERVINGS_OPTIONS.map((servings) => (
                  <option key={servings} value={servings}>
                    {servings}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Max</label>
              <select
                value={servingsMax ?? ''}
                onChange={(e) => onServingsMaxChange(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Any</option>
                {SERVINGS_OPTIONS.map((servings) => (
                  <option key={servings} value={servings}>
                    {servings}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vegan Types */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Vegan Type</h3>
          <div className="flex flex-wrap gap-2">
            {ALL_VEGAN_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => toggleVeganType(type)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  selectedVeganTypes.includes(type)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-700'
                }`}
              >
                {formatVeganTypeLabel(type)}
              </button>
            ))}
          </div>
        </div>

        {/* Allergen-Friendly */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Allergen-Friendly</h3>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={glutenFree}
                onChange={(e) => onGlutenFreeChange(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">Gluten-Free</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={nutFree}
                onChange={(e) => onNutFreeChange(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">Nut-Free</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={soyFree}
                onChange={(e) => onSoyFreeChange(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">Soy-Free</span>
            </label>
          </div>
        </div>

        {/* Tags */}
        {allTags.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-colors capitalize ${
                    selectedTags.includes(tag)
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-700'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
        </div>
      )}
    </div>
  );
}

