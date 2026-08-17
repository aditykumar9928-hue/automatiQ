# AutomatiQ — WordPress Template

A drop-in WordPress **page template** that renders the AutomatiQ React landing
page inside WordPress, complete with all SEO meta tags, Open Graph / Twitter
previews, favicons, web manifest, and JSON-LD structured data.

---

## Files in this folder

| File | What it is |
|------|------------|
| `page-automatiq.php` | The WordPress page template. |
| `README.md`          | This guide. |

The built assets (JS, CSS, favicon, og-image, manifest, robots, sitemap) live
in the main project under `dist/` and `public/`. You upload those alongside the
template as described below.

---

## Step-by-step setup

### 1. Build the project

In the project root:

```
npm run build
```

This creates:

- `dist/assets/index-*.css` (hashed)
- `dist/assets/index-*.js`  (hashed)
- `public/favicon.svg`
- `public/og-image.svg`
- `public/site.webmanifest`
- `public/robots.txt`
- `public/sitemap.xml`

### 2. Create the folder structure in your theme

Inside your active WordPress theme, create a folder called `automatiq` with
an `assets` subfolder. Final layout:

```
wp-content/themes/<your-active-theme>/
├── page-automatiq.php          ← from wordpress/ folder
└── automatiq/
    ├── favicon.svg             ← from public/
    ├── og-image.svg            ← from public/
    ├── site.webmanifest        ← from public/
    ├── robots.txt              ← from public/
    ├── sitemap.xml             ← from public/
    └── assets/
        ├── index-XXXX.css      ← from dist/assets/
        └── index-XXXX.js       ← from dist/assets/
```

### 3. Upload everything

Upload the files so they match the layout above. The template auto-detects the
hashed filenames (`index-*.css`, `index-*.js`) — you do NOT need to edit any
filenames. Just drop the build output in and it works.

### 4. Create the page in WordPress

1. WordPress admin → **Pages → Add New**.
2. Give it any title (e.g. "AutomatiQ").
3. In the **Page Attributes** box, set **Template** → **AutomatiQ Landing Page**.
4. **Publish**.
5. Visit the page — the full React landing page renders.

---

## Important: replace the placeholder domain

Open `page-automatiq.php` and find this line near the top of the `wp_head` block:

```php
$site_url = 'https://automatiq.ai'; // <-- Replace with your real domain.
```

Change it to your real WordPress domain. This value feeds the canonical URL,
Open Graph, Twitter cards, and JSON-LD structured data.

Also update the `sameAs` social profile URLs (LinkedIn, Twitter, GitHub) to your
real accounts.

---

## How it works

- The template is a **full-page canvas** — it intentionally does NOT load your
  theme's header/footer. The React app owns the entire page, exactly as it does
  when hosted standalone.
- WordPress admin bar is hidden on this page so it doesn't overlap the UI.
- All SEO meta tags and structured data are injected into `<head>` via `wp_head`,
  so plugins like Yoast won't conflict (this page bypasses them).
- The built JS loads as `type="module"` (required by Vite) — the template handles
  this automatically via a `script_loader_tag` filter.

---

## Re-deploying after changes

Whenever you change the app and rebuild:

1. Run `npm run build` again.
2. Replace the old `index-*.css` and `index-*.js` files in
   `automatiq/assets/` with the new ones (delete the old hashed files first).
3. The template auto-detects the new filenames — no PHP edits needed.

---

## Notes

- The contact form posts to Supabase, which works the same inside WordPress as
  it does standalone (the API keys are compiled into the built JS).
- `robots.txt` and `sitemap.xml` in `automatiq/` are for reference. If your
  WordPress root already has these, use the WordPress root versions instead and
  update the domain inside them.
