const GlassCard = ({
  icon,
  text,
  iconSize = "w-16 h-16",
}: {
  icon: string;
  text: string;
  iconSize?: string;
}) => {
  return (
    <div className="flex flex-row items-center lg:flex-col lg:items-start">
      {/* Glass Container */}
      <div className="glass-hero-card hover:shadow-3xl relative isolate aspect-square size-16 shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 sm:size-24 md:size-32 lg:size-40">
        {/* Inner glow layer */}
        <div className="absolute inset-0 rounded-3xl shadow-inner " />
        {/* Glass shine highlights */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent to-transparent" />
        {/* Icon container */}
        <div className="relative z-10 flex size-full items-center justify-center">
          <img
            src={icon.startsWith("/") ? icon : `/images/${icon}`}
            alt="Icon"
            className={`${iconSize} scale-[0.6] object-contain drop-shadow-lg sm:scale-90 md:scale-100`}
          />
        </div>

        {/* Additional glass reflection on top edge */}
        <div className="absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      {/* Text */}
      <p className="ml-6 min-w-0 flex-1 text-sm font-medium leading-relaxed text-primary lg:ml-0 lg:mt-6 lg:w-44 lg:flex-none">
        {text}
      </p>
    </div>
  );
};

export default GlassCard;
