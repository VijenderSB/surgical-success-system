/**
 * Reusable framed mini-dashboard "snapshots" for the CRM page.
 * Each snapshot is wrapped in a small macOS-style browser chrome so it reads
 * as a product screenshot. Pure presentational — no props, no live data.
 */
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  ArrowUpRight,
  Bot,
  MessageSquare,
  PhoneCall,
  Activity,
  Stethoscope,
  Users,
  CalendarCheck,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

/* ---------- Frame ---------- */
export function SnapshotFrame({
  title,
  url,
  children,
  className = "",
}: {
  title?: string;
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-background shadow-elevated ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-tint/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-destructive/70" />
        <span className="h-2 w-2 rounded-full bg-primary-glow/70" />
        <span className="h-2 w-2 rounded-full bg-success/70" />
        <div className="ml-2 flex-1 truncate rounded border border-border bg-background px-2 py-0.5 text-[10px] text-muted-foreground">
          {url}
        </div>
      </div>
      {title && (
        <div className="border-b border-border bg-background px-4 py-2 text-[11px] font-semibold text-foreground">
          {title}
        </div>
      )}
      <div className="bg-background p-3">{children}</div>
    </div>
  );
}

/* =========================================================
 *                  LARGE PAIRED SNAPSHOTS
 * ========================================================= */

/* --- KPI strip (paired with "Why Eyecare") --- */
export function KpiStripSnapshot() {
  const kpis = [
    { icon: Users, label: "New Leads", value: "1,840", delta: "+24%" },
    { icon: CalendarCheck, label: "Consults", value: "980", delta: "+18%" },
    { icon: Stethoscope, label: "Surgeries", value: "311", delta: "+42%" },
    { icon: IndianRupee, label: "Revenue", value: "₹1.08 Cr", delta: "+31%" },
    { icon: TrendingUp, label: "Lead → Op", value: "16.9%", delta: "+3.4 pts" },
  ];
  return (
    <SnapshotFrame url="app.transess.com / overview" title="Eye Centre — This Month">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-lg border border-border/70 bg-surface-tint/40 p-2.5"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
                <k.icon className="h-3 w-3" />
              </span>
              <span className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-success">
                <ArrowUpRight className="h-2.5 w-2.5" />
                {k.delta}
              </span>
            </div>
            <p className="mt-1.5 text-[9px] uppercase tracking-wider text-muted-foreground">
              {k.label}
            </p>
            <p className="text-sm font-bold tracking-tight">{k.value}</p>
          </div>
        ))}
      </div>
    </SnapshotFrame>
  );
}

/* --- Funnel snapshot (paired with "Capabilities") --- */
export function FunnelSnapshot() {
  const funnel = [
    { label: "Inquiries", value: 1840, pct: 100 },
    { label: "Qualified", value: 1290, pct: 70 },
    { label: "Consults Booked", value: 980, pct: 53 },
    { label: "Consulted (OPD)", value: 742, pct: 40 },
    { label: "Surgery / Procedure", value: 311, pct: 17 },
  ];
  return (
    <SnapshotFrame url="app.transess.com / pipeline" title="Patient Journey Funnel">
      <div className="space-y-2">
        {funnel.map((f) => (
          <div key={f.label}>
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-medium">{f.label}</span>
              <span className="text-muted-foreground">
                {f.value.toLocaleString()} · {f.pct}%
              </span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                style={{ width: `${f.pct}%` }}
              />
            </div>
          </div>
        ))}
        <div className="mt-2 rounded-md border border-success/20 bg-success/5 px-2 py-1.5 text-[10px] text-success">
          Lead → Surgery up <strong>+3.4 pts</strong> MoM
        </div>
      </div>
    </SnapshotFrame>
  );
}

