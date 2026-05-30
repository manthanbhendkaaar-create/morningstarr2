"use client";

import { Clock, Shield, RefreshCw, Calendar, Users } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";

const AUTHORITY_POINTS = [
  {
    title: "Faster Response Times",
    description: "Leads get answered in seconds — not hours — so hot prospects never go cold.",
    icon: Clock,
    color: "#00D4FF",
  },
  {
    title: "24/7 Lead Qualification",
    description: "Every inquiry is scored and routed automatically, day or night, weekends included.",
    icon: Shield,
    color: "#7B61FF",
  },
  {
    title: "CRM Synchronization",
    description: "Every conversation, tag, and status update flows into your CRM without manual entry.",
    icon: RefreshCw,
    color: "#00FFB2",
  },
  {
    title: "Appointment Automation",
    description: "Qualified leads book directly into your calendar with reminders and no-show reduction.",
    icon: Calendar,
    color: "#00D4FF",
  },
  {
    title: "Human Oversight",
    description: "Automation handles the repetitive work. Your team steps in for high-value conversations.",
    icon: Users,
    color: "#7B61FF",
  },
];

export function AuthoritySection() {
  return (
    <section id="why-choose-us" className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Authority"
            title="Why Businesses Choose MorningstarrAI"
            subtitle="Done-for-you automation built for revenue outcomes — not experiments."
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUTHORITY_POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <GlassCard className="h-full hover:glow-blue">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${point.color}20` }}
                >
                  <point.icon className="w-5 h-5" style={{ color: point.color }} />
                </div>
                <h3 className="font-bold mb-2">{point.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{point.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
