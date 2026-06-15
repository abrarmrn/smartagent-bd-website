"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, STATS, TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import { Avatar } from "./Avatars";

export function Stats() {
  const { lang } = useLang();
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="ring-neon grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line/50 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.value} className="bg-surface/70 px-6 py-10 text-center">
                <p className="font-display text-3xl font-bold text-neon md:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted">{s[lang]}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { lang } = useLang();
  const t = T[lang].testimonials;
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item) => {
            const d = item[lang];
            return (
              <RevealItem key={item.id}>
                <figure className="glow-card flex h-full flex-col p-7">
                  <div className="text-cyan">
                    {"★★★★★".split("").map((s, i) => (<span key={i}>{s}</span>))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-fg/85">{d.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <Avatar variant={item.avatar} className="h-11 w-11 shrink-0 rounded-full" />
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-fg">
                        {d.name}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="#2be7ff" aria-hidden className="shrink-0">
                          <path d="M12 2l2.4 1.8 3-.3 1 2.8 2.6 1.6-.9 2.9.9 2.9-2.6 1.6-1 2.8-3-.3L12 22l-2.4-1.8-3 .3-1-2.8L3 16.1l.9-2.9L3 10.3l2.6-1.6 1-2.8 3 .3z" /><path d="M9 12l2 2 4-4" stroke="#07070f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="block text-xs text-muted">{d.role}</span>
                      <span className="mt-0.5 inline-flex items-center gap-1 text-[0.66rem] font-medium text-lime">
                        <span className="h-1 w-1 rounded-full bg-lime" /> {t.verified}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
