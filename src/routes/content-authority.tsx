import { createFileRoute } from "@tanstack/react-router";
import {
  PenSquare, Video, Mic, BookOpen, Star, Eye, ShieldCheck, Users, Camera,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/content-authority")({
  head: () => ({
    meta: [
      { title: "Content & Authority for Eyecare Doctors — VisionGrowth" },
      { name: "description", content: "Doctor branding, social reels, and educational content that builds trust with eyecare patients before the first call." },
      { property: "og:title", content: "Content & Authority for Eyecare" },
      { property: "og:description", content: "Doctor-led content that earns patient trust before the consultation." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Content & Authority"
      heroIcon={PenSquare}
      title="Doctor Branding & Content"
      highlight="That Earns Patient Trust"
      intro="Eyecare patients pick the doctor before they pick the hospital. We build doctor-led content systems — reels, blogs, interviews — that turn your specialists into recognised authorities patients actively search for."
      heroStats={[
        { value: "10×", label: "Branded search lift" },
        { value: "+5M", label: "Monthly reel views" },
        { value: "4.9★", label: "Avg. doctor rating" },
        { value: "30+", label: "Pieces / month" },
      ]}
      whyEyecare={[
        { icon: Eye, title: "Patients trust doctors, not brands", desc: "Hospital ads convert 3× better when fronted by a recognised eye surgeon, not a logo." },
        { icon: ShieldCheck, title: "Medical content needs nuance", desc: "We know what's ethical, what's compliant, and what actually moves patients — without crossing lines." },
        { icon: Users, title: "Word-of-mouth is digital now", desc: "Reviews, reels, and testimonials are the new neighbourhood referral." },
      ]}
      capabilities={[
        { icon: Video, title: "Doctor reels & shorts", desc: "Short-form content engineered around symptoms, myths, and procedure explainers." },
        { icon: Mic, title: "Podcast & interview series", desc: "Long-form authority pieces for YouTube, Spotify, and partner platforms." },
        { icon: BookOpen, title: "SEO blog system", desc: "Patient-question-led blogs that rank for symptom and procedure searches." },
        { icon: Camera, title: "Patient story videos", desc: "Real outcomes, real voices — the most powerful conversion asset in eyecare." },
        { icon: Star, title: "Reviews & reputation", desc: "Structured Google review pipeline tied to post-consult workflows." },
        { icon: PenSquare, title: "Personal branding", desc: "Doctor LinkedIn + Instagram strategy that compounds authority over time." },
      ]}
      patientEngagement={{
        title: "How Content Engages Eyecare Patients Before They Call",
        desc: "By the time a patient picks up the phone, they've watched 4–6 videos and read 8–10 reviews. Content is the silent salesperson that decides whether they call you or a competitor.",
        points: [
          "Symptom-led reels that show up in feed exactly when patients worry",
          "Doctor explainers that answer the questions patients are too shy to ask",
          "Patient testimonials at every stage — pre-op anxiety to post-op relief",
          "Educational blogs that capture top-of-funnel symptom searches",
          "Vernacular content for local language patient segments",
          "Reputation system that turns happy patients into 5-star reviews",
        ],
      }}
      process={[
        { step: "01", title: "Doctor positioning", desc: "Identify each doctor's signature procedure, tone, and audience." },
        { step: "02", title: "Content calendar", desc: "Monthly plan across reels, blogs, podcasts, and patient stories." },
        { step: "03", title: "Production system", desc: "On-site shoots, edit pipelines, and scripting handled end-to-end." },
        { step: "04", title: "Distribution", desc: "Multi-channel publishing — Instagram, YouTube, LinkedIn, blog, WhatsApp." },
        { step: "05", title: "Authority compounding", desc: "Quarterly strategy refresh based on engagement and conversion data." },
      ]}
      outcomes={[
        { metric: "10×", label: "Doctor branded searches" },
        { metric: "+5M", label: "Monthly reel views" },
        { metric: "4.9★", label: "Average review rating" },
        { metric: "+47%", label: "Direct walk-ins" },
      ]}
    />
  ),
});
