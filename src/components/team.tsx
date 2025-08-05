import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";
import { CarouselTestimonialCard } from "@/components/carousel-testimonial-card";

export function Team() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Testimonials</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Meet Out Team
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-lg text-center">
        The heart and souls behind CO/UNITY
      </p>
      <Carousel opts={{ align: "start", loop: true }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselTestimonialCard
            name="John"
            username="johndoe"
            image="/images/testimonial-1.avif"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit bibendum felis a, volutpat feugiat tellus. Aliquam erat volutpat."
          />
          <CarouselTestimonialCard
            name="Max"
            username="maxcook"
            image="/images/testimonial-2.avif"
            text="Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel."
          />
          <CarouselTestimonialCard
            name="Bob"
            username="thisisbob"
            image="/images/testimonial-3.avif"
            text="Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque."
          />
          <CarouselTestimonialCard
            name="Emily"
            username="emilysmith"
            image="/images/testimonial-4.avif"
            text="Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida."
          />
          <CarouselTestimonialCard
            name="Micheal"
            username="michael"
            image="/images/testimonial-5.avif"
            text="Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit. Curabitur tempor eget urna eget lobortis dolor varius."
          />
          <CarouselTestimonialCard
            name="Linda"
            username="thisislinda"
            image="/images/testimonial-6.avif"
            text="Nullam non lorem vitae risus volutpat dictum non sed magna. Aliquam in venenatis quam. Morbi feugiat tristique leo, vel ultrices dolor varius non. Quisque dictum tortor eu nunc."
          />
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
