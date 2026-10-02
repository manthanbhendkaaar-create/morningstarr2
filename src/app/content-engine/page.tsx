import type { Metadata } from "next";
import { ArrowRight, Check, Mic, PenLine, Clapperboard, CalendarCheck, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyBookingProvider } from "@/components/booking/CalendlyBookingProvider";
import { BookingButton } from "@/components/booking/BookingButton";
import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CONTENT_ENGINE, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Content Engine | A YouTube Channel That Runs In Your Own Voice | MorningstarrAI",
  description:
    "We clone your voice, then script, produce and publish 30 Shorts and 8 long videos a month to your YouTube channel. You record two minutes once. Limited to 3 clients.",
  alternates: { canonical: `${SITE.url}/content-engine` },
  openGraph: {
    title: "MorningstarrAI AI Content Engine",
    description:
      "A YouTube channel that runs itself, in your own voice. 30 Shorts + 8 long videos a month, scripted, produced and published for you.",
    type: "website",
    siteName: SITE.name,
  },
};

const STEPS = [
  {
    icon: Mic,
    title: "Record 2 minutes, once",
    text: "You send a short voice sample and sign a consent form. We build your private voice model. That's the only recording you ever do.",
  },
  {
    icon: PenLine,
    title: "We plan and script",
    text: "On a strategy call we lock your niche, topics and the offer the channel should sell. Then we research and write every script.",
  },
  {
    icon: Clapperboard,
    title: "Produced every night",
    text: "Our engine voices each script in your voice, adds B-roll, captions, music and pacing built for retention, and renders the video.",
  },
  {
    icon: CalendarCheck,
    title: "Published on schedule",
    text: "You approve the first batch. After that, videos go up on your channel automatically: a Short every day and two long videos a week.",
  },
];

const FAQS = [
  {
    q: "Is it really my voice?",
    a: "Yes. We clone it from your sample, only with your written consent, and only for your channel. You can withdraw consent at any time, and we delete your voice model when you leave.",
  },
  {
    q: "Do I own the channel and the videos?",
    a: "Yes. The channel stays yours and every video we make for you is yours to keep.",
  },
  {
    q: "Which niches does this work for?",
    a: "Faceless, voice-led formats: education and explainers, coaching, finance, business, self-improvement, how-to. If your channel needs your face on camera, this isn't the right fit and we'll tell you on the call.",
  },
  {
    q: "Can I check videos before they go live?",
    a: "Yes. You approve the first batch before anything is published, and you can keep reviewing every video if you prefer.",
  },
  {
    q: "What about YouTube's rules on AI content?",
    a: "We follow them. Where YouTube asks for its altered or synthetic content label, we apply it when uploading.",
  },
  {
    q: "Why only 3 clients?",
    a: "Every video is rendered on our own production machines, the same ones that run our own channels. Three clients is what we can produce at full quality.",
  },
];

export default function ContentEnginePage() {
  return (
    <ExperienceShell>
      <CalendlyBookingProvider>
        <Header />
        <main className="pb-24 relative z-[2]">
          {/* Hero */}
          <section className="pt-36 md:pt-44 pb-16 relative overflow-hidden">
            <div className="container-wide px-6 relative text-center max-w-4xl mx-auto">
              <ScrollReveal>
                <p className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-5">
                  AI Content Engine
                </p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  A YouTube Channel That Runs Itself,{" "}
                  <span className="gradient-text">In Your Own Voice</span>
                </h1>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                  We clone your voice, then script, produce and publish {CONTENT_ENGINE.volume} to your
                  channel. You record two minutes once. We run the same engine on our own channels every night.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <BookingButton size="lg">
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </BookingButton>
                  <span className="text-sm text-text-muted">Limited to {CONTENT_ENGINE.spots} clients</span>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* How it works */}
          <section id="how" className="section-padding relative">
            <div className="container-wide px-6">
              <ScrollReveal>
                <SectionHeading
                  eyebrow="How It Works"
                  title="Two Minutes From You. Everything Else From Us."
                  subtitle="No filming, no editing, no uploading. Your channel keeps publishing while you run your business."
                />
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {STEPS.map((s, i) => (
                  <ScrollReveal key={s.title} delay={i * 0.08}>
                    <GlassCard className="h-full">
                      <s.icon className="w-7 h-7 text-accent-blue mb-4" />
                      <p className="text-xs text-text-muted mb-1">Step {i + 1}</p>
                      <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-text-secondary">{s.text}</p>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="section-padding relative">
            <div className="container-wide px-6">
              <ScrollReveal>
                <SectionHeading eyebrow="The Engagement" title="One Premium Package" />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <GlassCard glow="purple" hover={false} className="max-w-2xl mx-auto border border-accent-purple/40">
                  <h3 className="text-2xl font-bold mb-1">AI Content Engine</h3>
                  <p className="text-sm text-text-secondary mb-6">Your channel, produced and published for you every day.</p>
                  <p className="mb-1">
                    <span className="text-4xl font-bold gradient-text">{CONTENT_ENGINE.price}</span>
                    <span className="text-sm text-text-muted ml-2">per month</span>
                  </p>
                  <p className="text-sm text-text-muted mb-6">
                    + {CONTENT_ENGINE.setup} one-time setup · {CONTENT_ENGINE.minimum} minimum
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {CONTENT_ENGINE.includes.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <BookingButton size="lg" className="w-full justify-center">
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </BookingButton>
                </GlassCard>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="max-w-2xl mx-auto mt-8 glass-premium rounded-2xl p-5 flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent-green shrink-0" />
                  <p className="text-sm text-text-secondary">
                    <strong className="text-text-primary">We run it ourselves.</strong> Three of our own channels publish
                    every day from this engine. We don&apos;t quote client results we don&apos;t have; on the call we&apos;ll
                    show you the engine and the videos it makes.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="section-padding relative">
            <div className="container-wide px-6 max-w-3xl mx-auto">
              <ScrollReveal>
                <SectionHeading eyebrow="FAQ" title="Questions" />
              </ScrollReveal>
              <div className="space-y-4">
                {FAQS.map((f) => (
                  <ScrollReveal key={f.q}>
                    <details className="glass rounded-2xl p-5 group">
                      <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                        {f.q}
                        <span className="text-text-muted group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="text-sm text-text-secondary mt-3">{f.a}</p>
                    </details>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="section-padding relative">
            <div className="container-wide px-6 text-center max-w-3xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Your Channel, Publishing Every Day,{" "}
                  <span className="gradient-text">Without You On Camera</span>
                </h2>
                <p className="text-text-secondary mb-8">
                  First videos live within {CONTENT_ENGINE.firstVideos} of your voice sample. {CONTENT_ENGINE.spots} client spots.
                </p>
                <BookingButton size="lg">
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </BookingButton>
              </ScrollReveal>
            </div>
          </section>
        </main>
        <Footer />
      </CalendlyBookingProvider>
    </ExperienceShell>
  );
}
