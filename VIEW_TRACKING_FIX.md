# View Tracking Fix

## Issue

Views were showing 0 in the admin dashboard even though views should be tracked.

## Root Causes

1. **Database table might not exist** - The `recipe_views` table needs to be created via migration
2. **RLS policies blocking inserts** - Row Level Security might be preventing view tracking
3. **Silent error handling** - Errors were being swallowed, making debugging difficult

## Fixes Applied

### 1. Improved Error Logging (`lib/view-tracking.ts`)

- Added detailed error logging with error code, message, details, and hints
- Added success logging when views are tracked
- Added client-side check to prevent server-side execution

### 2. Table Existence Check (`app/api/analytics/route.ts`)

- Added check to see if `recipe_views` table exists
- Gracefully handles missing table by returning 0 views
- Continues with other analytics even if views table is missing

### 3. RLS Policy Setup Script

- Created `scripts/setup-recipe-views-rls.sql` with policies to allow:
  - Anyone to insert views (for tracking)
  - Anyone to read views (for analytics)

## Setup Steps

### Step 1: Run Database Migration

The `recipe_views` table needs to be created. Run:

```bash
npm run db:push
```

Or create a migration:

```bash
npm run db:migrate
```

This will create the `recipe_views` table based on the Prisma schema.

### Step 2: Set Up RLS Policies

1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Run the SQL script from `scripts/setup-recipe-views-rls.sql`:

```sql
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
```

### Step 3: Verify View Tracking

1. Visit a recipe page (e.g., `/recipes/some-recipe-slug`)
2. Open browser console (F12)
3. Look for log messages:
   - Success: `"View tracked successfully: { recipeId: '...', viewId: '...' }"`
   - Error: Detailed error information if tracking fails

### Step 4: Check Admin Dashboard

1. Visit `/admin` dashboard
2. Check the "Total Views" card - it should show the count
3. Check "Top Recipes by Views" - should show recipes with views

## Troubleshooting

### Views Still Showing 0

1. **Check browser console** for error messages when viewing recipes
2. **Check Supabase logs**:
   - Go to Supabase Dashboard → Logs → Postgres Logs
   - Look for errors related to `recipe_views` table
3. **Verify table exists**:
   - Go to Supabase Dashboard → Table Editor
   - Look for `recipe_views` table
   - If missing, run `npm run db:push`
4. **Verify RLS policies**:
   - Go to Supabase Dashboard → Authentication → Policies
   - Check that `recipe_views` has policies for INSERT and SELECT
5. **Check network tab**:
   - Open browser DevTools → Network tab
   - Visit a recipe page
   - Look for requests to Supabase
   - Check if there are 403 (Forbidden) or 406 (Not Acceptable) errors

### Common Errors

**Error: "relation 'recipe_views' does not exist"**

- Solution: Run `npm run db:push` to create the table

**Error: "new row violates row-level security policy"**

- Solution: Run the RLS policy setup SQL script

**Error: "permission denied for table recipe_views"**

- Solution: Check that RLS policies allow INSERT operations

## Testing

To test view tracking:

1. Visit a recipe page
2. Check browser console for "View tracked successfully" message
3. Visit admin dashboard
4. Verify the view count increased
5. Check "Recent Views" section for the recipe you just viewed

## Next Steps

- Monitor view tracking in production
- Consider adding rate limiting to prevent spam
- Add view deduplication (same user viewing same recipe multiple times)
- Add view analytics by date/time ranges
