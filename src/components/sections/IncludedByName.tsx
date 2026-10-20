import { Check, Minus, ArrowRight } from "lucide-react";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { INCLUDED, WHO, LAST_UPDATED, FREE_TOOL_URL } from "@/lib/home-content";

/** "Everything included, by name", "Who it's for / not for" and the free tool link (2026-10-20). Static, no client JS. */
export function IncludedByName() {
  return (
    <>
      <section id="everything-included" className="section-padding relative">
        <div className="container-wide relative">
          <SectionHeading
            eyebrow="Everything included"
            title="Everything Included, By Name"
            subtitle="Every part of what we build and run for you, in plain words."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {INCLUDED.map((g) => (
              <GlassCard key={g.group} hover={false} className="h-full">
                <h3 className="text-lg font-bold mb-4">{g.group}</h3>
                <ul className="space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it.name} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-text-primary">{it.name}</strong>: {it.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
          <p className="text-center text-sm text-text-muted mt-8">
            Last updated: <time dateTime={LAST_UPDATED.iso}>{LAST_UPDATED.label}</time>
          </p>
        </div>
      </section>

      <section id="who-its-for" className="section-padding bg-bg-secondary/30 relative">
        <div className="container-wide relative">
          <SectionHeading eyebrow="Is it for you?" title="Who It's For, And Who It's Not For" />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <GlassCard hover={false} className="h-full">
              <h3 className="text-lg font-bold mb-4">MorningstarrAI is for</h3>
              <ul className="space-y-3">
                {WHO.for.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard hover={false} className="h-full">
              <h3 className="text-lg font-bold mb-4">It&apos;s not for</h3>
              <ul className="space-y-3">
                {WHO.notFor.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Minus className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="free-tool" className="section-padding !pt-0 relative">
        <div className="container-wide px-6 max-w-3xl mx-auto">
          <GlassCard hover={false} className="text-center">
            <p className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-3">Free tool</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Automation ROI Calculator</h2>
            <p className="text-text-secondary mb-6">See what automating a process could be worth to your business. Free, no sign-up.</p>
            <a
              href={FREE_TOOL_URL}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-accent-blue/50 text-text-primary font-semibold hover:bg-white/5 transition"
            >
              Open the free calculator
              <ArrowRight className="w-4 h-4" />
            </a>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
