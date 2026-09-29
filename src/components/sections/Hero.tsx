"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { BookingButton } from "@/components/booking/BookingButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PremiumGlassCard } from "@/components/ui/PremiumGlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  NeuralNetworkBackground,
  GradientMesh,
  AnimatedGrid,
} from "@/components/effects/BackgroundEffects";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { ParticleField } from "@/components/effects/ParticleField";
import { HERO_BENEFITS, HERO_COPY, CTAS } from "@/lib/constants";

const WORKFLOW_STEPS = [
  { label: "Lead Arrives", color: "#00D4FF" },
  { label: "AI Responds", color: "#7B61FF" },
  { label: "Lead Qualified", color: "#00FFB2" },
  { label: "Appointment Booked", color: "#00D4FF" },
  { label: "CRM Updated", color: "#7B61FF" },
];

const ACTIVITY_FEED = [
  { text: "Lead Captured", source: "Facebook Ads", color: "#1877F2" },
  { text: "AI Replied", source: "12s response", color: "#00D4FF" },
  { text: "Meeting Booked", source: "Calendly", color: "#00FFB2" },
  { text: "CRM Updated", source: "HubSpot", color: "#7B61FF" },
  { text: "Email Sent", source: "Follow-up seq.", color: "#00D4FF" },
];

const FLOATING_CARDS = [
  { label: "Live", value: "ON", top: "-8%", right: "-5%" },
  { label: "Uptime", value: "99.9%", top: "40%", right: "-12%" },
  { label: "Agents", value: "4 Active", bottom: "5%", left: "-8%" },
];

function CommandCenterDashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const [feedIndex, setFeedIndex] = useState(0);
  const [metrics, setMetrics] = useState({
    leads: 47,
    meetings: 8,
    messages: 312,
    revenue: 28400,
    responseTime: 12,
  });

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 2000);
    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    const feedInterval = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % ACTIVITY_FEED.length);
      setMetrics((m) => ({
        leads: m.leads + (Math.random() > 0.6 ? 1 : 0),
        meetings: m.meetings + (Math.random() > 0.85 ? 1 : 0),
        messages: m.messages + Math.floor(Math.random() * 3 + 1),
        revenue: m.revenue + Math.floor(Math.random() * 500),
        responseTime: Math.max(8, Math.min(15, m.responseTime + (Math.random() > 0.5 ? -1 : 1))),
      }));
    }, 2500);
    return () => clearInterval(feedInterval);
  }, []);

  return (
    <div className="relative">
      {FLOATING_CARDS.map((card, i) => (
        <motion.div
          key={card.label}
          className="absolute z-20 glass-premium rounded-lg px-3 py-2 hidden lg:block"
          style={{ top: card.top, right: card.right, bottom: card.bottom, left: card.left }}
          animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        >
          <p className="text-[9px] text-text-muted uppercase">{card.label}</p>
          <p className="text-xs font-bold text-accent-blue">{card.value}</p>
        </motion.div>
      ))}

      <PremiumGlassCard glow="blue" className="!p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-text-muted ml-2">AI Command Center · example</span>
          <span className="ml-auto flex items-center gap-1.5 text-[10px] text-accent-green">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-5">
          {[
            { label: "Leads Today", value: metrics.leads },
            { label: "Meetings", value: metrics.meetings },
            { label: "Messages", value: metrics.messages },
            { label: "Revenue", value: metrics.revenue, prefix: "$" },
            { label: "Response", value: metrics.responseTime, suffix: "s" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-2 rounded-lg bg-white/5">
              <p className="text-sm font-bold gradient-text">
                {stat.prefix && stat.prefix}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[9px] text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-[10px] text-text-muted uppercase tracking-widest mb-2">Workflow</p>
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                animate={{
                  opacity: i <= activeStep ? 1 : 0.35,
                  scale: i === activeStep ? 1.02 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="flex items-center gap-2 p-2 rounded-lg border text-xs"
                  style={{
                    borderColor: i <= activeStep ? `${step.color}40` : "rgba(255,255,255,0.05)",
                    background: i <= activeStep ? `${step.color}10` : "rgba(255,255,255,0.02)",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold"
                    style={{ background: `${step.color}20`, color: step.color }}
                  >
                    {i + 1}
                  </div>
                  <span className="font-medium">{step.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="text-[10px] text-text-muted uppercase tracking-widest mb-2">Live Activity</p>
            <div className="space-y-2 h-[180px] overflow-hidden relative">
              <AnimatePresence mode="popLayout">
                {ACTIVITY_FEED.slice(feedIndex, feedIndex + 4).map((item, i) => (
                  <motion.div
                    key={`${item.text}-${feedIndex}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1 - i * 0.15, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-white/5 border border-white/5"
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: item.color, boxShadow: `0 0 8px ${item.color}60` }}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-medium">{item.text}</p>
                      <p className="text-[10px] text-text-muted truncate">{item.source}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </PremiumGlassCard>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <GradientMesh />
      <AnimatedGrid />
      <NeuralNetworkBackground />
      <ParticleField count={40} />
      <GlowOrb color="blue" size="xl" className="top-20 -right-32" />
      <GlowOrb color="purple" size="lg" className="bottom-20 -left-32" delay={2} />

      <div className="container-wide relative z-10 section-padding pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 glass-premium px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-xs text-text-secondary">{HERO_COPY.eyebrow}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                {HERO_COPY.headline}{" "}
                <span className="gradient-text">{HERO_COPY.headlineHighlight}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
                {HERO_COPY.subheadline}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {HERO_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-accent-green shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton size="lg">
                  {CTAS.bookAudit}
                  <ArrowRight className="w-4 h-4" />
                </BookingButton>
                <MagneticButton href={HERO_COPY.secondaryHref} variant="secondary" size="lg">
                  {HERO_COPY.secondaryCta}
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} direction="left">
            <CommandCenterDashboard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
