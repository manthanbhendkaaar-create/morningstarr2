"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { CTAS } from "@/lib/constants";
import { useCalendlyBooking } from "@/components/booking/CalendlyBookingProvider";

export function StickyBookingCTA() {
  const { openBooking } = useCalendlyBooking();

  return (
    <motion.button
      type="button"
      onClick={openBooking}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed z-40 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary font-semibold text-sm shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40 transition-shadow duration-300 animate-[pulse-glow_3s_ease-in-out_infinite]"
      aria-label="Book free automation audit"
    >
      <Calendar className="w-4 h-4" />
      {CTAS.bookAudit}
    </motion.button>
  );
}
