"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BookingButton } from "@/components/booking/BookingButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { calculateROI, formatResponseSpeed } from "@/lib/roi-calculations";
import { CTAS } from "@/lib/constants";

export function ROICalculator() {
  const [leads, setLeads] = useState(100);
  const [dealValue, setDealValue] = useState(5000);
  const [teamSize, setTeamSize] = useState(3);
  const [responseSpeed, setResponseSpeed] = useState(120);

  const results = useMemo(
    () => calculateROI({ leads, dealValue, teamSize, responseSpeedMinutes: responseSpeed }),
    [leads, dealValue, teamSize, responseSpeed]
  );

  return (
    <section id="roi-calculator" className="section-padding bg-bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Automation Opportunity Assessment"
            title="See How Much Revenue Is Slipping Through The Cracks"
            subtitle="Discover what automation could recover every month — based on your leads, team size, and response speed."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-premium rounded-xl px-5 py-4 mb-8 max-w-3xl mx-auto text-center border border-accent-blue/20">
            <p className="text-sm text-text-secondary leading-relaxed">
              Slow follow-up is silent revenue loss. This assessment estimates your monthly recovery
              opportunity — no signup required.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard>
              <h3 className="font-bold text-lg mb-2">Your Business</h3>
              <p className="text-xs text-text-muted mb-6">
                Adjust the sliders to match your current situation.
              </p>
              <div className="space-y-6">
                <SliderInput
                  label="Leads Per Month"
                  value={leads}
                  onChange={setLeads}
                  min={10}
                  max={1000}
                  step={10}
                />
                <SliderInput
                  label="Average Deal Value"
                  value={dealValue}
                  onChange={setDealValue}
                  min={500}
                  max={50000}
                  step={500}
                  prefix="$"
                />
                <SliderInput
                  label="Team Size"
                  value={teamSize}
                  onChange={setTeamSize}
                  min={1}
                  max={50}
                  step={1}
                />
                <SliderInput
                  label="Average Response Time"
                  value={responseSpeed}
                  onChange={setResponseSpeed}
                  min={5}
                  max={480}
                  step={5}
                  displayValue={formatResponseSpeed(responseSpeed)}
                />
              </div>
            </GlassCard>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <ResultCard
                  label="Revenue Lost"
                  value={results.revenueLost}
                  format="currency"
                  color="red"
                />
                <ResultCard
                  label="Revenue Recovered"
                  value={results.revenueRecovered}
                  format="currency"
                  color="green"
                />
                <ResultCard
                  label="Hours Saved"
                  value={results.hoursSaved}
                  format="number"
                  suffix="/mo"
                  color="blue"
                />
                <ResultCard
                  label="Estimated ROI"
                  value={results.roi}
                  format="number"
                  suffix="%"
                  color="purple"
                />
              </div>

              <div className="glass rounded-2xl p-5 border border-accent-blue/20 glow-blue">
                <p className="text-xs text-accent-blue uppercase tracking-widest mb-4">
                  Your Opportunity Score
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <EnhancedMetric
                    label="Monthly Revenue Impact"
                    value={results.monthlyImpact}
                    format="currency"
                  />
                  <EnhancedMetric
                    label="Annual Revenue Impact"
                    value={results.annualImpact}
                    format="currency"
                  />
                  <EnhancedMetric
                    label="Hours Saved Per Year"
                    value={results.hoursSavedYear}
                    format="number"
                    suffix=" hrs"
                  />
                  <EnhancedMetric
                    label="Automation Opportunity Score"
                    value={results.opportunityScore}
                    format="number"
                    suffix="/100"
                  />
                </div>
                <p className="text-xs text-text-muted mt-4 leading-relaxed">
                  Calculations based on common automation efficiency benchmarks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <BookingButton size="md" className="flex-1 justify-center">
                  {CTAS.getAutomationPlan}
                  <ArrowRight className="w-4 h-4" />
                </BookingButton>
                <BookingButton variant="secondary" size="md" className="flex-1 justify-center">
                  {CTAS.bookAudit}
                </BookingButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix = "",
  displayValue,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  displayValue?: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm text-text-secondary">{label}</label>
        <span className="text-sm font-bold text-accent-blue">
          {displayValue ?? `${prefix}${value.toLocaleString()}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none bg-white/10 accent-accent-blue cursor-pointer"
        aria-label={label}
      />
    </div>
  );
}

function ResultCard({
  label,
  value,
  format,
  suffix = "",
  color,
}: {
  label: string;
  value: number;
  format: "currency" | "number";
  suffix?: string;
  color: "red" | "green" | "blue" | "purple";
}) {
  const colors = {
    red: "from-red-500/10 to-red-500/5 border-red-500/20",
    green: "from-accent-green/10 to-accent-green/5 border-accent-green/20",
    blue: "from-accent-blue/10 to-accent-blue/5 border-accent-blue/20",
    purple: "from-accent-purple/10 to-accent-purple/5 border-accent-purple/20",
  };

  return (
    <motion.div
      key={value}
      initial={{ scale: 0.95, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`glass rounded-2xl p-5 bg-gradient-to-b ${colors[color]} border`}
    >
      <p className="text-xs text-text-muted mb-2">{label}</p>
      <p className="text-2xl font-bold">
        {format === "currency" ? (
          <AnimatedCounter value={value} prefix="$" />
        ) : (
          <AnimatedCounter value={Math.round(value)} suffix={suffix} />
        )}
      </p>
    </motion.div>
  );
}

function EnhancedMetric({
  label,
  value,
  format,
  suffix = "",
}: {
  label: string;
  value: number;
  format: "currency" | "number";
  suffix?: string;
}) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-[10px] text-text-muted mb-1">{label}</p>
      <p className="text-lg font-bold gradient-text">
        {format === "currency" ? (
          <AnimatedCounter value={value} prefix="$" />
        ) : (
          <AnimatedCounter value={Math.round(value)} suffix={suffix} />
        )}
      </p>
    </motion.div>
  );
}
