"use client";

import { useEffect, useRef } from "react";
import { useExperience } from "@/lib/experience-context";

export function PremiumCursor() {
  const { isDesktop, reducedMotion } = useExperience();
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    document.body.classList.add("premium-cursor-active");

    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12;
      trail.current.y += (pos.current.y - trail.current.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("premium-cursor-active");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [isDesktop, reducedMotion]);

  if (!isDesktop || reducedMotion) return null;

  return (
    <>
      <div
        ref={haloRef}
        className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-[9997] mix-blend-screen"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.04) 0%, rgba(123,97,255,0.02) 40%, transparent 70%)",
          willChange: "transform",
        }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        aria-hidden="true"
        style={{
          background: "rgba(0,212,255,0.8)",
          boxShadow: "0 0 12px rgba(0,212,255,0.6), 0 0 24px rgba(123,97,255,0.3)",
          willChange: "transform",
        }}
      />
    </>
  );
}
