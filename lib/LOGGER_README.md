# Modular Logger

A reusable logging utility that supports both console and file logging with timestamps.

## Features

- ✅ **Dual Output**: Logs to both console and file simultaneously
- ✅ **Timestamps**: Automatic ISO timestamp formatting
- ✅ **Log Levels**: Support for debug, info, warn, and error levels
- ✅ **Flexible Configuration**: Custom log files, directories, and log levels
- ✅ **TypeScript Support**: Fully typed for better IDE support
- ✅ **Next.js Compatible**: Works in both Node.js scripts and Next.js app code

## Basic Usage

### In Scripts

```typescript
import { Logger } from '@/lib/logger';

// Auto-generated log file name (recommended)
const logger = new Logger('my-script');
logger.log('Starting process...');
logger.success('Process completed!');
logger.error('Something went wrong', error);
logger.close(); // Don't forget to close!
```

### In Next.js App

```typescript
import { Logger } from '@/lib/logger';

// Console-only logging (no file)
const logger = new Logger('api-route', null);
logger.log('API request received');
```

## Advanced Usage

### Custom Log File Name

```typescript
const logger = new Logger('my-task', 'custom-log.txt');
```

### Custom Configuration

```typescript
const logger = new Logger('my-task', {
  logFileName: 'my-custom-log.txt',
  logDir: './custom-logs',
  fileLogLevel: 'debug', // Log everything to file
  consoleLogLevel: 'info', // Only info+ to console
  includeTimestamps: true,
  createLogDir: true,
});
```

### Console-Only Logger

```typescript
import { createConsoleLogger } from '@/lib/logger';

const logger = createConsoleLogger('my-task');
logger.log('This only goes to console');
```

### Helper Functions

```typescript
import { createLogger, getTimestamp } from '@/lib/logger';

// Create logger with default options
const logger = createLogger('my-task', 'log.txt');

// Get current timestamp
const now = getTimestamp(); // "2025-12-31T19:30:00.000Z"
```

## Log Methods

### `logger.log(message)` / `logger.info(message)`

Standard informational message.

```typescript
logger.log('Processing data...');
logger.info('User logged in');
```

### `logger.debug(message)`

Debug-level message (only shown if log level is set to 'debug').

```typescript
logger.debug('Variable value: ' + value);
```

### `logger.warn(message)`

Warning message.

```typescript
logger.warn('Rate limit approaching');
```

### `logger.error(message, error?)`

Error message with optional error object.

```typescript
logger.error('Failed to process', error);
logger.error('Connection failed');
```

### `logger.success(message)`

Success message (formatted with ✅ emoji in console).

```typescript
logger.success('Operation completed successfully');
```

### `logger.raw(message, writeToConsole?)`

Write raw message without formatting.

```typescript
logger.raw('Raw log entry');
logger.raw('Console only', true);
logger.raw('File only', false);
```

### `logger.separator(char?)`

Write a separator line.

```typescript
logger.separator(); // ==========
logger.separator('-'); // ----------
```

## Log Levels

Log levels control what gets written to console and file:

- **debug**: All messages (debug, info, warn, error)
- **info**: Info, warnings, and errors (default)
- **warn**: Warnings and errors only
- **error**: Errors only

```typescript
const logger = new Logger('my-task', {
  fileLogLevel: 'debug', // Log everything to file
  consoleLogLevel: 'warn', // Only warnings/errors to console
});
```

## File Management

### Get Log File Path

```typescript
const logFile = logger.getLogFile();
console.log(`Log saved to: ${logFile}`);
```

### Close Logger

Always close the logger when done to ensure all data is written:

```typescript
logger.close();
```

### Flush Log Stream

Force write buffered data:

```typescript
logger.flush();
```

## Examples

### Script with Error Handling

```typescript
import { Logger } from '@/lib/logger';

async function main() {
  const logger = new Logger('my-script');

  try {
    logger.log('Starting script...');
    // ... your code ...
    logger.success('Script completed successfully');
  } catch (error) {
    logger.error('Script failed', error);
    process.exit(1);
  } finally {
    logger.close();
  }
}
```

### API Route with Logging

```typescript
import { Logger } from '@/lib/logger';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const logger = new Logger('api-route', null); // Console only

  try {
    logger.log('Processing request...');
    // ... your code ...
    logger.success('Request processed');
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('Request failed', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
```

### Scheduled Task

```typescript
import { Logger } from '@/lib/logger';

async function scheduledTask() {
  const logger = new Logger('scheduled-task');

  logger.log('Task started');
  // ... task logic ...
  logger.success('Task completed');

  logger.close();
}
```

## Log File Location

By default, log files are saved to:

```
<project-root>/logs/<task-name>-<timestamp>.txt
```

Example:

```
logs/purge-duplicates-2025-12-31T19-09-22-526Z.txt
```

## Best Practices

1. **Always close the logger** when done to ensure all data is written
2. **Use descriptive task names** for easier log file identification
3. **Use appropriate log levels** to reduce noise in production
4. **Handle errors properly** with `logger.error(message, error)`
5. **Use console-only logging** in Next.js API routes to avoid file I/O overhead
6. **Use file logging** in scripts for historical tracking

## Migration from Old Logger

If you have existing code using a custom logger, migration is simple:

**Before:**

```typescript
class MyLogger {
  log(message: string) { ... }
  error(message: string) { ... }
}
```

**After:**

```typescript
import { Logger } from '@/lib/logger';

const logger = new Logger('my-task');
logger.log(message);
logger.error(message, error);
```
