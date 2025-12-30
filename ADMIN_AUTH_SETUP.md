# Admin Authentication Setup

The admin dashboard is protected with Supabase Authentication. Only authorized users can access the admin area.

## Setup Instructions

### 1. Enable Authentication in Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** → **Providers**
3. Enable **Email** provider (it's usually enabled by default)
4. Configure email settings if needed (SMTP for production)

### 2. Create Admin User

1. Go to **Authentication** → **Users** in your Supabase dashboard
2. Click **"Add user"** → **"Create new user"**
3. Enter the admin email and password
4. Click **"Create user"**

Alternatively, you can use the Supabase CLI or API to create users programmatically.

### 3. Configure Admin Emails

Add the admin email(s) to your environment variables:

**`.env.local` (for local development):**

```bash
NEXT_PUBLIC_ADMIN_EMAILS=admin@example.com,another-admin@example.com
```

**Vercel/Production:**
Add the same variable in your deployment platform's environment variables.

**Note:** Multiple admin emails can be separated by commas (no spaces, or spaces will be trimmed).

### 4. Access the Admin Dashboard

1. Visit `/admin` - you'll be redirected to `/admin/login`
2. Enter your admin email and password
3. You'll be redirected to the dashboard if authentication succeeds

## Security Notes

- **Client-side protection**: The admin routes are protected client-side. For production, consider adding server-side middleware protection.
- **Email-based access**: Only emails listed in `NEXT_PUBLIC_ADMIN_EMAILS` can access the admin area.
- **Session persistence**: Auth sessions are stored in localStorage and persist across browser sessions.
- **Auto-logout**: Users are logged out when they click the logout button or their session expires.

## Troubleshooting

### "Access denied" error

- Make sure your email is in the `NEXT_PUBLIC_ADMIN_EMAILS` environment variable
- Check that the email matches exactly (case-insensitive)
- Restart your dev server after changing environment variables

### Can't sign in

- Verify the user exists in Supabase Authentication → Users
- Check that Email provider is enabled in Supabase
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set correctly

### Session not persisting

- Check browser localStorage is enabled
- Clear browser cache and try again
- Verify Supabase client is configured with `persistSession: true`

## API Protection

The `/api/analytics` route is currently not protected. Consider adding authentication checks there as well for production use.
