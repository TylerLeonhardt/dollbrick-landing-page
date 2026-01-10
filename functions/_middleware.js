// Cloudflare Pages Edge Function for show-specific meta tag injection
// This injects show-specific meta tags for any request with a show ID parameter

import shows from '../public/data/shows.json';

function getShowData(showId) {
  return shows.find(show => show.id === showId);
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  
  // Only process index.html with show ID parameter
  const showId = url.searchParams.get('id');
  
  if (!showId) {
    // No show ID - serve normally
    return next();
  }
  
  // Only process homepage (could be /, /index.html, or /index)
  const isHomepage = url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/index';
  if (!isHomepage) {
    // Not homepage - serve normally
    return next();
  }

  // Fetch the original HTML
  const response = await next();
  
  // Only process HTML responses
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  const show = getShowData(showId);
  
  if (!show) {
    // Show not found - serve original
    return response;
  }

  // Prepare meta tag values
  const formattedDate = new Date(show.date).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
  const description = `${formattedDate} - ${show.location}. ${show.description}`;
  const image = show.image 
    ? `${url.origin}/${show.image}` 
    : `${url.origin}/assets/images/hero-image.png`;
  const pageUrl = `${url.origin}/?id=${show.id}`;

  // Get the HTML text
  let html = await response.text();

  // Replace meta tags
  html = html
    .replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${show.title}">`
    )
    .replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${description}">`
    )
    .replace(
      /<meta property="og:image" content="[^"]*">/,
      `<meta property="og:image" content="${image}">`
    )
    .replace(
      /<meta property="og:url" content="[^"]*">/,
      `<meta property="og:url" content="${pageUrl}">`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*">/,
      `<meta name="twitter:title" content="${show.title}">`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*">/,
      `<meta name="twitter:description" content="${description}">`
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*">/,
      `<meta name="twitter:image" content="${image}">`
    )
    .replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${description}">`
    )
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${show.title} - Dollbrick Improv Collective</title>`
    );

  // Return modified HTML
  return new Response(html, {
    headers: response.headers,
  });
}
