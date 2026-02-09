export function FishTank() {
  return (
    <section
      id="approach"
      className="bg-primary-50 py-16 sm:py-24"
      aria-labelledby="fishtank-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 p-8">
              {/* Fish tank illustration */}
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
                {/* Water */}
                <rect
                  x="54"
                  y="100"
                  width="292"
                  height="226"
                  rx="6"
                  fill="#3AA8A8"
                  opacity="0.3"
                />
                {/* Fish */}
                <g transform="translate(150, 180)">
                  <ellipse cx="0" cy="0" rx="40" ry="25" fill="#F5842C" />
                  <polygon points="35,0 55,-15 55,15" fill="#F5842C" />
                  <circle cx="-20" cy="-5" r="5" fill="white" />
                  <circle cx="-18" cy="-5" r="3" fill="#1A202C" />
                </g>
                {/* Second fish */}
                <g transform="translate(280, 220) scale(-1,1)">
                  <ellipse cx="0" cy="0" rx="30" ry="18" fill="#F5842C" opacity="0.7" />
                  <polygon points="25,0 40,-10 40,10" fill="#F5842C" opacity="0.7" />
                </g>
                {/* Bubbles */}
                <circle cx="200" cy="150" r="8" fill="#1B6B6B" opacity="0.2" />
                <circle cx="220" cy="130" r="5" fill="#1B6B6B" opacity="0.2" />
                <circle cx="190" cy="120" r="6" fill="#1B6B6B" opacity="0.2" />
                {/* Food dropping in */}
                <g className="animate-bounce">
                  <circle cx="180" cy="70" r="4" fill="#F5842C" />
                  <circle cx="200" cy="65" r="3" fill="#F5842C" />
                  <circle cx="220" cy="72" r="4" fill="#F5842C" />
                </g>
                {/* Labels */}
                <text x="200" y="50" textAnchor="middle" className="fill-primary-800 text-sm font-medium">
                  Marketing = The Food
                </text>
                <text x="200" y="360" textAnchor="middle" className="fill-primary-800 text-sm font-medium">
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
                <strong className="text-primary-800">Marketing is the food</strong> — it gets
                people to find you.
              </p>
              <p>
                <strong className="text-primary-800">Operations is the tank</strong> — it lets
                you handle them when they arrive.
              </p>
              <p>
                Most businesses have one or the other. Giants have both working together as one
                connected system.
              </p>
            </div>
            <div className="mt-8 rounded-lg bg-primary-100 p-6">
              <p className="text-lg font-semibold text-primary-800">
                Which area is your limiting factor?
              </p>
              <p className="mt-2 text-primary-700">
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
