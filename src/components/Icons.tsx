// Inline stroke icon set (inherits currentColor).

type P = { className?: string };

function I({ d, className }: { d: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

/* features */
export const IconEye = (p: P) => <I {...p} d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />;
export const IconMic = (p: P) => <I {...p} d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v1a7 7 0 0 1-14 0v-1M12 19v3M8 22h8" />;
export const IconChat = (p: P) => <I {...p} d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />;
export const IconTag = (p: P) => <I {...p} d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V4.8A2 2 0 0 1 4.8 2.8H12a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8zM7.5 7.5h.01" />;
export const IconCart = (p: P) => <I {...p} d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L23 7H6M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />;
export const IconBell = (p: P) => <I {...p} d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0" />;
export const IconSave = (p: P) => <I {...p} d="M5 3h11l3 3v15a0 0 0 0 1 0 0H5a0 0 0 0 1 0 0V3zM8 3v5h7M8 13h8M8 17h5" />;

/* pains */
export const IconMoon = (p: P) => <I {...p} d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />;
export const IconClock = (p: P) => <I {...p} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2" />;
export const IconWallet = (p: P) => <I {...p} d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3M3 7h16a2 2 0 0 1 2 2v2h-5a2 2 0 0 0 0 4h5M16 13h.01" />;
export const IconRepeat = (p: P) => <I {...p} d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" />;

/* pillars */
export const IconBrain = (p: P) => <I {...p} d="M9.5 2a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 6 16a3 3 0 0 0 3.5 3.5A2.5 2.5 0 0 0 12 17V4.5A2.5 2.5 0 0 0 9.5 2zM14.5 2a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 18 16a3 3 0 0 1-3.5 3.5A2.5 2.5 0 0 1 12 17" />;
export const IconTarget = (p: P) => <I {...p} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />;
export const IconShield = (p: P) => <I {...p} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />;

export const PAIN_ICONS = { moon: IconMoon, clock: IconClock, wallet: IconWallet, repeat: IconRepeat } as const;
export const PILLAR_ICONS = { brain: IconBrain, target: IconTarget, shield: IconShield } as const;
export const FEATURE_ICONS = { eye: IconEye, mic: IconMic, chat: IconChat, tag: IconTag, cart: IconCart, bell: IconBell, save: IconSave } as const;

export const IconArrow = (p: P) => <I {...p} d="M5 12h14M13 6l6 6-6 6" />;
export function IconCheck({ className }: P) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12l5 5L20 7" /></svg>;
}
export function IconSpark({ className }: P) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5z" /></svg>;
}
export function IconBolt({ className }: P) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg>;
}
