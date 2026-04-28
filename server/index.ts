import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import path from "node:path";
import fs from "node:fs";
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
// On shared hosts (Passenger / cPanel / Plesk) binding 0.0.0.0 is rejected.
// Only set HOST when explicitly provided; otherwise let Node bind the default.
const HOST = process.env.HOST;
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
      if (fs.existsSync(path.join(c, "index.html"))) return c;
    } catch {
      /* ignore */
    }
  }
  return candidates[0];
}
const PUBLIC_DIR = resolvePublicDir();

const app = express();

// Trust proxy: on shared hosts the chain is unknown — use a loopback-only
// setting which keeps express-rate-limit happy and avoids ERR_ERL_PERMISSIVE_TRUST_PROXY.
app.set("trust proxy", "loopback");
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

const onListen = () => {
  console.log(`[server] listening on port ${PORT} (${NODE_ENV})`);
  console.log(`[server] serving static from ${PUBLIC_DIR}`);
};

if (HOST) {
  app.listen(PORT, HOST, onListen);
} else {
  // Default bind — works on shared Node hosts (Passenger picks it up).
  app.listen(PORT, onListen);
}

// Surface crashes in the host's stderr log instead of dying silently.
process.on("uncaughtException", (err) => console.error("[uncaughtException]", err));
process.on("unhandledRejection", (err) => console.error("[unhandledRejection]", err));
