import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1
              id="hero-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Helping human-led businesses{" "}
              <span className="text-accent-400">compete with the giants</span>
            </h1>
            <p className="mt-6 text-lg text-primary-100 sm:text-xl">
              Enterprise-level marketing, automation, and tech — at budgets that actually work.
            </p>
            <p className="mt-4 text-base text-primary-200">
              For UK SMEs, charities, and social enterprises who genuinely care about their
              customers.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="/contact" size="lg">
                Let&apos;s Have a Chat About Your Business
              </Button>
              <Button href="#approach" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                See How I Work
              </Button>
            </div>

            {/* Location */}
            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-primary-200 lg:justify-start">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Based in Birmingham. UK-focused — but happy to help anyone doing meaningful work.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-400/30" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/images/ibraheem-headshot.png"
                  alt="Ibraheem Mustafa, founder of Small Giants Studio"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
