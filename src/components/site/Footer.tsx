import { Eye } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-tint">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                <Eye className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">VisionGrowth</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The complete patient acquisition and conversion ecosystem built exclusively for eyecare practices.
            </p>
          </div>

          <FooterCol
            title="Company"
            links={["About", "Our Approach", "Careers", "Contact"]}
          />
          <FooterCol
            title="Services"
            links={[
              "Digital Infrastructure",
              "Performance Marketing",
              "Content & Authority",
              "CRM & Conversion",
            ]}
          />
          <FooterCol
            title="Locations"
            links={[
              "Eyecare Marketing Mumbai",
              "Eyecare Marketing Delhi",
              "Eyecare Marketing Bangalore",
              "Eyecare Marketing Hyderabad",
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} VisionGrowth. Built for eyecare leaders.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-foreground">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
