# SmartAgent BD — AI Chatbot Product Page

A vibrant, high-energy, **conversion-focused product page** for SmartAgent BD: a 24/7 Bangla
Messenger AI sales bot for Bangladeshi F-commerce pages. Single-page, bilingual (English / বাংলা),
heavy scroll animations. Next.js 15 + Tailwind v4 + Framer Motion. Vercel-ready.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # fill in values (see below)
npm run dev                         # http://localhost:3000
npm run build && npm run start      # production build
```

> ⚠️ Don't run `npm run build` while `npm run dev`/preview is running — they share the `.next`
> cache and a concurrent build corrupts the dev server (chunk 404s). Stop dev first, or
> `rm -rf .next` and restart dev.

## Design — vibrant neon AI-startup

- **Palette:** deep blue-black (`#060814`) + **neon cyan**, **electric purple**, **laser lime**.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (tags), Hind Siliguri (Bangla).
- **Effects:** animated multi-neon aurora, engineering grid, `.glow-card` neon hover borders,
  `.btn-neon` sheen, gradient `.text-neon-anim`, glass surfaces. All tokens in the `@theme` block
  of [`src/app/globals.css`](src/app/globals.css).

> Tailwind v4 note: the custom `font-display`/`font-mono` families are applied via explicit CSS
> rules in `globals.css` (Tailwind didn't reliably generate them). Neon colors are shadeless
> tokens — use `bg-cyan`, `text-lime`, `from-cyan to-purple` (not `cyan-500`).

## Heavy motion & interactions

- **Scroll reveals** — `Reveal` / `RevealGroup` (Framer Motion `whileInView`), `src/lib/motion.tsx`.
- **Cursor spotlight** + **parallax** — `src/lib/interactions.tsx` (`SpotlightCard`, `Parallax`).
- **Mouse-parallax floaters** — [`MouseFloaters.tsx`](src/components/MouseFloaters.tsx): soft neon
  blobs that drift with the cursor (spring-tracked); mounted in Hero + Contact.
- **Live toast notifications** — [`SocialProofPopups.tsx`](src/components/SocialProofPopups.tsx):
  lazychat-style toasts that slide into the bottom-left and cycle social proof every few seconds
  ("🔥 AI just closed an order for a Jamdani saree · 2 min ago"). Messages live in `POPUPS`.
- **Integration cloud** — [`Integrations.tsx`](src/components/Integrations.tsx) +
  [`BrandLogos.tsx`](src/components/BrandLogos.tsx): a pulsing AI core wired by animated glowing
  lines to floating Facebook / Messenger / Instagram / WhatsApp / Telegram / Shopify logos.
- **Animated chat sim** — [`ChatSim.tsx`](src/components/ChatSim.tsx): a futuristic Messenger UI,
  header **SmartAgent BD** (✓ verified badge), looping the full Bangla cash-on-delivery close
  (Jamdani price → stock → push COD → capture address → order confirmed) with a typing indicator.

## Sections & copy

Hero (authoritative "Convert DMs into Sales Instantly" hook + investment-framed ৳12,000 → ৳1,999
price swap) → **Pain** (the Silent Revenue Killer) → **Solution** (an elite sales machine) →
**Integration cloud** → **Features** (benefit-first) → **Live demo** (chat sim + `<5s`/`24/7`/`ROI`)
→ stats → how it works → **Pricing** (3 BDT tiers, plain-language) → testimonials → **FAQ** (neon
accordion) → Contact ("Get your free demo agent") → footer.

**All copy + data (bilingual, high-converting)** lives in one file:
[`src/lib/content.ts`](src/lib/content.ts) — edit pain points, pricing, features, testimonials,
and the floating pop-up messages there. The chat script lives in `ChatSim.tsx`.

Floating **EN / বাং** toggle (top-right), persisted in `localStorage`. English default.

## Environment variables

Copy `.env.local.example` → `.env.local` (mirror in Vercel → Settings → Environment Variables).

| Var | Used by | Example |
|---|---|---|
| `LEAD_WEBHOOK_URL` | **Server-side.** `/api/lead` forwards the contact form here (your n8n webhook). | `https://abrarpial94.app.n8n.cloud/webhook/smartagent-lead` |
| `NEXT_PUBLIC_MESSENGER_HANDLE` | Messenger CTA → `m.me/<handle>` | `SmartAgentBD` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp CTA → `wa.me/<number>` (digits, intl) | `8801XXXXXXXXX` |
| `NEXT_PUBLIC_PHONE_NUMBER` | Call CTA → `tel:` | `+8801XXXXXXXXX` |

Until set, CTAs use placeholders and the form returns 200 (logs a warning instead of forwarding).

## Lead flow

`Contact` → `POST /api/lead` (validates name + email) → forwards JSON to `LEAD_WEBHOOK_URL`.
Suggested n8n side: **Webhook → Data Table insert → Telegram notify**. Payload:

```json
{ "name":"…", "email":"…", "company":"…", "service":"…", "budget":"…", "details":"…",
  "type":"demo_request", "lang":"en", "source":"website", "ts":"ISO-8601" }
```

## Deploy

Push to a Git repo → import in Vercel (auto-detects Next.js) → add env vars + custom domain.

## Local screenshots

The page is long with many `backdrop-filter` blurs + continuous animations, so automated
*full-page* screenshot tools time out waiting for an idle frame. Real browsers render it fine.
For CI captures, screenshot per-section/viewport or emulate `prefers-reduced-motion`.
