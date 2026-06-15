"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

type Msg = { from: "user" | "bot"; text?: string; images?: string[] };

const GALLERY = ["/products/panjabi-white.webp", "/products/panjabi-navy.jpg"];

const CONVO: Record<"en" | "bn", Msg[]> = {
  bn: [
    { from: "user", text: "ভাইয়া, ঈদের জন্য পাঞ্জাবি দেখতে চাই 😍" },
    { from: "bot", text: "অবশ্যই ভাইয়া! 🥰 আমাদের এই দুটো এখন বেস্ট সেলিং 👇", images: GALLERY },
    { from: "user", text: "সাদাটা তো দারুণ! দাম কত?" },
    { from: "bot", text: "সাদা প্রিমিয়াম পাঞ্জাবিটার দাম ১,৮৫০৳ ✨ এখন স্টকে আছে।" },
    { from: "user", text: "ক্যাশ অন ডেলিভারি হবে?" },
    { from: "bot", text: "জ্বি, সারা বাংলাদেশে ক্যাশ অন ডেলিভারি ✅ ডেলিভারি চার্জ মাত্র ৬০৳। অর্ডার কনফার্ম করে দিই ভাইয়া?" },
    { from: "user", text: "হ্যাঁ, করেন।" },
    { from: "bot", text: "দারুণ! 💖 নাম, ঠিকানা আর ফোন নম্বরটা একটু দিন প্লিজ।" },
    { from: "user", text: "রিয়াদ, বাসা ১২, ধানমন্ডি, ঢাকা — ০১৭xxxxxxxx" },
    { from: "bot", text: "ধন্যবাদ রিয়াদ ভাইয়া! ✅ অর্ডার কনফার্ম হলো — ২-৩ দিনে ডেলিভারি পেয়ে যাবেন 🚚💖" },
  ],
  en: [
    { from: "user", text: "Bhaiya, I'm looking for a panjabi for Eid 😍" },
    { from: "bot", text: "Of course bhaiya! 🥰 These two are our best-sellers right now 👇", images: GALLERY },
    { from: "user", text: "The white one looks great! How much?" },
    { from: "bot", text: "The white premium panjabi is ৳1,850 ✨ and it's in stock now." },
    { from: "user", text: "Is cash on delivery available?" },
    { from: "bot", text: "Yes, cash on delivery all over Bangladesh ✅ Delivery is just ৳60. Shall I confirm your order, bhaiya?" },
    { from: "user", text: "Yes, please." },
    { from: "bot", text: "Wonderful! 💖 Please share your name, address and phone number." },
    { from: "user", text: "Riad, House 12, Dhanmondi, Dhaka — 017xxxxxxxx" },
    { from: "bot", text: "Thank you Riad bhaiya! ✅ Order confirmed — you'll get delivery in 2-3 days 🚚💖" },
  ],
};

export function ChatSim() {
  const { lang } = useLang();
  const convo = CONVO[lang];
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: false, margin: "-80px" });
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setShown(0);
      setTyping(false);
      let delay = 700;
      convo.forEach((m, idx) => {
        if (m.from === "bot") {
          timers.push(setTimeout(() => !cancelled && setTyping(true), delay));
          delay += m.images ? 1300 : 1000;
          timers.push(setTimeout(() => { if (cancelled) return; setTyping(false); setShown(idx + 1); }, delay));
          delay += m.images ? 800 : 500;
        } else {
          timers.push(setTimeout(() => !cancelled && setShown(idx + 1), delay));
          delay += 900;
        }
      });
      timers.push(setTimeout(() => !cancelled && run(), delay + 3600));
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [inView, lang, convo]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  return (
    <div ref={wrapRef} className="ring-neon rounded-[2rem] bg-surface/70 p-3 shadow-2xl backdrop-blur">
      <div className="overflow-hidden rounded-[1.55rem] bg-bg/80">
        {/* header */}
        <div className="relative flex items-center gap-3 border-b border-line px-4 py-3.5">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple text-sm font-bold text-bg">
            SA
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-bg bg-lime" />
          </div>
          <div className="flex-1">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-fg">
              SmartAgent BD
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#2be7ff" aria-hidden><path d="M12 2l2.4 1.8 3-.3 1 2.8 2.6 1.6-.9 2.9.9 2.9-2.6 1.6-1 2.8-3-.3L12 22l-2.4-1.8-3 .3-1-2.8L3 16.1l.9-2.9L3 10.3l2.6-1.6 1-2.8 3 .3z" /><path d="M9 12l2 2 4-4" stroke="#07070f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </p>
            <p className="flex items-center gap-1.5 text-[0.7rem] text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-glow" />
              {lang === "bn" ? "এআই সেলস এজেন্ট · অনলাইন" : "AI Sales Agent · Online"}
            </p>
          </div>
          <div className="flex gap-1">
            {[0, 1, 2].map((d) => (
              <span key={d} className="h-1.5 w-1.5 rounded-full bg-line-2 animate-pulse-glow" style={{ animationDelay: `${d * 0.3}s` }} />
            ))}
          </div>
        </div>

        {/* messages */}
        <div ref={scrollRef} className="h-[420px] space-y-2.5 overflow-hidden px-4 py-5">
          <AnimatePresence initial={false}>
            {convo.slice(0, shown).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[86%] space-y-1.5`}>
                  {m.text && (
                    <div
                      className={`rounded-2xl px-3.5 py-2 text-[0.85rem] leading-snug ${
                        m.from === "user"
                          ? "rounded-br-md bg-gradient-to-br from-cyan to-purple font-medium text-bg shadow-[0_6px_20px_-6px_rgba(43,231,255,0.5)]"
                          : "rounded-bl-md border border-line bg-surface-2 text-fg/90"
                      }`}
                    >
                      {m.text}
                    </div>
                  )}
                  {m.images && (
                    <div className="grid grid-cols-2 gap-1.5">
                      {m.images.map((src) => (
                        <div key={src} className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line-2 bg-surface-2">
                          <Image src={src} alt="Premium panjabi" fill sizes="130px" className="object-cover transition group-hover:scale-105" />
                          <span className="absolute bottom-1 left-1 rounded-md bg-bg/80 px-1.5 py-0.5 text-[0.6rem] font-semibold text-lime backdrop-blur">৳1,850</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <AnimatePresence>
            {typing && (
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-line bg-surface-2 px-3.5 py-3">
                  <Dot /> <Dot delay="0.15s" /> <Dot delay="0.3s" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* composer */}
        <div className="flex items-center gap-2 border-t border-line px-4 py-3">
          <div className="flex-1 rounded-full bg-surface-2 px-4 py-2 text-xs text-faint">
            {lang === "bn" ? "মেসেজ লিখুন…" : "Type a message…"}
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple text-bg">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3 11l18-8-8 18-2.5-7.5z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({ delay = "0s" }: { delay?: string }) {
  return <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan" style={{ animationDelay: delay, animationDuration: "1s" }} />;
}
