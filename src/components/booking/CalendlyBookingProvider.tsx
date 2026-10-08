"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { CALENDLY_URL } from "@/lib/constants";

// Booking popup for the Google Calendar appointment page.
// (Replaces react-calendly's PopupModal, whose styles were never loaded, so the
// calendar showed see-through on top of the page.)

type CalendlyBookingContextValue = {
  openBooking: () => void;
};

const CalendlyBookingContext = createContext<CalendlyBookingContextValue | null>(
  null
);

export function useCalendlyBooking() {
  const ctx = useContext(CalendlyBookingContext);
  if (!ctx) {
    throw new Error("useCalendlyBooking must be used within CalendlyBookingProvider");
  }
  return ctx;
}

export function CalendlyBookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

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
                maxWidth: "1000px",
                height: "min(85vh, 760px)",
                background: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 24px 80px rgba(0, 0, 0, 0.6)",
              }}
            >
              <iframe
                src={CALENDLY_URL}
                title="Book a Consultation Call"
                style={{ width: "100%", height: "100%", border: 0, background: "#ffffff" }}
              />
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
