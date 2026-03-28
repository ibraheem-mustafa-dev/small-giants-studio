"use client";

import { useScrollReveal } from "@/components/hooks/useScrollReveal";

type RevealDirection = "up" | "down" | "left" | "right" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Uses CSS data-attribute transitions for 60fps performance.
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ delay });

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${className}`}
      data-revealed="false"
    >
      {children}
    </div>
  );
}
