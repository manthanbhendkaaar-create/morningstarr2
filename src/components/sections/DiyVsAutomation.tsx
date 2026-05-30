"use client";

import { X, Check } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookingButton } from "@/components/booking/BookingButton";
import { CTAS } from "@/lib/constants";

const COMPARISON = [
  { category: "Setup", diy: "You figure it out", done: "Built & deployed for you" },
  { category: "Maintenance", diy: "Ongoing prompt tweaking", done: "Monitored & optimized" },
  { category: "Integrations", diy: "Copy-paste between tools", done: "CRM, WhatsApp, calendar connected" },
  { category: "Follow-up", diy: "Manual every time", done: "Automated sequences 24/7" },
  { category: "Reliability", diy: "Breaks when you're busy", done: "Runs whether you're online or not" },
  { category: "Scalability", diy: "More leads = more work", done: "More leads = same effort" },
];

export function DiyVsAutomation() {
  return (
    <section id="diy-vs-automation" className="section-padding bg-bg-secondary/30 relative">
      <div className="container-wide max-w-4xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Comparison"
            title="DIY AI Tools vs Done-For-You Automation"
            subtitle="ChatGPT can write a reply. It can't run your entire lead-to-appointment pipeline while you sleep."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <GlassCard hover={false} className="overflow-hidden !p-0">
            <div className="grid grid-cols-3 gap-0 text-sm border-b border-white/5 bg-white/[0.02]">
              <div className="p-4 font-medium text-text-muted" />
              <div className="p-4 font-semibold text-center border-l border-white/5 text-red-400/90">
                DIY AI Tools
              </div>
              <div className="p-4 font-semibold text-center border-l border-white/5 text-accent-green">
                Done-For-You Systems
              </div>
            </div>
            {COMPARISON.map((row) => (
              <div
                key={row.category}
                className="grid grid-cols-3 gap-0 border-b border-white/5 last:border-0"
              >
                <div className="p-4 font-medium text-text-secondary">{row.category}</div>
                <div className="p-4 border-l border-white/5 flex items-start gap-2 text-text-muted">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{row.diy}</span>
                </div>
                <div className="p-4 border-l border-white/5 flex items-start gap-2 text-text-secondary">
                  <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                  <span>{row.done}</span>
                </div>
              </div>
            ))}
          </GlassCard>

          <div className="text-center mt-8">
            <BookingButton size="lg">
              {CTAS.getAutomationPlan}
            </BookingButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
