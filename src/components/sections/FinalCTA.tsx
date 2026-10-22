"use client";

import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking/BookingButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { GradientMesh } from "@/components/effects/BackgroundEffects";
import { CTAS } from "@/lib/constants";

const POINTS = [
  // 2026-10-22: full client capacity, so the points describe the waitlist, not a call.
  { title: "Free waitlist", label: "We email you, in order, when a slot opens" },
  { title: "£500 deposit", label: "Refundable until we offer you a slot, credited to your first invoice" },
  { title: "Clear scope", label: "Final pricing agreed in writing before any work starts" },
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

      </div>
    </section>
  );
}
