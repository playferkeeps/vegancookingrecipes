'use client';

import { useEffect } from 'react';
import { trackRecipeView } from '@/lib/view-tracking';

interface ViewTrackerProps {
  recipeId: string;
}

// Module-level Set to track which recipes have been viewed in this session
// This persists across component mounts/unmounts (e.g., React Strict Mode)
const trackedRecipes = new Set<string>();

/**
 * Client component to track recipe views
 * Must be used in client components only
 */
export default function ViewTracker({ recipeId }: ViewTrackerProps) {
  useEffect(() => {
    // Prevent double tracking using module-level Set (survives component unmounts)
    if (trackedRecipes.has(recipeId)) {
      return;
    }

    // Mark as tracked before calling (prevents race conditions)
    trackedRecipes.add(recipeId);

    // Track view when component mounts
    trackRecipeView(recipeId);
  }, [recipeId]);

  return null; // This component doesn't render anything
}

