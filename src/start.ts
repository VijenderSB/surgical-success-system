/**
 * Global server middleware for Transess marketing site.
 *
 * Applies a strict set of security headers to every SSR / server-route
 * response. The site is purely static marketing content (no user input,
 * no auth, no DB), so the threat surface is limited to:
 *   - Clickjacking (framing the site to trick visitors)
 *   - MIME sniffing
 *   - XSS via injected third-party content
 *   - Referrer leakage
 *   - Browser feature abuse (camera, mic, geolocation)
 *   - Downgrade attacks over HTTP
 *
 * These headers close every one of those by default, while still allowing
 * the assets and structured-data scripts the site actually uses.
 */
import { createStart, createMiddleware } from "@tanstack/react-start";
import { setResponseHeaders } from "@tanstack/react-start/server";

/**
 * Content-Security-Policy.
 * - default-src 'self'                — block everything by default.
 * - 'unsafe-inline' on script/style   — required for Vite/React hydration
 *                                       and the inline JSON-LD blocks.
 * - img-src https: data:              — allow the R2-hosted OG image and
 *                                       inline SVG/data URLs.
 * - frame-ancestors 'none'            — modern clickjacking protection
 *                                       (replaces X-Frame-Options).
 * - base-uri 'self'                   — block <base> hijacking.
 * - form-action 'self'                — restrict form posts to same origin.
 * - upgrade-insecure-requests         — auto-upgrade any http:// asset.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeadersMiddleware = createMiddleware().server(
  async ({ next }) => {
    setResponseHeaders(
      new Headers({
        "Content-Security-Policy": CSP,
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy":
          "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
        "Strict-Transport-Security":
          "max-age=63072000; includeSubDomains; preload",
        "Cross-Origin-Opener-Policy": "same-origin",
        "X-DNS-Prefetch-Control": "on",
      }),
    );
    return next();
  },
);

export const startInstance = createStart(() => ({
  requestMiddleware: [securityHeadersMiddleware],
}));
