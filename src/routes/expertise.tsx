import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award, TrendingUp, Eye, Building2, Users, Sparkles, ArrowRight, CheckCircle2,
  Stethoscope, Target, Brain, BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "20 Years of Eyecare Marketing Expertise — VisionGrowth" },
      { name: "description", content: "Two decades of deep eyecare domain expertise. We understand the dynamics that drive 50% growth in turnover for eye hospitals and clinics." },
      { property: "og:title", content: "20 Years of Eyecare Marketing Expertise" },
      { property: "og:description", content: "Deep eyecare domain knowledge — the difference between a marketing vendor and a growth partner." },
    ],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  const pillars = [
    { icon: Eye, title: "Eyecare-Only Focus", desc: "Two decades dedicated exclusively to eye hospitals — no detours into dental, derma, or dialysis." },
    { icon: Stethoscope, title: "Procedure-Level Depth", desc: "Cataract, LASIK, Glaucoma, Squint, Retina, Cornea — we know the patient, the economics, and the journey for each." },
    { icon: Building2, title: "Hospital Operations Fluency", desc: "We speak the language of OPD, OT scheduling, counsellor desks, and revenue cycles." },
    { icon: Brain, title: "Patient Psychology", desc: "We've mapped how eyecare patients research, fear, decide, and refer — across age groups and geographies." },
    { icon: Target, title: "Conversion Economics", desc: "Cost-per-consult and cost-per-surgery targets, broken down by procedure and catchment." },
    { icon: BookOpen, title: "Compliance & Ethics", desc: "Medical ad policy, MCI guidelines, platform rules — we navigate them daily." },
  ];

  const dynamics = [
    { title: "Symptom-to-surgery journey", desc: "We know the 18–42 day decision window and how to nurture across it." },
    { title: "Doctor-led trust formation", desc: "Patients pick the surgeon before the hospital — content must reflect this." },
    { title: "Geo-economic catchment", desc: "Most patients pick within 8 km. Spend is concentrated, not sprayed." },
    { title: "Insurance, EMI & cash dynamics", desc: "Pricing transparency moves the needle differently per procedure." },
    { title: "Vernacular patient acquisition", desc: "Hindi, Tamil, Telugu, Bengali — language drives 40% conversion variance." },
    { title: "Second-eye & lifecycle revenue", desc: "Repeat surgeries and screening camps are the hidden growth lever." },
  ];

  const milestones = [
    { year: "2005", title: "Started in eyecare marketing", desc: "First engagements with single-doctor eye clinics." },
    { year: "2010", title: "Multi-city hospital chains", desc: "Scaled playbooks across regional eye hospital networks." },
    { year: "2015", title: "Digital-first transition", desc: "Moved entire patient acquisition online — Google, Meta, SEO." },
    { year: "2020", title: "CRM & Conversion engine", desc: "Built proprietary lead-to-surgery pipeline systems." },
    { year: "2025", title: "Full growth ecosystem", desc: "Integrated infrastructure, marketing, content, and CRM as one engine." },
  ];

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
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                <Award className="h-3.5 w-3.5" />
                20 Years in Eyecare
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
                Two Decades of <span className="text-gradient-primary">Eyecare Domain Expertise</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                We don't apply generic marketing playbooks to hospitals. We've spent 20 years inside the eyecare ecosystem — and that depth is why our clients see <span className="font-semibold text-primary">50% growth in turnover</span>.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "20+", label: "Years in eyecare" },
                  { value: "50%", label: "Avg. turnover growth" },
                  { value: "100+", label: "Eye hospitals served" },
                ].map((s) => (
                  <Card key={s.label} className="border-border/70 p-6 text-center shadow-soft">
                    <p className="text-3xl font-bold text-gradient-primary md:text-4xl">{s.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="h-12 px-6 text-base shadow-glow">
                  Schedule a Growth Consultation
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                What 20 Years Buys You
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
                Six Pillars of <span className="text-gradient-primary">Eyecare-Specific Expertise</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Generic agencies learn on your dime. We bring two decades of pattern recognition to your first month.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <Card key={p.title} className="border-border/70 p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* DYNAMICS */}
        <section className="bg-surface-tint py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                The Eyecare Dynamics We Understand
              </h2>
              <p className="mt-4 text-muted-foreground">
                These six dynamics decide whether a marketing investment compounds — or evaporates.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {dynamics.map((d) => (
                <div key={d.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{d.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GROWTH PROMISE */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-deep p-8 text-surface-deep-foreground shadow-glow md:p-12">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
                    <TrendingUp className="h-3.5 w-3.5" />
                    The 50% Growth Promise
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
                    Why We Deliver 50% Growth in Turnover
                  </h3>
                  <p className="mt-3 max-w-xl text-white/70">
                    Because we don't pull patients from one channel — we re-engineer the entire dynamic: how patients find you, why they trust you, and how your team converts them. The result is compounding, not one-off.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Channel-mix optimisation by procedure",
                      "Cost-per-surgery accountability",
                      "Counsellor enablement & SOPs",
                      "Lifecycle & second-eye revenue",
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                        <CheckCircle2 className="h-4 w-4 text-primary-glow" />
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur">
                    <TrendingUp className="h-14 w-14 text-primary-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="bg-surface-tint py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Two Decades of <span className="text-gradient-primary">Eyecare Evolution</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                From single-clinic referrals to integrated digital growth engines.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24 pt-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-deep p-10 text-center text-surface-deep-foreground shadow-glow md:p-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Put 20 Years of Eyecare Expertise to Work for Your Practice
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Schedule a growth consultation — we'll audit your funnel and show you exactly where your 50% growth is hiding.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-6 text-base shadow-glow">
                Schedule a Growth Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white">
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
