# Deploying to Shared Node.js Hosting (Hostinger / cPanel / Plesk)

This is the **no-VPS** path. The host runs your single `app.js` for you and
provides SSL + reverse proxy on its own. You don't need PM2, Nginx, or root.

## 1. Build the bundle locally

```bash
bun install
bun run build:shared
```

This produces a `shared-build/` directory containing:

```
shared-build/
├── app.js              ← single-file Node server (Express + API)
├── dist/               ← built React client (served as static)
├── db/migrations/      ← run once on your external Postgres
├── package.json        ← only "pg" is installed at runtime
├── .env.example
└── README.txt
```

## 2. Provision an external Postgres database

Shared hosts don't let you run Postgres locally. Pick one (free tiers exist):

- **Neon** — https://neon.tech (recommended, serverless Postgres)
- **Supabase** — https://supabase.com
- **Railway** — https://railway.app

Copy the connection string. It will look like:
`postgres://user:pass@host.region.neon.tech/dbname?sslmode=require`

Run the migration once (use your provider's SQL editor or local `psql`):

```bash
psql "$DATABASE_URL" -f shared-build/db/migrations/0001_init.sql
```

## 3. Upload to the host

1. Zip the **contents** of `shared-build/` (not the folder itself).
2. In the hosting control panel, create a Node.js application:
   - **Application root**: the directory you upload to
   - **Application URL**: your domain
   - **Application startup file**: `app.js`
   - **Node.js version**: 18 or newer
3. Upload and extract the zip into the application root.

## 4. Configure environment variables

In the control panel's "Environment variables" section (or create a `.env`
file in the application root):

```
NODE_ENV=production
DATABASE_URL=postgres://...   # from step 2
PGSSL=true                    # required for Neon / Supabase / Railway
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

**Do NOT** set `PORT` — the host injects it.

## 5. Install runtime deps & start

From the control panel:
- Click **Run NPM Install** (installs only `pg` — everything else is bundled).
- Click **Restart Application**.

Visit `https://yourdomain.com/healthz` — should return `{"ok":true,...}`.
The lead form will POST to `/api/leads` and write to your external Postgres.

## What's different from the VPS deploy?

| | Shared hosting | VPS (DEPLOYMENT.md) |
|---|---|---|
| Entry | `app.js` (CJS bundle) | `dist-server/index.js` (ESM) |
| Process manager | Host-managed | PM2 cluster |
| Reverse proxy / SSL | Host-managed | Nginx + Certbot |
| Postgres | External (Neon/Supabase) | Local on the box |
| Deploy | Upload zip | GitHub Actions over SSH |

Both deploys share the **same `server/` source** — only the build target differs.

## Updating the site

1. `bun run build:shared` locally
2. Re-upload the contents of `shared-build/` (overwrite)
3. Click **Restart Application** in the control panel

You do **not** need to re-run `npm install` unless `pg`'s version changed.
