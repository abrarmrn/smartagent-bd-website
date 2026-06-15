"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, FEATURES } from "@/lib/content";
import { FEATURE_ICONS } from "./Icons";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";
import { SpotlightCard } from "@/lib/interactions";

export function Features() {
  const { lang } = useLang();
  const t = T[lang].features;

  return (
    <section id="features" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const d = f[lang];
            const Icon = FEATURE_ICONS[f.icon as keyof typeof FEATURE_ICONS];
            return (
              <RevealItem key={f.tag}>
                <SpotlightCard className="flex h-full flex-col p-7" radius={320}>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/[0.08] text-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-line-2 bg-fg/[0.03] px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-purple-soft">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-lg font-semibold leading-snug text-fg">{d.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{d.body}</p>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
