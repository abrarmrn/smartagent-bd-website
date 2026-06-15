"use client";

import { useLang } from "@/lib/LanguageContext";
import { T } from "@/lib/content";
import { Logo } from "./Logo";
import { ContactButtons } from "./ContactButtons";

export function Footer() {
  const { lang } = useLang();
  const f = T[lang].footer;
  const nav = T[lang].nav;
  const year = new Date().getFullYear();

  const explore = [
    { href: "#problem", label: nav.problem },
    { href: "#features", label: nav.features },
    { href: "#demo", label: nav.demo },
    { href: "#pricing", label: nav.pricing },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <footer className="relative border-t border-line/60 bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr] lg:gap-16">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{f.tagline}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line-2 px-3 py-1.5 text-xs font-medium text-muted">
              💳 {f.pay}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">{f.explore}</p>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l.href}><a href={l.href} className="text-sm text-muted transition hover:text-cyan">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-faint">{f.connect}</p>
            <div className="mt-4"><ContactButtons /></div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-faint sm:flex-row">
          <p>© {year} SmartAgent BD. {f.rights}</p>
          <p className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan to-purple" />{f.made}</p>
        </div>
      </div>
    </footer>
  );
}
