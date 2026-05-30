"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Loader2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/GlassCard";
import { WorkflowFlow } from "@/components/ui/WorkflowFlow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DEMO_VIDEO_SRC } from "@/lib/constants";

const DEMO_STEPS = [
  "Lead Arrives",
  "AI Responds",
  "Lead Qualified",
  "Meeting Booked",
  "CRM Updated",
];

export function VideoDemo() {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setLoading(true);
  };

  const handleCanPlay = () => {
    setLoading(false);
    videoRef.current?.play();
  };

  return (
    <section id="video-demo" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent pointer-events-none" />
      <div className="container-wide relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Demo"
            title="Watch AI Work In Real Time"
            subtitle="See how our automation systems respond, qualify, follow up, and book appointments automatically."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative gradient-border rounded-2xl overflow-hidden aspect-video bg-bg-secondary">
                {playing ? (
                  <div className="relative w-full h-full bg-black">
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                        <Loader2 className="w-10 h-10 text-accent-blue animate-spin" />
                      </div>
                    )}
                    <video
                      ref={videoRef}
                      src={DEMO_VIDEO_SRC}
                      className="w-full h-full object-contain"
                      controls
                      playsInline
                      preload="auto"
                      onCanPlay={handleCanPlay}
                      onWaiting={() => setLoading(true)}
                      onPlaying={() => setLoading(false)}
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handlePlay}
                    className="w-full h-full flex items-center justify-center relative cursor-pointer"
                    aria-label="Play demo video"
                  >
                    <video
                      src={DEMO_VIDEO_SRC}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
                      muted
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                        `,
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10" />
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-16 h-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center glow-blue"
                    >
                      <Play className="w-7 h-7 text-bg-primary ml-1" fill="currentColor" />
                    </motion.div>
                    <p className="absolute bottom-4 text-xs text-text-muted">
                      Click to play automation demo
                    </p>
                  </button>
                )}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 glow-purple">
              <p className="text-sm text-text-muted uppercase tracking-widest mb-4">
                Live Workflow
              </p>
              <WorkflowFlow steps={DEMO_STEPS} interval={1800} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
