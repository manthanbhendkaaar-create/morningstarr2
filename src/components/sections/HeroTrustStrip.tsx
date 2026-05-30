import { PLATFORM_METRICS, TRUST_CATEGORIES } from "@/lib/constants";

export function HeroTrustStrip() {
  return (
    <section
      id="hero-trust-strip"
      className="relative z-10 border-y border-white/5 bg-bg-secondary/40"
      aria-label="Platform trust metrics"
    >
      <div className="container-wide px-6 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {PLATFORM_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="glass-premium rounded-xl px-4 py-3 text-center"
            >
              <p className="text-lg md:text-xl font-bold gradient-text">{metric.display}</p>
              <p className="text-[10px] md:text-xs text-text-muted mt-0.5">{metric.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] text-text-muted uppercase tracking-widest">
          Trusted by{" "}
          {TRUST_CATEGORIES.slice(0, 5).join(" · ")}
        </p>
      </div>
    </section>
  );
}
