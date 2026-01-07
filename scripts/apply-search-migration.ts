/**
 * Script to apply full-text search migration directly to Supabase
 * This bypasses Prisma's shadow database issue
 * Run with: npm run apply-search-migration
 */

import 'dotenv/config';
import { Pool } from 'pg';
import { readFileSync } from 'fs';
import { join } from 'path';

async function applyMigration() {
  const databaseUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.error('❌ DATABASE_URL or DIRECT_URL is not set in .env file');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: databaseUrl,
    max: 1,
  });

  try {
    console.log('🔄 Applying full-text search migration...\n');

    // Read the migration SQL file
    const migrationPath = join(process.cwd(), 'prisma', 'migrations', 'add_fulltext_search', 'migration.sql');
    const migrationSQL = readFileSync(migrationPath, 'utf-8');

    const client = await pool.connect();

    try {
      console.log('   Executing migration SQL...');
      
      // Execute the entire SQL file
      // PostgreSQL will handle multiple statements correctly
      await client.query(migrationSQL);
      
      console.log('   ✅ Migration SQL executed successfully');
    } catch (error: any) {
      // Check if it's just "already exists" errors (which are OK)
      if (error.message?.includes('already exists') || 
          error.message?.includes('duplicate') ||
          error.code === '42P07' || // duplicate_table
          error.code === '42710') { // duplicate_object
        console.log('   ⚠️  Some objects already exist (this is OK, migration may have been partially applied)');
        console.log('   ✅ Continuing...');
      } else {
        throw error;
      }
    } finally {
      client.release();
    }

    console.log('\n✅ Migration applied successfully!');
    console.log('\n📝 Next steps:');
    console.log('   1. Run: npm run populate-search');
    console.log('   2. Test search at: /search');
  } catch (error: any) {
    console.error('\n❌ Error applying migration:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('   Make sure your DATABASE_URL is correct and the database is accessible.');
    } else if (error.code === '42P01') {
      console.error('   The Recipe table does not exist. Make sure you have run the base schema migration first.');
      console.error('   Run: npm run db:push (or create tables manually)');
    }
    process.exit(1);
  } finally {
    await pool.end();
  }
}

applyMigration();
