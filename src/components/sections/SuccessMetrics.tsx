"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/GlassCard";
import { PremiumGlassCard } from "@/components/ui/PremiumGlassCard";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";

const METRICS = [
  { value: 500000, suffix: "+", label: "Messages Automated", format: "compact" as const },
  { value: 50000, suffix: "+", label: "Leads Processed", format: "compact" as const },
  { value: 2500, suffix: "+", label: "Appointments Booked", format: "compact" as const },
  { value: 10, suffix: "M+", label: "Revenue Influenced", format: "currencyM" as const },
];

export function SuccessMetrics() {
  return (
    <section id="success-metrics" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/[0.03] via-transparent to-accent-purple/[0.03] pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Impact"
            title="Revenue Outcomes Our Systems Deliver"
            subtitle="Aggregate results from automation systems built for lead generation, appointment booking, and CRM workflows."
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((metric) => (
            <StaggerItem key={metric.label}>
              <PremiumGlassCard glow="blue" className="text-center">
                <div className="relative">
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-2 metric-pulse">
                    {metric.format === "currencyM" ? (
                      <>$<AnimatedCounter value={metric.value} suffix="M+" /></>
                    ) : (
                      <AnimatedCounter
                        value={metric.value}
                        suffix={metric.suffix}
                      />
                    )}
                  </p>
                  <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden mt-3">
                    <div className="h-full w-2/3 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full metric-progress-line" />
                  </div>
                </div>
                <p className="text-sm text-text-secondary mt-3">{metric.label}</p>
              </PremiumGlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
