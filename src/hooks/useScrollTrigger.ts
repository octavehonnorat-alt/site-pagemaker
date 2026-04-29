import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollTrigger() {
  const isRegistered = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !isRegistered.current) {
      gsap.registerPlugin(ScrollTrigger);
      isRegistered.current = true;
    }

    return () => {
      // Avoid excessive layout thrashing, we just kill triggers tied to unmounted components dynamically.
      // Usually ScrollTrigger.killAll() is too aggressive if used across page transitions
      // We recommend killing specific ScrollTriggers inside the component that creates them.
    };
  }, []);
}
