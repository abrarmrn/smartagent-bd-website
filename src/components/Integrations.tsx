"use client";

import { useLang } from "@/lib/LanguageContext";
import { T, PLATFORMS } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { RevealGroup, RevealItem } from "@/lib/motion";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  TelegramLogo,
  ShopifyLogo,
  WordpressLogo,
} from "./BrandLogos";

// platform id → brand logo + matching glow colour
const LOGOS = {
  facebook: { Comp: FacebookLogo, glow: "rgba(24,119,242,0.45)" },
  instagram: { Comp: InstagramLogo, glow: "rgba(214,41,118,0.45)" },
  whatsapp: { Comp: WhatsappLogo, glow: "rgba(37,211,102,0.45)" },
  telegram: { Comp: TelegramLogo, glow: "rgba(41,169,235,0.45)" },
  shopify: { Comp: ShopifyLogo, glow: "rgba(149,191,71,0.45)" },
  wordpress: { Comp: WordpressLogo, glow: "rgba(33,117,155,0.45)" },
} as const;

export function Integrations() {
  const { lang } = useLang();
  const t = T[lang].integrations;

  return (
    <section id="integrations" className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.06] blur-[150px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((p) => {
            const d = p[lang];
            const { Comp, glow } = LOGOS[p.id];
            return (
              <RevealItem key={p.id} className="h-full">
                <div className="glow-card flex h-full flex-col p-6">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line-2 bg-surface/90"
                      style={{ boxShadow: `0 8px 30px -10px ${glow}` }}
                    >
                      <Comp className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-fg">{d.name}</h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{d.blurb}</p>

                  <details className="group mt-auto pt-5">
                    <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-lime transition hover:text-lime-soft [&::-webkit-details-marker]:hidden">
                      {t.learnMore}
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted/90">{d.more}</p>
                  </details>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
