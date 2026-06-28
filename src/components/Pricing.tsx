"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, PRICING } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";
import { IconCheck, IconArrow } from "./Icons";

export function Pricing() {
  const { lang } = useLang();
  const t = T[lang].pricing;

  return (
    <section id="pricing" className="relative overflow-x-clip py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-lime/[0.06] blur-[130px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <RevealGroup className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => {
            const d = tier[lang];
            const hot = tier.highlight;
            return (
              <RevealItem key={tier.id} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition duration-500 ${
                    hot
                      ? "border-2 border-lime/60 bg-surface/80 shadow-[0_40px_90px_-40px_rgba(174,248,62,0.55)] lg:-mt-4 lg:mb-4"
                      : "border border-line bg-surface/40 hover:border-line-2"
                  }`}
                >
                  {hot && (
                    <span className="btn-lime absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide">
                      {t.popular}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-fg">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{d.tagline}</p>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span className={`font-display text-4xl font-bold ${hot ? "text-lime" : "text-fg"}`}>{tier.monthly}</span>
                    <span className="mb-1.5 text-sm text-muted">{t.monthlyLabel}</span>
                  </div>

                  <div className="my-6 h-px bg-line" />

                  {d.includes && (
                    <p className="mb-4 inline-flex items-center gap-1.5 rounded-lg bg-lime/[0.08] px-2.5 py-1.5 text-xs font-semibold text-lime-soft">
                      <span className="text-lime">✦</span> {d.includes}
                    </p>
                  )}
                  <ul className="flex-1 space-y-3">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold transition ${
                      hot ? "btn-lime" : "btn-ghost"
                    }`}
                  >
                    {d.cta}
                    <IconArrow className="h-4 w-4" />
                  </a>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
