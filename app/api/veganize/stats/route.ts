import { NextResponse } from 'next/server';
import { getPrismaClient } from '@/lib/prisma';

/**
 * GET /api/veganize/stats
 * Returns statistics about veganized recipes
 */
export async function GET() {
  try {
    const prisma = getPrismaClient();
    if (!prisma) {
      return NextResponse.json(
        { error: 'Database not available' },
        { status: 500 }
      );
    }

    // Count recipes that have an originalUrl (veganized recipes)
    const veganizedCount = await prisma.recipe.count({
      where: {
        originalUrl: {
          not: null,
        },
      },
    });

    return NextResponse.json({
      veganizedCount,
    });
  } catch (error: any) {
    console.error('Error fetching veganize stats:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
