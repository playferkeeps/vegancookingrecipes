'use client';

import { useMemo } from 'react';
import AdSense from './AdSense';
import { getNextAdSlot } from '@/lib/ad-slot-pool';

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = '' }: AdBannerProps) {
  // Get a unique ad slot ID from the pool for this instance
  const adSlot = useMemo(() => getNextAdSlot(), []);

  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <div className="w-full max-w-4xl">
        <AdSense
          adSlot={adSlot}
          adFormat="horizontal"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}



