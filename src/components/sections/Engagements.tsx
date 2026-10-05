"use client";

import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { BookingButton } from "@/components/booking/BookingButton";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";
import { ENGAGEMENTS, GUARANTEE, CTAS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Engagements() {
  return (
    <section id="engagements" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/[0.03] via-transparent to-accent-purple/[0.03] pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Engagements"
            title="How We Work Together"
            subtitle="Fixed scope, fixed timeline, senior builds. Final pricing is agreed on the consultation call once we know your stack."
          />
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ENGAGEMENTS.map((e) => (
            <StaggerItem key={e.name}>
              <GlassCard
                glow={e.featured ? "purple" : "none"}
                hover={false}
                className={cn("h-full", e.featured && "border border-accent-purple/40")}
              >
                {e.featured && (
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-purple mb-3">
                    Most agencies start here
                  </p>
                )}
                <h3 className="text-xl font-bold mb-1">{e.name}</h3>
                <p className="text-sm text-text-secondary mb-5">{e.summary}</p>
                <p className="mb-6">
                  <span className="text-3xl font-bold gradient-text">{e.price}</span>
                  <span className="text-sm text-text-muted ml-2">{e.cadence}</span>
                </p>
                <ul className="space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto mt-10 glass-premium rounded-2xl p-5 flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-accent-green shrink-0" />
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">The 5-day promise.</strong> {GUARANTEE}
            </p>
          </div>
          <div className="text-center mt-8">
            <BookingButton size="lg">
              {CTAS.bookAutomationAudit}
              <ArrowRight className="w-4 h-4" />
            </BookingButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
