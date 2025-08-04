import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Bot } from "lucide-react";

import { FeatureCard2 } from "@/components/feature-card2";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          From Chaos to Community
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        Reweb brings the best of two worlds together: the speed of development of no-code tools, and
        the flexibility of code.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard2
          title="Visual builder"
          description="Edit HTML, Tailwind &amp; React components with a visual builder and see your changes in real-time."
          icon={Frame}
        />
        <FeatureCard2
          title="Code Export"
          description="Once you're done building, export your project to a fully functional Next.js &amp; Tailwind app."
          icon={Download}
        />
        <FeatureCard2
          title="No lock-in"
          description="You own the code. Customize with full flexibility and host it anywhere you want."
          icon={Globe}
        />
        <FeatureCard2
          title="Built on modern tech"
          description="Reweb works with the most popular frontend technologies like Next.js, Tailwind CSS and shadcn/ui."
          icon={Sparkles}
        />
        <FeatureCard2
          title="Pre-made templates"
          description="Get started quickly with pre-made templates and sections to build your landing page fast."
          icon={LayoutPanelLeft}
        />
        <FeatureCard2
          title="AI Assistant"
          description="Generate and customize components and themes from a promp, image or Figma design."
          icon={Bot}
        />
      </div>
    </section>
  );
}
