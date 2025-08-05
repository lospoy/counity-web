import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroTrustedLogoProps {
  className?: string;
}

export function HeroTrustedLogos({ className }: HeroTrustedLogoProps) {
  const logos = [
    { file: 'logo_Eigen.png', height: 40, offsetY: 0 },
    { file: 'logo_Gaia.png', height: 32, offsetY: 6 },
    { file: 'logo_Gas.png', height: 36, offsetY: 1 },
    { file: 'logo_Gensyn.png', height: 44, offsetY: -2 },
    { file: 'logo_Mother.png', height: 42, offsetY: 0 },
    { file: 'logo_Pokt.png', height: 38, offsetY: 1 },
    { file: 'logo_Ritual.png', height: 46, offsetY: -3 },
    { file: 'logo_Cookie3.png', height: 40, offsetY: 0 }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={cn("relative bg-transparent", className)}>
      <div
        className="flex hover:pause"
        style={{
          animation: 'infiniteScroll 30s linear infinite',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="mx-12 w-24 relative flex justify-center"
            style={{ 
              height: `${logo.height}px`,
              transform: `translateY(${logo.offsetY}px)`
            }}
          >
            <Image
              src={`/images/hero-trusted-logos/${logo.file}`}
              alt={logo.file.replace(/\.(png|svg|jpg|jpeg)$/i, '')}
              width={0}
              height={logo.height}
              sizes="96px"
              style={{ width: 'auto', height: `${logo.height}px` }}
              className="object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 max-w-24"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hover\\:pause:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}