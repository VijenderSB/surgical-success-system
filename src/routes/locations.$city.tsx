import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Star,
  TrendingUp,
  Building2,
  Stethoscope,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getCityBySlug } from "@/data/cities";

const SITE_URL = "https://visiongrowth.lovable.app";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const city = getCityBySlug(params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Location Not Found" }] };
    const { city } = loaderData;
    const title = `Eyecare Marketing Agency in ${city.name} | LASIK, SMILE Pro & Cataract Growth`;
    const description = `Patient acquisition agency for eye hospitals & ophthalmologists in ${city.name}, ${city.state}. SEO, Google Ads, video & CRM systems for LASIK, Contoura, SMILE Pro, FLACS & premium IOL practices. Get a free growth audit.`;
    const keywords = [
      `eyecare marketing ${city.name}`,
      `LASIK marketing ${city.name}`,
      `eye hospital digital marketing ${city.name}`,
      `ophthalmology SEO ${city.name}`,
      `cataract patient acquisition ${city.name}`,
      `SMILE Pro marketing ${city.name}`,
      `eye clinic Google Ads ${city.name}`,
      `${city.state} eyecare growth agency`,
    ].join(", ");
    const url = `${SITE_URL}/locations/${city.slug}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "geo.region", content: `IN-${city.state.slice(0, 2).toUpperCase()}` },
        { name: "geo.placename", content: city.name },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:locale", content: "en_IN" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: `VisionGrowth — Eyecare Marketing Agency, ${city.name}`,
            description,
            url,
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: { "@type": "State", name: city.state },
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: city.name,
              addressRegion: city.state,
              postalCode: city.pinPrefix,
              addressCountry: "IN",
            },
            medicalSpecialty: "Ophthalmology",
            knowsAbout: city.procedures,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-5xl font-bold">City not found</h1>
          <p className="mt-3 text-muted-foreground">
            We couldn't find a location page for that city.
          </p>
          <Button asChild className="mt-6">
            <Link to="/locations">Browse all cities</Link>
          </Button>
        </div>
      </div>
    );
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
          <Button
            className="mt-6"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Retry
          </Button>
        </div>
      </div>
    );
  },
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();

  const services = [
    { icon: Search, title: `SEO for Eye Hospitals in ${city.name}`, desc: `Rank #1 for "best LASIK ${city.name}", "cataract surgeon ${city.name}" and 200+ commercial keywords.` },
    { icon: TrendingUp, title: "Google & Meta Performance Ads", desc: `Hyper-local campaigns targeting ${city.landmarks.slice(0, 2).join(", ")} and surrounding pin codes.` },
    { icon: Building2, title: "Google Business Profile Domination", desc: `Win the ${city.name} map pack with review velocity, GBP posts, and Q&A optimization.` },
    { icon: Stethoscope, title: "Procedure-Specific Funnels", desc: `Dedicated landing pages for ${city.procedures.join(", ")} with ${city.name}-specific social proof.` },
    { icon: Sparkles, title: "Reels & Video Authority", desc: `Doctor-led video content in regional languages — proven to lift bookings 2-3× in ${city.name}.` },
    { icon: ShieldCheck, title: "WhatsApp + CRM Speed-to-Lead", desc: "Sub-60-second lead response — the single biggest conversion lever for premium eyecare." },
  ];

  const faqs = [
    {
      q: `How do you market an eye hospital in ${city.name}?`,
      a: `We deploy a 5-layer system: hyper-local SEO targeting ${city.landmarks[0]} and adjoining areas, Google & Meta performance ads, Google Business Profile dominance, doctor-led video content, and a WhatsApp-first CRM. Most ${city.name} clinics see 40-70% footfall lift in 90 days.`,
    },
    {
      q: `Which procedures convert best in ${city.name}?`,
      a: `Based on our work across ${city.state}, the highest-ROI procedures in ${city.name} are ${city.procedures.join(", ")}. Premium IOL and refractive surgery (LASIK, SMILE Pro, Contoura) consistently deliver the strongest unit economics.`,
    },
    {
      q: `What's the typical investment for eyecare marketing in ${city.name}?`,
      a: `${city.tier} cities like ${city.name} typically deploy ₹1.5L-₹6L/month across paid media, SEO, content & CRM tooling. We build the plan around your current footfall, target procedures, and 12-month revenue goal — not a fixed package.`,
    },
    {
      q: `How long until we see results?`,
      a: `Performance ads & WhatsApp CRM start delivering qualified leads in week 1-2. SEO and content authority compound from month 3 onwards. Most ${city.name} practices cross break-even on marketing spend within 60-90 days.`,
    },
    {
      q: `Do you work exclusively with one clinic per city?`,
      a: `Yes. We work with only one eyecare brand per ${city.name} catchment to avoid conflict of interest. First-mover advantage matters — once we partner, your competitors cannot work with us.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-6 pt-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link to="/" className="hover:text-foreground">Home</Link></li>
          <li>/</li>
          <li><Link to="/locations" className="hover:text-foreground">Locations</Link></li>
          <li>/</li>
          <li className="text-foreground">{city.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-surface-tint" />
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-success">
            <MapPin className="h-3.5 w-3.5" />
            {city.tier} · {city.state} · {city.region} India
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Eyecare Marketing Agency in{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              {city.name}
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground md:text-xl">
            {city.intro} VisionGrowth builds patient acquisition systems for eye hospitals, ophthalmologists & refractive surgeons across {city.name} and {city.state} — covering {city.landmarks.slice(0, 3).join(", ")} and beyond.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-soft">
              <a href="#contact">
                Book a {city.name} Growth Audit <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+919999999999">
                <Phone className="mr-2 h-4 w-4" /> Call Our {city.region} Team
              </a>
            </Button>
          </div>

          {/* Stat strip */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: "+70%", l: "Avg. footfall lift" },
              { v: "+50%", l: "Revenue growth in 12 months" },
              { v: "<60s", l: "Lead response time" },
              { v: "Top 3", l: `Google rankings in ${city.name}` },
            ].map((s) => (
              <Card key={s.l} className="border-border/60 bg-card/50 p-5">
                <div className="text-2xl font-bold text-success md:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="border-t border-border/60 bg-surface-tint/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How we grow eyecare practices in {city.name}
            </h2>
            <p className="mt-3 text-muted-foreground">
              A complete patient acquisition stack — engineered for {city.tier} dynamics, {city.state} patient behaviour, and {city.name}'s competitive set.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="border-border/60 bg-card p-6 transition hover:border-success/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local relevance: landmarks & hubs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Serving every eyecare hub in {city.name}
              </h2>
              <p className="mt-3 text-muted-foreground">
                Our hyper-local SEO and Google Ads target patients in:
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {city.hospitalsHubs.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-success" />
                    <span>{h}</span>
                  </li>
                ))}
                {city.landmarks.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-success" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Procedures we scale in {city.name}
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every funnel is tuned to {city.name}'s patient mix and willingness-to-pay:
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[...new Set([...city.procedures, "LASIK", "Contoura", "InnovEyes", "SMILE Pro", "EDOF MICS", "FLACS", "Premium IOL"])].map((p) => (
                  <span key={p} className="rounded-full border border-success/30 bg-success/5 px-3 py-1 text-xs font-medium text-success">
                    {p}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-border/60 bg-card p-5">
                <div className="flex items-center gap-1 text-success">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-success" />)}
                </div>
                <p className="mt-3 text-sm italic text-muted-foreground">
                  "VisionGrowth doubled our LASIK consults in {city.name} within four months. Their {city.region} India playbook is unmatched."
                </p>
                <p className="mt-2 text-xs font-medium">— Medical Director, {city.tier} Eye Hospital, {city.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-surface-tint/40 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Eyecare marketing FAQs — {city.name}
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to dominate eyecare search in {city.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We work with only one eyecare brand per {city.name} catchment. Book your free growth audit before a competitor locks the slot.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="shadow-soft">
              <a href="mailto:hello@visiongrowth.in">Request {city.name} Audit</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/locations">See Other Cities</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
