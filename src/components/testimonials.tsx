'use client'

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import GlassTestimonials from "@/components/glass-testimonial-card";

export function Testimonials() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-32">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/testimonials_bg.jpg")',
          opacity: 0.7
        }}
      />
      <div className="container relative z-10 flex flex-col gap-6 sm:gap-7">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-primary">
            See what our clients say about our community-building expertise
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="mt-6 w-full px-4 xl:px-0">
          <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
          <CarouselContent className="pb-4">
          <GlassTestimonials
            profilePicture="/images/testimonial-1.avif"
            name="John Doe"
            position="CEO"
            companyLogo="/images/testimonial-1.avif"
            testimonial="This product transformed our business completely. The results exceeded all our expectations and the team was incredibly professional throughout the entire process."
          />
          </CarouselContent>
          <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
        </Carousel>
      </div>
    </section>
  );
}
