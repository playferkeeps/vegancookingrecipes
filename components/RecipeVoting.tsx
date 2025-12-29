'use client';

import { useState, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import RecaptchaVerification from './RecaptchaVerification';
import { isRecaptchaVerified } from '@/lib/recaptcha';
import { getVoteStats, getUserVote, submitVote } from '@/lib/supabase-helpers';

interface RecipeVotingProps {
  recipeId: string;
}

interface VoteData {
  userVote: 'up' | 'down' | null;
  upVotes: number;
  downVotes: number;
}

export default function RecipeVoting({ recipeId }: RecipeVotingProps) {
  const [voteData, setVoteData] = useState<VoteData>({
    userVote: null,
    upVotes: 0,
    downVotes: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [needsRecaptcha, setNeedsRecaptcha] = useState(false);

  // Load votes from Supabase (or localStorage fallback)
  useEffect(() => {
    const loadVotes = async () => {
      setIsLoading(true);
      
      try {
        // Load vote stats and user's vote in parallel
        const [stats, userVote] = await Promise.all([
          getVoteStats(recipeId),
          getUserVote(recipeId),
        ]);

        setVoteData({
          userVote: userVote,
          upVotes: stats.up_votes,
          downVotes: stats.down_votes,
        });
      } catch (error) {
        console.error('Error loading votes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      loadVotes();
      
      // Check if reCAPTCHA verification is needed
      setNeedsRecaptcha(!isRecaptchaVerified());
    }
  }, [recipeId]);

  const handleVote = async (voteType: 'up' | 'down', recaptchaToken?: string) => {
    if (isSubmitting) return;

    // If reCAPTCHA is needed but token is not provided, trigger verification
    if (needsRecaptcha && !recaptchaToken) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Optimistic update
      const newVoteData: VoteData = { ...voteData };
      const isRemovingVote = newVoteData.userVote === voteType;

      if (isRemovingVote) {
        // Removing vote
        if (voteType === 'up') {
          newVoteData.upVotes = Math.max(0, newVoteData.upVotes - 1);
        } else {
          newVoteData.downVotes = Math.max(0, newVoteData.downVotes - 1);
        }
        newVoteData.userVote = null;
      } else {
        // Changing or adding vote
        if (newVoteData.userVote === 'up' && voteType === 'down') {
          newVoteData.upVotes = Math.max(0, newVoteData.upVotes - 1);
          newVoteData.downVotes += 1;
        } else if (newVoteData.userVote === 'down' && voteType === 'up') {
          newVoteData.downVotes = Math.max(0, newVoteData.downVotes - 1);
          newVoteData.upVotes += 1;
        } else {
          // New vote
          if (voteType === 'up') {
            newVoteData.upVotes += 1;
          } else {
            newVoteData.downVotes += 1;
          }
        }
        newVoteData.userVote = voteType;
      }

      setVoteData(newVoteData);

      // Submit to Supabase (or localStorage fallback)
      // Note: submitVote will automatically delete if the vote type matches existing vote
      const result = await submitVote(recipeId, voteType);
      
      if (!result.success) {
        console.error('Error submitting vote:', result.error);
        // Revert optimistic update on error
        const [stats, userVote] = await Promise.all([
          getVoteStats(recipeId),
          getUserVote(recipeId),
        ]);
        setVoteData({
          userVote: userVote,
          upVotes: stats.up_votes,
          downVotes: stats.down_votes,
        });
      } else {
        // Refresh stats from server to ensure accuracy
        const stats = await getVoteStats(recipeId);
        setVoteData(prev => ({
          ...prev,
          upVotes: stats.up_votes,
          downVotes: stats.down_votes,
        }));
      }

      // Mark reCAPTCHA as no longer needed after successful vote
      if (needsRecaptcha && recaptchaToken) {
        setNeedsRecaptcha(false);
      }
    } catch (error) {
      console.error('Error handling vote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [pendingVote, setPendingVote] = useState<'up' | 'down' | null>(null);

  const handleRecaptchaVerify = async (token: string) => {
    // reCAPTCHA verified - token is saved automatically by RecaptchaVerification
    // If there's a pending vote, execute it now
    if (pendingVote) {
      await handleVote(pendingVote, token);
      setPendingVote(null);
    }
  };

  const totalVotes = voteData.upVotes + voteData.downVotes;
  const rating = totalVotes > 0 
    ? Math.round((voteData.upVotes / totalVotes) * 100)
    : 0;

  if (isLoading) {
    return (
      <section className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200" aria-label="Recipe rating">
        <h2 className="text-2xl font-bold mb-4">Rate this Recipe</h2>
        <p className="text-gray-600">Loading votes...</p>
      </section>
    );
  }

  return (
    <RecaptchaVerification
      onVerify={handleRecaptchaVerify}
      onError={(error) => console.error('reCAPTCHA error:', error)}
    >
      {({ isVerified, isVerifying, verify }) => (
        <section className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200" aria-label="Recipe rating">
          <h2 className="text-2xl font-bold mb-4">Rate this Recipe</h2>
          <p className="text-gray-600 mb-4">
            Help others discover great recipes! Did you enjoy this recipe?
          </p>
          
          {needsRecaptcha && !isVerified && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 mb-3">
                Please verify you're human before voting.
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
          
          <div className="flex items-center gap-6 mb-4">
            <button
              onClick={async () => {
                if (needsRecaptcha && !isVerified) {
                  setPendingVote('up');
                  await verify();
                } else {
                  await handleVote('up');
                }
              }}
              disabled={isSubmitting || isVerifying}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              voteData.userVote === 'up'
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-white text-gray-700 hover:bg-green-50 border-2 border-gray-300 hover:border-green-500'
            }
          `}
          aria-label={`Thumbs up. Currently ${voteData.upVotes} up votes`}
          aria-pressed={voteData.userVote === 'up'}
        >
          <FaThumbsUp 
            className={`text-xl ${voteData.userVote === 'up' ? 'text-white' : 'text-green-600'}`}
            aria-hidden="true"
          />
          <span>Helpful</span>
          <span className="ml-1 font-bold">({voteData.upVotes})</span>
        </button>

            <button
              onClick={async () => {
                if (needsRecaptcha && !isVerified) {
                  setPendingVote('down');
                  await verify();
                } else {
                  await handleVote('down');
                }
              }}
              disabled={isSubmitting || isVerifying}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              voteData.userVote === 'down'
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-white text-gray-700 hover:bg-red-50 border-2 border-gray-300 hover:border-red-500'
            }
          `}
          aria-label={`Thumbs down. Currently ${voteData.downVotes} down votes`}
          aria-pressed={voteData.userVote === 'down'}
        >
          <FaThumbsDown 
            className={`text-xl ${voteData.userVote === 'down' ? 'text-white' : 'text-red-600'}`}
            aria-hidden="true"
          />
          <span>Not Helpful</span>
          <span className="ml-1 font-bold">({voteData.downVotes})</span>
        </button>
      </div>

      {totalVotes > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {totalVotes} {totalVotes === 1 ? 'vote' : 'votes'}
            </span>
            <span className="text-sm font-semibold text-gray-700">
              {rating}% found this helpful
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${rating}%` }}
              role="progressbar"
              aria-valuenow={rating}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${rating}% of users found this recipe helpful`}
            />
          </div>
        </div>
      )}
        </section>
      )}
    </RecaptchaVerification>
  );
}

