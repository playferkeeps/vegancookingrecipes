import Link from 'next/link';
import Image from 'next/image';
import { getAllRecipesAsync, getRecipesByCategoryAsync } from '@/data/recipes/helpers';
import RecipeCard from '@/components/RecipeCard';
import AdBanner from '@/components/AdBanner';
import AdInFeed from '@/components/AdInFeed';
import SocialShare from '@/components/SocialShare';
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
    title: 'Vegan Cooking Recipes - Delicious Plant-Based Meals',
    description: 'Discover amazing vegan recipes for every meal. From baking to savory dishes, international cuisine, and more. All recipes are plant-based, delicious, and easy to follow.',
    type: 'website',
    url: 'https://vegancooking.recipes',
    siteName: 'vegancooking.recipes',
    locale: 'en_US',
    images: [
      {
        url: 'https://vegancooking.recipes/img/vcr-logo-lg.png',
        width: 1200,
        height: 630,
        alt: 'vegancooking.recipes - Vegan Cooking Recipes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vegan Cooking Recipes - Delicious Plant-Based Meals',
    description: 'Discover amazing vegan recipes for every meal. Plant-based cooking made easy.',
    site: '@vegancooking',
    creator: '@vegancooking',
    images: ['https://vegancooking.recipes/img/vcr-logo-lg.png'],
  },
  alternates: {
    canonical: 'https://vegancooking.recipes/',
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
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

export default async function Home() {
  // Fetch all recipes sequentially to avoid connection pool exhaustion
  // Supabase session mode only allows 1 connection at a time
  // Running queries in parallel causes "max clients reached" errors
  const allRecipes = await getAllRecipesAsync();
  const bakingRecipesArray = await getRecipesByCategoryAsync('baking');
  const savoryRecipesArray = await getRecipesByCategoryAsync('savory');
  const internationalRecipesArray = await getRecipesByCategoryAsync('international');
  
  // Get random recipes for each section
  const featuredRecipes = getRandomRecipes(allRecipes, 6);
  const bakingRecipes = getRandomRecipes(bakingRecipesArray, 3);
  const savoryRecipes = getRandomRecipes(savoryRecipesArray, 3);
  const internationalRecipes = getRandomRecipes(internationalRecipesArray, 3);

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
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Delicious Vegan Recipes
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
              I&apos;m so glad you&apos;re here! I&apos;ve been cooking up plant-based magic in my kitchen, and I&apos;m excited to share these recipes with you. Whether you&apos;re craving something sweet, savory, or from halfway around the world, I&apos;ve got you covered.
            </p>
            <Link
              href="/recipes"
              className="inline-block bg-white text-green-600 font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 text-sm sm:text-base min-h-[44px] flex items-center justify-center"
              aria-label="Browse all vegan recipes"
            >
              Browse Recipes
            </Link>
          </div>
        </section>

        {/* Top Banner Ad */}
        <AdBanner />

        {/* Banner Ad After Featured Recipes */}
        <AdBanner />

        {/* Featured Recipes */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Some of My Favorites</h2>
          <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            These are recipes I come back to again and again—the ones I make when I need something comforting, or when I want to impress friends, or just when I&apos;m craving something really good. I&apos;ve tested every single one, and I promise they&apos;re worth making. Whether you&apos;re just starting your plant-based journey or you&apos;ve been at this for years, I think you&apos;ll find something here that speaks to you.
          </p>
          <div className="mb-8 flex flex-col items-center gap-3">
            <p className="text-sm font-semibold text-gray-700">Share vegancooking.recipes with friends:</p>
            <SocialShare
              url="https://vegancooking.recipes"
              title="Vegan Recipes - Plant-Based Meals | vegancooking.recipes"
              description="Discover delicious vegan recipes for every meal. Plant-based cooking with baking, savory dishes, and international cuisine."
              image="https://vegancooking.recipes/img/vcr-logo-lg.png"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </section>

        {/* Category Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Recipe Categories</h2>
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Baking</h3>
              <p className="text-gray-600 mb-6">
                There&apos;s something magical about baking, isn&apos;t there? I love the way my kitchen smells when I&apos;m making bread, or the satisfaction of pulling a perfectly golden batch of cookies from the oven. All my baking recipes are plant-based, but I promise you won&apos;t miss the eggs or butter. I&apos;ve spent countless hours in my kitchen perfecting these—from fluffy cakes that actually rise to breads with that perfect crust. These are the recipes I make when I want to treat myself or share something special with the people I love.
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
                  More Baking Recipes
                </Link>
              </div>
            </div>

            <div className="mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">Savory</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                This is where I really get to play with flavors. I love creating hearty, satisfying dishes that make you forget you&apos;re eating plant-based. My soups and stews are what I turn to when I need comfort, and I&apos;ve learned that the secret is in layering flavors—a good base, the right herbs, and letting things simmer until they&apos;re just right. These are the recipes that have become staples in my kitchen, the ones I make when I want something that truly nourishes both body and soul.
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
                  More Savory Recipes
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">International</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                I&apos;ve always been fascinated by how different cultures approach plant-based cooking. Some of my favorite recipes come from adapting traditional dishes from around the world—like that time I spent weeks perfecting a vegan version of a curry I had in India, or when I figured out how to make plant-based versions of Mediterranean classics. These recipes let me travel through food, and I love sharing that experience with you. Each one tells a story, and I hope they inspire you to explore flavors you might not have tried before.
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
                  More International Recipes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Combined */}
        <section id="about" className="py-16 sm:py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
                About Vegan Cooking Recipes
              </h2>
              
              <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-20">
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                  Welcome! I&apos;m so happy you found your way here. This little corner of the internet is where I share the recipes I&apos;ve been developing in my kitchen—the ones that have become part of my regular rotation, the experiments that turned out better than I expected, and the dishes that make me excited to cook.
                </p>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                  When I first went plant-based, I was worried I&apos;d have to give up all my favorite foods. Turns out, I was wrong. I&apos;ve spent years figuring out how to make plant-based versions of everything I love, and along the way, I&apos;ve discovered that vegan food doesn&apos;t have to be complicated or boring. Sometimes it&apos;s a quick breakfast I can throw together on a busy morning. Other times, it&apos;s a project I spend a whole Sunday afternoon on. Both have their place.
                </p>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                  Every recipe here is something I&apos;ve actually made, usually multiple times. I test them, tweak them, and only share them when I&apos;m confident they&apos;ll work in your kitchen too. I focus on whole foods because that&apos;s what makes me feel good, but I also believe food should be joyful. So you&apos;ll find everything from simple, nourishing meals to the occasional treat that&apos;s just pure comfort.
                </p>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                  Whether you&apos;re looking to recreate a comfort food classic, try something from a different part of the world, or just need some inspiration for what to make for dinner, I hope you find something here that speaks to you. Cooking is such a personal thing, and I&apos;m honored you&apos;re letting me share a bit of my kitchen with you.
                </p>
              </div>

              {/* Meet Katie - The Chef Behind the Recipes */}
              <div className="border-t-2 border-gray-300 pt-12 sm:pt-16 mt-12 sm:mt-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center text-gray-900">
                  Meet Katie, The Chef Behind the Recipes
                </h3>
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
                  {/* Katie's Image - Circular */}
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                    <div className="rounded-full overflow-hidden shadow-xl ring-4 ring-green-100 hover:ring-green-200 transition-all duration-300">
                      <Image
                        src="/img/vcr-katie.png"
                        alt="Katie - Barefoot Chef and Creator of vegancooking.recipes"
                        width={200}
                        height={200}
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Bio Text */}
                  <div className="flex-1 space-y-5 sm:space-y-6">
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                      Hello beautiful souls, and welcome! I&apos;m Katie. 🌻 I believe the kitchen is a sacred space and that plants are our best medicine. I&apos;m a barefoot chef obsessed with whole foods, healing herbs, and cooking with intention.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                      My food philosophy is simple: nourish your body, respect Mother Earth, and eat with joy. The VCR on my apron stands for <strong className="text-green-700 font-semibold">Vibrant, Conscious, Roots</strong>—because that&apos;s what I hope my recipes help you cultivate. No judgment here, just big flavours and warm hugs. Let&apos;s get crunchy! 🥕✨🌱
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 sm:mt-16 text-center border-t border-gray-300 pt-8 sm:pt-10">
                <p className="text-gray-600 text-sm sm:text-base">
                  For more information about vegan nutrition and cooking tips, visit{' '}
                  <a 
                    href="https://www.vegan.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 underline font-medium transition-colors"
                  >
                    The Vegan Society
                  </a>
                  {' '}or explore plant-based resources at{' '}
                  <a 
                    href="https://www.plantbasednews.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 underline font-medium transition-colors"
                  >
                    Plant Based News
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

