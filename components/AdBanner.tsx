import AdSense from './AdSense';

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = '' }: AdBannerProps) {
  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <div className="w-full max-w-4xl">
        <AdSense
          adSlot="6554622792" // TODO: Replace with your actual BANNER ad slot ID from AdSense dashboard
          adFormat="horizontal"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}



