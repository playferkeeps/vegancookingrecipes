'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabaseClient } from '@/lib/supabase-client';
import { getCurrentUser, isAdmin } from '@/lib/auth';

/**
 * Callback page for handling magic link authentication
 * Supabase redirects here after user clicks the magic link in their email
 */
export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing authentication...');

  useEffect(() => {
    const handleAuthCallback = async () => {
      if (!supabaseClient) {
        setStatus('error');
        setMessage('Supabase not configured');
        return;
      }

      try {
        // Check for error in URL hash or query params
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const queryParams = new URLSearchParams(window.location.search);
        const error = hashParams.get('error') || queryParams.get('error');
        const errorDescription = hashParams.get('error_description') || queryParams.get('error_description');

        if (error) {
          setStatus('error');
          setMessage(errorDescription || error || 'Authentication failed');
          setTimeout(() => {
            router.push('/admin/login');
          }, 3000);
          return;
        }

        // Supabase with detectSessionInUrl: true automatically processes the hash fragment
        // Wait a moment for it to process, then check the session
        await new Promise(resolve => setTimeout(resolve, 500));

        // Get the session (Supabase should have processed the hash by now)
        const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();

        if (sessionError || !session) {
          setStatus('error');
          setMessage('Failed to create session. Please try again.');
          setTimeout(() => {
            router.push('/admin/login');
          }, 3000);
          return;
        }

        // Verify user is admin
        const user = await getCurrentUser();
        if (!user) {
          setStatus('error');
          setMessage('User not found');
          setTimeout(() => {
            router.push('/admin/login');
          }, 3000);
          return;
        }

        const admin = await isAdmin();
        if (!admin) {
          setStatus('error');
          setMessage('Access denied. This account is not authorized to access the admin area.');
          await supabaseClient.auth.signOut();
          setTimeout(() => {
            router.push('/admin/login');
          }, 3000);
          return;
        }

        // Success! Redirect to admin dashboard
        setStatus('success');
        setMessage('Authentication successful! Redirecting...');
        router.push('/admin');
      } catch (err: any) {
        console.error('Auth callback error:', err);
        setStatus('error');
        setMessage(err.message || 'An error occurred during authentication');
        setTimeout(() => {
          router.push('/admin/login');
        }, 3000);
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-4 text-center">
        {status === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="text-gray-600">{message}</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="text-green-600 text-5xl mb-4">✓</div>
            <p className="text-gray-600">{message}</p>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="text-red-600 text-5xl mb-4">✗</div>
            <p className="text-red-600 mb-4">{message}</p>
            <p className="text-sm text-gray-500">Redirecting to login page...</p>
          </>
        )}
      </div>
    </div>
  );
}

