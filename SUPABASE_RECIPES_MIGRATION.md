# Supabase Recipes Migration Guide

This guide explains how to migrate recipe data from static TypeScript files to Supabase using Prisma ORM.

## Overview

The migration includes:

- ✅ Prisma schema for recipes with all relations
- ✅ Seed script to migrate existing recipes
- ✅ Updated generate script to write to Supabase
- ✅ Data access layer with Supabase + static file fallback
- ✅ 100% functionality parity

## Prerequisites

1. **Supabase Project**: You need a Supabase project with a PostgreSQL database
2. **Environment Variables**: Set up `DATABASE_URL` in your `.env` file

### Getting Your Database URL

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **Database**
3. Copy the **Connection string** under "Connection string" → "URI"
4. It should look like: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`
5. Add it to your `.env` file:

```bash
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

## Step 1: Generate Prisma Client

```bash
npm run db:generate
```

This creates the Prisma Client based on the schema.

## Step 2: Run Database Migration

```bash
npm run db:migrate
```

This will:

- Create a new migration file
- Apply the schema to your Supabase database
- Create all tables, indexes, and relations

**Note**: The first time you run this, Prisma will ask you to name the migration. Use something like `init_recipes_schema`.

## Step 3: Seed Existing Recipes

```bash
npm run db:seed
```

This will:

- Read all recipes from TypeScript files
- Migrate them to Supabase
- Preserve all data including ingredients, instructions, FAQs, etc.
- Skip recipes that already exist (safe to run multiple times)

## Step 4: Update Generate Script (Optional)

The generate script now supports writing to Supabase. To enable it:

1. Set `USE_SUPABASE=true` in your `.env` file
2. Or modify `scripts/generate-recipes.ts` to use Supabase by default

When enabled, new recipes will be saved directly to Supabase instead of TypeScript files.

## Step 5: Update Application Code

The data access layer (`data/recipes/index.ts`) now supports both Supabase and static files:

- **With Supabase**: Functions return `Promise<Recipe[]>` (async)
- **Without Supabase**: Functions return `Recipe[]` (sync)

### Updating Pages

All pages that use recipe functions need to be updated to handle async:

**Before:**

```typescript
const recipes = getAllRecipes();
```

**After:**

```typescript
const recipes = await getAllRecipes();
```

### Pages to Update

1. `app/page.tsx` - Homepage
2. `app/recipes/page.tsx` - All recipes page
3. `app/recipes/[slug]/page.tsx` - Individual recipe page
4. `app/categories/[category]/page.tsx` - Category page
5. `app/search/page.tsx` - Search page
6. `app/sitemap.ts` - Sitemap
7. `app/api/recipes/route.ts` - API routes
8. `app/api/recipes/[slug]/route.ts` - API routes

## Database Schema

The Prisma schema includes:

- **Recipe**: Main recipe table
- **RecipeCategory**: Many-to-many relationship for categories
- **RecipeVeganType**: Many-to-many relationship for vegan types
- **Ingredient**: Recipe ingredients with ordering
- **Instruction**: Recipe instructions with step numbers
- **NutritionInfo**: Nutrition information (one-to-one)
- **FAQ**: Frequently asked questions with ordering
- **RecipeTag**: Many-to-many relationship for tags
- **RelatedRecipe**: Self-referential many-to-many for related recipes

## Migrations

After the initial migration, use Prisma migrations for schema changes:

```bash
# Make changes to prisma/schema.prisma
npm run db:migrate
```

This will:

- Create a new migration file
- Apply changes to the database
- Update the Prisma Client

## Rollback

If you need to rollback:

1. **Remove Supabase data**: Delete all tables in Supabase dashboard
2. **Remove migrations**: Delete `prisma/migrations` folder
3. **Update code**: Revert to using static files only

The static file system remains as a fallback, so the site will continue working.

## Troubleshooting

### "Prisma Client not generated"

Run: `npm run db:generate`

### "Database connection failed"

Check your `DATABASE_URL` in `.env` file. Make sure:

- Password is URL-encoded if it contains special characters
- The database is accessible from your network
- Supabase project is active

### "Migration failed"

1. Check Supabase dashboard for errors
2. Verify schema is correct
3. Try `npm run db:push` instead (for development only)

### "Seed script fails"

- Check that migrations have been run first
- Verify recipes in TypeScript files are valid
- Check for duplicate slugs

## Benefits

✅ **Scalability**: Database can handle thousands of recipes
✅ **Performance**: Indexed queries, caching support
✅ **Flexibility**: Easy to add new fields, relationships
✅ **Maintainability**: Migrations track schema changes
✅ **Backup**: Easy to backup and restore
✅ **Analytics**: Can query recipes for insights

## Next Steps

1. Run migrations and seed
2. Update pages to use async functions
3. Test thoroughly
4. Deploy to production
5. Monitor performance
