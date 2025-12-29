'use client';

import { useState, useEffect, FormEvent } from 'react';
import RecaptchaVerification from './RecaptchaVerification';
import { isRecaptchaVerified } from '@/lib/recaptcha';
import { getComments, submitComment } from '@/lib/supabase-helpers';
import { Comment as SupabaseComment } from '@/lib/supabase-types';

interface Comment {
  id: string;
  name: string;
  email: string;
  comment: string;
  created_at: string;
  date?: string; // For backward compatibility
}

interface CommentsProps {
  recipeId: string;
}

export default function Comments({ recipeId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [needsRecaptcha, setNeedsRecaptcha] = useState(false);

  // Load comments from Supabase (or localStorage fallback)
  useEffect(() => {
    const loadComments = async () => {
      setIsLoading(true);
      
      try {
        const loadedComments = await getComments(recipeId);
        // Map to include date field for backward compatibility
        setComments(loadedComments.map((c: SupabaseComment): Comment => ({
          ...c,
          date: c.created_at,
        })));
      } catch (error) {
        console.error('Error loading comments:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      loadComments();
      
      // Check if reCAPTCHA verification is needed
      setNeedsRecaptcha(!isRecaptchaVerified());
    }
  }, [recipeId]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, recaptchaToken?: string) => {
    e.preventDefault();
    
    // If reCAPTCHA is needed but token is not provided, don't submit
    if (needsRecaptcha && !recaptchaToken) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Submit to Supabase (or localStorage fallback)
      const result = await submitComment(
        recipeId,
        formData.name,
        formData.email,
        formData.comment
      );

      if (result.success && result.comment) {
        // Add new comment to the list
        const newComment: Comment = {
          ...result.comment,
          date: result.comment.created_at, // For backward compatibility
        };
        setComments(prev => [newComment, ...prev]);
        setFormData({ name: '', email: '', comment: '' });

        // Mark reCAPTCHA as no longer needed after successful comment
        if (needsRecaptcha && recaptchaToken) {
          setNeedsRecaptcha(false);
        }
      } else {
        console.error('Error submitting comment:', result.error);
        alert('Failed to submit comment. Please try again.');
      }
    } catch (error) {
      console.error('Error handling comment submission:', error);
      alert('Failed to submit comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const [pendingSubmit, setPendingSubmit] = useState<FormEvent<HTMLFormElement> | null>(null);

  const handleRecaptchaVerify = async (token: string) => {
    // reCAPTCHA verified - token is saved automatically by RecaptchaVerification
    // If there's a pending form submission, execute it now
    if (pendingSubmit) {
      await handleSubmit(pendingSubmit, token);
      setPendingSubmit(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <section className="mt-8 sm:mt-12" id="comments" aria-labelledby="comments-heading">
        <h2 id="comments-heading" className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-1 sm:px-0">
          Comments
        </h2>
        <p className="text-gray-600">Loading comments...</p>
      </section>
    );
  }

  return (
    <RecaptchaVerification
      onVerify={handleRecaptchaVerify}
      onError={(error) => console.error('reCAPTCHA error:', error)}
    >
      {({ isVerified, isVerifying, verify }) => (
        <section className="mt-8 sm:mt-12" id="comments" aria-labelledby="comments-heading">
          <h2 id="comments-heading" className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-1 sm:px-0">
            Comments ({comments.length})
          </h2>

          {needsRecaptcha && !isVerified && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 mb-3">
                Please verify you're human before posting a comment.
              </p>
              <button
                onClick={verify}
                disabled={isVerifying}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVerifying ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          )}

          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              if (needsRecaptcha && !isVerified) {
                setPendingSubmit(e);
                await verify();
              } else {
                await handleSubmit(e);
              }
            }} 
            className="mb-6 sm:mb-8 bg-gray-50 p-4 sm:p-6 rounded-lg"
          >
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Leave a Comment</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium mb-2">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              required
              rows={4}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
            <button
              type="submit"
              disabled={isSubmitting || isVerifying}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px]"
            >
              {isSubmitting ? 'Submitting...' : isVerifying ? 'Verifying...' : 'Post Comment'}
            </button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <article key={comment.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                <h4 className="font-semibold text-base sm:text-lg">{comment.name}</h4>
                <time dateTime={comment.created_at || comment.date} className="text-xs sm:text-sm text-gray-500">
                  {formatDate(comment.created_at || comment.date || '')}
                </time>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">{comment.comment}</p>
            </article>
          ))
          )}
        </div>
        </section>
      )}
    </RecaptchaVerification>
  );
}

