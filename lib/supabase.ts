/**
 * Supabase client initialization
 * This creates a client that can be used in both client and server components
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Supabase environment variables are not set. Database features will not work.');
  }
}

// Create a single supabase client for interacting with your database
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      db: {
        schema: 'public',
      },
      auth: {
        persistSession: false, // Don't persist auth sessions for anonymous access
      },
      global: {
        // PostgREST requires specific Accept headers for different response types
        // The Supabase client handles this automatically, but we can override if needed
        headers: {
          'apikey': supabaseAnonKey, // Ensure API key is in headers
        },
      },
    })
  : null;

/**
 * Check if Supabase is configured
 */
export function isSupabaseConfigured(): boolean {
  return supabase !== null;
}

