/**
 * Prisma Client for Supabase
 * Singleton pattern to prevent multiple instances in development
 * 
 * Prisma 7 requires either adapter or accelerateUrl in the constructor
 * This will only work server-side and when DATABASE_URL is set
 */

import { PrismaClient } from '@prisma/client';
import { getDatabaseUrl } from './db-connection';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

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

  // Dynamic imports to avoid bundling in client
  const { Pool } = require('pg');
  const { PrismaPg } = require('@prisma/adapter-pg');

  const pool = new Pool({ 
    connectionString: databaseUrl,
    // Disable prepared statements to avoid conflicts with Supabase pooler
    // This is a workaround - ideally use direct connection (port 5432)
    statement_timeout: 0,
  });
  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
}

export const prisma: PrismaClient | null =
  globalForPrisma.prisma ??
  (typeof window === 'undefined' && process.env.DATABASE_URL
    ? createPrismaClient()
    : null);

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma;
}

