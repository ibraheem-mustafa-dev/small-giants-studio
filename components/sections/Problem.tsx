'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Problem() {
  const painPoints = [
    {
      stat: "33",
      unit: "hours",
      label: "per week on admin",
      description: "Government research shows small business owners spend a third of their week on paperwork",
    },
    {
      stat: "Multiple",
      unit: "hats",
      label: "worn daily",
      description: "Marketing, sales, operations, finance — all on your shoulders",
    },
    {
      stat: "Can't",
      unit: "switch",
      label: "off",
      description: "Your health, hobbies, and family take a back seat to the business",
    },
  ];

  return (
    <section
      className="bg-primary-900 py-16 sm:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Opening statement */}
        <ScrollReveal animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="problem-heading"
              className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
            >
              You started your business to do work you love.
              <span className="mt-2 block text-primary-300">
                Instead you&apos;re drowning in admin.
              </span>
            </h2>
            <p className="mt-6 text-lg text-primary-200">
              Your bigger competitors have teams, tools, and infrastructure that let them dominate
              online. You&apos;re juggling everything alone.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point.label} animation="fade-up" delay={index * 150}>
              <div
                className="rounded-xl bg-primary-800/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-5xl font-bold text-accent-400 sm:text-6xl">
                  {point.stat}
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {point.unit}
                </div>
                <div className="mt-1 text-sm text-primary-200">{point.label}</div>
                <p className="mt-4 text-sm text-primary-200">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing statement */}
        <ScrollReveal animation="fade-in" delay={500}>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-lg font-medium text-white">
              Not because you&apos;re doing it wrong —
            </p>
            <p className="mt-2 text-xl font-bold text-accent-400">
              because you don&apos;t have the systems they have.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
