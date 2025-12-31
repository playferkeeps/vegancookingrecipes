/**
 * Modular Logger for file and console logging
 * 
 * Usage:
 *   import { Logger } from '@/lib/logger';
 *   
 *   // Auto-generated log file name
 *   const logger = new Logger('purge-duplicates');
 *   logger.log('Starting process...');
 *   
 *   // Custom log file name
 *   const logger2 = new Logger('custom-task', 'my-custom-log.txt');
 *   
 *   // No file logging (console only)
 *   const logger3 = new Logger('console-only', null);
 */

import * as fs from 'fs';
import * as path from 'path';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LoggerOptions {
  /** Log file name (null = no file logging, auto = auto-generated) */
  logFileName?: string | null;
  /** Log directory (default: 'logs') */
  logDir?: string;
  /** Minimum log level to write to file (default: 'info') */
  fileLogLevel?: LogLevel;
  /** Minimum log level to write to console (default: 'info') */
  consoleLogLevel?: LogLevel;
  /** Whether to include timestamps (default: true) */
  includeTimestamps?: boolean;
  /** Whether to create log directory if it doesn't exist (default: true) */
  createLogDir?: boolean;
}

/**
 * Get formatted timestamp for logging
 */
export function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Format log message with timestamp
 */
function formatMessage(level: LogLevel, message: string, includeTimestamp: boolean = true): string {
  const timestamp = includeTimestamp ? `[${getTimestamp()}] ` : '';
  const levelPrefix = level !== 'info' ? `${level.toUpperCase()}: ` : '';
  return `${timestamp}${levelPrefix}${message}`;
}

/**
 * Check if log level should be logged based on minimum level
 */
function shouldLog(level: LogLevel, minLevel: LogLevel): boolean {
  const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
  return levels.indexOf(level) >= levels.indexOf(minLevel);
}

/**
 * Modular Logger class for file and console logging
 */
export class Logger {
  private logFile: string | null = null;
  private logStream: fs.WriteStream | null = null;
  private logDir: string;
  private fileLogLevel: LogLevel;
  private consoleLogLevel: LogLevel;
  private includeTimestamps: boolean;
  private taskName: string;

  constructor(taskName: string, options?: LoggerOptions | string | null) {
    // Handle legacy string parameter for logFileName
    if (typeof options === 'string' || options === null) {
      options = { logFileName: options };
    }

    this.taskName = taskName;
    this.logDir = options?.logDir || path.join(process.cwd(), 'logs');
    this.fileLogLevel = options?.fileLogLevel || 'info';
    this.consoleLogLevel = options?.consoleLogLevel || 'info';
    this.includeTimestamps = options?.includeTimestamps !== false;
    const createLogDir = options?.createLogDir !== false;

    // Determine log file name
    const logFileName = options?.logFileName !== undefined 
      ? options.logFileName 
      : this.generateLogFileName(taskName);

    // Initialize file logging if logFileName is provided
    if (logFileName) {
      // Create log directory if needed
      if (createLogDir && !fs.existsSync(this.logDir)) {
        fs.mkdirSync(this.logDir, { recursive: true });
      }

      this.logFile = path.join(this.logDir, logFileName);
      this.logStream = fs.createWriteStream(this.logFile, { flags: 'a' });

      // Write header
      this.writeToFile(`\n${'='.repeat(80)}`);
      this.writeToFile(`${taskName} - Log Started: ${new Date().toISOString()}`);
      this.writeToFile(`${'='.repeat(80)}\n`);
    }
  }

  /**
   * Generate a log file name based on task name and timestamp
   */
  private generateLogFileName(taskName: string): string {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const sanitizedTaskName = taskName.replace(/[^a-zA-Z0-9-_]/g, '-');
    return `${sanitizedTaskName}-${timestamp}.txt`;
  }

