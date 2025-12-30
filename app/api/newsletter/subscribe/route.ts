import { NextRequest, NextResponse } from 'next/server';

/**
 * Newsletter subscription API endpoint
 * Integrated with MailerLite (free tier: 1,000 subscribers, 12,000 emails/month)
 * 
 * Setup instructions:
 * 1. Sign up for free at https://www.mailerlite.com
 * 2. Go to Integrations > Developers > API
 * 3. Generate an API token
 * 4. Add to .env.local: MAILERLITE_API_TOKEN=your_token_here
 * 5. Get your group ID from MailerLite dashboard (Groups section)
 * 6. Add to .env.local: MAILERLITE_GROUP_ID=your_group_id_here
 * 
 * Alternative: Use form ID instead of group ID
 * - Create a form in MailerLite
 * - Get the form ID from the form URL or API
 * - Add to .env.local: MAILERLITE_FORM_ID=your_form_id_here
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validate input
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const apiToken = process.env.MAILERLITE_API_TOKEN;
    const groupId = process.env.MAILERLITE_GROUP_ID;
    const formId = process.env.MAILERLITE_FORM_ID;

    // Check if MailerLite is configured
    if (!apiToken) {
      console.warn('MailerLite API token not configured. Subscription logged but not sent to MailerLite.');
      console.log('Newsletter subscription (not sent):', { email, name });
      
      // Return success even if not configured (for development)
      return NextResponse.json(
        { 
          success: true,
          message: 'Successfully subscribed! Check your email for your free recipe guide.',
          note: 'Email service not configured - subscription logged only'
        },
        { status: 200 }
      );
    }

    // MailerLite API integration
    // Option 1: Subscribe to a group (recommended)
    if (groupId) {
      const response = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name || '',
          groups: [groupId], // Add subscriber to specific group
          status: 'active',
          // Optional: Add custom fields
          fields: {
            source: 'website',
            lead_magnet: '15-minute-meals-guide',
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific MailerLite errors
        if (response.status === 422 && data.message?.includes('already subscribed')) {
          return NextResponse.json(
            { 
              success: true,
              message: 'You\'re already subscribed! Check your email for your free recipe guide.' 
            },
            { status: 200 }
          );
        }
        
        console.error('MailerLite API error:', data);
        throw new Error(data.message || 'Failed to subscribe to MailerLite');
      }

      return NextResponse.json(
        { 
          success: true,
          message: 'Successfully subscribed! Check your email for your free recipe guide.' 
        },
        { status: 200 }
      );
    }

    // Option 2: Subscribe via form (alternative method)
    if (formId) {
      // Use the form submission endpoint
      const response = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name || '',
          groups: [formId],
          status: 'active',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422 && data.message?.includes('already subscribed')) {
          return NextResponse.json(
            { 
              success: true,
              message: 'You\'re already subscribed! Check your email for your free recipe guide.' 
            },
            { status: 200 }
          );
        }
        
        console.error('MailerLite API error:', data);
        throw new Error(data.message || 'Failed to subscribe to MailerLite');
      }

      return NextResponse.json(
        { 
          success: true,
          message: 'Successfully subscribed! Check your email for your free recipe guide.' 
        },
        { status: 200 }
      );
    }

    // If neither group ID nor form ID is configured
    console.warn('MailerLite group ID or form ID not configured. Please set MAILERLITE_GROUP_ID or MAILERLITE_FORM_ID in .env.local');
    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully subscribed! Check your email for your free recipe guide.',
        note: 'MailerLite group/form ID not configured'
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

