// Tasteful flat illustrated profile avatars (not real photos — swap for real
// customer photos when available). Distinct hair/skin/clothing per variant.

type P = { className?: string };

const VARIANTS: Record<string, { bg: [string, string]; skin: string; hair: string; cloth: string; long?: boolean; beard?: boolean }> = {
  m1: { bg: ["#173a4a", "#0e2230"], skin: "#e7b98e", hair: "#241a12", cloth: "#27486e" },
  f1: { bg: ["#3a1840", "#2a1030"], skin: "#edc198", hair: "#1f1712", cloth: "#7a2e52", long: true },
  m2: { bg: ["#3a2a12", "#241808"], skin: "#c98a5e", hair: "#1c140c", cloth: "#3a4150", beard: true },
};

export function Avatar({ variant = "m1", className = "" }: { variant?: string; className?: string } & P) {
  const v = VARIANTS[variant] ?? VARIANTS.m1;
  const id = `av_${variant}`;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}_bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={v.bg[0]} /><stop offset="1" stopColor={v.bg[1]} />
        </linearGradient>
        <clipPath id={`${id}_clip`}><circle cx="24" cy="24" r="24" /></clipPath>
      </defs>
      <g clipPath={`url(#${id}_clip)`}>
        <rect width="48" height="48" fill={`url(#${id}_bg)`} />
        {/* long hair behind shoulders */}
        {v.long && <path d="M11 22c0 12 4 18 4 26h18c0-8 4-14 4-26 0-9-6-14-13-14S11 13 11 22Z" fill={v.hair} />}
        {/* shoulders / clothing */}
        <ellipse cx="24" cy="48" rx="17" ry="13" fill={v.cloth} />
        {/* neck */}
        <rect x="20.5" y="27" width="7" height="7" rx="3" fill={v.skin} />
        {/* head */}
        <circle cx="24" cy="20" r="9.5" fill={v.skin} />
        {/* beard */}
        {v.beard && <path d="M15.5 21c0 6 4 9 8.5 9s8.5-3 8.5-9c-2 2-5 3-8.5 3s-6.5-1-8.5-3Z" fill={v.hair} opacity="0.9" />}
        {/* hair top */}
        <path d="M14.6 19c-.4-7 4-11 9.4-11s9.8 4 9.4 11c-1.2-1-2.4-3.2-3-5-1.8 2-5 3.2-8.2 3.2-1.6 0-2.6-.3-3.4-.8-.6 1.4-2 3-4.2 2.6Z" fill={v.hair} />
      </g>
      <circle cx="24" cy="24" r="23.2" fill="none" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.4" />
    </svg>
  );
}
