import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { Testimonials } from "@/components/testimonials";
import { Team } from "@/components/team";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
