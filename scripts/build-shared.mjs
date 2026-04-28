// Build a single-file Node server (app.js) for shared Node.js hosting.
// Output layout (zip the project root after running):
//   /app.js                ← entry the host runs
//   /dist/                 ← built client (served as static)
//   /db/migrations/...     ← run once against your external Postgres
//   /package.json          ← only "pg" must be installed at runtime; rest is bundled
//   /node_modules/pg/...   ← installed by the host from package.json
//   /.env                  ← create on the server (DATABASE_URL, etc.)

import { build } from "esbuild";
import { rmSync, mkdirSync, cpSync, existsSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "shared-build");

console.log("→ cleaning shared-build/");
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

console.log("→ building client (vite)");
// Use npx so this works on Hostinger / any host without bun installed.
// If SKIP_CLIENT_BUILD is set (e.g. CI already built), skip.
if (!process.env.SKIP_CLIENT_BUILD) {
  execSync("npx vite build", { stdio: "inherit" });
}

console.log("→ bundling server (esbuild)");
await build({
  entryPoints: [path.join(root, "server/index.ts")],
  bundle: true,
  platform: "node",
  target: "node18",
  format: "cjs",
  outfile: path.join(out, "app.js"),
  // pg ships native bindings; keep it external and install via package.json.
  external: ["pg", "pg-native"],
  legalComments: "none",
  minify: false,
  sourcemap: false,
  banner: {
    js: "/* eslint-disable */",
  },
});

console.log("→ copying client → shared-build/dist");
cpSync(path.join(root, "dist"), path.join(out, "dist"), { recursive: true });

console.log("→ copying db migrations");
cpSync(path.join(root, "db"), path.join(out, "db"), { recursive: true });

console.log("→ writing minimal package.json");
const runtimePkg = {
  name: "transess-shared",
  private: true,
  version: "1.0.0",
  // CommonJS — esbuild emits CJS above
  main: "app.js",
  scripts: {
    start: "node app.js",
  },
  engines: { node: ">=18.0.0" },
  dependencies: {
    // Only true runtime native dep. Everything else is bundled into app.js.
    pg: "^8.20.0",
  },
};
writeFileSync(
  path.join(out, "package.json"),
  JSON.stringify(runtimePkg, null, 2),
);

console.log("→ writing .env.example");
writeFileSync(
  path.join(out, ".env.example"),
  [
    "NODE_ENV=production",
    "# PORT is provided by the shared host — do NOT set it manually unless required",
    "# Use an external Postgres (Neon / Supabase / Railway / etc.)",
    "DATABASE_URL=postgres://user:pass@host:5432/dbname",
    "PGSSL=true",
    "CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com",
    "",
  ].join("\n"),
);

console.log("→ writing README for the upload");
writeFileSync(
  path.join(out, "README.txt"),
  `Transess — shared Node.js hosting bundle
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
`,
);

if (existsSync(path.join(root, "public/.well-known/security.txt"))) {
  cpSync(path.join(root, "public/.well-known"), path.join(out, "dist/.well-known"), { recursive: true });
}

console.log("\n✅ Done. Output: shared-build/");
console.log("   Zip its CONTENTS (not the folder itself) and upload.");
