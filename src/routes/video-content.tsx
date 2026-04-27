import { createFileRoute } from "@tanstack/react-router";
import {
  Video, Youtube, Instagram, Facebook, Film, Camera, Megaphone, Sparkles, Mic, Eye, ShieldCheck, Users,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/video-content")({
  head: () => ({
    meta: [
      { title: "Video Content Building for Eyecare Doctors — VisionGrowth" },
      { name: "description", content: "Video & Reels production across YouTube, Instagram & Facebook — positioning eyecare doctors as recognised influencers in their region." },
      { property: "og:title", content: "Video Content Building — Become an Eyecare Influencer" },
      { property: "og:description", content: "End-to-end video & reels system for eye doctors across YouTube, Instagram, and Facebook." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Video Content Building"
      heroIcon={Video}
      title="Video & Reels That Make You"
      highlight="The Eyecare Influencer of Your City"
      intro="From scripting to shooting to multi-platform publishing — we build a video engine across YouTube, Instagram, and Facebook that turns eye specialists into the recognised face of eyecare in their region."
      heroStats={[
        { value: "20+", label: "Reels / month" },
        { value: "4–8", label: "YouTube videos / month" },
        { value: "+5M", label: "Monthly views" },
        { value: "10×", label: "Doctor recall lift" },
      ]}
      whyEyecare={[
        { icon: Eye, title: "Patients learn from video first", desc: "Before booking an eye consultation, patients watch reels on symptoms, surgeries, and outcomes — not text articles." },
        { icon: ShieldCheck, title: "Trust is built face-to-face", desc: "A doctor speaking on camera does in 30 seconds what a brochure can't do in 30 minutes." },
        { icon: Users, title: "Local influence wins patients", desc: "Being the recognised eye doctor on Instagram & YouTube in your city compounds organic walk-ins." },
      ]}
      capabilities={[
        { icon: Film, title: "Reels production", desc: "Hook-driven 15–60s reels on symptoms, myths, and procedures — engineered for reach." },
        { icon: Youtube, title: "YouTube long-form", desc: "Authority-building explainers, patient stories, and surgery walkthroughs optimised for search." },
        { icon: Instagram, title: "Instagram strategy", desc: "Reels, carousels, and stories that grow followers and drive DMs into the CRM." },
        { icon: Facebook, title: "Facebook video & community", desc: "Targeted video campaigns and community pages for older, high-intent patient segments." },
        { icon: Camera, title: "On-site shoot system", desc: "Monthly batch shoots at your hospital — scripts, lighting, teleprompter, and edit handled end-to-end." },
        { icon: Megaphone, title: "Influencer positioning", desc: "PR, collaborations, and cross-promotion that establish doctors as the go-to eyecare voice." },
      ]}
      patientEngagement={{
        title: "How Video Turns You Into the Eyecare Authority Patients Choose",
        desc: "Patients don't compare hospitals — they compare doctors they recognise. A consistent video presence on YouTube, Instagram, and Facebook builds the familiarity that wins consultations before competitors are even considered.",
        points: [
          "Symptom-led reels that surface exactly when patients are anxious and searching",
          "YouTube explainers that rank for cataract, LASIK, and retina queries",
          "Patient testimonial videos — the highest-converting asset in eyecare",
          "Behind-the-surgery shorts that demystify procedures and reduce hesitation",
          "Vernacular & regional language video for local patient segments",
          "Doctor-led talk shows and reaction videos that humanise the specialist",
        ],
      }}
      process={[
        { step: "01", title: "Doctor positioning", desc: "Define each doctor's signature topic, tone, and target patient segment." },
        { step: "02", title: "Content calendar", desc: "Monthly plan across YouTube, Instagram Reels, and Facebook video." },
        { step: "03", title: "Batch shoot day", desc: "One hospital visit produces 20–30 pieces of edited content." },
        { step: "04", title: "Edit & publish", desc: "Platform-specific edits, captions, hooks, thumbnails, and SEO metadata." },
        { step: "05", title: "Amplify & analyse", desc: "Boost top performers, track watch-time, and feed insights into the next calendar." },
      ]}
      outcomes={[
        { metric: "+5M", label: "Monthly video views" },
        { metric: "10×", label: "Branded doctor searches" },
        { metric: "+62%", label: "Inbound DM leads" },
        { metric: "+40%", label: "Walk-ins citing video" },
      ]}
    />
  ),
});
