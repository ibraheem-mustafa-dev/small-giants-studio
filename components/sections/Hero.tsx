import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
      aria-labelledby="hero-heading"
    >
      <style>{`
        @keyframes node-appear {
          0% { r: 0; opacity: 0; }
          100% { r: 4; opacity: 1; }
        }
        @keyframes line-draw {
          0% { stroke-dashoffset: 100; opacity: 0; }
          20% { opacity: 0.6; }
          100% { stroke-dashoffset: 0; opacity: 0.6; }
        }
        @keyframes figure-enter {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes shadow-grow {
          0% { transform: scaleY(0); opacity: 0; }
          70% { transform: scaleY(1.03); opacity: 0.14; }
          100% { transform: scaleY(1); opacity: 0.11; }
        }
        @keyframes crown-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes gentle-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes label-fade {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 639px) {
          .hero-label { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-anim { animation: none !important; opacity: 1 !important; }
          .hero-anim-hidden { animation: none !important; opacity: 0.11 !important; }
          .hero-anim-line { animation: none !important; stroke-dashoffset: 0 !important; opacity: 0.6 !important; }
        }
      `}</style>

      {/* Subtle dot grid background */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
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

          {/* Small Giants Narrative Animation */}
          <div className="flex justify-center lg:justify-end" aria-hidden="true">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
              <svg viewBox="0 0 420 420" className="h-full w-full">

                {/* Act 1: Giant shadow grows up from the ground (appears first, behind everything) */}
                <g className="hero-anim-hidden" style={{ animation: "shadow-grow 1.8s ease-out 0.3s forwards", transformOrigin: "210px 380px" }}>
                  {/* Head */}
                  <circle cx="210" cy="72" r="36" fill="white" opacity="0.11" />
                  {/* Neck */}
                  <rect x="200" y="108" width="20" height="16" fill="white" opacity="0.11" rx="4" />
                  {/* Shoulders & torso — broad, confident */}
                  <path
                    d="M140 124 L280 124 C282 124 284 126 284 128 L276 200 L260 200 L256 260 L258 380 L232 380 L224 280 L210 280 L196 280 L188 380 L162 380 L164 260 L160 200 L144 200 L136 128 C136 126 138 124 140 124Z"
                    fill="white"
                    opacity="0.11"
                  />
                  {/* Left arm — hand on hip */}
                  <path
                    d="M140 130 L112 160 L96 210 L104 214 L118 170 L144 148"
                    fill="none"
                    stroke="white"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.09"
                  />
                  {/* Right arm — hand on hip */}
                  <path
                    d="M280 130 L308 160 L324 210 L316 214 L302 170 L276 148"
                    fill="none"
                    stroke="white"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.09"
                  />
                </g>

                {/* Act 2: Connection network forms (the systems) — staggered line draws */}
                <g>
                  {/* Connection lines — drawn with dash animation */}
                  {/* Marketing node → CRM node */}
                  <line x1="130" y1="170" x2="200" y2="230" stroke="#5CBDBD" strokeWidth="1.5" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 1.6s forwards", strokeDashoffset: 100, opacity: 0 }} />
                  {/* CRM → Operations */}
                  <line x1="200" y1="230" x2="290" y2="180" stroke="#5CBDBD" strokeWidth="1.5" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 1.9s forwards", strokeDashoffset: 100, opacity: 0 }} />
                  {/* Operations → AI */}
                  <line x1="290" y1="180" x2="280" y2="280" stroke="#5CBDBD" strokeWidth="1.5" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 2.2s forwards", strokeDashoffset: 100, opacity: 0 }} />
                  {/* AI → Website */}
                  <line x1="280" y1="280" x2="150" y2="290" stroke="#5CBDBD" strokeWidth="1.5" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 2.5s forwards", strokeDashoffset: 100, opacity: 0 }} />
                  {/* Website → Marketing (closing the loop) */}
                  <line x1="150" y1="290" x2="130" y2="170" stroke="#5CBDBD" strokeWidth="1.5" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 2.8s forwards", strokeDashoffset: 100, opacity: 0 }} />
                  {/* Cross connections */}
                  <line x1="130" y1="170" x2="290" y2="180" stroke="#5CBDBD" strokeWidth="1" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 3.0s forwards", strokeDashoffset: 100, opacity: 0 }} />
                  <line x1="200" y1="230" x2="280" y2="280" stroke="#5CBDBD" strokeWidth="1" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 3.2s forwards", strokeDashoffset: 100, opacity: 0 }} />
                  <line x1="200" y1="230" x2="150" y2="290" stroke="#5CBDBD" strokeWidth="1" strokeDasharray="100" className="hero-anim-line" style={{ animation: "line-draw 0.8s ease-out 3.3s forwards", strokeDashoffset: 100, opacity: 0 }} />

                  {/* System nodes — appear with staggered timing */}
                  {/* Marketing */}
                  <circle cx="130" cy="170" r="0" fill="#F5842C" className="hero-anim" style={{ animation: "node-appear 0.5s ease-out 1.4s forwards" }} />
                  <text x="130" y="155" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" className="hero-anim hero-label" style={{ animation: "label-fade 0.4s ease-out 1.6s forwards", opacity: 0 }}>Marketing</text>

                  {/* CRM */}
                  <circle cx="200" cy="230" r="0" fill="#F5842C" className="hero-anim" style={{ animation: "node-appear 0.5s ease-out 1.7s forwards" }} />
                  <text x="200" y="248" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" className="hero-anim hero-label" style={{ animation: "label-fade 0.4s ease-out 1.9s forwards", opacity: 0 }}>CRM</text>

                  {/* Operations */}
                  <circle cx="290" cy="180" r="0" fill="#F5842C" className="hero-anim" style={{ animation: "node-appear 0.5s ease-out 2.0s forwards" }} />
                  <text x="290" y="166" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" className="hero-anim hero-label" style={{ animation: "label-fade 0.4s ease-out 2.2s forwards", opacity: 0 }}>Operations</text>

                  {/* AI */}
                  <circle cx="280" cy="280" r="0" fill="#F5842C" className="hero-anim" style={{ animation: "node-appear 0.5s ease-out 2.3s forwards" }} />
                  <text x="280" y="298" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" className="hero-anim hero-label" style={{ animation: "label-fade 0.4s ease-out 2.5s forwards", opacity: 0 }}>AI</text>

                  {/* Website */}
                  <circle cx="150" cy="290" r="0" fill="#F5842C" className="hero-anim" style={{ animation: "node-appear 0.5s ease-out 2.6s forwards" }} />
                  <text x="150" y="308" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" className="hero-anim hero-label" style={{ animation: "label-fade 0.4s ease-out 2.8s forwards", opacity: 0 }}>Website</text>
                </g>

                {/* Act 1 continued: Small orange figure enters — confident, centre stage */}
                <g className="hero-anim" style={{ animation: "figure-enter 0.7s ease-out 0.5s both, gentle-bob 4s ease-in-out 3.5s infinite" }}>
                  {/* Head */}
                  <circle cx="210" cy="310" r="14" fill="#F5842C" />
                  {/* Body */}
                  <rect x="198" y="324" width="24" height="38" rx="6" fill="#F5842C" />
                  {/* Left arm — relaxed confident */}
                  <path d="M198 330 L182 346" fill="none" stroke="#F5842C" strokeWidth="5" strokeLinecap="round" />
                  {/* Right arm — relaxed confident */}
                  <path d="M222 330 L238 346" fill="none" stroke="#F5842C" strokeWidth="5" strokeLinecap="round" />
                  {/* Left leg */}
                  <path d="M204 362 L200 388" fill="none" stroke="#F5842C" strokeWidth="5" strokeLinecap="round" />
                  {/* Right leg */}
                  <path d="M216 362 L220 388" fill="none" stroke="#F5842C" strokeWidth="5" strokeLinecap="round" />
                </g>

                {/* Act 3: Crown/achievement sparkle — appears last, on the giant's head */}
                <g className="hero-anim" style={{ animation: "crown-pulse 2.5s ease-in-out 3.8s infinite" }}>
                  {/* Star above giant's head */}
                  <path d="M210 30 l3 9 9 3 -9 3 -3 9 -3-9 -9-3 9-3z" fill="#F5842C" opacity="0.8" />
                </g>

                {/* Small accent sparkles — appear after network completes */}
                <circle cx="100" cy="130" r="2" fill="#F79D54" className="hero-anim" style={{ animation: "crown-pulse 3s ease-in-out 3.5s infinite", opacity: 0 }} />
                <circle cx="330" cy="120" r="1.5" fill="white" className="hero-anim" style={{ animation: "crown-pulse 2.8s ease-in-out 4s infinite", opacity: 0 }} />
                <circle cx="340" cy="310" r="2" fill="#F79D54" className="hero-anim" style={{ animation: "crown-pulse 3.2s ease-in-out 3.8s infinite", opacity: 0 }} />
                <circle cx="90" cy="320" r="1.5" fill="white" className="hero-anim" style={{ animation: "crown-pulse 2.6s ease-in-out 4.2s infinite", opacity: 0 }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
