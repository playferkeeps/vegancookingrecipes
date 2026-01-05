'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SetupStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'error';
  error?: string;
}

function SetupSocialMediaPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [steps, setSteps] = useState<SetupStep[]>([
    {
      id: '1',
      title: 'Connect Facebook App',
      description: 'Authorize access to your Facebook Page and Instagram Business Account',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Get Long-Lived Token',
      description: 'Automatically exchange short-lived token for long-lived token',
      status: 'pending',
    },
    {
      id: '3',
      title: 'Get Page Access Token',
      description: 'Retrieve Page Access Token for Facebook and Instagram',
      status: 'pending',
    },
    {
      id: '4',
      title: 'Get Instagram Business Account ID',
      description: 'Automatically discover your Instagram Business Account ID',
      status: 'pending',
    },
    {
      id: '5',
      title: 'Save Configuration',
      description: 'Save all tokens and IDs to environment file',
      status: 'pending',
    },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [appId, setAppId] = useState('');
  const [appSecret, setAppSecret] = useState('');
  const [pageId, setPageId] = useState('');

  // Check for authorization token
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = searchParams.get('token');
      // Use NEXT_PUBLIC_ prefix so it's available on client
      const requiredToken = process.env.NEXT_PUBLIC_SETUP_TOKEN || '';
      
      // In production, always require a token
      if (process.env.NODE_ENV === 'production') {
        if (!requiredToken) {
          setIsAuthorized(false);
          setError('Setup page requires a token in production. Contact administrator.');
          return;
        }
        
        if (token !== requiredToken) {
          setIsAuthorized(false);
          setError('Invalid or missing access token. This page is protected.');
          return;
        }
      } else {
        // In development, token is optional but recommended
        if (requiredToken && token !== requiredToken) {
          setIsAuthorized(false);
          setError('Invalid or missing access token. Add ?token=YOUR_TOKEN to the URL.');
          return;
        }
      }
      
      setIsAuthorized(true);
      
      // Check for OAuth errors in URL
      const errorParam = searchParams.get('error');
      const errorReason = searchParams.get('error_reason');
      
      if (errorParam) {
        setError(`OAuth Error: ${errorParam}${errorReason ? ` (${errorReason})` : ''}`);
        updateStep('1', { status: 'error', error: errorParam });
      }
    }
  }, [searchParams]);

  const updateStep = (id: string, updates: Partial<SetupStep>) => {
    setSteps(prev => prev.map(step => 
      step.id === id ? { ...step, ...updates } : step
    ));
  };

  const handleStartSetup = async () => {
    if (!appId || !appSecret) {
      alert('Please enter your Facebook App ID and App Secret');
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Generate OAuth URL and redirect
      updateStep('1', { status: 'in-progress' });
      
      // Generate OAuth URL
      const redirectUri = `${window.location.origin}/api/oauth/facebook/callback`;
      const scopes = [
        'pages_show_list',
        'pages_read_engagement',
        'pages_manage_posts',
        'pages_read_user_content',
        'instagram_basic',
        'instagram_content_publish',
      ].join(',');

      // Include setup token in state to preserve it through OAuth flow
      const token = searchParams.get('token');
      const stateData: { appId: string; appSecret: string; pageId?: string; setupToken?: string } = { appId, appSecret };
      if (pageId) {
        stateData.pageId = pageId;
      }
      if (token) {
        stateData.setupToken = token;
      }
      
      const oauthUrl = `https://www.facebook.com/v18.0/dialog/oauth?` +
        `client_id=${appId}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${scopes}&` +
        `response_type=code&` +
        `state=${encodeURIComponent(JSON.stringify(stateData))}`;

      // Store app credentials temporarily in sessionStorage
      sessionStorage.setItem('fb_app_id', appId);
      sessionStorage.setItem('fb_app_secret', appSecret);
      if (pageId) {
        sessionStorage.setItem('fb_page_id', pageId);
      }

      // Redirect to Facebook OAuth
      window.location.href = oauthUrl;
    } catch (error: any) {
      updateStep('1', { status: 'error', error: error.message });
      setIsProcessing(false);
    }
  };

  // Show access denied if not authorized
  if (!isAuthorized) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-lg text-gray-700 mb-4">
            This page is protected and requires a valid access token.
          </p>
          {error && (
            <p className="text-red-600 mb-4">{error}</p>
          )}
          <p className="text-sm text-gray-600">
            If you need to access this page, contact the administrator for the access token.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
      <header className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          🔐 Automated Social Media Setup
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Complete one-time setup to automate Facebook and Instagram posting. After this, everything runs automatically!
        </p>
      </header>

      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-semibold mb-2">Setup Error</p>
          <p className="text-red-700 text-sm">{error}</p>
          <button
            onClick={() => {
              setError(null);
              window.history.replaceState({}, '', window.location.pathname);
            }}
            className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Prerequisites
        </h2>
        <ul className="space-y-3 text-gray-700 mb-6">
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>Facebook App created (get App ID and App Secret from <a href="https://developers.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">developers.facebook.com</a>)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>Facebook Page created and you&apos;re an Admin</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>Instagram Business Account connected to your Facebook Page</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-green-600 font-bold">✓</span>
            <span>Instagram product added to your Facebook App</span>
          </li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-900 mb-3">
            <strong>Note:</strong> This is a one-time setup. After completion, tokens will automatically refresh every 60 days. No manual intervention needed!
          </p>
          <p className="text-sm text-blue-900 mb-2">
            <strong>Before starting:</strong> Add this redirect URI to your Facebook App:
          </p>
          <code className="block p-2 bg-blue-100 rounded text-xs break-all mb-2">
            {typeof window !== 'undefined' ? window.location.origin : 'https://vegancooking.recipes'}/api/oauth/facebook/callback
          </code>
          <p className="text-xs text-blue-800">
            Go to Facebook App → Settings → Basic → Add Platform → Website, then add the redirect URI above in &quot;Valid OAuth Redirect URIs&quot;.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Enter Your App Credentials
        </h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="app-id" className="block text-sm font-medium text-gray-700 mb-2">
              Facebook App ID *
            </label>
            <input
              type="text"
              id="app-id"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              placeholder="1234567890123456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Find this in your Facebook App Settings → Basic
            </p>
          </div>

          <div>
            <label htmlFor="app-secret" className="block text-sm font-medium text-gray-700 mb-2">
              Facebook App Secret *
            </label>
            <input
              type="password"
              id="app-secret"
              value={appSecret}
              onChange={(e) => setAppSecret(e.target.value)}
              placeholder="your_app_secret_here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Find this in your Facebook App Settings → Basic (click &quot;Show&quot; to reveal)
            </p>
          </div>

          <div>
            <label htmlFor="page-id" className="block text-sm font-medium text-gray-700 mb-2">
              Facebook Page ID (Optional)
            </label>
            <input
              type="text"
              id="page-id"
              value={pageId}
              onChange={(e) => setPageId(e.target.value)}
              placeholder="1234567890123456"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              We can auto-discover this, but you can provide it if you know it
            </p>
          </div>
        </div>

        <button
          onClick={handleStartSetup}
          disabled={isProcessing || !appId || !appSecret}
          className="mt-6 w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? 'Processing...' : 'Start Automated Setup'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Setup Steps
        </h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`border-2 rounded-lg p-4 ${
                step.status === 'completed'
                  ? 'border-green-500 bg-green-50'
                  : step.status === 'in-progress'
                  ? 'border-blue-500 bg-blue-50'
                  : step.status === 'error'
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  step.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : step.status === 'in-progress'
                    ? 'bg-blue-500 text-white'
                    : step.status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {step.status === 'completed' ? '✓' : step.status === 'error' ? '✗' : index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {step.error && (
                    <p className="text-sm text-red-600 mt-2">Error: {step.error}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Wrap in Suspense for Next.js 15
export default function SetupSocialMediaPageWrapper() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SetupSocialMediaPage />
    </Suspense>
  );
}
