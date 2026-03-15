"use client";

import { useScrollReveal } from "@/components/hooks/useScrollReveal";

export function Testimonials() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface-dark)",
        padding: "clamp(6rem, 12vh, 12rem) 0",
      }}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        What clients say
      </h2>

      {/* Large decorative quotation mark */}
      <div
        className="pointer-events-none absolute left-6 top-12 select-none sm:left-12 lg:left-20"
        style={{
          fontSize: "clamp(12rem, 20vw, 24rem)",
          lineHeight: 1,
          fontFamily: "var(--font-display, serif)",
          color: "var(--color-ink-on-dark)",
          opacity: 0.06,
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* The quote */}
        <blockquote className="scroll-reveal-scale">
          <p
            className="max-w-[18ch]"
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.15,
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-ink-on-dark)",
              letterSpacing: "-0.02em",
            }}
          >
            Every conversation leaves me feeling fully informed, with no lingering questions or concerns, just confidence that the work is being done to a standard beyond excellence.
          </p>
        </blockquote>

        {/* Attribution */}
        <div className="scroll-reveal mt-10 sm:mt-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-accent-light)" }}
          >
            Feldon Haynes
          </p>
          <p
            className="mt-1 text-sm"
            style={{ color: "var(--color-ink-on-dark-secondary)" }}
          >
            Founder — Growing Businesses from the Inside Out
          </p>
        </div>
      </div>
    </section>
  );
}
