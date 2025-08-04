import React from 'react';

const GlassCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex flex-col items-left">
      {/* Glass Container - Doubled size with proper Tailwind liquid glass effect */}
      <div className="glass-card relative w-40 h-40 rounded-3xl  backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden isolate">
        
        {/* Inner glow layer */}
        <div className="absolute inset-0 rounded-3xl shadow-inner " />
        
        {/* Glass shine highlights */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent to-transparent" />
        
        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <img 
            src={icon.startsWith('/') ? icon : `/images/${icon}`} 
            alt="Icon" 
            className="w-16 h-16 object-contain drop-shadow-lg"
          />
        </div>
        
        {/* Additional glass reflection on top edge */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl" />
      </div>
      
      {/* Text */}
      <p className="mt-6 text-sm text-primary text-left max-w-xs font-medium leading-relaxed">
        {text}
      </p>
      
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

export default GlassCard;