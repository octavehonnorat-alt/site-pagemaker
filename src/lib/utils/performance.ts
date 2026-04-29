// ═══════════════════════════════════════════════════════════════
// PAGEMAKER.ME — GPU Tier Detection
// ═══════════════════════════════════════════════════════════════

import { getGPUTier } from "detect-gpu";
import type { GPUTier } from "@/lib/stores/useAppStore";

export interface PerformancePreset {
  tier: GPUTier;
  dpr: number;
  particles: number;
  postprocessing: boolean;
  shadows: boolean;
  reflections: boolean;
  antialias: boolean;
  physicsSteps: number;
}

const PRESETS: Record<GPUTier, PerformancePreset> = {
  ultra: {
    tier: "ultra",
    dpr: 2,
    particles: 1000000,
    postprocessing: true,
    shadows: true,
    reflections: true,
    antialias: true,
    physicsSteps: 60,
  },
  high: {
    tier: "high",
    dpr: 1.5,
    particles: 500000,
    postprocessing: true,
    shadows: true,
    reflections: false,
    antialias: true,
    physicsSteps: 30,
  },
  medium: {
    tier: "medium",
    dpr: 1,
    particles: 100000,
    postprocessing: true,
    shadows: false,
    reflections: false,
    antialias: false,
    physicsSteps: 20,
  },
  low: {
    tier: "low",
    dpr: 1,
    particles: 10000,
    postprocessing: false,
    shadows: false,
    reflections: false,
    antialias: false,
    physicsSteps: 10,
  },
};

export async function detectPerformanceTier(): Promise<PerformancePreset> {
  try {
    const gpuTier = await getGPUTier();

    // Map detect-gpu tier (1-3) to our tiers
    if (gpuTier.tier >= 3) return PRESETS.ultra;
    if (gpuTier.tier >= 2) return PRESETS.high;
    if (gpuTier.tier >= 1) return PRESETS.medium;
    return PRESETS.low;
  } catch {
    // Fallback to medium if detection fails
    return PRESETS.medium;
  }
}

export function getPreset(tier: GPUTier): PerformancePreset {
  return PRESETS[tier];
}

export function checkWebGPUSupport(): boolean {
  if (typeof navigator === "undefined") return false;
  return "gpu" in navigator;
}

export function checkWebGL2Support(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!canvas.getContext("webgl2");
  } catch {
    return false;
  }
}

export function checkReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function checkTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
