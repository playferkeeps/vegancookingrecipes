# Magic Link Authentication Setup

This guide explains how to set up passwordless magic link authentication for the admin area using Supabase.

## How Magic Links Work

1. User enters their email on the login page
2. Supabase sends an email with a secure link
3. User clicks the link in their email
4. Supabase redirects to your callback URL with authentication tokens
5. Your app verifies the user and grants access

## Supabase Configuration

### 1. Enable Magic Link in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Providers**
3. Find **Email** provider and ensure it's enabled
4. Under **Email Auth**, enable **"Enable email confirmations"** (optional, but recommended)
5. Enable **"Enable magic link"** - this is the key setting!

### 2. Configure Redirect URLs

This is **critical** - Supabase needs to know which URLs are allowed for redirects.

1. Go to **Authentication** → **URL Configuration**
2. Add your redirect URLs to the **"Redirect URLs"** section:

**For Local Development:**

```
http://localhost:3000/admin/auth/callback
```

**For Production (replace with your domain):**

```
https://vegancooking.recipes/admin/auth/callback
https://www.vegancooking.recipes/admin/auth/callback
```

**Important:**

- Add ALL variations of your domain (with/without www, http/https)
- URLs must match exactly (including trailing slashes)
- You can use wildcards: `https://*.yourdomain.com/admin/auth/callback`

### 3. Configure Site URL

1. In **Authentication** → **URL Configuration**
2. Set **"Site URL"** to your production domain:
   ```
   https://vegancooking.recipes
   ```
   Or for local development:
   ```
   http://localhost:3000
   ```

### 4. Email Templates (Optional but Recommended)

1. Go to **Authentication** → **Email Templates**
2. Customize the **"Magic Link"** template if desired
3. The default template works fine, but you can brand it

### 5. SMTP Configuration (For Production)

For production, configure custom SMTP to send emails from your domain:

1. Go to **Settings** → **Auth** → **SMTP Settings**
2. Configure your SMTP provider (SendGrid, Mailgun, AWS SES, etc.)
3. This ensures emails come from your domain and improves deliverability

**Example SMTP Settings:**

- **Host:** `smtp.sendgrid.net`
- **Port:** `587`
- **Username:** `apikey`
- **Password:** Your SendGrid API key
- **Sender email:** `noreply@vegancooking.recipes`
- **Sender name:** `Vegan Cooking Recipes`

## Application Setup

### 1. Environment Variables

No additional environment variables needed! The magic link uses the same Supabase configuration:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_ADMIN_EMAILS` (for admin access control)

### 2. Callback Route

The callback route is already set up at `/admin/auth/callback`. This page:

- Receives the authentication tokens from Supabase
- Verifies the user session
- Checks if the user is an admin
- Redirects to the admin dashboard or login page

### 3. Using Magic Links

1. Go to `/admin/login`
2. Click the **"Magic Link"** tab
3. Enter your admin email
4. Click **"Send Magic Link"**
5. Check your email and click the link
6. You'll be redirected to the admin dashboard

## Testing

### Local Development

1. Make sure your redirect URL is set in Supabase:

   ```
   http://localhost:3000/admin/auth/callback
   ```

2. Start your dev server:

   ```bash
   npm run dev
   ```

3. Visit `http://localhost:3000/admin/login`
4. Use the Magic Link tab to send a link
5. Check your email (or Supabase logs if using default SMTP)
6. Click the link - you should be redirected back to your app

### Production

1. Ensure all production URLs are in Supabase redirect URLs
2. Test with a real email address
3. Verify the email arrives and the link works
4. Check that users are properly authenticated

## Troubleshooting

### "Invalid redirect URL" Error

**Problem:** Supabase rejects the redirect URL

**Solution:**

- Check that the exact URL is in your Supabase redirect URLs list
- Ensure there are no trailing slashes mismatches
- Verify the protocol (http vs https) matches

### Email Not Received

**Problem:** Magic link email doesn't arrive

**Solutions:**

- Check spam/junk folder
- Verify email address is correct
- Check Supabase logs (Authentication → Logs)
- For production, configure custom SMTP
- Check rate limits (Supabase has email sending limits)

### Callback Page Shows Error

**Problem:** User clicks link but sees an error

**Solutions:**

- Check browser console for errors
- Verify callback route is accessible
- Ensure user email is in `NEXT_PUBLIC_ADMIN_EMAILS`
- Check Supabase authentication logs

### Session Not Persisting

**Problem:** User gets logged out immediately

**Solutions:**

- Verify `persistSession: true` in Supabase client config
- Check browser localStorage is enabled
- Clear browser cache and try again

## Security Considerations

1. **Email Verification:** Consider requiring email verification before allowing admin access
2. **Rate Limiting:** Supabase has built-in rate limiting for magic links
3. **Link Expiration:** Magic links expire after a set time (configurable in Supabase)
4. **HTTPS:** Always use HTTPS in production
5. **Admin Email List:** Keep `NEXT_PUBLIC_ADMIN_EMAILS` secure and up-to-date

## Advanced: Custom Email Templates

You can customize the magic link email template in Supabase:

1. Go to **Authentication** → **Email Templates**
2. Select **"Magic Link"** template
3. Customize the subject and body
4. Use variables like `{{ .ConfirmationURL }}` for the link

Example template:

```
Subject: Sign in to Admin Dashboard

Click the link below to sign in:

{{ .ConfirmationURL }}

This link will expire in 1 hour.

If you didn't request this, please ignore this email.
```

## Next Steps

- Set up custom SMTP for production emails
- Configure email templates to match your brand
- Add email verification requirements
- Set up monitoring for failed authentication attempts
