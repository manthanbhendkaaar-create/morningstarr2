import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "purple" | "green" | "none";
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = "none",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-premium rounded-2xl p-6 transition-all duration-500 relative overflow-hidden",
        hover && "hover:-translate-y-1 hover:border-white/20 hover:scale-[1.01]",
        glow === "blue" && "glow-blue hover:glow-blue-intense",
        glow === "purple" && "glow-purple hover:glow-purple-intense",
        glow === "green" && "glow-green hover:glow-green-intense",
        className
      )}
    >
      <div className="glass-reflection-layer absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-10",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
