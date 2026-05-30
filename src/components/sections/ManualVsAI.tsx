"use client";

import { X, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const MANUAL_ITEMS = [
  "Works limited hours",
  "Slow follow-up",
  "Requires manual entry",
  "Human error",
  "Difficult scaling",
];

const AI_ITEMS = [
  "Works 24/7",
  "Instant responses",
  "Automated workflows",
  "Consistent execution",
  "Infinite scalability",
];

export function ManualVsAI() {
  return (
    <section id="manual-vs-ai" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/20 to-transparent pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Comparison"
            title="Manual Operations vs AI Automation"
            subtitle="See why growing businesses are replacing manual workflows with intelligent systems."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 md:p-8 border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Manual Operations</h3>
              </div>
              <ul className="space-y-4">
                {MANUAL_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 border border-accent-green/20 bg-gradient-to-b from-accent-green/5 to-transparent glow-green">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-green/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold">AI Automation</h3>
              </div>
              <ul className="space-y-4">
                {AI_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-accent-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
