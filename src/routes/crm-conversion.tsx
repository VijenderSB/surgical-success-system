import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Database,
  Users,
  MessageSquare,
  Calendar,
  LineChart,
  PhoneCall,
  Eye,
  ShieldCheck,
  Clock,
  Sparkles,
  BarChart3,
  Inbox,
  Repeat,
  ArrowRight,
  CheckCircle2,
  CalendarClock,
  UserCheck,
  Percent,
  Thermometer,
  Stethoscope,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useLeadForm } from "@/components/site/LeadFormDialog";
import {
  KpiStripSnapshot,
  FunnelSnapshot,
  EngagementSnapshot,
  RevenueSnapshot,
  MiniSmartInbox,
  MiniReactivation,
  MiniDoctorPnl,
  MiniFollowUpScreen,
  MiniAgentPerformance,
  MiniWhatsappCrm,
  MiniConversionRatio,
  MiniTempDashboard,
  MiniTreatmentLeads,
  MiniStagePipeline,
} from "@/components/site/CrmSnapshots";

import { buildPageMeta, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/crm-conversion")({
  head: () => {
    const title = "Eyecare CRM & Lead Conversion System for Hospitals | Transess Technologies";
    const description = "Eyecare-specific CRM that tracks every inquiry, automates 7-step follow-ups, and routes high-intent patients to consultation — lifting inquiry-to-consult rates to 60% with sub-5-minute response.";
    const base = buildPageMeta({
      title,
      description,
      path: "/crm-conversion",
      keywords: ["eyecare CRM", "eye hospital lead management", "ophthalmology lead conversion", "WhatsApp CRM eyecare", "patient follow-up system"],
    });
    return {
      ...base,
      scripts: [
        serviceJsonLd({ name: "CRM & Conversion System for Eyecare", serviceType: "Healthcare CRM & Lead Conversion", description, path: "/crm-conversion" }),
        breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "CRM & Conversion", path: "/crm-conversion" }]),
      ],
    };
  },
  component: CrmConversionPage,
});

/* ---------------- DATA ---------------- */

const heroStats = [
  { value: "60%", label: "Inquiry → consult rate" },
  { value: "<5min", label: "First-response time" },
  { value: "7-step", label: "Follow-up cadence" },
  { value: "100%", label: "Lead capture" },
];

const whyEyecare = [
  {
    icon: Eye,
    title: "Eyecare decisions take weeks",
    desc: "From first symptom search to surgery, the average journey is 18–42 days. Without nurture, you lose them.",
  },
  {
    icon: Clock,
    title: "Speed-to-lead is everything",
    desc: "Patients who get a call within 5 minutes are 8× more likely to book. Our system enforces it.",
  },
  {
    icon: ShieldCheck,
    title: "Trust is built across touchpoints",
    desc: "WhatsApp reminders, doctor videos, and pre-op clarity — choreographed to reduce drop-offs.",
  },
];

const capabilities = [
  { icon: Users, title: "Centralised lead inbox", desc: "Every lead from Google, Meta, website, calls, and WhatsApp — in one pipeline." },
  { icon: PhoneCall, title: "Tele-calling SOPs", desc: "Trained scripts, objection handling, and procedure-specific qualification." },
  { icon: MessageSquare, title: "WhatsApp nurture flows", desc: "Automated, doctor-branded follow-ups that feel personal, not spammy." },
  { icon: Calendar, title: "Appointment scheduling", desc: "Live doctor calendar sync, slot reminders, and no-show recovery." },
  { icon: LineChart, title: "Pipeline analytics", desc: "Source → consult → surgery conversion visible by procedure, doctor, and channel." },
  { icon: Database, title: "Re-engagement engine", desc: "Old leads are reactivated with offers, screening camps, and educational content." },
];

const patientEngagement = {
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
};

