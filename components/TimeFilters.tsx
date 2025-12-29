'use client';

import { Recipe } from '@/types/recipe';

interface TimeFiltersProps {
  cookTimeMax: number | null;
  prepTimeMax: number | null;
  totalTimeMax: number | null;
  onCookTimeChange: (value: number | null) => void;
  onPrepTimeChange: (value: number | null) => void;
  onTotalTimeChange: (value: number | null) => void;
}

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

export default function TimeFilters({
  cookTimeMax,
  prepTimeMax,
  totalTimeMax,
  onCookTimeChange,
  onPrepTimeChange,
  onTotalTimeChange,
}: TimeFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex-1 min-w-[150px]">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Prep Time (max)
        </label>
        <select
          value={prepTimeMax ?? ''}
          onChange={(e) => onPrepTimeChange(e.target.value ? Number(e.target.value) : null)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
        >
          {TIME_OPTIONS.map((option) => (
            <option key={option.value ?? 'any'} value={option.value ?? ''}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1 min-w-[150px]">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cook Time (max)
        </label>
        <select
          value={cookTimeMax ?? ''}
          onChange={(e) => onCookTimeChange(e.target.value ? Number(e.target.value) : null)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
        >
          {TIME_OPTIONS.map((option) => (
            <option key={option.value ?? 'any'} value={option.value ?? ''}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex-1 min-w-[150px]">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Total Time (max)
        </label>
        <select
          value={totalTimeMax ?? ''}
          onChange={(e) => onTotalTimeChange(e.target.value ? Number(e.target.value) : null)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
        >
          {TIME_OPTIONS.map((option) => (
            <option key={option.value ?? 'any'} value={option.value ?? ''}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

