"use client";

import { Rocket, Sliders, Users, TrendingUp } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";

const TRUST_CARDS = [
  {
    title: "Fast Deployment",
    description: "Your first system is live within 5 days of kickoff.",
    icon: Rocket,
    color: "#00D4FF",
  },
  {
    title: "Fully Customized",
    description: "Built around how your agency already delivers, on the tools you already pay for.",
    icon: Sliders,
    color: "#7B61FF",
  },
  {
    title: "Human + AI",
    description:
      "Systems handle the busywork. Your strategists and account managers keep the judgment calls.",
    icon: Users,
    color: "#00FFB2",
  },
  {
    title: "Continuous Optimization",
    description: "On retainer, we monitor, fix and extend your systems every week.",
    icon: TrendingUp,
    color: "#00D4FF",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/40 via-transparent to-transparent pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Trust"
            title="Why Agencies Work With MORNINGSTARR AI"
            subtitle="Senior-level builds, fixed timelines and systems you fully own."
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_CARDS.map((card) => (
            <StaggerItem key={card.title}>
              <GlassCard className="h-full hover:glow-blue group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${card.color}20` }}
                >
                  <card.icon className="w-5 h-5" style={{ color: card.color }} />
                </div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
