"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useExperience } from "@/lib/experience-context";

const JOURNEY = [
  "Lead enters",
  "AI processes",
  "Lead qualified",
  "Appointment booked",
  "Revenue generated",
];

export function ScrollJourney() {
  const { isDesktop, reducedMotion } = useExperience();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollHeight > 0 ? window.scrollY / scrollHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  const activeIndex = Math.min(
    JOURNEY.length - 1,
    Math.floor(progress * JOURNEY.length)
  );

  if (!isDesktop || reducedMotion) return null;

  return (
    <div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
      aria-hidden="true"
    >
      {JOURNEY.map((step, i) => (
        <motion.div
          key={step}
          animate={{
            opacity: i <= activeIndex ? 0.9 : 0.25,
            x: i === activeIndex ? 4 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <div
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
              i <= activeIndex ? "bg-accent-green shadow-[0_0_8px_rgba(0,255,178,0.5)]" : "bg-white/20"
            }`}
          />
          <span className="text-[10px] text-text-muted whitespace-nowrap">{step}</span>
        </motion.div>
      ))}
    </div>
  );
}
