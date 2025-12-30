import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Vegan Recipes | vegancooking.recipes',
  description: 'Browse our complete collection of vegan recipes at vegancooking.recipes. From baking to savory dishes, international cuisine, breakfast, lunch, dinner, and desserts.',
  keywords: ['vegan recipes', 'all vegan recipes', 'vegancooking.recipes', 'plant-based recipes'],
  openGraph: {
    title: 'All Vegan Recipes | vegancooking.recipes',
    description: 'Browse our complete collection of vegan recipes at vegancooking.recipes.',
    type: 'website',
    url: 'https://vegancooking.recipes/recipes',
    siteName: 'vegancooking.recipes',
  },
  alternates: {
    canonical: 'https://vegancooking.recipes/recipes',
  },
};

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


