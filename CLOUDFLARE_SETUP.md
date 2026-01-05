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

### For Regular Users
- Your React app loads and runs normally
- Client-side routing with `?id=` parameters works as expected
- Fast, zero-build experience preserved

### For Bots (Discord, WhatsApp, etc.)
- The Edge Function (`functions/_middleware.js`) detects bot user agents
- Imports show data directly from `public/data/shows.js`
- Injects proper meta tags into the HTML before sending to the bot
- Bot sees proper Open Graph tags and generates rich previews

### Supported Bots
- Discord
- WhatsApp
- Telegram
- Facebook
- Twitter/X
- LinkedIn
- Slack
- And many more!

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
