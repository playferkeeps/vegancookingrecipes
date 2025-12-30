import AdSense from './AdSense';

interface AdInFeedProps {
  className?: string;
}

export default function AdInFeed({ className = '' }: AdInFeedProps) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <div className="w-full">
        <AdSense
          adSlot="6554622792" // Replace with your actual ad slot ID
          adFormat="auto"
          fullWidthResponsive={true}
          className="min-h-[200px]"
        />
      </div>
    </div>
  );
}



