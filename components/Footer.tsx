import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">vegancooking.recipes</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Your source for delicious, plant-based recipes. From baking to savory dishes, we've got you covered.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block py-1 min-h-[44px] flex items-center">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">About</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We're passionate about making vegan cooking accessible, delicious, and fun for everyone.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} vegancooking.recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

