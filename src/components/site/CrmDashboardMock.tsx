import {
  Bell,
  Search,
  Users,
  CalendarCheck,
  Stethoscope,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  PhoneCall,
  MessageSquare,
  Bot,
  Activity,
  Filter,
  ChevronDown,
  Sparkles,
  Eye,
  Circle,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Card } from "@/components/ui/card";

/* ---------- mock data ---------- */
const revenueData = [
  { m: "May", revenue: 42, leads: 380 },
  { m: "Jun", revenue: 51, leads: 460 },
  { m: "Jul", revenue: 58, leads: 510 },
  { m: "Aug", revenue: 67, leads: 590 },
  { m: "Sep", revenue: 78, leads: 640 },
  { m: "Oct", revenue: 92, leads: 720 },
  { m: "Nov", revenue: 108, leads: 810 },
];

const doctorPnl = [
  { d: "Dr. Rao", v: 38 },
  { d: "Dr. Mehta", v: 31 },
  { d: "Dr. Iyer", v: 24 },
  { d: "Dr. Khan", v: 19 },
  { d: "Dr. Pillai", v: 14 },
];

const sourceMix = [
  { name: "Google Ads", value: 38, color: "var(--color-primary)" },
  { name: "Meta Ads", value: 27, color: "var(--color-primary-glow)" },
  { name: "WhatsApp", value: 18, color: "var(--color-success)" },
  { name: "Walk-in / Referral", value: 17, color: "var(--color-muted-foreground)" },
];

const funnel = [
  { label: "Inquiries", value: 1840, pct: 100, tone: "from-primary to-primary-glow" },
  { label: "Qualified", value: 1290, pct: 70, tone: "from-primary to-primary-glow" },
  { label: "Consultations Booked", value: 980, pct: 53, tone: "from-primary to-primary-glow" },
  { label: "Consulted (OPD)", value: 742, pct: 40, tone: "from-primary to-primary-glow" },
  { label: "Surgery / Procedure", value: 311, pct: 17, tone: "from-success to-primary-glow" },
];

const channelRoi = [
  { name: "Google Ads", cpc: "₹612", roas: "6.4x", trend: "up" },
  { name: "Meta Ads", cpc: "₹478", roas: "5.1x", trend: "up" },
  { name: "WhatsApp", cpc: "₹190", roas: "9.8x", trend: "up" },
  { name: "Referral", cpc: "₹0", roas: "—", trend: "flat" },
];

const recentLeads = [
  { name: "Priya S.", procedure: "LASIK", source: "Meta", score: 92, status: "Hot" },
  { name: "Rakesh M.", procedure: "Cataract", source: "Google", score: 81, status: "Hot" },
  { name: "Aisha K.", procedure: "SMILE Pro", source: "WhatsApp", score: 74, status: "Warm" },
  { name: "Vikram T.", procedure: "Retina", source: "Referral", score: 66, status: "Warm" },
  { name: "Neha P.", procedure: "Contoura", source: "Google", score: 58, status: "Nurture" },
];

const aiActivity = [
  { t: "12s ago", text: "AI qualified LASIK lead → routed to Counsellor Anjali", icon: Bot },
  { t: "48s ago", text: "WhatsApp reply received from Cataract patient (Pune)", icon: MessageSquare },
  { t: "2m ago", text: "AI voice follow-up booked OPD slot for Mrs. Kapoor", icon: PhoneCall },
  { t: "6m ago", text: "Second-eye recall sent to 24 post-op patients", icon: Activity },
];

/* ---------- helpers ---------- */
function statusTone(s: string) {
  if (s === "Hot") return "bg-success/15 text-success border-success/30";
  if (s === "Warm") return "bg-primary/10 text-primary border-primary/30";
  return "bg-muted text-muted-foreground border-border";
}

