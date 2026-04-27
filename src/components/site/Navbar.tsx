import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-soft">
            <Eye className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">VisionGrowth</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#ecosystem" className="transition-colors hover:text-foreground">Ecosystem</a>
          <a href="#process" className="transition-colors hover:text-foreground">Process</a>
          <a href="#outcomes" className="transition-colors hover:text-foreground">Outcomes</a>
          <a href="#case-study" className="transition-colors hover:text-foreground">Case Study</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>

        <Button asChild size="sm" className="shadow-soft">
          <a href="#contact">Book Consultation</a>
        </Button>
      </div>
    </header>
  );
}
