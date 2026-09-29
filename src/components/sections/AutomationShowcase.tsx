"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/GlassCard";
import { PremiumGlassCard } from "@/components/ui/PremiumGlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { VisualAutomationFlow } from "@/components/sections/VisualAutomationFlow";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "reporting",
    label: "Client Reporting",
    description: "Ads + analytics data → AI commentary → branded report → sent to the client on schedule",
  },
  {
    id: "lead-to-call",
    label: "Lead-to-Call",
    description: "Form or ad lead → instant reply → AI qualification → discovery call booked → CRM updated",
  },
  {
    id: "onboarding",
    label: "Onboarding",
    description: "Contract signed → intake form → folders, channels and tasks created → kickoff booked",
  },
  {
    id: "content-ops",
    label: "Content Ops",
    description: "Brief in → AI first draft → review and approval → scheduled and logged",
  },
];

export function AutomationShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="showcase" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/[0.04] via-transparent to-accent-blue/[0.04] pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Example Flows"
            title="Systems We Build For Agencies"
            subtitle="Pick a system to see how the work moves without anyone touching it."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                    : "glass-premium text-text-secondary hover:text-text-primary"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <PremiumGlassCard glow="blue" className="max-w-5xl mx-auto !p-8 md:!p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-text-secondary text-center mb-8">{active.description}</p>
                <VisualAutomationFlow />
              </motion.div>
            </AnimatePresence>
          </PremiumGlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
