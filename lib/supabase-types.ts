/**
 * TypeScript types for Supabase database tables
 */

export interface Vote {
  id: string;
  recipe_id: string;
  user_id: string; // Browser fingerprint or session ID
  vote_type: 'up' | 'down';
  created_at: string;
}

export interface Comment {
  id: string;
  recipe_id: string;
  name: string;
  email: string;
  comment: string;
  created_at: string;
  updated_at?: string;
}

export interface VoteStats {
  recipe_id: string;
  up_votes: number;
  down_votes: number;
  total_votes: number;
  rating: number; // Percentage of up votes
}



