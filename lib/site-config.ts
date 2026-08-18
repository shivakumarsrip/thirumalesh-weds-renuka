/**
 * Central config for the wedding invitation site.
 * To change the OG thumbnail:
 *   1. Drop your image into  public/images/og-thumbnail.jpg
 *   2. Update `ogImage` below (or leave it — it already points there)
 * To change the site URL for production:
 *   Set NEXT_PUBLIC_SITE_URL in your .env.local / hosting env vars.
 */

export const siteConfig = {
  // ── Deployment URL ────────────────────────────────────────────────────────
  // Must be an absolute URL (no trailing slash).
  // Set NEXT_PUBLIC_SITE_URL in your environment for production.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, ''),

  // ── Couple ────────────────────────────────────────────────────────────────
  groom: 'Thirumalesh Goud',
  bride: 'Renuka',

  // ── Event details ─────────────────────────────────────────────────────────
  weddingDate: '27th August 2026',
  venue: 'M.S.R. Gardens, Kattangur, Nalgonda, Telangana',

  // ── Social / OG metadata ──────────────────────────────────────────────────
  ogTitle: 'Thirumalesh Goud & Renuka — Wedding Invitation',
  ogDescription:
    'Two hearts, one promise. Join us on Thursday, 27th August 2026 as we celebrate our union at M.S.R. Gardens, Kattangur, Nalgonda, Telangana. Your blessings mean the world to us.',

  // Place your custom thumbnail at public/images/og-thumbnail.png
  // Recommended size: 1200 × 630 px, < 8 MB, JPG or PNG.
  ogImage: '/images/og-thumbnail.png',

  // Fallback used when og-thumbnail.jpg doesn't exist yet.
  ogImageFallback: '/images/temple-bg.png',

  // ── Designer credit (bottom of page) ────────────────────────────────────
  credit: {
    name: 'Sripada Shivakumar',
    instagramUrl: 'https://www.instagram.com/shivakumar_sri/',
    whatsappUrl: 'https://wa.me/919666086127',
  },
} as const

export type SiteConfig = typeof siteConfig
