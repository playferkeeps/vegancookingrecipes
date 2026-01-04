'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';
import IngredientsList from '@/components/IngredientsList';
import SocialShare from '@/components/SocialShare';

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
          🌱 Free Vegan Recipe Converter - Get Vegan Version of Any Recipe
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
          Transform any recipe into a <strong>vegan version</strong> instantly! Our free AI-powered <strong>vegan recipe converter</strong> creates delicious <strong>vegan recipes</strong> with perfect plant-based ingredient substitutions. Get <strong>vegan versions</strong> of your favorite dishes in seconds.
        </p>
        {veganizedCount !== null && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm sm:text-base text-green-800 mb-4">
            <span className="font-semibold">{veganizedCount.toLocaleString()}</span>
            <span>recipes veganized and counting!</span>
          </div>
        )}
        <div className="mt-6 flex justify-center">
          <SocialShare
            url={`${typeof window !== 'undefined' ? window.location.origin : 'https://vegancooking.recipes'}/veganize`}
            title="🌱 Veganize Any Recipe - Transform Recipes to Plant-Based"
            description="Use our AI-powered tool to instantly convert any recipe URL into a delicious, fully vegan version!"
          />
        </div>
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
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {veganizedRecipe.title}
                </h2>
                {veganizedRecipe.description && (
                  <p className="text-gray-600 text-lg">{veganizedRecipe.description}</p>
                )}
              </div>
              <div className="flex-shrink-0">
                <SocialShare
                  url={recipeStatus?.recipeUrl 
                    ? `${typeof window !== 'undefined' ? window.location.origin : 'https://vegancooking.recipes'}${recipeStatus.recipeUrl}`
                    : `${typeof window !== 'undefined' ? window.location.origin : 'https://vegancooking.recipes'}/veganize`}
                  title={veganizedRecipe.title}
                  description={veganizedRecipe.description || `Check out this delicious vegan recipe: ${veganizedRecipe.title}`}
                  image={veganizedRecipe.image}
                />
              </div>
            </div>
            
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
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How Our Vegan Recipe Converter Works</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4">
          Getting a <strong>vegan version</strong> of any recipe is simple with our free <strong>vegan recipe converter</strong>. Here&apos;s how to create <strong>vegan recipes</strong> instantly:
        </p>
        <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✅</span>
            <span><strong>Paste any recipe URL</strong> from popular cooking sites - our <strong>vegan recipe converter</strong> works with any recipe</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✅</span>
            <span><strong>Our AI extracts</strong> all recipe information and identifies non-vegan ingredients</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✅</span>
            <span><strong>Automatic vegan substitutions</strong> - non-vegan ingredients are replaced with perfect plant-based alternatives to create your <strong>vegan version</strong></span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✅</span>
            <span><strong>Updated instructions</strong> - cooking methods are adjusted for <strong>vegan recipes</strong> with plant-based techniques</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✅</span>
            <span><strong>Complete vegan recipe</strong> - you get a full <strong>vegan version</strong> ready to cook, with all ingredients and instructions</span>
          </li>
        </ul>
        <p className="text-base sm:text-lg text-gray-700 mt-4">
          Our <strong>vegan recipe converter</strong> is completely free and creates <strong>vegan versions</strong> in seconds. Try it now to get <strong>vegan recipes</strong> for any dish!
        </p>
      </div>

      {/* SEO Content - Why Use Our Vegan Recipe Converter */}
      <section className="mt-12 mb-8 bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Why Use Our Free Vegan Recipe Converter?
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          <p className="text-base sm:text-lg leading-relaxed">
            Our <strong>vegan recipe converter</strong> is the easiest way to get <strong>vegan versions</strong> of any recipe. Whether you&apos;re looking for <strong>vegan recipes</strong> for dinner, breakfast, or dessert, our tool instantly creates perfect <strong>vegan versions</strong> with intelligent plant-based substitutions.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Get Vegan Versions of Your Favorite Recipes
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Want a <strong>vegan version</strong> of grandma&apos;s chocolate cake? Need <strong>vegan recipes</strong> for your favorite comfort foods? Our <strong>vegan recipe converter</strong> makes it simple. Just paste the recipe URL and get an instant <strong>vegan version</strong> with all the flavor and none of the animal products.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Perfect Vegan Recipe Substitutions
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Our AI-powered <strong>vegan recipe converter</strong> knows the best plant-based alternatives for every ingredient. From <strong>vegan recipes</strong> that use flax eggs instead of eggs, to <strong>vegan versions</strong> with cashew cream instead of dairy, we create <strong>vegan recipes</strong> that actually work.
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
            Explore Our Vegan Recipe Collection
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            Already have <strong>vegan recipes</strong> you love? Browse our collection of <strong>vegan recipes</strong> for inspiration, or use our <strong>vegan recipe converter</strong> to create new <strong>vegan versions</strong> of dishes you&apos;ve always wanted to try. Check out our{' '}
            <Link href="/recipes" className="text-green-600 hover:text-green-700 underline font-medium">
              vegan recipe collection
            </Link>
            {' '}or explore by category:{' '}
            <Link href="/categories/baking" className="text-green-600 hover:text-green-700 underline font-medium">
              vegan baking recipes
            </Link>
            ,{' '}
            <Link href="/categories/savory" className="text-green-600 hover:text-green-700 underline font-medium">
              savory vegan recipes
            </Link>
            , and{' '}
            <Link href="/categories/dessert" className="text-green-600 hover:text-green-700 underline font-medium">
              vegan dessert recipes
            </Link>
            .
          </p>
        </div>
      </section>

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
