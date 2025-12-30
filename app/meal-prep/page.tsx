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
          Let me show you how I meal prep every week. It&apos;s honestly been a game-changer for me—I spend a couple hours on Sunday, and then I&apos;m set for the whole week. No more scrambling to figure out what to eat when I&apos;m tired and hungry!
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12 sm:mb-16">
        <div className="bg-green-50 rounded-lg p-6 sm:p-8 md:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Why I Meal Prep</h2>
          <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              I&apos;ll be honest—I wasn&apos;t always a meal prepper. But after one too many weeks of coming home exhausted and reaching for whatever was easiest (usually not the healthiest), I decided to try something different. Now I can&apos;t imagine my week without it.
            </p>
            <p>
              Here&apos;s what I love about it: I spend a couple hours on Sunday afternoon (usually with some good music playing), and then I&apos;m set for the whole week. No more decision fatigue about what to eat. No more wasting food because I bought too much and didn&apos;t use it. And honestly? It&apos;s saved me so much money. When I have meals ready to go, I&apos;m way less likely to order takeout or grab something on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          My Simple 5-Step Meal Prep Routine
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
                  Step 1: Plan Your Meals (15 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    I usually do this on Saturday morning while I&apos;m having my coffee. I pick <strong className="text-green-700">2-3 recipes</strong> I want to make for the week. Here&apos;s what I look for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Things that actually taste good after sitting in the fridge for a few days (not everything does!)</li>
                    <li>Recipes that reheat well—soups, stews, and grain bowls are my go-tos</li>
                    <li>Dishes that share ingredients so I&apos;m not buying a million different things</li>
                    <li>Most importantly: recipes I&apos;m actually excited to eat. If I&apos;m not looking forward to it, I won&apos;t eat it, and then it&apos;s just wasted food.
                    </li>
                  </ul>
                  <p className="mt-3">
                    I&apos;ve got a whole collection of <Link href="/recipes" className="text-green-600 hover:text-green-700 underline">recipes</Link> that work great for meal prep—things I&apos;ve tested and know hold up well!
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
                  Step 2: Make Your Shopping List (10 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    I write down everything I need, and I <strong className="text-green-700">group it by where it is in the store</strong>—all the produce together, all the grains together, etc. It makes shopping so much faster, and I&apos;m way less likely to forget something.
                  </p>
                  <p>
                    One thing I always check before I leave: do I have enough containers? There&apos;s nothing worse than getting home and realizing I don&apos;t have enough glass containers to store everything. I also grab any snacks I want for the week while I&apos;m at it—saves me an extra trip later.
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
                  Step 3: Prep Your Ingredients (30-45 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    This is where I get strategic. I <strong className="text-green-700">start with whatever takes the longest</strong>—usually grains like rice or quinoa. While those are cooking, I&apos;m roasting vegetables in the oven. Then I chop fresh veggies for salads or snacks. I make all my dressings and sauces at once. If I need cooked beans or lentils, I do those too.
                  </p>
                  <p>
                    My biggest time-saver? Using my oven and stovetop at the same time. While something&apos;s roasting, I&apos;m cooking grains. While grains are simmering, I&apos;m chopping. It feels like a little dance, and by the end, everything&apos;s ready at once.
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
                  Step 4: Assemble Your Meals (20-30 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Once everything&apos;s cooked and cooled down a bit, I <strong className="text-green-700">start portioning everything into containers</strong>. I&apos;m a big fan of glass containers—they&apos;re better for the planet, they don&apos;t stain, and they reheat so much better than plastic. Plus, I can see what&apos;s inside, which honestly helps me actually eat what I prepped.
                  </p>
                  <p>
                    I always <strong>label my containers</strong> with what&apos;s inside and the date I made it. I used to think I&apos;d remember, but I don&apos;t. The labels save me from that &quot;what is this and when did I make it?&quot; moment on Thursday.
                  </p>
                  <p>
                    One thing I learned the hard way: <strong>keep dressings separate</strong> until you&apos;re ready to eat. If you mix them in ahead of time, everything gets soggy. I keep mine in little jars or small containers, and I just add them when I&apos;m ready to eat.
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
                  Step 5: Store & Enjoy! (5 minutes)
                </h3>
                <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    I organize my containers in the fridge by day or meal type—it just makes it easier to grab what I need. <strong className="text-green-700">Most of my prepped meals stay fresh for 3-5 days</strong>, so I usually prep Sunday and eat through Thursday or Friday. By then, I&apos;m ready to mix it up anyway.
                  </p>
                  <p>
                    When it&apos;s time to eat, I usually reheat things in the microwave (2-3 minutes does the trick) or on the stovetop if I want it a bit crispier. If something seems a little dry after reheating, I&apos;ll add a splash of water or plant-based milk—it makes a huge difference.
                  </p>
                  <p>
                    And that&apos;s it! You&apos;ve just set yourself up for a whole week of easy, healthy eating. Trust me, your future self will thank you when you&apos;re tired on Tuesday and dinner is already ready. 🌱
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">A Few Things I&apos;ve Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">💡 Start Small</h3>
              <p className="text-gray-700">
                When I first started, I tried to prep everything for the whole week. It was overwhelming, and I ended up wasting food. Now I stick to 2-3 recipes, and that&apos;s plenty. You can always add more later once you get the hang of it.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">🥗 Mix & Match</h3>
              <p className="text-gray-700">
                Sometimes I prep components separately—a big batch of quinoa, roasted veggies, some beans. Then I can mix and match them throughout the week. It keeps things interesting and gives me more flexibility.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">⏰ Pick Your Day</h3>
              <p className="text-gray-700">
                Sunday afternoon works for me, but honestly, pick whatever day makes sense for your life. The best meal prep routine is the one you&apos;ll actually stick to.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-700">🎵 Make It Fun</h3>
              <p className="text-gray-700">
                I always put on music or a podcast while I&apos;m prepping. It makes the time go by faster, and honestly, it&apos;s become something I look forward to. Meal prep doesn&apos;t have to feel like a chore!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Prep Friendly Recipes */}
      <section className="mb-12 sm:mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Recipes That Work Great for Meal Prep
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Not every recipe is great for meal prep, but I&apos;ve learned which ones hold up well. These are the ones I come back to again and again.
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 sm:p-8 text-center">
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            When I&apos;m looking through my <Link href="/recipes" className="text-green-600 hover:text-green-700 underline font-semibold">recipe collection</Link> for meal prep ideas, I look for dishes that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
            <li>Can be made in big batches (soups, stews, grain bowls)</li>
            <li>Actually taste good after a few days in the fridge (not everything does!)</li>
            <li>Reheat well without getting mushy or losing their flavor</li>
            <li>Keep me satisfied and full—nothing worse than being hungry an hour after eating</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Give It a Try?
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
          Start with just one or two recipes this week. Pick something you&apos;re excited to eat, and see how it goes. I promise, once you get the hang of it, you&apos;ll wonder how you ever lived without it!
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

