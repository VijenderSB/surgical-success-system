import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import path from "node:path";
import { fileURLToPath } from "node:url";
import leadsRouter from "./routes/leads.js";

// In ESM (tsc build) we derive __dirname from import.meta.url.
// In CJS (esbuild shared-hosting bundle) Node already provides __dirname,
// so we only compute it when it's missing.
declare const __dirname: string;
const __dirnameSafe: string = (() => {
  try {
    // @ts-expect-error — defined in CJS, undefined in ESM
    if (typeof __dirname === "string" && __dirname) return __dirname;
  } catch { /* esm */ }
  // ESM fallback
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const metaUrl = (import.meta as any)?.url as string | undefined;
  return metaUrl ? path.dirname(fileURLToPath(metaUrl)) : process.cwd();
})();

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const NODE_ENV = process.env.NODE_ENV || "development";

// Resolve the built client. Try common layouts so the same server file works for:
//   - VPS (dist-server/index.js next to dist/)         → ../dist
//   - shared-hosting bundle (app.js at project root)   → ./dist
//   - explicit override via env                        → PUBLIC_DIR
function resolvePublicDir(): string {
  if (process.env.PUBLIC_DIR) return process.env.PUBLIC_DIR;
  const candidates = [
    path.resolve(__dirnameSafe, "dist"),       // app.js at root
    path.resolve(__dirnameSafe, "../dist"),    // dist-server/index.js
    path.resolve(__dirnameSafe, "../../dist"), // nested build
  ];
  for (const c of candidates) {
    try {
      // require sync fs check
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      if (require("node:fs").existsSync(path.join(c, "index.html"))) return c;
    } catch {
      /* ignore */
    }
  }
  return candidates[0];
}
const PUBLIC_DIR = resolvePublicDir();

const app = express();

// Behind Nginx / load balancer
app.set("trust proxy", 1);
app.disable("x-powered-by");

// ---- Security headers -------------------------------------------------------
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'unsafe-inline'"], // tighten if you remove inline scripts
        "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
        "img-src": ["'self'", "data:", "https:"],
        "connect-src": ["'self'"],
        "frame-ancestors": ["'none'"],
        "base-uri": ["'self'"],
        "form-action": ["'self'"],
        "object-src": ["'none'"],
        "upgrade-insecure-requests": [],
      },
    },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    crossOriginEmbedderPolicy: false, // allow third-party images
    hsts: NODE_ENV === "production" ? { maxAge: 63072000, includeSubDomains: true, preload: true } : false,
  }),
);

// ---- CORS (allowlist via env) ----------------------------------------------
const allowed = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true); // same-origin / curl
      if (allowed.length === 0) return cb(null, true); // no allowlist set => permissive
      if (allowed.includes(origin)) return cb(null, true);
      cb(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

app.use(compression());
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: false, limit: "32kb" }));

// ---- Health -----------------------------------------------------------------
app.get("/healthz", (_req, res) => res.json({ ok: true, ts: Date.now() }));

// ---- API --------------------------------------------------------------------
app.use("/api/leads", leadsRouter);

// ---- Static client ----------------------------------------------------------
app.use(
  express.static(PUBLIC_DIR, {
    maxAge: "1y",
    immutable: true,
    setHeaders(res, filePath) {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }),
);

// SPA fallback — let the client router handle unknown routes
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"), (err) => {
    if (err) res.status(404).send("Not found");
  });
});

app.listen(PORT, HOST, () => {
  console.log(`[server] listening on http://${HOST}:${PORT} (${NODE_ENV})`);
  console.log(`[server] serving static from ${PUBLIC_DIR}`);
});
