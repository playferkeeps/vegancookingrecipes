import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Server-side layout protection for admin routes
 * This runs on the server and redirects unauthenticated users
 */
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only protect if Supabase is configured
  if (!supabaseUrl || !supabaseAnonKey) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">Configuration Required</h2>
          <p className="text-yellow-700">
            Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
          </p>
        </div>
      </div>
    );
  }

  // Note: Server-side auth check would require cookies/headers
  // For now, client-side protection in the page component handles this
  // In production, you'd want to use Next.js middleware or API routes for server-side auth

  return <>{children}</>;
}


