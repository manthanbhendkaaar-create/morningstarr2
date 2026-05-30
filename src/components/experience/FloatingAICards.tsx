"use client";

import { motion } from "framer-motion";
import { Bot, Calendar, MessageCircle, BarChart3, Database } from "lucide-react";
import { useExperience } from "@/lib/experience-context";

const FLOATING = [
  { icon: Database, label: "CRM", x: "8%", y: "18%", delay: 0, blur: "blur-sm" },
  { icon: Bot, label: "AI Agent", x: "88%", y: "25%", delay: 2, blur: "blur-[2px]" },
  { icon: MessageCircle, label: "WhatsApp", x: "92%", y: "55%", delay: 4, blur: "blur-sm" },
  { icon: Calendar, label: "Calendar", x: "5%", y: "65%", delay: 1, blur: "blur-[2px]" },
  { icon: BarChart3, label: "Analytics", x: "85%", y: "78%", delay: 3, blur: "blur-sm" },
];

export function FloatingAICards() {
  const { isDesktop, reducedMotion } = useExperience();

  if (!isDesktop || reducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
      {FLOATING.map((item) => (
        <motion.div
          key={item.label}
          className={`absolute hidden xl:block glass-premium rounded-xl px-3 py-2 opacity-30 ${item.blur}`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
          }}
          transition={{
            duration: 8 + item.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <div className="flex items-center gap-2">
            <item.icon className="w-3.5 h-3.5 text-accent-blue" />
            <span className="text-[10px] text-text-muted font-medium">{item.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
