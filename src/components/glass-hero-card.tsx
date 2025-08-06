const GlassCard = ({ 
  icon, 
  text, 
  iconSize = "w-16 h-16" 
}: { 
  icon: string; 
  text: string; 
  iconSize?: string;
}) => {
  return (
    <div className="flex flex-col items-left">
      {/* Glass Container */}
      <div className="glass-hero-card relative w-40 h-40 rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden isolate">
        {/* Inner glow layer */}
        <div className="absolute inset-0 rounded-3xl shadow-inner " />
        
        {/* Glass shine highlights */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent to-transparent" />
        
        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <img
            src={icon.startsWith('/') ? icon : `/images/${icon}`}
            alt="Icon"
            className={`${iconSize} object-contain drop-shadow-lg`}
          />
        </div>
        
        {/* Additional glass reflection on top edge */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl" />
      </div>
      
      {/* Text */}
      <p className="mt-6 text-sm text-primary text-left max-w-xs font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default GlassCard;