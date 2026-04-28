-- Transess Technologies — initial schema
-- Run with: psql "$DATABASE_URL" -f db/migrations/0001_init.sql

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS leads (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  centre_name     VARCHAR(120) NOT NULL,
  doctor_name     VARCHAR(120) NOT NULL,
  mobile          VARCHAR(20)  NOT NULL,
  location        VARCHAR(80)  NOT NULL,
  email           VARCHAR(254) NOT NULL,
  comment         TEXT,
  source          VARCHAR(120),
  ip              INET,
  user_agent      TEXT,
  referer         TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT leads_email_chk  CHECK (position('@' in email) > 1),
  CONSTRAINT leads_mobile_chk CHECK (length(mobile) >= 7)
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx      ON leads (lower(email));
CREATE INDEX IF NOT EXISTS leads_mobile_idx     ON leads (mobile);

-- Optional rate-limit dedupe lookup window
CREATE INDEX IF NOT EXISTS leads_ip_recent_idx  ON leads (ip, created_at DESC);
