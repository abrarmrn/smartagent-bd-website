"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, PRICING } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import { IconCheck } from "./Icons";

export function Pricing() {
  const { lang } = useLang();
  const t = T[lang].pricing;

  return (
    <section id="pricing" className="relative py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-purple/8 blur-[130px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 rounded-full border border-lime/25 bg-lime/[0.06] px-5 py-2.5 text-center text-sm font-medium text-lime-soft">
            <IconCheck className="h-4 w-4 shrink-0 text-lime" />
            {t.reassure}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {PRICING.map((tier) => {
            const d = tier[lang];
            const hot = tier.highlight;
            return (
              <RevealItem key={tier.id} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition duration-500 ${
                    hot
                      ? "ring-neon bg-surface/80 shadow-[0_40px_80px_-40px_rgba(43,231,255,0.5)] lg:-mt-4 lg:mb-4"
                      : "border border-line bg-surface/40 hover:border-line-2"
                  }`}
                >
                  {hot && (
                    <span className="btn-neon absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide">
                      {t.popular}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold text-fg">{d.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{d.tagline}</p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className={`font-display text-4xl font-bold ${hot ? "text-neon" : "text-fg"}`}>{tier.monthly}</span>
                    <span className="mb-1.5 text-sm text-muted">{t.monthlyLabel}</span>
                  </div>
                  {tier.freeSetup ? (
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-lime">
                      <IconCheck className="h-3.5 w-3.5" /> {t.freeSetupLabel}
                    </p>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-lime">+ {tier.setup} {t.setupLabel}</p>
                  )}

                  <div className="my-6 h-px bg-line" />

                  <p className={`text-sm font-semibold ${hot ? "text-cyan" : "text-fg/80"}`}>{d.convos}</p>
                  {d.includes && (
                    <p className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-lime/[0.08] px-2.5 py-1.5 text-xs font-semibold text-lime-soft">
                      <span className="text-lime">✦</span> {d.includes}
                    </p>
                  )}
                  <ul className="mt-5 flex-1 space-y-3">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                        <IconCheck className={`mt-0.5 h-4 w-4 shrink-0 ${hot ? "text-lime" : "text-cyan/70"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-bold transition ${hot ? "btn-neon" : "btn-ghost"}`}>
                    {d.cta}
                  </a>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <p className="mt-9 text-center text-sm text-faint">{t.foot}</p>
      </div>
    </section>
  );
}
