#!/usr/bin/env node
// Script to generate shows.json from shows.js for Cloudflare Edge Function

import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateShowsJson() {
  // Read shows.js
  const showsJsPath = join(__dirname, '../public/data/shows.js');
  const showsJsContent = await readFile(showsJsPath, 'utf-8');

  // Execute the module to get the shows data
  // We'll use dynamic import since it's an ES module
  const showsModule = await import(showsJsPath);
  const shows = showsModule.default;

  // Convert to JSON-friendly format (dates to ISO strings)
  const showsJson = shows.map(show => ({
    ...show,
    date: show.date.toISOString(),
  }));

  // Write to shows.json
  const showsJsonPath = join(__dirname, '../public/data/shows.json');
  await writeFile(showsJsonPath, JSON.stringify(showsJson, null, 2));

  console.log(`✅ Generated shows.json with ${showsJson.length} shows`);
}

generateShowsJson().catch(console.error);
