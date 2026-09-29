"use client";

import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";
import { Search, Send, CalendarCheck } from "lucide-react";

/**
 * Proof section. These are systems we built and run inside our own agency (Asendify).
 * Only add client case studies here once they are real and the client has agreed.
 */
const SYSTEMS = [
  {
    icon: Search,
    color: "#00D4FF",
    name: "Lead Engine",
    stack: "n8n · YouTube Data API · Supabase",
    before: "Prospects found by hand, one channel at a time.",
    after:
      "Searches 103 niches, filters by size, pulls public business emails and removes duplicates before anything is sent.",
  },
  {
    icon: Send,
    color: "#7B61FF",
    name: "Outbound Engine",
    stack: "Google Apps Script · Gemini · Gmail + Workspace",
    before: "Copy-paste emails and no idea which inbox was landing in spam.",
    after:
      "Runs 10+ inboxes with warm-up and daily limits, writes a personal first line from each prospect's real content, and drafts replies for approval.",
  },
  {
    icon: CalendarCheck,
    color: "#00FFB2",
    name: "Booking & Reporting",
    stack: "Calendly · Apps Script · UTM tracking",
    before: "No way to tell which email or inbox produced a call.",
    after:
      "Every booking link is tagged by inbox and email version, reminders go out 24h and 1h before calls, no-shows get a follow-up draft, and a daily report lands every morning.",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-bg-secondary/30">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Proof"
            title="We Run Our Own Agency On It"
            subtitle="Before building for clients, we built the systems that run Asendify, our video and YouTube growth agency. These run every day."
          />
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {SYSTEMS.map((s) => (
            <StaggerItem key={s.name}>
              <GlassCard className="h-full group hover:glow-purple transition-shadow duration-500" hover={false}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${s.color}20` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-xs text-text-muted mb-4">{s.stack}</p>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <p className="text-[10px] text-text-muted uppercase mb-1">Before</p>
                    <p className="text-text-secondary">{s.before}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-accent-green/10 border border-accent-green/20">
                    <p className="text-[10px] text-text-muted uppercase mb-1">Now</p>
                    <p className="text-text-secondary">{s.after}</p>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-text-muted mt-8 max-w-2xl mx-auto">
            We are taking on a small number of agency partners. Client case studies will appear here
            as those systems go live, shared with each client&apos;s permission.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
