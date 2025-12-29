/**
 * reCAPTCHA utility functions
 * Handles verification and browser storage with 24-hour expiration
 */

const RECAPTCHA_STORAGE_KEY = 'recaptcha_verified';
const RECAPTCHA_EXPIRY_HOURS = 24;

interface RecaptchaVerification {
  timestamp: number;
  expiresAt: number;
}

/**
 * Check if reCAPTCHA verification is still valid (not expired)
 */
export function isRecaptchaVerified(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const stored = localStorage.getItem(RECAPTCHA_STORAGE_KEY);
    if (!stored) return false;
    
    const verification: RecaptchaVerification = JSON.parse(stored);
    const now = Date.now();
    
    // Check if verification has expired
    if (now > verification.expiresAt) {
      // Expired - remove it
      localStorage.removeItem(RECAPTCHA_STORAGE_KEY);
      return false;
    }
    
    return true;
  } catch (e) {
    console.error('Error checking reCAPTCHA verification:', e);
    return false;
  }
}

/**
 * Save reCAPTCHA verification to localStorage with 24-hour expiration
 */
export function saveRecaptchaVerification(): void {
  if (typeof window === 'undefined') return;
  
  const now = Date.now();
  const expiresAt = now + (RECAPTCHA_EXPIRY_HOURS * 60 * 60 * 1000);
  
  const verification: RecaptchaVerification = {
    timestamp: now,
    expiresAt,
  };
  
  try {
    localStorage.setItem(RECAPTCHA_STORAGE_KEY, JSON.stringify(verification));
  } catch (e) {
    console.error('Error saving reCAPTCHA verification:', e);
  }
}

/**
 * Clear reCAPTCHA verification (force re-verification)
 */
export function clearRecaptchaVerification(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(RECAPTCHA_STORAGE_KEY);
}

/**
 * Get remaining time until expiration (in milliseconds)
 */
export function getRecaptchaExpiryTime(): number | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(RECAPTCHA_STORAGE_KEY);
    if (!stored) return null;
    
    const verification: RecaptchaVerification = JSON.parse(stored);
    const now = Date.now();
    const remaining = verification.expiresAt - now;
    
    return remaining > 0 ? remaining : null;
  } catch (e) {
    return null;
  }
}

