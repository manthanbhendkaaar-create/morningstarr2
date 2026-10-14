"use client";

import { motion } from "framer-motion";
import { useExperience } from "@/lib/experience-context";

export function AmbientLayer() {
  const { normalizedX, normalizedY, reducedMotion } = useExperience();

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55,0.4) 0%, transparent 70%)",
          left: `${normalizedX * 100}%`,
          top: `${normalizedY * 100}%`,
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/2 w-full h-full opacity-[0.04]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(212, 175, 55,0.3), rgba(179, 143, 29,0.3), rgba(242, 210, 122,0.2), rgba(212, 175, 55,0.3))",
        }}
      />
    </div>
  );
}
