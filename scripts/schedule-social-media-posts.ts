/**
 * Script to schedule social media posts (Facebook & Instagram) at regular intervals
 * 
 * Usage:
 *   npm run schedule-social-media-posts
 * 
 * This will run continuously and post recipes at the specified interval
 */

import 'dotenv/config';
import { postToSocialMedia } from './post-to-social-media';

const INTERVAL_HOURS = parseInt(process.env.SOCIAL_MEDIA_POST_INTERVAL_HOURS || '6', 10);
const INTERVAL_MS = INTERVAL_HOURS * 60 * 60 * 1000;

/**
 * Get formatted timestamp for logging
 */
function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Log with timestamp
 */
function logWithTimestamp(message: string, type: 'log' | 'error' | 'warn' = 'log'): void {
  const timestamp = getTimestamp();
  const formattedMessage = `[${timestamp}] ${message}`;
  
  switch (type) {
    case 'error':
      console.error(formattedMessage);
      break;
    case 'warn':
      console.warn(formattedMessage);
      break;
    default:
      console.log(formattedMessage);
  }
}

logWithTimestamp(`🤖 Social Media Post Scheduler Started`);
logWithTimestamp(`   Interval: ${INTERVAL_HOURS} hours`);
logWithTimestamp(`   Next post in: ${INTERVAL_HOURS} hours\n`);

// Post immediately on start
postToSocialMedia(false).catch((error) => {
  logWithTimestamp(`❌ Error in initial post: ${error.message}`, 'error');
  logWithTimestamp('   Will retry at next interval...\n');
});

// Then post at regular intervals
setInterval(() => {
  logWithTimestamp(`\n⏰ Scheduled post time reached...\n`);
  postToSocialMedia(false).catch((error) => {
    logWithTimestamp(`❌ Error in scheduled post: ${error.message}`, 'error');
    logWithTimestamp('   Will retry at next interval...\n');
  });
}, INTERVAL_MS);

// Keep process alive
process.on('SIGINT', () => {
  logWithTimestamp('\n👋 Shutting down scheduler...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  logWithTimestamp('\n👋 Shutting down scheduler...');
  process.exit(0);
});
