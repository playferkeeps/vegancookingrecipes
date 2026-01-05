'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [pageId, setPageId] = useState<string | null>(null);
  const [instagramId, setInstagramId] = useState<string | null>(null);

  useEffect(() => {
    setPageId(searchParams.get('page_id'));
    setInstagramId(searchParams.get('instagram_id'));
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 sm:p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Setup Complete!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your Facebook and Instagram accounts are now fully automated. Tokens will refresh automatically every 60 days.
        </p>

        <div className="bg-white rounded-lg p-6 mb-6 text-left">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Next?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-green-600 font-bold">✓</span>
              <span>All tokens have been saved to your <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-green-600 font-bold">✓</span>
              <span>Tokens will automatically refresh every 60 days (no manual steps needed!)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-green-600 font-bold">✓</span>
              <span>You can now use the social media posting scripts</span>
            </li>
          </ul>
        </div>

        {pageId && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900">
              <strong>Facebook Page ID:</strong> {pageId}
            </p>
            {instagramId && (
              <p className="text-sm text-blue-900 mt-2">
                <strong>Instagram Business Account ID:</strong> {instagramId}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <button
            onClick={() => {
              // Test the setup by running a post
              window.location.href = '/api/test-social-media';
            }}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Test Social Media Post
          </button>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-900">
            <strong>Important:</strong> Restart your application/server to load the new environment variables.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SetupSuccessPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
