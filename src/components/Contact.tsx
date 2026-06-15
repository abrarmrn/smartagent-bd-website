"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { T } from "@/lib/content";
import { Eyebrow } from "./Heading";
import { Reveal } from "@/lib/motion";
import { ContactButtons } from "./ContactButtons";
import { MouseFloaters } from "./MouseFloaters";
import { IconArrow, IconCheck } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { lang } = useLang();
  const t = T[lang].contact;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang, type: "demo_request", source: "website", ts: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-surface-2/50 px-4 py-3 text-sm text-fg placeholder:text-faint outline-none transition focus:border-cyan/50 focus:bg-surface-2 focus:ring-2 focus:ring-cyan/15";

  return (
    <section id="contact" className="aurora-bg relative overflow-hidden border-t border-line/50 py-24 md:py-28">
      <MouseFloaters />
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal><Eyebrow>{t.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-5 text-[2rem] font-bold leading-tight tracking-tight text-fg md:text-[2.8rem]">
              {t.title} <span className="text-neon">{t.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{t.sub}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-faint">{t.orReach}</p>
              <ContactButtons />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="ring-neon rounded-3xl bg-surface/60 p-6 backdrop-blur md:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-lime/15">
                  <IconCheck className="h-7 w-7 text-lime" />
                </div>
                <p className="mt-5 max-w-xs text-lg font-medium text-fg">{t.success}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Labeled label={t.name}><input name="name" required placeholder={t.name} className={field} /></Labeled>
                  <Labeled label={t.email}><input name="email" type="email" required placeholder={t.email} className={field} /></Labeled>
                </div>
                <Labeled label={t.company}><input name="company" placeholder={t.company} className={field} /></Labeled>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Labeled label={t.service}>
                    <select name="service" defaultValue="" className={field} required>
                      <option value="" disabled>{t.service}</option>
                      {t.services.map((s) => <option key={s} value={s} className="bg-surface-2">{s}</option>)}
                    </select>
                  </Labeled>
                  <Labeled label={t.budget}>
                    <select name="budget" defaultValue="" className={field}>
                      <option value="" disabled>{t.budget}</option>
                      {t.budgets.map((b) => <option key={b} value={b} className="bg-surface-2">{b}</option>)}
                    </select>
                  </Labeled>
                </div>
                <Labeled label={t.details}><textarea name="details" rows={4} placeholder={t.details} className={`${field} resize-none`} /></Labeled>

                <button type="submit" disabled={status === "sending"} className="btn-neon group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold disabled:opacity-60">
                  {status === "sending" ? t.sending : t.submit}
                  {status !== "sending" && <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>
                {status === "error" && <p className="text-center text-sm font-medium text-rose-400">{t.error}</p>}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Labeled({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}
