import Link from 'next/link';
import { RecipeCategory } from '@/types/recipe';

export const metadata = {
  title: 'Recipe Categories | vegancooking.recipes',
    description: 'Browse vegan recipes by category at vegancooking.recipes. Find recipes for baking, savory dishes, international cuisine, breakfast, lunch, dinner, desserts, and more.',
  keywords: ['vegan recipe categories', 'vegan recipes by category', 'vegancooking.recipes'],
  openGraph: {
    title: 'Recipe Categories | vegancooking.recipes',
    description: 'Browse vegan recipes by category at vegancooking.recipes.',
    type: 'website',
    url: 'https://vegancooking.recipes/categories',
    siteName: 'vegancooking.recipes',
  },
  alternates: {
    canonical: 'https://vegancooking.recipes/categories',
  },
};

const categories: { name: RecipeCategory; description: string; icon: string }[] = [
  {
    name: 'baking',
    description: 'Sweet and savory baked goods',
    icon: '🥖',
  },
  {
    name: 'savory',
    description: 'Hearty and flavorful savory dishes',
    icon: '🍲',
  },
  {
    name: 'international',
    description: 'Flavors from around the world',
    icon: '🌍',
  },
  {
    name: 'breakfast',
    description: 'Start your day right',
    icon: '🥞',
  },
  {
    name: 'lunch',
    description: 'Midday meals',
    icon: '🥗',
  },
  {
    name: 'dinner',
    description: 'Evening meals',
    icon: '🍽️',
  },
  {
    name: 'dessert',
    description: 'Sweet treats',
    icon: '🍰',
  },
  {
    name: 'snack',
    description: 'Quick bites',
    icon: '🥨',
  },
  {
    name: 'beverage',
    description: 'Drinks and smoothies',
    icon: '🥤',
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Recipe Categories</h1>
        <p className="text-xl text-gray-600">
          Browse our vegan recipes by category to find exactly what you're looking for.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <div className="text-4xl mb-4">{category.icon}</div>
            <h2 className="text-2xl font-bold mb-2 capitalize">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

