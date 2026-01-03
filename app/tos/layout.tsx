import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Recipe Veganization | vegancooking.recipes',
  description: 'Terms of Service for using the recipe veganization tool on vegancooking.recipes. Learn how veganized recipes are saved and published to our site.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TOSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
