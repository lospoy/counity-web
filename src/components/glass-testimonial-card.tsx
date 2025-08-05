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
    <div className="flex flex-col items-left max-w-md">
      {/* Glass Container - Rectangular with proper Tailwind liquid glass effect */}
      <div className="glass-card relative w-full min-h-48 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden isolate p-6">
        {/* Inner glow layer */}
        <div className="absolute inset-0 rounded-3xl shadow-inner" />
        
        {/* Glass shine highlights */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent to-transparent" />
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with profile, name/position, and company logo */}
          <div className="flex items-center justify-between mb-4">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={profilePicture.startsWith('/') ? profilePicture : `/images/${profilePicture}`}
                alt={`${name} profile`}
                className="w-12 h-12 rounded-full object-cover border-2 border-white/30 shadow-lg"
              />
            </div>
            
            {/* Name and Position */}
            <div className="flex-1 mx-4 text-center">
              <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                {name}
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                {position}
              </p>
            </div>
            
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <img
                src={companyLogo.startsWith('/') ? companyLogo : `/images/${companyLogo}`}
                alt="Company logo"
                className="w-10 h-10 object-contain drop-shadow-md"
              />
            </div>
          </div>
          
          {/* Testimonial Text */}
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed font-medium">
              "{testimonial}"
            </p>
          </div>
        </div>
        
        {/* Additional glass reflection on top edge */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl" />
      </div>
      
      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(12px) saturate(150%);
          -webkit-backdrop-filter: blur(12px) saturate(150%);
          background: rgba(255, 255, 255, 0.1);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(255, 255, 255, 0.2);
          will-change: backdrop-filter;
          transform: translateZ(0);
        }
        .glass-card:hover {
          backdrop-filter: blur(16px) saturate(160%);
          -webkit-backdrop-filter: blur(16px) saturate(160%);
          background: rgba(255, 255, 255, 0.15);
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default GlassTestimonials;