// ═══════════════════════════════════════════════════════════════
// PAGEMAKER.ME — Global App Store (Zustand)
// ═══════════════════════════════════════════════════════════════

import { create } from "zustand";

export type GPUTier = "ultra" | "high" | "medium" | "low";
export type CursorMode = "default" | "text" | "lens" | "crosshair" | "magnetic";
export type AudioState = "muted" | "ambient" | "interactive";

interface AppState {
  // ─── Performance ───
  gpuTier: GPUTier;
  setGpuTier: (tier: GPUTier) => void;
  isReducedMotion: boolean;
  setReducedMotion: (val: boolean) => void;
  dpr: number;
  setDpr: (dpr: number) => void;

  // ─── Scroll ───
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  scrollVelocity: number;
  setScrollVelocity: (velocity: number) => void;
  isScrollLocked: boolean;
  lockScroll: () => void;
  unlockScroll: () => void;

  // ─── Navigation ───
  currentScene: string;
  setCurrentScene: (scene: string) => void;
  isMenuOpen: boolean;
  setMenuOpen: (val: boolean) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
  isNavVisible: boolean;
  setNavVisible: (val: boolean) => void;
  isTransitioning: boolean;
  setTransitioning: (val: boolean) => void;

  // ─── Cursor ───
  cursorMode: CursorMode;
  setCursorMode: (mode: CursorMode) => void;
  cursorText: string;
  setCursorText: (text: string) => void;

  // ─── Audio ───
  audioState: AudioState;
  setAudioState: (state: AudioState) => void;
  isMuted: boolean;
  toggleMute: () => void;

  // ─── UI ───
  isPreloaderDone: boolean;
  setPreloaderDone: () => void;
  isDebugMode: boolean;
  toggleDebugMode: () => void;
  activeSection: number;
  setActiveSection: (section: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Performance
  gpuTier: "medium",
  setGpuTier: (tier) => set({ gpuTier: tier }),
  isReducedMotion: false,
  setReducedMotion: (val) => set({ isReducedMotion: val }),
  dpr: 1.5,
  setDpr: (dpr) => set({ dpr }),

  // Scroll
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  scrollVelocity: 0,
  setScrollVelocity: (velocity) => set({ scrollVelocity: velocity }),
  isScrollLocked: false,
  lockScroll: () => set({ isScrollLocked: true }),
  unlockScroll: () => set({ isScrollLocked: false }),

  // Navigation
  currentScene: "home",
  setCurrentScene: (scene) => set({ currentScene: scene }),
  isMenuOpen: false,
  setMenuOpen: (val) => set({ isMenuOpen: val }),
  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  isNavVisible: true,
  setNavVisible: (val) => set({ isNavVisible: val }),
  isTransitioning: false,
  setTransitioning: (val) => set({ isTransitioning: val }),

  // Cursor
  cursorMode: "default",
  setCursorMode: (mode) => set({ cursorMode: mode }),
  cursorText: "",
  setCursorText: (text) => set({ cursorText: text }),

  // Audio
  audioState: "muted",
  setAudioState: (state) => set({ audioState: state }),
  isMuted: true,
  toggleMute: () =>
    set((s) => ({
      isMuted: !s.isMuted,
      audioState: s.isMuted ? "ambient" : "muted",
    })),

  // UI
  isPreloaderDone: false,
  setPreloaderDone: () => set({ isPreloaderDone: true }),
  isDebugMode: false,
  toggleDebugMode: () => set((s) => ({ isDebugMode: !s.isDebugMode })),
  activeSection: 0,
  setActiveSection: (section) => set({ activeSection: section }),
}));
