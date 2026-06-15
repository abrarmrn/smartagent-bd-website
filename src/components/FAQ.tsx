"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { T, FAQS } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { Reveal } from "@/lib/motion";

export function FAQ() {
  const { lang } = useLang();
  const t = T[lang].faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-[34rem] -translate-x-1/2 rounded-full bg-purple/8 blur-[130px]" />
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl border bg-surface/40 transition-colors ${
                    isOpen ? "border-cyan/30" : "border-line hover:border-line-2"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-fg md:text-lg">{f[lang].q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen ? "rotate-45 border-cyan/40 text-cyan" : "border-line-2 text-muted"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{f[lang].a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
