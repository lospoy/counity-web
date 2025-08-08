'use client'
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import GlassTestimonials from "@/components/glass-testimonial-card";

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const testimonials = [
    {
      profilePicture: "/images/testimonial_mikyo.jpg",
      name: "Mikyo Clark",
      position: "Head of Community, EigenLayer",
      companyLogo: "/images/hero-trusted-logos/logo_Eigen.png",
      testimonial: "[Co/Unity's] ability to transform insights into actionable strategies elevated our community from a support-focused space to one of genuine participation and growth."
    },
    {
      profilePicture: "/images/testimonial_maya.png",
      name: "Maya R.",
      position: "Head of Marketing, Seed-stage AI Startup",
      companyLogo: "/images/hero-trusted-logos/logo_Gaia.png",
      testimonial: "They helped us go from shouting into the void to building a real, engaged community. The strategy was sharp, but more importantly, it actually felt like us — just way more focused."
    },
    {
      profilePicture: "/images/testimonial_jason.jpg",
      name: "Jason T.",
      position: "COO, Web3 Gaming Platform",
      companyLogo: "/images/hero-trusted-logos/logo_Ritual.png",
      testimonial: "Before working with them, our community felt like a side project. Now it's a core part of our growth engine. Their approach brought structure, energy, and a sense of direction we didn't even know we needed."
    },
    {
      profilePicture: "/images/testimonial_elena.jpg",
      name: "Elena M.",
      position: "Community Lead, Consumer App",
      companyLogo: "/images/hero-trusted-logos/logo_Gensyn.png",
      testimonial: "What impressed me most wasn't just their frameworks — it was how quickly they embedded into our world. They helped us define success, track it meaningfully, and actually build something people want to be part of."
    },
    {
      profilePicture: "/images/testimonial_ben.jpg",
      name: "Ben L.",
      position: "Founder, Creator Economy SaaS",
      companyLogo: "/images/hero-trusted-logos/logo_Pokt.png",
      testimonial: "These folks don't do cookie-cutter. They came in, listened deeply, and co-created a strategy that worked with our weirdness, not against it. Real insights, no buzzwords, and actual follow-through."
    }
  ];

  const handleCardClick = (index: number) => {
    if (index === current - 1) {
      // Clicked on left card - go to previous
      api?.scrollPrev();
    } else if (index === current + 1) {
      // Clicked on right card - go to next
      api?.scrollNext();
    }
  };

  return (
    <section className="relative flex flex-col overflow-hidden py-32">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/testimonials_bg.jpg")',
          opacity: 0.7
        }}
      />
      <div className="relative z-10 flex w-full flex-col gap-6 sm:gap-7">
        <div className="container flex flex-col gap-3 px-4 text-left">
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-primary">
            See what our clients say about our community-building expertise
          </p>
        </div>
        <div className="mt-6 w-full">
          <Carousel 
            setApi={setApi}
            opts={{ loop: true, align: "center" }} 
            className="w-full"
          >
            <CarouselContent className="-ml-1 py-3 pb-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="basis-3/5 pl-1 md:basis-[50%] lg:basis-2/5"
                >
                  <div
                    className={cn(
                      "flex justify-center transition-all duration-500",
                      {
                        "scale-75 opacity-70": index !== current,
                        "scale-100 opacity-100": index === current,
                      }
                    )}
                    onClick={() => handleCardClick(index)}
                    style={{ 
                      cursor: index !== current ? 'pointer' : 'default' 
                    }}
                  >
                    <GlassTestimonials
                      profilePicture={testimonial.profilePicture}
                      name={testimonial.name}
                      position={testimonial.position}
                      companyLogo={testimonial.companyLogo}
                      testimonial={testimonial.testimonial}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "size-3 rounded-full border-2 transition-all duration-200 hover:scale-110",
                  {
                    "bg-primary border-primary": current === index,
                    "bg-transparent border-primary/40 hover:border-primary/60": current !== index,
                  }
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}