import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Digital Transformation Blog: AI, Marketing & Automation for SMEs",
  description:
    "Practical guides on digital transformation, marketing automation, AI implementation, and building sustainable business systems for UK SMEs without burning out.",
};

export default function InsightsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Insights
            </h1>
            <p className="mt-6 text-xl text-primary-100">
              Thoughts on digital transformation, marketing, automation, and building businesses
              that work for you.
            </p>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-background p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <svg
                className="h-8 w-8 text-primary-700"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-text-primary">Articles coming soon</h2>
            <p className="mt-4 text-lg text-text-secondary">
              I&apos;m writing practical guides on digital transformation, automation, and running
              a small business without burning out. Follow me on LinkedIn to get notified when
              the first articles go live.
            </p>
            <a
              href="https://www.linkedin.com/company/small-giants-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Follow on LinkedIn
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
