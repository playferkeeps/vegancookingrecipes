import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Recipes | vegancooking.recipes',
  description: 'Search for vegan recipes by name, ingredients, tags, or category. Find the perfect plant-based recipe for any meal.',
  keywords: ['search vegan recipes', 'recipe search', 'find vegan recipes', 'vegancooking.recipes'],
  openGraph: {
    title: 'Search Recipes | vegancooking.recipes',
    description: 'Search for vegan recipes by name, ingredients, tags, or category.',
    type: 'website',
    url: 'https://vegancooking.recipes/search',
    siteName: 'vegancooking.recipes',
  },
  alternates: {
    canonical: 'https://vegancooking.recipes/search',
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}



