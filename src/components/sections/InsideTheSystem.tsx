"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/GlassCard";
import { PremiumGlassCard } from "@/components/ui/PremiumGlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TIMELINE = [
  { time: "0s", label: "Lead Arrives", color: "#00D4FF" },
  { time: "5s", label: "AI Responds", color: "#7B61FF" },
  { time: "12s", label: "Lead Qualified", color: "#00FFB2" },
  { time: "18s", label: "Appointment Booked", color: "#00D4FF" },
  { time: "30s", label: "CRM Updated", color: "#7B61FF" },
];

export function InsideTheSystem() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TIMELINE.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inside-system" className="section-padding bg-bg-secondary/30 relative">
      <div className="container-wide max-w-4xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Speed"
            title="What Happens In The First 30 Seconds"
            subtitle="From lead capture to CRM update — fully automated, zero manual intervention."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <PremiumGlassCard glow="purple" tilt={false}>
            <div className="relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/10 hidden sm:block">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green"
                  animate={{ width: `${((active + 1) / TIMELINE.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
                {TIMELINE.map((step, i) => (
                  <motion.div
                    key={step.time}
                    animate={{
                      opacity: i <= active ? 1 : 0.35,
                      scale: i === active ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-xs font-bold border-2 transition-all duration-500"
                      style={{
                        borderColor: i <= active ? step.color : "rgba(255,255,255,0.1)",
                        background: i <= active ? `${step.color}20` : "transparent",
                        color: i <= active ? step.color : "var(--text-muted)",
                        boxShadow: i === active ? `0 0 20px ${step.color}40` : "none",
                      }}
                    >
                      {step.time}
                    </div>
                    <p className="text-xs font-medium text-text-secondary">{step.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </PremiumGlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
