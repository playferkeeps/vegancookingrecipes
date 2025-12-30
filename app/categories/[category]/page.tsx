import { notFound } from 'next/navigation';
import { getRecipesByCategoryAsync, getAllRecipesAsync } from '@/data/recipes/helpers';
import { RecipeCategory } from '@/types/recipe';
import RecipeCard from '@/components/RecipeCard';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { category: categoryParam } = await params;
  const category = categoryParam as RecipeCategory;
  const recipes = await getRecipesByCategoryAsync(category);
  
  if (recipes.length === 0) {
    return {
      title: 'Category Not Found',
    };
  }

  const categoryUrl = `https://vegancooking.recipes/categories/${category}`;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${categoryName} Vegan Recipes | vegancooking.recipes`,
    description: `Browse our collection of ${category} vegan recipes at vegancooking.recipes. Find delicious plant-based ${category} recipes.`,
    keywords: [`${category} vegan recipes`, 'vegan recipes', 'vegancooking.recipes', `vegan ${category}`],
    openGraph: {
      title: `${categoryName} Vegan Recipes | vegancooking.recipes`,
      description: `Browse our collection of ${category} vegan recipes at vegancooking.recipes.`,
      type: 'website',
      url: categoryUrl,
      siteName: 'vegancooking.recipes',
    },
    alternates: {
      canonical: categoryUrl,
    },
  };
}

export async function generateStaticParams() {
  const recipes = await getAllRecipesAsync();
  const categories = new Set<RecipeCategory>();
  
  recipes.forEach((recipe) => {
    recipe.category.forEach((cat) => categories.add(cat));
  });

  return Array.from(categories).map((category) => ({
    category,
  }));
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categoryParam } = await params;
  const category = categoryParam as RecipeCategory;
  const recipes = await getRecipesByCategoryAsync(category);

  if (recipes.length === 0) {
    notFound();
  }

  // Shuffle recipes for random display
  const shuffledRecipes = shuffleArray(recipes);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 capitalize px-1 sm:px-0">
          {category} Recipes
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 px-1 sm:px-0">
          Discover our collection of {shuffledRecipes.length} delicious {category} vegan recipes.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {shuffledRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

