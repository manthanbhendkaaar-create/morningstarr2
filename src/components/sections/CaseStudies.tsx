"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  StaggerContainer,
  StaggerItem,
  ScrollReveal,
} from "@/components/ui/ScrollReveal";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CASE_STUDIES = [
  {
    industry: "Real Estate Agency",
    company: "Apex Realty Group",
    before: {
      responseTime: "2 hours",
      followUp: "Manual calls & texts",
      conversionChallenge: "68% of leads went cold before contact",
    },
    after: {
      process: "Instant AI qualification + WhatsApp sequences",
      speed: "15 second average response",
      conversion: "+43% appointment rate",
    },
    result: { value: 43, suffix: "%", label: "More Appointments" },
    chart: [20, 35, 28, 45, 52, 48, 65, 72],
    problem: "Leads from Facebook ads waited 2+ hours. Agents were in showings and couldn't respond fast enough.",
    automation: "AI instantly qualifies budget, timeline, and location — then books showings via WhatsApp and Calendly.",
    resultDetail: "43% more appointments booked within 60 days. Zero leads left unanswered overnight.",
  },
  {
    industry: "Marketing Agency",
    company: "GrowthLab Agency",
    before: {
      responseTime: "4–6 hours",
      followUp: "Spreadsheet tracking + manual emails",
      conversionChallenge: "15+ hours/week lost to admin follow-up",
    },
    after: {
      process: "Automated lead scoring + discovery call booking",
      speed: "Under 30 seconds to first reply",
      conversion: "+67% lead-to-call conversion",
    },
    result: { value: 67, suffix: "%", label: "Conversion Increase" },
    chart: [15, 25, 30, 42, 55, 60, 68, 75],
    problem: "Inbound leads from website forms piled up. Sales reps manually copied data into HubSpot and sent generic emails.",
    automation: "End-to-end pipeline: form submit → AI scoring → personalized email → Calendly booking → CRM auto-update.",
    resultDetail: "67% conversion increase and 30+ hours saved per week. Sales team only talks to qualified prospects.",
  },
  {
    industry: "Business Coaching",
    company: "Independent Coach",
    before: {
      responseTime: "3–8 hours",
      followUp: "Manual Instagram DM replies",
      conversionChallenge: "12% DM-to-call booking rate",
    },
    after: {
      process: "AI conversation + needs assessment flow",
      speed: "Instant DM response 24/7",
      conversion: "12% → 38% booking rate",
    },
    result: { value: 3, suffix: "x", label: "More Clients" },
    chart: [10, 18, 22, 30, 35, 40, 48, 55],
    problem: "High-intent Instagram DMs sat unanswered during coaching sessions. Prospects booked with competitors instead.",
    automation: "AI handles qualification questions, assesses fit, and books strategy calls directly into the calendar.",
    resultDetail: "3x more clients. Booking rate jumped from 12% to 38% within 90 days.",
  },
];

function MiniChart({ data, hovered }: { data: number[]; hovered?: boolean }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1 h-16 mt-4">
      {data.map((val, i) => (
        <motion.div
          key={i}
          animate={{ height: `${(val / max) * 100}%` }}
          transition={{ duration: 0.5, delay: hovered ? i * 0.05 : 0 }}
          className="flex-1 rounded-sm bg-gradient-to-t from-accent-blue/60 to-accent-purple/60 min-h-[4px]"
        />
      ))}
    </div>
  );
}

function CaseStudyCard({ study }: { study: (typeof CASE_STUDIES)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <GlassCard className="h-full group hover:glow-purple transition-shadow duration-500" hover={false}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-full flex flex-col"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-bold text-lg">{study.industry}</h3>
            <p className="text-xs text-text-muted">{study.company}</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 mt-4">
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2">
            <p className="text-[10px] text-text-muted uppercase">Before</p>
            <div>
              <p className="text-[10px] text-text-muted">Response</p>
              <p className="text-xs font-semibold text-red-400">{study.before.responseTime}</p>
            </div>
            <div>
              <p className="text-[10px] text-text-muted">Follow-up</p>
              <p className="text-xs text-text-secondary">{study.before.followUp}</p>
            </div>
            <div>
              <p className="text-[10px] text-text-muted">Challenge</p>
              <p className="text-xs text-text-secondary">{study.before.conversionChallenge}</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-accent-green/10 border border-accent-green/20 space-y-2">
            <p className="text-[10px] text-text-muted uppercase">After</p>
            <div>
              <p className="text-[10px] text-text-muted">Process</p>
              <p className="text-xs text-text-secondary">{study.after.process}</p>
            </div>
            <div>
              <p className="text-[10px] text-text-muted">Speed</p>
              <p className="text-xs font-semibold text-accent-green">{study.after.speed}</p>
            </div>
            <div>
              <p className="text-[10px] text-text-muted">Result</p>
              <p className="text-xs font-semibold text-accent-green">{study.after.conversion}</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-xs">
          <div className="flex gap-2">
            <span className="text-red-400 font-medium shrink-0">Problem →</span>
            <span className="text-text-secondary">{study.problem}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent-blue font-medium shrink-0">Automation →</span>
            <span className="text-text-secondary">{study.automation}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-accent-green font-medium shrink-0">Result →</span>
            <span className="text-text-secondary font-medium">{study.resultDetail}</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white/5 text-center mb-4">
          <p className="text-3xl font-bold gradient-text">
            +
            <AnimatedCounter value={study.result.value} suffix={study.result.suffix} />
          </p>
          <p className="text-sm text-text-secondary mt-1">{study.result.label}</p>
        </div>

        <MiniChart data={study.chart} hovered={hovered} />

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-accent-blue hover:text-accent-blue/80 transition-colors py-2"
          aria-expanded={expanded}
        >
          {expanded ? "Hide full breakdown" : "View full breakdown"}
          <ChevronDown
            className={cn("w-4 h-4 transition-transform duration-300", expanded && "rotate-180")}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3 border-t border-white/5 mt-2 text-sm text-text-secondary">
                <p><strong className="text-text-primary">Before:</strong> {study.before.responseTime} response, {study.before.followUp.toLowerCase()}, {study.before.conversionChallenge.toLowerCase()}.</p>
                <p><strong className="text-text-primary">After:</strong> {study.after.process}. {study.after.speed}.</p>
                <p><strong className="text-text-primary">Outcome:</strong> {study.resultDetail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GlassCard>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-bg-secondary/30">
      <div className="container-wide">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Results"
            title="Case Studies"
            subtitle="Specific before-and-after outcomes from businesses that fixed slow follow-up and manual bottlenecks."
          />
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <StaggerItem key={study.industry}>
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
