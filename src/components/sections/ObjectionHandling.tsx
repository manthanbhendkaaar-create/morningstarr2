"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { Users, Wrench, Layers, Bot } from "lucide-react";

const OBJECTIONS = [
  {
    question: "We already have staff.",
    answer:
      "Automation makes your staff more productive — not redundant. AI handles repetitive follow-ups, data entry, and scheduling so your team can focus on closing deals and serving clients.",
    icon: Users,
    color: "#00D4FF",
  },
  {
    question: "We are not technical.",
    answer:
      "You don't need to be. We handle the entire setup, integration, and ongoing maintenance. You get a working system with a simple dashboard — we manage the complexity.",
    icon: Wrench,
    color: "#7B61FF",
  },
  {
    question: "We use multiple tools.",
    answer:
      "That's exactly why we exist. We integrate your CRM, email, WhatsApp, calendars, and 500+ other tools into one seamless automation system that works together.",
    icon: Layers,
    color: "#00FFB2",
  },
  {
    question: "Will AI replace employees?",
    answer:
      "No. AI removes repetitive work — not people. Your team keeps doing what humans do best: building relationships, solving complex problems, and driving revenue.",
    icon: Bot,
    color: "#00D4FF",
  },
];

export function ObjectionHandling() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="objections" className="section-padding bg-bg-secondary/30">
      <div className="container-wide max-w-4xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Concerns"
            title="Common Concerns We Hear"
            subtitle="Honest answers to the questions business owners ask before investing in automation."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid sm:grid-cols-2 gap-4">
            {OBJECTIONS.map((item, i) => (
              <div
                key={item.question}
                className={cn(
                  "glass rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
                  openIndex === i && "glow-blue border-accent-blue/30"
                )}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setOpenIndex(openIndex === i ? null : i);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === i}
              >
                <div className="p-5 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}20` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold mb-1">{item.question}</p>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="text-sm text-text-secondary leading-relaxed overflow-hidden"
                        >
                          {item.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
