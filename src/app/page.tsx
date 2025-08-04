import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Testimonials } from "@/components/testimonials";
import { Testimonials2 } from "@/components/testimonials-2";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Testimonials2 />
      <CtaSection />
      <Footer />
    </>
  );
}
