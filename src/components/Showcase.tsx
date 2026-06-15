"use client";

import { useLang } from "@/lib/LanguageContext";
import { T } from "@/lib/content";
import { ChatSim } from "./ChatSim";
import { Eyebrow } from "./Heading";
import { Reveal } from "@/lib/motion";
import { IconArrow } from "./Icons";

export function Showcase() {
  const { lang } = useLang();
  const t = T[lang].showcase;

  return (
    <section id="demo" className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute right-[-6rem] top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-6rem] bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-purple/10 blur-[130px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.82fr]">
        <div>
          <Reveal><Eyebrow>{t.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-[2rem] font-bold leading-tight tracking-tight text-fg md:text-[2.8rem]">
              {t.title} <span className="text-neon">{t.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.sub}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              {t.metrics.map((m) => (
                <div key={m.l} className="glass min-w-[7rem] flex-1 rounded-2xl px-5 py-4 text-center">
                  <p className="font-display text-2xl font-bold text-neon md:text-3xl">{m.v}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">{m.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <a href="#contact" className="btn-neon group mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-bold">
              {t.cta}
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto w-full max-w-sm">
          <div className="animate-float">
            <ChatSim />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
