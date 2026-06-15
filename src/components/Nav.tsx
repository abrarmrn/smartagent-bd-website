"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { T } from "@/lib/content";
import { Logo } from "./Logo";

export function Nav() {
  const { lang, toggle } = useLang();
  const t = T[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#problem", label: t.problem },
    { href: "#features", label: t.features },
    { href: "#demo", label: t.demo },
    { href: "#pricing", label: t.pricing },
    { href: "#faq", label: t.faq },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-line/70 bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" aria-label="SmartAgent BD"><Logo /></a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative text-sm text-muted transition hover:text-fg">
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-cyan to-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggle}
            className="rounded-full border border-line-2 px-3 py-1.5 text-xs font-bold text-muted transition hover:border-cyan/40 hover:text-fg"
            aria-label="Switch language"
          >
            {lang === "bn" ? "EN" : "বাং"}
          </button>
          <a href="#contact" className="btn-neon hidden rounded-full px-4 py-2 text-sm font-semibold sm:inline-block">
            {t.cta}
          </a>
          <button className="rounded-lg p-2 text-muted lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 px-5 py-3 backdrop-blur-xl lg:hidden">
          {[...links, { href: "#contact", label: t.cta }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm text-muted">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-neon mt-2 block rounded-full px-4 py-2.5 text-center text-sm font-semibold">
            {t.cta}
          </a>
        </div>
      )}
    </header>
  );
}
