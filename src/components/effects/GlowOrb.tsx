"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  color?: "blue" | "purple" | "green";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  delay?: number;
}

const colors = {
  blue: "bg-accent-blue/20",
  purple: "bg-accent-purple/20",
  green: "bg-accent-green/20",
};

const sizes = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
};

export function GlowOrb({
  color = "blue",
  size = "md",
  className,
  delay = 0,
}: GlowOrbProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-[100px] pointer-events-none animate-pulse-glow",
        colors[color],
        sizes[size],
        className
      )}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}
