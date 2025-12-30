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
        if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
          // Initialize adsbygoogle array if it doesn't exist
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          
          // Push empty object to initialize this specific ad unit
          // This matches the AdSense pattern: (adsbygoogle = window.adsbygoogle || []).push({});
          (window as any).adsbygoogle.push({});
          adInitialized.current = true;

          // Log helpful info in development
          if (process.env.NODE_ENV === 'development') {
            const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            if (isLocalhost) {
              console.log(`[AdSense] Ad unit initialized (Slot: ${adSlot}). Note: AdSense typically doesn't serve ads on localhost. Deploy to production to see ads.`);
            }
          }
        } else {
          // Script not loaded yet, retry
          setTimeout(initializeAd, 100);
        }
      } catch (err) {
        console.error('AdSense error:', err);
        // Retry if initialization failed
        if (!adInitialized.current) {
          setTimeout(initializeAd, 200);
        }
      }
    };

    // Wait a bit for the script to load and element to be in DOM, then initialize
    const timeoutId = setTimeout(initializeAd, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, adSlot]);

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

