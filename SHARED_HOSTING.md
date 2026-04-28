# Deploying to Shared Node.js Hosting (Hostinger / cPanel / Plesk)

Two supported flows. Pick **A** if you connected your GitHub repo to Hostinger
(recommended — auto-deploys on push). Pick **B** if you upload files manually.

---

## Flow A — GitHub auto-deploy (Hostinger Express preset)

Hostinger's "Express" preset on a GitHub repo runs:

```
npm install     # at the repo root
npm start       # at the repo root
```

This project is wired so both commands Just Work:

- `npm install` triggers a `postinstall` hook that runs
  `node scripts/build-shared.mjs`, which builds the Vite client and bundles
  the Express server into `shared-build/app.js`.
- `npm start` runs `node shared-build/app.js`.

### Hostinger build settings

| Field                      | Value           |
| -------------------------- | --------------- |
| Framework preset           | **Express**     |
| Branch                     | `main`          |
| Node version               | **22.x** (or 18/20) |
| Root directory             | `./`            |
| Build & output settings    | Default         |
| Application startup file   | (auto — `npm start`) |

### Required environment variables (add in Hostinger UI)

```
NODE_ENV=production
DATABASE_URL=postgres://user:pass@host:5432/dbname
PGSSL=true
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

⚠️ **Do NOT set `PORT`** — Hostinger injects it.

### Database

Shared hosts don't run Postgres locally. Provision an external one:

- **Neon** — https://neon.tech (recommended)
- **Supabase** — https://supabase.com
- **Railway** — https://railway.app

Run the migration once via the provider's SQL editor (paste the contents of
`db/migrations/0001_init.sql`) or locally:

```bash
psql "$DATABASE_URL" -f db/migrations/0001_init.sql
```

### Deploy

Push to `main` → Hostinger pulls, runs `npm install` (which builds), then
`npm start`. Visit `https://yourdomain.com/healthz` → should return
`{"ok":true,...}`.

---

## Flow B — Manual upload (no GitHub)

1. Build locally:
   ```bash
   bun install      # or: npm install --ignore-scripts
   bun run build:shared
   ```
2. Zip the **contents** of `shared-build/` (not the folder itself).
3. In the hosting control panel:
   - Application root: directory you upload to
   - Application startup file: `app.js`
   - Node.js version: 18+
4. Upload + extract.
5. Add the same env vars as Flow A.
6. Click **Run NPM Install** (installs only `pg`).
7. Click **Restart Application**.

---

## What's different from the VPS deploy?

|                   | Shared hosting           | VPS (DEPLOYMENT.md)        |
| ----------------- | ------------------------ | -------------------------- |
| Entry             | `shared-build/app.js`    | `dist-server/index.js`     |
| Process manager   | Host-managed             | PM2 cluster                |
| Reverse proxy/SSL | Host-managed             | Nginx + Certbot            |
| Postgres          | External (Neon/Supabase) | Local on the box           |
| Deploy            | `git push` or zip upload | GitHub Actions over SSH    |

Both deploys share the **same `server/` source** — only the build target differs.
