/*
# Create leads table for the AutomatiQ contact form

1. New Tables
- `leads`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the visitor's full name
  - `email` (text, not null) — contact email
  - `company` (text, nullable) — optional company name
  - `service` (text, nullable) — which automation service they're interested in
  - `message` (text, not null) — the free-text inquiry
  - `created_at` (timestamptz, defaults to now()) — when the lead was submitted

2. Security
- Enable Row Level Security on `leads`.
- This is a no-auth marketing site: the public (anon) can submit leads via the
  contact form, but leads are private to the agency owner — no public reads,
  updates, or deletes. Only an INSERT policy is granted to anon + authenticated.
  There is intentionally NO SELECT/UPDATE/DELETE policy, so those are denied by
  default once RLS is enabled. The agency owner can read leads through the
  Supabase dashboard / service role.

3. Important notes
- No `user_id` / auth dependency — this is a single-tenant public submission form.
- `USING (true)` is NOT used anywhere here; the insert policy uses a permissive
  WITH CHECK because any visitor may submit, which is the intended public write.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  service text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_lead" ON leads;
CREATE POLICY "anon_insert_lead"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
