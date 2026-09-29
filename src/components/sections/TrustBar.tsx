"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TRUST_CATEGORIES } from "@/lib/constants";

export function TrustBar() {
  const items = [...TRUST_CATEGORIES, ...TRUST_CATEGORIES];

  return (
    <section className="py-12 border-y border-white/5 bg-bg-secondary/30 overflow-hidden">
      <ScrollReveal>
        <p className="text-center text-sm text-text-muted uppercase tracking-widest mb-8">
          Built For Marketing Agencies
        </p>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((category, i) => (
            <div
              key={`${category}-${i}`}
              className="inline-flex items-center mx-8 gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-accent-blue/60" />
              <span className="text-lg md:text-xl font-medium text-text-secondary">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