const process = [
  { step: "01", title: "Lead source integration", desc: "Connect ads, forms, calls, WhatsApp into one CRM pipeline." },
  { step: "02", title: "SOP design", desc: "Build call scripts, follow-up cadences, and qualification frameworks." },
  { step: "03", title: "Team enablement", desc: "Train your in-house counsellors or deploy our managed tele-calling team." },
  { step: "04", title: "Automation layer", desc: "WhatsApp flows, reminder sequences, and no-show recovery." },
  { step: "05", title: "Analytics & coaching", desc: "Weekly call reviews and conversion coaching for compounding gains." },
];

const outcomes = [
  { metric: "60%", label: "Lead → consult rate" },
  { metric: "<5min", label: "Average response time" },
  { metric: "+42%", label: "Surgery conversion" },
  { metric: "−55%", label: "Lead leakage" },
];

type FeatureItem = {
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  visual: React.ReactNode;
};

const uniqueFeatures: FeatureItem[] = [
  { icon: CalendarClock, tag: "Cadence", title: "Follow-Up Screen", desc: "Counsellor-friendly screen showing every patient due today, tomorrow, and this week — with one-click WhatsApp, call, and re-schedule actions.", visual: <MiniFollowUpScreen /> },
  { icon: UserCheck, tag: "Team", title: "Agent-Wise Performance", desc: "Daily leaderboard of calls made, follow-ups closed, and conversions per counsellor — surface top performers and coach the rest.", visual: <MiniAgentPerformance /> },
  { icon: MessageSquare, tag: "Omnichannel", title: "WhatsApp CRM Screen", desc: "Native WhatsApp inbox with patient timeline, doctor-branded templates, and assignment routing — every chat tied to the CRM record.", visual: <MiniWhatsappCrm /> },
  { icon: Percent, tag: "Conversion", title: "Success vs Work-Up Ratio", desc: "Live conversion split between surgeries closed and patients still in work-up — instantly see where the pipeline is healthy or stuck.", visual: <MiniConversionRatio /> },
  { icon: Thermometer, tag: "Lead Temp", title: "Temperature Dashboard", desc: "Hot, warm, and cold buckets refreshed in real time so counsellors always work the highest-intent patient first.", visual: <MiniTempDashboard /> },
  { icon: Stethoscope, tag: "Treatment", title: "Treatment Lead Dashboard", desc: "Lead volumes split by Cataract, LASIK, Retina, Glaucoma, and more — plan capacity and campaigns by procedure demand.", visual: <MiniTreatmentLeads /> },
  { icon: GitBranch, tag: "Stage", title: "Stage Pipeline", desc: "Track every patient through Consultation Done → Follow-Up → Case Closed with stage-wise drop-off and time-in-stage analytics.", visual: <MiniStagePipeline /> },
  { icon: Inbox, tag: "Unified", title: "Unified Smart Inbox", desc: "Calls, WhatsApp, Instagram DMs, Google forms, walk-ins — one inbox, one patient timeline, zero leakage between channels.", visual: <MiniSmartInbox /> },
  { icon: Repeat, tag: "Reactivation", title: "Second-Eye & Recall Engine", desc: "Automatically re-engages post-op patients for second-eye procedures, annual checkups, and family screening camps.", visual: <MiniReactivation /> },
  { icon: BarChart3, tag: "Revenue View", title: "Doctor & Procedure P&L", desc: "Live dashboards show footfall, conversion, and revenue split by doctor, procedure, channel, and city — end-to-end ROI.", visual: <MiniDoctorPnl /> },
];

/* ---------------- PAGE ---------------- */

