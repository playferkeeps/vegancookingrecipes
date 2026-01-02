/**
 * Helper functions for Supabase operations
 */

import { supabase, isSupabaseConfigured } from './supabase';
import { Vote, VoteStats, Comment } from './supabase-types';

/**
 * Get a unique user identifier (browser fingerprint)
 * Uses localStorage to persist across sessions
 */
export function getUserId(): string {
  if (typeof window === 'undefined') return 'server';
  
  const STORAGE_KEY = 'user_fingerprint';
  let userId = localStorage.getItem(STORAGE_KEY);
  
  if (!userId) {
    // Generate a unique ID based on browser characteristics
    userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(STORAGE_KEY, userId);
  }
  
  return userId;
}

/**
 * Get vote statistics for a recipe
 */
export async function getVoteStats(recipeId: string): Promise<VoteStats> {
  if (!isSupabaseConfigured() || !supabase) {
    // Fallback to localStorage if Supabase is not configured
    return getVoteStatsFromLocalStorage(recipeId);
  }

  try {
    // Get all votes for this recipe
    const { data: votes, error } = await supabase
      .from('votes')
      .select('*')
      .eq('recipe_id', recipeId);

    if (error) {
      console.error('Error fetching vote stats:', error);
      return getVoteStatsFromLocalStorage(recipeId);
    }

    const upVotes = votes?.filter(v => v.vote_type === 'up').length || 0;
    const downVotes = votes?.filter(v => v.vote_type === 'down').length || 0;
    const totalVotes = upVotes + downVotes;
    const rating = totalVotes > 0 ? Math.round((upVotes / totalVotes) * 100) : 0;

    return {
      recipe_id: recipeId,
      up_votes: upVotes,
      down_votes: downVotes,
      total_votes: totalVotes,
      rating,
    };
  } catch (error) {
    console.error('Error getting vote stats:', error);
    return getVoteStatsFromLocalStorage(recipeId);
  }
}

/**
 * Get user's vote for a recipe
 */
export async function getUserVote(recipeId: string): Promise<'up' | 'down' | null> {
  if (!isSupabaseConfigured() || !supabase) {
    return getUserVoteFromLocalStorage(recipeId);
  }

  const userId = getUserId();

  try {
    // Use .limit(1) instead of .maybeSingle() to avoid 406 errors when no rows exist
    // .maybeSingle() expects exactly one row and returns 406 if none found
    // .limit(1) returns an empty array if no rows, which is easier to handle
    const { data, error } = await supabase
      .from('votes')
      .select('*')
      .eq('recipe_id', recipeId)
      .eq('user_id', userId)
      .limit(1);

    if (error) {
      // Only log real errors, not expected "no rows" scenarios
      console.error('Error fetching user vote:', error);
      return getUserVoteFromLocalStorage(recipeId);
    }

    // Return the vote type if found, null otherwise
    return data && data.length > 0 ? data[0].vote_type : null;
  } catch (error) {
    console.error('Error getting user vote:', error);
    return getUserVoteFromLocalStorage(recipeId);
  }
}

/**
 * Submit or update a vote
 */
export async function submitVote(
  recipeId: string,
  voteType: 'up' | 'down'
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    // Fallback to localStorage
    return submitVoteToLocalStorage(recipeId, voteType);
  }

  const userId = getUserId();

  try {
    // Check if user already voted
    // Use .limit(1) instead of .maybeSingle() to avoid 406 errors when no rows exist
    const { data: existingVotes, error: checkError } = await supabase
      .from('votes')
      .select('*')
      .eq('recipe_id', recipeId)
      .eq('user_id', userId)
      .limit(1);
    
    if (checkError) {
      // Real error, throw it
      throw checkError;
    }

    const existingVote = existingVotes && existingVotes.length > 0 ? existingVotes[0] : null;

    if (existingVote) {
      if (existingVote.vote_type === voteType) {
        // User is removing their vote (clicking the same button)
        const { error } = await supabase
          .from('votes')
          .delete()
          .eq('id', existingVote.id);

        if (error) throw error;
      } else {
        // User is changing their vote
        const { error } = await supabase
          .from('votes')
          .update({ vote_type: voteType })
          .eq('id', existingVote.id);

        if (error) throw error;
      }
    } else {
      // New vote - explicitly generate UUID for id field
      const voteId = typeof crypto !== 'undefined' && crypto.randomUUID 
        ? crypto.randomUUID() 
        : `vote_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      
      const { error } = await supabase
        .from('votes')
        .insert({
          id: voteId,
          recipe_id: recipeId,
          user_id: userId,
          vote_type: voteType,
        });

      if (error) throw error;
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error submitting vote:', error);
    // Fallback to localStorage
    return submitVoteToLocalStorage(recipeId, voteType);
  }
}

/**
 * Get comments for a recipe
 */
export async function getComments(recipeId: string): Promise<Comment[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return getCommentsFromLocalStorage(recipeId);
  }

  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('recipe_id', recipeId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
      return getCommentsFromLocalStorage(recipeId);
    }

    return data || [];
  } catch (error) {
    console.error('Error getting comments:', error);
    return getCommentsFromLocalStorage(recipeId);
  }
}

/**
 * Submit a comment
 */
export async function submitComment(
  recipeId: string,
  name: string,
  email: string,
  comment: string
): Promise<{ success: boolean; error?: string; comment?: any }> {
  if (!isSupabaseConfigured() || !supabase) {
    // Fallback to localStorage
    return submitCommentToLocalStorage(recipeId, name, email, comment);
  }

  try {
    const now = new Date().toISOString();
    // Explicitly generate UUID for id field
    const commentId = typeof crypto !== 'undefined' && crypto.randomUUID 
      ? crypto.randomUUID() 
      : `comment_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
    
    const { data, error } = await supabase
      .from('comments')
      .insert({
        id: commentId,
        recipe_id: recipeId,
        name,
        email,
        comment,
        created_at: now,
        updated_at: now, // Set updated_at on creation (required by schema)
      })
      .select()
      .single();

    if (error) throw error;

    return { success: true, comment: data };
  } catch (error: any) {
    console.error('Error submitting comment:', error);
    // Fallback to localStorage
    return submitCommentToLocalStorage(recipeId, name, email, comment);
  }
}

