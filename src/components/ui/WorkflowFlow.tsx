"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WorkflowFlowProps {
  steps: string[];
  interval?: number;
  className?: string;
  compact?: boolean;
}

export function WorkflowFlow({
  steps,
  interval = 1500,
  className,
  compact = false,
}: WorkflowFlowProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, interval);
    return () => clearInterval(timer);
  }, [steps.length, interval]);

  return (
    <div className={cn("space-y-1", className)}>
      {steps.map((step, i) => (
        <div key={step}>
          <motion.div
            animate={{
              opacity: i <= activeStep ? 1 : 0.35,
              scale: i === activeStep ? 1.02 : 1,
            }}
            transition={{ duration: 0.4 }}
            className={cn(
              "flex items-center gap-3 rounded-xl transition-all duration-500",
              compact ? "p-3" : "p-4",
              i <= activeStep
                ? "bg-accent-blue/10 border border-accent-blue/30"
                : "bg-white/5 border border-transparent"
            )}
          >
            <div
              className={cn(
                "rounded-lg flex items-center justify-center text-xs font-bold shrink-0",
                compact ? "w-7 h-7" : "w-8 h-8",
                i <= activeStep
                  ? "bg-accent-blue/20 text-accent-blue"
                  : "bg-white/5 text-text-muted"
              )}
            >
              {i + 1}
            </div>
            <span className={cn("font-medium", compact ? "text-sm" : "text-base")}>
              {step}
            </span>
            {i === activeStep && (
              <motion.div
                className="ml-auto w-2 h-2 rounded-full bg-accent-green shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
            )}
          </motion.div>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-1">
              <div className="w-px h-4 bg-gradient-to-b from-accent-blue/50 to-transparent" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
