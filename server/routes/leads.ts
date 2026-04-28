import { Router, type Request, type Response } from "express";
import rateLimit from "express-rate-limit";
import { pool, dbReady } from "../db.js";
import { leadSchema } from "../validation.js";

const router = Router();

// Per-IP rate limit: max 5 submissions / 10 min.
// validate.trustProxy: false avoids ERR_ERL_PERMISSIVE_TRUST_PROXY on shared hosts
// where the upstream proxy chain isn't known.
const leadLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  validate: { trustProxy: false, xForwardedForHeader: false },
  message: { ok: false, error: "Too many requests. Please try again later." },
});

router.post("/", leadLimiter, async (req: Request, res: Response) => {
  if (!dbReady() || !pool) {
    return res.status(503).json({ ok: false, error: "Database not configured" });
  }

  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "Invalid input",
      issues: parsed.error.issues.map((i) => ({
        path: i.path.join("."),
        message: i.message,
      })),
    });
  }

  const data = parsed.data;

  // Honeypot trip → silently accept and drop.
  if (data.website && data.website.length > 0) {
    return res.status(200).json({ ok: true });
  }

  // Anti-bot: require >= 1.5s between form open and submit.
  if (data.startedAt && Date.now() - data.startedAt < 1500) {
    return res.status(200).json({ ok: true }); // silent drop
  }

  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)
      ?.split(",")[0]
      ?.trim() || req.ip || null;
  const ua = (req.headers["user-agent"] as string | undefined) ?? null;
  const referer = (req.headers["referer"] as string | undefined) ?? null;

  try {
    const { rows } = await pool.query(
      `INSERT INTO leads
         (centre_name, doctor_name, mobile, location, email, comment, source, ip, user_agent, referer)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       RETURNING id, created_at`,
      [
        data.centreName,
        data.doctorName,
        data.mobile,
        data.location,
        data.email,
        data.comment || null,
        data.source || null,
        ip,
        ua,
        referer,
      ],
    );
    return res.status(201).json({ ok: true, id: rows[0].id });
  } catch (err) {
    console.error("[/api/leads] insert failed", err);
    return res.status(500).json({ ok: false, error: "Internal error" });
  }
});

export default router;
