'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Declare gtag type for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Google Analytics page view tracker
 * Tracks page views for Next.js App Router
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track on client-side
    if (typeof window === 'undefined') {
      return;
    }

    // Wait for gtag to be available (it's loaded in layout.tsx)
    if (typeof window.gtag === 'undefined') {
      // Retry after a short delay if gtag isn't ready yet
      const timeoutId = setTimeout(() => {
        if (typeof window.gtag !== 'undefined') {
          trackPageView();
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    }

    const trackPageView = () => {
      // Get the full URL
      const url = `${window.location.origin}${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

      // Track page view
      window.gtag!('config', 'G-5PG8FMRN5R', {
        page_path: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ''),
        page_location: url,
      });
    };

    trackPageView();
  }, [pathname, searchParams]);

  return null;
}
