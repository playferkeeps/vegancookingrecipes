/**
 * Prisma Client for Supabase
 * Singleton pattern to prevent multiple instances and connection pool exhaustion
 * 
 * Prisma 7 requires either adapter or accelerateUrl in the constructor
 * This will only work server-side and when DATABASE_URL is set
 */

import { PrismaClient } from '@prisma/client';
import { getDatabaseUrl } from './db-connection';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pool: any | undefined;
};

// Singleton pool to prevent connection exhaustion
function getPool() {
  if (globalForPrisma.pool) {
    return globalForPrisma.pool;
  }

  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required to use Prisma Client');
  }

  // Dynamic imports to avoid bundling in client
  const { Pool } = require('pg');
  const { PrismaPg } = require('@prisma/adapter-pg');

  // Create a singleton pool with SINGLE connection to avoid hitting Supabase session mode limits
  // Supabase session mode is VERY strict - only 1 connection per session
  // CRITICAL: Must use DIRECT_URL (port 5432), NOT pooler (port 6543)
  const pool = new Pool({ 
    connectionString: databaseUrl,
    max: 1, // SINGLE connection - Supabase session mode allows only 1 connection
    min: 0, // Don't keep idle connections
    idleTimeoutMillis: 5000, // Close idle connections very quickly
    connectionTimeoutMillis: 3000,
    // Disable prepared statements to avoid conflicts with Supabase pooler
    statement_timeout: 0,
    // Allow pool to close idle connections immediately
    allowExitOnIdle: true,
  });

  // Handle pool errors to prevent hanging connections
  pool.on('error', (err: Error) => {
    console.error('Unexpected error on idle client', err);
  });

  globalForPrisma.pool = pool;
  return pool;
}

// Prisma 7 requires adapter or accelerateUrl
// For direct database connection, we use the PostgreSQL adapter
function createPrismaClient(): PrismaClient {
  // Only create Prisma client server-side with DATABASE_URL
  if (typeof window !== 'undefined') {
    throw new Error('Prisma Client cannot be used in client components');
  }

  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required to use Prisma Client');
  }

  // Reuse the singleton pool
  const pool = getPool();
  const { PrismaPg } = require('@prisma/adapter-pg');
  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
}

export const prisma: PrismaClient | null =
  globalForPrisma.prisma ??
  (typeof window === 'undefined' && (process.env.DATABASE_URL || process.env.DIRECT_URL)
    ? createPrismaClient()
    : null);

// Reuse the same Prisma client instance in both dev and production
if (prisma && !globalForPrisma.prisma) {
  globalForPrisma.prisma = prisma;
}

