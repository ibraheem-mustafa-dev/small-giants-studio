import Image from "next/image";

const partners = [
  {
    name: "Evertreen",
    description: "Every client I work with plants trees through Evertreen. It's not greenwashing — it's just the right thing to do.",
    logo: "/images/partners/evertreen-logo.svg",
    url: "https://evertreen.com",
  },
  {
    name: "Muslims in Construction",
    description: "I built their website — and I couldn't be prouder of the work they do connecting Muslim professionals in construction across the UK.",
    logo: "/images/partners/mic-logo.png",
    url: "https://muslimsincontruction.co.uk",
  },
  {
    name: "Association of Muslim Engineers",
    description: "I help with their events because community matters. MashaAllah, the work they do supporting Muslim engineers is inspiring.",
    logo: "/images/partners/ame-logo.png",
    url: "https://ame.org.uk",
  },
];

export function Community() {
  return (
    <section
      className="bg-surface py-16 sm:py-24"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="community-heading"
            className="text-2xl font-bold text-text-primary sm:text-3xl"
          >
            Community isn&apos;t a marketing strategy.
            <span className="mt-1 block text-primary-700 dark:text-primary-300">It&apos;s who I am.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Not networking for what you can extract — but investing in something that lifts the
            whole community. Alhamdulillah, I get to work with people who genuinely care.
          </p>
        </div>

        {/* Partner cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:border-primary-300 hover:shadow-lg"
            >
              <div className="flex h-16 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} — Small Giants Studio community partner`}
                  width={160}
                  height={64}
                  sizes="(max-width: 640px) 120px, 160px"
                  className="h-12 w-auto object-contain transition-all group-hover:scale-110 group-hover:grayscale"
                />
              </div>
              <h3 className="mt-4 text-center text-lg font-semibold text-text-primary">
                {partner.name}
              </h3>
              <p className="mt-2 flex-1 text-center text-sm text-text-secondary">
                {partner.description}
              </p>
              <div className="mt-4 flex items-center justify-center text-sm font-medium text-primary-700 dark:text-primary-300 opacity-0 transition-opacity group-hover:opacity-100">
                Visit website
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Evertreen Forest Embed */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-semibold text-text-primary">
              Our Growing Forest
            </h3>
            <p className="mt-2 text-text-secondary">
              Every project I complete plants real trees. It&apos;s a small thing — but it adds up.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-background">
            <iframe
              width="100%"
              height="500"
              style={{ border: "none" }}
              src="https://www.evertreen.com/forest/697950af3dc86?iframe=1"
              title="Small Giants Studio Evertreen Forest"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
