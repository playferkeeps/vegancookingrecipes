import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPrismaClient } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getBlogPost(slug: string) {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      console.error('Prisma client not available');
      return null;
    }

    const post = await prisma.blogPost.findUnique({
      where: {
        slug,
        published: true,
      },
      include: {
        images: {
          orderBy: { orderIndex: 'asc' },
        },
      },
    });

    return post;
  } catch (error: any) {
    console.error('Error fetching blog post:', error?.message || error);
    if (error?.stack) {
      console.error('Stack trace:', error.stack);
    }
    return null;
  }
}

async function getOtherBlogPosts(currentSlug: string, limit: number = 3) {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      return [];
    }

    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
        slug: {
          not: currentSlug,
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        featuredImage: true,
        datePublished: true,
        author: true,
      },
      orderBy: {
        datePublished: 'desc',
      },
      take: limit,
    });

    return posts;
  } catch (error: any) {
    console.error('Error fetching other blog posts:', error?.message || error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords?.split(',').map((k) => k.trim()),
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.ogImage ? [{ url: post.ogImage }] : [],
      type: 'article',
      publishedTime: post.datePublished?.toISOString(),
      modifiedTime: post.dateModified?.toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.ogImage ? [post.ogImage] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get other blog posts for engagement
  const otherPosts = await getOtherBlogPosts(post.slug, 3);
  
  // Clean up HTML content and ensure proper spacing between elements
  const cleanContent = post.content
    .trim()
    // Add spacing between paragraphs and headings
    .replace(/<\/p>\s*<p>/g, '</p>\n<p>') // Add newline between paragraphs
    .replace(/<\/h([1-6])>\s*<p>/g, '</h$1>\n<p>') // Add newline after headings
    .replace(/<\/p>\s*<h([1-6])>/g, '</p>\n<h$1>') // Add newline before headings
    .replace(/<\/h([1-6])>\s*<h([1-6])>/g, '</h$1>\n<h$2>') // Add newline between headings
    // Clean up excessive whitespace
    .replace(/\n\s+/g, '\n') // Remove leading whitespace from lines
    .replace(/\n{3,}/g, '\n\n') // Replace 3+ newlines with 2
    .replace(/>\s+</g, '><'); // Remove whitespace between tags (but keep our newlines)

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>By {post.author}</span>
              {post.datePublished && (
                <time dateTime={post.datePublished.toISOString()}>
                  {new Date(post.datePublished).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
            </div>
            {post.featuredImage && (
              <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            )}
          </header>

          {/* Excerpt */}
          {post.excerpt && (
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded">
              <p className="text-lg text-gray-700 italic">{post.excerpt}</p>
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold 
              prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:font-bold prose-h2:leading-tight
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-bold prose-h3:leading-tight
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base prose-p:mt-0
              prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:text-gray-700 prose-ul:my-6 prose-ul:space-y-2
              prose-ol:text-gray-700 prose-ol:my-6 prose-ol:space-y-2
              prose-li:text-gray-700 prose-li:my-2 prose-li:leading-relaxed
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
              [&>p]:mb-6 [&>h2]:mt-10 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />

          {/* Additional Images */}
          {post.images && post.images.length > 0 && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {post.images.map((image) => (
                <div key={image.id} className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.alt || post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-sm">
                      {image.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Related Recipes */}
          {post.relatedRecipeIds && post.relatedRecipeIds.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Recipe</h2>
              <div className="flex flex-wrap gap-4">
                {post.relatedRecipeIds.map((recipeSlug) => (
                  <Link
                    key={recipeSlug}
                    href={`/recipes/${recipeSlug}`}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    View Recipe →
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other Blog Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Blog Posts</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherPosts.map((otherPost) => (
                  <Link
                    key={`other-${otherPost.id}-${otherPost.slug}`}
                    href={`/blog/${otherPost.slug}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {otherPost.featuredImage && (
                      <div className="relative w-full h-48">
                        <Image
                          src={otherPost.featuredImage}
                          alt={otherPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                        {otherPost.title}
                      </h3>
                      {otherPost.excerpt && (
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {otherPost.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>By {otherPost.author}</span>
                        {otherPost.datePublished && (
                          <time dateTime={otherPost.datePublished.toISOString()}>
                            {new Date(otherPost.datePublished).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </time>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

