import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Bot } from "lucide-react";

import { FeatureCard2 } from "@/components/feature-card2";

export function Features() {
  return (
    <section className="flex flex-col items-left gap-6 py-32 sm:gap-7 bg-primary">
      <div className="container">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl text-secondary font-semibold tracking-tight sm:text-4xl text-balance text-left">
          From Chaos to Community
        </h2>
        <p className="text-lg text-secondary text-balance max-w-xl text-left">
        Common growth blockers we remove:
      </p>
      </div>

      <div className="mt-14 grid auto-rows-fr grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard2
          title="Members Feeling Lost?"
          description="Onboarding Experiences (OX) that guide members seamlessly."
          icon="blocker_1.png"
        />
        <FeatureCard2
          title="Engagement Falling Flat?"
          description="Tailored engagement systems that actually work."
          icon="blocker_2.png"
        />
        <FeatureCard2
          title="Poor Analytics?"
          description="Insights-driven dashboards that measure what matters."
          icon="blocker_3.png"
        />
        <FeatureCard2
          title="Chaotic Discord?"
          description="Structured, safe, and visually polished communities."
          icon="blocker_4.png"
        />
        <FeatureCard2
          title="Team Gaps"
          description="We train leaders, build teams, and provide ongoing support."
          icon="blocker_5.png"
        />
        <FeatureCard2
          title="Security Concerns?"
          description="Our expert security team will implement the latest tech."
          icon="blocker_6.png"
        />
      </div>
      </div>
    </section>
  );
}
