import AdSense from './AdSense';

interface AdInFeedProps {
  className?: string;
}

export default function AdInFeed({ className = '' }: AdInFeedProps) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <div className="w-full">
        <AdSense
          adSlot="6554622792" // TODO: Replace with your actual IN-FEED ad slot ID (different from banner and rectangle!)
          adFormat="auto"
          fullWidthResponsive={true}
          className="min-h-[200px]"
        />
      </div>
    </div>
  );
}



