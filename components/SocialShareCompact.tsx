'use client';

import { useState } from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaWhatsapp, FaEnvelope, FaShareAlt } from 'react-icons/fa';

interface SocialShareCompactProps {
  url: string;
  title: string;
  description: string;
  image?: string;
}

export default function SocialShareCompact({ url, title, description, image }: SocialShareCompactProps) {
  const [isOpen, setIsOpen] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedImage = image ? encodeURIComponent(image) : '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
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
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border-2 border-green-600 bg-white hover:bg-green-50 text-green-700 hover:text-green-800 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm hover:shadow-md ${isOpen ? 'bg-green-50 border-green-700' : ''}`}
        aria-label="Share recipe"
        aria-expanded={isOpen}
      >
        <FaShareAlt className="text-sm sm:text-base" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-semibold">Share</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close on click outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Share buttons popup */}
          <div className="absolute bottom-full right-0 mb-2 z-50 bg-white rounded-lg shadow-xl p-3 flex gap-2 border-2 border-green-600 min-w-max">
            <div className="absolute -bottom-1 right-4 w-3 h-3 bg-white border-r-2 border-b-2 border-green-600 transform rotate-45"></div>
            <div className="flex flex-col items-center gap-1.5 pr-2 border-r border-gray-200 mr-1">
              <span className="text-xs font-semibold text-green-700">Share</span>
              <span className="text-[10px] text-gray-500">us</span>
            </div>
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="text-xs" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-500 hover:bg-sky-600 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="text-xs" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleShare('pinterest')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Share on Pinterest"
            >
              <FaPinterest className="text-xs" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="text-xs" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Share on WhatsApp"
            >
              <FaWhatsapp className="text-xs" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleShare('email')}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Share via Email"
            >
              <FaEnvelope className="text-xs" aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

