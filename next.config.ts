import type { NextConfig } from "next";

// The MIC gala stall page is static files in public/mic (built in the small-giants-business repo,
// 02-marketing/mic-gala-2026/stall-page, copied here by deploy/sync-to-site.py). It embeds the Cal.com
// booking calendar, so it has its own Content-Security-Policy.
const MIC_CSP =
  "default-src 'none'; script-src 'self' https://app.cal.com https://cal.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://app.cal.com https://cal.com; font-src 'self'; frame-src https://app.cal.com https://cal.com; connect-src 'self' https://app.cal.com https://cal.com https://api.cal.com; form-action 'none'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'";

const nextConfig: NextConfig = {
  // Printed QR codes: /hello (banner and cards, repointed per event) and /mic (MIC gala leaflet).
  // A temporary 302 so /hello can point somewhere else after the event.
  async redirects() {
    return [{ source: "/hello", destination: "/mic", statusCode: 302 }];
  },
  async rewrites() {
    return [{ source: "/mic", destination: "/mic/index.html" }];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://api.evertreen.com https://formspree.io; frame-src 'self' https://www.linkedin.com https://linkedin.com https://www.evertreen.com",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/mic",
        headers: [{ key: "Content-Security-Policy", value: MIC_CSP }],
      },
      {
        source: "/mic/:path*",
        headers: [{ key: "Content-Security-Policy", value: MIC_CSP }],
      },
    ];
  },
};

export default nextConfig;
