import Link from 'next/link';
import Image from 'next/image';
import { getAllRecipes, getRecipesByCategory } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';
import AdBanner from '@/components/AdBanner';
import AdInFeed from '@/components/AdInFeed';

export const metadata = {
  title: 'Home - Delicious Vegan Recipes for Every Meal | vegancooking.recipes',
    description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes. From baking to savory dishes, international cuisine, breakfast, lunch, dinner, and desserts. All recipes are plant-based, delicious, and easy to follow.',
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
  const internationalRecipes = getRecipesByCategory('international').slice(0, 3);

  return (
    <>
      <div id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/img/vcr-hero.png"
              alt="Vegan Cooking Recipes"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Delicious Vegan Recipes
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
              Discover amazing plant-based recipes for every meal. From baking to savory dishes, international cuisine, and more.
            </p>
            <Link
              href="/recipes"
              className="inline-block bg-white text-green-600 font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 text-sm sm:text-base min-h-[44px] flex items-center justify-center"
            >
              Browse All Recipes
            </Link>
          </div>
        </section>

        {/* Top Banner Ad */}
        <AdBanner />

        {/* Featured Recipes */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <div key={recipe.id}>
                <RecipeCard recipe={recipe} />
                {/* In-feed ad after 3rd recipe */}
                {index === 2 && <AdInFeed />}
              </div>
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
              <div className="text-center mt-6 sm:mt-8">
                <Link
                  href="/categories/baking"
                  className="inline-block text-green-600 hover:text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-4 py-2.5 text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                >
                  View All Baking Recipes →
                </Link>
              </div>
            </div>

            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">Savory Recipes</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                Hearty and flavorful savory dishes for every occasion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {savoryRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
              <div className="text-center mt-6 sm:mt-8">
                <Link
                  href="/categories/savory"
                  className="inline-block text-green-600 hover:text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-4 py-2.5 text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                >
                  View All Savory Recipes →
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">International Cuisine</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                Explore flavors from around the world with these plant-based recipes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {internationalRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
              <div className="text-center mt-6 sm:mt-8">
                <Link
                  href="/categories/international"
                  className="inline-block text-green-600 hover:text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-4 py-2.5 text-sm sm:text-base min-h-[44px] flex items-center justify-center"
                >
                  View All International Recipes →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