/* ---------- main component ---------- */
export function CrmDashboardMock() {
  return (
    <section className="bg-surface-tint py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Live CRM Dashboard
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            One Cockpit for{" "}
            <span className="text-gradient-primary">Footfall, Conversion &amp; Revenue</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A purpose-built command center for eye centres — track every lead, doctor, and
            procedure from first click to surgery revenue.
          </p>
        </div>

        {/* Dashboard frame */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-background shadow-elevated">
          {/* Browser-style chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-surface-tint/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            <div className="ml-3 hidden flex-1 items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground sm:flex">
              <Eye className="h-3.5 w-3.5 text-primary" />
              app.transess.com / eyecare-crm / overview
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="hidden items-center gap-1 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-muted-foreground md:inline-flex">
                <Filter className="h-3.5 w-3.5" /> Last 30 days <ChevronDown className="h-3 w-3" />
              </button>
              <button className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background text-muted-foreground">
                <Bell className="h-3.5 w-3.5" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-destructive" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 p-4 md:p-6">
            {/* Sidebar */}
            <aside className="col-span-12 md:col-span-2">
              <div className="rounded-xl border border-border bg-surface-tint/40 p-3">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Workspace
                </p>
                <div className="mt-2 space-y-1 text-sm">
                  {[
                    { label: "Overview", active: true },
                    { label: "Leads Inbox" },
                    { label: "Pipeline" },
                    { label: "WhatsApp" },
                    { label: "Doctors" },
                    { label: "Campaigns" },
                    { label: "Reports" },
                  ].map((it) => (
                    <div
                      key={it.label}
                      className={`flex items-center justify-between rounded-md px-2 py-1.5 ${
                        it.active
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span>{it.label}</span>
                      {it.active && <Circle className="h-1.5 w-1.5 fill-primary text-primary" />}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main canvas */}
            <div className="col-span-12 space-y-4 md:col-span-10">
              {/* Top bar */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Eye Centre Performance — Overview</h3>
                  <p className="text-xs text-muted-foreground">
                    Mumbai · Powai &amp; Andheri OPDs · Updated 2 min ago
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-muted-foreground sm:flex">
                    <Search className="h-3.5 w-3.5" /> Search patient, doctor, lead ID…
                  </div>
                </div>
              </div>

              {/* KPI tiles */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
                <KpiCard icon={Users} label="New Leads" value="1,840" delta="+24%" up />
                <KpiCard icon={CalendarCheck} label="Consults Booked" value="980" delta="+18%" up />
                <KpiCard icon={Stethoscope} label="Surgeries" value="311" delta="+42%" up />
                <KpiCard
                  icon={IndianRupee}
                  label="Revenue (MTD)"
                  value="₹1.08 Cr"
                  delta="+31%"
                  up
                />
                <KpiCard icon={TrendingUp} label="Lead → Surgery" value="16.9%" delta="+3.4 pts" up />
              </div>

              {/* Funnel + Revenue trend */}
              <div className="grid grid-cols-12 gap-4">
                <Card className="col-span-12 border-border/70 p-5 lg:col-span-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Patient Journey Funnel</p>
                      <p className="text-xs text-muted-foreground">Last 30 days</p>
                    </div>
                    <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                      +3.4 pts MoM
                    </span>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {funnel.map((f) => (
                      <div key={f.label}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-foreground">{f.label}</span>
                          <span className="text-muted-foreground">
                            {f.value.toLocaleString()} · {f.pct}%
                          </span>
                        </div>
                        <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${f.tone}`}
                            style={{ width: `${f.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="col-span-12 border-border/70 p-5 lg:col-span-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Revenue &amp; Lead Growth</p>
                      <p className="text-xs text-muted-foreground">₹ Lakhs · last 7 months</p>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-sm bg-primary" /> Revenue
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-sm bg-primary-glow" /> Leads
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData} margin={{ top: 5, right: 8, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.45} />
                            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="gLeads" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-primary-glow)" stopOpacity={0.35} />
                            <stop offset="100%" stopColor="var(--color-primary-glow)" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                        <XAxis dataKey="m" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                        <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                        <Tooltip
                          contentStyle={{
                            background: "var(--color-background)",
                            border: "1px solid var(--color-border)",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                        />
                        <Area type="monotone" dataKey="leads" stroke="var(--color-primary-glow)" fill="url(#gLeads)" strokeWidth={2} />
                        <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" fill="url(#gRev)" strokeWidth={2.5} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>

              {/* Source mix + Doctor P&L + Channel ROI */}
              <div className="grid grid-cols-12 gap-4">
                <Card className="col-span-12 border-border/70 p-5 md:col-span-4">
                  <p className="text-sm font-semibold">Lead Source Mix</p>
                  <p className="text-xs text-muted-foreground">Share of qualified leads</p>
                  <div className="mt-2 h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={sourceMix} dataKey="value" innerRadius={42} outerRadius={68} paddingAngle={2} stroke="none">
                          {sourceMix.map((s) => (
                            <Cell key={s.name} fill={s.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: "var(--color-background)",
                            border: "1px solid var(--color-border)",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1.5 text-[11px]">
                    {sourceMix.map((s) => (
                      <div key={s.name} className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-sm" style={{ background: s.color }} />
                        <span className="text-muted-foreground">{s.name}</span>
                        <span className="ml-auto font-semibold">{s.value}%</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="col-span-12 border-border/70 p-5 md:col-span-4">
                  <p className="text-sm font-semibold">Revenue by Doctor</p>
                  <p className="text-xs text-muted-foreground">₹ Lakhs · this month</p>
                  <div className="mt-3 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={doctorPnl} margin={{ top: 5, right: 8, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                        <XAxis dataKey="d" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip
                          contentStyle={{
                            background: "var(--color-background)",
                            border: "1px solid var(--color-border)",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                        />
                        <Bar dataKey="v" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <Card className="col-span-12 border-border/70 p-5 md:col-span-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Channel ROI</p>
                      <p className="text-xs text-muted-foreground">CPC &amp; ROAS · 30 days</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    {channelRoi.map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center justify-between rounded-lg border border-border/70 bg-surface-tint/40 px-3 py-2"
                      >
                        <div>
                          <p className="text-xs font-semibold">{c.name}</p>
                          <p className="text-[10px] text-muted-foreground">CPC {c.cpc}</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-primary">{c.roas}</span>
                          {c.trend === "up" ? (
                            <ArrowUpRight className="h-3.5 w-3.5 text-success" />
                          ) : (
                            <ArrowDownRight className="h-3.5 w-3.5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 rounded-lg border border-success/20 bg-success/5 px-3 py-2 text-[11px] text-success">
                    WhatsApp delivers 9.8× ROAS — recommend scaling budget +20%.
                  </div>
                </Card>
              </div>

              {/* Operational row: Recent leads + WhatsApp inbox + AI activity + SLA gauge */}
              <div className="grid grid-cols-12 gap-4">
                {/* Recent leads */}
                <Card className="col-span-12 border-border/70 p-5 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">Recent High-Intent Leads</p>
                    <span className="text-[11px] text-muted-foreground">Live · auto-refresh</span>
                  </div>
                  <div className="mt-3 overflow-hidden rounded-lg border border-border/70">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-surface-tint/60 text-[10px] uppercase tracking-wider text-muted-foreground">
                        <tr>
                          <th className="px-3 py-2 font-semibold">Patient</th>
                          <th className="px-3 py-2 font-semibold">Procedure</th>
                          <th className="px-3 py-2 font-semibold">Source</th>
                          <th className="px-3 py-2 font-semibold">Score</th>
                          <th className="px-3 py-2 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentLeads.map((l) => (
                          <tr key={l.name} className="border-t border-border/70">
                            <td className="px-3 py-2 font-medium">{l.name}</td>
                            <td className="px-3 py-2 text-muted-foreground">{l.procedure}</td>
                            <td className="px-3 py-2 text-muted-foreground">{l.source}</td>
                            <td className="px-3 py-2">
                              <div className="flex items-center gap-1.5">
                                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                                  <div
                                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                                    style={{ width: `${l.score}%` }}
                                  />
                                </div>
                                <span className="font-semibold">{l.score}</span>
                              </div>
                            </td>
                            <td className="px-3 py-2">
                              <span
                                className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${statusTone(
                                  l.status,
                                )}`}
                              >
                                {l.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                {/* WhatsApp + AI + SLA stack */}
                <div className="col-span-12 grid grid-cols-1 gap-4 lg:col-span-6 lg:grid-cols-2">
                  {/* WhatsApp inbox */}
                  <Card className="border-border/70 p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-success/15 text-success">
                          <MessageSquare className="h-3.5 w-3.5" />
                        </span>
                        <p className="text-sm font-semibold">WhatsApp Inbox</p>
                      </div>
                      <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive">
                        12 new
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-xs">
                      {[
                        { n: "Mrs. Kapoor", msg: "Cataract pricing for both eyes?", t: "now" },
                        { n: "Arjun R.", msg: "Booked LASIK eval Sat 11am ✅", t: "3m" },
                        { n: "Sana M.", msg: "Sent EMI options brochure", t: "12m" },
                      ].map((m) => (
                        <div
                          key={m.n}
                          className="flex items-start justify-between gap-2 rounded-lg border border-border/70 bg-surface-tint/40 px-3 py-2"
                        >
                          <div className="min-w-0">
                            <p className="font-semibold">{m.n}</p>
                            <p className="truncate text-[11px] text-muted-foreground">{m.msg}</p>
                          </div>
                          <span className="text-[10px] text-muted-foreground">{m.t}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* SLA gauge */}
                  <Card className="border-border/70 p-5">
                    <p className="text-sm font-semibold">First-Response SLA</p>
                    <p className="text-xs text-muted-foreground">Target: &lt; 5 min</p>
                    <div className="mt-4 flex items-center gap-4">
                      <div
                        className="relative h-24 w-24 rounded-full"
                        style={{
                          background:
                            "conic-gradient(var(--color-success) 0 312deg, var(--color-muted) 312deg 360deg)",
                        }}
                      >
                        <div className="absolute inset-2 flex flex-col items-center justify-center rounded-full bg-background">
                          <span className="text-lg font-bold text-success">87%</span>
                          <span className="text-[9px] text-muted-foreground">in SLA</span>
                        </div>
                      </div>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-muted-foreground">Avg response</span>
                          <span className="font-semibold">2m 41s</span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-muted-foreground">SLA breaches</span>
                          <span className="font-semibold text-destructive">14</span>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-muted-foreground">Auto-escalated</span>
                          <span className="font-semibold">9</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* AI agent activity (full width inside the right stack) */}
                  <Card className="border-border/70 p-5 lg:col-span-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Bot className="h-3.5 w-3.5" />
                        </span>
                        <p className="text-sm font-semibold">AI Agent Activity</p>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-success">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                        LIVE
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs">
                      {aiActivity.map((a, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <a.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">
                            <span className="text-foreground">{a.text}</span>
                            <span className="ml-1.5 text-[10px]">· {a.t}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
          * Illustrative dashboard — sample data shown. Live deployments are configured to your
          clinic's procedures, doctors, and OPD locations.
        </p>
      </div>
    </section>
  );
}

/* ---------- KPI tile ---------- */
function KpiCard({
  icon: Icon,
  label,
  value,
  delta,
  up,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  delta: string;
  up?: boolean;
}) {
  return (
    <Card className="border-border/70 p-4">
      <div className="flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={`inline-flex items-center gap-0.5 text-[11px] font-semibold ${
            up ? "text-success" : "text-destructive"
          }`}
        >
          {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {delta}
        </span>
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-xl font-bold tracking-tight">{value}</p>
    </Card>
  );
}
