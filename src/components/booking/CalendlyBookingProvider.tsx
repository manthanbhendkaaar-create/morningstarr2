"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { CALENDLY_URL } from "@/lib/constants";

// Booking popup for the consultation call (charged after the call).
// Outside India: the calendar opens straight away.
// In India: the client first sets up a Razorpay eNACH bank mandate (nothing is charged), then picks a time.
// The fee is debited from the mandate after the call.

const MANDATE_FN = "https://pnokotvssodslxozepxe.supabase.co/functions/v1/mandate";

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

type Step = "choose" | "form" | "working" | "calendar";

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
  const [step, setStep] = useState<Step>("choose");
  const [bookingUrl, setBookingUrl] = useState(CALENDLY_URL);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    setMounted(true);
    if (new URLSearchParams(window.location.search).get("book") === "1") {
      window.history.replaceState(null, "", window.location.pathname + window.location.hash);
      setOpen(true);
    }
  }, []);

  const openBooking = useCallback(() => {
    setStep("choose");
    setMsg("");
    setOpen(true);
  }, []);
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
          setBookingUrl(d.booking_url || CALENDLY_URL);
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
  }, [name, email, phone, company]);

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
    step === "calendar" ? (
      <iframe
        src={bookingUrl}
        title="Book a Consultation Call"
        style={{ width: "100%", height: "100%", border: 0, background: "#ffffff" }}
      />
    ) : step === "choose" ? (
      <div style={{ padding: "32px 28px", color: "#111827" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 18px" }}>Book a Consultation Call</h2>
        <p style={{ fontWeight: 600, margin: "0 0 12px" }}>Where is your business based?</p>
        <div style={{ display: "grid", gap: "10px" }}>
          <button type="button" style={primary} onClick={() => { setBookingUrl(CALENDLY_URL); setStep("calendar"); }}>Outside India</button>
          <button type="button" style={secondary} onClick={() => setStep("form")}>In India</button>
        </div>
      </div>
    ) : (
      <form onSubmit={startMandate} style={{ padding: "32px 28px", color: "#111827", overflowY: "auto", maxHeight: "90vh" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 8px" }}>Book a Consultation Call</h2>
        <p style={{ color: "#4b5563", margin: "0 0 18px", lineHeight: 1.55 }}>
          To book, clients in India set up a bank mandate (eNACH) through Razorpay. <b style={{ color: "#111827" }}>Nothing is charged now.</b>{" "}
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
              background: "rgba(5, 8, 22, 0.85)",
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
                maxWidth: step === "calendar" ? "1000px" : "520px",
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
                  background: "rgba(5, 8, 22, 0.85)",
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
