"use client";

import { useLang } from "@/lib/LanguageContext";
import { contactLinks } from "@/lib/contact";

export function ContactButtons({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const links = contactLinks(lang);

  const items = [
    { href: links.messenger, label: "Messenger", ext: true, path: "M12 2C6.5 2 2 6 2 11c0 2.8 1.5 5.3 3.8 6.9V22l3.5-1.9c.9.2 1.8.3 2.7.3 5.5 0 10-4 10-9S17.5 2 12 2z" },
    { href: links.whatsapp, label: "WhatsApp", ext: true, path: "M.06 24l1.7-6.2A11.9 11.9 0 0112 0c6.6 0 12 5.4 12 12s-5.4 12-12 12a12 12 0 01-5.7-1.5L.06 24zM6.6 20l.4.2a9.9 9.9 0 005 1.4 10 10 0 100-20 10 10 0 00-8.5 15.3l.3.4-1 3.6 3.8-.9z" },
    { href: links.phone, label: lang === "bn" ? "কল" : "Call", ext: false, path: "M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          {...(it.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="btn-ghost inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-cyan">
            <path d={it.path} />
          </svg>
          {it.label}
        </a>
      ))}
    </div>
  );
}
