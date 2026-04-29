"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: "button" | "a" | "div";
  href?: string;
  onClick?: () => void;
  strength?: number;
  /** Add glow ring effect */
  glow?: boolean;
  /** Add sweep shine effect */
  shine?: boolean;
}

export function MagneticButton({
  children,
  className = "",
  style,
  as = "button",
  href,
  onClick,
  strength = 0.35,
  glow = false,
  shine = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const Component = as === "a" ? "a" : as === "div" ? "div" : "button";
  const linkProps = as === "a" ? { href } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.2 }}
      className="inline-block"
    >
      <Component
        className={`magnetic-btn relative overflow-hidden ${glow ? "magnetic-glow" : ""} ${shine ? "magnetic-shine" : ""} ${isHovered ? "is-hovered" : ""} ${className}`}
        style={style}
        onClick={onClick}
        {...linkProps}
      >
        {/* Glow ring */}
        {glow && (
          <span
            className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              boxShadow: "0 0 24px 4px var(--pm-coral), 0 0 64px 8px rgba(212, 101, 74, 0.15)",
            }}
          />
        )}

        {/* Shine sweep */}
        {shine && (
          <span
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]"
            style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s" }}
          >
            <span
              className="absolute top-0 left-[-100%] w-[60%] h-full pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                animation: isHovered ? "shineSweep 0.8s ease-out forwards" : "none",
              }}
            />
          </span>
        )}

        {/* Content */}
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
}
