import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyBookingProvider } from "@/components/booking/CalendlyBookingProvider";
import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd, SprintBuyBox } from "@/components/guides/GuidePage";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guides: AI Automation for Marketing Agencies | MorningstarrAI",
  description:
    "Plain-English guides on AI automation for marketing agencies: what to automate, client reporting, lead follow-up, costs, Zapier vs custom builds and the AI Content Engine.",
  alternates: { canonical: `${SITE.url}/guides` },
};

const hubJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "MorningstarrAI Guides",
  url: `${SITE.url}/guides`,
  isPartOf: { "@type": "WebSite", name: "MorningstarrAI", url: SITE.url },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/guides/${g.slug}`,
      name: g.title,
    })),
  },
};

export default function GuidesPage() {
  return (
    <ExperienceShell>
      <CalendlyBookingProvider>
        <JsonLd data={hubJsonLd} />
        <Header />
        <main className="pb-24 relative z-[2]">
          <section className="pt-36 md:pt-44 pb-12 relative">
            <div className="container-wide px-6 max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <p className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-5">Guides</p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  AI Automation for <span className="gradient-text">Marketing Agencies</span>
                </h1>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Straight answers to the questions agency owners ask about automating their work with AI.
                </p>
              </ScrollReveal>
            </div>
          </section>
          <section className="pb-12 relative">
            <div className="container-wide px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {GUIDES.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="glass-premium rounded-2xl p-6 block hover:border-white/20 transition-colors">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-blue mb-2">{g.eyebrow}</p>
                  <h2 className="text-xl font-bold mb-2">{g.title}</h2>
                  <p className="text-sm text-text-secondary mb-4">{g.description}</p>
                  <span className="text-sm text-accent-blue inline-flex items-center gap-1">
                    Read the guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
          <section className="pb-12 relative">
            <div className="container-wide px-6 max-w-3xl mx-auto">
              <SprintBuyBox />
            </div>
          </section>
        </main>
        <Footer />
      </CalendlyBookingProvider>
    </ExperienceShell>
  );
}
