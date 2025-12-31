'use client';

import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
  image?: string;
}

export default function SocialShare({ url, title, description, image }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedImage = image ? encodeURIComponent(image) : '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedDescription}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    const shareUrl = shareLinks[platform];
    if (platform === 'email') {
      window.location.href = shareUrl;
    } else {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 my-4 sm:my-6" role="group" aria-label="Share recipe">
      <button
        onClick={() => handleShare('facebook')}
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px] min-w-[44px]"
        aria-label="Share on Facebook"
      >
        <FaFacebook aria-hidden="true" className="text-base sm:text-lg" />
        <span className="sr-only sm:not-sr-only">Facebook</span>
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px] min-w-[44px]"
        aria-label="Share on Twitter"
      >
        <FaTwitter aria-hidden="true" className="text-base sm:text-lg" />
        <span className="sr-only sm:not-sr-only">Twitter</span>
      </button>
      <button
        onClick={() => handleShare('pinterest')}
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px] min-w-[44px]"
        aria-label="Share on Pinterest"
      >
        <FaPinterest aria-hidden="true" className="text-base sm:text-lg" />
        <span className="sr-only sm:not-sr-only">Pinterest</span>
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px] min-w-[44px]"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin aria-hidden="true" className="text-base sm:text-lg" />
        <span className="sr-only sm:not-sr-only">LinkedIn</span>
      </button>
      <button
        onClick={() => handleShare('whatsapp')}
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px] min-w-[44px]"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" className="text-base sm:text-lg" />
        <span className="sr-only sm:not-sr-only">WhatsApp</span>
      </button>
      <button
        onClick={() => handleShare('email')}
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px] min-w-[44px]"
        aria-label="Share via Email"
      >
        <FaEnvelope aria-hidden="true" className="text-base sm:text-lg" />
        <span className="sr-only sm:not-sr-only">Email</span>
      </button>
    </div>
  );
}

