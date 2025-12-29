# reCAPTCHA Setup Guide

This site uses Google reCAPTCHA v3 to protect voting and comment submissions from spam and abuse.

## Setup Instructions

### 1. Get Your reCAPTCHA Site Key

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Click "Create" to create a new site
3. Fill in the form:
   - **Label**: vegancooking.recipes
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domain (e.g., `vegancooking.recipes`, `localhost` for development)
4. Accept the reCAPTCHA Terms of Service
5. Click "Submit"
6. Copy your **Site Key** (starts with something like `6Lc...`)

### 2. Configure Environment Variables

Add your reCAPTCHA Site Key to your `.env.local` file:

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
```

**Note**: For production, also add this to your Vercel environment variables.

### 3. How It Works

- **First-time users**: When a user tries to vote or comment for the first time, they'll see a verification prompt
- **Verification storage**: After successful verification, the status is saved in the browser's localStorage
- **24-hour expiration**: The verification expires after 24 hours, requiring re-verification
- **Automatic verification**: Once verified, users can vote and comment without seeing the prompt again (until expiration)

### 4. Features

- ✅ **Invisible verification**: Uses reCAPTCHA v3 which is mostly invisible to users
- ✅ **Browser storage**: Verification status persists across page reloads
- ✅ **Automatic expiration**: Verification expires after 24 hours for security
- ✅ **Seamless UX**: Users only need to verify once per day
- ✅ **Protected actions**: Both voting and commenting require verification

### 5. Testing

To test the reCAPTCHA flow:

1. Clear your browser's localStorage (or use incognito mode)
2. Try to vote or comment - you should see the verification prompt
3. Complete the verification
4. Try voting/commenting again - it should work without the prompt
5. To test expiration, manually clear the `recaptcha_verified` key from localStorage

### 6. Troubleshooting

- **"reCAPTCHA not loaded"**: Make sure `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- **Verification not working**: Check browser console for errors
- **Always showing verification**: Check that your domain is added to the reCAPTCHA site settings

