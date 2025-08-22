import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function CtaSection() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .gradient-border {
        background: transparent;
        position: relative;
        z-index: 0;
      }
      .gradient-border::before {
        content: '';
        position: absolute;
        z-index: -1;
        inset: 0;
        padding: 2px;
        border-radius: 9999px;
        background: linear-gradient(90deg, #f59e0b, #ec4899, #8b5cf6);
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
      }
      .gradient-border:hover::before {
        background: linear-gradient(90deg, #f59e0b, #ec4899, #8b5cf6);
        animation: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      <section className="relative overflow-hidden bg-black py-28 text-gray-100 md:py-36">
        {/* Removed image background */}

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Ready to build something{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                extraordinary
              </span>{" "}
              together?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Join thousands of creators and innovators in the Co/Unity ecosystem
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="ghost"
                className="gradient-border group relative rounded-full !bg-transparent px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-black"
                asChild
              >
                <Link
                  href="https://widgetbot.typeform.com/to/Ln7zWPud?typeform-source=counityxyz"
                  className="relative z-10"
                >
                  <span className="relative z-10">Co/nnect</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="container flex items-center justify-between gap-6 py-10">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo_counity.png"
            alt="Counity"
            width={100}
            height={24}
            className="h-4 w-auto"
          />
        </div>
        <div className="flex items-center">
          <a
            href="https://x.com/counity_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
              <path
                fill="white"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}
