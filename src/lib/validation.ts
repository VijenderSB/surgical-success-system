/**
 * Shared input validation schemas + helpers.
 *
 * The marketing site currently has no live submission endpoints, but every
 * future contact / consultation / WhatsApp CTA MUST funnel its input through
 * these schemas (both on the client UI and inside any `createServerFn`
 * handler). This is the single source of truth.
 *
 * Defence-in-depth principles applied:
 *  - Strict length caps (mitigate DoS / oversize payloads).
 *  - Conservative character classes for short identifying fields
 *    (mitigate header injection, SQLi shapes, log forging).
 *  - `.trim()` on every string (defeat whitespace-padding attacks).
 *  - Email & phone validated to prevent abuse of mailto:/tel: links.
 *  - Honeypot field — any non-empty value = silently drop (bot signal).
 */
import { z } from "zod";

/** Generic safe-text — letters, digits, spaces, common punctuation. */
const SAFE_TEXT = /^[\p{L}\p{N}\s.,'’\-&()/]+$/u;

/** Indian phone (optionally +91), 10–13 digits total. */
const PHONE_REGEX = /^(?:\+?\d{1,3}[\s-]?)?[6-9]\d{9}$/;

export const nameSchema = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters")
  .max(100, "Name must be under 100 characters")
  .regex(SAFE_TEXT, "Name contains invalid characters");

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Please enter a valid email")
  .max(254, "Email is too long");

export const phoneSchema = z
  .string()
  .trim()
  .regex(PHONE_REGEX, "Please enter a valid Indian phone number");

export const cityFieldSchema = z
  .string()
  .trim()
  .min(2)
  .max(60)
  .regex(SAFE_TEXT, "City contains invalid characters");

export const messageSchema = z
  .string()
  .trim()
  .min(10, "Message is too short")
  .max(1000, "Message must be under 1000 characters");

/** Honeypot field — must be empty. Bots fill every input they see. */
export const honeypotSchema = z
  .string()
  .max(0, "Bot detected")
  .optional()
  .default("");

/**
 * Canonical Consultation / Contact form schema.
 * Use on every CTA form on the site once a backend is wired.
 */
export const consultationFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  city: cityFieldSchema.optional(),
  practice: z
    .string()
    .trim()
    .max(120)
    .regex(SAFE_TEXT, "Practice name contains invalid characters")
    .optional(),
  message: messageSchema.optional(),
  // Anti-bot
  website: honeypotSchema, // honeypot — must stay empty
  // Submission timestamp from client; reject anything submitted in <2s (bot)
  startedAt: z.number().int().positive().optional(),
});

export type ConsultationFormInput = z.infer<typeof consultationFormSchema>;

/** URL-encode helpers for any tel:/mailto:/wa.me link built from input. */
export const safeMailto = (email: string, subject = "", body = "") =>
  `mailto:${encodeURIComponent(emailSchema.parse(email))}` +
  (subject || body
    ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : "");

export const safeTel = (phone: string) =>
  `tel:${phoneSchema.parse(phone).replace(/\s|-/g, "")}`;

/**
 * Throttle helper — caller-side minimum interval between submissions
 * (true rate-limiting still belongs server-side once backend exists).
 */
export function isTooSoon(startedAtMs?: number, minMs = 2000) {
  if (!startedAtMs) return false;
  return Date.now() - startedAtMs < minMs;
}
