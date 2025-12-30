/**
 * Ad Slot Pool Management
 * Manages a pool of ad slot IDs and ensures each ad on a page uses a unique ID
 * 
 * Usage:
 * 1. Create multiple horizontal ad units in your AdSense dashboard
 * 2. Set NEXT_PUBLIC_ADSENSE_SLOTS as a comma-delimited string of ad slot IDs
 *    Example: NEXT_PUBLIC_ADSENSE_SLOTS=6554622792,1234567890,9876543210,1111111111
 * 3. Each AdBanner component will automatically get a unique slot ID from the pool
 */

// Parse comma-delimited ad slot IDs from environment variable
// Format: NEXT_PUBLIC_ADSENSE_SLOTS=6554622792,1234567890,9876543210
const parseAdSlotPool = (): string[] => {
  const envSlots = process.env.NEXT_PUBLIC_ADSENSE_SLOTS;
  
  if (envSlots) {
    // Split by comma, trim whitespace, and filter out empty strings
    return envSlots
      .split(',')
      .map(slot => slot.trim())
      .filter(Boolean);
  }
  
  // Fallback to default if no env var is set
  return ['6554622792'];
};

// Pool of horizontal ad slot IDs
const AD_SLOT_POOL: string[] = parseAdSlotPool();

// Track which slot IDs have been used
// Uses a Set to track used slots and a counter as fallback
let usedSlots = new Set<string>();
let slotIndex = 0;

// Reset pool on page load/navigation (Next.js)
if (typeof window !== 'undefined') {
  // Reset on initial load
  const resetPool = () => {
    usedSlots.clear();
    slotIndex = 0;
  };
  
  // Reset on page load
  if (document.readyState === 'loading') {
    window.addEventListener('load', resetPool);
  } else {
    resetPool();
  }
  
  // Reset on popstate (back/forward navigation)
  window.addEventListener('popstate', resetPool);
}

/**
 * Get the next available ad slot ID from the pool
 * Cycles through available IDs to ensure each ad on a page uses a different ID
 */
export function getNextAdSlot(): string {
  // Ensure we have at least one slot
  if (AD_SLOT_POOL.length === 0) {
    return '6554622792'; // Fallback to default
  }
  
  // Try to find an unused slot first
  const unusedSlots = AD_SLOT_POOL.filter(slot => !usedSlots.has(slot));
  
  let selectedSlot: string;
  if (unusedSlots.length > 0) {
    // Use an unused slot
    selectedSlot = unusedSlots[0];
    usedSlots.add(selectedSlot);
  } else {
    // All slots used, cycle through using index
    selectedSlot = AD_SLOT_POOL[slotIndex % AD_SLOT_POOL.length];
    slotIndex++;
  }
  
  return selectedSlot;
}

/**
 * Reset the slot index and used slots (useful for testing or explicit resets)
 */
export function resetAdSlotPool(): void {
  usedSlots.clear();
  slotIndex = 0;
}

/**
 * Get the pool size
 */
export function getPoolSize(): number {
  return AD_SLOT_POOL.length;
}

/**
 * Get all available slot IDs in the pool
 */
export function getPoolSlots(): readonly string[] {
  return AD_SLOT_POOL;
}

