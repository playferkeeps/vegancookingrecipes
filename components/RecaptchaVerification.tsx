'use client';

import { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { isRecaptchaVerified, saveRecaptchaVerification } from '@/lib/recaptcha';

interface RecaptchaVerificationProps {
  onVerify: (token: string) => void | Promise<void>;
  onError?: (error: Error) => void;
  children: (props: {
    isVerified: boolean;
    isVerifying: boolean;
    verify: () => Promise<void>;
  }) => React.ReactNode;
}

export default function RecaptchaVerification({
  onVerify,
  onError,
  children,
}: RecaptchaVerificationProps) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    // Check if already verified
    setIsVerified(isRecaptchaVerified());
  }, []);

  const verify = async () => {
    if (!executeRecaptcha) {
      const error = new Error('reCAPTCHA not loaded. Please check your NEXT_PUBLIC_RECAPTCHA_SITE_KEY environment variable.');
      console.error(error);
      onError?.(error);
      return;
    }

    setIsVerifying(true);

    try {
      const token = await executeRecaptcha('submit');
      
      if (!token) {
        throw new Error('reCAPTCHA verification failed - no token received');
      }
      
      // Save verification to localStorage (expires in 24 hours)
      saveRecaptchaVerification();
      setIsVerified(true);
      
      // Call the onVerify callback with the token
      await onVerify(token);
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      onError?.(error as Error);
      setIsVerifying(false);
    } finally {
      setIsVerifying(false);
    }
  };

  return <>{children({ isVerified, isVerifying, verify })}</>;
}

