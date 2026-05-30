"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Video } from "lucide-react";
import { SectionHeading } from "@/components/ui/GlassCard";
import { PremiumGlassCard } from "@/components/ui/PremiumGlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    company: "Apex Realty Group",
    industry: "Real Estate",
    role: "CEO",
    quote:
      "We went from 2-hour response times to 15 seconds. Our appointment bookings increased by 43% in the first month alone.",
    result: "+43% Appointments",
    initials: "SM",
    mediaType: "text" as const,
  },
  {
    name: "James Chen",
    company: "GrowthLab Agency",
    industry: "Marketing Agency",
    role: "Founder",
    quote:
      "Morningstarr built an automation system that handles our entire lead pipeline. We've saved 30+ hours per week and closed 67% more deals.",
    result: "+67% Conversions",
    initials: "JC",
    mediaType: "text" as const,
  },
  {
    name: "Maria Rodriguez",
    company: "Independent Coaching Practice",
    industry: "Business Coaching",
    role: "Business Coach",
    quote:
      "My system books strategy calls while I sleep. I went from 12% to 38% booking rate. It's like having a full-time sales team.",
    result: "3x More Clients",
    initials: "MR",
    mediaType: "text" as const,
  },
  {
    name: "David Thompson",
    company: "Thompson HVAC",
    industry: "Local Service Business",
    role: "Owner",
    quote:
      "Every Google inquiry gets an instant response now. We never miss a lead, and our team focuses on service instead of admin work.",
    result: "Zero Missed Leads",
    initials: "DT",
    mediaType: "text" as const,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = () => {
    setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-bg-secondary/30 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.initials}
            className="absolute glass-premium rounded-xl px-4 py-3 opacity-[0.06] hidden lg:block"
            style={{
              left: `${10 + i * 22}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{ y: [0, -15, 0], rotate: [0, i % 2 ? 2 : -2, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-xs text-text-muted">{t.company}</p>
            <p className="text-[10px] text-text-muted">{t.result}</p>
          </motion.div>
        ))}
      </div>

      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Named companies. Specific industries. Measurable results."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30, rotateY: -5 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -30, rotateY: 5 }}
                transition={{ duration: 0.5 }}
                style={{ perspective: 1000 }}
              >
                <PremiumGlassCard glow="purple" className="!p-8 md:!p-12 text-center">
                  {testimonial.mediaType === "text" && (
                    <Quote className="w-8 h-8 text-accent-purple/50 mx-auto mb-6 quote-glow" />
                  )}
                  {testimonial.mediaType !== "text" && (
                    <div className="flex items-center justify-center gap-2 mb-6 text-text-muted">
                      <Video className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-widest">Video testimonial</span>
                    </div>
                  )}
                  <p className="text-lg md:text-xl leading-relaxed text-text-primary mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                      {testimonial.initials}
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-text-secondary">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <p className="text-xs text-text-muted">{testimonial.industry}</p>
                    </div>
                    <span className="sm:ml-auto text-sm font-bold text-accent-green">
                      {testimonial.result}
                    </span>
                  </div>
                </PremiumGlassCard>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full glass-premium hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-accent-blue w-6 shadow-[0_0_8px_rgba(0,212,255,0.5)]" : "bg-white/20 w-2"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full glass-premium hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
