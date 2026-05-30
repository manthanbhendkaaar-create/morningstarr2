"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useExperience } from "@/lib/experience-context";

interface PremiumGlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "purple" | "green" | "none";
  tilt?: boolean;
}

export function PremiumGlassCard({
  children,
  className,
  glow = "none",
  tilt = true,
}: PremiumGlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isDesktop, reducedMotion } = useExperience();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);
  const reflectionX = useTransform(springX, [0, 1], ["20%", "80%"]);
  const reflectionY = useTransform(springY, [0, 1], ["20%", "80%"]);
  const reflectionBg = useTransform(
    [reflectionX, reflectionY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.1) 0%, transparent 55%)`
  );

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current || !tilt || !isDesktop) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const enableTilt = tilt && isDesktop && !reducedMotion;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={
        enableTilt
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1000,
              willChange: "transform",
            }
          : undefined
      }
      whileHover={enableTilt ? { y: -6, scale: 1.01 } : { y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass-premium rounded-2xl p-6 relative overflow-hidden group",
        glow === "blue" && "glow-blue hover:glow-blue-intense",
        glow === "purple" && "glow-purple hover:glow-purple-intense",
        glow === "green" && "glow-green hover:glow-green-intense",
        className
      )}
    >
      {enableTilt && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: reflectionBg }}
        />
      )}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 glass-reflection-layer"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
