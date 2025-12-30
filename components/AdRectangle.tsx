import AdSense from './AdSense';

interface AdRectangleProps {
  className?: string;
}

export default function AdRectangle({ className = '' }: AdRectangleProps) {
  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <div className="w-full max-w-[300px]">
        <AdSense
          adSlot="1234567891" // Replace with your actual ad slot ID
          adFormat="rectangle"
          className="min-h-[250px]"
        />
      </div>
    </div>
  );
}



