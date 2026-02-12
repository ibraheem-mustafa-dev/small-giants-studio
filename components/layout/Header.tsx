"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" aria-label="Small Giants Studio home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-3 text-text-secondary hover:bg-primary-50 hover:text-primary-800 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-text-secondary transition-colors hover:text-primary-700 dark:hover:text-primary-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-lg bg-accent-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-700 focus:ring-offset-2"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <div className="space-y-1 border-t border-border bg-surface px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-primary-50 hover:text-primary-800 dark:hover:text-primary-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full rounded-lg bg-accent-700 px-3 py-3 text-center text-base font-semibold text-white transition-all hover:bg-accent-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Chat
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
