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
    <div className="flex flex-col items-left w-full max-w-xl">
      {/* Glass Container  */}
      <div className="glass-card relative w-full min-h-64 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden isolate p-8">
        {/* Inner glow layer */}
        <div className="absolute inset-0 rounded-3xl shadow-inner border-1 border-white/90" />
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full ">
          {/* Header with profile, name/position, and company logo */}
          <div className="flex items-center justify-between mb-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={profilePicture.startsWith('/') ? profilePicture : `/images/${profilePicture}`}
                alt={`${name} profile`}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/90 shadow-lg"
              />
            </div>
            
            {/* Name and Position */}
            <div className="flex-1 mx-6 text-left">
              <h3 className="text-base font-semibold text-primary leading-tight">
                {name}
              </h3>
              <p className="text-sm text-primary opacity-80 mt-1">
                {position}
              </p>
            </div>
            
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <img
                src={companyLogo.startsWith('/') ? companyLogo : `/images/hero-trusted-logos/${companyLogo}`}
                alt="Company logo"
                className="w-24 h-24 object-contain drop-shadow-md"
              />
            </div>
          </div>
          
          {/* Testimonial Text */}
          <div className="flex-1">
            <p className="text-base text-primary leading-relaxed text-left">
              "{testimonial}"
            </p>
          </div>
        </div>
        
        {/* Additional glass reflection on top edge */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl" />
      </div>
    </div>
  );
};

export default GlassTestimonials;