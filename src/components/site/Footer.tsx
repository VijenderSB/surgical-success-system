import { Link } from "@tanstack/react-router";
import {
  Eye,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FooterLink = { label: string; to?: string; href?: string };

export function Footer() {
  const services: FooterLink[] = [
    { label: "Digital Infrastructure", to: "/digital-infrastructure" },
    { label: "Performance Marketing", to: "/performance-marketing" },
    { label: "Content & Authority", to: "/content-authority" },
    { label: "Video Content Building", to: "/video-content" },
    { label: "CRM & Conversion", to: "/crm-conversion" },
    { label: "Expertise & Specialties", to: "/expertise" },
  ];

  const specialties: FooterLink[] = [
    { label: "LASIK Marketing", href: "#" },
    { label: "Contoura Vision", href: "#" },
    { label: "InnovEyes Marketing", href: "#" },
    { label: "SMILE Pro Patient Acquisition", href: "#" },
    { label: "EDOF MICS Cataract", href: "#" },
    { label: "FLACS Cataract Funnel", href: "#" },
    { label: "Premium IOL Conversion", href: "#" },
    { label: "Paediatric & Squint", href: "#" },
  ];

  const company: FooterLink[] = [
    { label: "About Us", href: "#" },
    { label: "Our Approach", href: "#" },
    { label: "Case Studies", href: "/#case-study" },
    { label: "Process", href: "/#process" },
    { label: "FAQ", href: "/#faq" },
    { label: "Careers", href: "#" },
    { label: "Partners & Affiliations", href: "#" },
  ];

  const locations: FooterLink[] = [
    { label: "Eyecare Marketing Mumbai", href: "/locations/mumbai" },
    { label: "Eyecare Marketing Delhi NCR", href: "/locations/delhi-ncr" },
    { label: "Eyecare Marketing Bangalore", href: "/locations/bangalore" },
    { label: "Eyecare Marketing Hyderabad", href: "/locations/hyderabad" },
    { label: "Eyecare Marketing Chennai", href: "/locations/chennai" },
    { label: "Eyecare Marketing Pune", href: "/locations/pune" },
    { label: "Eyecare Marketing Ahmedabad", href: "/locations/ahmedabad" },
    { label: "Eyecare Marketing Kolkata", href: "/locations/kolkata" },
    { label: "All Locations Across India", href: "/locations" },
  ];

  const resources: FooterLink[] = [
    { label: "Eyecare Growth Blog", href: "#" },
    { label: "Practice ROI Calculator", href: "#" },
    { label: "LASIK Funnel Playbook", href: "#" },
    { label: "Cataract Conversion Guide", href: "#" },
    { label: "Newsletter Archive", href: "#" },
  ];

  const trustPoints = [
    "100% eyecare-exclusive agency",
    "Compliance-first creative & ads",
    "Transparent reporting & dashboards",
  ];

  return (
    <footer className="border-t border-border bg-surface-tint">
      {/* CTA Strip */}
      <div className="border-b border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Ready to grow your eyecare practice?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Get a free growth audit tailored to your specialty and city.
            </p>
          </div>
          <div className="flex w-full max-w-md items-center gap-2">
            <Input
              type="email"
              placeholder="your@clinic.com"
              className="bg-background"
            />
            <Button className="shrink-0 shadow-soft">
              Request Audit <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <Eye className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">VisionGrowth</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The complete patient acquisition and conversion ecosystem built
              exclusively for ophthalmologists, refractive surgeons and
              multi-location eyecare groups.
            </p>

            <ul className="mt-6 space-y-2.5">
              {trustPoints.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <a href="mailto:hello@visiongrowth.in" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 text-success" />
                hello@visiongrowth.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 text-success" />
                +91 99999 99999
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                Mumbai · Delhi · Bangalore · Hyderabad
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#" label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#" label="YouTube"><Youtube className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#" label="Facebook"><Facebook className="h-4 w-4" /></SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterCol title="Services" links={services} />
            <FooterCol title="Specialties" links={specialties} />
            <FooterCol title="Company" links={company} />
            <div className="space-y-10">
              <FooterCol title="Resources" links={resources} />
            </div>
          </div>
        </div>

        {/* Locations row */}
        <div className="mt-14 rounded-2xl border border-border bg-background/60 p-6">
          <h4 className="text-sm font-semibold text-foreground">
            Serving Eyecare Practices Across India
          </h4>
          <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locations.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} VisionGrowth. Built for eyecare leaders.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Cookie Preferences</a>
            <a href="#" className="hover:text-foreground">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link to={l.to} className="transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ) : (
              <a href={l.href ?? "#"} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground ring-1 ring-transparent transition-all hover:border-success/40 hover:text-success hover:ring-success/20"
    >
      {children}
    </a>
  );
}
