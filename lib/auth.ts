/**
 * Authentication utilities for admin area
 */

import { supabaseClient } from './supabase-client';
import { User, Session } from '@supabase/supabase-js';

export interface AuthUser extends User {}

/**
 * Get current session
 */
export async function getSession(): Promise<Session | null> {
  if (!supabaseClient) return null;
  
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session;
}

/**
 * Get current user
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const session = await getSession();
  return session?.user || null;
}

/**
 * Sign in with email and password
 */
export async function signIn(email: string, password: string): Promise<{ user: AuthUser | null; error: Error | null }> {
  if (!supabaseClient) {
    return { user: null, error: new Error('Supabase not configured') };
  }

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { user: null, error };
    }

    return { user: data.user, error: null };
  } catch (error: any) {
    return { user: null, error: error as Error };
  }
}

/**
 * Send magic link to email (passwordless authentication)
 * @param email - User's email address
 * @param redirectTo - Optional redirect URL after clicking the magic link
 */
export async function sendMagicLink(
  email: string,
  redirectTo?: string
): Promise<{ error: Error | null }> {
  if (!supabaseClient) {
    return { error: new Error('Supabase not configured') };
  }

  try {
    // Default redirect to admin callback if not provided
    const defaultRedirectTo = typeof window !== 'undefined'
      ? `${window.location.origin}/admin/auth/callback`
      : redirectTo || '/admin/auth/callback';

    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo || defaultRedirectTo,
      },
    });

    if (error) {
      return { error };
    }

    return { error: null };
  } catch (error: any) {
    return { error: error as Error };
  }
}

/**
 * Sign out
 */
export async function signOut(): Promise<{ error: Error | null }> {
  if (!supabaseClient) {
    return { error: new Error('Supabase not configured') };
  }

  try {
    const { error } = await supabaseClient.auth.signOut();
    return { error };
  } catch (error: any) {
    return { error: error as Error };
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}

/**
 * Check if user is admin (by email)
 * Admin emails are configured via NEXT_PUBLIC_ADMIN_EMAILS environment variable (comma-separated)
 * Example: NEXT_PUBLIC_ADMIN_EMAILS=admin@example.com,another@example.com
 */
export async function isAdmin(): Promise<boolean> {
  if (typeof window === 'undefined') {
    // Server-side: can't check auth in server components easily without cookies
    // Return false and let client-side handle it
    return false;
  }

  const user = await getCurrentUser();
  if (!user?.email) return false;

  // Get admin emails from environment variable (must be NEXT_PUBLIC_ for client-side access)
  const adminEmailsStr = process.env.NEXT_PUBLIC_ADMIN_EMAILS || '';
  if (!adminEmailsStr) {
    console.warn('NEXT_PUBLIC_ADMIN_EMAILS is not set. No admin access allowed.');
    return false;
  }

  const adminEmails = adminEmailsStr.split(',').map(e => e.trim().toLowerCase());
  return adminEmails.includes(user.email.toLowerCase());
}

