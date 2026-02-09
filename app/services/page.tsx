import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Digital Transformation Services for UK SMEs & Charities",
  description:
    "Get found and handle the growth. I build connected marketing, operations, and tech systems for UK SMEs and charities — at budgets that actually work.",
};

const services = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    outcome: "Get your whole digital setup working together",
    problem: "Your tools don't talk to each other. You're manually copying data between systems. Things fall through the cracks because nothing is connected.",
    solution: "I audit your entire digital setup and rebuild it as one connected system. Marketing, operations, and customer data all flowing together seamlessly.",
    includes: [
      "Full digital audit and strategy",
      "System architecture design",
      "Tool selection and implementation",
      "Data migration and integration",
      "Team training and documentation",
      "Ongoing support and optimisation",
    ],
  },
  {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    outcome: "Get found by the right people",
    problem: "You're spending money on marketing but not seeing results. You're not sure where your next customers are coming from. Your competitors seem to be everywhere while you're invisible.",
    solution: "I develop a strategy that focuses on where your ideal customers actually are. No wasted budget on channels that don't work for your business.",
    includes: [
      "Target audience research",
      "Competitor analysis",
      "Channel strategy and prioritisation",
      "Content strategy",
      "Campaign planning",
      "Performance tracking setup",
    ],
  },
  {
    id: "website-development",
    title: "Website Design & Development",
    outcome: "A website that actually generates leads",
    problem: "Your website looks outdated. It doesn't work on mobile. Visitors come but never get in touch. You can't update it yourself without breaking something.",
    solution: "I build fast, accessible websites designed to convert visitors into customers. Easy to update, optimised for search engines, and built to grow with your business.",
    includes: [
      "Custom design tailored to your brand",
      "Mobile-first responsive development",
      "SEO foundation built in",
      "Contact forms and lead capture",
      "Content management training",
      "Ongoing maintenance options",
    ],
  },
  {
    id: "crm-operations",
    title: "CRM & Operations",
    outcome: "Stop things falling through the cracks",
    problem: "You're tracking customers in spreadsheets. Follow-ups get forgotten. You don't know where leads are in your pipeline. Important tasks slip through because there's no system.",
    solution: "I set up a CRM that actually fits how you work. Every lead tracked, every follow-up scheduled, every customer relationship managed properly.",
    includes: [
      "CRM selection and setup",
      "Pipeline and workflow design",
      "Automation of repetitive tasks",
      "Email integration",
      "Reporting dashboards",
      "Team training",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    outcome: "Free up your time for actual work",
    problem: "You're spending hours on repetitive tasks. You know there must be a better way but don't know where to start with AI. You're worried about getting left behind.",
    solution: "I implement practical AI tools that actually save you time. No hype, no jargon — just automation that works for your specific business.",
    includes: [
      "AI opportunity assessment",
      "Custom automation development",
      "AI-powered content tools",
      "Chatbot and customer service AI",
      "Process automation",
      "Training and documentation",
    ],
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    outcome: "Show up where your customers are looking",
    problem: "Your website doesn't appear on Google. You're paying for ads but not sure if they're working. Competitors rank higher even though you've been around longer.",
    solution: "I improve your visibility on search engines and run targeted campaigns that bring in customers who are actively looking for what you offer.",
    includes: [
      "SEO audit and strategy",
      "On-page optimisation",
      "Content creation and optimisation",
      "Google Ads management",
      "Social media advertising",
      "Monthly reporting and analysis",
    ],
  },
];

