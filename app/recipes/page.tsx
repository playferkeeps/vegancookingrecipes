import { getAllRecipesAsync } from '@/data/recipes/helpers';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';

export const metadata = {
  title: 'All Vegan Recipes | vegancooking.recipes',
    description: 'Browse our complete collection of vegan recipes at vegancooking.recipes. From baking to savory dishes, international cuisine, breakfast, lunch, dinner, and desserts.',
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

export default async function RecipesPage() {
  const recipes = await getAllRecipesAsync();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-1 sm:px-0">All Recipes</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 px-1 sm:px-0">
          Discover our complete collection of delicious vegan recipes.
        </p>
        <div className="max-w-2xl mb-4 sm:mb-6">
          <SearchBar
            placeholder="Search recipes by name, ingredients, or tags..."
            className="w-full"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

