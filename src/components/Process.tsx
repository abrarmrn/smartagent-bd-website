"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, PROCESS } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";

export function Process() {
  const { lang } = useLang();
  const t = T[lang].process;

  return (
    <section className="relative border-y border-line/50 bg-bg-2 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block" />
          <RevealGroup className="grid gap-10 lg:grid-cols-3">
            {PROCESS.map((p) => (
              <RevealItem key={p.no}>
                <div className="relative text-center lg:text-left">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan/25 bg-surface font-display text-lg font-bold text-neon lg:mx-0">
                    {p.no}
                  </div>
                  <h3 className="font-display mt-6 text-xl font-semibold text-fg">{p[lang].title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{p[lang].body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
