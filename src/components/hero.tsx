"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroTrustedLogos } from "@/components/hero-trusted-logos";
import { NavItem } from "@/components/nav-item";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";
import Image from "next/image";
import GlassCard from "./glass-hero-card";

export function Hero() {
  return (
    <div className="relative overflow-x-hidden">

      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ 
          backgroundImage: "url('/images/hero_bg.jpg')",
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
              Let&apos;s Jam
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-primary shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem label="About" href="/about" />
            <MobileNavItem label="Testimonials" href="/testimonials" />
            <Button asChild size="lg" className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Let&apos;s Jam
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
      <div className="relative">
        <section className="container flex flex-col items-left gap-5 pb-28 pt-20 sm:gap-10">
          <h1 className="max-w-2xl text-left font-heading text-4xl font-semibold sm:text-5xl tracking-tight">
            Communities That Stick.<br />Growth That Scales.
          </h1>
          <p className="max-w-xl text-left text-sm text-primary sm:text-sm">
          Building authentic, engaged, and thriving online communities through data-driven strategies and innovative approaches.
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-xs">
            <Button size="lg" variant="default" asChild className="cursor-pointer border-border">
              <Link href="#">Let&apos;s Jam</Link>
            </Button>
          </div>
        </section>
        
        {/* Full-width trusted logos section */}
        <div className="w-full py-12">
          <h2 className="text-sm mb-4 container">
            We are trusted by:
          </h2>
          <HeroTrustedLogos />
        </div>
        
        <section className="container flex flex-col items-left gap-6 sm:gap-7 pb-24 pt-12">
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Where strategy meets innovation
          </h2>
        </div>
        <p className="text-sm text-primary max-w-lg text-left">
        Co/Unity helps Web3 communities thrive by aligning strategy, design, and tech to build purpose driven ecosystems. We don&apos;t just support growth, we become part of your team.
        </p>
 
        <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <GlassCard iconSize="w-10 h-10" icon="co_1.png" text="End-to-End community strategy for visionary brands." />
          <GlassCard iconSize="w-16 h-16" icon="co_2.png" text="Cutting-edge tools and insights that drive meaningful connections." />
          <GlassCard iconSize="w-16 h-16" icon="co_3.png" text="Effective community roadmaps tailored to your goals." />
          <GlassCard iconSize="w-16 h-16" icon="co_4.png" text="Systems that unlock the power of GTC (Go-To-Community) Strategy." />
    </div>
      </section>
      </div>
    </div>
  );
}