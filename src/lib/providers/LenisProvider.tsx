"use client";

// ═══════════════════════════════════════════════════════════════
// PAGEMAKER.ME — Lenis Smooth Scroll Provider
// ═══════════════════════════════════════════════════════════════

import { useEffect, useRef, createContext, useContext, type ReactNode } from "react";
import Lenis from "lenis";
import { useAppStore } from "@/lib/stores/useAppStore";

interface LenisContextValue {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext).lenis;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const { isScrollLocked, setScrollVelocity, isReducedMotion } = useAppStore();

  useEffect(() => {
    // Skip Lenis for reduced motion users
    if (isReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Feed scroll velocity to global store
    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      setScrollVelocity(velocity);
    });

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isReducedMotion, setScrollVelocity]);

  // Lock/unlock scroll
  useEffect(() => {
    if (!lenisRef.current) return;
    if (isScrollLocked) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isScrollLocked]);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </LenisContext.Provider>
  );
}
