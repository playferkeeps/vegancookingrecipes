'use client';

import { useState } from 'react';

interface EmailSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  showLeadMagnet?: boolean;
}

/**
 * Email signup component with lead magnet
 * Promotes "Noah's 5 Favorite 'Messy Kitchen' 15-Minute Meals - Free PDF"
 */
export default function EmailSignup({ 
  variant = 'default',
  showLeadMagnet = true 
}: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // TODO: Replace with your actual email service API endpoint
      // Examples: Mailchimp, ConvertKit, SendGrid, etc.
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
      setName('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'compact') {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
          Get My Free Recipe Guide! 🎁
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Join my email list and get <strong>Noah&apos;s 5 Favorite &apos;Messy Kitchen&apos; 15-Minute Meals</strong> delivered to your inbox—free!
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? '✓ Subscribed!' : 'Get My Free Guide'}
          </button>
          {status === 'error' && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded-lg p-4 sm:p-6 my-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
              Get My Free Recipe Guide! 🎁
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Join my email list and get <strong>Noah&apos;s 5 Favorite &apos;Messy Kitchen&apos; 15-Minute Meals</strong>—free PDF delivered to your inbox!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:min-w-[250px]"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : status === 'success' ? '✓ Subscribed!' : 'Get Free Guide'}
            </button>
          </form>
        </div>
        {status === 'error' && (
          <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
        )}
      </div>
    );
  }

  // Default variant - full featured
  return (
    <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-50 py-12 sm:py-16 md:py-20 my-12 sm:my-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block bg-green-600 text-white px-4 py-1.5 rounded-full text-sm sm:text-base font-semibold mb-4">
              Free Recipe Guide
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
              Get Noah&apos;s 5 Favorite &apos;Messy Kitchen&apos; 15-Minute Meals
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-2">
              Join my email list and I&apos;ll send you a free PDF with my absolute favorite quick meals—the ones I make when I&apos;m tired, hungry, and need something delicious fast.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              No spam, just real recipes from my kitchen to yours. 🌱✨
            </p>
          </div>

          {status === 'success' ? (
            <div className="bg-green-100 border-2 border-green-600 rounded-lg p-6 sm:p-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                You&apos;re in!
              </h3>
              <p className="text-gray-700">
                Check your email for your free recipe guide. Welcome to the family! 💚
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-base"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-green-600 text-white font-semibold py-3.5 px-8 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
              >
                {status === 'loading' ? 'Subscribing...' : 'Send Me My Free Recipe Guide! 🎁'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-600 mt-4">{errorMessage}</p>
              )}
              <p className="text-xs sm:text-sm text-gray-500 mt-4">
                By subscribing, you agree to receive emails from vegancooking.recipes. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

