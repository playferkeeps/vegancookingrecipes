'use client';

import { useState, useEffect } from 'react';
import { Ingredient } from '@/types/recipe';

interface RecipeScalerProps {
  ingredients: Ingredient[];
  originalServings: number;
  children: (scaledIngredients: Ingredient[], scaledServings: number, scale: number) => React.ReactNode;
}

/**
 * Parse a fraction string (e.g., "1/2", "3/4") to a decimal number
 */
function parseFraction(fraction: string): number {
  const parts = fraction.split('/');
  if (parts.length === 2) {
    const numerator = parseFloat(parts[0]);
    const denominator = parseFloat(parts[1]);
    if (denominator !== 0) {
      return numerator / denominator;
    }
  }
  return parseFloat(fraction) || 0;
}

/**
 * Convert a decimal number to a fraction string (e.g., 0.5 -> "1/2", 1.5 -> "1 1/2")
 */
function toFraction(decimal: number): string {
  // Handle whole numbers
  if (decimal % 1 === 0) {
    return decimal.toString();
  }

  // Handle common fractions
  const tolerance = 0.001;
  const commonFractions: Array<[number, string]> = [
    [0.125, '1/8'],
    [0.25, '1/4'],
    [0.333, '1/3'],
    [0.375, '3/8'],
    [0.5, '1/2'],
    [0.625, '5/8'],
    [0.667, '2/3'],
    [0.75, '3/4'],
    [0.875, '7/8'],
  ];

  for (const [value, fraction] of commonFractions) {
    if (Math.abs(decimal - value) < tolerance) {
      return fraction;
    }
    if (Math.abs(decimal - (1 + value)) < tolerance) {
      return `1 ${fraction}`;
    }
    if (Math.abs(decimal - (2 + value)) < tolerance) {
      return `2 ${fraction}`;
    }
    if (Math.abs(decimal - (3 + value)) < tolerance) {
      return `3 ${fraction}`;
    }
  }

  // For other decimals, round to 2 decimal places
  return decimal.toFixed(2).replace(/\.?0+$/, '');
}

/**
 * Scale an ingredient amount
 */
function scaleAmount(amount: string, scale: number): string {
  if (!amount || amount.trim() === '') {
    return amount;
  }

  // Try to parse as fraction or decimal
  const amountStr = amount.trim();
  
  // Check if it's a mixed number (e.g., "1 1/2")
  const mixedMatch = amountStr.match(/^(\d+)\s+(\d+\/\d+)$/);
  if (mixedMatch) {
    const whole = parseFloat(mixedMatch[1]);
    const fraction = parseFraction(mixedMatch[2]);
    const total = (whole + fraction) * scale;
    return toFraction(total);
  }

  // Check if it's a fraction (e.g., "1/2", "3/4")
  const fractionMatch = amountStr.match(/^(\d+\/\d+)$/);
  if (fractionMatch) {
    const fraction = parseFraction(fractionMatch[1]);
    const scaled = fraction * scale;
    return toFraction(scaled);
  }

  // Try to parse as decimal
  const decimal = parseFloat(amountStr);
  if (!isNaN(decimal)) {
    const scaled = decimal * scale;
    return toFraction(scaled);
  }

  // If we can't parse it, return as-is
  return amount;
}

export default function RecipeScaler({ ingredients, originalServings, children }: RecipeScalerProps) {
  const [scale, setScale] = useState(1);

  const scaledIngredients: Ingredient[] = ingredients.map(ing => ({
    ...ing,
    amount: scaleAmount(ing.amount, scale),
  }));

  const scaledServings = Math.round(originalServings * scale);

  // Update servings display when scale changes
  useEffect(() => {
    const servingsElement = document.getElementById('servings-display');
    if (servingsElement) {
      servingsElement.textContent = scaledServings.toString();
    }
  }, [scale, scaledServings]);

  const handleScaleChange = (newScale: number) => {
    setScale(newScale);
  };

  return (
    <div>
      {/* Scaling Controls */}
      <div className="mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="text-sm sm:text-base font-semibold text-gray-700">Scale Recipe:</span>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((multiplier) => (
            <button
              key={multiplier}
              onClick={() => handleScaleChange(multiplier)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                scale === multiplier
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
              aria-label={`Scale recipe to ${multiplier}x`}
            >
              {multiplier}x
            </button>
          ))}
        </div>
        {scale !== 1 && (
          <button
            onClick={() => handleScaleChange(1)}
            className="text-sm sm:text-base text-gray-600 hover:text-gray-800 underline ml-2"
            aria-label="Reset to original scale"
          >
            Reset
          </button>
        )}
      </div>

      {/* Render children with scaled data */}
      {children(scaledIngredients, scaledServings, scale)}
    </div>
  );
}
