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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

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
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

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
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
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

