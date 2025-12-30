'use client';

import { useEffect, useState, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style,
  className = '',
}: AdSenseProps) {
  const [isMounted, setIsMounted] = useState(false);
  const adInitialized = useRef(false);
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Wait for mount, element to be in DOM, and ensure we only initialize once
    if (!isMounted || adInitialized.current || !insRef.current) return;

    const initializeAd = () => {
      try {
        if (typeof window !== 'undefined') {
          // Check if adsbygoogle script is loaded and ready
          const adsbygoogle = (window as any).adsbygoogle;
          
          if (!adsbygoogle) {
            // Script not loaded yet, retry
            setTimeout(initializeAd, 200);
            return;
          }

          // Initialize adsbygoogle array if it doesn't exist
          (window as any).adsbygoogle = adsbygoogle || [];
          
          // Push empty object to initialize this specific ad unit
          // This matches the AdSense pattern: (adsbygoogle = window.adsbygoogle || []).push({});
          (window as any).adsbygoogle.push({});
          adInitialized.current = true;

          // Log helpful info for debugging
          console.log(`[AdSense] Ad unit initialized (Slot: ${adSlot}, Format: ${adFormat})`);
          
          // Monitor ad status multiple times to catch status changes
          const checkStatus = (attempt: number) => {
            if (!insRef.current) return;
            
            const adStatus = insRef.current.getAttribute('data-ad-status');
            const adsbygoogleStatus = insRef.current.getAttribute('data-adsbygoogle-status');
            
            if (attempt === 1) {
              // First check after 1 second
              console.log(`[AdSense] Ad status check (Slot: ${adSlot}):`, {
                'data-ad-status': adStatus,
                'data-adsbygoogle-status': adsbygoogleStatus,
                hostname: window.location.hostname
              });
            }
            
            // Check if ad is filled
            if (adStatus === 'filled') {
              console.log(`[AdSense] ✓ Ad slot ${adSlot} is filled and displaying!`);
              return;
            }
            
            // If still null or unfilled after multiple checks, log warning
            if (attempt === 3) {
              if (adStatus === null || adStatus === 'unfilled') {
                console.warn(`[AdSense] ⚠️ Ad slot ${adSlot} status: ${adStatus || 'null'}. Possible reasons:`, [
                  '1. Ad unit not approved yet (can take 24-48 hours after creation)',
                  '2. No ads available for this slot/format combination',
                  '3. Site not fully verified in AdSense dashboard',
                  '4. Ad unit format mismatch (check if format matches AdSense dashboard)',
                  '5. Ad serving policies (check AdSense dashboard for policy issues)',
                  '6. Low traffic/new site (may take time for ads to start serving)'
                ]);
              }
            }
            
            // Continue checking if not filled yet (up to 3 times)
            if (attempt < 3 && (adStatus === null || adStatus === 'unfilled')) {
              setTimeout(() => checkStatus(attempt + 1), 2000);
            }
          };
          
          // Start checking status after 1 second
          setTimeout(() => checkStatus(1), 1000);
        }
      } catch (err) {
        console.error('AdSense error:', err);
        // Retry if initialization failed
        if (!adInitialized.current) {
          setTimeout(initializeAd, 500);
        }
      }
    };

    // Wait longer for the script to fully load, then initialize
    const timeoutId = setTimeout(initializeAd, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, adSlot, adFormat]);

  // Replace with your AdSense publisher ID
  const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-XXXXXXXXXX';

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div
        className={className}
        style={{
          display: 'block',
          minHeight: style?.minHeight || '100px',
          ...style,
        }}
        suppressHydrationWarning
        aria-label="Advertisement"
        role="region"
      />
    );
  }

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle ${className}`}
      style={{
        display: 'block',
        ...style,
      }}
      data-ad-client={PUBLISHER_ID}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      suppressHydrationWarning
      aria-label="Advertisement"
      role="region"
    />
  );
}

