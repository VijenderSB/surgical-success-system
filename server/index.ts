import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import path from "node:path";
import { fileURLToPath } from "node:url";
import leadsRouter from "./routes/leads.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const NODE_ENV = process.env.NODE_ENV || "development";
const PUBLIC_DIR =
  process.env.PUBLIC_DIR || path.resolve(__dirname, "../../dist");

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
