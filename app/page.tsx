import Link from 'next/link';
import Image from 'next/image';
import { getAllRecipes, getRecipesByCategory } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';
import AdBanner from '@/components/AdBanner';
import AdInFeed from '@/components/AdInFeed';
import { Recipe } from '@/types/recipe';

// Generate Organization schema for homepage SEO (2025/2026 best practice)
function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'vegancooking.recipes',
    url: 'https://vegancooking.recipes',
    logo: 'https://vegancooking.recipes/img/vcr-logo-lg.png',
    description: 'Discover amazing vegan recipes for every meal at vegancooking.recipes. From baking to savory dishes, international cuisine, and more.',
    sameAs: [
      'https://twitter.com/vegancooking',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://vegancooking.recipes',
    },
  };
}

// Generate WebSite schema with search action (2025/2026 best practice)
function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'vegancooking.recipes',
    url: 'https://vegancooking.recipes',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://vegancooking.recipes/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Force dynamic rendering to show random recipes on each page load
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Vegan Recipes - Plant-Based Meals | vegancooking.recipes',
  description: 'Discover delicious vegan recipes for every meal. Plant-based cooking with baking, savory dishes, and international cuisine. Easy, healthy, and delicious.',
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

/**
 * Get random recipes from an array
 */
function getRandomRecipes(recipes: Recipe[], count: number): Recipe[] {
  if (recipes.length <= count) {
    return shuffleArray(recipes);
  }
  return shuffleArray(recipes).slice(0, count);
}

export default function Home() {
  const allRecipes = getAllRecipes();
  
  // Get random recipes for each section
  const featuredRecipes = getRandomRecipes(allRecipes, 6);
  const bakingRecipes = getRandomRecipes(getRecipesByCategory('baking'), 3);
  const savoryRecipes = getRandomRecipes(getRecipesByCategory('savory'), 3);
  const internationalRecipes = getRandomRecipes(getRecipesByCategory('international'), 3);

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Vegan Recipes</h2>
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
              <h2 className="text-3xl font-bold mb-4">Vegan Baking Recipes</h2>
              <p className="text-gray-600 mb-6">
                Discover our collection of sweet and savory baked goods that are completely plant-based. From fluffy vegan cakes to hearty breads, our baking recipes use only plant-based ingredients without compromising on taste or texture. Perfect for breakfast, dessert, or anytime you crave something baked.
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
                  aria-label="Browse all vegan baking recipes"
                >
                  View All Baking Recipes →
                </Link>
              </div>
            </div>

            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">Savory Vegan Recipes</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                Indulge in our hearty and flavorful savory dishes perfect for every occasion. From comforting soups and stews to satisfying main courses, these plant-based recipes prove that vegan food can be both nutritious and incredibly delicious. Each dish is packed with flavor and designed to satisfy even the most discerning palate.
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
                  aria-label="Browse all savory vegan recipes"
                >
                  View All Savory Recipes →
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">International Vegan Cuisine</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                Take a culinary journey around the world with our collection of international plant-based recipes. From Asian-inspired dishes to Mediterranean classics, Mexican favorites to Indian curries, discover how diverse and exciting vegan cooking can be. These authentic recipes bring global flavors to your kitchen while staying completely plant-based.
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
                  aria-label="Browse all international vegan recipes"
                >
                  View All International Recipes →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Additional Content for SEO */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Vegan Cooking Recipes</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Welcome to vegancooking.recipes, your ultimate destination for delicious, healthy, and easy-to-follow vegan recipes. Our mission is to make plant-based cooking accessible, enjoyable, and inspiring for everyone, whether you&apos;re a seasoned vegan or just starting your journey toward a more plant-based lifestyle.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that vegan food should be anything but boring. That&apos;s why we&apos;ve curated a diverse collection of recipes spanning all meal types and cuisines. From quick breakfast ideas to elaborate dinner parties, from simple snacks to decadent desserts, we have something for every occasion and every skill level.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All our recipes are carefully tested and developed to ensure they&apos;re not only delicious but also nutritious. We focus on using whole, plant-based ingredients that provide essential nutrients while delivering incredible flavors. Our recipes are free from animal products, making them suitable for vegans, vegetarians, and anyone looking to incorporate more plant-based meals into their diet.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Whether you&apos;re looking for comfort food classics made vegan, exploring international cuisines, or trying your hand at plant-based baking, vegancooking.recipes has you covered. Join our community of plant-based food lovers and discover how delicious and satisfying vegan cooking can be.
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                For more information about vegan nutrition and cooking tips, visit{' '}
                <a 
                  href="https://www.vegan.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  The Vegan Society
                </a>
                {' '}or explore plant-based resources at{' '}
                <a 
                  href="https://www.plantbasednews.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Plant Based News
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

