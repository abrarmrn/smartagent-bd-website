"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { T, SPOTLIGHTS, type Lang } from "@/lib/content";
import { SectionHeading } from "./Heading";
import { Reveal } from "@/lib/motion";
import { MessengerLogo, InstagramLogo, WhatsappLogo, FacebookLogo } from "./BrandLogos";

const TONE: Record<string, { grad: string; glow: string; text: string }> = {
  cyan: { grad: "from-cyan/20 via-cyan/[0.04] to-transparent", glow: "rgba(43,231,255,0.30)", text: "text-cyan" },
  purple: { grad: "from-purple/20 via-purple/[0.04] to-transparent", glow: "rgba(177,75,255,0.30)", text: "text-purple-soft" },
  lime: { grad: "from-lime/16 via-lime/[0.04] to-transparent", glow: "rgba(174,248,62,0.26)", text: "text-lime" },
  pink: { grad: "from-pink-500/20 via-pink-500/[0.04] to-transparent", glow: "rgba(255,93,177,0.30)", text: "text-pink-400" },
};

export function Spotlights() {
  const { lang } = useLang();
  const t = T[lang].spotlights;

  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <div className="mt-20 space-y-20 md:space-y-28">
          {SPOTLIGHTS.map((s, i) => {
            const d = s[lang];
            const tone = TONE[s.tone];
            const flip = i % 2 === 1;
            return (
              <div key={s.id} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                {/* text */}
                <Reveal className={flip ? "md:order-2" : ""}>
                  <span className="font-mono text-xs font-semibold tracking-[0.2em] text-faint">0{i + 1}</span>
                  <h3 className="font-display mt-4 text-2xl font-bold leading-tight text-fg md:text-[2rem]">{d.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">{d.desc}</p>
                </Reveal>

                {/* poster panel */}
                <Reveal delay={0.12} className={flip ? "md:order-1" : ""}>
                  <div className="ring-neon relative overflow-hidden rounded-3xl bg-surface-2 p-7 shadow-2xl">
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.grad}`} />
                    <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full blur-3xl" style={{ background: tone.glow }} />
                    <div className="relative">
                      <p className="font-display text-2xl font-bold leading-tight text-fg md:text-[1.7rem]">
                        {d.poster} <span className={tone.text}>{d.posterAccent}</span>
                      </p>
                      <div className="mt-7">
                        <Mockup type={s.mockup} lang={lang} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Mockup({ type, lang }: { type: string; lang: Lang }) {
  if (type === "inbox") return <InboxMockup lang={lang} />;
  if (type === "lang") return <LangMockup />;
  if (type === "photo") return <PhotoMockup lang={lang} />;
  return <OrdersMockup lang={lang} />;
}

/* ---- mockups ---- */

function InboxMockup({ lang }: { lang: Lang }) {
  const rows =
    lang === "bn"
      ? [
          { n: "রিয়া", m: "এই শাড়িটা আছে?", L: MessengerLogo },
          { n: "রিয়াদ", m: "পাঞ্জাবির দাম কত?", L: WhatsappLogo },
          { n: "সুমি", m: "COD হবে?", L: InstagramLogo },
        ]
      : [
          { n: "Ria", m: "Is this saree available?", L: MessengerLogo },
          { n: "Riad", m: "Panjabi er price koto?", L: WhatsappLogo },
          { n: "Sumi", m: "COD hobe?", L: InstagramLogo },
        ];
  return (
    <div className="rounded-2xl border border-line bg-bg/70 p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {[FacebookLogo, MessengerLogo, InstagramLogo, WhatsappLogo].map((L, i) => (
            <span key={i} className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-bg bg-surface-2">
              <L className="h-4 w-4" />
            </span>
          ))}
        </div>
        <span className="rounded-full bg-lime/15 px-2 py-0.5 text-[0.6rem] font-bold text-lime">3 new</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {rows.map((r) => (
          <div key={r.n} className="flex items-center gap-2.5 rounded-xl bg-surface-2/60 px-2.5 py-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple text-[0.6rem] font-bold text-bg">
              {r.n.charAt(0)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-fg">{r.n}</p>
              <p className="truncate text-[0.7rem] text-muted">{r.m}</p>
            </div>
            <r.L className="h-4 w-4 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "user" | "bot"; children: React.ReactNode }) {
  return (
    <div className={`flex ${side === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-1.5 text-[0.78rem] leading-snug ${
          side === "user"
            ? "rounded-br-md bg-gradient-to-br from-cyan to-purple font-medium text-bg"
            : "rounded-bl-md border border-line bg-bg/70 text-fg/90"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function LangMockup() {
  return (
    <div className="space-y-2">
      <Bubble side="user">{"Apnader 43\" TV ache?"}</Bubble>
      <Bubble side="bot">জ্বি স্যার, Samsung ও Haier ব্র্যান্ডের আছে ✨</Bubble>
      <Bubble side="user">Price koto?</Bubble>
      <Bubble side="bot">Haier 43&quot; — ৪২,৫০০৳ 🛍️ অর্ডার করবেন?</Bubble>
    </div>
  );
}

function PhotoMockup({ lang }: { lang: Lang }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-end">
        <div className="relative aspect-[3/4] w-24 overflow-hidden rounded-xl border border-line-2">
          <Image src="/products/panjabi-white.webp" alt="Panjabi" fill sizes="110px" className="object-cover" />
        </div>
      </div>
      <Bubble side="user">{lang === "bn" ? "এটা আছে? দাম কত?" : "Eta ache? Price koto?"}</Bubble>
      <Bubble side="bot">{lang === "bn" ? "জ্বি! সাদা প্রিমিয়াম পাঞ্জাবি ১,৮৫০৳ ✨ স্টকে আছে।" : "Yes! White premium panjabi — ৳1,850 ✨ in stock."}</Bubble>
    </div>
  );
}

function OrdersMockup({ lang }: { lang: Lang }) {
  const orders =
    lang === "bn"
      ? [
          { n: "রিয়া · জামদানি শাড়ি", d: "COD · ১,৮৫০৳ · ধানমন্ডি", t: "রাত ২:১৪" },
          { n: "রিয়াদ · সাদা পাঞ্জাবি", d: "COD · ১,৮৫০৳ · মিরপুর", t: "রাত ১১:৩২" },
          { n: "সুমি · লিপস্টিক সেট", d: "COD · ৬৫০৳ · উত্তরা", t: "রাত ৯:০৫" },
        ]
      : [
          { n: "Ria · Jamdani Saree", d: "COD · ৳1,850 · Dhanmondi", t: "2:14 AM" },
          { n: "Riad · White Panjabi", d: "COD · ৳1,850 · Mirpur", t: "11:32 PM" },
          { n: "Sumi · Lipstick Set", d: "COD · ৳650 · Uttara", t: "9:05 PM" },
        ];
  const captured = lang === "bn" ? "AI ক্যাপচার করেছে" : "AI captured";
  return (
    <div className="space-y-2.5">
      {orders.map((o) => (
        <div key={o.n} className="rounded-xl border border-line bg-bg/70 px-3.5 py-2.5 shadow-lg backdrop-blur">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-500/15 text-sm">🛒</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-xs font-semibold text-fg">{o.n}</p>
                <span className="shrink-0 text-[0.6rem] text-faint">{o.t}</span>
              </div>
              <p className="truncate text-[0.7rem] text-muted">{o.d}</p>
            </div>
          </div>
          <span className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-lime/[0.12] px-1.5 py-0.5 text-[0.58rem] font-semibold text-lime">
            ✦ {captured}
          </span>
        </div>
      ))}
    </div>
  );
}
