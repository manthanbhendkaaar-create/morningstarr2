"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Megaphone,
  Settings,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/GlassCard";
import { PremiumGlassCard } from "@/components/ui/PremiumGlassCard";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";

const EMPLOYEES = [
  {
    title: "AI Sales Representative",
    icon: TrendingUp,
    color: "#00D4FF",
    features: ["Replies instantly", "Qualifies leads", "Books meetings"],
  },
  {
    title: "AI Customer Support Agent",
    icon: Headphones,
    color: "#7B61FF",
    features: ["Answers FAQs", "Handles tickets", "Supports customers"],
  },
  {
    title: "AI Operations Manager",
    icon: Settings,
    color: "#00FFB2",
    features: ["Assigns tasks", "Tracks progress", "Updates systems"],
  },
  {
    title: "AI Marketing Assistant",
    icon: Megaphone,
    color: "#00D4FF",
    features: ["Sends emails", "Runs campaigns", "Nurtures leads"],
  },
];

export function AIWorkforce() {
  return (
    <section id="workforce" className="section-padding relative bg-bg-secondary/30">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Your AI Team"
            title="Meet Your AI Workforce"
            subtitle="Deploy intelligent agents that work around the clock — no breaks, no sick days, no missed leads."
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EMPLOYEES.map((employee) => (
            <StaggerItem key={employee.title}>
              <PremiumGlassCard glow="blue" className="h-full group">
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${employee.color}20` }}
                  animate={{ boxShadow: [`0 0 0px ${employee.color}00`, `0 0 20px ${employee.color}30`, `0 0 0px ${employee.color}00`] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <employee.icon
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: employee.color }}
                  />
                </motion.div>
                <h3 className="text-lg font-bold mb-4">{employee.title}</h3>
                <ul className="space-y-2">
                  {employee.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-text-secondary flex items-center gap-2"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: employee.color }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${employee.color}, transparent)` }}
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </PremiumGlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
