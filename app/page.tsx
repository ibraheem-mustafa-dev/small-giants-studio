import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { MidCTA } from "@/components/sections/MidCTA";
import { USPs } from "@/components/sections/USPs";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FishTank = dynamic(
  () =>
    import("@/components/sections/FishTank").then((mod) => mod.FishTank),
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then(
      (mod) => mod.Testimonials,
    ),
);
export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Problem />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <FishTank />
      </ScrollReveal>
      <ScrollReveal direction="fade">
        <MidCTA />
      </ScrollReveal>
      <ScrollReveal>
        <USPs />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal direction="fade">
        <CTA />
      </ScrollReveal>
    </>
  );
}
