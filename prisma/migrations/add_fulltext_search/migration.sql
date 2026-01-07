-- Add full-text search vector column
-- First, check if column exists and drop it if it's the wrong type
DO $$ 
BEGIN
  -- Check if column exists and is NOT tsvector type
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public'
    AND table_name = 'Recipe' 
    AND column_name = 'search_vector'
  ) THEN
    -- Check the actual type using pg_type
    IF EXISTS (
      SELECT 1 FROM pg_attribute a
      JOIN pg_class c ON a.attrelid = c.oid
      JOIN pg_type t ON a.atttypid = t.oid
      WHERE c.relname = 'Recipe'
      AND a.attname = 'search_vector'
      AND t.typname != 'tsvector'
    ) THEN
      -- Drop the column if it's wrong type
      ALTER TABLE "Recipe" DROP COLUMN "search_vector";
    END IF;
  END IF;
END $$;

-- Add the column as tsvector type (only if it doesn't exist)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public'
    AND table_name = 'Recipe' 
    AND column_name = 'search_vector'
  ) THEN
    ALTER TABLE "Recipe" ADD COLUMN "search_vector" tsvector;
  END IF;
END $$;

-- Create function to update search vector
CREATE OR REPLACE FUNCTION recipe_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.prologue, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(NEW."ingredientNotes", '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(array_to_string(NEW.tips, ' '), '')), 'D') ||
    setweight(to_tsvector('english', COALESCE(array_to_string(NEW.variations, ' '), '')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update search vector
DROP TRIGGER IF EXISTS recipe_search_vector_trigger ON "Recipe";
CREATE TRIGGER recipe_search_vector_trigger
  BEFORE INSERT OR UPDATE ON "Recipe"
  FOR EACH ROW
  EXECUTE FUNCTION recipe_search_vector_update();

-- Create GIN index for fast full-text search
-- Drop index if it exists first (in case of type issues)
DROP INDEX IF EXISTS recipe_search_vector_idx;
CREATE INDEX recipe_search_vector_idx ON "Recipe" USING GIN (search_vector);

-- Create function to search recipes with full-text search
-- This includes related data (ingredients, tags, categories) via subqueries
CREATE OR REPLACE FUNCTION search_recipes(search_query text, result_limit int DEFAULT 100)
RETURNS TABLE (
  id text,
  rank real,
  title text,
  slug text,
  description text,
  image text,
  "prepTime" int,
  "cookTime" int,
  "totalTime" int,
  servings int,
  difficulty text,
  author text,
  "datePublished" timestamp,
  "dateModified" timestamp,
  "ingredientNotes" text,
  tips text[],
  variations text[],
  storage text,
  "originalUrl" text
) AS $$
BEGIN
  RETURN QUERY
  SELECT DISTINCT
    r.id::text,
    ts_rank_cd(
      r.search_vector,
      plainto_tsquery('english', search_query),
      32
    ) + 
    CASE 
      WHEN r.title ILIKE '%' || search_query || '%' THEN 0.5
      WHEN r.description ILIKE '%' || search_query || '%' THEN 0.3
      ELSE 0
    END::real as rank,
    r.title,
    r.slug,
    r.description,
    r.image,
    r."prepTime",
    r."cookTime",
    r."totalTime",
    r.servings,
    r.difficulty,
    r.author,
    r."datePublished",
    r."dateModified",
    r."ingredientNotes",
    r.tips,
    r.variations,
    r.storage,
    r."originalUrl"
  FROM "Recipe" r
  WHERE 
    r.search_vector @@ plainto_tsquery('english', search_query)
    OR r.title ILIKE '%' || search_query || '%'
    OR r.description ILIKE '%' || search_query || '%'
    OR EXISTS (
      SELECT 1 FROM "Ingredient" i 
      WHERE i."recipeId" = r.id 
      AND i.name ILIKE '%' || search_query || '%'
    )
    OR EXISTS (
      SELECT 1 FROM "RecipeTag" rt 
      WHERE rt."recipeId" = r.id 
      AND rt.tag ILIKE '%' || search_query || '%'
    )
    OR EXISTS (
      SELECT 1 FROM "RecipeCategory" rc 
      WHERE rc."recipeId" = r.id 
      AND rc.category ILIKE '%' || search_query || '%'
    )
  ORDER BY rank DESC, r."datePublished" DESC
  LIMIT result_limit;
END;
$$ LANGUAGE plpgsql;

-- Update existing recipes to populate search vector
-- The trigger will automatically populate it on update
UPDATE "Recipe" SET "search_vector" = NULL;
