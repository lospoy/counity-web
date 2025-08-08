import React from 'react';

interface GlassTestimonialsProps {
  profilePicture: string;
  name: string;
  position: string;
  companyLogo: string;
  testimonial: string;
}

const GlassTestimonials = ({
  profilePicture,
  name,
  position,
  companyLogo,
  testimonial
}: GlassTestimonialsProps) => {
  return (
    <div className="flex w-full max-w-xl flex-col items-start">
      {/* Glass Container  */}
      <div className="glass-card relative isolate min-h-64 w-full cursor-pointer overflow-hidden rounded-3xl border border-white/20 p-8 shadow-2xl backdrop-blur-md transition-all duration-300">
        {/* Inner glow layer */}
        <div className="border-1 absolute inset-0 rounded-3xl border-white/90 shadow-inner" />
        
        {/* Content container */}
        <div className="relative z-10 flex h-full flex-col ">
          {/* Header with profile, name/position, and company logo */}
          <div className="mb-6 flex items-center justify-between">
            {/* Profile Picture */}
            <div className="shrink-0">
              <img
                src={profilePicture.startsWith('/') ? profilePicture : `/images/${profilePicture}`}
                alt={`${name} profile`}
                className="size-14 rounded-full border-2 border-white/90 object-cover shadow-lg"
              />
            </div>
            
            {/* Name and Position */}
            <div className="mx-6 flex-1 text-left">
              <h3 className="text-base font-semibold leading-tight text-primary">
                {name}
              </h3>
              <p className="mt-1 text-sm text-primary opacity-80">
                {position}
              </p>
            </div>
            
            {/* Company Logo */}
            <div className="shrink-0">
              <img
                src={companyLogo.startsWith('/') ? companyLogo : `/images/hero-trusted-logos/${companyLogo}`}
                alt="Company logo"
                className="size-24 object-contain drop-shadow-md"
              />
            </div>
          </div>
          
          {/* Testimonial Text */}
          <div className="flex-1">
            <p className="text-left text-base leading-relaxed text-primary">
            &ldquo;{testimonial}&rdquo;
            </p>
          </div>
        </div>
        
        {/* Additional glass reflection on top edge */}
        <div className="absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default GlassTestimonials;