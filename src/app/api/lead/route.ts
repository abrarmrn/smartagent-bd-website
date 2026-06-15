import { NextResponse } from "next/server";

// Receives lead-form submissions and forwards them to the n8n webhook.
// The webhook URL is kept server-side (LEAD_WEBHOOK_URL) so it's never
// exposed to the browser. If it's not configured, we still 200 so local
// dev / preview doesn't error — but we log a warning.

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Minimal validation: need a name and at least one way to reach them.
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const whatsapp = String(body.whatsapp || "").trim();
  if (!name || (!email && !whatsapp)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[lead] LEAD_WEBHOOK_URL not set — submission not forwarded:", { name, email, whatsapp });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      // n8n webhooks should respond quickly; cap the wait.
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[lead] n8n webhook returned", res.status);
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[lead] failed to forward to n8n:", err);
    return NextResponse.json({ ok: false, error: "forward_failed" }, { status: 502 });
  }
}
