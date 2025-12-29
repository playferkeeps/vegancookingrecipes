import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">vegancooking.recipes</h3>
            <p className="text-gray-300">
              Your source for delicious, plant-based recipes. From baking to savory dishes, we've got you covered.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes" className="text-gray-300 hover:text-white transition-colors">
                  All Recipes
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-300">
              We're passionate about making vegan cooking accessible, delicious, and fun for everyone.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} vegancooking.recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

