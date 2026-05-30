"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import { CALENDLY_URL } from "@/lib/constants";

const PopupModal = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupModal),
  { ssr: false }
);

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

  return (
    <CalendlyBookingContext.Provider value={{ openBooking }}>
      {children}
      {mounted && (
        <PopupModal
          url={CALENDLY_URL}
          open={open}
          onModalClose={closeBooking}
          rootElement={document.body}
          pageSettings={{
            backgroundColor: "050816",
            primaryColor: "00D4FF",
            textColor: "F8FAFC",
          }}
        />
      )}
    </CalendlyBookingContext.Provider>
  );
}
