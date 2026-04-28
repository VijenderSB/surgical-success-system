Transess — shared Node.js hosting bundle
==========================================

1. Upload the entire contents of this folder to your hosting account
   (e.g. /home/USER/htdocs/yourdomain.com or the directory the host
   designates as the Node app root).

2. In the hosting control panel:
   - Application root:    the folder you uploaded to
   - Application URL:     your domain
   - Application startup file: app.js
   - Node.js version:     18 or newer

3. Create a ".env" file (copy from .env.example) and fill in:
     DATABASE_URL   (external Postgres — Neon/Supabase/Railway)
     PGSSL=true     (almost always required for managed Postgres)
     CORS_ORIGINS   (your live domain(s))

4. Run "npm install" from the control panel (installs only "pg").

5. Run the migration ONCE against your external DB:
     psql "$DATABASE_URL" -f db/migrations/0001_init.sql
   (or paste the SQL into your DB provider's SQL editor)

6. Start / Restart the application from the control panel.
   The host injects PORT and reverse-proxies it on 80/443 with SSL.
