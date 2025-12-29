# Supabase Setup Guide

This site uses Supabase to persist votes and comments across all users. Supabase provides a PostgreSQL database with a simple JavaScript client that works entirely from the frontend.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in the details:
   - **Name**: vegancooking-recipes (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait for the project to be created (takes ~2 minutes)

### 2. Get Your API Keys

1. Once your project is ready, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### 3. Create Database Tables

Go to **SQL Editor** in your Supabase dashboard and run this SQL:

```sql
-- Create votes table
CREATE TABLE IF NOT EXISTS votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  recipe_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  vote_type TEXT NOT NULL CHECK (vote_type IN ('up', 'down')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(recipe_id, user_id)
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  recipe_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_votes_recipe_id ON votes(recipe_id);
CREATE INDEX IF NOT EXISTS idx_votes_user_id ON votes(user_id);
CREATE INDEX IF NOT EXISTS idx_comments_recipe_id ON comments(recipe_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read/write (for anonymous users)
-- Votes: Anyone can read, anyone can insert/update/delete their own votes
CREATE POLICY "Anyone can read votes" ON votes
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert votes" ON votes
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update their votes" ON votes
  FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete their votes" ON votes
  FOR DELETE USING (true);

-- Comments: Anyone can read, anyone can insert
CREATE POLICY "Anyone can read comments" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Anyone can insert comments" ON comments
  FOR INSERT WITH CHECK (true);
```

### 4. Configure Environment Variables

Add to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your_anon_key_here
```

**For Vercel deployment**, add these same variables in your Vercel project settings.

### 5. How It Works

- **Votes**: Stored in Supabase with user fingerprint (browser-based ID)
- **Comments**: Stored in Supabase with name, email, and comment text
- **Fallback**: If Supabase is not configured, the system falls back to localStorage
- **Real-time**: Votes and comments are shared across all users
- **Persistent**: Data persists even if users clear their browser cache

### 6. Features

- ✅ **Shared across users**: All votes and comments are visible to everyone
- ✅ **Persistent storage**: Data survives browser cache clears
- ✅ **Automatic fallback**: Works with localStorage if Supabase isn't configured
- ✅ **User tracking**: Uses browser fingerprint to prevent duplicate votes per user
- ✅ **Real-time ready**: Can be extended with Supabase real-time subscriptions

### 7. Testing

1. **Without Supabase**: The system will use localStorage (works offline)
2. **With Supabase**: Votes and comments are shared across all users
3. **Check your data**: Go to Supabase dashboard → Table Editor to see votes and comments

### 8. Security Notes

- The `anon` key is safe to expose in the frontend (it's public)
- Row Level Security (RLS) policies control access
- User IDs are browser fingerprints (not authenticated users)
- For production, consider adding rate limiting

### 9. Troubleshooting

- **"Supabase not configured"**: Check your environment variables
- **Votes not saving**: Check browser console for errors
- **Comments not appearing**: Verify RLS policies are set correctly
- **Database errors**: Check Supabase dashboard → Logs

### 10. Free Tier Limits

Supabase free tier includes:
- 500 MB database
- 2 GB bandwidth
- Unlimited API requests
- Perfect for small to medium sites

For a recipe site, this should be more than enough!

