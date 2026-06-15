// High-fidelity inline brand SVGs for the integration cloud.

type P = { className?: string };

export function FacebookLogo({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.85v-8.38H7.08v-3.47h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.47h-2.8V24C19.61 23.04 24 18.07 24 12.07Z" />
    </svg>
  );
}

export function MessengerLogo({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="msgr" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#00B2FF" /><stop offset="1" stopColor="#006AFF" />
        </linearGradient>
      </defs>
      <path fill="url(#msgr)" d="M12 0C5.37 0 0 4.97 0 11.1c0 3.5 1.74 6.6 4.46 8.65V24l4.07-2.23c1.09.3 2.24.46 3.47.46 6.63 0 12-4.97 12-11.1S18.63 0 12 0Zm1.2 14.95-3.06-3.26-5.96 3.26 6.56-6.96 3.13 3.26 5.88-3.26-6.55 6.96Z" />
    </svg>
  );
}

export function InstagramLogo({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#FEDA75" /><stop offset="0.4" stopColor="#FA7E1E" />
          <stop offset="0.7" stopColor="#D62976" /><stop offset="1" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="url(#ig)" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" stroke="url(#ig)" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.3" fill="url(#ig)" />
    </svg>
  );
}

export function WhatsappLogo({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#25D366" d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.523 5.26l-.999 3.648 3.965-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function TelegramLogo({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#29A9EB" />
      <path fill="#fff" d="M5.5 11.8 16.3 7.2c.5-.18.94.12.78.88l-1.84 8.66c-.13.62-.5.77-1.02.48l-2.82-2.08-1.36 1.31c-.15.15-.28.28-.57.28l.2-2.88 5.24-4.73c.23-.2-.05-.32-.35-.12l-6.48 4.08-2.79-.87c-.61-.19-.62-.61.13-.9Z" />
    </svg>
  );
}

export function ShopifyLogo({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#95BF47" d="M15.6 4.2c-.1 0-.3 0-.4.1l-.6.2c-.3-.9-.9-1.7-1.9-1.7h-.1c-.3-.4-.7-.5-1-.5-2.3.1-3.4 3-3.7 4.4l-1.6.5c-.5.2-.5.2-.6.7-.1.4-1.4 10.4-1.4 10.4L13 21l5.4-1.2S15.7 4.5 15.6 4.2Zm-2 .6-1 .3v-.2c0-.6-.1-1.1-.2-1.5.5.1.9.7 1.2 1.4Zm-1.9-1.2c.2.4.3 1 .3 1.7v.1l-2 .6c.4-1.5 1.1-2.2 1.7-2.4Zm-.8-.7c.1 0 .2 0 .3.1-.8.4-1.6 1.3-2 3.1l-1.6.5c.4-1.3 1.4-3.6 3.3-3.7Z" />
      <path fill="#5E8E3E" d="M15.2 4.3c-.1 0-.1 0 0 0l-.7.2S16.2 19.5 16.2 19.6L18.4 19.8 15.2 4.3Z" />
      <path fill="#fff" d="M13.2 8.3 12.9 9.9s-.5-.3-1.2-.3c-1 0-1 .6-1 .8 0 .9 2.4 1.2 2.4 3.4 0 1.7-1.1 2.8-2.5 2.8-1.8 0-2.6-1.1-2.6-1.1l.4-1.6s.9.8 1.7.8c.5 0 .7-.4.7-.7 0-1.2-2-1.3-2-3.3 0-1.7 1.2-3.3 3.6-3.3.9 0 1.6.4 1.6.4Z" />
    </svg>
  );
}

export const BRAND_LOGOS = [
  { id: "messenger", Comp: MessengerLogo, glow: "rgba(0,132,255,0.5)" },
  { id: "instagram", Comp: InstagramLogo, glow: "rgba(214,41,118,0.5)" },
  { id: "whatsapp", Comp: WhatsappLogo, glow: "rgba(37,211,102,0.5)" },
  { id: "shopify", Comp: ShopifyLogo, glow: "rgba(149,191,71,0.5)" },
  { id: "telegram", Comp: TelegramLogo, glow: "rgba(41,169,235,0.5)" },
  { id: "facebook", Comp: FacebookLogo, glow: "rgba(24,119,242,0.5)" },
] as const;
