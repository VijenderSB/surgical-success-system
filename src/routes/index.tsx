import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Database,
  Globe,
  LineChart,
  MessageSquare,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Building2,
  Network,
  Hospital,
  ShieldCheck,
  Brain,
  Filter,
  Settings2,
  ChevronDown,
  HeartPulse,
  Clock,
  Megaphone,
  PenSquare,
  Award,
  Video,
  Youtube,
  Instagram,
  Facebook,
  Film,
  Play,
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
import { FlowDiagram } from "@/components/site/FlowDiagram";
import heroImage from "@/assets/hero-system.jpg";
import eyeGraphic from "@/assets/eye-graphic.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VisionGrowth — Patient Acquisition Engine for Eyecare Practices" },
      {
        name: "description",
        content:
          "Scalable growth systems for eye hospitals and clinics. Up to 70% higher footfall and 50% revenue growth via digital, content, and CRM-driven conversion.",
      },
      { property: "og:title", content: "VisionGrowth — Eyecare Growth Platform" },
      {
        property: "og:description",
        content: "End-to-end patient acquisition and CRM-driven conversion built exclusively for eyecare.",
      },
    ],
  }),
  component: Home,
});

/* ---------- EXPERTISE BANNER (declared before Home) ---------- */
function ExpertiseBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-deep py-14 text-surface-deep-foreground">
      {/* Decorative iris glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,oklch(0.16_0.05_268_/_0.5)_100%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[auto_1fr_auto]">
        {/* Eye graphic with animated rings */}
        <div className="relative mx-auto flex h-44 w-44 items-center justify-center md:h-52 md:w-52">
          <span className="absolute inset-0 animate-ping rounded-full border border-primary-glow/30" style={{ animationDuration: "3s" }} />
          <span className="absolute inset-4 rounded-full border border-primary-glow/20" />
          <span className="absolute inset-8 rounded-full border border-primary-glow/15" />
          <div className="absolute inset-0 rounded-full bg-gradient-iris" />
          <img
            src={eyeGraphic}
            alt="Stylised eye iris graphic"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative h-36 w-36 object-contain drop-shadow-[0_8px_24px_oklch(0.72_0.18_218_/_0.45)] md:h-44 md:w-44"
          />
        </div>

        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
            <Award className="h-3.5 w-3.5 text-primary-glow" />
            20 Years in Eyecare Marketing
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl lg:text-[2rem]">
            Deep Domain Expertise That Drives{" "}
            <span className="bg-gradient-to-r from-primary-glow to-[oklch(0.72_0.20_30)] bg-clip-text text-transparent">
              50% Growth in Turnover
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base lg:mx-0">
            We understand the whole eyecare dynamic — patient psychology, procedure economics, and conversion choreography — built over two decades.
          </p>
        </div>

        {/* CTA */}
        <Button
          asChild
          size="lg"
          className="h-12 bg-gradient-to-r from-primary-glow to-primary px-6 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
        >
          <Link to="/expertise">
            See Our Expertise
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

