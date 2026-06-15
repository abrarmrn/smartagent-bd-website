"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, PILLARS } from "@/lib/content";
import { PILLAR_ICONS } from "./Icons";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";

export function Solution() {
  const { lang } = useLang();
  const t = T[lang].solution;

  return (
    <section className="relative overflow-hidden border-y border-line/50 bg-bg-2 py-24 md:py-28">
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p) => {
            const d = p[lang];
            const Icon = PILLAR_ICONS[p.icon as keyof typeof PILLAR_ICONS];
            return (
              <RevealItem key={p.en.title}>
                <div className="glow-card group h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/[0.08] text-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display mt-6 text-xl font-semibold text-fg">{d.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{d.body}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
