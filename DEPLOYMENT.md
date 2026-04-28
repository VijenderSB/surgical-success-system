# Deployment Guide — Transess Technologies

Self-host on a Linux VPS (Ubuntu 22.04+ recommended) with **Node.js 20 + PM2 +
Nginx + PostgreSQL 16**. Lovable preview continues to work unchanged; this
guide covers the GitHub-driven production deploy.

---

## 1. Architecture

```
Internet ──TLS──> Nginx (443) ──proxy──> Node/PM2 (127.0.0.1:3000) ──pg──> Postgres (127.0.0.1:5432)
                       │
                       └── serves /.well-known, gzip, security headers, rate-limit
```

- **Client SPA** — built by Vite to `dist/`
- **Node API + static server** — Express in `server/`, compiled to `dist-server/`
- **DB** — PostgreSQL with `db/migrations/0001_init.sql`
- **Process mgr** — PM2 (cluster mode, auto-restart, log rotation)
- **TLS** — Let's Encrypt via certbot

---

## 2. One-time server setup

```bash
# As root / with sudo
apt update && apt -y upgrade
apt -y install curl ca-certificates gnupg ufw nginx postgresql postgresql-contrib

# Node 20 (NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt -y install nodejs
npm i -g pm2

# Firewall
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable

# App user + dirs
adduser --system --group --home /var/www/transess transess
mkdir -p /var/www/transess/{releases,shared,current}
mkdir -p /var/log/transess
chown -R transess:transess /var/www/transess /var/log/transess

# PM2 startup at boot
pm2 startup systemd -u transess --hp /var/www/transess
```

### Postgres

```bash
sudo -u postgres psql <<'SQL'
CREATE USER transess WITH PASSWORD 'CHANGE_ME_STRONG';
CREATE DATABASE transess OWNER transess;
GRANT ALL PRIVILEGES ON DATABASE transess TO transess;
SQL

# Apply schema
sudo -u transess psql "postgres://transess:CHANGE_ME_STRONG@127.0.0.1:5432/transess" \
  -f /var/www/transess/current/db/migrations/0001_init.sql
```

### Shared `.env`

```bash
sudo -u transess tee /var/www/transess/shared/.env > /dev/null <<'ENV'
NODE_ENV=production
HOST=127.0.0.1
PORT=3000
DATABASE_URL=postgres://transess:CHANGE_ME_STRONG@127.0.0.1:5432/transess
PGSSL=false
CORS_ORIGINS=https://transess.com,https://www.transess.com
ENV
chmod 600 /var/www/transess/shared/.env
```

### Nginx + TLS

```bash
cp /var/www/transess/current/deploy/nginx/transess.conf /etc/nginx/sites-available/
ln -s /etc/nginx/sites-available/transess.conf /etc/nginx/sites-enabled/

# Add the rate-limit zone in /etc/nginx/nginx.conf inside http { … }:
#   limit_req_zone $binary_remote_addr zone=leads:10m rate=10r/m;

nginx -t && systemctl reload nginx

# TLS
apt -y install certbot python3-certbot-nginx
certbot --nginx -d transess.com -d www.transess.com --redirect --hsts --staple-ocsp -m you@transess.com --agree-tos -n
```

---

## 3. GitHub deploy

The repo includes `.github/workflows/deploy.yml`. Add these **repo secrets**:

| Secret             | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `DEPLOY_HOST`      | server IP or hostname                    |
| `DEPLOY_USER`      | `transess`                               |
| `DEPLOY_SSH_KEY`   | private key authorized for the user      |

On every push to `main`:

1. Bun installs deps, typechecks, lints, builds (`bun run build:node`).
2. Tarball is SCP'd to `/var/www/transess/releases/`.
3. SSH script extracts it, `npm install --omit=dev`, symlinks `current → releases/<stamp>`, and `pm2 reload`.
4. Keeps the last 5 releases for instant rollback (`ln -sfn releases/<old> current && pm2 reload`).

Manual first deploy:

```bash
# On your laptop
bun install
bun run build:node
tar -czf release.tgz dist dist-server db package.json package-lock.json ecosystem.config.cjs
scp release.tgz transess@server:/var/www/transess/releases/

# On the server
cd /var/www/transess
mkdir -p releases/initial && tar -xzf releases/release.tgz -C releases/initial
ln -sfn releases/initial current
ln -sfn /var/www/transess/shared/.env current/.env
cd current && npm install --omit=dev
pm2 start ecosystem.config.cjs && pm2 save
```

---

## 4. Local development against Node server

```bash
cp .env.example .env             # edit DATABASE_URL
docker run -d --name pg -p 5432:5432 \
  -e POSTGRES_PASSWORD=transess -e POSTGRES_USER=transess -e POSTGRES_DB=transess \
  postgres:16-alpine
psql "postgres://transess:transess@127.0.0.1:5432/transess" -f db/migrations/0001_init.sql

bun run build:node
bun run start                    # http://127.0.0.1:3000
```

Or with Docker Compose (one command):

```bash
echo "POSTGRES_PASSWORD=transess" > .env
docker compose up --build
```

---

## 5. On-page & security patches included

| Layer        | Hardening                                                                 |
| ------------ | ------------------------------------------------------------------------- |
| **App**      | helmet (CSP, HSTS, X-Frame, Referrer-Policy, no `x-powered-by`)           |
| **App**      | CORS allowlist via `CORS_ORIGINS`                                         |
| **App**      | JSON body cap 32 KB                                                       |
| **App**      | `express-rate-limit`: 5 lead submits / 10 min / IP                        |
| **App**      | Honeypot field + min-time gate (1.5 s) for anti-bot                       |
| **App**      | Server-side Zod validation, stricter than client                          |
| **DB**       | UUID PKs, `CHECK` constraints on email/mobile, indexes for queries        |
| **DB**       | Non-superuser app role; secrets only in `/var/www/transess/shared/.env`   |
| **Nginx**    | TLS 1.2/1.3 only, OCSP stapling, HSTS preload                             |
| **Nginx**    | Adds duplicate security headers as defence-in-depth                       |
| **Nginx**    | `limit_req_zone` on `/api/leads` (10 r/m, burst 5)                        |
| **Nginx**    | `client_max_body_size 1m`, gzip, immutable hashed-asset caching           |
| **Process**  | PM2 cluster mode, `max_memory_restart 512M`, auto-restart on crash, boot  |
| **CI**       | Typecheck + lint gate before any deploy                                   |

### SEO (already in code, double-check after deploy)

- Per-route `head()` titles & meta descriptions
- JSON-LD `Service`, `FAQPage`, `BreadcrumbList`
- `public/robots.txt` and `/sitemap.xml` route
- Single H1 per page, semantic landmarks
- Canonical URLs via `buildPageMeta`

---

## 6. Useful ops commands

```bash
pm2 status
pm2 logs transess-web --lines 200
pm2 reload transess-web                 # zero-downtime
pm2 monit

# DB backup (cron daily)
pg_dump -Fc -U transess transess > /var/backups/transess-$(date +%F).dump

# Rollback
cd /var/www/transess
ln -sfn releases/<previous-stamp> current && pm2 reload ecosystem.config.cjs
```
