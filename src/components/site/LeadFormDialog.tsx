import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  nameSchema,
  emailSchema,
  phoneSchema,
  cityFieldSchema,
  messageSchema,
  honeypotSchema,
  isTooSoon,
} from "@/lib/validation";

/* ----------------- Schema (matches required form fields) ----------------- */
const leadSchema = z.object({
  centreName: nameSchema,
  doctorName: nameSchema,
  mobile: phoneSchema,
  location: cityFieldSchema,
  email: emailSchema,
  comment: messageSchema.optional().or(z.literal("")),
  // honeypot + timestamp (anti-bot)
  website: honeypotSchema,
  startedAt: z.number().int().positive().optional(),
});
type LeadInput = z.infer<typeof leadSchema>;
type FieldErrors = Partial<Record<keyof LeadInput, string>>;

/* ----------------- Context ----------------- */
type Ctx = { open: (source?: string) => void };
const LeadFormCtx = createContext<Ctx | null>(null);

export function useLeadForm() {
  const ctx = useContext(LeadFormCtx);
  if (!ctx) throw new Error("useLeadForm must be used inside <LeadFormProvider>");
  return ctx;
}

/* ----------------- Provider ----------------- */
export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string | undefined>();
  const startedAtRef = useRef<number>(0);

  const open = useCallback((src?: string) => {
    setSource(src);
    startedAtRef.current = Date.now();
    setIsOpen(true);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LeadFormCtx.Provider value={value}>
      {children}
      <LeadFormDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        source={source}
        startedAt={startedAtRef.current}
      />
    </LeadFormCtx.Provider>
  );
}

/* ----------------- Trigger button (drop-in CTA) ----------------- */
export function LeadFormTrigger({
  children,
  source,
  className,
  size,
  variant,
  asChild,
}: {
  children: ReactNode;
  source?: string;
  className?: string;
  size?: React.ComponentProps<typeof Button>["size"];
  variant?: React.ComponentProps<typeof Button>["variant"];
  asChild?: boolean;
}) {
  const { open } = useLeadForm();
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      className={className}
      asChild={asChild}
      onClick={() => open(source)}
    >
      {children}
    </Button>
  );
}

/* ----------------- Dialog ----------------- */
function LeadFormDialog({
  isOpen,
  onOpenChange,
  source,
  startedAt,
}: {
  isOpen: boolean;
  onOpenChange: (o: boolean) => void;
  source?: string;
  startedAt: number;
}) {
  const [values, setValues] = useState<LeadInput>({
    centreName: "",
    doctorName: "",
    mobile: "",
    location: "",
    email: "",
    comment: "",
    website: "",
    startedAt,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function setField<K extends keyof LeadInput>(key: K, val: LeadInput[K]) {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function reset() {
    setValues({
      centreName: "",
      doctorName: "",
      mobile: "",
      location: "",
      email: "",
      comment: "",
      website: "",
      startedAt,
    });
    setErrors({});
    setDone(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    // anti-bot: too-fast submission
    if (isTooSoon(startedAt, 1500)) {
      toast.error("Please take a moment to fill the form.");
      return;
    }

    const payload = { ...values, startedAt };
    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const fe: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof LeadInput | undefined;
        if (k && !fe[k]) fe[k] = issue.message;
      }
      // honeypot triggered → silently drop
      if (fe.website) {
        setDone(true);
        return;
      }
      setErrors(fe);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      // No backend endpoint yet — simulate a submit. When backend is added,
      // POST `parsed.data` (omit `website`/`startedAt`) to the server function.
      await new Promise((r) => setTimeout(r, 700));
      setDone(true);
      toast.success("Thanks! Our team will reach out within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(reset, 200);
      }}
    >
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-xl">
        {done ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Request received</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
              Our eyecare growth specialists will contact you within 24 hours.
            </p>
            <Button className="mt-6" onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Schedule a Growth Consultation</DialogTitle>
              <DialogDescription>
                Tell us about your eye centre. We'll get back within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 grid gap-4" noValidate>
              {/* honeypot — hidden from users, visible to bots */}
              <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    type="text"
                    value={values.website}
                    onChange={(e) => setField("website", e.target.value)}
                  />
                </label>
              </div>

              <Field label="Eye Centre Name" error={errors.centreName} required>
                <Input
                  value={values.centreName}
                  onChange={(e) => setField("centreName", e.target.value)}
                  maxLength={100}
                  placeholder="e.g. Vision Plus Eye Hospital"
                  autoComplete="organization"
                  required
                />
              </Field>

              <Field label="Ophthalmologist's Name" error={errors.doctorName} required>
                <Input
                  value={values.doctorName}
                  onChange={(e) => setField("doctorName", e.target.value)}
                  maxLength={100}
                  placeholder="Dr. Full Name"
                  autoComplete="name"
                  required
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Mobile" error={errors.mobile} required>
                  <Input
                    type="tel"
                    inputMode="tel"
                    value={values.mobile}
                    onChange={(e) => setField("mobile", e.target.value)}
                    maxLength={15}
                    placeholder="+91 98xxxxxxxx"
                    autoComplete="tel"
                    required
                  />
                </Field>
                <Field label="Location" error={errors.location} required>
                  <Input
                    value={values.location}
                    onChange={(e) => setField("location", e.target.value)}
                    maxLength={60}
                    placeholder="City"
                    autoComplete="address-level2"
                    required
                  />
                </Field>
              </div>

              <Field label="Email" error={errors.email} required>
                <Input
                  type="email"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  maxLength={254}
                  placeholder="you@clinic.com"
                  autoComplete="email"
                  required
                />
              </Field>

              <Field label="Comment" error={errors.comment}>
                <Textarea
                  value={values.comment ?? ""}
                  onChange={(e) => setField("comment", e.target.value)}
                  maxLength={1000}
                  rows={4}
                  placeholder="Tell us briefly about your goals (optional)"
                />
              </Field>

              {source && (
                <p className="text-xs text-muted-foreground">
                  Submitting from: <span className="font-medium">{source}</span>
                </p>
              )}

              <Button type="submit" size="lg" disabled={submitting} className="w-full shadow-glow">
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Request Consultation <Send className="ml-1.5 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                By submitting, you agree to be contacted by Transess Technologies regarding eyecare growth services.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
