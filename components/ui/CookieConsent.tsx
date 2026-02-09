"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ConsentState = "accepted" | "rejected" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("cookie-consent");
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  }

  function reject() {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
  }

  // Don't render during SSR or if consent already given
  if (!mounted || consent !== null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-lg sm:p-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <p className="text-sm text-text-secondary">
            This site uses cookies to improve your experience. No tracking or
            analytics cookies are used yet — but we need your consent before
            adding any in future.{" "}
            <Link
              href="/privacy"
              className="font-medium text-primary-700 underline hover:text-primary-800"
            >
              Privacy policy
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={reject}
            className="rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Reject all
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
