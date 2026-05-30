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
    id: "real-estate",
    label: "Real Estate",
    description: "Facebook lead → AI qualification → WhatsApp follow-up → booked showing",
  },
  {
    id: "agency",
    label: "Agency",
    description: "Form submit → AI scoring → email sequence → discovery call booked",
  },
  {
    id: "coaching",
    label: "Coaching",
    description: "Instagram DM → AI conversation → needs assessment → strategy call",
  },
  {
    id: "local",
    label: "Local Business",
    description: "Google inquiry → instant reply → service qualified → appointment set",
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
            eyebrow="Live Demo"
            title="Interactive Automation Showcase"
            subtitle="See how AI automation works across different industries."
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
