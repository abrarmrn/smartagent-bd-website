"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, CASE_STUDIES } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";

export function CaseStudies() {
  const { lang } = useLang();
  const t = T[lang].cases;

  return (
    <section id="case-studies" className="relative overflow-x-clip py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-purple/[0.06] blur-[130px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <RevealGroup className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((c) => {
            const d = c[lang];
            return (
              <RevealItem key={c.id} className="h-full">
                <article className="glow-card flex h-full flex-col p-7">
                  <span className="inline-flex items-center gap-2 self-start rounded-full border border-lime/30 bg-lime/[0.07] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-lime-soft">
                    {d.tag}
                  </span>

                  <h3 className="font-display mt-5 text-2xl font-bold text-fg">{d.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{d.desc}</p>

                  <div className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6">
                    {d.metrics.map((m) => (
                      <div key={m.l}>
                        <p className="font-display text-3xl font-bold text-lime md:text-[2rem]">{m.v}</p>
                        <p className="mt-1 text-xs leading-snug text-muted">{m.l}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
