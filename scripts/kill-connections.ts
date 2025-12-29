/**
 * Script to kill orphaned database connections
 * Run with: npx tsx scripts/kill-connections.ts
 */

import 'dotenv/config';
import { Pool } from 'pg';
import { getDatabaseUrl } from '../lib/db-connection';

const databaseUrl = getDatabaseUrl();
if (!databaseUrl) {
  console.error('❌ DATABASE_URL or DIRECT_URL is not set.');
  process.exit(1);
}

async function killConnections() {
  // Use a direct connection (not pooled) to check connections
  // This avoids hitting the pool limit
  const directPool = new Pool({ 
    connectionString: databaseUrl,
    max: 1,
    // Use a very short timeout to fail fast if we can't connect
    connectionTimeoutMillis: 2000,
  });

  try {
    console.log('🔍 Attempting to check active connections...');
    console.log('⚠️  If you see "max clients reached", use Supabase Dashboard instead (see instructions below)\n');
    
    // Get current database name from connection string
    const url = new URL(databaseUrl);
    const dbName = url.pathname.slice(1) || 'postgres';
    
    // Query to get all active connections (excluding our own)
    const result = await directPool.query(`
      SELECT 
        pid,
        usename,
        application_name,
        client_addr,
        state,
        query_start,
        state_change,
        LEFT(query, 100) as query_preview
      FROM pg_stat_activity
      WHERE datname = $1
        AND pid != pg_backend_pid()
      ORDER BY query_start;
    `, [dbName]);

    console.log(`\n📊 Found ${result.rows.length} active connections:\n`);
    
    if (result.rows.length === 0) {
      console.log('✅ No orphaned connections found!');
      await directPool.end();
      return;
    }

    // Display connections
    result.rows.forEach((row, index) => {
      console.log(`${index + 1}. PID: ${row.pid}`);
      console.log(`   User: ${row.usename}`);
      console.log(`   Application: ${row.application_name || 'N/A'}`);
      console.log(`   State: ${row.state}`);
      console.log(`   Started: ${row.query_start}`);
      console.log(`   Query: ${row.query_preview || 'N/A'}...`);
      console.log('');
    });

    // Ask to kill connections
    console.log('⚠️  To kill these connections, run:');
    console.log('   SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = \'' + dbName + '\' AND pid != pg_backend_pid();');
    console.log('\nOr kill specific PIDs:');
    result.rows.forEach((row) => {
      console.log(`   SELECT pg_terminate_backend(${row.pid});`);
    });

    // Optionally, kill all non-idle connections automatically
    if (process.env.AUTO_KILL === 'true') {
      console.log('\n🔪 Auto-killing connections (AUTO_KILL=true)...');
      for (const row of result.rows) {
        try {
          await directPool.query('SELECT pg_terminate_backend($1)', [row.pid]);
          console.log(`   ✅ Killed PID ${row.pid}`);
        } catch (error: any) {
          console.log(`   ⚠️  Could not kill PID ${row.pid}: ${error.message}`);
        }
      }
      console.log('\n✅ Done!');
    }

  } catch (error: any) {
    if (error.message?.includes('MaxClientsInSessionMode') || error.message?.includes('max clients')) {
      console.error('❌ Cannot connect - all connections are exhausted!');
      console.error('\n📋 Use one of these methods to kill connections:\n');
      console.error('1. SUPABASE DASHBOARD (Easiest):');
      console.error('   - Go to: https://supabase.com/dashboard');
      console.error('   - Select your project → Database → SQL Editor');
      console.error('   - Run this SQL:\n');
      console.error('   SELECT pg_terminate_backend(pid)');
      console.error('   FROM pg_stat_activity');
      console.error('   WHERE datname = current_database()');
      console.error('     AND pid != pg_backend_pid();\n');
      console.error('2. WAIT AND RETRY:');
      console.error('   - Wait 30-60 seconds for idle connections to timeout');
      console.error('   - Then run: npm run db:kill-connections\n');
      console.error('3. RESTART SUPABASE (if you have access):');
      console.error('   - Supabase Dashboard → Settings → Database → Restart\n');
      console.error('4. MANUAL SQL (if you can connect via another tool):');
      console.error('   Connect to your database and run:');
      console.error('   SELECT pg_terminate_backend(pid) FROM pg_stat_activity');
      console.error('   WHERE datname = current_database() AND pid != pg_backend_pid();\n');
    } else {
      console.error('❌ Error:', error.message);
    }
  } finally {
    try {
      await directPool.end();
    } catch (e) {
      // Ignore errors when closing
    }
  }
}

killConnections();

