"use client";

import dynamic from "next/dynamic";

const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  { ssr: false, loading: () => <CalendlySkeleton /> }
);

function CalendlySkeleton() {
  return (
    <div className="w-full h-[700px] glass rounded-2xl animate-pulse flex items-center justify-center">
      <p className="text-text-muted">Loading calendar...</p>
    </div>
  );
}

interface CalendlyEmbedProps {
  url?: string;
  className?: string;
}

export function CalendlyEmbed({ url, className }: CalendlyEmbedProps) {
  return (
    <div className={className}>
      <InlineWidget
        url={url ?? ""}
        styles={{ height: "700px", minWidth: "320px" }}
        pageSettings={{
          backgroundColor: "050816",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00D4FF",
          textColor: "F8FAFC",
        }}
      />
    </div>
  );
}
