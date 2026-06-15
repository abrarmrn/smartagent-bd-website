"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { POPUPS } from "@/lib/content";

// lazychat.io-style live toast: slides in at the bottom-left every few seconds,
// rotating through real-time social-proof notifications.
const VISIBLE = 4600;
const GAP = 2200;

export function SocialProofPopups() {
  const { lang } = useLang();
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let idx = 0;
    let alive = true;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const loop = () => {
      if (!alive) return;
      setI(idx % POPUPS.length);
      setShow(true);
      timers.push(setTimeout(() => {
        if (!alive) return;
        setShow(false);
        idx++;
        timers.push(setTimeout(loop, GAP));
      }, VISIBLE));
    };
    const start = setTimeout(loop, 2400);
    return () => {
      alive = false;
      clearTimeout(start);
      timers.forEach(clearTimeout);
    };
  }, []);

  const p = POPUPS[i];
  const ago = lang === "bn" ? p.agoBn : p.agoEn;

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-40 hidden w-[20rem] max-w-[calc(100vw-2.5rem)] sm:block">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -56, y: 8, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -32, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="ring-neon overflow-hidden rounded-2xl bg-surface/90 shadow-2xl backdrop-blur-xl"
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-cyan via-purple to-lime" />
            <div className="flex items-center gap-3 py-3 pl-3 pr-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 text-xl">
                {p.emoji}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-snug text-fg">{p[lang]}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[0.68rem] text-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-glow" />
                  {ago}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
