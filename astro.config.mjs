// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// GitHub Pages URL for now — swap for the real domain when it exists.
// Required for absolute URLs in sitemap, robots.txt, canonical tags, and
// Open Graph metadata.
const SITE_URL = 'https://micahtalkcraft.github.io/builtoutcome';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: true,
      policy: [{ userAgent: '*', allow: '/' }],
    }),
  ],
});
