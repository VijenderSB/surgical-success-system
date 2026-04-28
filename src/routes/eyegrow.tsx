import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Database,
  Megaphone,
  PenSquare,
  Video,
  Users,
  LineChart,
  ShieldCheck,
  Rocket,
  Target,
  Layers,
  CheckCircle2,
  Eye,
  Network,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useLeadForm } from "@/components/site/LeadFormDialog";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { buildPageMeta, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import eyeGrowHero from "@/assets/eyegrow-hero.jpg";

export const Route = createFileRoute("/eyegrow")({
  head: () => {
    const title = "eyGrow™ — End-to-End Eyecare Growth System | Transess Technologies";
    const description =
      "eyGrow™ is the proprietary growth system for eye hospitals — combining digital infrastructure, performance marketing, content authority, video, and the eyFLOW CRM into one integrated engine for scalable patient acquisition.";
    const base = buildPageMeta({
      title,
      description,
      path: "/eyegrow",
      keywords: [
        "eyGrow",
        "eyecare growth system",
        "eye hospital growth platform",
        "ophthalmology marketing system",
        "end-to-end eyecare marketing",
      ],
    });
    return {
      ...base,
      scripts: [
        serviceJsonLd({
          name: "eyGrow™ — Eyecare Growth System",
          serviceType: "End-to-End Healthcare Growth Platform",
          description,
          path: "/eyegrow",
        }),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "eyGROW", path: "/eyegrow" },
        ]),
      ],
    };
  },
  component: EyeGrowPage,
});

const pillars = [
  {
    icon: Database,
    title: "Digital Infrastructure",
    desc: "High-conversion website, tracking, and landing pages — the foundation every campaign runs on.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    desc: "Procedure-led Google & Meta ads engineered for cataract, LASIK, retina, and premium IOLs.",
  },
  {
    icon: PenSquare,
    title: "Content & Authority",
    desc: "SEO + thought-leadership content that earns trust and ranks for high-intent eyecare queries.",
  },
  {
    icon: Video,
    title: "Video Content Engine",
    desc: "Doctor explainers and patient stories — short shoots producing months of conversion-ready content.",
  },
  {
    icon: Users,
    title: "eyFLOW CRM & Conversion",
    desc: "Eyecare-specific CRM with sub-5-min response, 7-step nurture, and inquiry → consult tracking.",
  },
  {
    icon: LineChart,
    title: "Growth Analytics",
    desc: "Unified dashboards on cost-per-consultation, conversion ratios, and revenue attribution.",
  },
];

const outcomes = [
  { value: "End-to-End", label: "Acquisition → Surgery" },
  { value: "1 System", label: "5 Integrated Modules" },
  { value: "60%", label: "Inquiry → Consult Rate" },
  { value: "Eyecare-Only", label: "Built for Ophthalmology" },
];

const why = [
  {
    icon: Layers,
    title: "One integrated stack",
    desc: "No more stitching agencies, freelancers, and tools. eyGrow™ unifies every layer of growth under one operating system.",
  },
  {
    icon: Target,
    title: "Built for eyecare only",
    desc: "Every workflow, ad template, CRM stage, and content module is purpose-built for cataract, LASIK, retina and premium procedures.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable to revenue",
    desc: "We measure consultations, surgeries, and revenue — not impressions. Every module is tied to a downstream outcome.",
  },
  {
    icon: Workflow,
    title: "Modular & scalable",
    desc: "Start with one module or deploy the full system. Scales from a single clinic to multi-location hospital chains.",
  },
];

const modules = [
  { to: "/digital-infrastructure" as const, label: "Digital Infrastructure", desc: "Website + tracking foundation" },
  { to: "/performance-marketing" as const, label: "Performance Marketing", desc: "Procedure-led paid acquisition" },
  { to: "/content-authority" as const, label: "Content & Authority", desc: "SEO + trust-building content" },
  { to: "/video-content" as const, label: "Video Content Building", desc: "Doctor & patient story engine" },
  { to: "/crm-conversion" as const, label: "eyFLOW CRM & Conversion", desc: "Lead → consultation engine" },
];

function EyeGrowPage() {
  const { open } = useLeadForm();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(900px_circle_at_15%_-10%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%),radial-gradient(700px_circle_at_85%_10%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              eyGrow™ — Eyecare Growth System
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              The End-to-End{" "}
              <span className="text-gradient-primary">Growth Operating System</span>{" "}
              Built Exclusively for Eyecare
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Powered by <strong className="text-foreground">eyGrow™</strong> — our proprietary
              ecosystem that fuses digital infrastructure, performance marketing, content
              authority, video, and the eyFLOW CRM into one accountable engine for
              structured patient acquisition and scalable growth.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-base shadow-soft" onClick={() => open("eyGrow Hero · Build")}>
                Build My Growth System
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <WhatsAppCTA context="eyGrow Hero" label="Talk on WhatsApp" />
            </div>

            <div className="relative mt-14">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-elegant">
                <img
                  src={eyeGrowHero}
                  alt="eyGrow ecosystem — interconnected modules for eyecare growth: marketing, content, video, CRM and analytics around a central eye"
                  width={1920}
                  height={1080}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
              {outcomes.map((o) => (
                <div key={o.label} className="rounded-xl border border-border/60 bg-card/60 p-5 text-center backdrop-blur">
                  <div className="text-2xl font-bold text-gradient-primary md:text-3xl">{o.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground md:text-sm">{o.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Network className="h-3.5 w-3.5" /> Inside eyGrow™
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Six modules. One unified growth engine.
            </h2>
            <p className="mt-4 text-muted-foreground">
              eyGrow™ replaces the patchwork of agencies and tools with a single, accountable
              system — every module engineered for ophthalmology and connected to revenue.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title} className="group p-6 transition-all hover:shadow-elegant">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-border/60 bg-muted/20 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Why eyGrow™ is different
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Build What Most Eye Centres <span className="text-gradient-primary">Can't</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not an agency. Not a tool. A complete growth operating system built specifically
              for eye hospitals and ophthalmology chains — engineered to deliver outcomes
              independent operators and generic agencies simply can't replicate.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {why.map((w) => (
              <Card key={w.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES / EXPLORE */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Explore the eyGrow™ modules</h2>
            <p className="mt-4 text-muted-foreground">
              Deploy the full system or start with the module that solves your biggest gap.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <Link
                key={m.to}
                to={m.to}
                className="group flex items-center justify-between rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-soft"
              >
                <div>
                  <div className="font-semibold group-hover:text-primary">{m.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{m.desc}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-t border-border/60 bg-muted/20 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-primary/20 bg-card p-8 shadow-elegant md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold md:text-3xl">The eyGrow™ Promise</h3>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {[
                    "One integrated system, one accountable partner",
                    "Every module tied to consultations & revenue",
                    "Eyecare-specific playbooks, not generic templates",
                    "Modular deployment — scale at your pace",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Rocket className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Ready to run your practice on <span className="text-gradient-primary">eyGrow™</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a 30-minute discovery call. We'll map your funnel, identify gaps, and show
            you exactly how the eyGrow™ system applies to your hospital.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base shadow-soft" onClick={() => open("eyGrow Final CTA")}>
              Book Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <WhatsAppCTA context="eyGrow Final CTA" label="WhatsApp Us" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
