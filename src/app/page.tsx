'use client'

import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CtaSection />
    </>
  );
}
