"use client";

import { useScrollReveal } from "@/components/hooks/useScrollReveal";

type RevealDirection = "up" | "down" | "left" | "right" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
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
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ delay });

  return (
    // @ts-expect-error — dynamic tag element
    <Tag
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${className}`}
      data-revealed="false"
    >
      {children}
    </Tag>
  );
}
