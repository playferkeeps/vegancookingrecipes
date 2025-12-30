/**
 * Recipe view tracking utilities
 * Tracks recipe views in Supabase for analytics
 */

import { supabase, isSupabaseConfigured } from './supabase';

// Prevent concurrent tracking for the same recipe
const trackingInProgress = new Map<string, boolean>();

/**
 * Track a recipe view
 */
export async function trackRecipeView(recipeId: string): Promise<void> {
  const isInProgress = trackingInProgress.get(recipeId) || false;

  if (!isSupabaseConfigured() || !supabase) {
    // Fallback to localStorage if Supabase not configured
    trackRecipeViewLocalStorage(recipeId);
    return;
  }

  // Only track on client-side
  if (typeof window === 'undefined') {
    console.warn('View tracking only works on client-side');
    return;
  }

  // Prevent concurrent tracking for same recipe
  if (isInProgress) {
    return;
  }

  trackingInProgress.set(recipeId, true);

  try {
    // Get user ID if available (from localStorage)
    const userId = getUserId();
    
    // Get basic tracking info
    const ipAddress = typeof window !== 'undefined' ? getClientIP() : null;
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : null;

    // Generate UUID for the view record
    // Supabase should auto-generate, but we'll generate it client-side to be safe
    const viewId = crypto.randomUUID ? crypto.randomUUID() : generateUUID();

    // Insert view record
    const { data, error } = await supabase
      .from('recipe_views')
      .insert({
        id: viewId,
        recipe_id: recipeId,
        user_id: userId || null,
        ip_address: ipAddress,
        user_agent: userAgent,
      })
      .select();

    if (error) {
      // Log error details for debugging
      console.error('Could not track view in Supabase:', {
        error,
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        recipeId,
      });
      // Fallback to localStorage
      trackRecipeViewLocalStorage(recipeId);
      trackingInProgress.set(recipeId, false);
      return;
    }

    // Success - view tracked
    if (data && data.length > 0) {
      console.log('View tracked successfully:', { recipeId, viewId: data[0].id });
    }
  } catch (error) {
    // Fallback to localStorage on any error
    console.warn('Error tracking view:', error);
    trackRecipeViewLocalStorage(recipeId);
  } finally {
    trackingInProgress.set(recipeId, false);
  }
}

/**
 * Get user ID from localStorage (or generate one)
 */
function getUserId(): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    let userId = localStorage.getItem('vegancooking_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('vegancooking_user_id', userId);
    }
    return userId;
  } catch {
    return null;
  }
}

/**
 * Generate UUID (fallback if crypto.randomUUID is not available)
 */
function generateUUID(): string {
  // Fallback UUID generator
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Get client IP (simplified - actual IP would come from server)
 */
function getClientIP(): string | null {
  // In a real implementation, this would come from the server
  // For now, we'll just return null as IP tracking requires server-side logic
  return null;
}

/**
 * Fallback: Track views in localStorage
 */
function trackRecipeViewLocalStorage(recipeId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = `vegancooking_views_${recipeId}`;
    const count = parseInt(localStorage.getItem(key) || '0', 10);
    localStorage.setItem(key, String(count + 1));
  } catch {
    // Silently fail
  }
}

/**
 * Get view count from localStorage (fallback)
 */
export function getRecipeViewCountLocalStorage(recipeId: string): number {
  if (typeof window === 'undefined') return 0;
  
  try {
    const key = `vegancooking_views_${recipeId}`;
    return parseInt(localStorage.getItem(key) || '0', 10);
  } catch {
    return 0;
  }
}

