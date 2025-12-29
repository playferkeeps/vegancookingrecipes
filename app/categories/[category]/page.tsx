import { notFound } from 'next/navigation';
import { getRecipesByCategory, getAllRecipes } from '@/data/recipes';
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
  const recipes = getRecipesByCategory(category);
  
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
  const recipes = getAllRecipes();
  const categories = new Set<RecipeCategory>();
  
  recipes.forEach((recipe) => {
    recipe.category.forEach((cat) => categories.add(cat));
  });

  return Array.from(categories).map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categoryParam } = await params;
  const category = categoryParam as RecipeCategory;
  const recipes = getRecipesByCategory(category);

  if (recipes.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 capitalize">
          {category} Recipes
        </h1>
        <p className="text-xl text-gray-600">
          Discover our collection of {recipes.length} delicious {category} vegan recipes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

