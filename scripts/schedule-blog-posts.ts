/**
 * Script to schedule blog post generation 4 times a day
 * Rotates through: beverage, breakfast, lunch, dinner
 * 
 * Usage:
 *   npm run schedule-blog-posts
 * 
 * This will run continuously and generate blog posts at scheduled times:
 * - 6:00 AM: Breakfast
 * - 12:00 PM: Lunch
 * - 6:00 PM: Dinner
 * - 9:00 PM: Beverage
 * 
 * Or customize times via environment variables
 */

import 'dotenv/config';
import { spawn } from 'child_process';
import * as path from 'path';

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

/**
 * Meal type schedule configuration
 */
interface MealSchedule {
  category: 'beverage' | 'breakfast' | 'lunch' | 'dinner';
  hour: number;
  minute: number;
  name: string;
}

/**
 * Default schedule: 4 posts per day
 */
const DEFAULT_SCHEDULE: MealSchedule[] = [
  { category: 'breakfast', hour: 6, minute: 0, name: 'Breakfast' },
  { category: 'lunch', hour: 12, minute: 0, name: 'Lunch' },
  { category: 'dinner', hour: 18, minute: 0, name: 'Dinner' },
  { category: 'beverage', hour: 21, minute: 0, name: 'Beverage' },
];

/**
 * Get schedule from environment or use defaults
 */
function getSchedule(): MealSchedule[] {
  // Allow custom schedule via env vars (comma-separated: category:hour:minute)
  const customSchedule = process.env.BLOG_POST_SCHEDULE;
  
  if (customSchedule) {
    try {
      const entries = customSchedule.split(',');
      return entries.map(entry => {
        const [category, hour, minute] = entry.trim().split(':');
        return {
          category: category as MealSchedule['category'],
          hour: parseInt(hour, 10),
          minute: parseInt(minute, 10),
          name: category.charAt(0).toUpperCase() + category.slice(1),
        };
      });
    } catch (error) {
      logWithTimestamp(`⚠️  Invalid BLOG_POST_SCHEDULE format, using defaults`, 'warn');
      return DEFAULT_SCHEDULE;
    }
  }
  
  return DEFAULT_SCHEDULE;
}

/**
 * Calculate milliseconds until next scheduled time
 */
function getMsUntilNextSchedule(schedule: MealSchedule[]): number {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  // Find next scheduled time today
  const todaySchedules = schedule
    .map(s => ({
      ...s,
      timeInMinutes: s.hour * 60 + s.minute,
    }))
    .filter(s => s.timeInMinutes > currentTime)
    .sort((a, b) => a.timeInMinutes - b.timeInMinutes);
  
  if (todaySchedules.length > 0) {
    // Next schedule is today
    const nextSchedule = todaySchedules[0];
    const msUntilNext = (nextSchedule.timeInMinutes - currentTime) * 60 * 1000;
    return msUntilNext;
  } else {
    // Next schedule is tomorrow (first schedule of the day)
    const firstSchedule = schedule
      .map(s => ({
        ...s,
        timeInMinutes: s.hour * 60 + s.minute,
      }))
      .sort((a, b) => a.timeInMinutes - b.timeInMinutes)[0];
    
    const minutesUntilMidnight = (24 * 60) - currentTime;
    const msUntilMidnight = minutesUntilMidnight * 60 * 1000;
    const msUntilFirstSchedule = firstSchedule.timeInMinutes * 60 * 1000;
    
    return msUntilMidnight + msUntilFirstSchedule;
  }
}

/**
 * Format time for display
 */
function formatTime(hour: number, minute: number): string {
  const h = hour.toString().padStart(2, '0');
  const m = minute.toString().padStart(2, '0');
  return `${h}:${m}`;
}

/**
 * Generate blog post for a category
 */
