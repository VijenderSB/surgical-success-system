import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Eye, Sparkles, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useLeadForm } from "@/components/site/LeadFormDialog";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  heroIcon: LucideIcon;
  heroStats: { label: string; value: string }[];
  whyEyecare: { icon: LucideIcon; title: string; desc: string }[];
  capabilities: { icon: LucideIcon; title: string; desc: string }[];
  patientEngagement: {
    title: string;
    desc: string;
    points: string[];
  };
  process: { step: string; title: string; desc: string }[];
  outcomes: { metric: string; label: string }[];
  uniqueFeatures?: {
    eyebrow: string;
    title: string;
    highlight: string;
    desc: string;
    items: { icon: LucideIcon; title: string; desc: string; tag?: string }[];
  };
};

export function ServicePage(props: ServicePageProps) {
  const HeroIcon = props.heroIcon;
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
                  {props.eyebrow}
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                  {props.title}{" "}
                  <span className="text-gradient-primary">{props.highlight}</span>
                </h1>
                <p className="mt-5 text-lg text-muted-foreground md:text-xl">{props.intro}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="h-12 px-6 text-base shadow-glow" onClick={() => open(`Service hero · ${props.title}`)}>
                    Schedule a Growth Consultation
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
                    <Link to="/expertise">See Our Eyecare Expertise</Link>
                  </Button>
                  <WhatsAppCTA context={`Service hero · ${props.title}`} />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-primary-glow/10 blur-2xl" />
                <Card className="border-border/70 p-8 shadow-elevated">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                    <HeroIcon className="h-7 w-7" />
                  </div>
                  <p className="mt-5 text-sm font-medium text-muted-foreground">Built exclusively for eyecare</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {props.heroStats.map((s) => (
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

        {/* WHY EYECARE */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Why It's Different for <span className="text-gradient-primary">Eyecare Patients</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Eyecare patients don't behave like generic healthcare audiences. Engagement must be tuned to how they research, decide, and choose a doctor.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {props.whyEyecare.map((w) => (
                <Card key={w.title} className="border-border/70 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="bg-surface-tint py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What We Deliver</h2>
              <p className="mt-4 text-muted-foreground">
                Every capability is engineered to convert eyecare intent into consultations.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {props.capabilities.map((c) => (
                <Card key={c.title} className="border-border/70 p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UNIQUE FEATURES (optional) */}
        {props.uniqueFeatures && (
          <section className="py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-2xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {props.uniqueFeatures.eyebrow}
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {props.uniqueFeatures.title}{" "}
                  <span className="text-gradient-primary">{props.uniqueFeatures.highlight}</span>
                </h2>
                <p className="mt-4 text-muted-foreground">{props.uniqueFeatures.desc}</p>
              </div>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {props.uniqueFeatures.items.map((f) => (
                  <Card key={f.title} className="group relative overflow-hidden border-border/70 p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated">
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
                          <f.icon className="h-6 w-6" />
                        </div>
                        {f.tag && (
                          <span className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                            {f.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PATIENT ENGAGEMENT — DEEP BLOCK */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-deep p-8 text-surface-deep-foreground shadow-glow md:p-12">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
                  <Eye className="h-3.5 w-3.5" />
                  Eyecare Patient Engagement
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">{props.patientEngagement.title}</h3>
                <p className="mt-3 max-w-2xl text-white/70">{props.patientEngagement.desc}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {props.patientEngagement.points.map((p) => (
                    <div key={p} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                      <span className="text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-surface-tint py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How We Execute</h2>
              <p className="mt-4 text-muted-foreground">A repeatable process refined over 20 years in eyecare marketing.</p>
            </div>
            <div className="mt-12 space-y-3">
              {props.process.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-primary/30 hover:shadow-elevated">
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

        {/* OUTCOMES */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {props.outcomes.map((o) => (
                <Card key={o.label} className="border-border/70 p-6 text-center shadow-soft">
                  <p className="text-3xl font-bold text-gradient-primary md:text-4xl">{o.metric}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
                </Card>
              ))}
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
              Talk to our eyecare growth specialists. We'll map the patient journey, identify revenue leaks, and design your system.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-6 text-base shadow-glow" onClick={() => open(`Service CTA · ${props.title}`)}>
                Schedule a Growth Consultation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-white/30 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white">
                <Link to="/">Back to Home</Link>
              </Button>
              <WhatsAppCTA
                context={`Service CTA · ${props.title}`}
                className="h-12 border-white/30 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
