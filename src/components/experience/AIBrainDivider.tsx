"use client";

import { useEffect, useRef } from "react";
import { useExperience } from "@/lib/experience-context";

export function AIBrainDivider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { reducedMotion } = useExperience();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const nodes: Array<{ angle: number; radius: number; speed: number; layer: number }> = [];

    for (let i = 0; i < 24; i++) {
      nodes.push({
        angle: (i / 24) * Math.PI * 2,
        radius: 40 + (i % 3) * 25,
        speed: 0.003 + (i % 5) * 0.001,
        layer: i % 3,
      });
    }

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const time = Date.now() * 0.001;

      nodes.forEach((node, i) => {
        node.angle += node.speed;
        const r = node.radius + Math.sin(time + i) * 8;
        const x = cx + Math.cos(node.angle) * r;
        const y = cy + Math.sin(node.angle) * r * 0.6;

        ctx.beginPath();
        ctx.arc(x, y, 2 + node.layer * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${0.3 + node.layer * 0.15})`;
        ctx.fill();

        const next = nodes[(i + 1) % nodes.length];
        const nx = cx + Math.cos(next.angle) * (next.radius + Math.sin(time + i + 1) * 8);
        const ny = cy + Math.sin(next.angle) * (next.radius + Math.sin(time + i + 1) * 8) * 0.6;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = "rgba(123, 97, 255, 0.12)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 255, 178, 0.4)";
      ctx.fill();

      animationId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  return (
    <div className="relative h-28 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.03] to-transparent" />
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  );
}
