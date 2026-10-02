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
    title: "Comment & DM Reply Assistant",
    description: "Pulls new comments and DMs across every brand, drafts replies in each brand's voice, and queues them for one-click approval.",
    icon: MessageSquare,
    color: "#00FFB2",
    metrics: ["Instagram / TikTok / FB", "Brand voice", "Human approval"],
  },
  {
    title: "Content Repurposing Engine",
    description: "Turns one video, post or blog into captions, short clips, carousels and posts for every platform.",
    icon: Zap,
    color: "#7B61FF",
    metrics: ["One input", "Captions + clips", "Ready to schedule"],
  },
  {
    title: "Client Reporting Autopilot",
    description: "Pulls ads, analytics and social data, writes the commentary, and sends a branded report on schedule.",
    icon: Mail,
    color: "#00D4FF",
    metrics: ["Meta / Google / GA4", "AI commentary", "Weekly or monthly"],
  },
  {
    title: "Lead-to-Call Engine",
    description: "Answers every inbound lead in minutes, qualifies it and books the discovery call.",
    icon: Zap,
    color: "#7B61FF",
    metrics: ["Forms, ads, email", "AI qualification", "Calendar booking"],
  },
  {
    title: "Client Onboarding Autopilot",
    description: "From signed contract to kickoff: intake, folders, channels, tasks and the first call.",
    icon: Calendar,
    color: "#00FFB2",
    metrics: ["Intake forms", "Drive / Slack / PM tool", "Kickoff booked"],
  },
  {
    title: "Outbound Engine",
    description: "Finds prospects, writes a personal first line from their real content, and sends from warmed inboxes.",
    icon: MessageSquare,
    color: "#00D4FF",
    metrics: ["Lead sourcing", "AI personalisation", "Reply drafts"],
  },
  {
    title: "Ops & CRM Sync",
    description: "Keeps your CRM, project tool and sheets in sync so nobody copies data by hand.",
    icon: Database,
    color: "#7B61FF",
    metrics: ["HubSpot / GHL", "ClickUp / Asana", "Daily summaries"],
  },
];

export function AutomationGallery() {
  return (
    <section id="gallery" className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Automations"
            title="Agency Systems"
            subtitle="The systems agencies ask us for most. Each one is scoped to your stack."
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