const faqs = [
  {
    question: "What does digital transformation actually mean?",
    answer: "It means getting your marketing, operations, and tech working as one connected system instead of a mess of disconnected tools. Most small businesses have separate email, CRM, accounting, and marketing platforms that don't talk to each other. I integrate them so nothing falls through the cracks.",
  },
  {
    question: "How much does this cost?",
    answer: "It depends on scope. Smaller projects like marketing strategy or CRM setup start around a few thousand pounds. Bigger transformations covering multiple systems run higher, but I'm always upfront about costs and I work within your budget. No hidden fees, no inflated software licences.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Most projects take 3-6 months from discovery to launch. Quick wins like email automation or a basic CRM setup can happen in weeks. Full system overhauls take longer. I prioritise getting you value quickly while building the long-term system.",
  },
  {
    question: "Do you work with charities and social enterprises?",
    answer: "Absolutely — they're some of my favourite clients. Charities often have the tightest budgets and smallest teams, which means the systems I build have to work harder. I offer flexible pricing for registered charities and social enterprises.",
  },
  {
    question: "What makes you different from other consultants?",
    answer: "Two things. First, I don't just do marketing or just do operations — I connect both into one system. Most consultants pick a lane; I build the whole road. Second, I actually stay involved until it works. No hand-off-and-disappear.",
  },
  {
    question: "Can you help with AI and automation?",
    answer: "Yes — it's one of my core strengths. I help with AI content workflows, customer service automation, data analysis, and operational automation. The goal isn't replacing people — it's freeing you up to do the work that actually matters.",
  },
];

const serviceSchemas = services.map((service) => ({
  "@type": "Service",
  "@id": `https://smallgiantsstudio.co.uk/services#${service.id}`,
  name: service.title,
  description: service.solution,
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://smallgiantsstudio.co.uk",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
}));

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            ...serviceSchemas,
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              What I can help with
            </h1>
            <p className="mt-6 text-xl text-primary-100">
              I don&apos;t build until I understand your business. Strategy first. Tools chosen
              for how you work, not what&apos;s popular.
            </p>
            <p className="mt-4 text-primary-200">
              Every engagement starts with understanding where you are, where you want to be, and
              what&apos;s blocking your growth. And I&apos;m resourceful with your budget — if
              expensive software isn&apos;t realistic right now, I build smart with affordable
              tools and automation that punches well above its weight.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="grid gap-12 lg:grid-cols-2 lg:items-start"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent-500">
                    {service.outcome}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
                    {service.title}
                  </h2>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="font-semibold text-text-primary">The problem</h3>
                      <p className="mt-2 text-text-secondary">{service.problem}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-text-primary">How I help</h3>
                      <p className="mt-2 text-text-secondary">{service.solution}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button href="/contact">Let&apos;s discuss your {service.title.toLowerCase()}</Button>
                  </div>
                </div>

                {/* What's included */}
                <div
                  className={`rounded-xl border border-border bg-background p-6 sm:p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-text-primary">What&apos;s included</h3>
                  <ul className="mt-4 space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-primary-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">How I work</h2>
          <div className="mt-8 space-y-6 text-lg text-text-secondary">
            <p>
              I&apos;m not a vendor who builds what you ask for and disappears. I&apos;m a partner
              who helps you figure out what you actually need. There&apos;s a difference (and if
              you&apos;ve been burned by consultants before, you know exactly what I mean).
            </p>
            <p>
              Every engagement starts with understanding your business, your customers, and your
              goals. Then we build the right solution — not the most expensive one, not the
              trendiest one, the right one. You pay for expertise, not inflated software licences.
            </p>
            <p>
              I stay involved until it works. If something needs adjusting, we adjust it. If you
              need training, I train you. The goal is a system that serves your business for
              years, not a project that gets delivered and forgotten.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-16 sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-2xl font-bold text-text-primary sm:text-3xl">
            Questions I get asked a lot
          </h2>
          <div className="mt-8 divide-y divide-border">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-text-primary hover:text-primary-700">
                  {faq.question}
                  <svg
                    className="ml-4 h-5 w-5 shrink-0 text-text-muted transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-4 text-text-secondary">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-500 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Let&apos;s have a chat about your business. No hard sell — just an honest conversation
            about what&apos;s holding you back and whether I can help.
          </p>
          <div className="mt-8">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-accent-600 hover:bg-white/90"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