async function generateBlogPost(category: MealSchedule['category']): Promise<void> {
  return new Promise((resolve, reject) => {
    logWithTimestamp(`📝 Generating blog post for category: ${category}`);
    
    const scriptPath = path.join(process.cwd(), 'scripts', 'generate-blog-post.ts');
    const child = spawn('npx', ['tsx', scriptPath, '--category', category], {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        logWithTimestamp(`✅ Blog post generated successfully for ${category}`);
        resolve();
      } else {
        logWithTimestamp(`❌ Blog post generation failed for ${category} (exit code: ${code})`, 'error');
        reject(new Error(`Blog post generation failed with exit code ${code}`));
      }
    });
    
    child.on('error', (error) => {
      logWithTimestamp(`❌ Error spawning blog post generation: ${error.message}`, 'error');
      reject(error);
    });
  });
}

/**
 * Run scheduled blog post generation
 */
async function runScheduledPost(schedule: MealSchedule): Promise<void> {
  logWithTimestamp(`\n⏰ Scheduled time reached: ${schedule.name} (${formatTime(schedule.hour, schedule.minute)})`);
  logWithTimestamp(`📝 Generating blog post for category: ${schedule.category}\n`);
  
  try {
    await generateBlogPost(schedule.category);
    logWithTimestamp(`✅ Successfully completed ${schedule.name} blog post generation\n`);
  } catch (error: any) {
    logWithTimestamp(`❌ Failed to generate ${schedule.name} blog post: ${error.message}`, 'error');
    logWithTimestamp('   Will retry at next scheduled time...\n', 'warn');
  }
}

/**
 * Main scheduler function
 */
async function main() {
  const schedule = getSchedule();
  
  logWithTimestamp('📅 Blog Post Scheduler Started');
  logWithTimestamp('============================\n');
  logWithTimestamp('📋 Schedule:');
  schedule.forEach(s => {
    logWithTimestamp(`   ${formatTime(s.hour, s.minute)} - ${s.name} (${s.category})`);
  });
  logWithTimestamp('');
  
  // Calculate time until next post
  const msUntilNext = getMsUntilNextSchedule(schedule);
  const nextDate = new Date(Date.now() + msUntilNext);
  const nextSchedule = schedule.find(s => 
    s.hour === nextDate.getHours() && s.minute === nextDate.getMinutes()
  ) || schedule[0];
  
  logWithTimestamp(`⏰ Next post: ${nextSchedule.name} at ${formatTime(nextDate.getHours(), nextDate.getMinutes())}`);
  logWithTimestamp(`   (in ${Math.round(msUntilNext / 1000 / 60)} minutes)\n`);
  
  // Set up interval to check for scheduled times
  const checkInterval = 60 * 1000; // Check every minute
  let lastCheckedHour = -1;
  let lastCheckedMinute = -1;
  
  const checkAndRun = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Only check once per minute
    if (currentHour === lastCheckedHour && currentMinute === lastCheckedMinute) {
      return;
    }
    
    lastCheckedHour = currentHour;
    lastCheckedMinute = currentMinute;
    
    // Check if it's time for any scheduled post
    const matchingSchedule = schedule.find(
      s => s.hour === currentHour && s.minute === currentMinute
    );
    
    if (matchingSchedule) {
      runScheduledPost(matchingSchedule).catch((error) => {
        logWithTimestamp(`Error in scheduled post: ${error.message}`, 'error');
      });
    }
  };
  
  // Check immediately (in case we're starting at a scheduled time)
  checkAndRun();
  
  // Then check every minute
  setInterval(checkAndRun, checkInterval);
  
  logWithTimestamp('✅ Scheduler running. Press Ctrl+C to stop.\n');
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  logWithTimestamp('\n👋 Shutting down blog post scheduler...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  logWithTimestamp('\n👋 Shutting down blog post scheduler...');
  process.exit(0);
});

// Run if called directly
if (require.main === module) {
  main().catch((error) => {
    logWithTimestamp(`❌ Fatal error: ${error.message}`, 'error');
    process.exit(1);
  });
}

export { main as scheduleBlogPosts };
