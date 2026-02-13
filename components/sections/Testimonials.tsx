"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "I can't thank Ibraheem enough and would recommend him to others, without any hesitation. The key words Ibraheem had suggested were exactly what were being read by the readers and are now converting into clients.",
    author: "Tajinder Kaur Rai",
    role: "Notary Public & Consultant Solicitor",
    company: "Commercial Real Estate",
    image: null,
  },
  {
    id: 2,
    quote: "Every conversation leaves me feeling fully informed, with no lingering questions or concerns, just confidence that the work is being done to a standard beyond excellence.",
    author: "Feldon Haynes",
    role: "Founder",
    company: "Growing Businesses from the Inside Out",
    image: null,
  },
  {
    id: 3,
    quote: "Ibraheem is one of the sharpest and most forward-thinking marketing strategists I've had the privilege to work with. His ability to connect big-picture strategy with executional precision makes him a standout leader.",
    author: "Luke Tatchell",
    role: "B2B & B2C Marketing",
    company: "Social Media Strategist",
    image: null,
  },
  {
    id: 4,
    quote: "Ibrahim came to Walsall college to discuss the importance of social networking and what his industry experience entails to learners. It was a pleasure to collaborate with Ibraheem during this talk.",
    author: "Kieran Marsh",
    role: "Lecturer",
    company: "Walsall College — Computing Department",
    image: null,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="relative bg-primary-50 dark:bg-background py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      {/* Wave divider — 2px overlap prevents anti-aliasing gap */}
      <div className="absolute top-0 left-0 w-full h-8 sm:h-12 lg:h-16 -translate-y-[calc(100%-2px)]">
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
            style={{ fill: 'var(--color-accent-500)' }}
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="text-2xl font-bold text-text-primary sm:text-3xl"
          >
            What clients say
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Real results from real businesses. Every client I work with also plants trees through
            my partnership with Evertreen.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="mx-auto max-w-3xl rounded-2xl bg-surface p-8 shadow-lg sm:p-12">
                    {/* Quote icon */}
                    <svg
                      className="h-10 w-10 text-primary-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <blockquote className="mt-6">
                      <p className="text-xl font-medium text-text-primary sm:text-2xl">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </blockquote>

                    <div className="mt-8 flex items-center gap-4">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-200 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                          <span className="text-lg font-semibold">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-text-primary">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-primary-300 hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-0">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="flex h-11 w-11 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-primary-700"
                        : "w-2 bg-primary-300 hover:bg-primary-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:border-primary-300 hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
