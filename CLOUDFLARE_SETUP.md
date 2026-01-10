# Cloudflare Pages Deployment Guide

This guide covers deploying the Dollbrick landing page to Cloudflare Pages.

**Note**: The bot-specific edge function has been removed to simplify deployment and maintenance. The site now uses standard meta tags that work for general social media sharing, though show-specific previews are not available when sharing links.

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

The site is a zero-build React application that runs entirely in the browser:
* All JavaScript is loaded from CDN (esm.sh)
* No build step or compilation required
* Meta tags are updated client-side when users navigate to show pages
* Fast, simple deployment to any static host

## Local Development

For local development, use:
```bash
npm start
```

This serves the `public/` directory on port 3000.

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
