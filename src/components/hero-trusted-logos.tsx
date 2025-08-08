import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroTrustedLogoProps {
  className?: string;
}

export function HeroTrustedLogos({ className }: HeroTrustedLogoProps) {
  const logos = [
    { file: 'logo_Eigen.png', height: 40, offsetY: 0 },
    { file: 'logo_Gaia.png', height: 38, offsetY: 6 },
    { file: 'logo_Gas.png', height: 36, offsetY: 1 },
    { file: 'logo_Gensyn.png', height: 44, offsetY: -2 },
    { file: 'logo_Mother.png', height: 30, offsetY: 0 },
    { file: 'logo_Pokt.png', height: 38, offsetY: 1 },
    { file: 'logo_Ritual.png', height: 46, offsetY: -3 },
    { file: 'logo_Cookie3.png', height: 40, offsetY: 0 }
  ];

  // Repeat logos multiple times for seamless scrolling
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <>
      <style jsx global>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infiniteScroll 40s linear infinite;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className={cn("relative w-screen -ml-[50vw] left-1/2 overflow-hidden", className)}>
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />
        
        {/* Logo carousel container */}
        <div className="flex items-center py-4">
          <div 
            className="flex animate-infinite-scroll"
            style={{ width: 'max-content' }}
          >
            {/* First set of logos */}
            {repeatedLogos.map((logo, index) => (
              <div
                key={`set1-${index}`}
                className="mx-8 sm:mx-10 md:mx-12 lg:mx-16 flex-shrink-0 flex items-center justify-center"
                style={{
                  height: '50px',
                }}
              >
                <Image
                  src={`/images/hero-trusted-logos/${logo.file}`}
                  alt={logo.file.replace(/\.(png|svg|jpg|jpeg)$/i, '')}
                  width={96}
                  height={logo.height}
                  style={{ 
                    height: `${logo.height}px`,
                    width: 'auto',
                    transform: `translateY(${logo.offsetY}px)`
                  }}
                  className="object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
            
            {/* Second set for seamless loop */}
            {repeatedLogos.map((logo, index) => (
              <div
                key={`set2-${index}`}
                className="mx-8 sm:mx-10 md:mx-12 lg:mx-16 flex-shrink-0 flex items-center justify-center"
                style={{
                  height: '50px',
                }}
              >
                <Image
                  src={`/images/hero-trusted-logos/${logo.file}`}
                  alt={logo.file.replace(/\.(png|svg|jpg|jpeg)$/i, '')}
                  width={96}
                  height={logo.height}
                  style={{ 
                    height: `${logo.height}px`,
                    width: 'auto',
                    transform: `translateY(${logo.offsetY}px)`
                  }}
                  className="object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}