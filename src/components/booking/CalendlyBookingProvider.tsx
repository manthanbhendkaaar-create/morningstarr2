"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { FULL_CAPACITY, WAITLIST_DEPOSIT_URL } from "@/lib/guides";

// Booking popup for the consultation call (charged after the call).
// Step 1: a short form about the business. The answers go to the "strategy" function, which builds a tailored
// AI Automation Plan PDF and emails it to Manthan before the call.
// Then, outside India: the calendar opens straight away.
// In India: the client first sets up a Razorpay eNACH bank mandate (nothing is charged), then picks a time.
// The fee is debited from the mandate after the call.
// 2026-10-20 (Manthan: "let AIs pay but don't let them book a call"): the brief now goes through the "human-gate" function,
// which checks a press-and-hold "you're a real person" step, the honeypot and the time on the form ON THE SERVER, then saves
// the brief with the "strategy" function and only then returns the calendar link. The link is no longer in the page.

const MANDATE_FN = "https://pnokotvssodslxozepxe.supabase.co/functions/v1/mandate";
type HumanCheckApi = { ready: () => boolean; submit: (b: { form: Record<string, string>; hp: string }) => Promise<{ ok?: boolean; error?: string; network?: boolean; cal?: { url?: string } }> };
declare global {
  interface Window { HumanCheck?: { mount: (el: HTMLElement, brand: string) => HumanCheckApi } }
}
function loadHumanCheck(): Promise<void> {
  return new Promise((ok, bad) => {
    if (window.HumanCheck) return ok();
    const s = document.createElement("script");
    s.src = "/human-check.js?v=1";
    s.onload = () => ok();
    s.onerror = () => bad(new Error("Could not load the check. Please refresh the page."));
    document.head.appendChild(s);
  });
}

type Brief = Record<string, string>;
const BRIEF_FIELDS: { k: string; label: string; type?: "select" | "textarea" | "email" | "url"; options?: [string, string][]; required?: boolean; placeholder?: string; wide?: boolean }[] = [
  { k: "name", label: "Your name", required: true },
  { k: "email", label: "Work email", type: "email", required: true },
  { k: "company", label: "Company", required: true },
  { k: "website", label: "Website (optional)", placeholder: "yourcompany.com" },
  { k: "industry", label: "Industry", type: "select", required: true, options: [["agency", "Marketing / creative agency"], ["ecommerce", "E-commerce"], ["coaching", "Coaching / consulting"], ["realestate", "Real estate"], ["saas", "Software / SaaS"], ["services", "Local or professional services"], ["other", "Other"]] },
  { k: "team", label: "Team size", type: "select", required: true, options: [["1-5", "1-5 people"], ["6-20", "6-20 people"], ["21-50", "21-50 people"], ["50+", "50+ people"]] },
  { k: "what_you_do", label: "What does your business do?", type: "textarea", required: true, wide: true, placeholder: "e.g. Paid social and SEO for e-commerce brands in the UK" },
  { k: "tasks", label: "Which tasks eat most of your team's time?", type: "textarea", required: true, wide: true, placeholder: "e.g. monthly client reports, replying to new leads, onboarding new clients" },
  { k: "tools", label: "Tools you use", wide: true, placeholder: "e.g. Gmail, HubSpot, Google Sheets, Slack" },
  { k: "goal", label: "Main goal", type: "select", required: true, options: [["time", "Save the team's time"], ["leads", "More leads and booked calls"], ["speed", "Reply to customers faster"], ["reporting", "Better client reporting"], ["scale", "Grow without hiring"]] },
  { k: "admin_hours", label: "Repetitive work per week (whole team)", type: "select", required: true, options: [["<5", "Under 5 hours"], ["5-15", "5-15 hours"], ["15-30", "15-30 hours"], ["30+", "30+ hours"]] },
  { k: "leads_month", label: "New leads per month", type: "select", options: [["<20", "Under 20"], ["20-100", "20-100"], ["100-500", "100-500"], ["500+", "500+"]] },
  { k: "reply_time", label: "How fast new leads get a reply", type: "select", options: [["minutes", "Within minutes"], ["hours", "Within a few hours"], ["day", "Same day"], ["later", "Next day or later"]] },
  { k: "timeline", label: "When do you want to start?", type: "select", options: [["asap", "As soon as possible"], ["soon", "In the next 1-3 months"], ["exploring", "Just exploring"]] },
];
function withPrefill(url: string, b: Brief) {
  const q = new URLSearchParams();
  if (b.name) q.set("name", b.name);
  if (b.email) q.set("email", b.email);
  const qs = q.toString();
  return qs ? url + (url.includes("?") ? "&" : "?") + qs : url;
}

type CalendlyBookingContextValue = {
  openBooking: () => void;
};

const CalendlyBookingContext = createContext<CalendlyBookingContextValue | null>(null);

