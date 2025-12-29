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
  // Ensure image URL is absolute for Open Graph
  const imageUrl = recipe.image.startsWith('http') 
    ? recipe.image 
    : `https://vegancooking.recipes${recipe.image.startsWith('/') ? recipe.image : `/${recipe.image}`}`;
  
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
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: recipe.datePublished,
      modifiedTime: recipe.dateModified || recipe.datePublished,
      authors: ['vegancooking.recipes'],
      section: recipe.category[0] || 'Recipes',
      tags: recipe.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${recipe.title} | vegancooking.recipes`,
      description: `${recipe.description} - Find this and more vegan recipes at vegancooking.recipes`,
      images: [imageUrl],
      site: '@vegancooking',
      creator: '@vegancooking',
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

// Generate JSON-LD structured data for SEO (2025/2026 best practices)
function generateStructuredData(recipe: Recipe) {
  const url = `https://vegancooking.recipes/recipes/${recipe.slug}`;
  // Ensure image URL is absolute for structured data
  const imageUrl = recipe.image.startsWith('http') 
    ? recipe.image 
    : `https://vegancooking.recipes${recipe.image.startsWith('/') ? recipe.image : `/${recipe.image}`}`;
  
  // Base Recipe schema
  const recipeSchema: any = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    image: Array.isArray(recipe.image) ? recipe.image : [imageUrl],
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'vegancooking.recipes',
      url: 'https://vegancooking.recipes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vegancooking.recipes/img/vcr-logo-lg.png',
      },
    },
    author: {
      '@type': 'Organization',
      name: 'vegancooking.recipes',
      url: 'https://vegancooking.recipes',
    },
    datePublished: recipe.datePublished,
    dateModified: recipe.dateModified || recipe.datePublished,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.totalTime}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.category.join(', '),
    keywords: [...recipe.tags, ...recipe.category, 'vegancooking.recipes', 'vegan recipes'].join(', '),
    recipeIngredient: recipe.ingredients.map(
      (ing) => {
        const ingredient = typeof ing === 'string' ? ing : ing.name;
        const amount = typeof ing === 'string' ? '' : (ing.amount || '');
        const unit = typeof ing === 'string' ? '' : (ing.unit || '');
        const notes = typeof ing === 'string' ? '' : (ing.notes || '');
        return `${amount} ${unit} ${ingredient}${notes ? ` (${notes})` : ''}`.trim();
      }
    ),
    recipeInstructions: recipe.instructions.map((inst) => ({
      '@type': 'HowToStep',
      position: inst.step,
      text: inst.text,
      name: `Step ${inst.step}`,
    })),
    suitableForDiet: 'https://schema.org/VegetarianDiet',
    recipeCuisine: recipe.category.includes('international') ? 'International' : 'Vegan',
  };

  // Add nutrition information if available
  if (recipe.nutritionInfo) {
    recipeSchema.nutrition = {
      '@type': 'NutritionInformation',
      calories: recipe.nutritionInfo.calories ? `${recipe.nutritionInfo.calories}` : undefined,
      proteinContent: recipe.nutritionInfo.protein,
      carbohydrateContent: recipe.nutritionInfo.carbs,
      fatContent: recipe.nutritionInfo.fat,
      fiberContent: recipe.nutritionInfo.fiber,
      sugarContent: recipe.nutritionInfo.sugar,
    };
  }

  // Add difficulty level
  if (recipe.difficulty) {
    recipeSchema.difficulty = recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1);
  }

  // Add FAQ schema if available (2025/2026 best practice)
  const schemas = [recipeSchema];
  
  if (recipe.faqs && recipe.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: recipe.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  // Add BreadcrumbList schema (2025/2026 best practice)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vegancooking.recipes',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Recipes',
        item: 'https://vegancooking.recipes/recipes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: recipe.category[0] ? recipe.category[0].charAt(0).toUpperCase() + recipe.category[0].slice(1) : 'Recipe',
        item: recipe.category[0] ? `https://vegancooking.recipes/categories/${recipe.category[0]}` : undefined,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: recipe.title,
        item: url,
      },
    ],
  });

  // Add Article schema for better SEO (2025/2026 best practice)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: recipe.title,
    description: recipe.description,
    image: imageUrl,
    datePublished: recipe.datePublished,
    dateModified: recipe.dateModified || recipe.datePublished,
    author: {
      '@type': 'Organization',
      name: 'vegancooking.recipes',
      url: 'https://vegancooking.recipes',
    },
    publisher: {
      '@type': 'Organization',
      name: 'vegancooking.recipes',
      url: 'https://vegancooking.recipes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vegancooking.recipes/img/vcr-logo-lg.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  });

  return schemas;
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const structuredData = generateStructuredData(recipe);
  const url = `https://vegancooking.recipes/recipes/${recipe.slug}`;

  // Handle both single schema and array of schemas
  const structuredDataArray = Array.isArray(structuredData) ? structuredData : [structuredData];

  return (
    <>
      {structuredDataArray.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <JumpToRecipe recipeId="recipe" />
      <article className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-4xl">
        {/* Recipe Header */}
        <header className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {Array.from(new Set(recipe.category)).map((cat, index) => (
                <span
                  key={`${cat}-${index}`}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-green-100 text-green-800 text-xs sm:text-sm rounded-full capitalize"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-1 sm:px-0">{recipe.title}</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 px-1 sm:px-0 leading-relaxed">{recipe.description}</p>
            
            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 px-1 sm:px-0">
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

          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] w-full rounded-lg overflow-hidden mb-6 sm:mb-8">
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
        <section className="mb-6 sm:mb-8">
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none px-1 sm:px-0">
            {recipe.prologue
              .split(/(?<=[.!?])\s+/)
              .filter(sentence => sentence.trim().length > 0)
              .map((sentence, index) => {
                const trimmedSentence = sentence.trim();
                return (
                  <p key={index} className="text-gray-700 leading-relaxed text-base sm:text-lg mb-3 sm:mb-4">
                    {trimmedSentence}
                  </p>
                );
              })}
          </div>

          {/* What Makes This Recipe Special - SEO Section */}
          <div className="bg-green-50 border-l-4 border-green-600 p-4 sm:p-6 rounded-r-lg mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">What Makes This Recipe Special</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
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
        <div id="recipe" className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg mt-8 sm:mt-12 mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight">{recipe.title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">{recipe.description}</p>
            
            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
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
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Nutrition (per serving)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
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
          <section className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Instructions</h3>
            <ol className="space-y-3 sm:space-y-4">
              {recipe.instructions.map((instruction) => (
                <li key={instruction.step} className="flex gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm">
                    {instruction.step}
                  </span>
                  <p className="flex-1 text-sm sm:text-base text-gray-700 leading-relaxed">{instruction.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Tags */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {Array.from(new Set(recipe.tags)).map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full"
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

