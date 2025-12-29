import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
            🌱 vegancooking.recipes
          </Link>
          <ul className="flex gap-6 items-center">
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1">
                All Recipes
              </Link>
            </li>
            <li>
              <Link href="/categories" className="text-gray-700 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded px-2 py-1">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

