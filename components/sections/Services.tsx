'use client';

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const services = [
  {
    id: "digital-transformation",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    image: "/images/generated/service-digital-transformation.png",
    imageAlt: "Illustration of digital transformation connecting business systems",
    title: "Digital Transformation",
    outcome: "Get your whole digital setup working together",
    description: "Complete overhaul of your marketing and operations into one connected system.",
  },
  {
    id: "marketing-strategy",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    image: "/images/generated/service-marketing.png",
    imageAlt: "Illustration of marketing strategy bringing in the right customers",
    title: "Marketing Strategy",
    outcome: "Get found by the right people",
    description: "Strategy that brings in customers who actually need what you offer.",
  },
  {
    id: "website-development",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    image: "/images/generated/service-web-dev.png",
    imageAlt: "Illustration of website design and development for lead generation",
    title: "Website Design & Development",
    outcome: "A website that actually generates leads",
    description: "Fast, accessible websites built to convert visitors into customers.",
  },
  {
    id: "crm-operations",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    image: "/images/generated/service-crm.png",
    imageAlt: "Illustration of CRM and operations management keeping everything on track",
    title: "CRM & Operations",
    outcome: "Stop things falling through the cracks",
    description: "Systems that track every lead, customer, and task so nothing gets lost.",
  },
  {
    id: "ai-automation",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    image: "/images/generated/service-automation.png",
    imageAlt: "Illustration of AI and automation freeing up time from repetitive tasks",
    title: "AI & Automation",
    outcome: "Free up your time for actual work",
    description: "Smart automation that handles repetitive tasks so you don't have to.",
  },
  {
    id: "seo-marketing",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    image: "/images/generated/service-seo.png",
    imageAlt: "Illustration of SEO and digital marketing visibility across search engines and AI",
    title: "SEO, GEO & Digital Marketing",
    outcome: "Show up where your customers are looking — including AI",
    description: "Be found on Google, ChatGPT, and every platform your customers use to search.",
  },
];

export function Services() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{ backgroundColor: 'var(--color-accent-500)' }}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="services-heading"
              className="text-2xl font-bold text-primary-900 dark:text-primary-900 sm:text-3xl"
            >
              What I can help with
            </h2>
            <p className="mt-4 text-lg text-primary-900 dark:text-primary-900">
              I don&apos;t build until I understand your business. Strategy first. Tools chosen for
              how you work, not what&apos;s popular.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured service — full width */}
        <ScrollReveal animation="fade-up" delay={150}>
          <Link
            href={`/services#${services[0].id}`}
            className="group mt-12 flex flex-col items-center gap-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 hover:shadow-xl dark:from-primary-900/30 dark:to-surface sm:flex-row sm:items-start sm:p-10"
          >
            <div className="flex shrink-0 flex-col items-center gap-3">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                <Image
                  src={services[0].image}
                  alt={services[0].imageAlt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 640px) 112px, 96px"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-700 text-white transition-colors group-hover:bg-primary-800">
                {services[0].icon}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-700 dark:group-hover:text-primary-300 sm:text-2xl">
                {services[0].title}
              </h3>
              <p className="mt-2 text-lg font-medium text-accent-700 dark:text-accent-400">{services[0].outcome}</p>
              <p className="mt-2 text-text-secondary">
                {services[0].description} I audit your whole digital setup and rebuild it as one connected system — marketing, operations, CRM, all talking to each other.
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-700 dark:text-primary-300">
                See how it works
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </Link>
        </ScrollReveal>

        {/* Remaining services — compact grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.slice(1).map((service, index) => (
            <ScrollReveal key={service.id} animation="fade-up" delay={(index + 2) * 150}>
              <Link
                href={`/services#${service.id}`}
                className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl"
              >
                <div className="relative mx-auto mb-3 h-16 w-16 sm:h-20 sm:w-20">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 640px) 80px, 64px"
                  />
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:text-primary-300 transition-colors group-hover:bg-primary-200">
                  {service.icon}
                </div>
                <h3 className="mt-3 text-base font-semibold text-text-primary group-hover:text-primary-700 dark:group-hover:text-primary-300">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent-700 dark:text-accent-400">{service.outcome}</p>
                <div className="mt-3 flex items-center text-xs font-medium text-primary-700 dark:text-primary-300 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
