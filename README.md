# ParijatWeaves — Next.js frontend (WordPress headless backend)

A decoupled storefront: this Next.js app renders the UI; WordPress
(parijatweaves.com) is the content/commerce backend, reached over REST APIs.

## What's already set up on the WordPress side
- Site title changed to **ParijatWeaves**.
- Pages created: `Home`, `Blog`, `About Us`, `Contact` (plus the existing
  WooCommerce `Shop`, `Cart`, `Checkout`, `My account`).
- **Home** page set as the static front page; **Blog** set as the posts page.
- A **Main Menu** created with Home / Shop / Blog / About Us / Contact.
- A small must-use style API file was added
  (`wp-content/novamira-sandbox/headless-api.php`) exposing:
  - `GET /wp-json/pw/v1/menu/{slug}` — nav menu items as JSON.
  - `POST /wp-json/pw/v1/contact` — accepts `{ name, email, subject, message }`,
    stores it as a "Contact Messages" entry in wp-admin, and emails the
    site admin.
  - CORS headers enabled on the REST API so this frontend (on a different
    domain/port) can call it directly.
- Products are read from WooCommerce's public **Store API**
  (`/wp-json/wc/store/v1/products`) — no auth needed for read-only listing.

## Running the frontend
```bash
cp .env.local.example .env.local   # point NEXT_PUBLIC_WP_URL at your WP site
npm install
npm run dev
```

## Structure
- `app/page.tsx` — the landing page (hero, category tiles, best sellers,
  feature strip, newsletter), matching the reference design.
- `app/shop/page.tsx` — live product grid from WooCommerce.
- `app/contact/page.tsx` — contact form wired to the `pw/v1/contact` endpoint.
- `app/about-us/page.tsx` — placeholder; swap in a fetch to
  `/wp-json/wp/v2/pages?slug=about-us` to pull the real WP content.
- `components/` — Header/Footer (menu-driven), Hero, CategoryGrid,
  BestSellers, PromoStrip (feature strip + newsletter), ContactForm.
- `lib/wp.ts` — all WordPress/WooCommerce fetch helpers.

## Notes / next steps
- Icons in the hero and category tiles are emoji placeholders standing in
  for the photography in the reference design — swap in real product/
  lifestyle photography (e.g. via `elementor/list-assets` on the WP media
  library, or new uploads) by replacing the emoji spans with `next/image`.
- Contact submissions land under **wp-admin → Contact Messages**.
- Because this is decoupled, no Elementor/UAE building was needed — the
  landing page UI lives entirely in this codebase.
