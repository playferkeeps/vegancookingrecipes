import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automated Social Media Setup - vegancooking.recipes',
  description: 'One-time setup to automate Facebook and Instagram posting. Complete OAuth flow with automatic token management.',
};

/**
 * Server-side protection for setup page
 * Requires NEXT_PUBLIC_SETUP_TOKEN in URL query parameter
 */
export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In production, always require a token
  if (process.env.NODE_ENV === 'production') {
    const requiredToken = process.env.SETUP_TOKEN || process.env.NEXT_PUBLIC_SETUP_TOKEN;
    
    if (!requiredToken) {
      // No token configured - deny access in production
      return (
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
            <p className="text-lg text-gray-700">
              This page is disabled in production for security reasons.
            </p>
          </div>
        </div>
      );
    }
    
    // Token is required - client-side will check it
    // (We can't access searchParams in server layout, so client handles it)
  }
  
  return <>{children}</>;
}
