import { NextResponse } from 'next/server';
import { getPrismaClient } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      return NextResponse.json(
        { error: 'Database not available' },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const blogPosts = await prisma.blogPost.findMany({
      where: {
        published: true,
      },
      include: {
        images: {
          orderBy: { orderIndex: 'asc' },
        },
      },
      orderBy: {
        datePublished: 'desc',
      },
      take: limit,
      skip: offset,
    });

    return NextResponse.json({
      posts: blogPosts,
      total: blogPosts.length,
    });
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

