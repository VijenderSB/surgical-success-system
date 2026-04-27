import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PHONE = "918447314061";

/**
 * Section-aware WhatsApp CTA. Renders next to LeadForm triggers and opens
 * WhatsApp with a pre-filled message tailored to the page section.
 */
export function WhatsAppCTA({
  context,
  size = "lg",
  variant = "outline",
  className,
  label = "Chat on WhatsApp",
}: {
  /** Short description of where the CTA lives, used to pick a message. */
  context: string;
  size?: React.ComponentProps<typeof Button>["size"];
  variant?: React.ComponentProps<typeof Button>["variant"];
  className?: string;
  label?: string;
}) {
  const message = buildMessage(context);
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn(
        "h-12 gap-2 border-[#25D366]/40 bg-[#25D366]/5 px-6 text-base font-semibold text-[#1a8a47] hover:bg-[#25D366]/15 hover:text-[#136a37]",
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — ${context}`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}

function buildMessage(context: string): string {
  const c = context.toLowerCase();

  // Section-specific intros
  if (c.includes("navbar")) {
    return "Hi Transess, I'd like to book a growth consultation for my eye centre. Please share available slots.";
  }
  if (c.includes("footer")) {
    return "Hi Transess, I'd like to request a free digital audit for my eye clinic. Please connect.";
  }
  if (c.includes("crm")) {
    return "Hi Transess, I'm interested in your CRM & Conversion system for eye clinics — how it improves lead-to-consultation conversion. Please share details.";
  }
  if (c.includes("performance") || c.includes("ads")) {
    return "Hi Transess, I'd like to know about your Performance Marketing services for ophthalmology — Google & Meta ads for procedures. Please share details.";
  }
  if (c.includes("content") || c.includes("authority")) {
    return "Hi Transess, I'd like to know about your Content & Authority services for building trust and SEO for our eye centre. Please share details.";
  }
  if (c.includes("video")) {
    return "Hi Transess, I'd like to explore your Video Content Building service for our eye clinic — patient stories and procedure explainers. Please share details.";
  }
  if (c.includes("digital infrastructure") || c.includes("infrastructure")) {
    return "Hi Transess, I'd like to know about your Digital Infrastructure setup for eye clinics — website, tracking, and landing pages. Please share details.";
  }
  if (c.includes("expertise")) {
    return "Hi Transess, I'd like to learn more about your eyecare-specific expertise and how you can grow our practice. Please share details.";
  }
  if (c.includes("service hero")) {
    const svc = context.split("·")[1]?.trim();
    return `Hi Transess, I'd like to know more about your "${svc ?? "service"}" offering for eye clinics. Please share details.`;
  }
  if (c.includes("service cta")) {
    const svc = context.split("·")[1]?.trim();
    return `Hi Transess, I'm ready to get started with "${svc ?? "your service"}" for our eye centre. Please connect.`;
  }
  if (c.includes("home hero · build")) {
    return "Hi Transess, we'd like to build a complete digital growth engine for our eye clinic. Please share how to start.";
  }
  if (c.includes("home hero · schedule") || c.includes("home hero")) {
    return "Hi Transess, I'd like to schedule a growth consultation for my eye centre. Please share available slots.";
  }
  if (c.includes("home final cta") || c.includes("final cta")) {
    return "Hi Transess, I'd like to partner with you to scale our eye clinic. Please share next steps.";
  }

  // Default
  return `Hi Transess, I'd like to know more about your eyecare growth solutions (${context}). Please share details.`;
}
