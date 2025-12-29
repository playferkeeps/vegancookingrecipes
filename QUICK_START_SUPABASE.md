# Quick Start: Supabase Recipes Migration

## 1. Install Dependencies

Already done! Prisma is installed.

## 2. Set Up Environment Variables

Add to your `.env` file:

```bash
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

**How to get your DATABASE_URL:**

1. Go to Supabase Dashboard → Settings → Database
2. Copy the "Connection string" under "URI"
3. Replace `[YOUR-PASSWORD]` with your database password

## 3. Generate Prisma Client

```bash
npm run db:generate
```

## 4. Create Database Schema

```bash
npm run db:migrate
```

When prompted, name the migration: `init_recipes_schema`

## 5. Seed Existing Recipes

```bash
npm run db:seed
```

This migrates all existing recipes from TypeScript files to Supabase.

## 6. Test It Works

```bash
npm run db:studio
```

This opens Prisma Studio where you can browse your recipes in the database.

## 7. Generate New Recipes (Optional)

To save new recipes to Supabase:

```bash
npm run generate-recipes -- --count 10 --supabase
```

Or continue using files (backward compatible):

```bash
npm run generate-recipes -- --count 10
```

## ✅ Done!

Your recipes are now in Supabase. The application will automatically use Supabase when `DATABASE_URL` is set, and fall back to static files if not.

## Next: Update Pages

See `SUPABASE_MIGRATION_SUMMARY.md` for details on updating pages to handle async functions.
