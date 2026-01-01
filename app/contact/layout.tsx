import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | vegancooking.recipes',
  description: 'Have a question, suggestion, or just want to say hello? We\'d love to hear from you! Contact the vegancooking.recipes team.',
  openGraph: {
    title: 'Contact Us - Get in Touch | vegancooking.recipes',
    description: 'Have a question, suggestion, or just want to say hello? We\'d love to hear from you!',
    type: 'website',
    url: 'https://vegancooking.recipes/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
