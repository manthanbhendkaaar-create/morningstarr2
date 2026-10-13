import { ShoppingCart, Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WAITLIST_DEPOSIT_URL } from "@/lib/guides";

/** Buy the Automation Sprint online. Deliberately has no booking button (booking sections carry no prices). */
export function SprintCheckout() {
  return (
    <section id="buy-sprint" className="section-padding !pt-0 relative">
      <div className="container-wide px-6 max-w-4xl mx-auto">
        <ScrollReveal>
          <GlassCard glow="purple" hover={false} className="border border-accent-purple/40">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-purple mb-3">
                  Already know the process? Buy online
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Automation Sprint: one process, automated</h2>
                <ul className="space-y-2 mb-2">
                  {[
                    "Pay online first, then a call where you walk us through the process",
                    "Live within 5 working days after that call",
                    "Handover docs, a recorded walkthrough and 30 days of fixes",
                    "Buying from India? Request an invoice",
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
                  <span className="text-4xl font-bold gradient-text">£9,135</span>
                </p>
                <p className="text-sm text-text-muted mb-5">£6,300 + 45% service fee</p>
                <a
                  href={WAITLIST_DEPOSIT_URL}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-bg-primary font-semibold"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Sprint slots are full: reserve with a £500 refundable deposit
                </a>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
