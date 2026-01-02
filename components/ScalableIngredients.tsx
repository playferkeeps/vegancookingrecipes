'use client';

import { Ingredient } from '@/types/recipe';
import RecipeScaler from './RecipeScaler';
import IngredientsList from './IngredientsList';

interface ScalableIngredientsProps {
  ingredients: Ingredient[];
  originalServings: number;
}

export default function ScalableIngredients({ ingredients, originalServings }: ScalableIngredientsProps) {
  return (
    <RecipeScaler 
      ingredients={ingredients} 
      originalServings={originalServings}
    >
      {(scaledIngredients, scaledServings, scale) => (
        <>
          {scale !== 1 && (
            <div className="mb-3 sm:mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm sm:text-base text-green-800">
                <span className="font-semibold">Scaled to {scale}x:</span> This recipe now serves <span className="font-semibold">{scaledServings}</span> {scaledServings === 1 ? 'person' : 'people'}.
              </p>
            </div>
          )}
          <IngredientsList ingredients={scaledIngredients} />
        </>
      )}
    </RecipeScaler>
  );
}
