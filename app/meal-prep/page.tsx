import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Vegan Meal Prep Guide - Easy Step-by-Step Instructions | vegancooking.recipes',
  description: 'Learn how to meal prep like a pro with our simple, easy-to-follow vegan meal prep guide. Step-by-step instructions to save time and eat healthy all week.',
  keywords: ['vegan meal prep', 'meal prep guide', 'plant-based meal prep', 'meal prep tips', 'vegan meal planning'],
};

export default function MealPrepGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero Section */}
      <header className="text-center mb-12 sm:mb-16">
        <div className="mb-8 sm:mb-10">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/img/meal-prep/meal-prep-hero.webp"
              alt="Organized kitchen with meal prep containers and fresh vegetables"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
          Vegan Meal Prep Guide
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Save time, eat healthy, and stay organized with our simple step-by-step meal prep guide. Perfect for busy weekdays!
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12 sm:mb-16">
        <div className="bg-green-50 rounded-lg p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why Meal Prep?</h2>
          <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              Meal prepping is one of the best ways to stay on track with your plant-based lifestyle. 
              By spending a few hours on the weekend, you can have healthy, delicious meals ready for the entire week.
            </p>
            <p>
              <strong className="text-green-700">Benefits:</strong> Save time during busy weekdays, reduce food waste, 
              save money, and make healthier choices effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          Your Simple 5-Step Meal Prep Plan
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-full md:w-auto flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="md:hidden relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/img/meal-prep/meal-prep-planning.webp"
                    alt="Meal prep planning"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="hidden md:block mb-4">
                  <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/img/meal-prep/meal-prep-planning.webp"
                      alt="Meal prep planning with handwritten plan and vegetables"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Plan Your Meals (15 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    <strong className="text-green-700">Choose 2-3 recipes</strong> you want to make for the week. 
                    Pick recipes that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Store well in the fridge (3-5 days)</li>
                    <li>Can be easily reheated</li>
                    <li>Use similar ingredients to reduce waste</li>
                    <li>You actually enjoy eating</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Pro tip:</strong> Browse our <Link href="/recipes" className="text-green-600 hover:text-green-700 underline">recipe collection</Link> for meal prep-friendly options!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-full md:w-auto flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="md:hidden relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/img/meal-prep/meal-prep-shopping.webp"
                    alt="Shopping for meal prep"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="hidden md:block mb-4">
                  <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/img/meal-prep/meal-prep-shopping.webp"
                      alt="Shopping cart filled with fresh vegetables and plant-based ingredients"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Make Your Shopping List (10 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Write down all the ingredients you need. <strong className="text-green-700">Group by category</strong> 
                    (produce, grains, beans, etc.) to make shopping faster.
                  </p>
                  <p>
                    <strong>Don&apos;t forget:</strong> Storage containers, reusable bags, and any snacks you want for the week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-full md:w-auto flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="md:hidden relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/img/meal-prep/meal-prep-prepping.webp"
                    alt="Prepping ingredients"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="hidden md:block mb-4">
                  <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/img/meal-prep/meal-prep-prepping.webp"
                      alt="Kitchen counter with prepped ingredients and containers"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Prep Your Ingredients (30-45 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    <strong className="text-green-700">Start with the longest tasks first:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cook grains (rice, quinoa, pasta) - these take the longest</li>
                    <li>Roast vegetables while grains cook</li>
                    <li>Chop fresh vegetables for salads or snacks</li>
                    <li>Prepare dressings and sauces</li>
                    <li>Cook beans or lentils if needed</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Time saver:</strong> Use your oven and stovetop simultaneously to maximize efficiency!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-full md:w-auto flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  4
                </div>
                <div className="md:hidden relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/img/meal-prep/meal-prep-containers.webp"
                    alt="Meal prep containers"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="hidden md:block mb-4">
                  <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/img/meal-prep/meal-prep-containers.webp"
                      alt="Glass meal prep containers filled with colorful vegan meals"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Assemble Your Meals (20-30 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Once everything is cooked and cooled, <strong className="text-green-700">portion into containers</strong>. 
                    Use glass containers when possible - they&apos;re better for the environment and easier to reheat.
                  </p>
                  <p>
                    <strong>Label your containers</strong> with what&apos;s inside and the date. This helps you remember 
                    what to eat and when it was made.
                  </p>
                  <p>
                    <strong>Storage tip:</strong> Keep dressings separate until you&apos;re ready to eat to keep everything fresh!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-full md:w-auto flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                  5
                </div>
                <div className="md:hidden relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/img/meal-prep/meal-prep-storage.webp"
                    alt="Organized refrigerator"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="hidden md:block mb-4">
                  <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                    <Image
                      src="/img/meal-prep/meal-prep-storage.webp"
                      alt="Organized refrigerator with labeled meal prep containers"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Store & Enjoy! (5 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Place containers in the fridge, organized by day or meal type. 
                    <strong className="text-green-700"> Most prepped meals stay fresh for 3-5 days.</strong>
                  </p>
                  <p>
                    <strong>Reheating:</strong> Most meals can be reheated in the microwave (2-3 minutes) or on the stovetop. 
                    Add a splash of water or plant-based milk if things seem dry.
                  </p>
                  <p>
                    <strong>Enjoy your week!</strong> You&apos;ve just saved yourself hours of cooking time and set yourself up for success. 🌱
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="mb-12 sm:mb-16">
        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Quick Meal Prep Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">💡 Start Small</h3>
              <p className="text-gray-700">
                Don&apos;t try to prep everything at once. Start with 2-3 meals and build from there.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">🥗 Mix & Match</h3>
              <p className="text-gray-700">
                Prep components (grains, proteins, veggies) separately so you can mix and match throughout the week.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">⏰ Pick Your Day</h3>
              <p className="text-gray-700">
                Sunday works for most people, but choose whatever day fits your schedule best.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">🎵 Make It Fun</h3>
              <p className="text-gray-700">
                Put on some music or a podcast. Meal prep doesn&apos;t have to be a chore!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Prep Friendly Recipes */}
      <section className="mb-12 sm:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Meal Prep-Friendly Recipes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These recipes are perfect for meal prep - they store well, reheat beautifully, and taste great all week!
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            Browse our collection of <Link href="/recipes" className="text-green-600 hover:text-green-700 underline font-semibold">vegan recipes</Link> and look for dishes that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            <li>Can be made in large batches</li>
            <li>Store well in the refrigerator</li>
            <li>Reheat easily without losing flavor or texture</li>
            <li>Are satisfying and filling</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Start Meal Prepping?
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
          Browse our recipe collection and start your meal prep journey today. Your future self will thank you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/recipes"
            className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 text-base sm:text-lg min-h-[44px] flex items-center justify-center"
          >
            Browse Recipes
          </Link>
          <Link
            href="/categories"
            className="inline-block bg-green-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 text-base sm:text-lg min-h-[44px] flex items-center justify-center"
          >
            View Categories
          </Link>
        </div>
      </section>
    </div>
  );
}