/* --- WhatsApp inbox + AI feed (paired with "Patient Engagement") --- */
export function EngagementSnapshot() {
  const msgs = [
    { n: "Mrs. Kapoor", msg: "Cataract pricing for both eyes?", t: "now" },
    { n: "Arjun R.", msg: "Booked LASIK eval Sat 11am ✅", t: "3m" },
    { n: "Sana M.", msg: "Sent EMI options brochure", t: "12m" },
  ];
  const feed = [
    { t: "12s", text: "AI qualified LASIK lead → Counsellor Anjali", icon: Bot },
    { t: "48s", text: "WhatsApp reply received (Pune)", icon: MessageSquare },
    { t: "2m", text: "AI voice booked OPD slot — Mrs. Kapoor", icon: PhoneCall },
    { t: "6m", text: "Recall sent to 24 post-op patients", icon: Activity },
  ];
  return (
    <SnapshotFrame url="app.transess.com / engagement" title="Patient Engagement — Live">
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-success/15 text-success">
                <MessageSquare className="h-2.5 w-2.5" />
              </span>
              WhatsApp Inbox
            </p>
            <span className="rounded-full bg-destructive/10 px-1.5 py-0.5 text-[9px] font-bold text-destructive">
              12 new
            </span>
          </div>
          <div className="mt-1.5 space-y-1">
            {msgs.map((m) => (
              <div
                key={m.n}
                className="flex items-start justify-between gap-2 rounded-md border border-border/70 bg-surface-tint/40 px-2 py-1.5"
              >
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold">{m.n}</p>
                  <p className="truncate text-[10px] text-muted-foreground">{m.msg}</p>
                </div>
                <span className="text-[9px] text-muted-foreground">{m.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-border/70 bg-surface-tint/40 p-2">
          <p className="flex items-center justify-between text-[11px] font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-primary">
                <Bot className="h-2.5 w-2.5" />
              </span>
              AI Agent Activity
            </span>
            <span className="flex items-center gap-1 text-[9px] font-semibold text-success">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              LIVE
            </span>
          </p>
          <ul className="mt-1.5 space-y-1 text-[10px]">
            {feed.map((a, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <a.icon className="mt-0.5 h-2.5 w-2.5 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  <span className="text-foreground">{a.text}</span>
                  <span className="ml-1 text-[9px]">· {a.t}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SnapshotFrame>
  );
}

/* --- Revenue chart (paired with "Outcomes") --- */
export function RevenueSnapshot() {
  const data = [
    { m: "May", revenue: 42, leads: 380 },
    { m: "Jun", revenue: 51, leads: 460 },
    { m: "Jul", revenue: 58, leads: 510 },
    { m: "Aug", revenue: 67, leads: 590 },
    { m: "Sep", revenue: 78, leads: 640 },
    { m: "Oct", revenue: 92, leads: 720 },
    { m: "Nov", revenue: 108, leads: 810 },
  ];
  return (
    <SnapshotFrame url="app.transess.com / reports" title="Revenue & Lead Growth (₹ Lakhs)">
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 8, left: -22, bottom: 0 }}>
            <defs>
              <linearGradient id="snapRev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="snapLeads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary-glow)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--color-primary-glow)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="m" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                fontSize: 11,
              }}
            />
            <Area type="monotone" dataKey="leads" stroke="var(--color-primary-glow)" fill="url(#snapLeads)" strokeWidth={2} />
            <Area type="monotone" dataKey="revenue" stroke="var(--color-primary)" fill="url(#snapRev)" strokeWidth={2.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 flex items-center justify-between text-[10px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-sm bg-primary" /> Revenue
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-sm bg-primary-glow" /> Leads
          </span>
        </span>
        <span className="font-semibold text-success">+157% YoY</span>
      </div>
    </SnapshotFrame>
  );
}

/* =========================================================
 *      MINI VISUALS  — for Unique Features cards (9)
 * ========================================================= */

/* All mini visuals share consistent height for grid neatness */
const MINI_H = "h-[88px]";

export function MiniAIQualifier() {
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <div className="flex items-center justify-between text-[9px] text-muted-foreground">
        <span>AI Triage</span>
        <span className="flex items-center gap-1 font-semibold text-success">
          <span className="h-1 w-1 animate-pulse rounded-full bg-success" /> LIVE
        </span>
      </div>
      <div className="mt-1.5 space-y-1">
        {[
          { p: "LASIK", c: "Hot", tone: "bg-success/15 text-success" },
          { p: "Cataract", c: "Warm", tone: "bg-primary/10 text-primary" },
          { p: "Retina", c: "Nurture", tone: "bg-muted text-muted-foreground" },
        ].map((r) => (
          <div key={r.p} className="flex items-center justify-between rounded bg-background px-1.5 py-1 text-[9px]">
            <span className="font-semibold">{r.p}</span>
            <span className={`rounded-full px-1.5 py-0.5 font-semibold ${r.tone}`}>{r.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniSmartInbox() {
  const channels = [
    { n: "Calls", v: 14 },
    { n: "WhatsApp", v: 31 },
    { n: "Meta DM", v: 9 },
    { n: "Forms", v: 22 },
  ];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Unified Inbox · today</p>
      <div className="mt-1.5 space-y-1">
        {channels.map((c) => (
          <div key={c.n} className="flex items-center gap-1.5 text-[9px]">
            <span className="w-14 text-foreground">{c.n}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                style={{ width: `${(c.v / 31) * 100}%` }}
              />
            </div>
            <span className="w-5 text-right font-semibold">{c.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniJourney() {
  const steps = ["Ad", "Form", "WhatsApp", "Reel", "OPD"];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">LASIK Nurture Flow</p>
      <div className="mt-2 flex items-center justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold ${
                  i < 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              <span className="mt-0.5 text-[8px] text-muted-foreground">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 flex-1 ${i < 2 ? "bg-primary" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniVoiceAgent() {
  const data = [4, 7, 5, 9, 6, 11, 8, 13, 9, 14, 10, 12, 7, 9].map((v, i) => ({ i, v }));
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <div className="flex items-center justify-between text-[9px]">
        <span className="font-semibold text-muted-foreground">AI Voice — Hindi/EN/Regional</span>
        <span className="font-semibold text-success">+38%</span>
      </div>
      <div className="mt-1 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="v" fill="var(--color-primary)" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function MiniSlaAlert() {
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">First-Response SLA</p>
      <div className="mt-1.5 flex items-center gap-2">
        <div
          className="relative h-12 w-12 rounded-full"
          style={{
            background:
              "conic-gradient(var(--color-success) 0 312deg, var(--color-muted) 312deg 360deg)",
          }}
        >
          <div className="absolute inset-1 flex flex-col items-center justify-center rounded-full bg-background">
            <span className="text-[10px] font-bold text-success">87%</span>
          </div>
        </div>
        <div className="flex-1 space-y-0.5 text-[9px]">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Avg</span>
            <span className="font-semibold">2m 41s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Breaches</span>
            <span className="font-semibold text-destructive">14</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Target</span>
            <span className="font-semibold">&lt;5m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MiniIntentScore() {
  const leads = [
    { n: "Priya S.", s: 92 },
    { n: "Rakesh M.", s: 81 },
    { n: "Aisha K.", s: 74 },
    { n: "Vikram T.", s: 66 },
  ];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Patient Intent Score</p>
      <div className="mt-1 space-y-1">
        {leads.map((l) => (
          <div key={l.n} className="flex items-center gap-1.5 text-[9px]">
            <span className="w-14 truncate">{l.n}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                style={{ width: `${l.s}%` }}
              />
            </div>
            <span className="w-5 text-right font-bold text-primary">{l.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniBookingCalendar() {
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "—", "—"];
  const taken = [true, false, true, true, false, true, false, false];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Dr. Mehta — OPD slots, Sat</p>
      <div className="mt-1.5 grid grid-cols-4 gap-1">
        {slots.map((s, i) => (
          <div
            key={i}
            className={`rounded px-1 py-0.5 text-center text-[9px] ${
              taken[i]
                ? "bg-muted text-muted-foreground line-through"
                : "bg-success/15 font-semibold text-success"
            }`}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniReactivation() {
  const data = [
    { m: "Aug", v: 18 },
    { m: "Sep", v: 26 },
    { m: "Oct", v: 31 },
    { m: "Nov", v: 47 },
  ];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <div className="flex items-center justify-between text-[9px]">
        <span className="font-semibold text-muted-foreground">2nd-Eye + Recall (per mo)</span>
        <span className="font-semibold text-success">+161%</span>
      </div>
      <div className="mt-1 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="v"
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={{ r: 2.5, fill: "var(--color-primary)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function MiniDoctorPnl() {
  const docs = [
    { d: "Rao", v: 38 },
    { d: "Mehta", v: 31 },
    { d: "Iyer", v: 24 },
    { d: "Khan", v: 19 },
    { d: "Pillai", v: 14 },
  ];
  const colors = [
    "var(--color-primary)",
    "var(--color-primary-glow)",
    "var(--color-success)",
    "var(--color-primary)",
    "var(--color-primary-glow)",
  ];
  const total = docs.reduce((a, b) => a + b.v, 0);
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <div className="flex items-center justify-between text-[9px] text-muted-foreground">
        <span className="font-semibold">Revenue / Doctor (₹L)</span>
        <span className="font-bold text-foreground">₹{total}L</span>
      </div>
      <div className="mt-1 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={docs} dataKey="v" innerRadius={14} outerRadius={24} stroke="none">
              {docs.map((_, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* =========================================================
 *      NEW MINI VISUALS (replacement set)
 * ========================================================= */

export function MiniFollowUpScreen() {
  const items = [
    { n: "Mrs. Kapoor", due: "Today 3:00 PM", tone: "bg-destructive/15 text-destructive" },
    { n: "Arjun R.", due: "Tomorrow 11 AM", tone: "bg-primary/10 text-primary" },
    { n: "Sana M.", due: "Fri 4:30 PM", tone: "bg-muted text-muted-foreground" },
  ];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <div className="flex items-center justify-between text-[9px]">
        <span className="font-semibold text-muted-foreground">Follow-Ups · 18 due</span>
        <span className="font-semibold text-success">on-time 92%</span>
      </div>
      <div className="mt-1 space-y-1">
        {items.map((i) => (
          <div key={i.n} className="flex items-center justify-between rounded bg-background px-1.5 py-1 text-[9px]">
            <span className="font-semibold">{i.n}</span>
            <span className={`rounded-full px-1.5 py-0.5 font-semibold ${i.tone}`}>{i.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniAgentPerformance() {
  const agents = [
    { n: "Anjali", c: 142, r: 38 },
    { n: "Ravi", c: 128, r: 31 },
    { n: "Neha", c: 96, r: 22 },
    { n: "Imran", c: 81, r: 18 },
  ];
  const max = Math.max(...agents.map((a) => a.c));
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Agent-wise Performance</p>
      <div className="mt-1 space-y-1">
        {agents.map((a) => (
          <div key={a.n} className="flex items-center gap-1.5 text-[9px]">
            <span className="w-10 truncate">{a.n}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                style={{ width: `${(a.c / max) * 100}%` }}
              />
            </div>
            <span className="w-10 text-right font-bold text-primary">{a.r} conv</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniWhatsappCrm() {
  const msgs = [
    { n: "Mrs. Kapoor", m: "Pricing for both eyes?", t: "now", u: true },
    { n: "Arjun R.", m: "Booked LASIK ✅", t: "3m", u: false },
    { n: "Sana M.", m: "Sent EMI brochure", t: "12m", u: false },
  ];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <div className="flex items-center justify-between text-[9px]">
        <span className="font-semibold text-success">● WhatsApp CRM</span>
        <span className="rounded-full bg-destructive/10 px-1 font-bold text-destructive">12 new</span>
      </div>
      <div className="mt-1 space-y-1">
        {msgs.map((m) => (
          <div key={m.n} className="flex items-start justify-between gap-1 rounded bg-background px-1.5 py-1">
            <div className="min-w-0">
              <p className="text-[9px] font-semibold">{m.n}</p>
              <p className="truncate text-[9px] text-muted-foreground">{m.m}</p>
            </div>
            <span className="text-[8px] text-muted-foreground">{m.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniConversionRatio() {
  const data = [
    { name: "Success", v: 311 },
    { name: "Work Up", v: 431 },
  ];
  const colors = ["var(--color-success)", "var(--color-primary-glow)"];
  const total = data.reduce((a, b) => a + b.v, 0);
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Success vs Work-Up</p>
      <div className="mt-1 flex items-center gap-2">
        <div className="h-12 w-12">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="v" innerRadius={12} outerRadius={22} stroke="none">
                {data.map((_, i) => (
                  <Cell key={i} fill={colors[i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 space-y-0.5 text-[9px]">
          <div className="flex justify-between">
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-sm bg-success" />Success</span>
            <span className="font-bold">{Math.round((311 / total) * 100)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-sm bg-primary-glow" />Work Up</span>
            <span className="font-bold">{Math.round((431 / total) * 100)}%</span>
          </div>
          <div className="flex justify-between border-t border-border pt-0.5">
            <span className="text-muted-foreground">Total</span>
            <span className="font-bold">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MiniTempDashboard() {
  const buckets = [
    { t: "Hot", v: 184, tone: "bg-destructive", text: "text-destructive" },
    { t: "Warm", v: 412, tone: "bg-primary", text: "text-primary" },
    { t: "Cold", v: 1244, tone: "bg-muted-foreground/40", text: "text-muted-foreground" },
  ];
  const max = Math.max(...buckets.map((b) => b.v));
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Lead Temperature</p>
      <div className="mt-1.5 space-y-1">
        {buckets.map((b) => (
          <div key={b.t} className="flex items-center gap-1.5 text-[9px]">
            <span className={`w-10 font-bold ${b.text}`}>{b.t}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className={`h-full rounded-full ${b.tone}`} style={{ width: `${(b.v / max) * 100}%` }} />
            </div>
            <span className="w-9 text-right font-semibold">{b.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniTreatmentLeads() {
  const tx = [
    { t: "Cataract", v: 612 },
    { t: "LASIK", v: 438 },
    { t: "Retina", v: 261 },
    { t: "Glaucoma", v: 142 },
  ];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Leads by Treatment</p>
      <div className="mt-1 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tx} layout="vertical" margin={{ left: 0, right: 4, top: 0, bottom: 0 }}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="t" width={50} tick={{ fontSize: 9, fill: "var(--color-muted-foreground)" }} axisLine={false} tickLine={false} />
            <Bar dataKey="v" fill="var(--color-primary)" radius={[0, 3, 3, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function MiniStagePipeline() {
  const stages = [
    { s: "Consultation Done", v: 742, pct: 100 },
    { s: "In Follow-Up", v: 512, pct: 69 },
    { s: "Case Closed", v: 311, pct: 42 },
  ];
  return (
    <div className={`${MINI_H} rounded-md border border-border/70 bg-surface-tint/50 p-2`}>
      <p className="text-[9px] font-semibold text-muted-foreground">Stage Pipeline</p>
      <div className="mt-1 space-y-1">
        {stages.map((s) => (
          <div key={s.s}>
            <div className="flex justify-between text-[9px]">
              <span className="font-medium">{s.s}</span>
              <span className="font-bold text-primary">{s.v}</span>
            </div>
            <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
