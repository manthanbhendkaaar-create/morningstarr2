import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CalendlyBookingProvider } from "@/components/booking/CalendlyBookingProvider";
import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Policies | MorningstarrAI",
  description: "MorningstarrAI fees and policies, including the 45% service fee and Consultation Call pricing.",
  alternates: { canonical: `${SITE.url}/policies` },
};

const POLICIES = [
  {
    title: "Service Fee",
    items: [
      "A 45% service fee applies on top of every fee we charge.",
      "The service fee is calculated on the fee it applies to and is invoiced together with it.",
    ],
  },
  {
    title: "Consultation Call",
    items: [
      "Consultation Calls are charged at £2,000 plus the 45% service fee (£900), a total of £2,900, after the call.",
      "If you miss a booked Consultation Call, cancel it or reschedule it, at any time, the same £2,900 (£2,000 plus the 45% service fee) is charged. Booked calls cannot be rescheduled free of charge.",
      "Clients in India set up a bank mandate (eNACH) through Razorpay when booking; nothing is charged at booking. The Consultation Call fee is debited from it after the call, in INR at that day's exchange rate, and any package is debited only after the client confirms the amount in writing.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <ExperienceShell>
      <CalendlyBookingProvider>
        <Header />
        <main className="pb-24 relative z-[2]">
          <section className="pt-36 md:pt-44 pb-16">
            <div className="container-wide px-6 max-w-3xl mx-auto">
              <p className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-5 text-center">
                Policies
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
                Our <span className="gradient-text">Policies</span>
              </h1>
              <p className="text-text-secondary text-center mb-12">Effective date: 5 October 2026</p>
              <div className="space-y-6">
                {POLICIES.map((p, i) => (
                  <div key={p.title} className="glass rounded-2xl p-8">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-accent-blue font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="text-xl font-semibold text-text-primary">{p.title}</h2>
                    </div>
                    <ul className="space-y-3 text-text-secondary">
                      {p.items.map((t) => (
                        <li key={t} className="leading-relaxed">— {t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-text-muted text-sm text-center mt-10">
                Questions about these policies? Email{" "}
                <a href={`mailto:${SITE.email}`} className="text-accent-blue hover:underline">{SITE.email}</a>.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </CalendlyBookingProvider>
    </ExperienceShell>
  );
}
