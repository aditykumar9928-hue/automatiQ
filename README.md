# AutomatiQ — AI Automation Agency

A production-ready marketing site for an AI automation agency, built with React, Vite, and Supabase.

## Tech stack

- **React 19 + Vite 8 + TypeScript** — fast SPA, bundled with Vite
- **Tailwind CSS v4** — styling configured in `src/index.css` (`@theme`)
- **Supabase** — stores contact-form leads in the `leads` table (RLS-protected)
- **lucide-react** — icons

## Environment variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

These are read in `src/lib/supabase.ts`. Never hardcode keys in source.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel — it auto-detects Vite (`vercel.json` included).
3. In Vercel → Settings → Environment Variables, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy. Vercel runs `npm run build` and serves `dist/`.

## Supabase setup

The `leads` table migration lives in `supabase/migrations/`. Row Level Security is enabled with an insert-only policy so the public contact form can submit leads without exposing them. Read leads via the Supabase dashboard or service-role key.

## Embed in WordPress

An iframe snippet is in `wordpress/iframe-embed.html`. Publish the site, copy the URL, paste it into the snippet, and add it to a WordPress Custom HTML block.
