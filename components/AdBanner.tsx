import AdSense from './AdSense';

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = '' }: AdBannerProps) {
  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <div className="w-full max-w-4xl">
        <AdSense
          adSlot="1234567890" // Replace with your actual ad slot ID
          adFormat="horizontal"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}

