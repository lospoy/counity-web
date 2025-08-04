import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { Code2 } from "lucide-react";
import { Lock } from "lucide-react";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialProofLogo } from "@/components/social-proof-logo";
import { NavItem } from "@/components/nav-item";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative">

      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ 
          backgroundImage: "url('/images/hero_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <header className="container flex items-center justify-between gap-10 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo_counity.png" alt="Reweb" width={100} height={100} />
        </Link>
      <div className="flex items-center gap-10">
        <nav className="hidden items-center gap-10 md:flex justify-end">
          <NavItem label="About" href="/about" />
          <NavItem label="Testimonials" href="/testimonials" />
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" variant="outline">
            <Link href="#" className="cursor-pointer">
              Let's Jam
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem label="About" href="/about" />
            <MobileNavItem label="Testimonials" href="/testimonials" />
            <Button asChild size="lg" className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Let's Jam
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
      <div className="relative">
        <section className="container flex flex-col items-left gap-8 pb-28 pt-20 sm:gap-10">
          <h1 className="max-w-2xl text-left font-heading text-4xl font-semibold sm:text-5xl tracking-tight">
            Communities That Stick.<br />Growth That Scales.
          </h1>
          <p className="max-w-xl text-left text-sm text-muted-foreground sm:text-sm">
          Building authentic, engaged, and thriving online communities through data-driven strategies and innovative approaches.
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-sm">
            <Button size="lg" variant="default" asChild className="cursor-pointer border-border">
              <Link href="#">Let's Connect</Link>
            </Button>
          </div>
          <section className="flex flex-col items-left gap-2 py-12">
            <h2 className="text-sm">
              We are trusted by:
            </h2>
            <div className="flex w-full gap-8 sm:gap-12 lg:gap-16">
              <SocialProofLogo image="/images/microsoft.webp" className="h-6 w-16" />
              <SocialProofLogo image="/images/google.png" className="h-6 w-16" />
              <SocialProofLogo image="/images/amazon.png" className="h-6 w-16" />
              <SocialProofLogo image="/images/netflix.png" className="h-6 w-16" />
              <SocialProofLogo image="/images/facebook.png" className="h-6 w-16" />
            </div>
          </section>
          <div className="relative sm:mt-8">
            <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
          </div>
        </section>
        
        <section className="container flex flex-col items-left gap-6 sm:gap-7">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Where strategy meets innovation&nbsp;
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-xl text-left">
        Co/Unity helps Web3 communities thrive by aligning strategy, design, and tech to build purpose driven ecosystems. We don't just support growth, we become part of your team.
        </p>
 
        <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="flex flex-col items-center rounded-xl border p-6 text-left mb-2">
          <Rocket className="h-10 w-10 text-primary" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-left">
          End-to-end community design and management for forward thinking brands.
        </p>
      </div>
      
      <div>
        <div className="flex flex-col items-center rounded-xl border p-6 text-left mb-2">
          <Code2 className="h-10 w-10 text-primary" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-left">
          Cutting-edge tools and insights that drive meaningful, long-term connections.
        </p>
      </div>
      
      <div>
        <div className="flex flex-col items-center rounded-xl border p-6 text-left mb-2">
          <Lock className="h-10 w-10 text-primary" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-left">
          Tailored community roadmaps that blend strategy, innovation, and growth.
        </p>
      </div>
      
      <div>
        <div className="flex flex-col items-center rounded-xl border p-6 text-left mb-2">
          <Layers className="h-10 w-10 text-primary" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-left">
          Systems that unlock the power of GTC (Go-To-Community) Strategy.
        </p>
      </div>
    </div>
      </section>
      </div>
    </div>
  );
}
