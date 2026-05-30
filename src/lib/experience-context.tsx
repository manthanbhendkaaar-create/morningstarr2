"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface ExperienceContextValue {
  mouseX: number;
  mouseY: number;
  normalizedX: number;
  normalizedY: number;
  isDesktop: boolean;
  reducedMotion: boolean;
}

const ExperienceContext = createContext<ExperienceContextValue>({
  mouseX: 0,
  mouseY: 0,
  normalizedX: 0.5,
  normalizedY: 0.5,
  isDesktop: false,
  reducedMotion: false,
});

export function useExperience() {
  return useContext(ExperienceContext);
}

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0, nx: 0.5, ny: 0.5 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateDesktop = () => setIsDesktop(mqDesktop.matches);
    const updateMotion = () => setReducedMotion(mqMotion.matches);

    updateDesktop();
    updateMotion();
    mqDesktop.addEventListener("change", updateDesktop);
    mqMotion.addEventListener("change", updateMotion);

    return () => {
      mqDesktop.removeEventListener("change", updateDesktop);
      mqMotion.removeEventListener("change", updateMotion);
    };
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDesktop) return;
      setMouse({
        x: e.clientX,
        y: e.clientY,
        nx: e.clientX / window.innerWidth,
        ny: e.clientY / window.innerHeight,
      });
    },
    [isDesktop]
  );

  useEffect(() => {
    if (!isDesktop) return;
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isDesktop, onMouseMove]);

  return (
    <ExperienceContext.Provider
      value={{
        mouseX: mouse.x,
        mouseY: mouse.y,
        normalizedX: mouse.nx,
        normalizedY: mouse.ny,
        isDesktop,
        reducedMotion,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}
