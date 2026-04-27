import { createFileRoute } from "@tanstack/react-router";
import {
  Globe, Search, Smartphone, Gauge, MapPin, ShieldCheck, Layout, FileText, Eye,
} from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import { buildPageMeta, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/digital-infrastructure")({
  head: () => {
    const title = "Eyecare Website Design & SEO Services in India | Transess Technologies";
    const description = "High-converting eyecare websites, technical SEO, schema-rich procedure pages and local SEO built for how patients search for cataract, LASIK, glaucoma & retina care in India.";
    const base = buildPageMeta({
      title,
      description,
      path: "/digital-infrastructure",
      keywords: ["eye hospital website design", "ophthalmology SEO India", "LASIK landing page", "cataract SEO", "medical schema markup", "local SEO eye clinic"],
    });
    return {
      ...base,
      scripts: [
        serviceJsonLd({ name: "Digital Infrastructure for Eyecare", serviceType: "Website Design, SEO & Landing Pages", description, path: "/digital-infrastructure" }),
        breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Digital Infrastructure", path: "/digital-infrastructure" }]),
      ],
    };
  },
  component: () => (
    <ServicePage
      eyebrow="Digital Infrastructure"
      heroIcon={Globe}
      title="Websites, SEO & Landing Pages"
      highlight="Built for Eyecare Patient Intent"
      intro="Your digital infrastructure is the first consultation. We design every page, search query, and load time to convert eyecare intent — cataract, LASIK, glaucoma, retina — into booked appointments."
      heroStats={[
        { value: "3.2×", label: "Avg. site conversion lift" },
        { value: "<2s", label: "Page load on mobile" },
        { value: "Top 3", label: "Local SEO rankings" },
        { value: "100%", label: "Mobile-first design" },
      ]}
      whyEyecare={[
        { icon: Eye, title: "Patients search by symptom, not service", desc: "'Blurry vision after 40' converts differently than 'cataract surgery'. We build intent-mapped pages for both." },
        { icon: ShieldCheck, title: "Trust must be earned in seconds", desc: "Doctor credentials, hospital accreditations, real outcomes — surfaced in the first scroll." },
        { icon: MapPin, title: "Eyecare is hyperlocal", desc: "Most patients pick a clinic within 8 km. Our geo-SEO captures every neighbourhood query." },
      ]}
      capabilities={[
        { icon: Layout, title: "Conversion-first websites", desc: "Hospital-grade design system with booking, WhatsApp, and call CTAs on every section." },
        { icon: Search, title: "Technical & medical SEO", desc: "Schema for medical organizations, doctors, FAQs, and procedures — indexed for high-intent searches." },
        { icon: FileText, title: "Procedure landing pages", desc: "Dedicated pages for LASIK, Cataract, Glaucoma, Squint, Retina — each engineered to convert." },
        { icon: MapPin, title: "Local & city SEO", desc: "City pages, Google Business profile optimisation, and neighbourhood targeting." },
        { icon: Gauge, title: "Speed & Core Web Vitals", desc: "Sub-2-second mobile loads. Google rewards this — and so do impatient patients." },
        { icon: Smartphone, title: "Mobile-first conversion", desc: "85% of eyecare traffic is mobile. Every flow is designed thumb-first." },
      ]}
      patientEngagement={{
        title: "How Our Infrastructure Engages Eyecare Patients",
        desc: "Eyecare is a high-consideration, low-frequency decision. The website must educate, reassure, and convert in a single visit — usually on mobile, often at night.",
        points: [
          "Symptom-led entry pages that match what worried patients actually type",
          "Doctor profiles that build credibility before the patient calls",
          "Procedure explainers with visuals — not jargon",
          "Instant booking + WhatsApp fallback for low-friction conversion",
          "Real patient outcomes and testimonials at decision moments",
          "Insurance, EMI, and pricing transparency where it matters",
        ],
      }}
      process={[
        { step: "01", title: "Audit & intent mapping", desc: "Identify every search query, symptom, and procedure your ideal patient types." },
        { step: "02", title: "Information architecture", desc: "Map pages to patient journey stages — awareness, consideration, booking." },
        { step: "03", title: "Design & build", desc: "Mobile-first, accessibility-compliant, brand-aligned medical design." },
        { step: "04", title: "SEO & schema", desc: "Technical SEO, medical schema, local optimisation, and Core Web Vitals." },
        { step: "05", title: "Launch & iterate", desc: "Heatmaps, A/B tests, and weekly conversion reviews." },
      ]}
      outcomes={[
        { metric: "+185%", label: "Organic traffic in 6 months" },
        { metric: "3.2×", label: "Booking conversion rate" },
        { metric: "Top 3", label: "Local pack rankings" },
        { metric: "<2s", label: "Mobile load time" },
      ]}
    />
  ),
});
