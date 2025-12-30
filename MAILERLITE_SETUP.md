# MailerLite Integration Setup Guide

This site uses MailerLite for email newsletter management. MailerLite offers a generous free tier:

- **1,000 subscribers** free
- **12,000 emails per month** free
- No credit card required

## Setup Instructions

### Step 1: Create a MailerLite Account

1. Go to [https://www.mailerlite.com](https://www.mailerlite.com)
2. Click "Sign Up Free"
3. Complete the registration (no credit card required)

### Step 2: Get Your API Token

1. Log in to your MailerLite dashboard
2. Go to **Integrations** → **Developers** → **API**
3. Click **"Generate new token"**
4. Copy the API token (you'll only see it once, so save it!)

### Step 3: Create a Subscriber Group (Recommended)

1. In MailerLite dashboard, go to **Subscribers** → **Groups**
2. Click **"Create group"**
3. Name it something like "Website Subscribers" or "Recipe Guide Signups"
4. Copy the **Group ID** from the group settings or URL

### Step 4: Configure Environment Variables

Add these to your `.env.local` file:

```bash
# MailerLite API Configuration
MAILERLITE_API_TOKEN=your_api_token_here
MAILERLITE_GROUP_ID=your_group_id_here
```

**For Vercel/Production:**

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add both variables:
   - `MAILERLITE_API_TOKEN`
   - `MAILERLITE_GROUP_ID`

### Step 5: Set Up Automated Email (Optional)

To automatically send the "15-Minute Meals" PDF when someone subscribes:

1. In MailerLite, go to **Automation** → **Create automation**
2. Set trigger: **"Subscriber added to group"** → Select your group
3. Add action: **"Send email"**
4. Create the email with:
   - Subject: "Your Free Recipe Guide is Here! 🎁"
   - Attach the PDF or include download link
5. Activate the automation

### Alternative: Using Forms Instead of Groups

If you prefer to use MailerLite forms:

1. Go to **Forms** → **Create form**
2. Design your form (or use the default)
3. Get the **Form ID** from the form settings
4. Use `MAILERLITE_FORM_ID` instead of `MAILERLITE_GROUP_ID` in your `.env.local`

## Testing

1. Fill out the email signup form on your site
2. Check your MailerLite dashboard → **Subscribers** to see if the new subscriber appears
3. If automation is set up, check that the welcome email was sent

## Troubleshooting

### "API token not configured" warning

- Make sure `MAILERLITE_API_TOKEN` is set in your `.env.local` file
- Restart your dev server after adding environment variables

### "Group ID not configured" warning

- Make sure `MAILERLITE_GROUP_ID` is set in your `.env.local` file
- Verify the group ID is correct in your MailerLite dashboard

### Subscriptions not appearing in MailerLite

- Check the browser console and server logs for errors
- Verify your API token is valid (regenerate if needed)
- Make sure the group ID is correct

## MailerLite Free Tier Limits

- ✅ **1,000 subscribers** (plenty for getting started!)
- ✅ **12,000 emails per month** (1,000 subscribers × 12 emails/month)
- ✅ Email automation
- ✅ Landing pages
- ✅ Forms and popups
- ⚠️ MailerLite logo in email footer (can be removed with paid plan)

## Upgrading

When you exceed the free tier:

- **Creator Plan**: $9/month for 1,000-2,500 subscribers
- **Growing Business Plan**: $18/month for 2,500-5,000 subscribers
- See [MailerLite Pricing](https://www.mailerlite.com/pricing) for details
