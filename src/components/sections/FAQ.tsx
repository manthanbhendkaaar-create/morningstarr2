"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { FAQS } from "@/lib/home-content";



export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="container-wide max-w-3xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about AI automation."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={faq.question} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-accent-blue shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-text-muted shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className={cn("px-5 pb-5 text-sm text-text-secondary leading-relaxed")}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
