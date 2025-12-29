'use client';

import { useState, useEffect, FormEvent } from 'react';

interface Comment {
  id: string;
  name: string;
  email: string;
  comment: string;
  date: string;
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

  // In a real app, this would fetch from an API
  // For now, we'll use localStorage to persist comments
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(`comments-${recipeId}`);
      if (stored) {
        try {
          setComments(JSON.parse(stored));
        } catch (e) {
          console.error('Error parsing comments:', e);
        }
      }
    }
  }, [recipeId]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
      date: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments-${recipeId}`, JSON.stringify(updatedComments));

    setFormData({ name: '', email: '', comment: '' });
    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="mt-8 sm:mt-12" id="comments" aria-labelledby="comments-heading">
      <h2 id="comments-heading" className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-1 sm:px-0">
        Comments ({comments.length})
      </h2>

      <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 bg-gray-50 p-4 sm:p-6 rounded-lg">
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
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-sm sm:text-base min-h-[44px]"
          >
            {isSubmitting ? 'Submitting...' : 'Post Comment'}
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
                <time dateTime={comment.date} className="text-xs sm:text-sm text-gray-500">
                  {formatDate(comment.date)}
                </time>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap text-sm sm:text-base leading-relaxed">{comment.comment}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

