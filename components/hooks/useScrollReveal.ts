"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  /** Delay before animation starts (ms) */
  delay?: number;
  /** How much of the element must be visible (0-1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
}

/**
 * Lightweight scroll-triggered reveal using IntersectionObserver.
 * Adds 'data-revealed' attribute when element enters viewport.
 * Respects prefers-reduced-motion — reveals instantly without animation.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { delay = 0, threshold = 0.15, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion — reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.setAttribute("data-revealed", "true");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              element.setAttribute("data-revealed", "true");
            }, delay);
          } else {
            element.setAttribute("data-revealed", "true");
          }

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.removeAttribute("data-revealed");
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, threshold, once]);

  return ref;
}
