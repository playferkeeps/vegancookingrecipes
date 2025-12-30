/**
 * Client-side Supabase client for authentication
 * This is separate from the server client and persists sessions
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create a client-side Supabase client with session persistence
export const supabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true, // Persist auth sessions in localStorage
        autoRefreshToken: true,
        detectSessionInUrl: true, // Automatically detect auth tokens in URL
        flowType: 'pkce', // Use PKCE flow for better security
      },
    })
  : null;

