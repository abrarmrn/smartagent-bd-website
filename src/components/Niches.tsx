"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, NICHES } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";

export function Niches() {
  const { lang } = useLang();
  const t = T[lang].niches;

  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NICHES.map((n) => {
            const d = n[lang];
            return (
              <RevealItem key={n.en.name}>
                <div className="glow-card group h-full p-5">
                  {/* mini header */}
                  <div className="flex items-center gap-2.5 border-b border-line pb-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-xl ring-1"
                      style={{ background: `${n.accent}1a`, borderColor: `${n.accent}33` }}
                    >
                      {n.emoji}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-fg">{d.name}</p>
                      <p className="flex items-center gap-1.5 text-[0.66rem] text-lime">
                        <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-glow" />
                        SmartAgent BD
                      </p>
                    </div>
                  </div>

                  {/* mini conversation */}
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-br from-cyan to-purple px-3 py-1.5 text-[0.8rem] font-medium text-bg">
                        {d.q}
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-line bg-surface-2 px-3 py-1.5 text-[0.8rem] text-fg/90">
                        {d.a}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
