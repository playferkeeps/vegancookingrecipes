import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veganize Any Recipe - Transform Recipes to Vegan | vegancooking.recipes',
  description: 'Paste any recipe URL and instantly get a veganized version with plant-based ingredient substitutions and updated instructions.',
  openGraph: {
    title: 'Veganize Any Recipe - Transform Recipes to Vegan',
    description: 'Paste any recipe URL and instantly get a veganized version with plant-based ingredient substitutions.',
  },
};

export default function VeganizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
