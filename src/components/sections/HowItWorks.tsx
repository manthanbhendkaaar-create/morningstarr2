"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Hammer, Plug, TrendingUp } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Audit",
    description: "We analyze your current workflows, identify bottlenecks, and map automation opportunities.",
    icon: Search,
    color: "#00D4FF",
  },
  {
    number: "02",
    title: "Build",
    description: "Our team designs and builds custom AI automation systems tailored to your business.",
    icon: Hammer,
    color: "#7B61FF",
  },
  {
    number: "03",
    title: "Integrate",
    description: "We connect everything — CRM, email, WhatsApp, calendars — into one seamless system.",
    icon: Plug,
    color: "#00FFB2",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Continuous monitoring and optimization to maximize ROI and performance.",
    icon: TrendingUp,
    color: "#00D4FF",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Process"
            title="How It Works"
            subtitle="From audit to autopilot in four simple steps."
          />
        </ScrollReveal>

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-accent-blue via-accent-purple to-accent-green"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10"
                    style={{ background: step.color, boxShadow: `0 0 20px ${step.color}60` }}
                  />
                  <div className={`md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>
                      STEP {step.number}
                    </span>
                    <h3 className="text-2xl font-bold mt-1 mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
