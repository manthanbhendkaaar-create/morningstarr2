"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/GlassCard";

const MANUAL_STEPS = [
  "Lead arrives",
  "Slow response",
  "Lead leaves",
  "Revenue lost",
];

const AI_STEPS = [
  "Lead arrives",
  "Instant AI response",
  "Meeting booked",
  "Revenue generated",
];

function FlowColumn({
  steps,
  variant,
}: {
  steps: string[];
  variant: "manual" | "ai";
}) {
  const isManual = variant === "manual";
  const accentColor = isManual ? "#ef4444" : "#00FFB2";
  const bgClass = isManual ? "from-red-500/10 to-red-500/5" : "from-accent-green/10 to-accent-green/5";
  const borderClass = isManual ? "border-red-500/20" : "border-accent-green/20";

  return (
    <div className={`glass rounded-2xl p-8 bg-gradient-to-b ${bgClass} ${borderClass} border`}>
      <div className="flex items-center gap-3 mb-8">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${accentColor}20` }}
        >
          {isManual ? (
            <X className="w-5 h-5 text-red-400" />
          ) : (
            <Check className="w-5 h-5 text-accent-green" />
          )}
        </div>
        <h3 className="text-xl font-bold">
          {isManual ? "Manual Process" : "AI Automation"}
        </h3>
      </div>

      <div className="space-y-1">
        {steps.map((step, i) => (
          <div key={step}>
            <motion.div
              initial={{ opacity: 0, x: isManual ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: accentColor }}
              />
              <span className="text-sm font-medium">{step}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-2">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 24 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.1, duration: 0.3 }}
                  className="w-px bg-gradient-to-b"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, ${accentColor}80, ${accentColor}20)`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CostComparison() {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The Problem"
            title="The Cost Of Manual Work"
            subtitle="Every minute you wait to respond, a competitor is closing your lead."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal direction="right">
            <FlowColumn steps={MANUAL_STEPS} variant="manual" />
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2}>
            <FlowColumn steps={AI_STEPS} variant="ai" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
