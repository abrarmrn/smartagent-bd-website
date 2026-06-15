export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden className="shrink-0">
        <rect x="1" y="1" width="38" height="38" rx="11" fill="#0c0f24" />
        <rect x="1" y="1" width="38" height="38" rx="11" stroke="url(#n_stroke)" strokeWidth="1.2" />
        <path
          d="M11 14.5C11 13.12 12.12 12 13.5 12h13c1.38 0 2.5 1.12 2.5 2.5v8c0 1.38-1.12 2.5-2.5 2.5H18l-4.2 3.4c-.65.53-1.6.06-1.6-.78V25h-.7c-1.38 0-2.5-1.12-2.5-2.5v-8z"
          fill="url(#n_bubble)"
        />
        <path d="M20 15l1.1 2.7 2.7 1.1-2.7 1.1L20 22.6l-1.1-2.7-2.7-1.1 2.7-1.1z" fill="#07070f" />
        <defs>
          <linearGradient id="n_stroke" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2be7ff" /><stop offset="1" stopColor="#b14bff" />
          </linearGradient>
          <linearGradient id="n_bubble" x1="11" y1="12" x2="29" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2be7ff" /><stop offset="1" stopColor="#b14bff" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-[1.12rem] font-bold leading-none tracking-tight text-fg">
        Smart<span className="text-neon">Agent</span>
        <span className="ml-1.5 align-middle font-sans text-[0.58rem] font-bold uppercase tracking-[0.2em] text-muted">BD</span>
      </span>
    </span>
  );
}
