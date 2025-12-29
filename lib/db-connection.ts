/**
 * Database connection utilities
 * Handles Supabase connection string selection for Prisma
 * 
 * IMPORTANT: Supabase's connection pooler (port 6543) doesn't work well with Prisma's prepared statements.
 * Always use DIRECT_URL (port 5432) for Prisma connections.
 */

/**
 * Get the best database URL for Prisma
 * Prefers DIRECT_URL (direct connection) over DATABASE_URL (may be pooler)
 */
export function getDatabaseUrl(): string | undefined {
  // Prefer DIRECT_URL if available (direct connection, port 5432)
  // This is the recommended connection for Prisma
  if (process.env.DIRECT_URL && process.env.DIRECT_URL.trim() !== '') {
    return process.env.DIRECT_URL.trim();
  }
  
  // Fall back to DATABASE_URL if DIRECT_URL is not set
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl || databaseUrl.trim() === '') {
    return undefined;
  }
  
  const url = databaseUrl.trim();
  
  // Warn if using pooler connection
  if (url.includes('pooler.supabase.com') || url.includes(':6543')) {
    console.warn('⚠️  Using Supabase pooler connection (port 6543) with Prisma.');
    console.warn('   This may cause "prepared statement already exists" errors.');
    console.warn('   Consider using DIRECT_URL (port 5432) instead.');
    console.warn('   Get it from: Supabase Dashboard → Settings → Database → Connection string → Direct connection');
  }
  
  return url;
}

