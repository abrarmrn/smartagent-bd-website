"use client";

import { Reveal } from "@/lib/motion";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="chip">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display mt-5 text-[2rem] font-bold leading-[1.1] tracking-tight text-fg md:text-[2.8rem]">
          {title} {accent && <span className="text-neon">{accent}</span>}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
