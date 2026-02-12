import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section
      className="relative bg-gradient-to-r from-accent-700 to-accent-800 py-16 sm:py-24"
      aria-labelledby="cta-heading"
    >
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full h-8 sm:h-12 lg:h-16 -translate-y-full">
        <svg
          className="block w-full h-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 0L48 8C96 16 192 32 288 37.3C384 43 480 37 576 32C672 27 768 21 864 24C960 27 1056 37 1152 40C1248 43 1344 37 1392 35L1440 32V0H0Z"
            style={{ fill: 'var(--color-surface)' }}
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
          >
            The world doesn&apos;t need more Goliaths.
            <span className="mt-2 block">It needs more BFGs.</span>
          </h2>
          <p className="mt-6 text-lg text-white">
            Big Friendly Giants who actually care about their customers. If you&apos;re a small
            business, charity, or social enterprise doing meaningful work — I&apos;d love to help
            you compete with the giants in your industry.
          </p>
          <p className="mt-4 text-white/80">
            Let&apos;s have a chat. No hard sell — just an honest conversation about
            what&apos;s holding you back and whether I can help.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="/contact"
              variant="white"
              size="lg"
            >
              Let&apos;s Talk
            </Button>
            <Button
              href="tel:+447424449555"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              07424 449555
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
