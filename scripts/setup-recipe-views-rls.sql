-- SQL script to set up RLS policies for recipe_views table
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security on recipe_views table
ALTER TABLE recipe_views ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert views (for tracking)
CREATE POLICY "Anyone can insert views" ON recipe_views
  FOR INSERT
  WITH CHECK (true);

-- Policy: Anyone can read views (for analytics)
CREATE POLICY "Anyone can read views" ON recipe_views
  FOR SELECT
  USING (true);

-- Optional: Allow admins to delete views (for cleanup)
-- CREATE POLICY "Admins can delete views" ON recipe_views
--   FOR DELETE
--   USING (auth.role() = 'service_role');


