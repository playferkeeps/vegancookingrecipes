import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPrismaClient } from '@/lib/prisma';

export const metadata: Metadata = {
  title: 'Vegan Cooking Blog | Recipes, Tips & Inspiration',
  description: 'Discover delicious vegan recipes, cooking tips, and plant-based inspiration from Noah\'s kitchen. Learn about vegan cooking techniques, ingredient substitutions, and more.',
  openGraph: {
    title: 'Vegan Cooking Blog | Recipes, Tips & Inspiration',
    description: 'Discover delicious vegan recipes, cooking tips, and plant-based inspiration from Noah\'s kitchen.',
    type: 'website',
  },
};

export const dynamic = 'force-dynamic';

async function getBlogPosts() {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      console.error('Prisma client not available');
      return [];
    }

    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      include: {
        images: {
          orderBy: { orderIndex: 'asc' },
          take: 1,
        },
      },
      orderBy: {
        datePublished: 'desc',
      },
      take: 20,
    });

    return posts;
  } catch (error: any) {
    console.error('Error fetching blog posts:', error?.message || error);
    if (error?.stack) {
      console.error('Stack trace:', error.stack);
    }
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Vegan Cooking Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover delicious vegan recipes, cooking tips, and plant-based inspiration from my kitchen.
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:gap-12">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {post.featuredImage && (
                      <div className="relative w-full h-64 sm:h-80">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-6 sm:p-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
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
                        <span className="text-green-600 font-medium hover:underline">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

