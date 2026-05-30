"use client";

export function SectionTransition() {
  return (
    <div className="relative h-16 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="section-divider absolute top-1/2 left-0 right-0 -translate-y-1/2" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.08) 50%, transparent 100%)",
          animation: "light-sweep 8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
