'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';
import IngredientsList from '@/components/IngredientsList';

export default function VeganizePage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [veganizedRecipe, setVeganizedRecipe] = useState<Recipe | null>(null);
  const [recipeStatus, setRecipeStatus] = useState<{ saved: boolean; alreadyExists: boolean; recipeUrl: string | null } | null>(null);
  const [veganizedCount, setVeganizedCount] = useState<number | null>(null);

  // Fetch veganized recipe count on mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/veganize/stats');
        if (response.ok) {
          const data = await response.json();
          setVeganizedCount(data.veganizedCount || 0);
        }
      } catch (err) {
        console.error('Failed to fetch veganized count:', err);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setVeganizedRecipe(null);
    setRecipeStatus(null);

    try {
      const response = await fetch('/api/veganize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to veganize recipe');
      }

      const data = await response.json();
      setVeganizedRecipe(data.recipe);
      setRecipeStatus({
        saved: data.saved || false,
        alreadyExists: data.alreadyExists || false,
        recipeUrl: data.recipeUrl || null,
      });

      // Update count if a new recipe was saved
      if (data.saved) {
        setVeganizedCount((prev) => (prev !== null ? prev + 1 : 1));
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while veganizing the recipe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <header className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          🌱 Veganize Any Recipe
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
          Paste a recipe URL and we&apos;ll transform it into a delicious vegan version!
        </p>
        {veganizedCount !== null && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm sm:text-base text-green-800">
            <span className="font-semibold">{veganizedCount.toLocaleString()}</span>
            <span>recipes veganized and counting!</span>
          </div>
        )}
      </header>

      <form onSubmit={handleSubmit} className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/recipe/chocolate-cake"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-base"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !url}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-base whitespace-nowrap"
          >
            {loading ? 'Veganizing...' : 'Veganize Recipe'}
          </button>
        </div>
      </form>

      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {recipeStatus && (
        <div className={`mb-8 p-4 rounded-lg border ${
          recipeStatus.saved 
            ? 'bg-green-50 border-green-200' 
            : recipeStatus.alreadyExists 
            ? 'bg-blue-50 border-blue-200' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          {recipeStatus.saved && (
            <p className="text-green-800 font-medium">
              ✅ Recipe saved! <a href={recipeStatus.recipeUrl || '#'} className="underline hover:text-green-900">View recipe</a>
            </p>
          )}
          {recipeStatus.alreadyExists && !recipeStatus.saved && (
            <p className="text-blue-800 font-medium">
              ℹ️ This recipe already exists on our site. <a href={recipeStatus.recipeUrl || '#'} className="underline hover:text-blue-900">View existing recipe</a>
            </p>
          )}
        </div>
      )}

      {veganizedRecipe && (
        <article className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          {/* Recipe Header */}
          <header className="mb-6 sm:mb-8 border-b border-gray-200 pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {veganizedRecipe.title}
            </h2>
            {veganizedRecipe.description && (
              <p className="text-gray-600 text-lg">{veganizedRecipe.description}</p>
            )}
            
            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 text-sm sm:text-base text-gray-600">
              {veganizedRecipe.prepTime > 0 && (
                <span>⏱️ Prep: {veganizedRecipe.prepTime} min</span>
              )}
              {veganizedRecipe.cookTime > 0 && (
                <span>🔥 Cook: {veganizedRecipe.cookTime} min</span>
              )}
              {veganizedRecipe.totalTime > 0 && (
                <span>⏰ Total: {veganizedRecipe.totalTime} min</span>
              )}
              {veganizedRecipe.servings > 0 && (
                <span>👥 Serves: {veganizedRecipe.servings}</span>
              )}
              {veganizedRecipe.difficulty && (
                <span>📊 Difficulty: {veganizedRecipe.difficulty}</span>
              )}
            </div>
          </header>

          {/* Prologue */}
          {veganizedRecipe.prologue && (
            <div className="mb-6 sm:mb-8 prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{veganizedRecipe.prologue}</p>
            </div>
          )}

          {/* Ingredients */}
          {veganizedRecipe.ingredients && veganizedRecipe.ingredients.length > 0 && (
            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Ingredients
              </h3>
              <IngredientsList ingredients={veganizedRecipe.ingredients} />
            </section>
          )}

          {/* Ingredient Notes */}
          {veganizedRecipe.ingredientNotes && (
            <div className="mb-6 sm:mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Ingredient Notes</h4>
              <p className="text-green-800 text-sm sm:text-base">{veganizedRecipe.ingredientNotes}</p>
            </div>
          )}

          {/* Instructions */}
          {veganizedRecipe.instructions && veganizedRecipe.instructions.length > 0 && (
            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Instructions
              </h3>
              <ol className="space-y-4">
                {veganizedRecipe.instructions.map((instruction) => (
                  <li key={instruction.step} className="flex gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                      {instruction.step}
                    </span>
                    <p className="flex-1 text-sm sm:text-base text-gray-700 leading-relaxed">{instruction.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Tips */}
          {veganizedRecipe.tips && veganizedRecipe.tips.length > 0 && (
            <section className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Tips
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {veganizedRecipe.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Storage */}
          {veganizedRecipe.storage && (
            <section className="mb-6 sm:mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Storage</h4>
              <p className="text-blue-800 text-sm sm:text-base">{veganizedRecipe.storage}</p>
            </section>
          )}

          {/* Categories and Tags */}
          <div className="flex flex-wrap gap-2 mt-6 sm:mt-8 pt-6 border-t border-gray-200">
            {veganizedRecipe.category && veganizedRecipe.category.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {veganizedRecipe.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
            {veganizedRecipe.tags && veganizedRecipe.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {veganizedRecipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      )}

      {/* Info Section */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">How it works</h3>
        <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
          <li>✅ Paste any recipe URL from popular cooking sites</li>
          <li>✅ Our AI extracts the recipe information</li>
          <li>✅ Non-vegan ingredients are automatically replaced with plant-based alternatives</li>
          <li>✅ Instructions are updated to reflect vegan cooking methods</li>
          <li>✅ You get a complete veganized recipe ready to cook!</li>
        </ul>
      </div>

      {/* Terms of Service Notice */}
      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-900">
          <strong>Important:</strong> By using this tool, you agree that veganized recipes will be automatically 
          saved and published to our website. The veganized recipe becomes publicly accessible and may be used 
          by other visitors. Our AI transforms recipes using plant-based alternatives, but results may vary. 
          Please review the{' '}
          <Link href="/tos" className="underline font-medium hover:text-blue-700">
            Terms of Service
          </Link>{' '}
          for complete details about how veganized recipes are handled.
        </p>
      </div>
    </div>
  );
}
