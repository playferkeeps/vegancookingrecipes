import Link from 'next/link';
import { getAllRecipes, getRecipesByCategory } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';

export const metadata = {
  title: 'Home - Delicious Vegan Recipes for Every Meal | vegancooking.recipes',
  description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes. From baking to savory dishes, ethnic cuisine, breakfast, lunch, dinner, and desserts. All recipes are plant-based, delicious, and easy to follow.',
  keywords: ['vegan recipes', 'plant-based cooking', 'vegancooking.recipes', 'vegan meals', 'vegan baking'],
  openGraph: {
    title: 'Vegan Cooking Recipes - Delicious Plant-Based Meals | vegancooking.recipes',
    description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes.',
    type: 'website',
    url: 'https://vegancooking.recipes',
    siteName: 'vegancooking.recipes',
  },
  alternates: {
    canonical: 'https://vegancooking.recipes',
  },
};

export default function Home() {
  const allRecipes = getAllRecipes();
  const featuredRecipes = allRecipes.slice(0, 6);
  const bakingRecipes = getRecipesByCategory('baking').slice(0, 3);
  const savoryRecipes = getRecipesByCategory('savory').slice(0, 3);
  const ethnicRecipes = getRecipesByCategory('ethnic').slice(0, 3);

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Delicious Vegan Recipes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover amazing plant-based recipes for every meal. From baking to savory dishes, ethnic cuisine, and more.
            </p>
            <Link
              href="/recipes"
              className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
            >
              Browse All Recipes
            </Link>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Category Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Baking Recipes</h2>
              <p className="text-gray-600 mb-6">
                Sweet and savory baked goods that are completely plant-based.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {bakingRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/categories/baking"
                  className="text-green-600 hover:text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1"
                >
                  View All Baking Recipes →
                </Link>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Savory Recipes</h2>
              <p className="text-gray-600 mb-6">
                Hearty and flavorful savory dishes for every occasion.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {savoryRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/categories/savory"
                  className="text-green-600 hover:text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1"
                >
                  View All Savory Recipes →
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Ethnic Cuisine</h2>
              <p className="text-gray-600 mb-6">
                Explore flavors from around the world with these plant-based recipes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ethnicRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/categories/ethnic"
                  className="text-green-600 hover:text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1"
                >
                  View All Ethnic Recipes →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

