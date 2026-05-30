"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FLOW_NODES = [
  { id: "meta", label: "Meta Lead", icon: "M", color: "#1877F2", x: 0 },
  { id: "ai", label: "AI Agent", icon: "AI", color: "#00D4FF", x: 1 },
  { id: "whatsapp", label: "WhatsApp", icon: "W", color: "#25D366", x: 2 },
  { id: "crm", label: "CRM", icon: "C", color: "#7B61FF", x: 3 },
  { id: "calendar", label: "Google Calendar", icon: "G", color: "#4285F4", x: 4 },
  { id: "sales", label: "Sales Team", icon: "S", color: "#00FFB2", x: 5 },
];

export function VisualAutomationFlow() {
  const [activeNode, setActiveNode] = useState(0);
  const [packetProgress, setPacketProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketProgress((prev) => {
        if (prev >= 1) {
          setActiveNode((n) => (n + 1) % FLOW_NODES.length);
          return 0;
        }
        return prev + 0.05;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const fromIdx = activeNode;
  const toIdx = (activeNode + 1) % FLOW_NODES.length;

  return (
    <div className="relative w-full">
      {/* Desktop horizontal flow */}
      <div className="hidden md:block relative py-8">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          {FLOW_NODES.slice(0, -1).map((_, i) => {
            const x1 = ((i + 0.5) / FLOW_NODES.length) * 100;
            const x2 = ((i + 1.5) / FLOW_NODES.length) * 100;
            const isActive = i === activeNode || i === activeNode - 1;
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1="50%"
                x2={`${x2}%`}
                y2="50%"
                stroke={isActive ? "rgba(0,212,255,0.4)" : "rgba(255,255,255,0.08)"}
                strokeWidth="2"
                strokeDasharray={isActive ? "6 4" : "none"}
                className={isActive ? "flow-line" : ""}
              />
            );
          })}
          {packetProgress < 1 && (
            <circle
              cx={`${((fromIdx + 0.5 + packetProgress) / FLOW_NODES.length) * 100}%`}
              cy="50%"
              r="4"
              fill="#00FFB2"
              style={{ filter: "drop-shadow(0 0 6px rgba(0,255,178,0.8))" }}
            />
          )}
        </svg>

        <div className="relative flex justify-between items-center">
          {FLOW_NODES.map((node, i) => (
            <motion.div
              key={node.id}
              animate={{
                scale: i === activeNode ? 1.08 : i < activeNode ? 1 : 0.95,
                opacity: i <= activeNode ? 1 : 0.4,
              }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center z-10"
              style={{ width: `${100 / FLOW_NODES.length}%` }}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-bold mb-2 transition-all duration-500 border",
                  i === activeNode && "glow-blue"
                )}
                style={{
                  background: `${node.color}15`,
                  borderColor: i <= activeNode ? `${node.color}50` : "rgba(255,255,255,0.08)",
                  color: node.color,
                  boxShadow: i === activeNode ? `0 0 24px ${node.color}30` : "none",
                }}
              >
                {node.icon}
              </div>
              <span className="text-[10px] text-text-secondary text-center leading-tight max-w-[80px]">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile vertical flow */}
      <div className="md:hidden space-y-2">
        {FLOW_NODES.map((node, i) => (
          <motion.div
            key={node.id}
            animate={{
              opacity: i <= activeNode ? 1 : 0.35,
              scale: i === activeNode ? 1.02 : 1,
            }}
          >
            <div
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border transition-all duration-500",
                i === activeNode ? "bg-accent-blue/10 border-accent-blue/30 glow-blue" : "bg-white/5 border-transparent"
              )}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: `${node.color}20`, color: node.color }}
              >
                {node.icon}
              </div>
              <span className="font-medium text-sm">{node.label}</span>
            </div>
            {i < FLOW_NODES.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="w-px h-4 bg-gradient-to-b from-accent-blue/50 to-transparent" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
