# SmartAgent BD — Agency Operations Guide

> **Internal playbook** for running SmartAgent BD as a productized AI-chatbot agency for Bangladeshi F‑commerce and SME brands. Covers how to demo without a live client, how to build our own agency bot, how to onboard and take technical handover of a client's pages safely, and ready-to-deploy conversation blueprints per niche.
>
> _Last updated: 2026‑06‑16 · Owner: SmartAgent BD · Status: Living document_

---

## Table of Contents

1. [Client Demo Strategy (Selling Without a Live Client)](#1-client-demo-strategy-selling-without-a-live-client)
2. [Agency AI Chatbot Setup & Data‑Sheet Requirements](#2-agency-ai-chatbot-setup--data-sheet-requirements)
3. [Customer Onboarding & Technical Handover Workflow](#3-customer-onboarding--technical-handover-workflow)
4. [Niche‑Specific Chatbot Roadmaps (Blueprints)](#4-niche-specific-chatbot-roadmaps-blueprints)

---

## 1. Client Demo Strategy (Selling Without a Live Client)

The Payel Fashion bot is no longer live, so we can **never rely on a single client's page** to demo. The goal of this section is to make our sales process **demo-independent and always-on** — any prospect, any time, can experience the product in under 60 seconds.

### 1.1 The Golden Rule of Demos

> **Never tell. Always show.** A 45‑second live conversation closes more than a 10‑minute pitch. Our entire demo stack exists so that within one minute of a sales call, the prospect is messaging a real bot that answers in fluent Bangla and "closes" a mock order in front of them.

We maintain **three layers** of demo assets, used in escalating order of commitment:

| Layer | Asset | When to use | Setup effort |
|-------|-------|-------------|--------------|
| **L1 – Instant** | Website live chat widget + Loom videos | Cold DM, first reply, link in bio | One-time |
| **L2 – Interactive** | Permanent "SmartAgent BD Sandbox" FB/IG page with mock brands | Warm prospect, discovery call | One-time, maintained |
| **L3 – Tailored** | A 1‑day custom sandbox seeded with **their** products | Hot prospect, pre-close objection-buster | ~2 hours per prospect |

### 1.2 The Permanent "SmartAgent BD Sandbox" Page (Core Asset)

Build **one Facebook Page + one linked Instagram account** that we own and control forever. This is our **showroom** — it never depends on a paying client.

**Page identity:**
- Page name: `SmartAgent BD — Live Demo` (clearly labelled as a demo so Meta review is clean).
- Category: *Software / Business Service.*
- Bio/CTA: "👋 Message us 'demo' to watch our AI close a sale live."
- Pinned post + Story Highlights explaining: "This page demonstrates our AI on 4 different business types — type a keyword to switch."

**Multi-persona trick (one page, many demos):** Instead of building four separate pages, run **one sandbox bot** that switches "mock brand persona" based on a keyword the prospect sends. This is powered by a simple `demo_mode` state in our Data Table (see §2).

| Keyword | Bot becomes | Mock data it uses |
|---------|-------------|-------------------|
| `fashion` / `dress` | "Dhaka Threads" clothing brand | Panjabi, saree, three-piece w/ prices, sizes, stock |
| `food` / `restaurant` | "Spice Route" restaurant | Menu, table booking, delivery timing |
| `resort` / `hotel` | "Sylhet Hills Resort" | Room types, availability, booking link |
| `support` / `help` | "TechCare BD" customer support | Order tracking, returns, warranty FAQ |
| `gym` / `fitness` | "IronCore Fitness" | Membership plans, free trial booking |

When a prospect messages, the bot replies: *"Welcome to the SmartAgent BD demo! Reply with **fashion**, **food**, **resort**, **support**, or **gym** to see me run that business 👇"* — then loads that persona's mock catalog and behaves exactly like a real client bot (Bangla replies, photo recommendations, order capture, voice notes).

**Why this wins:** a prospect in the restaurant business types `food` and watches the bot take a table reservation; a clothing seller types `fashion` and watches it recommend a Panjabi by photo and confirm COD. They self-select the demo most relevant to them.

### 1.3 Web Widget Demo (On Our Own Website)

Our marketing site (`smartagentbd.online`) already has an animated chat simulation. Upgrade the demo path with:
- A **"Try it live" button** that opens a real, interactive chat widget (not just the scripted animation) wired to the sandbox bot in `demo_mode`.
- The same keyword persona-switching as the FB page, so a website visitor can test all five niches without leaving the page.
- A visible **"This is a live AI — type anything"** badge to build trust.

### 1.4 Video Walkthroughs & Loom Library

Live bots can lag or hit Meta rate limits on a call. **Always have pre-recorded backups.** Maintain a shared Loom/Google Drive folder:

| Video | Length | Purpose |
|-------|--------|---------|
| "60-second close" | ~1 min | Bot closing a COD fashion order in Bangla — the hero clip, used in cold outreach |
| "Voice note magic" | ~1 min | Customer sends a Bangla voice note, bot understands & replies |
| "Photo recommendation" | ~1.5 min | Customer sends a product screenshot, bot matches & quotes price |
| "Restaurant reservation" | ~1.5 min | Table booking flow end-to-end |
| "Admin dashboard tour" | ~3 min | Show the Google Sheet filling with captured orders/leads in real time |
| "Setup in a day" | ~2 min | Time-lapse of us configuring a bot, to sell the "done-for-you" promise |

**Production tips:**
- Record in **both Bangla and Banglish**; most BD F‑commerce owners respond to Banglish.
- Always show the **Google Sheet updating live** in a split screen — proof that data is captured, not lost.
- Keep a **portrait (9:16)** cut of each for Instagram Reels / WhatsApp status / TikTok outreach.
- Brand each with a subtle watermark + "smartagentbd.online" end card.

### 1.5 Tailored 1‑Day Sandbox (Closing Tool for Hot Prospects)

For a prospect on the fence, offer: *"Give me your product list and I'll have your own bot live by tomorrow — free."* Steps:
1. Collect 5–10 of **their** real products (screenshot their page or ask for a list).
2. Seed a temporary persona in the sandbox Data Table with their catalog.
3. Send them a `m.me` link to message *their* bot.
4. On the close call: "This is your store. Imagine this running 24/7 on your real page from Monday."

This converts because the prospect sees **their own brand**, not a generic demo. Time-box it to ~2 hours of effort; only do it for qualified, high-intent leads.

### 1.6 Demo Call Script (Condensed)

1. **Hook (10s):** "Before I explain anything — message this page right now and type `fashion`." (Send link.)
2. **Watch (45s):** Let them converse. Stay silent. Let the bot impress.
3. **Reveal (30s):** "That replied in fluent Bangla, understood a voice note, recommended by photo, and saved the order to a sheet — at 3am, with zero staff."
4. **Bridge:** "Now imagine that on *your* page, with *your* products."
5. **Offer:** Tailored sandbox or straight to Advance Plan onboarding.

---

## 2. Agency AI Chatbot Setup & Data‑Sheet Requirements

This section is the blueprint for **our own agency bot** — the SmartAgent BD assistant that runs on our Website, Facebook, and Instagram to qualify leads, answer service/pricing questions, walk prospects through onboarding, and book demos. It is trained on **our** business via structured Google Sheets / n8n Data Tables.

### 2.1 Architecture Overview

```
[ Website widget ] ┐
[ Facebook Page  ] ┼─► n8n Webhook ─► AI Agent (RAG) ─► Reply
[ Instagram DM   ] ┘                     │
                                         ├─► Google Sheets / Data Tables (knowledge base)
                                         ├─► Pinecone (semantic search over services & FAQs)
                                         └─► Lead capture → smartagent_leads table → Telegram alert
```

- **Knowledge base** = the Sheets/Tables below, embedded into Pinecone so the AI answers *from our real data* (no hallucinated pricing).
- **Lead capture** reuses the existing live `smartagent-lead` webhook → `smartagent_leads` Data Table.
- One bot, three channels, shared brain.

### 2.2 Required Sheets / Data Tables

Build the following as **separate tabs in one Google Sheet** (`SmartAgentBD_AgencyBrain`) or as separate n8n Data Tables. Recommended: real headers on **row 1**, data from **row 2** (keep it simple for our own bot; the row‑4 convention was a Payel quirk).

#### Sheet 1 — `services`
What we sell, so the bot can explain offerings.

| Column | Type | Example | Notes |
|--------|------|---------|-------|
| `service_id` | string (PK) | `svc_fb_bot` | Unique key |
| `service_name` | string | "Facebook Messenger AI Bot" | |
| `category` | string | "Chatbot" / "Automation" / "Add-on" | For grouping |
| `short_desc` | text | "24/7 Bangla AI that closes COD orders" | One-liner for replies |
| `long_desc` | text | Full paragraph | Embedded to Pinecone |
| `key_features` | text (semicolon list) | "Voice notes; Photo recognition; Order capture" | |
| `best_for` | string | "F-commerce, fashion, food" | Niche targeting |
| `is_active` | boolean | TRUE | Hide retired services |

#### Sheet 2 — `pricing`
Single source of truth for plan answers. **Mirror the website exactly** to avoid contradictions.

| Column | Type | Example | Notes |
|--------|------|---------|-------|
| `plan_id` | string (PK) | `basic` / `intermediate` / `advanced` | |
| `plan_name` | string | "Advanced" | |
| `monthly_price_bdt` | number | 24999 | Numeric for math |
| `setup_fee_bdt` | number | 15000 | |
| `message_quota` | number | 30000 | Monthly AI message cap |
| `channels` | string | "FB, IG, WhatsApp" | |
| `headline_features` | text (list) | "Courier API; Inventory sync; Account manager" | |
| `token_tier` | string | "Maximum AI token utilization" | |
| `support_sla` | string | "24/7 priority SLA" | |
| `is_popular` | boolean | FALSE | |

#### Sheet 3 — `onboarding_steps`
Lets the bot explain "what happens after I buy."

| Column | Type | Example |
|--------|------|---------|
| `step_no` | number | 1 |
| `plan_scope` | string | "all" / "advanced" |
| `title` | string | "Kickoff & access" |
| `description` | text | "We send a Business Manager partner request…" |
| `who_does_it` | string | "Client" / "SmartAgent BD" |
| `eta` | string | "Day 1" |

#### Sheet 4 — `faqs`
Highest-value tab. Each row becomes a retrievable answer.

| Column | Type | Example |
|--------|------|---------|
| `faq_id` | string (PK) | `faq_lang` |
| `question` | text | "Does it reply in pure Bangla?" |
| `answer` | text | "Yes — fluent Bangla, Banglish, and English…" |
| `tags` | string | "language, capability" |
| `intent` | string | "capability" / "pricing" / "objection" / "technical" |
| `priority` | number | 1 (higher = surfaced first) |

#### Sheet 5 — `objections`
Sales-grade rebuttals so the bot can handle "too expensive / I can do it myself."

| Column | Type | Example |
|--------|------|---------|
| `objection_id` | string (PK) | `obj_price` |
| `objection` | text | "It's too expensive" |
| `rebuttal` | text | "One admin costs ৳12k+/mo. The bot is ৳2,999 and never sleeps…" |
| `proof_point` | text | "Replaces a 3–5 person moderation team" |

#### Sheet 6 — `leads` (write target)
Where the bot logs captured prospects (can reuse `smartagent_leads`).

| Column | Type | Notes |
|--------|------|-------|
| `lead_id` | string (PK) | UUID/timestamp |
| `created_at` | datetime | |
| `name` | string | |
| `channel` | string | "website" / "facebook" / "instagram" |
| `psid_or_contact` | string | PSID, IG id, phone, or email |
| `business_type` | string | Their niche |
| `page_link` | string | Their FB/IG page |
| `interested_plan` | string | basic/intermediate/advanced |
| `pain_point` | text | Free text |
| `status` | string | "new" / "demo_sent" / "negotiating" / "won" / "lost" |
| `next_action` | string | For follow-up engine |

#### Sheet 7 — `demo_personas` (powers the §1.2 sandbox)
Mock brands the demo bot can impersonate.

| Column | Type | Example |
|--------|------|---------|
| `persona_id` | string (PK) | `fashion` |
| `keyword` | string | "fashion, dress, clothing" |
| `brand_name` | string | "Dhaka Threads" |
| `system_prompt` | text | Persona instructions for this niche |
| `mock_catalog` | text (JSON) | Products w/ price, size, stock, image_url |
| `sample_flow` | text | The ideal scripted close for this niche |

#### Sheet 8 — `settings`
Global bot config (tone, languages, escalation, hours).

| Column | Type | Example |
|--------|------|---------|
| `key` | string (PK) | "default_language" |
| `value` | string | "banglish" |
| `notes` | text | |

Typical rows: `default_language`, `fallback_message`, `escalation_telegram_chat_id`, `business_hours`, `human_handoff_keyword`, `booking_calendar_link`.

### 2.3 Training / Embedding Notes
- Embed `services.long_desc`, `faqs.answer`, and `objections.rebuttal` into **Pinecone** (namespace `agency-brain`) with `text-embedding-3-small`. Store `plan`/`intent`/`tags` as metadata for filtered retrieval.
- Keep **pricing numbers out of the embeddings**; have the AI read the `pricing` sheet directly via a tool call (exactly like the Payel "Sheets-fallback" pattern) so prices are never hallucinated.
- Re-run the embed sync whenever `services` / `faqs` / `objections` change.
- System prompt persona: warm, confident BD sales consultant; Banglish by default; 1–3 line replies; always pushes toward **book a demo** or **start a plan**; never invents pricing or capabilities.

---

## 3. Customer Onboarding & Technical Handover Workflow

This is the standard operating procedure from **"payment received" → "bot live"**, with emphasis on the **Advance Plan** and the correct, secure way to get access to a client's Meta assets.

### 3.1 What Happens Immediately After an Advance Plan Purchase

| Phase | Day | Owner | Action |
|-------|-----|-------|--------|
| **0. Payment & contract** | Day 0 | Client | Pays setup + first month; signs a 1-page service agreement + data-processing consent |
| **1. Welcome & kickoff** | Day 0–1 | Agency | Send welcome email + onboarding form + book a 30‑min kickoff call |
| **2. Asset access** | Day 1 | Both | Client adds us as a **partner in Meta Business Manager** with scoped asset permissions (see §3.2). **Never ask for their password.** |
| **3. Discovery & data** | Day 1–2 | Client | Client fills the onboarding sheet: product catalog, prices, courier, FAQs, tone, escalation contact |
| **4. Build & configure** | Day 2–4 | Agency | Clone the multi-tenant workflow, add a tenant row, load catalog, embed to Pinecone, set persona, wire courier/inventory (Advance) |
| **5. System User token** | Day 3 | Agency | Generate a **non-expiring System User token** scoped to their Page/IG/WhatsApp (see §3.3) |
| **6. Internal QA** | Day 4 | Agency | Test in sandbox: Bangla replies, voice, vision, order capture, escalation, courier API, inventory sync |
| **7. Go-live** | Day 5 | Agency | Subscribe the Page to the webhook, flip the tenant `status=active`, send test message from a real account |
| **8. Client UAT & training** | Day 5–6 | Both | Walk client through the dashboard sheet, escalation, takeover, and how to read captured orders |
| **9. Handover & support** | Day 6+ | Agency | Send handover doc, assign account manager (Advance), start the support SLA clock |

**Onboarding form must collect:** business name, Page + IG + WhatsApp links, product/menu list with prices & stock, courier preference + COD areas, brand tone (formal/casual, emoji usage), escalation phone/Telegram, business hours, return/refund policy, and any "never say" rules.

### 3.2 Page Access — The Correct Industry Protocol

> **Do NOT ask the client to make you a full Page Admin via the page's "Add Person" by email, and NEVER ask for their Facebook login/password.** That is insecure, unprofessional, and against Meta policy. It also breaks the moment they change their password or lose access.

**The professional standard = Meta Business Manager (Business Suite) partner sharing with scoped asset permissions.**

There are two acceptable patterns:

**Pattern A — Partner Access (preferred, agency-grade):**
1. We have our own **Meta Business Manager** ("SmartAgent BD") with a Business ID.
2. The client goes to **business.facebook.com → Business Settings → Partners → Add Partner** and enters our Business ID.
3. They assign us **only the specific assets and tasks** we need.

**Pattern B — Direct asset assignment:** If the client doesn't have a Business Manager, we can send them a partner request from our side, or they add our **business** (not a personal account) to the asset. Still scoped, still no password.

**Exact asset permissions to request (least-privilege):**

| Asset | Permission level | Why we need it |
|-------|------------------|----------------|
| **Facebook Page** | *Manage / Messaging* tasks (Content + Messages + Community Activity). **Not** full admin/billing. | Send/receive DMs, subscribe webhooks, reply to comments |
| **Instagram Account** | *Messaging* + Content (linked via the Page or in Business Settings) | IG DM automation |
| **WhatsApp Business Account (WABA)** | Asset access + a registered phone number | WhatsApp Cloud API messaging |
| **App / System User** | Created on **our** side, granted access to their Page/IG/WABA | Token generation (see §3.3) |

**What we explicitly do NOT need / do NOT ask for:** Page billing/finance role, ad account spending authority (unless they buy ads management), or business admin control of their whole Business Manager. Keeping scope minimal protects both parties and makes the sale easier ("we only get messaging access, nothing financial").

**Talking point for the client:** *"You stay the owner of everything. You're inviting our business as a partner with messaging-only access — like giving a key to one door, not the whole building. You can revoke it anytime in two clicks."*

### 3.3 Generating & Managing Non‑Expiring Meta System User Tokens (No Password Needed)

Short-lived Page tokens expire constantly (this repeatedly broke the Payel bot). The **permanent fix is a System User token from Business Manager**, which does not require — and should never use — the client's password.

**Concept:** A **System User** is a non-human "service account" that lives in a Business Manager and can hold long-lived/non-expiring tokens scoped to assets that Business Manager controls. Because access flows through **partner asset sharing** (§3.2), we generate the token in **our** Business Manager against **their** shared Page — no client login involved.

**Step-by-step:**

1. **Prerequisite:** Client has shared their Page (and IG/WABA) with our Business Manager via Partner Access (§3.2).
2. In **our** Business Manager → **Business Settings → Users → System Users → Add**. Create a System User, e.g. `smartagent-bot-service`, role **Admin** or **Employee**.
3. **Assign assets** to that System User: add the client's shared Page (and IG/WABA) with the **Messaging / Manage** tasks.
4. Attach our **Meta App** (the one configured with `pages_messaging`, `pages_manage_metadata`, `pages_read_engagement`, `pages_manage_engagement`, `instagram_basic`, `instagram_manage_messages`, and WhatsApp scopes as needed).
5. **Generate Token** on the System User → select our App → select the required permissions/scopes → generate.
6. Choose **token expiration = Never** (System User tokens support non-expiring tokens). Copy it **once** — it is shown only once.
7. **Verify** the token: `GET /me?access_token=…` and `GET /me/accounts` (or the page node) should return the client's Page with no expiry error.
8. **Store securely** and wire it into the tenant: update the `tenants` Data Table `meta_token` column for that client's `page_id` (via the helper-workflow upsert pattern). Subscribe the Page to the webhook with this token.

**Token hygiene / management:**
- **Never** paste tokens into chat, commits, or client emails. Store in a secrets manager / encrypted store; the Data Table value is the live reference.
- One System User token **per client page** (don't share one token across tenants) so revocation is isolated.
- Keep a **token registry** (client, page_id, app, scopes, created_at, last_verified). Add a scheduled health-check that calls `GET /me` weekly and alerts on error 190.
- If a client offboards, **remove their asset from the System User** and delete the token — access dies instantly, cleanly, and without touching their account password.
- Re-validate after any Meta app review or permission change.

---

## 4. Niche‑Specific Chatbot Roadmaps (Blueprints)

Each blueprint = (a) the **data the bot needs**, (b) the **core intents/flows**, (c) a **conversion-focused sample conversation**, and (d) the **primary conversion goal**. All flows assume Banglish/Bangla replies, 1–3 lines, with human escalation on anything sensitive.

> **Universal flow skeleton (applies to every niche):**
> `Greeting → Intent detection → Retrieve from catalog/FAQ → Answer + upsell → Capture lead/booking → Confirm → (Escalate if needed) → Follow-up`

---

### 4.1 Restaurant 🍽️

**Conversion goal:** drive table reservations, delivery orders, and answer location/timing instantly so no hungry customer is lost.

**Data needed:**

| Table | Key columns |
|-------|-------------|
| `menu` | item_id, name, category, price, description, is_available, photo_url, is_signature |
| `branches` | branch_id, area, address, maps_link, open_time, close_time, phone |
| `reservations` | res_id, name, phone, branch, party_size, date, time, status, notes |
| `delivery_zones` | area, delivery_fee, eta_minutes, min_order |

**Core intents & flows:**
- **Menu browsing:** "ki ki ache?" → show categories → drill into items with photos + prices → highlight signature dishes → upsell combos/drinks.
- **Table reservation hook:** detect "table"/"booking"/"reserve" → ask party size → date → time → branch → capture name+phone → write to `reservations` (status=pending) → confirm + send branch maps link → escalate to branch manager.
- **Location/timing:** "kothay?"/"koto tay khola?" → read `branches` → reply address + maps link + today's hours.
- **Delivery:** ask area → check `delivery_zones` → quote fee + ETA + min order → take order → capture → confirm.

**Sample conversation:**
```
Customer: ajke raat e 4 jon er jonno table hobe?
Bot: Oboshyoi! 🍽️ Konwn branch — Dhanmondi naki Gulshan?
Customer: dhanmondi
Bot: Dhanmondi te 4 jon, ajke raat. Koy tay astechen? (e.g. 8:30 PM)
Customer: 8.30
Bot: Perfect ✅ Apnar naam ar phone number ta din, table reserve kore felchi.
Customer: Rafi, 017xxxxxxxx
Bot: Done Rafi bhai! Dhanmondi branch, 4 jon, ajke 8:30 PM — reserved 🎉
     Maps: <link>. Dekha hobe! (Confirmation SMS পাঠানো হলো)
```

**Escalation triggers:** large party (>10), event/catering, complaints, allergy/special requests.

---

### 4.2 Resort / Hotel 🏨

**Conversion goal:** capture booking inquiries and push to a direct booking link / lead form — beat OTAs on commission by closing direct.

**Data needed:**

| Table | Key columns |
|-------|-------------|
| `room_types` | room_id, name, occupancy, price_per_night, weekend_price, amenities, photo_url, is_active |
| `availability` | room_id, date, rooms_available |
| `amenities` | amenity_id, name, description, is_free, photo_url |
| `booking_leads` | lead_id, name, phone, room_type, check_in, check_out, guests, status, quote_sent |

**Core intents & flows:**
- **Availability inquiry:** detect dates + guests → check `availability` → reply available room types with price/night → if unavailable, suggest nearest dates.
- **Amenity showcase:** "ki ki ache?" → carousel of amenities (pool, restaurant, AC, view) with photos → tie to room types.
- **Direct booking redirect / lead capture:** push the official **booking link** with dates pre-filled, OR capture name+phone+dates → `booking_leads` → escalate to reservations team → send a quote.
- **Pricing transparency:** weekday vs weekend, packages (honeymoon, family), check-in/out times, cancellation policy from FAQ.

**Sample conversation:**
```
Customer: 25-27 e 2 jon er room available?
Bot: Welcome to Sylhet Hills Resort 🏞️ 25–27, 2 jon er jonno —
     Deluxe Hill View (৳7,500/night) ar Premium Suite (৳11,000/night) available ✅
Customer: deluxe ta dekhte kemon?
Bot: <photo> Deluxe Hill View — balcony, valley view, AC, free breakfast 🌄
     Direct book korle 10% off: <booking link>
     Naki ami apnar jonno hold kore rakhbo? Naam+phone din 😊
Customer: hae, Tarek 018xxxxxxxx
Bot: Hold kora holo Tarek bhai ✅ 25–27, Deluxe Hill View, 2 guest.
     Amader reservation team 10 min er moddhe call dibe. Dhonnobad! 🙏
```

**Escalation triggers:** group/corporate booking, custom packages, payment, special needs.

---

### 4.3 Clothing / Dress Brand 👗

**Conversion goal:** recommend the right size & product, confirm stock, close the COD order, and let customers self-serve order tracking.

**Data needed:**

| Table | Key columns |
|-------|-------------|
| `products` | product_id, name, category, price, sizes, colors, stock, fabric, photo_urls, is_active |
| `size_chart` | category, size, chest, length, waist, fit_notes |
| `orders` | order_id, customer, phone, address, items, total, courier, status, tracking_id |
| `inventory` | product_id, size, color, qty |

**Core intents & flows:**
- **Catalog browsing:** category → show products with photos + price → filter by color/size.
- **Size recommendation:** ask height/weight or usual size → read `size_chart` → recommend size + fit notes → reduce returns.
- **Stock check:** product + size + color → read `inventory` → confirm available or suggest alternative color/size.
- **Photo-to-product:** customer sends a screenshot → vision match → quote price + stock.
- **Order capture (COD):** collect items → name → phone → address → confirm total + delivery charge → write to `orders` → assign courier (Steadfast) → confirm.
- **Order tracking status:** customer sends order id or phone → read `orders` → reply current status + courier tracking link.

**Sample conversation:**
```
Customer: <sends photo of a panjabi> eta ache?
Bot: Haan! ✨ Premium Panjabi — ৳1,950. White ar Navy ache.
     Apnar size ta janle ami best fit ta bole dibo 😊
Customer: amar height 5'9", weight 70kg
Bot: Apnar jonno size L perfect hobe (chest 42", length 30") 👕
     White naki Navy nibo?
Customer: navy, ekta lagbe
Bot: Navy L — stock ache ✅ COD te pathai? Naam, phone, address din.
Customer: ...
Bot: Order confirmed 🎉 Premium Panjabi (Navy, L) ৳1,950 + ৳60 delivery.
     Tracking link SMS e pathano hobe. Dhonnobad!
```

**Escalation triggers:** bulk/wholesale, custom tailoring, exchange/return disputes.

---

### 4.4 Gym / Fitness Center 💪

**Conversion goal:** book free trials and convert membership inquiries; manage trainer/slot availability to fill the calendar.

**Data needed:**

| Table | Key columns |
|-------|-------------|
| `membership_plans` | plan_id, name, duration, price, perks, is_popular |
| `trainers` | trainer_id, name, specialty, available_days, available_slots, photo_url |
| `trial_bookings` | booking_id, name, phone, goal, preferred_date, slot, trainer, status |
| `class_schedule` | class_id, name, day, time, trainer, capacity, booked |

**Core intents & flows:**
- **Membership plans:** "koto taka?" → show plans (monthly/quarterly/yearly) with perks → highlight popular → push trial first.
- **Trainer availability:** specialty (weight loss, bodybuilding, women's) → read `trainers` → show available days/slots + bio.
- **Free trial booking (primary hook):** detect "trial"/"free" → ask fitness goal → preferred date → offer open slots from `class_schedule`/trainer → capture name+phone → write `trial_bookings` (status=pending) → confirm + reminder.
- **Slot management:** check capacity before confirming; if full, offer next available slot; prevent double-booking.

**Sample conversation:**
```
Customer: free trial ase?
Bot: Haan! 💪 1-day FREE trial ache. Apnar goal ki — weight loss, muscle gain, naki general fitness?
Customer: weight loss
Bot: Great! 🔥 Weight-loss specialist Trainer Sami available — Sat & Mon, sokal 8টা / bikel 6টা.
     Konwn slot e astchen?
Customer: shonibar bikel
Bot: Shonibar 6 PM e ekta slot khali ache ✅ Naam ar phone din, book kore felchi.
Customer: Imran 019xxxxxxxx
Bot: Booked Imran bhai! 🎉 FREE trial — Shonibar 6 PM, Trainer Sami.
     Membership plan gulo o pathai dichchi 👇 (1 mo ৳2,000 · 3 mo ৳5,000 · 1 yr ৳15,000)
     Trial er age ekta reminder pathabo. See you! 💪
```

**Escalation triggers:** corporate/group membership, personal-training packages, medical conditions, refunds.

---

## Appendix — Cross‑Niche Best Practices

- **Always capture name + phone** before ending any high-intent conversation — a captured lead is the real product.
- **Confirm, don't assume:** echo back the order/booking details before writing to the sheet.
- **Fail gracefully:** if the bot doesn't know, say "ek min, check kore boltesi" and escalate — never hallucinate price, stock, or availability.
- **Emoji discipline:** 1–2 premium/cheerful emojis per message (🛍️ ✨ 🥰 💪 🍽️), never the flat/"senti" set.
- **Gender-neutral address:** use "আপু/ভাইয়া" together unless gender is clear.
- **Every niche bot writes to a `leads`/`orders`/`bookings` table** and pings a Telegram/WhatsApp alert so the human owner sees conversions in real time.
- **Mirror the website pricing** in the bot's pricing sheet to avoid contradictions.

---

_© SmartAgent BD — internal operations document. Do not share tokens, client credentials, or this guide's access section externally._
