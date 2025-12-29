import { getAllRecipes } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';

export const metadata = {
  title: 'All Vegan Recipes | vegancooking.recipes',
  description: 'Browse our complete collection of vegan recipes at vegancooking.recipes. From baking to savory dishes, ethnic cuisine, breakfast, lunch, dinner, and desserts.',
  keywords: ['vegan recipes', 'all vegan recipes', 'vegancooking.recipes', 'plant-based recipes'],
  openGraph: {
    title: 'All Vegan Recipes | vegancooking.recipes',
    description: 'Browse our complete collection of vegan recipes at vegancooking.recipes.',
    type: 'website',
    url: 'https://vegancooking.recipes/recipes',
    siteName: 'vegancooking.recipes',
  },
  alternates: {
    canonical: 'https://vegancooking.recipes/recipes',
  },
};

export default function RecipesPage() {
  const recipes = getAllRecipes();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Recipes</h1>
        <p className="text-xl text-gray-600">
          Discover our complete collection of delicious vegan recipes.
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