/* ---------- VIDEO CONTENT BUILDING (declared before Home) ---------- */
function VideoContent() {
  const platforms = [
    { icon: Youtube, name: "YouTube", desc: "Long-form authority — surgery explainers, patient stories, ranked for search.", color: "text-[oklch(0.62_0.22_27)]" },
    { icon: Instagram, name: "Instagram", desc: "Reels, carousels, and stories that grow followers and drive DMs into the CRM.", color: "text-[oklch(0.65_0.20_350)]" },
    { icon: Facebook, name: "Facebook", desc: "Targeted video & community pages for older, high-intent patient segments.", color: "text-[oklch(0.55_0.20_255)]" },
  ];
  const features = [
    { icon: Film, label: "Reels & Shorts" },
    { icon: Video, label: "Long-form Video" },
    { icon: Play, label: "Patient Stories" },
    { icon: Megaphone, label: "Influencer PR" },
  ];

  return (
    <section className="bg-surface-tint py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            <Video className="h-3.5 w-3.5" />
            Video Content Building
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Become the <span className="text-gradient-primary">Eyecare Influencer</span> of Your City
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete Video & Reels engine across YouTube, Instagram, and Facebook — turning your specialists into the most recognised eye doctors patients actively search for.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {platforms.map((p) => (
            <Card key={p.name} className="border-border/70 p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <p.icon className={`h-6 w-6 ${p.color}`} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-3 rounded-xl border border-border bg-gradient-soft px-4 py-3">
                    <f.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                From scripting to batch shoots to multi-platform publishing — handled end-to-end so doctors only show up to film.
              </p>
            </div>
            <Button asChild size="lg" className="h-12 px-6 text-base shadow-glow">
              <Link to="/video-content">
                Explore Video Content
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ExpertiseBanner />
        <Problem />
        <Solution />
        <Ecosystem />
        <VideoContent />
        <Differentiator />
        <Process />
        <Outcomes />
        <WhoItsFor />
        <CaseStudy />
        <DoctorHook />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary-glow/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Built exclusively for eyecare
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              We Don't Just Bring Patients —{" "}
              <span className="text-gradient-primary">We Build Scalable Growth Systems</span>
            </h1>

            <p className="mt-5 text-lg font-medium text-foreground/80 md:text-xl">
              Delivering up to <span className="font-bold text-primary">70% higher footfall</span> and{" "}
              <span className="font-bold text-primary">50% revenue growth</span>.
            </p>

            <p className="mt-3 text-base text-muted-foreground md:text-lg">
              A complete digital, content, and CRM-driven conversion ecosystem designed exclusively for eyecare.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-6 text-base shadow-glow">
                Build Your Growth Engine
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base">
                Schedule a Growth Consultation
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                "End-to-End Patient Acquisition",
                "CRM-Driven Conversion",
                "Designed for Eyecare",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/10 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
              <img
                src={heroImage}
                alt="Eyecare patient acquisition CRM dashboard"
                width={1280}
                height={1024}
                className="h-auto w-full"
              />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-elevated md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg. footfall lift</p>
                  <p className="text-lg font-bold">+70%</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-border bg-card p-4 shadow-elevated md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue growth</p>
                  <p className="text-lg font-bold">+50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. PROBLEM ---------- */
function Problem() {
  const problems = [
    { icon: Search, title: "Patients decide before visiting", desc: "Online research drives 80% of healthcare decisions today." },
    { icon: Filter, title: "Leads are not converted", desc: "Inquiries flow in but never reach consultation." },
    { icon: Clock, title: "No structured follow-up", desc: "Manual processes leak high-intent patients." },
    { icon: Megaphone, title: "Marketing is fragmented", desc: "Disconnected agencies, no unified strategy." },
  ];
  return (
    <section className="bg-surface-tint py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Eyecare Growth Has Changed — But Most Systems Haven't
          </h2>
          <p className="mt-4 text-muted-foreground">
            The biggest revenue gaps in eyecare today aren't clinical — they're operational and digital.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <Card key={p.title} className="border-border/70 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-4 border-primary bg-card px-6 py-5 shadow-soft">
          <p className="text-lg font-semibold text-foreground">
            The result: <span className="text-primary">revenue leakage despite strong clinical expertise.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. SOLUTION ---------- */
function Solution() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            <Target className="h-3.5 w-3.5" />
            The Big Idea
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            A Complete Growth System — Not Just Marketing
          </h2>
          <p className="mt-4 text-muted-foreground">
            We manage the entire patient acquisition and conversion journey, end-to-end.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-gradient-soft p-6 shadow-soft md:p-10">
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. ECOSYSTEM ---------- */
function Ecosystem() {
  const blocks = [
    {
      icon: Globe,
      title: "Digital Infrastructure",
      desc: "High-converting websites, technical SEO, and dedicated landing pages built for medical intent.",
      tags: ["Websites", "SEO", "Landing Pages"],
      to: "/digital-infrastructure" as const,
    },
    {
      icon: Rocket,
      title: "Performance Marketing",
      desc: "Google Ads & Meta campaigns engineered for high-intent eyecare patient acquisition.",
      tags: ["Google Ads", "Meta", "High-Intent Traffic"],
      to: "/performance-marketing" as const,
    },
    {
      icon: PenSquare,
      title: "Content & Authority",
      desc: "Doctor branding, social reels, and educational content that builds trust before the first call.",
      tags: ["Doctor Branding", "Reels", "Blogs"],
      to: "/content-authority" as const,
    },
  ];

  return (
    <section id="ecosystem" className="bg-gradient-hero py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The Eyecare Growth Ecosystem
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four integrated layers working as one engine. Built specifically for how eyecare patients decide.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {blocks.map((b) => (
            <Link
              key={b.title}
              to={b.to}
              className="group block"
            >
              <Card className="h-full border-border/70 p-7 shadow-soft transition-all group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-elevated">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Highlighted CRM block */}
        <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-deep p-8 text-surface-deep-foreground shadow-glow md:p-12">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Our Core Strength
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                CRM & Conversion System
              </h3>
              <p className="mt-3 max-w-xl text-white/70">
                Where most agencies stop, we begin. Every lead is tracked, nurtured, and routed to consultation through structured follow-ups and pipeline analytics.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Users, label: "Lead Tracking" },
                  { icon: MessageSquare, label: "Follow-Ups" },
                  { icon: Calendar, label: "Appointments" },
                  { icon: LineChart, label: "Analytics" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                    <f.icon className="h-4 w-4 text-primary-glow" />
                    <span className="text-sm font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button asChild size="lg" variant="outline" className="h-11 border-white/30 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white">
                  <Link to="/crm-conversion">
                    Explore CRM & Conversion System
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur">
                <Database className="h-14 w-14 text-primary-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. DIFFERENTIATOR ---------- */
function Differentiator() {
  const points = [
    { icon: Eye3, title: "Eyecare specialization", desc: "Deep domain expertise — not a generic medical marketing playbook." },
    { icon: Network, title: "Full funnel ownership", desc: "From first impression to surgery scheduling, one accountable team." },
    { icon: Database, title: "CRM-driven system", desc: "Every lead is a structured opportunity, not an inbox notification." },
    { icon: Target, title: "Conversions, not just leads", desc: "We're measured on consultations and surgeries, not vanity metrics." },
    { icon: Brain, title: "Data-backed optimization", desc: "Weekly performance reviews refine the engine continuously." },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            Why It Works
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Why This Model Works Better
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most marketing agencies optimize for traffic. We optimize for the surgery pipeline. That single difference changes how every campaign, content piece, and follow-up is designed.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-gradient-soft p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold">Outcome-aligned partnership</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Our success metric is your patient count, not your ad spend.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {points.map((p, i) => (
            <div key={p.title} className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-primary/30 hover:shadow-elevated">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                0{i + 1}
              </div>
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// alias to avoid lucide name collision (Eye is used in nav)
import { Eye as Eye3 } from "lucide-react";

/* ---------- 6. PROCESS ---------- */
function Process() {
  const steps = [
    { icon: Target, title: "Strategy & Assessment", desc: "Audit current funnel, identify revenue leaks, define goals." },
    { icon: Settings2, title: "Setup & Integration", desc: "Deploy infrastructure, CRM, tracking, and creative systems." },
    { icon: Rocket, title: "Campaign Launch", desc: "Activate omni-channel acquisition with intent-aligned creatives." },
    { icon: Users, title: "Lead Management", desc: "Structured follow-ups convert inquiries to consultations." },
    { icon: TrendingUp, title: "Optimization & Scaling", desc: "Continuous data review unlocks compounding growth." },
  ];
  return (
    <section id="process" className="bg-surface-tint py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            A Structured, Scalable Growth Process
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five proven stages — repeatable across clinics, hospitals, and chains.
          </p>
        </div>

        <div className="relative mt-14">
          {/* horizontal connector */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-card text-primary shadow-elevated">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-success text-xs font-bold text-white ring-2 ring-background">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. OUTCOMES ---------- */
function Outcomes() {
  const outcomes = [
    { stat: "+70%", label: "Higher patient footfall", icon: Users },
    { stat: "+45%", label: "Better conversion rates", icon: TrendingUp },
    { stat: "3.2×", label: "Stronger surgery pipeline", icon: HeartPulse },
    { stat: "−60%", label: "Reduced walk-in dependency", icon: Filter },
    { stat: "+35%", label: "Improved doctor productivity", icon: Clock },
  ];
  return (
    <section id="outcomes" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What This Means for Your Practice
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real outcomes that show up in your monthly reports — not vanity metrics.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {outcomes.map((o) => (
            <Card key={o.label} className="border-border/70 p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-success/40 hover:shadow-elevated">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success ring-1 ring-success/20">
                <o.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-3xl font-bold tracking-tight text-gradient-primary">
                {o.stat}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{o.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. WHO IT'S FOR ---------- */
function WhoItsFor() {
  const audiences = [
    { icon: Eye3, title: "Clinics", desc: "Build local visibility and a steady inflow of consultations." },
    { icon: Hospital, title: "Hospitals", desc: "Scale specialty procedures and surgical pipeline volume." },
    { icon: Network, title: "Multi-Location", desc: "Centralized growth system with location-level visibility." },
    { icon: Building2, title: "Chains", desc: "Standardized acquisition playbook across every center." },
  ];
  return (
    <section className="bg-surface-tint py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Built for Every Eyecare Setup
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you run a single clinic or a national chain, the system scales with you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <Card key={a.title} className="border-border/70 p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. CASE STUDY ---------- */
function CaseStudy() {
  const metrics = [
    { label: "Monthly Leads", before: "82", after: "340", delta: "+314%" },
    { label: "Lead → Consult Rate", before: "11%", after: "38%", delta: "+27pts" },
    { label: "Monthly Revenue", before: "₹18L", after: "₹47L", delta: "+161%" },
  ];
  return (
    <section id="case-study" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Real Client Outcome
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Real Impact. Measurable Growth.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A 3-location eye hospital — 9 months from kickoff to scaled pipeline.
          </p>
        </div>

        <Card className="mt-12 overflow-hidden border-border shadow-elevated">
          <div className="grid md:grid-cols-3">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`p-8 ${i < metrics.length - 1 ? "md:border-r border-border" : ""} ${i > 0 ? "border-t md:border-t-0 border-border" : ""}`}
              >
                <p className="text-sm font-medium text-muted-foreground">{m.label}</p>
                <div className="mt-5 flex items-end gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Before</p>
                    <p className="text-2xl font-semibold text-muted-foreground line-through decoration-1">{m.before}</p>
                  </div>
                  <ArrowRight className="mb-1.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary">After</p>
                    <p className="text-3xl font-bold text-foreground">{m.after}</p>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {m.delta}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border bg-surface-tint p-6 md:p-8">
            <p className="text-sm italic text-muted-foreground">
              "Within two quarters our OPD calendar was full and our cataract pipeline doubled. The CRM follow-up alone changed our economics."
            </p>
            <p className="mt-3 text-sm font-semibold">— Medical Director, Multi-specialty Eye Hospital</p>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ---------- 10. DOCTOR HOOK ---------- */
function DoctorHook() {
  return (
    <section className="bg-gradient-hero py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Let Doctors Focus on Patients —{" "}
          <span className="text-gradient-primary">We Handle Growth</span>
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Your team didn't train for a decade in ophthalmology to manage ad accounts and follow up on inbound calls.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "No marketing stress", desc: "We own the engine, end-to-end." },
            { icon: TrendingUp, title: "Predictable inflow", desc: "A consistent monthly pipeline." },
            { icon: Clock, title: "Better time utilization", desc: "Doctors do what only they can do." },
          ].map((c) => (
            <Card key={c.title} className="border-border/70 p-6 text-left shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success ring-1 ring-success/20">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. FAQ ---------- */
function FAQ() {
  const items = [
    {
      q: "How is this different from hiring a marketing agency?",
      a: "Agencies typically deliver leads or run ads. We deliver consultations and surgeries by owning the entire funnel — from acquisition to CRM follow-up to appointment scheduling.",
    },
    {
      q: "How long before we see results?",
      a: "Most practices see meaningful lead flow in 30–45 days and measurable revenue impact within 90 days. Compounding growth typically begins around month 4–6.",
    },
    {
      q: "Do you work with single-location clinics?",
      a: "Yes. Our system is modular and scales from a single clinic to multi-location chains. The same playbook applies; only the scope changes.",
    },
    {
      q: "What does the CRM include and is it ours?",
      a: "We deploy a tailored CRM with lead capture, automated nurture, appointment scheduling, and performance dashboards. Your data stays yours and is exportable at any time.",
    },
    {
      q: "Will our doctors need to be on social media?",
      a: "Doctor branding accelerates trust, but we make it lightweight — short structured shoots produce months of content. Participation is recommended, not required.",
    },
    {
      q: "How do you measure success?",
      a: "We report on cost per consultation, consultation-to-surgery rate, and revenue attributed to acquisition — not impressions or clicks.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            The questions hospital decision-makers ask before partnering with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={it.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft data-[state=open]:shadow-elevated"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- 12. FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-deep px-8 py-16 text-surface-deep-foreground shadow-glow md:px-16 md:py-24">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary-glow/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Take the next step
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Build a Predictable Growth Engine for Your Eye Care Practice
          </h2>
          <p className="mt-5 text-base text-white/70 md:text-lg">
            A 30-minute call to map your current funnel, identify revenue leaks, and design your growth roadmap.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 bg-white px-7 text-base font-semibold text-primary-deep shadow-elevated hover:bg-white/90">
              Schedule a Growth Consultation
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 border-white/30 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white">
              Download Capability Deck
            </Button>
          </div>

          <p className="mt-6 text-xs text-white/50">
            No obligation • Eyecare-only client list • Replies within 1 business day
          </p>
        </div>
      </div>
    </section>
  );
}
