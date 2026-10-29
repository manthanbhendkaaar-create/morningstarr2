import { ShoppingCart, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WAITLIST_DEPOSIT_URL } from "@/lib/guides";
import { BookingButton } from "@/components/booking/BookingButton";

/** Automation Sprint price box. 2026-10-29: full client capacity, so waitlist only (free waitlist or £600 refundable deposit), not sold online. */
export function SprintCheckout() {
  return (
    <section id="buy-sprint" className="section-padding !pt-0 relative">
      <div className="container-wide px-6 max-w-4xl mx-auto">
        <ScrollReveal>
          <GlassCard glow="purple" hover={false} className="border border-accent-purple/40">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-purple mb-3">
                  Waitlist only: full client capacity
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Automation Sprint: one process, automated</h2>
                <ul className="space-y-2 mb-2">
                  {[
                    "One process automated end to end",
                    "Live within 5 working days after the process call",
                    "Handover docs, a recorded walkthrough and 30 days of fixes",
                    "Not sold online right now: new Sprints start when a slot opens",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-left">
                <p className="mb-1">
                  <span className="text-4xl font-bold gradient-text">£10,962</span>
                </p>
                <p className="text-sm text-text-muted mb-5">£7,560 + 45% service fee (£3,402)</p>
                <a
                  href={WAITLIST_DEPOSIT_URL}
                  className="inline-flex items-center justify-center gap-2 min-h-[58px] w-full md:w-auto px-8 py-4 text-lg rounded-2xl bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary font-extrabold shadow-[0_12px_30px_-10px_rgba(139,92,246,0.8)] hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.985] transition"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Reserve a slot: £600 refundable deposit
                </a>
                <div className="mt-3">
                  <BookingButton variant="secondary" size="md" className="w-full md:w-auto">
                    Join the free waitlist
                  </BookingButton>
                </div>
                <p className="text-xs text-text-muted mt-3">
                  The deposit is refunded in full any time until we offer you a slot, and credited to your first invoice.
                </p>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
