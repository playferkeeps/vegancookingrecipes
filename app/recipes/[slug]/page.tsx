import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getRecipeBySlug, getAllRecipes } from '@/data/recipes/index';
import JumpToRecipe from '@/components/JumpToRecipe';
import SocialShare from '@/components/SocialShare';
import Comments from '@/components/Comments';
import RecipeVoting from '@/components/RecipeVoting';
import RecipeFAQ from '@/components/RecipeFAQ';
import RecipeTips from '@/components/RecipeTips';
import RelatedRecipes from '@/components/RelatedRecipes';
import IngredientsList from '@/components/IngredientsList';
import AdBanner from '@/components/AdBanner';
import AdRectangle from '@/components/AdRectangle';
import { Recipe } from '@/types/recipe';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  
  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    };
  }

  const url = `https://vegancooking.recipes/recipes/${recipe.slug}`;
  
  return {
    title: `${recipe.title} - Vegan Recipe | vegancooking.recipes`,
    description: `${recipe.description} - Find this and more vegan recipes at vegancooking.recipes`,
    keywords: [...recipe.tags, ...recipe.category, ...recipe.veganType, 'vegancooking.recipes', 'vegan recipes'].join(', '),
    openGraph: {
      title: `${recipe.title} | vegancooking.recipes`,
      description: `${recipe.description} - Find this and more vegan recipes at vegancooking.recipes`,
      url,
      siteName: 'vegancooking.recipes',
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${recipe.title} | vegancooking.recipes`,
      description: `${recipe.description} - Find this and more vegan recipes at vegancooking.recipes`,
      images: [recipe.image],
      site: '@vegancooking',
    },
    alternates: {
      canonical: url,
    },
    other: {
      'article:author': 'https://vegancooking.recipes',
      'article:publisher': 'https://vegancooking.recipes',
    },
  };
}

// Generate static params for all recipes
export async function generateStaticParams() {
  const { getAllRecipes: getAllRecipesFunc } = await import('@/data/recipes/index');
  const recipes = getAllRecipesFunc();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

// Generate JSON-LD structured data for SEO
function generateStructuredData(recipe: Recipe) {
  const url = `https://vegancooking.recipes/recipes/${recipe.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: recipe.image,
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'vegancooking.recipes',
      url: 'https://vegancooking.recipes',
    },
    author: {
      '@type': 'Person',
      name: recipe.author,
      url: 'https://vegancooking.recipes',
    },
    datePublished: recipe.datePublished,
    dateModified: recipe.dateModified || recipe.datePublished,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.totalTime}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category.join(', '),
    recipeCuisine: recipe.category.includes('international') ? 'International' : 'Vegan',
    keywords: [...recipe.tags, 'vegancooking.recipes', 'vegan recipes'].join(', '),
    recipeIngredient: recipe.ingredients.map(
      (ing) => `${ing.amount} ${ing.unit || ''} ${ing.name}${ing.notes ? ` (${ing.notes})` : ''}`
    ),
    recipeInstructions: recipe.instructions.map((inst) => ({
      '@type': 'HowToStep',
      position: inst.step,
      text: inst.text,
    })),
    nutrition: recipe.nutritionInfo
      ? {
          '@type': 'NutritionInformation',
          calories: `${recipe.nutritionInfo.calories} calories`,
          proteinContent: recipe.nutritionInfo.protein,
          carbohydrateContent: recipe.nutritionInfo.carbs,
          fatContent: recipe.nutritionInfo.fat,
          fiberContent: recipe.nutritionInfo.fiber,
          sugarContent: recipe.nutritionInfo.sugar,
        }
      : undefined,
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const structuredData = generateStructuredData(recipe);
  const url = `https://vegancooking.recipes/recipes/${recipe.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <JumpToRecipe recipeId="recipe" />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Recipe Header */}
        <header className="mb-8">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.category.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full capitalize"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{recipe.description}</p>
            
            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
              <div>
                <span className="font-semibold">Prep Time:</span> {recipe.prepTime} min
              </div>
              <div>
                <span className="font-semibold">Cook Time:</span> {recipe.cookTime} min
              </div>
              <div>
                <span className="font-semibold">Total Time:</span> {recipe.totalTime} min
              </div>
              <div>
                <span className="font-semibold">Servings:</span> {recipe.servings}
              </div>
              <div>
                <span className="font-semibold">Difficulty:</span>{' '}
                <span className="capitalize">{recipe.difficulty}</span>
              </div>
            </div>

            {/* Social Share */}
            <SocialShare
              url={url}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
            />
          </div>

          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </header>

        {/* Prologue Section */}
        <section className="mb-8">
          <div className="prose prose-lg max-w-none">
            {recipe.prologue
              .split(/(?<=[.!?])\s+/)
              .filter(sentence => sentence.trim().length > 0)
              .map((sentence, index) => {
                const trimmedSentence = sentence.trim();
                return (
                  <p key={index} className="text-gray-700 leading-relaxed text-lg mb-4">
                    {trimmedSentence}
                  </p>
                );
              })}
          </div>

          {/* What Makes This Recipe Special - SEO Section */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">What Makes This Recipe Special</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-green-600 font-bold">✓</span>
                <span>Made with simple, plant-based ingredients that are easy to find</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600 font-bold">✓</span>
                <span>No animal products - completely vegan and cruelty-free</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600 font-bold">✓</span>
                <span>Perfect for beginners and experienced cooks alike</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-green-600 font-bold">✓</span>
                <span>Delicious results that everyone will love, vegan or not</span>
              </li>
            </ul>
          </div>
          
          {/* Jump to Recipe Button */}
          <div className="mt-6 flex justify-center">
            <a
              href="#recipe"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
              aria-label="Jump to recipe ingredients and instructions"
            >
              Jump to Recipe ↓
            </a>
          </div>
        </section>

        {/* Banner Ad After Prologue */}
        <AdBanner />

        {/* Tips, Variations, and Storage */}
        <RecipeTips
          tips={recipe.tips}
          ingredientNotes={recipe.ingredientNotes}
          variations={recipe.variations}
          storage={recipe.storage}
        />

        {/* FAQ Section */}
        {recipe.faqs && recipe.faqs.length > 0 && (
          <RecipeFAQ faqs={recipe.faqs} />
        )}

        {/* Voting Section */}
        <RecipeVoting recipeId={recipe.id} />

        {/* Related Recipes */}
        <RelatedRecipes
          currentRecipeId={recipe.id}
          relatedRecipeIds={recipe.relatedRecipeIds}
          category={recipe.category}
        />

        {/* Recipe Card - Moved to Bottom (Nora Cooks Style) */}
        <div id="recipe" className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10 shadow-lg mt-12 mb-8">
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-4xl font-bold mb-4">{recipe.title}</h2>
            <p className="text-xl text-gray-600 mb-6">{recipe.description}</p>
            
            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
              <div>
                <span className="font-semibold">Prep Time:</span> {recipe.prepTime} min
              </div>
              <div>
                <span className="font-semibold">Cook Time:</span> {recipe.cookTime} min
              </div>
              <div>
                <span className="font-semibold">Total Time:</span> {recipe.totalTime} min
              </div>
              <div>
                <span className="font-semibold">Servings:</span> {recipe.servings}
              </div>
              <div>
                <span className="font-semibold">Difficulty:</span>{' '}
                <span className="capitalize">{recipe.difficulty}</span>
              </div>
            </div>

            {/* Nutrition Info in Recipe Card */}
            {recipe.nutritionInfo && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-3">Nutrition (per serving)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {recipe.nutritionInfo.calories && (
                    <div>
                      <span className="font-semibold">Calories:</span> {recipe.nutritionInfo.calories}
                    </div>
                  )}
                  {recipe.nutritionInfo.protein && (
                    <div>
                      <span className="font-semibold">Protein:</span> {recipe.nutritionInfo.protein}
                    </div>
                  )}
                  {recipe.nutritionInfo.carbs && (
                    <div>
                      <span className="font-semibold">Carbs:</span> {recipe.nutritionInfo.carbs}
                    </div>
                  )}
                  {recipe.nutritionInfo.fat && (
                    <div>
                      <span className="font-semibold">Fat:</span> {recipe.nutritionInfo.fat}
                    </div>
                  )}
                  {recipe.nutritionInfo.fiber && (
                    <div>
                      <span className="font-semibold">Fiber:</span> {recipe.nutritionInfo.fiber}
                    </div>
                  )}
                  {recipe.nutritionInfo.sugar && (
                    <div>
                      <span className="font-semibold">Sugar:</span> {recipe.nutritionInfo.sugar}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Ingredients */}
          <IngredientsList ingredients={recipe.ingredients} />

          {/* In-Content Ad Between Ingredients and Instructions */}
          <AdRectangle className="hidden md:block" />

          {/* Instructions */}
          <section className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Instructions</h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {instruction.step}
                  </span>
                  <p className="flex-1 text-gray-700 leading-relaxed">{instruction.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Tags */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Banner Ad After Recipe Content */}
        <AdBanner />

        {/* Comments Section */}
        <Comments recipeId={recipe.id} />
      </article>
    </>
  );
}

