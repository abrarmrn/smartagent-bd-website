"use client";

import { useLang } from "@/lib/LanguageContext";
import { T } from "@/lib/content";
import { motion, Parallax } from "@/lib/interactions";
import { MouseFloaters } from "./MouseFloaters";
import { IconArrow, IconBolt, IconCheck } from "./Icons";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { lang } = useLang();
  const t = T[lang].hero;
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease, delay },
  });

  return (
    <section id="top" className="aurora-bg relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <MouseFloaters />
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10" />
      <Parallax distance={60} className="pointer-events-none absolute left-[10%] top-36 -z-10">
        <span className="block h-3 w-3 animate-float rounded-full bg-cyan shadow-[0_0_28px_8px_rgba(43,231,255,0.6)]" />
      </Parallax>
      <Parallax distance={-55} className="pointer-events-none absolute right-[13%] top-48 -z-10">
        <span className="block h-2 w-2 animate-float-slow rounded-full bg-purple shadow-[0_0_26px_8px_rgba(177,75,255,0.6)]" />
      </Parallax>
      <Parallax distance={42} className="pointer-events-none absolute right-[30%] top-28 -z-10">
        <span className="block h-1.5 w-1.5 animate-float rounded-full bg-lime shadow-[0_0_22px_7px_rgba(174,248,62,0.6)]" />
      </Parallax>

      <div className="mx-auto max-w-4xl px-5 text-center">
        <motion.div {...fade(0)}>
          <span className="chip mx-auto">
            <IconBolt className="h-3.5 w-3.5 text-cyan" />
            {t.eyebrow}
          </span>
        </motion.div>

        <h1 className="font-display mt-7 text-balance text-[2.4rem] font-bold leading-[1.05] tracking-tight md:text-[4.1rem]">
          <motion.span className="block text-fg" {...fade(0.12)}>{t.title1}</motion.span>
          <motion.span className="text-neon-anim mt-1 block text-glow-cyan" {...fade(0.24)}>{t.title2}</motion.span>
          <motion.span className="mt-1 block text-fg" {...fade(0.34)}>{t.title3}</motion.span>
        </h1>

        <motion.p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted" {...fade(0.48)}>{t.sub}</motion.p>

        {/* investment-framed price swap */}
        <motion.div className="mt-9 flex justify-center" {...fade(0.58)}>
          <div className="ring-neon rounded-2xl bg-surface/60 px-6 py-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
              <span className="text-sm text-muted">{t.swapLabel}</span>
              <span className="text-base text-muted/55 line-through decoration-purple/70 decoration-2">{t.swapOld}</span>
              <IconArrow className="h-5 w-5 text-cyan" />
              <span className="font-display text-3xl font-bold leading-none md:text-4xl">
                <span className="text-neon-anim">{t.swapNew}</span>
                <span className="ml-0.5 text-base font-medium text-muted">{t.swapMonthly}</span>
              </span>
            </div>
            <p className="mt-2.5 text-center text-xs font-medium text-lime-soft">✦ {t.swapFrame}</p>
          </div>
        </motion.div>

        <motion.div className="mt-9 flex flex-wrap items-center justify-center gap-3" {...fade(0.68)}>
          <a href="#contact" className="btn-neon group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-bold">
            {t.ctaPrimary}
            <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#demo" className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold">
            {t.ctaSecondary}
          </a>
        </motion.div>

        <motion.div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3" {...fade(0.78)}>
          {t.punch.map((p) => (
            <span key={p} className="inline-flex items-center gap-2 text-sm font-medium text-fg/80">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime/15">
                <IconCheck className="h-3 w-3 text-lime" />
              </span>
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
