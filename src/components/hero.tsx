"use client";

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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Header */}
      <header className="container flex items-center justify-between gap-10 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo_counity.png" alt="Co/Unity" width={100} height={100} />
        </Link>

        {/* Hambuger menu */}
        {/* <MobileNavbar>
          <div className="container py-4 text-primary">
            <nav className="flex flex-col gap-1 pt-2">
              <MobileNavItem label="About" href="/about" />
              <MobileNavItem label="Testimonials" href="/testimonials" />
              <Button asChild size="lg" className="mx-auto mt-2 w-1/2">
                <Link
                  href="https://widgetbot.typeform.com/to/Ln7zWPud?typeform-source=counityxyz"
                  className="cursor-pointer"
                >
                  Let&apos;s Jam
                </Link>
              </Button>
            </nav>
          </div>
        </MobileNavbar> */}
      </header>

      <div className="relative">
        <section className="container flex flex-col items-start gap-5 pb-28 pt-20 sm:gap-10">
          <h1 className="max-w-2xl text-left font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Communities That Stick.
            <br />
            Growth That Scales.
          </h1>
          <p className="max-w-xl text-left text-sm text-primary sm:text-sm">
            Building authentic, engaged, and thriving online communities through data-driven
            strategies and innovative approaches.
          </p>
          <div className="flex gap-3">
            <Button size="lg" variant="default" asChild className="cursor-pointer border-border">
              <Link href="https://widgetbot.typeform.com/to/Ln7zWPud?typeform-source=counityxyz">
                Let&apos;s Jam
              </Link>
            </Button>
          </div>
        </section>

        {/* TRUSTED BY */}
        <div className="w-full py-12">
          <h2 className="container mb-4 text-sm">Trusted by:</h2>
          <HeroTrustedLogos />
        </div>

        <section className="container flex flex-col items-start gap-6 pb-24 pt-12 sm:gap-7">
          <div className="flex flex-col gap-3">
            <h2 className="text-balance text-left font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Where strategy meets innovation
            </h2>
          </div>
          <p className="max-w-lg text-left text-sm text-primary">
            Co/Unity helps Web3 communities thrive by aligning strategy, design, and tech to build
            purpose driven ecosystems. We don&apos;t just support growth, we become part of your
            team.
          </p>

          <div className="mt-6 grid grid-cols-1 justify-items-center gap-7 self-center sm:grid-cols-2 lg:grid-cols-4">
            <GlassCard
              iconSize="w-10 h-10"
              icon="co_1.png"
              text="End-to-End community strategy for visionary brands."
            />
            <GlassCard
              iconSize="w-16 h-16"
              icon="co_2.png"
              text="Cutting-edge tools and insights that drive meaningful connections."
            />
            <GlassCard
              iconSize="w-16 h-16"
              icon="co_3.png"
              text="Effective community roadmaps tailored to your goals."
            />
            <GlassCard
              iconSize="w-16 h-16"
              icon="co_4.png"
              text="Systems that unlock the power of GTC (Go-To-Community) Strategy."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