// LocalStorage fallback functions
function getVoteStatsFromLocalStorage(recipeId: string): VoteStats {
  if (typeof window === 'undefined') {
    return { recipe_id: recipeId, up_votes: 0, down_votes: 0, total_votes: 0, rating: 0 };
  }

  const stored = localStorage.getItem(`votes-${recipeId}`);
  if (stored) {
    try {
      const data = JSON.parse(stored);
      const totalVotes = data.upVotes + data.downVotes;
      const rating = totalVotes > 0 ? Math.round((data.upVotes / totalVotes) * 100) : 0;
      return {
        recipe_id: recipeId,
        up_votes: data.upVotes || 0,
        down_votes: data.downVotes || 0,
        total_votes: totalVotes,
        rating,
      };
    } catch (e) {
      console.error('Error parsing vote stats from localStorage:', e);
    }
  }

  return { recipe_id: recipeId, up_votes: 0, down_votes: 0, total_votes: 0, rating: 0 };
}

function getUserVoteFromLocalStorage(recipeId: string): 'up' | 'down' | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(`votes-${recipeId}`);
  if (stored) {
    try {
      const data = JSON.parse(stored);
      return data.userVote || null;
    } catch (e) {
      console.error('Error parsing user vote from localStorage:', e);
    }
  }

  return null;
}

function submitVoteToLocalStorage(
  recipeId: string,
  voteType: 'up' | 'down'
): { success: boolean; error?: string } {
  if (typeof window === 'undefined') {
    return { success: false, error: 'localStorage not available' };
  }

  try {
    const stored = localStorage.getItem(`votes-${recipeId}`);
    const current = stored ? JSON.parse(stored) : { userVote: null, upVotes: 0, downVotes: 0 };

    if (current.userVote === voteType) {
      // Remove vote
      if (voteType === 'up') {
        current.upVotes = Math.max(0, current.upVotes - 1);
      } else {
        current.downVotes = Math.max(0, current.downVotes - 1);
      }
      current.userVote = null;
    } else {
      // Change or add vote
      if (current.userVote === 'up') {
        current.upVotes = Math.max(0, current.upVotes - 1);
        current.downVotes += 1;
      } else if (current.userVote === 'down') {
        current.downVotes = Math.max(0, current.downVotes - 1);
        current.upVotes += 1;
      } else {
        if (voteType === 'up') {
          current.upVotes += 1;
        } else {
          current.downVotes += 1;
        }
      }
      current.userVote = voteType;
    }

    localStorage.setItem(`votes-${recipeId}`, JSON.stringify(current));
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

function getCommentsFromLocalStorage(recipeId: string): Comment[] {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(`comments-${recipeId}`);
  if (stored) {
    try {
      return JSON.parse(stored) as Comment[];
    } catch (e) {
      console.error('Error parsing comments from localStorage:', e);
    }
  }

  return [];
}

function submitCommentToLocalStorage(
  recipeId: string,
  name: string,
  email: string,
  comment: string
): { success: boolean; error?: string; comment?: any } {
  if (typeof window === 'undefined') {
    return { success: false, error: 'localStorage not available' };
  }

  try {
    const stored = localStorage.getItem(`comments-${recipeId}`);
    const comments = stored ? JSON.parse(stored) : [];

    const newComment = {
      id: Date.now().toString(),
      recipe_id: recipeId,
      name,
      email,
      comment,
      created_at: new Date().toISOString(),
    };

    comments.unshift(newComment);
    localStorage.setItem(`comments-${recipeId}`, JSON.stringify(comments));

    return { success: true, comment: newComment };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