  /**
   * Write message to log file
   */
  private writeToFile(message: string): void {
    if (this.logStream) {
      this.logStream.write(message + '\n');
    }
  }

  /**
   * Get the log file path
   */
  getLogFile(): string | null {
    return this.logFile;
  }

  /**
   * Log a message (info level)
   */
  log(message: string): void {
    this.info(message);
  }

  /**
   * Log an info message
   */
  info(message: string): void {
    const formatted = formatMessage('info', message, this.includeTimestamps);
    
    if (shouldLog('info', this.consoleLogLevel)) {
      console.log(message);
    }
    
    if (shouldLog('info', this.fileLogLevel)) {
      this.writeToFile(formatted);
    }
  }

  /**
   * Log a debug message
   */
  debug(message: string): void {
    const formatted = formatMessage('debug', message, this.includeTimestamps);
    
    if (shouldLog('debug', this.consoleLogLevel)) {
      console.debug(`🔍 ${message}`);
    }
    
    if (shouldLog('debug', this.fileLogLevel)) {
      this.writeToFile(formatted);
    }
  }

  /**
   * Log a warning message
   */
  warn(message: string): void {
    const formatted = formatMessage('warn', message, this.includeTimestamps);
    
    if (shouldLog('warn', this.consoleLogLevel)) {
      console.warn(`⚠️  ${message}`);
    }
    
    if (shouldLog('warn', this.fileLogLevel)) {
      this.writeToFile(`WARNING: ${message}`);
    }
  }

  /**
   * Log an error message
   */
  error(message: string, error?: Error | unknown): void {
    const errorMessage = error instanceof Error 
      ? `${message}: ${error.message}`
      : error 
        ? `${message}: ${String(error)}`
        : message;
    
    const formatted = formatMessage('error', errorMessage, this.includeTimestamps);
    
    if (shouldLog('error', this.consoleLogLevel)) {
      console.error(`❌ ${errorMessage}`);
      if (error instanceof Error && error.stack) {
        console.error(error.stack);
      }
    }
    
    if (shouldLog('error', this.fileLogLevel)) {
      this.writeToFile(`ERROR: ${errorMessage}`);
      if (error instanceof Error && error.stack) {
        this.writeToFile(`Stack trace: ${error.stack}`);
      }
    }
  }

  /**
   * Log a success message
   */
  success(message: string): void {
    const formatted = formatMessage('info', message, this.includeTimestamps);
    
    if (shouldLog('info', this.consoleLogLevel)) {
      console.log(`✅ ${message}`);
    }
    
    if (shouldLog('info', this.fileLogLevel)) {
      this.writeToFile(`SUCCESS: ${message}`);
    }
  }

  /**
   * Write a raw message (no formatting)
   */
  raw(message: string, writeToConsole: boolean = true): void {
    if (writeToConsole) {
      console.log(message);
    }
    this.writeToFile(message);
  }

  /**
   * Write a separator line
   */
  separator(char: string = '='): void {
    const line = char.repeat(80);
    this.raw(line);
  }

  /**
   * Close the log file stream
   */
  close(): void {
    if (this.logStream) {
      this.writeToFile(`\n${'='.repeat(80)}`);
      this.writeToFile(`${this.taskName} - Log Ended: ${new Date().toISOString()}`);
      this.writeToFile(`${'='.repeat(80)}\n`);
      this.logStream.end();
      this.logStream = null;
    }
  }

  /**
   * Flush the log stream (useful for ensuring all data is written)
   */
  flush(): void {
    if (this.logStream) {
      this.logStream.write('', () => {}); // Trigger flush
    }
  }
}

/**
 * Create a logger instance with default options
 */
export function createLogger(taskName: string, logFileName?: string | null): Logger {
  return new Logger(taskName, { logFileName });
}

/**
 * Create a console-only logger (no file logging)
 */
export function createConsoleLogger(taskName: string): Logger {
  return new Logger(taskName, { logFileName: null });
}

