"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Which agencies is this for?",
    answer:
      "Marketing agencies with a team and a steady client base: performance, social, SEO, PPC, content and creative agencies. If your team spends hours replying to comments and DMs, chasing leads, repurposing content or moving data between tools, we can take that off them.",
  },
  {
    question: "How much does it cost?",
    answer:
      "An Automation Sprint is £4,500 + 45% service fee for one process automated end to end. A full Agency Operating System starts from £12,000 + 45% service fee, and our managed partnership from £2,500 per month + 45% service fee. Everything is agreed on the consultation call before any work starts.",
  },
  {
    question: "How long does it take?",
    answer:
      "Your first system goes live within 5 days of kickoff. If it isn't, we keep building at no extra cost until it is. Larger builds are delivered in stages so you see value early.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No. It removes the busywork so your strategists and account managers can handle more clients and do more of the work clients value. Most agencies use the freed-up hours to grow without hiring.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "HubSpot, GoHighLevel, ClickUp, Asana, Notion, Slack, Google Workspace, Meta and Google Ads, GA4, Calendly and anything with an API. We build with n8n, Make, Apps Script and custom code, and everything is set up in accounts you own.",
  },
  {
    question: "Do we need to be technical?",
    answer:
      "No. We design, build, test and document everything, then walk your team through it. On the managed plan we also monitor and fix it every week.",
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
