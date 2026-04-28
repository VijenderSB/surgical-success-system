import { Link } from "@tanstack/react-router";
import { ChevronDown, Sparkles } from "lucide-react";
import logo from "@/assets/transess-logo.png";
import { Button } from "@/components/ui/button";
import { useLeadForm } from "@/components/site/LeadFormDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const { open } = useLeadForm();
  const services = [
    { to: "/digital-infrastructure" as const, label: "Digital Infrastructure" },
    { to: "/performance-marketing" as const, label: "Performance Marketing" },
    { to: "/content-authority" as const, label: "Content & Authority" },
    { to: "/video-content" as const, label: "Video Content Building" },
    { to: "/crm-conversion" as const, label: "CRM & Conversion" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" aria-label="Transess Technologies">
          <img src={logo} alt="Transess Technologies — Eyecare Digital Marketing Agency" className="h-12 w-auto md:h-[3.3rem]" />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" className="transition-colors hover:text-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>
            Home
          </Link>
          <Link
            to="/eyegrow"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary via-primary to-primary/80 bg-[length:200%_auto] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[0_0_18px_hsl(var(--primary)/0.55)] ring-1 ring-primary/40 transition-all duration-300 hover:bg-[position:right_center] hover:shadow-[0_0_28px_hsl(var(--primary)/0.85)] animate-pulse"
          >
            <span className="absolute inset-0 -z-10 rounded-full bg-primary/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden />
            <Sparkles className="h-3.5 w-3.5 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
            eyGROW
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 outline-none transition-colors hover:text-foreground">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-60">
              {services.map((s) => (
                <DropdownMenuItem key={s.to} asChild>
                  <Link to={s.to} className="cursor-pointer">
                    {s.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/expertise" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Expertise
          </Link>
          <Link to="/locations" className="transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Locations
          </Link>
          <a href="/#process" className="transition-colors hover:text-foreground">Process</a>
          <a href="/#case-study" className="transition-colors hover:text-foreground">Case Study</a>
          <a href="/#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>

        <Button size="sm" className="shadow-soft" onClick={() => open("Navbar")}>
          Book Consultation
        </Button>
      </div>
    </header>
  );
}
