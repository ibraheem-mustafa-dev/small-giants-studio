export function FishTank() {
  return (
    <section
      id="approach"
      className="relative bg-primary-50 py-16 sm:py-24"
      aria-labelledby="fishtank-heading"
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
            style={{ fill: 'var(--color-primary-900)' }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes swim-right {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -8px); }
          50% { transform: translate(60px, 5px); }
          75% { transform: translate(30px, 10px); }
        }
        @keyframes swim-left {
          0%, 100% { transform: translate(0, 0) scaleX(-1); }
          25% { transform: translate(-25px, 6px) scaleX(-1); }
          50% { transform: translate(-50px, -4px) scaleX(-1); }
          75% { transform: translate(-25px, -10px) scaleX(-1); }
        }
        @keyframes rise {
          0% { transform: translateY(0); opacity: 0.4; }
          100% { transform: translateY(-80px); opacity: 0; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.35; }
        }
        @keyframes food-drop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        @media (max-width: 639px) {
          .tank-label { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fish-swim, .bubble-rise, .seaweed-sway, .water-shimmer, .food-float {
            animation: none !important;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 p-8">
              <svg
                viewBox="0 0 400 400"
                className="h-full w-full"
                aria-hidden="true"
              >
                {/* Tank */}
                <rect
                  x="50"
                  y="80"
                  width="300"
                  height="250"
                  rx="10"
                  fill="none"
                  stroke="#1B6B6B"
                  strokeWidth="4"
                />
                {/* Water with shimmer */}
                <rect
                  x="54"
                  y="100"
                  width="292"
                  height="226"
                  rx="6"
                  fill="#3AA8A8"
                  className="water-shimmer"
                  style={{ animation: "shimmer 4s ease-in-out infinite" }}
                />

                {/* Seaweed */}
                <g className="seaweed-sway" style={{ animation: "sway 3s ease-in-out infinite", transformOrigin: "100px 326px" }}>
                  <path d="M100 326 Q95 290 105 260 Q95 230 100 200" fill="none" stroke="#238888" strokeWidth="4" strokeLinecap="round" />
                  <ellipse cx="105" cy="260" rx="8" ry="14" fill="#238888" opacity="0.6" />
                  <ellipse cx="95" cy="230" rx="7" ry="12" fill="#2D9E9E" opacity="0.5" />
                </g>
                <g className="seaweed-sway" style={{ animation: "sway 3.5s ease-in-out infinite 0.5s", transformOrigin: "300px 326px" }}>
                  <path d="M300 326 Q305 295 295 265 Q305 235 300 210" fill="none" stroke="#238888" strokeWidth="3" strokeLinecap="round" />
                  <ellipse cx="295" cy="265" rx="7" ry="12" fill="#238888" opacity="0.5" />
                </g>
                <g className="seaweed-sway" style={{ animation: "sway 2.8s ease-in-out infinite 1s", transformOrigin: "180px 326px" }}>
                  <path d="M180 326 Q175 300 185 275" fill="none" stroke="#2D9E9E" strokeWidth="3" strokeLinecap="round" />
                  <ellipse cx="185" cy="275" rx="6" ry="10" fill="#2D9E9E" opacity="0.4" />
                </g>

                {/* Fish 1 — swimming right */}
                <g className="fish-swim" style={{ animation: "swim-right 6s ease-in-out infinite" }}>
                  <g transform="translate(140, 180)">
                    <ellipse cx="0" cy="0" rx="40" ry="25" fill="#F5842C" />
                    <polygon points="35,0 55,-15 55,15" fill="#F5842C" />
                    <circle cx="-20" cy="-5" r="5" fill="white" />
                    <circle cx="-18" cy="-5" r="3" fill="#1A202C" />
                    <path d="M5 -20 Q15 -30 25 -18" fill="none" stroke="#D96E1F" strokeWidth="2" />
                  </g>
                </g>

                {/* Fish 2 — swimming left */}
                <g className="fish-swim" style={{ animation: "swim-left 7s ease-in-out infinite 1s" }}>
                  <g transform="translate(280, 240)">
                    <ellipse cx="0" cy="0" rx="30" ry="18" fill="#F5842C" opacity="0.8" />
                    <polygon points="25,0 40,-10 40,10" fill="#F5842C" opacity="0.8" />
                    <circle cx="-15" cy="-3" r="4" fill="white" />
                    <circle cx="-13" cy="-3" r="2.5" fill="#1A202C" />
                  </g>
                </g>

                {/* Fish 3 — small background fish */}
                <g className="fish-swim" style={{ animation: "swim-right 8s ease-in-out infinite 2s" }}>
                  <g transform="translate(200, 280)">
                    <ellipse cx="0" cy="0" rx="18" ry="10" fill="#F79D54" opacity="0.5" />
                    <polygon points="15,0 25,-7 25,7" fill="#F79D54" opacity="0.5" />
                  </g>
                </g>

                {/* Bubbles — staggered timing */}
                <circle cx="200" cy="200" r="6" fill="#1B6B6B" opacity="0.3" className="bubble-rise" style={{ animation: "rise 3s ease-out infinite" }} />
                <circle cx="220" cy="220" r="4" fill="#1B6B6B" opacity="0.2" className="bubble-rise" style={{ animation: "rise 3.5s ease-out infinite 0.8s" }} />
                <circle cx="180" cy="210" r="5" fill="#1B6B6B" opacity="0.25" className="bubble-rise" style={{ animation: "rise 4s ease-out infinite 1.5s" }} />
                <circle cx="160" cy="190" r="3" fill="#1B6B6B" opacity="0.2" className="bubble-rise" style={{ animation: "rise 3.2s ease-out infinite 2.2s" }} />
                <circle cx="240" cy="250" r="4" fill="#1B6B6B" opacity="0.2" className="bubble-rise" style={{ animation: "rise 3.8s ease-out infinite 0.5s" }} />

                {/* Food dropping in */}
                <g className="food-float" style={{ animation: "food-drop 2s ease-in-out infinite" }}>
                  <circle cx="180" cy="85" r="4" fill="#F5842C" />
                  <circle cx="200" cy="80" r="3" fill="#F5842C" />
                  <circle cx="220" cy="87" r="4" fill="#F5842C" />
                </g>

                {/* Labels */}
                <text x="200" y="50" textAnchor="middle" className="tank-label fill-primary-800 dark:fill-primary-300 text-sm font-medium">
                  Marketing = The Food
                </text>
                <text x="200" y="360" textAnchor="middle" className="tank-label fill-primary-800 dark:fill-primary-300 text-sm font-medium">
                  Operations = The Tank
                </text>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              id="fishtank-heading"
              className="text-2xl font-bold text-text-primary sm:text-3xl"
            >
              Think of it like fish in a tank.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-text-secondary">
              <p>
                You can feed them all you want, but if the tank&apos;s too small, they&apos;ll
                stunt, deform, or die. Once they move to a bigger tank, they can grow even larger
                and thrive.
              </p>
              <p>
                <strong className="text-primary-800 dark:text-primary-300">Marketing is the food</strong> — it gets
                people to find you.
              </p>
              <p>
                <strong className="text-primary-800 dark:text-primary-300">Operations is the tank</strong> — it lets
                you handle them when they arrive.
              </p>
              <p>
                Most businesses have one or the other. Giants have both working together as one
                connected system.
              </p>
            </div>
            <div className="mt-8 rounded-lg bg-primary-100 p-6">
              <p className="text-lg font-semibold text-primary-800 dark:text-primary-300">
                Which area is your limiting factor?
              </p>
              <p className="mt-2 text-primary-700 dark:text-primary-300">
                I build both as one connected system — not a Frankenstein of tools that don&apos;t
                talk to each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
