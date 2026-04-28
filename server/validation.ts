import { z } from "zod";

// Server-side schema — stricter than client; never trust the browser.
export const leadSchema = z.object({
  centreName: z.string().trim().min(2).max(120),
  doctorName: z.string().trim().min(2).max(120),
  mobile: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[+\d][\d\s\-()]{6,19}$/, "Invalid phone number"),
  location: z.string().trim().min(2).max(80),
  email: z.string().trim().toLowerCase().email().max(254),
  comment: z.string().trim().max(1000).optional().or(z.literal("")),
  source: z.string().trim().max(120).optional(),
  // anti-bot
  website: z.string().max(0).optional().or(z.literal("")), // honeypot must be empty
  startedAt: z.number().int().positive().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
