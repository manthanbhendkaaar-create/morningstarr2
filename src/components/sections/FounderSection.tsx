"use client";

import { FounderProfile } from "@/components/ui/FounderProfile";
import { SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FOUNDER, EXPERTISE_TAGS } from "@/lib/constants";

export function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Meet The Team Behind Your Automation"
            subtitle="We exist for one reason: help service businesses stop losing revenue to slow follow-up and manual processes."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <FounderProfile
            name={FOUNDER.name}
            title={FOUNDER.title}
            subtitle={FOUNDER.subtitle}
            imageAlt={FOUNDER.imageAlt}
            imageSrc={FOUNDER.imageSrc}
            stats={[...FOUNDER.stats]}
          >
            <p>
              MORNINGSTARR AI specializes in done-for-you business automation — AI lead generation,
              appointment booking, CRM automation, and WhatsApp follow-up for agencies, coaches,
              consultants, and local service businesses.
            </p>
            <p>
              Our focus is measurable outcomes: faster response times, more booked appointments,
              fewer missed leads, and less time spent on repetitive admin. Every system is custom-built
              around how your business actually operates.
            </p>
            <p>
              <strong className="text-text-primary">Mission:</strong> Help growing businesses capture
              every opportunity — without hiring more staff or stitching together DIY tools that break
              when you get busy.
            </p>
          </FounderProfile>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {EXPERTISE_TAGS.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full glass-premium text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
