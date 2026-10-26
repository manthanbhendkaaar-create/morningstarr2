import Link from "next/link";
import { ArrowRight, Check, ShoppingCart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyBookingProvider } from "@/components/booking/CalendlyBookingProvider";
import { BookingButton } from "@/components/booking/BookingButton";
import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE, FOUNDER } from "@/lib/constants";
import { GUIDES, GUIDES_UPDATED, WAITLIST_DEPOSIT_URL, getGuide, type Guide, type GuideBlock } from "@/lib/guides";

/** Renders plain text with [label](/path) links. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        const [, label, href] = m;
        return href.startsWith("/") ? (
          <Link key={i} href={href} className="text-accent-blue hover:underline">
            {label}
          </Link>
        ) : (
          <a key={i} href={href} className="text-accent-blue hover:underline" target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        );
      })}
    </>
  );
}

function Block({ block }: { block: GuideBlock }) {
  if (typeof block === "string") {
    return (
      <p className="text-text-secondary leading-relaxed mb-4">
        <RichText text={block} />
      </p>
    );
  }
  return (
    <ul className="space-y-2.5 mb-5">
      {block.list.map((item) => (
        <li key={item} className="flex items-start gap-2 text-text-secondary leading-relaxed">
          <Check className="w-4 h-4 text-accent-green shrink-0 mt-1" />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

const stripLinks = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function guideJsonLd(guide: Guide) {
  const url = `${SITE.url}/guides/${guide.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        datePublished: GUIDES_UPDATED,
        dateModified: GUIDES_UPDATED,
        inLanguage: "en",
        mainEntityOfPage: url,
        author: { "@type": "Person", name: FOUNDER.name, url: SITE.linkedin },
        publisher: { "@id": `${SITE.url}/#organization` },
        about: guide.eyebrow,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.url}/guides` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: "MorningstarrAI",
        url: SITE.url,
        logo: `${SITE.url}/morningstarai-logo.png`,
      },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Buy-online block for the Automation Sprint. Kept separate from any booking section. */
export function SprintBuyBox() {
  return (
    <GlassCard glow="purple" hover={false} className="border border-accent-purple/40">
      <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-purple mb-3">Buy online</p>
      <h2 className="text-2xl font-bold mb-2">Automation Sprint: one process, automated</h2>
      <p className="text-sm text-text-secondary mb-4">
        £9,135 (£6,300 + 45% service fee). Pay first, then a call where you walk us
        through the process. It goes live within 5 working days after that call. Buying from India? Request an invoice.
      </p>
      <a
        href={WAITLIST_DEPOSIT_URL}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary font-semibold"
      >
        <ShoppingCart className="w-4 h-4" />
        Sprint slots are full: reserve with a £600 refundable deposit
      </a>
    </GlassCard>
  );
}

export function GuidePage({ guide }: { guide: Guide }) {
  const related = guide.related.map((s) => getGuide(s)).filter((g): g is Guide => Boolean(g));
  return (
    <ExperienceShell>
      <CalendlyBookingProvider>
        <JsonLd data={guideJsonLd(guide)} />
        <Header />
        <main className="pb-24 relative z-[2]">
          <article>
            <section className="pt-36 md:pt-44 pb-10 relative">
              <div className="container-wide px-6 max-w-3xl mx-auto">
                <nav aria-label="Breadcrumb" className="text-xs text-text-muted mb-6">
                  <Link href="/" className="hover:text-text-primary">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/guides" className="hover:text-text-primary">Guides</Link>
                </nav>
                <ScrollReveal>
                  <p className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-5">{guide.eyebrow}</p>
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{guide.title}</h1>
                  <p className="text-xs text-text-muted mb-8">
                    By {FOUNDER.name}, {FOUNDER.title} · Updated {GUIDES_UPDATED}
                  </p>
                </ScrollReveal>
                <div className="glass-premium rounded-2xl p-6 border-l-2 border-accent-blue">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-blue mb-2">Short answer</p>
                  <p className="text-lg text-text-primary leading-relaxed">
                    <RichText text={guide.answer} />
                  </p>
                </div>
              </div>
            </section>

            <section className="pb-10 relative">
              <div className="container-wide px-6 max-w-3xl mx-auto">
                {guide.sections.map((s) => (
                  <div key={s.h2} className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{s.h2}</h2>
                    {s.body.map((b, i) => (
                      <Block key={i} block={b} />
                    ))}
                  </div>
                ))}
              </div>
            </section>

            <section id="faq" className="pb-10 relative">
              <div className="container-wide px-6 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Frequently asked questions</h2>
                <div className="space-y-4">
                  {guide.faqs.map((f) => (
                    <details key={f.q} className="glass rounded-2xl p-5 group" open>
                      <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                        {f.q}
                        <span className="text-text-muted group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="text-sm text-text-secondary mt-3">
                        <RichText text={f.a} />
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {guide.sources && guide.sources.length > 0 && (
              <section className="pb-10 relative">
                <div className="container-wide px-6 max-w-3xl mx-auto">
                  <h2 className="text-lg font-semibold mb-3">Sources</h2>
                  <ul className="space-y-1.5 text-sm">
                    {guide.sources.map((src) => (
                      <li key={src.url}>
                        <a href={src.url} className="text-text-secondary hover:text-accent-blue underline" target="_blank" rel="noopener noreferrer">
                          {src.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </article>

          {!guide.hideSprint && (
            <section className="pb-10 relative">
              <div className="container-wide px-6 max-w-3xl mx-auto">
                <SprintBuyBox />
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="pb-10 relative">
              <div className="container-wide px-6 max-w-3xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">Related guides</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {related.map((g) => (
                    <Link key={g.slug} href={`/guides/${g.slug}`} className="glass rounded-2xl p-4 text-sm text-text-secondary hover:text-text-primary transition-colors">
                      {g.title}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="section-padding relative">
            <div className="container-wide px-6 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{guide.cta ?? "Not sure which process to automate first?"}</h2>
              <p className="text-text-secondary mb-8">Talk it through with us and leave with a clear plan.</p>
              <BookingButton size="lg">
                Book a Consultation Call
                <ArrowRight className="w-4 h-4" />
              </BookingButton>
            </div>
          </section>
        </main>
        <Footer />
      </CalendlyBookingProvider>
    </ExperienceShell>
  );
}

export function allGuideSlugs() {
  return GUIDES.map((g) => g.slug);
}
