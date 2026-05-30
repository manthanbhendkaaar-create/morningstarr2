"use client";

import { MessageSquare, Mail, Calendar, Database, Zap } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";

const AUTOMATIONS = [
  {
    title: "Lead Automation",
    description: "Capture, qualify, and route leads instantly from any channel.",
    icon: Zap,
    color: "#00D4FF",
    metrics: ["47 leads/day", "12s response", "89% qualified"],
  },
  {
    title: "CRM Automation",
    description: "Auto-update pipelines, tags, and follow-up sequences.",
    icon: Database,
    color: "#7B61FF",
    metrics: ["100% synced", "0 manual entry", "24/7 updates"],
  },
  {
    title: "WhatsApp Automation",
    description: "Instant replies, qualification flows, and appointment booking.",
    icon: MessageSquare,
    color: "#00FFB2",
    metrics: ["98% open rate", "3x engagement", "Auto-booking"],
  },
  {
    title: "Email Automation",
    description: "Personalized sequences that nurture leads to conversion.",
    icon: Mail,
    color: "#00D4FF",
    metrics: ["42% open rate", "Smart timing", "A/B tested"],
  },
  {
    title: "Appointment Automation",
    description: "Self-scheduling with reminders and calendar sync.",
    icon: Calendar,
    color: "#7B61FF",
    metrics: ["No-show -60%", "Auto-reminders", "Calendar sync"],
  },
];

export function AutomationGallery() {
  return (
    <section id="gallery" className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Automations"
            title="Automation Gallery"
            subtitle="Real automation systems we've built for businesses like yours."
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUTOMATIONS.map((item) => (
            <StaggerItem key={item.title}>
              <GlassCard className="h-full group hover:glow-blue transition-all duration-500">
                <div
                  className="w-full h-32 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)` }}
                >
                  <item.icon
                    className="w-12 h-12 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ color: item.color }}
                  />
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-text-muted"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
