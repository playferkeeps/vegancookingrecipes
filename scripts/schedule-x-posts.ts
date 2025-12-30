/**
 * Script to schedule X posts at regular intervals
 * 
 * Usage:
 *   npm run schedule-x-posts
 * 
 * This will run continuously and post recipes at the specified interval
 */

import 'dotenv/config';
import { postRecipeToX } from './post-recipe-to-x';

const INTERVAL_HOURS = parseInt(process.env.X_POST_INTERVAL_HOURS || '6', 10);
const INTERVAL_MS = INTERVAL_HOURS * 60 * 60 * 1000;

console.log(`🤖 X Post Scheduler Started`);
console.log(`   Interval: ${INTERVAL_HOURS} hours`);
console.log(`   Next post in: ${INTERVAL_HOURS} hours\n`);

// Post immediately on start
postRecipeToX().catch((error) => {
  console.error('❌ Error in initial post:', error.message);
  console.log('   Will retry at next interval...\n');
});

// Then post at regular intervals
setInterval(() => {
  console.log(`\n⏰ Scheduled post time reached...\n`);
  postRecipeToX().catch((error) => {
    console.error('❌ Error in scheduled post:', error.message);
    console.log('   Will retry at next interval...\n');
  });
}, INTERVAL_MS);

// Keep process alive
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down scheduler...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n👋 Shutting down scheduler...');
  process.exit(0);
});


