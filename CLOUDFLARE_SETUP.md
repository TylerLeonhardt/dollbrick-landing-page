# Cloudflare Pages Deployment Guide

## Setup Instructions

### 1. Connect to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub account and select the `dollbrick-landing-page` repository
4. Configure build settings:
   - **Framework preset**: None
   - **Build command**: (leave empty)
   - **Build output directory**: `public`
   - **Root directory**: `/` (leave empty)

### 2. Environment Variables

No environment variables needed for this setup!

### 3. Deploy

Click "Save and Deploy" - Cloudflare will automatically build and deploy your site.

## How It Works

The Edge Function (`functions/_middleware.js`) runs on Cloudflare's edge network and:
- Detects requests with a `?id=` parameter (e.g., `/?id=spoons-in-20260215`)
- Loads the show data from `public/data/shows.js`
- Injects show-specific Open Graph and Twitter Card meta tags into the HTML
- Works for all visitors (both bots and regular browsers)

This ensures:
- **Social media bots** (Discord, WhatsApp, iMessage, Twitter) see correct meta tags for rich link previews
- **Regular users** get proper meta tags in the initial HTML, making the page faster and more SEO-friendly
- No need to maintain a list of bot user agents - it works universally

## Local Development

For local development, continue using:
```bash
npm start
```

The Edge Function only runs on Cloudflare Pages, not locally. To test the Edge Function locally, you can use [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

```bash
npx wrangler pages dev public
```

## Updating Shows

When you add/edit shows in `public/data/shows.js`:
1. Commit and push to GitHub
2. Cloudflare Pages automatically redeploys
3. New show data is available immediately (no build step needed!)

## Custom Domain

If you want to use your `dollbrick.com` domain:
1. In Cloudflare Pages project settings, go to "Custom domains"
2. Add your domain
3. Update your DNS settings as instructed by Cloudflare

## Cost

**100% FREE** on Cloudflare's free tier:
- Unlimited requests
- Unlimited bandwidth
- Unlimited builds/deployments
- Fast global CDN
- No build step required!
