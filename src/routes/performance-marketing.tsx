import { createFileRoute } from "@tanstack/react-router";
import {
  Rocket, Target, Megaphone, BarChart3, MousePointerClick, Filter, Eye, ShieldCheck, MapPin,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/performance-marketing")({
  head: () => ({
    meta: [
      { title: "Performance Marketing for Eyecare — Transess Technologies" },
      { name: "description", content: "Google Ads & Meta campaigns engineered for high-intent eyecare patient acquisition. Built around procedure intent, geography, and conversion economics." },
      { property: "og:title", content: "Performance Marketing for Eyecare" },
      { property: "og:description", content: "Patient acquisition campaigns tuned to how eyecare patients search, scroll, and decide." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Performance Marketing"
      heroIcon={Rocket}
      title="Google & Meta Ads"
      highlight="Engineered for Eyecare Acquisition"
      intro="Generic agencies optimise for clicks. We optimise for surgeries booked. Every ad, audience, and landing page is built around eyecare procedure intent and your real cost-per-consultation."
      heroStats={[
        { value: "−42%", label: "Cost per lead" },
        { value: "+3.4×", label: "Qualified leads" },
        { value: "8:1", label: "Avg. ROAS" },
        { value: "24h", label: "Lead-to-call SLA" },
      ]}
      whyEyecare={[
        { icon: Eye, title: "Procedure-specific intent", desc: "LASIK shoppers behave nothing like cataract patients. Audiences, creatives, and bids are tuned per procedure." },
        { icon: ShieldCheck, title: "Medical ad policies", desc: "We know exactly what Google & Meta allow for eye surgery — no bans, no learning curves." },
        { icon: MapPin, title: "Hyperlocal economics", desc: "We bid by pin code, not by city — concentrating spend where your highest-LTV patients live." },
      ]}
      capabilities={[
        { icon: Target, title: "Google Search Ads", desc: "High-intent keyword strategy: symptoms, procedures, doctor names, competitor terms." },
        { icon: Megaphone, title: "Meta lead campaigns", desc: "Awareness + lead-form combos for cataract, LASIK, and screening camps." },
        { icon: MousePointerClick, title: "YouTube & Display", desc: "Doctor-led video ads that build trust before the form fill." },
        { icon: Filter, title: "Audience engineering", desc: "Lookalikes from converted patients, not just from page visitors." },
        { icon: BarChart3, title: "Conversion tracking", desc: "Server-side tracking from ad click to surgery booked — closed-loop attribution." },
        { icon: MapPin, title: "Geo & catchment targeting", desc: "Pin-code-level bidding aligned to your hospital's real catchment area." },
      ]}
      patientEngagement={{
        title: "How We Engage Eyecare Patients in the Feed & Search",
        desc: "Eyecare patients are anxious, time-poor, and skeptical. Ads must speak their language — symptoms, fears, outcomes — not clinical jargon.",
        points: [
          "Symptom-first ad copy: 'Blurry vision after 40?' converts better than 'Cataract Services'",
          "Doctor-on-camera reels build trust faster than stock visuals",
          "Procedure cost transparency upfront reduces drop-offs",
          "Vernacular creatives (Hindi, Tamil, Telugu, etc.) for local catchments",
          "Urgency without alarm — medical ethics first, conversion second",
          "Re-engagement flows for leads who didn't book on the first call",
        ],
      }}
      process={[
        { step: "01", title: "Funnel & unit economics", desc: "Define cost-per-consultation and cost-per-surgery targets per procedure." },
        { step: "02", title: "Creative & copy system", desc: "Doctor reels, symptom hooks, and offer angles built per procedure." },
        { step: "03", title: "Campaign launch", desc: "Multi-procedure, multi-geo Google + Meta architecture." },
        { step: "04", title: "Tracking & attribution", desc: "Server-side events, CRM integration, and offline conversion uploads." },
        { step: "05", title: "Weekly optimisation", desc: "Bid, audience, creative, and landing-page tests on a weekly cadence." },
      ]}
      outcomes={[
        { metric: "−42%", label: "Cost per qualified lead" },
        { metric: "+3.4×", label: "Lead volume" },
        { metric: "8:1", label: "Return on ad spend" },
        { metric: "+62%", label: "Surgery conversion" },
      ]}
    />
  ),
});
