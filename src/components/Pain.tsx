"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, PAINS } from "@/lib/content";
import { PAIN_ICONS } from "./Icons";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";

export function Pain() {
  const { lang } = useLang();
  const t = T[lang].pain;

  return (
    <section id="problem" className="relative py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAINS.map((p) => {
            const d = p[lang];
            const Icon = PAIN_ICONS[p.icon as keyof typeof PAIN_ICONS];
            return (
              <RevealItem key={p.en.title}>
                <div className="group h-full rounded-2xl border border-rose-500/15 bg-rose-500/[0.04] p-6 transition hover:-translate-y-1 hover:border-rose-500/30">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-500/12 text-rose-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-fg">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
