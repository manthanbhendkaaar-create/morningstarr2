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
            title="Built By An Agency Owner"
            subtitle="We run our own agency on the same kind of systems we build for yours."
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
              MorningstarrAI is the automation arm of Asendify, a video and YouTube growth agency.
              Before we built systems for anyone else, we built them for ourselves: lead sourcing,
              outbound, reply handling, booking and reporting all run on automations we designed.
            </p>
            <p>
              We know where agency hours go, because we have lost them too: reports, onboarding,
              chasing leads and moving data between tools. Every system we build is scoped around how
              your agency actually delivers, and you own all of it.
            </p>
            <p>
              <strong className="text-text-primary">Mission:</strong> Help agencies take on more clients
              and grow margins without adding headcount or stitching together tools that break when
              you get busy.
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
