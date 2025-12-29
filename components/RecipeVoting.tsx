'use client';

import { useState, useEffect } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

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

  // Load votes from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`votes-${recipeId}`);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setVoteData(parsed);
        } catch (e) {
          console.error('Error parsing votes:', e);
        }
      }
    }
  }, [recipeId]);

  const handleVote = async (voteType: 'up' | 'down') => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const newVoteData: VoteData = { ...voteData };

    // If clicking the same vote, remove it
    if (newVoteData.userVote === voteType) {
      if (voteType === 'up') {
        newVoteData.upVotes = Math.max(0, newVoteData.upVotes - 1);
      } else {
        newVoteData.downVotes = Math.max(0, newVoteData.downVotes - 1);
      }
      newVoteData.userVote = null;
    } else {
      // If switching from one vote to another
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
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(`votes-${recipeId}`, JSON.stringify(newVoteData));
    }

    setIsSubmitting(false);
  };

  const totalVotes = voteData.upVotes + voteData.downVotes;
  const rating = totalVotes > 0 
    ? ((voteData.upVotes / totalVotes) * 100).toFixed(0)
    : 0;

  return (
    <section className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200" aria-label="Recipe rating">
      <h2 className="text-2xl font-bold mb-4">Rate this Recipe</h2>
      <p className="text-gray-600 mb-4">
        Help others discover great recipes! Did you enjoy this recipe?
      </p>
      
      <div className="flex items-center gap-6 mb-4">
        <button
          onClick={() => handleVote('up')}
          disabled={isSubmitting}
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
          onClick={() => handleVote('down')}
          disabled={isSubmitting}
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
              aria-valuenow={parseInt(rating)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${rating}% of users found this recipe helpful`}
            />
          </div>
        </div>
      )}
    </section>
  );
}

