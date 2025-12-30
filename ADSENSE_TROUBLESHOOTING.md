# AdSense Troubleshooting Guide

## Current Status: `data-ad-status: null`

If you're seeing `data-ad-status: null` in the console, it means:

- ✅ AdSense script is loading correctly
- ✅ Ad units are being initialized
- ❌ Google isn't serving ads yet

## Common Causes & Solutions

### 1. Ad Units Not Approved Yet (Most Common)

**Symptom:** `data-ad-status: null` or `unfilled`

**Solution:**

- New ad units can take **24-48 hours** to start serving ads
- Check your AdSense dashboard → **Ads** → **Ad units**
- Look for status: "Active" means approved, "Pending" means still reviewing

**What to do:**

- Wait 24-48 hours after creating ad units
- Make sure all ad units show "Active" status in dashboard

### 2. Site Not Fully Verified

**Symptom:** Ads not serving even after 48 hours

**Solution:**

- Go to AdSense dashboard → **Sites**
- Verify your site `vegancooking.recipes` is listed and verified
- Make sure site status shows "Ready" or "Active"

### 3. Ad Format Mismatch

**Symptom:** Ads initialize but never fill

**Solution:**

- In AdSense dashboard, check what format your ad units are:
  - **Display ads** → Use `adFormat="auto"` ✅ (Current setting)
  - **In-feed ads** → Use `adFormat="auto"` with `fullWidthResponsive={true}`
  - **In-article ads** → Use `adFormat="auto"`

**Current Configuration:**

- AdBanner uses `adFormat="auto"` ✅ (Correct for Display ads)

### 4. Ad Serving Policies

**Symptom:** Ads worked before but stopped

**Solution:**

- Check AdSense dashboard → **Account** → **Policy center**
- Look for any policy violations or warnings
- Resolve any issues shown

### 5. Low Traffic / New Site

**Symptom:** Ads occasionally fill but mostly show blank

**Solution:**

- Google may not serve ads on very new sites or low-traffic pages
- This improves as your site gains more traffic
- Focus on SEO and content to increase traffic

### 6. Ad Blockers

**Symptom:** Ads work for some users but not others

**Solution:**

- Test in incognito mode (ad blockers disabled)
- Ask users to disable ad blockers
- Note: This is expected behavior, not a bug

## Verification Checklist

Run through this checklist:

- [ ] Ad units created in AdSense dashboard
- [ ] Ad units show "Active" status (not "Pending")
- [ ] Site `vegancooking.recipes` is verified in AdSense
- [ ] `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` is set correctly
- [ ] `NEXT_PUBLIC_ADSENSE_SLOTS` contains valid slot IDs
- [ ] Ad format matches what's in AdSense (`auto` for Display ads)
- [ ] No policy violations in AdSense dashboard
- [ ] Site has been live for at least 24-48 hours

## Testing Steps

1. **Check Console:**
   - Open browser DevTools → Console
   - Look for `[AdSense]` messages
   - Check `data-ad-status` value

2. **Check Network Tab:**
   - Open DevTools → Network
   - Filter by "adsbygoogle" or "doubleclick"
   - Look for requests to `googleads.g.doubleclick.net`
   - Check response status (200 = good, but content might be empty)

3. **Check AdSense Dashboard:**
   - Go to AdSense → **Ads** → **Ad units**
   - Check if impressions are being recorded
   - If impressions = 0, ads aren't even being requested
   - If impressions > 0 but revenue = 0, ads are being requested but not filled

4. **Test in Different Browsers:**
   - Chrome (with ad blocker disabled)
   - Firefox (with ad blocker disabled)
   - Safari (with ad blocker disabled)
   - Mobile browser

## Expected Timeline

- **0-24 hours:** Ads may not serve (normal for new ad units)
- **24-48 hours:** Ads should start serving if everything is configured correctly
- **48+ hours:** If still not serving, check the issues above

## Still Not Working?

If ads still aren't serving after 48 hours and you've checked everything:

1. **Contact AdSense Support:**
   - Go to AdSense dashboard → **Help** → **Contact us**
   - Explain that ads are initializing but not filling
   - Include screenshots of console logs

2. **Check AdSense Forums:**
   - [AdSense Help Community](https://support.google.com/adsense/community)
   - Search for similar issues
   - Post your question with details

3. **Verify Implementation:**
   - Double-check ad slot IDs match AdSense dashboard
   - Verify publisher ID is correct
   - Make sure ad format matches

## Current Implementation Status

✅ **Working:**

- AdSense script loads correctly
- Ad units initialize properly
- Multiple ad slots supported via pool system
- Proper error handling and logging

⏳ **Waiting On:**

- Ad unit approval (24-48 hours)
- Google to start serving ads

## Quick Fixes to Try

1. **Wait 24-48 hours** (most common solution)
2. **Verify ad slot IDs** match AdSense dashboard exactly
3. **Check ad format** - Display ads should use `auto`
4. **Clear browser cache** and test again
5. **Test in incognito mode** to rule out ad blockers
