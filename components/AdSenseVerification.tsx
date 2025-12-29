'use client';

import { useEffect } from 'react';

export default function AdSenseVerification() {
  useEffect(() => {
    const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-XXXXXXXXXX';
    
    // Remove existing meta tag if present
    const existingMeta = document.querySelector('meta[name="google-adsense-account"]');
    if (existingMeta) {
      existingMeta.remove();
    }
    
    // Add AdSense ownership verification meta tag
    const meta = document.createElement('meta');
    meta.name = 'google-adsense-account';
    meta.content = publisherId;
    document.head.appendChild(meta);
  }, []);

  return null; // This component doesn't render anything
}

