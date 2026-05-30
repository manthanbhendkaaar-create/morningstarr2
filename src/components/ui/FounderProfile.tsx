"use client";

import { useState, type ReactNode, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface FounderStat {
  value: string;
  label: string;
}

interface FounderProfileProps {
  name: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  imageSrc?: string;
  stats: FounderStat[];
  children: ReactNode;
  className?: string;
}

function FounderImageFrame({
  name,
  imageAlt,
  imageSrc,
}: {
  name: string;
  imageAlt: string;
  imageSrc?: string;
}) {
  const [imageError, setImageError] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const reflectionBg = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 55%)`
  );

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const showImage = imageSrc && !imageError;

  return (
    <div className="relative mx-auto lg:mx-0 w-full max-w-md">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-accent-green/20 blur-2xl opacity-60 pointer-events-none" />
      <motion.div
        className="relative group"
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent-blue via-accent-purple to-accent-green opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
        <div className="relative glass-premium rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:shadow-[0_12px_48px_rgba(0,212,255,0.15)] transition-shadow duration-500">
          <motion.div
            className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: reflectionBg }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 glass-reflection-layer"
            aria-hidden="true"
          />
          {showImage ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
              className="object-cover object-top"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-bg-secondary to-bg-primary flex flex-col items-center justify-center p-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-bg-primary">{initials}</span>
              </div>
              <p className="text-sm text-text-muted text-center">Founder Photo</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function FounderProfile({
  name,
  title,
  subtitle,
  imageAlt,
  imageSrc,
  stats,
  children,
  className,
}: FounderProfileProps) {
  return (
    <div className={cn("grid lg:grid-cols-2 gap-10 lg:gap-16 items-center", className)}>
      <FounderImageFrame name={name} imageAlt={imageAlt} imageSrc={imageSrc} />

      <div>
        <p className="text-accent-blue text-sm font-medium tracking-widest uppercase mb-2">
          {title}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{name}</h3>
        {subtitle && (
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
            {subtitle}
          </p>
        )}
        <div className="space-y-4 text-text-secondary leading-relaxed">{children}</div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-4 text-center hover:glow-blue transition-shadow duration-500"
            >
              <p className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-[10px] md:text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
