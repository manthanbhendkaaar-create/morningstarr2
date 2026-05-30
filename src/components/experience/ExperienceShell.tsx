"use client";

import dynamic from "next/dynamic";
import { ExperienceProvider } from "@/lib/experience-context";

const PremiumCursor = dynamic(
  () => import("./PremiumCursor").then((m) => m.PremiumCursor),
  { ssr: false }
);
const GlobalNeuralNetwork = dynamic(
  () => import("./GlobalNeuralNetwork").then((m) => m.GlobalNeuralNetwork),
  { ssr: false }
);
const AmbientLayer = dynamic(
  () => import("./AmbientLayer").then((m) => m.AmbientLayer),
  { ssr: false }
);
const FloatingAICards = dynamic(
  () => import("./FloatingAICards").then((m) => m.FloatingAICards),
  { ssr: false }
);
const ScrollJourney = dynamic(
  () => import("./ScrollJourney").then((m) => m.ScrollJourney),
  { ssr: false }
);

export function ExperienceShell({ children }: { children: React.ReactNode }) {
  return (
    <ExperienceProvider>
      <div className="relative">
        <GlobalNeuralNetwork />
        <AmbientLayer />
        <FloatingAICards />
        <ScrollJourney />
        <PremiumCursor />
        {children}
      </div>
    </ExperienceProvider>
  );
}
