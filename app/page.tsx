import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { FishTank } from "@/components/sections/FishTank";
import { MidCTA } from "@/components/sections/MidCTA";
import { USPs } from "@/components/sections/USPs";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Community } from "@/components/sections/Community";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <FishTank />
      <MidCTA />
      <USPs />
      <Services />
      <Testimonials />
      <Community />
      <CTA />
    </>
  );
}
