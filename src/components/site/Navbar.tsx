import { Link } from "@tanstack/react-router";
import { Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
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
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
            <Eye className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">VisionGrowth</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
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

        <Button asChild size="sm" className="shadow-soft">
          <a href="#contact">Book Consultation</a>
        </Button>
      </div>
    </header>
  );
}