export function useCalendlyBooking() {
  const ctx = useContext(CalendlyBookingContext);
  if (!ctx) {
    throw new Error("useCalendlyBooking must be used within CalendlyBookingProvider");
  }
  return ctx;
}

type Step = "brief" | "choose" | "form" | "working" | "calendar" | "full" | "fullsent";

type RazorpayOptions = Record<string, unknown>;
type RazorpayInstance = { open: () => void; on: (ev: string, cb: (r: { error?: { description?: string } }) => void) => void };
declare global {
  interface Window { Razorpay?: new (o: RazorpayOptions) => RazorpayInstance }
}

function loadCheckout(): Promise<void> {
  return new Promise((ok, bad) => {
    if (window.Razorpay) return ok();
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => ok();
    s.onerror = () => bad(new Error("Could not load Razorpay. Please check your connection."));
    document.head.appendChild(s);
  });
}
async function post(body: Record<string, string>) {
  try {
    const r = await fetch(MANDATE_FN, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    return await r.json();
  } catch {
    return { error: "Network error. Please try again." };
  }
}

const input: CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #d1d5db",
  fontSize: "15px", color: "#111827", background: "#ffffff", outline: "none", marginTop: "6px",
  boxSizing: "border-box", fontFamily: "inherit",
};
const label: CSSProperties = { display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "14px" };
const primary: CSSProperties = {
  width: "100%", padding: "14px 18px", borderRadius: "12px", border: "none", cursor: "pointer",
  background: "#2563eb", color: "#ffffff", fontSize: "16px", fontWeight: 700,
};
const secondary: CSSProperties = { ...primary, background: "#ffffff", color: "#111827", border: "1px solid #d1d5db" };

