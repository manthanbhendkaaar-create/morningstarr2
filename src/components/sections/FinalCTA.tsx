"use client";

import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking/BookingButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { GradientMesh } from "@/components/effects/BackgroundEffects";
import { CTAS } from "@/lib/constants";

const CalendlyEmbed = dynamic(
  () => import("@/components/CalendlyEmbed").then((mod) => mod.CalendlyEmbed),
  { ssr: false, loading: () => (
    <div className="w-full h-[700px] glass rounded-2xl animate-pulse" />
  )}
);

const POINTS = [
  { title: "30 minutes", label: "We map where your team's hours go" },
  { title: "One bottleneck", label: "We pick the system with the biggest payback" },
  { title: "Clear scope", label: "You leave with a plan, timeline and price" },
];

export function FinalCTA() {
  return (
    <section id="book-audit" className="relative section-padding overflow-hidden">
      <GradientMesh />
      <GlowOrb color="blue" size="xl" className="top-0 left-1/4" />
      <GlowOrb color="purple" size="lg" className="bottom-0 right-1/4" delay={3} />

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
              Every Hour Spent On Admin Is{" "}
              <span className="gradient-text">Margin You Don't Keep</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            {POINTS.map((point) => (
              <div key={point.title} className="glass rounded-2xl p-6 text-center glow-blue">
                <p className="text-2xl font-bold gradient-text mb-2">{point.title}</p>
                <p className="text-sm text-text-secondary">{point.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center mb-10">
            <BookingButton size="lg">
              {CTAS.bookAutomationAudit}
              <ArrowRight className="w-4 h-4" />
            </BookingButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div id="calendly-embed" className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <CalendlyEmbed />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
