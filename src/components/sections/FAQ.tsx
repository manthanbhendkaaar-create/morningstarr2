"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Will AI replace my team?",
    answer:
      "No. AI automation handles repetitive tasks — lead responses, follow-ups, data entry — so your team can focus on high-value work like closing deals and serving clients. Think of it as giving every team member a personal assistant.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "Not at all. We handle everything — design, build, integration, and training. You get a fully working system with a simple dashboard. If you can use email, you can manage your automations.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most automation systems are live within 2-4 weeks. Simple lead response automations can be deployed in as little as 5-7 days. We start with quick wins and expand from there.",
  },
  {
    question: "What tools do you support?",
    answer:
      "We integrate with 500+ tools including HubSpot, Salesforce, GoHighLevel, WhatsApp Business, Calendly, Zapier, Make, Slack, Google Workspace, and virtually any platform with an API.",
  },
  {
    question: "What businesses benefit most?",
    answer:
      "Any business that receives leads and needs follow-up: agencies, coaches, consultants, real estate, local service businesses, and scaling startups. If you lose leads due to slow response times, automation will transform your results.",
  },
];

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
