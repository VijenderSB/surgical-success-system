import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  // Don't crash at import time — let routes fail with a clear message.
  console.warn("[server] DATABASE_URL is not set — /api/leads will return 503.");
}

export const pool = connectionString
  ? new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
      ssl:
        process.env.PGSSL === "true"
          ? { rejectUnauthorized: false }
          : undefined,
    })
  : null;

export function dbReady() {
  return pool !== null;
}
