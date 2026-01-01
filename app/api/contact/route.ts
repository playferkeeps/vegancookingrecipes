import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact form API endpoint
 * Sends contact form submissions via email
 * 
 * Setup:
 * 1. Add to .env.local: CONTACT_EMAIL=your-email@example.com
 * 2. Configure email service (SendGrid, Resend, etc.) or use a simple SMTP solution
 * 
 * For production, consider using:
 * - Resend (https://resend.com) - Simple API, great for Next.js
 * - SendGrid (https://sendgrid.com) - Robust email service
 * - AWS SES (https://aws.amazon.com/ses/) - Cost-effective for high volume
 */

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken?: string;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY not configured, skipping verification');
    return true; // Allow in development
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

async function sendEmail(data: ContactFormData): Promise<void> {
  const contactEmail = process.env.CONTACT_EMAIL;
  
  if (!contactEmail) {
    console.warn('CONTACT_EMAIL not configured. Contact form submission logged but not sent:');
    console.log(JSON.stringify(data, null, 2));
    throw new Error('Email service not configured');
  }

  // For now, we'll log the email. In production, integrate with an email service
  // Example integrations below:
  
  // Option 1: Using Resend (recommended for Next.js)
  // const RESEND_API_KEY = process.env.RESEND_API_KEY;
  // if (RESEND_API_KEY) {
  //   const resend = new Resend(RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'noreply@vegancooking.recipes',
  //     to: contactEmail,
  //     subject: `Contact Form: ${data.subject}`,
  //     html: `
  //       <h2>New Contact Form Submission</h2>
  //       <p><strong>Name:</strong> ${data.name}</p>
  //       <p><strong>Email:</strong> ${data.email}</p>
  //       <p><strong>Subject:</strong> ${data.subject}</p>
  //       <p><strong>Message:</strong></p>
  //       <p>${data.message.replace(/\n/g, '<br>')}</p>
  //     `,
  //   });
  //   return;
  // }

  // Option 2: Using SendGrid
  // const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  // if (SENDGRID_API_KEY) {
  //   await fetch('https://api.sendgrid.com/v3/mail/send', {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Bearer ${SENDGRID_API_KEY}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       personalizations: [{ to: [{ email: contactEmail }] }],
  //       from: { email: 'noreply@vegancooking.recipes' },
  //       subject: `Contact Form: ${data.subject}`,
  //       content: [{
  //         type: 'text/html',
  //         value: `
  //           <h2>New Contact Form Submission</h2>
  //           <p><strong>Name:</strong> ${data.name}</p>
  //           <p><strong>Email:</strong> ${data.email}</p>
  //           <p><strong>Subject:</strong> ${data.subject}</p>
  //           <p><strong>Message:</strong></p>
  //           <p>${data.message.replace(/\n/g, '<br>')}</p>
  //         `,
  //       }],
  //     }),
  //   });
  //   return;
  // }

  // For now, log the email (development mode)
  console.log('=== CONTACT FORM SUBMISSION ===');
  console.log(`To: ${contactEmail}`);
  console.log(`From: ${data.email} (${data.name})`);
  console.log(`Subject: ${data.subject}`);
  console.log(`Message:\n${data.message}`);
  console.log('==============================');
  
  // In production, you should integrate with an email service
  // For now, we'll throw an error to indicate email service is needed
  throw new Error('Email service not configured. Please set up Resend, SendGrid, or another email service.');
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message, recaptchaToken } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA if token is provided
    if (recaptchaToken) {
      const isValid = await verifyRecaptcha(recaptchaToken);
      if (!isValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // Send email
    try {
      await sendEmail({ name, email, subject, message });
    } catch (error: any) {
      // If email service is not configured, still return success in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('Email not sent (development mode):', error.message);
        return NextResponse.json(
          {
            success: true,
            message: 'Message received! (Email service not configured - logged only)',
          },
          { status: 200 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
