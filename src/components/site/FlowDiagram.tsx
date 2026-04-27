import { Search, Globe, UserPlus, Database, Stethoscope, HeartPulse } from "lucide-react";

const steps = [
  { icon: Search, label: "Discovery" },
  { icon: Globe, label: "Website" },
  { icon: UserPlus, label: "Lead" },
  { icon: Database, label: "CRM" },
  { icon: Stethoscope, label: "Consultation" },
  { icon: HeartPulse, label: "Surgery" },
];

export function FlowDiagram() {
  return (
    <div className="w-full">
      {/* Desktop horizontal flow */}
      <div className="hidden items-center justify-between gap-2 md:flex">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-card text-primary shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-2 h-px flex-1 bg-gradient-to-r from-primary/30 to-primary/10" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="space-y-3 md:hidden">
        {steps.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-3 shadow-soft"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
