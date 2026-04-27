import { createFileRoute } from "@tanstack/react-router";
import {
  Database, Users, MessageSquare, Calendar, LineChart, PhoneCall, Eye, ShieldCheck, Clock,
  Bot, Workflow, Mic, BellRing, Target, Sparkles, BarChart3, Inbox, Repeat,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/crm-conversion")({
  head: () => ({
    meta: [
      { title: "CRM & Conversion System for Eyecare — VisionGrowth" },
      { name: "description", content: "Where most agencies stop, we begin. Every eyecare lead is tracked, nurtured, and routed to consultation through structured follow-ups and pipeline analytics." },
      { property: "og:title", content: "CRM & Conversion System for Eyecare" },
      { property: "og:description", content: "Turn eyecare inquiries into consultations and surgeries with a structured CRM-driven conversion engine." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="CRM & Conversion — Our Core Strength"
      heroIcon={Database}
      title="The CRM & Conversion System"
      highlight="That Closes Eyecare Patients"
      intro="Most clinics lose 60% of leads in the gap between inquiry and consultation. Our CRM engine catches every lead, follows up on a defined cadence, and routes high-intent patients straight to the booking desk."
      heroStats={[
        { value: "60%", label: "Inquiry → consult rate" },
        { value: "<5min", label: "First-response time" },
        { value: "7-step", label: "Follow-up cadence" },
        { value: "100%", label: "Lead capture" },
      ]}
      whyEyecare={[
        { icon: Eye, title: "Eyecare decisions take weeks", desc: "From first symptom search to surgery, the average journey is 18–42 days. Without nurture, you lose them." },
        { icon: Clock, title: "Speed-to-lead is everything", desc: "Patients who get a call within 5 minutes are 8× more likely to book. Our system enforces it." },
        { icon: ShieldCheck, title: "Trust is built across touchpoints", desc: "WhatsApp reminders, doctor videos, and pre-op clarity — choreographed to reduce drop-offs." },
      ]}
      capabilities={[
        { icon: Users, title: "Centralised lead inbox", desc: "Every lead from Google, Meta, website, calls, and WhatsApp — in one pipeline." },
        { icon: PhoneCall, title: "Tele-calling SOPs", desc: "Trained scripts, objection handling, and procedure-specific qualification." },
        { icon: MessageSquare, title: "WhatsApp nurture flows", desc: "Automated, doctor-branded follow-ups that feel personal, not spammy." },
        { icon: Calendar, title: "Appointment scheduling", desc: "Live doctor calendar sync, slot reminders, and no-show recovery." },
        { icon: LineChart, title: "Pipeline analytics", desc: "Source → consult → surgery conversion visible by procedure, doctor, and channel." },
        { icon: Database, title: "Re-engagement engine", desc: "Old leads are reactivated with offers, screening camps, and educational content." },
      ]}
      patientEngagement={{
        title: "How Our CRM Engages Eyecare Patients Across the Journey",
        desc: "Eyecare conversion is a relay race — ad → form → call → WhatsApp → consult → surgery. We choreograph every handoff so no patient drops between batons.",
        points: [
          "Sub-5-minute first call from a trained eyecare counsellor",
          "Procedure-specific WhatsApp nurture (LASIK ≠ Cataract ≠ Retina)",
          "Pre-consultation videos to reduce anxiety and no-shows",
          "Doctor-name booking with calendar sync and reminders",
          "Post-consult follow-up to convert evaluations into surgeries",
          "Patient lifecycle reactivation for screening camps & second-eye procedures",
        ],
      }}
      process={[
        { step: "01", title: "Lead source integration", desc: "Connect ads, forms, calls, WhatsApp into one CRM pipeline." },
        { step: "02", title: "SOP design", desc: "Build call scripts, follow-up cadences, and qualification frameworks." },
        { step: "03", title: "Team enablement", desc: "Train your in-house counsellors or deploy our managed tele-calling team." },
        { step: "04", title: "Automation layer", desc: "WhatsApp flows, reminder sequences, and no-show recovery." },
        { step: "05", title: "Analytics & coaching", desc: "Weekly call reviews and conversion coaching for compounding gains." },
      ]}
      outcomes={[
        { metric: "60%", label: "Lead → consult rate" },
        { metric: "<5min", label: "Average response time" },
        { metric: "+42%", label: "Surgery conversion" },
        { metric: "−55%", label: "Lead leakage" },
      ]}
    />
  ),
});