function CrmConversionPage() {
  const { open } = useLeadForm();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-primary-glow/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  CRM &amp; Conversion — Our Core Strength
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                  The CRM &amp; Conversion System{" "}
                  <span className="text-gradient-primary">That Closes Eyecare Patients</span>
                </h1>
                <p className="mt-5 text-lg text-muted-foreground md:text-xl">
                  Most clinics lose 60% of leads in the gap between inquiry and consultation. Our
                  CRM engine catches every lead, follows up on a defined cadence, and routes
                  high-intent patients straight to the booking desk.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="h-12 px-6 text-base shadow-glow" onClick={() => open("CRM hero")}>
                    Schedule a Growth Consultation
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
                    <Link to="/expertise">See Our Eyecare Expertise</Link>
                  </Button>
                  <WhatsAppCTA context="CRM hero" />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/10 blur-2xl" />
                <Card className="border-border/70 p-8 shadow-elevated">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                    <Database className="h-7 w-7" />
                  </div>
                  <p className="mt-5 text-sm font-medium text-muted-foreground">
                    Built exclusively for eyecare
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {heroStats.map((s) => (
                      <div key={s.label} className="rounded-xl border border-border bg-gradient-soft p-4">
                        <p className="text-2xl font-bold text-primary">{s.value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* WHY EYECARE — paired with KPI snapshot */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Why It's Different for{" "}
                  <span className="text-gradient-primary">Eyecare Patients</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Eyecare patients don't behave like generic healthcare audiences. Engagement must
                  be tuned to how they research, decide, and choose a doctor.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-1">
                  {whyEyecare.map((w) => (
                    <Card
                      key={w.title}
                      className="border-border/70 p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <w.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">{w.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <KpiStripSnapshot />
                <p className="mt-3 text-center text-[11px] text-muted-foreground">
                  * Live overview from the Transess Eyecare CRM — sample data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES — paired with funnel snapshot */}
        <section className="bg-surface-tint py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
              <div className="lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Deliver</h2>
                <p className="mt-4 text-muted-foreground">
                  Every capability is engineered to convert eyecare intent into consultations.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {capabilities.map((c) => (
                    <Card
                      key={c.title}
                      className="border-border/70 p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3 text-base font-semibold">{c.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="lg:order-1 lg:sticky lg:top-24">
                <FunnelSnapshot />
                <p className="mt-3 text-center text-[11px] text-muted-foreground">
                  * Pipeline view by procedure &amp; doctor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UNIQUE FEATURES — each card includes a mini snapshot */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                What Makes Our CRM Different
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Unique CRM Capabilities{" "}
                <span className="text-gradient-primary">
                  Built to Lift Eye Centre Footfall &amp; Revenue
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Beyond a generic pipeline, our CRM is engineered around how eyecare patients
                decide — combining AI agents, omnichannel outreach, and procedure-aware
                automations that compound footfall and surgery revenue month over month.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {uniqueFeatures.map((f) => (
                <Card
                  key={f.title}
                  className="group relative overflow-hidden border-border/70 p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                    <div className="mt-4">{f.visual}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PATIENT ENGAGEMENT — paired with engagement snapshot */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-stretch gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-deep p-8 text-surface-deep-foreground shadow-glow md:p-12">
                <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
                    <Eye className="h-3.5 w-3.5" />
                    Eyecare Patient Engagement
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                    {patientEngagement.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-white/70">{patientEngagement.desc}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {patientEngagement.points.map((p) => (
                      <div
                        key={p}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                        <span className="text-sm">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <EngagementSnapshot />
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-surface-tint py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How We Execute</h2>
              <p className="mt-4 text-muted-foreground">
                A repeatable process refined over 20 years in eyecare marketing.
              </p>
            </div>
            <div className="mt-12 space-y-3">
              {process.map((p) => (
                <div
                  key={p.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-primary/30 hover:shadow-elevated"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                    {p.step}
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

        {/* OUTCOMES — paired with revenue snapshot */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {outcomes.map((o) => (
                  <Card key={o.label} className="border-border/70 p-6 text-center shadow-soft">
                    <p className="text-3xl font-bold text-gradient-primary md:text-4xl">{o.metric}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
                  </Card>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Compounding Growth,{" "}
                  <span className="text-gradient-primary">Month After Month</span>
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Revenue, leads, and conversion rates trend upward as the CRM learns your
                  procedures, doctors, and patient mix.
                </p>
                <div className="mt-5">
                  <RevenueSnapshot />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-deep p-10 text-center text-surface-deep-foreground shadow-glow md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Build a Predictable Growth Engine for Your Eye Care Practice
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Talk to our eyecare growth specialists. We'll map the patient journey, identify
              revenue leaks, and design your system.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-6 text-base shadow-glow" onClick={() => open("CRM CTA")}>
                Schedule a Growth Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