export function CalendlyBookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>("brief");
  const [brief, setBrief] = useState<Brief>({});
  const [briefDone, setBriefDone] = useState(false);
  const [briefBusy, setBriefBusy] = useState(false);
  const [hp, setHp] = useState("");
  const [bookingUrl, setBookingUrl] = useState("");
  const [calUrl, setCalUrl] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const hc = useRef<HumanCheckApi | null>(null);
  const hcRef = useCallback((el: HTMLDivElement | null) => {
    hc.current = null;
    if (!el) return;
    loadHumanCheck().then(() => { if (el.isConnected && window.HumanCheck) hc.current = window.HumanCheck.mount(el, "morningstarr"); })
      .catch((e: Error) => setMsg(e.message));
  }, []);

  useEffect(() => {
    setMounted(true);
    if (new URLSearchParams(window.location.search).get("book") === "1") {
      try { const m = document.createElement("meta"); m.name = "robots"; m.content = "noindex, nofollow"; document.head.appendChild(m); } catch {}
      window.history.replaceState(null, "", window.location.pathname + window.location.hash);
      setOpen(true);
    }
  }, []);

  // 2026-10-13: full client capacity. Booking is replaced by a free waitlist (saved in Supabase, emails Manthan) plus the refundable deposit link.
  const [wl, setWl] = useState<{ name: string; email: string }>({ name: "", email: "" });
  const [wlMsg, setWlMsg] = useState("");
  const [wlBusy, setWlBusy] = useState(false);
  const joinWaitlist = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!wl.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(wl.email.trim())) { setWlMsg("Please enter your name and a valid email."); return; }
    setWlBusy(true); setWlMsg("");
    try {
      const r = await fetch("https://pnokotvssodslxozepxe.supabase.co/functions/v1/waitlist", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "morningstarr", name: wl.name.trim(), email: wl.email.trim(), source: "morningstarr-site" }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error((j && j.error) || "Please try again.");
      setStep("fullsent");
    } catch (err) { setWlMsg(err instanceof Error ? err.message : "Please try again."); }
    setWlBusy(false);
  }, [wl]);

  const openBooking = useCallback(() => {
    if (FULL_CAPACITY) { setWl({ name: "", email: "" }); setWlMsg(""); setStep("full"); setOpen(true); return; }
    setStep(briefDone ? "choose" : "brief");
    setMsg("");
    setOpen(true);
  }, [briefDone]);

  const submitBrief = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const missing = BRIEF_FIELDS.find((f) => f.required && !(brief[f.k] || "").trim());
    if (missing) { setMsg("Please fill in: " + missing.label); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((brief.email || "").trim())) { setMsg("Please enter a valid email."); return; }
    if (!hc.current || !hc.current.ready()) { setMsg("Please press and hold the button to confirm you're a person."); return; }
    setMsg("");
    setBriefBusy(true);
    const r = await hc.current.submit({ form: brief, hp });
    setBriefBusy(false);
    if (!r || !r.ok || !r.cal || !r.cal.url) {
      setMsg(r && r.network ? "We can't reach our booking server. Please try again, or email " + "manthanbhendkaaar@gmail.com" + "." : (r && r.error) || "Something went wrong. Please try again.");
      return;
    }
    setCalUrl(r.cal.url);
    setName((n) => n || brief.name || "");
    setEmail((m) => m || brief.email || "");
    setCompany((c) => c || brief.company || "");
    setBriefDone(true);
    setStep("choose");
  }, [brief, hp]);
  const closeBooking = useCallback(() => setOpen(false), []);

  const startMandate = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setMsg("");
    setStep("working");
    let r: Record<string, string>;
    try {
      [, r] = await Promise.all([loadCheckout(), post({ action: "start", brand: "morningstarr", name, email, contact: phone, company })]);
    } catch (err) {
      setStep("form");
      setMsg((err as Error).message);
      return;
    }
    if (!r || r.error || !r.order_id || !window.Razorpay) {
      setStep("form");
      setMsg((r && r.error) || "Something went wrong. Please try again.");
      return;
    }
    const rzp = new window.Razorpay({
      key: r.key_id, order_id: r.order_id, customer_id: r.customer_id, recurring: "1",
      name: "MorningstarrAI", description: "Bank mandate for your consultation call (nothing charged now)",
      prefill: { name: r.name, email: r.email, contact: r.contact, method: "emandate" },
      theme: { color: "#2563eb" },
      handler: async (p: { razorpay_payment_id: string }) => {
        const d = await post({ action: "done", order_id: r.order_id, payment_id: p.razorpay_payment_id });
        if (d && d.ok) {
          if (!calUrl) { setStep("brief"); setBriefDone(false); return; }
          setBookingUrl(withPrefill(calUrl, brief));
          setStep("calendar");
        } else {
          setStep("form");
          setMsg((d && d.error) || "The mandate wasn't completed. Please try again.");
        }
      },
      modal: { ondismiss: () => { setStep("form"); setMsg("Mandate not set up. You can try again whenever you're ready."); } },
    });
    rzp.on("payment.failed", (f) => { setStep("form"); setMsg((f && f.error && f.error.description) || "The mandate didn't go through. Please try again."); });
    rzp.open();
  }, [name, email, phone, company, brief, calUrl]);

  // Close on Escape and stop the page behind from scrolling while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const panel =
    step === "full" || step === "fullsent" ? (
      <div style={{ padding: "32px 28px", color: "#111827", overflowY: "auto", maxHeight: "90vh" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed", fontWeight: 700, margin: "0 0 8px" }}>Full capacity</p>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 8px" }}>We&apos;re not taking new clients right now.</h2>
        <p style={{ color: "#4b5563", margin: "0 0 18px", lineHeight: 1.55 }}>
          Every build slot is taken. Join the waitlist and we&apos;ll email you, in order, when a slot opens. To be offered a slot first, you can reserve with a <b style={{ color: "#111827" }}>£600 refundable deposit</b>: refunded in full any time until we offer you a slot, and credited to your first invoice when you join.
        </p>
        {step === "fullsent" ? (
          <p style={{ color: "#166534", fontWeight: 600, margin: "0 0 14px" }}>You&apos;re on the list. We&apos;ll email {wl.email} when a slot opens.</p>
        ) : (
          <form onSubmit={joinWaitlist} noValidate style={{ display: "grid", gap: "10px", margin: "0 0 14px" }}>
            <input style={input} placeholder="Your name" value={wl.name} autoComplete="name" onChange={(e) => setWl((w) => ({ ...w, name: e.target.value }))} />
            <input style={input} type="email" placeholder="Work email" value={wl.email} autoComplete="email" onChange={(e) => setWl((w) => ({ ...w, email: e.target.value }))} />
            {wlMsg && <p style={{ color: "#b91c1c", fontSize: "14px", margin: 0 }}>{wlMsg}</p>}
            <button type="submit" disabled={wlBusy} style={{ ...secondary, opacity: wlBusy ? 0.7 : 1 }}>{wlBusy ? "Joining…" : "Join the free waitlist"}</button>
          </form>
        )}
        <a href={WAITLIST_DEPOSIT_URL} style={{ ...primary, display: "block", textAlign: "center", textDecoration: "none" }}>Reserve a slot with a £600 refundable deposit →</a>
        <p style={{ color: "#6b7280", fontSize: "13px", margin: "12px 0 0", lineHeight: 1.5 }}>Nothing beyond the deposit is ever charged until you agree an amount in writing. Questions: manthanbhendkaaar@gmail.com</p>
      </div>
    ) : step === "calendar" ? (
      <iframe
        src={bookingUrl}
        title="Book a Consultation Call"
        style={{ width: "100%", height: "100%", border: 0, background: "#ffffff" }}
      />
    ) : step === "brief" ? (
      <form onSubmit={submitBrief} noValidate style={{ padding: "32px 28px", color: "#111827", overflowY: "auto", maxHeight: "90vh" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 8px" }}>Book a Consultation Call</h2>
        <p style={{ color: "#4b5563", margin: "0 0 18px", lineHeight: 1.55 }}>
          First, tell us about your business. We'll prepare an automation plan for <b style={{ color: "#111827" }}>your</b> business and walk you through it on the call. Takes about 2 minutes.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", columnGap: "14px" }}>
          {BRIEF_FIELDS.map((f) => (
            <label key={f.k} style={{ ...label, gridColumn: f.wide ? "1 / -1" : undefined }}>{f.label}
              {f.type === "select" ? (
                <select style={input} value={brief[f.k] || ""} onChange={(e) => setBrief((b) => ({ ...b, [f.k]: e.target.value }))}>
                  <option value="">Choose one</option>
                  {f.options!.map(([v, t]) => <option key={v} value={v}>{t}</option>)}
                </select>
              ) : f.type === "textarea" ? (
                <textarea style={{ ...input, minHeight: "70px", resize: "vertical" }} value={brief[f.k] || ""} placeholder={f.placeholder} onChange={(e) => setBrief((b) => ({ ...b, [f.k]: e.target.value }))} />
              ) : (
                <input style={input} type={f.type === "email" ? "email" : "text"} value={brief[f.k] || ""} placeholder={f.placeholder}
                  autoComplete={f.k === "name" ? "name" : f.k === "email" ? "email" : f.k === "company" ? "organization" : f.k === "website" ? "url" : undefined}
                  onChange={(e) => setBrief((b) => ({ ...b, [f.k]: e.target.value }))} />
              )}
            </label>
          ))}
        </div>
        <input value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
        <div ref={hcRef} />
        {msg && <p style={{ color: "#b91c1c", fontSize: "14px", margin: "0 0 12px" }}>{msg}</p>}
        <button type="submit" disabled={briefBusy} style={{ ...primary, opacity: briefBusy ? 0.7 : 1 }}>
          {briefBusy ? "Saving…" : "Continue to booking"}
        </button>
      </form>
    ) : step === "choose" ? (
      <div style={{ padding: "32px 28px", color: "#111827" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 18px" }}>Book a Consultation Call</h2>
        <p style={{ fontWeight: 600, margin: "0 0 12px" }}>Where is your business based?</p>
        <div style={{ display: "grid", gap: "10px" }}>
          <button type="button" style={primary} onClick={() => { if (!calUrl) { setBriefDone(false); setStep("brief"); return; } setBookingUrl(withPrefill(calUrl, brief)); setStep("calendar"); }}>Outside India</button>
          <button type="button" style={secondary} onClick={() => setStep("form")}>In India</button>
        </div>
      </div>
    ) : (
      <form onSubmit={startMandate} style={{ padding: "32px 28px", color: "#111827", overflowY: "auto", maxHeight: "90vh" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 8px" }}>Book a Consultation Call</h2>
        <p style={{ color: "#4b5563", margin: "0 0 18px", lineHeight: 1.55 }}>
          To book, clients in India set up a bank mandate (eNACH) through Razorpay. <b style={{ color: "#111827" }}>Nothing is charged when you book. Any package is only charged once you&apos;ve agreed to it.</b>{" "}
          You can cancel the mandate any time through your bank.
        </p>
        <label style={label}>Your name
          <input style={input} required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label style={label}>Work email
          <input style={input} required type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </label>
        <label style={label}>Mobile number
          <input style={input} required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="10-digit mobile" />
        </label>
        <label style={label}>Agency / company (optional)
          <input style={input} value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
        </label>
        {msg && <p style={{ color: "#b91c1c", fontSize: "14px", margin: "0 0 12px" }}>{msg}</p>}
        <button type="submit" disabled={step === "working"} style={{ ...primary, opacity: step === "working" ? 0.7 : 1 }}>
          {step === "working" ? "Opening Razorpay…" : "Set up mandate and pick a time"}
        </button>
      </form>
    );

  return (
    <CalendlyBookingContext.Provider value={{ openBooking }}>
      {children}
      {mounted &&
        open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Book a Consultation Call"
            onClick={closeBooking}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(5, 5, 5, 0.85)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: step === "calendar" ? "1000px" : step === "brief" ? "640px" : "520px",
                height: step === "calendar" ? "min(85vh, 760px)" : "auto",
                maxHeight: "90vh",
                background: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(0, 0, 0, 0.6)",
              }}
            >
              {panel}
              <button
                type="button"
                onClick={closeBooking}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "999px",
                  border: "none",
                  background: "rgba(5, 5, 5, 0.85)",
                  color: "#ffffff",
                  fontSize: "20px",
                  lineHeight: "36px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
    </CalendlyBookingContext.Provider>
  );
}
