import { NextResponse } from 'next/server';
import { postRecipeToFacebook } from '@/scripts/post-recipe-to-facebook';
import { postRecipeToInstagram } from '@/scripts/post-recipe-to-instagram';

/**
 * Test endpoint to verify social media setup
 */
export async function GET() {
  try {
    // Check if tokens are configured
    const hasFacebookToken = !!process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
    const hasInstagramToken = !!process.env.INSTAGRAM_ACCESS_TOKEN;
    const hasAppId = !!process.env.FACEBOOK_APP_ID;
    const hasPageId = !!process.env.FACEBOOK_PAGE_ID;
    const hasInstagramId = !!process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

    const status = {
      configured: hasFacebookToken && hasInstagramToken && hasAppId && hasPageId,
      facebook: {
        token: hasFacebookToken,
        pageId: hasPageId,
      },
      instagram: {
        token: hasInstagramToken,
        businessAccountId: hasInstagramId,
      },
      app: {
        id: hasAppId,
      },
    };

    if (!status.configured) {
      return NextResponse.json({
        success: false,
        message: 'Social media not fully configured',
        status,
        nextSteps: [
          'Visit /setup-social-media to complete automated setup',
          'Or manually configure environment variables',
        ],
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Social media is configured! You can now post recipes.',
      status,
      testCommands: [
        'npm run post-recipe-to-facebook',
        'npm run post-recipe-to-instagram',
        'npm run post-to-social-media',
      ],
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
