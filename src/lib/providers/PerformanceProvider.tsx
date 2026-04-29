"use client";

// ═══════════════════════════════════════════════════════════════
// PAGEMAKER.ME — Performance Provider
// Detects GPU tier on mount, sets global performance presets
// ═══════════════════════════════════════════════════════════════

import { useEffect, type ReactNode } from "react";
import { useAppStore } from "@/lib/stores/useAppStore";
import { detectPerformanceTier, checkReducedMotion } from "@/lib/utils/performance";

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const { setGpuTier, setDpr, setReducedMotion } = useAppStore();

  useEffect(() => {
    // Detect GPU tier
    detectPerformanceTier().then((preset) => {
      setGpuTier(preset.tier);
      setDpr(preset.dpr);
    });

    // Detect reduced motion
    const reducedMotion = checkReducedMotion();
    setReducedMotion(reducedMotion);

    // Listen for reduced motion changes
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, [setGpuTier, setDpr, setReducedMotion]);

  return <>{children}</>;
}
