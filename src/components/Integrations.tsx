"use client";

import { useLang } from "@/lib/LanguageContext";
import { T } from "@/lib/content";
import { BRAND_LOGOS } from "./BrandLogos";
import { SectionHeading } from "./Heading";
import { Reveal } from "@/lib/motion";

// hexagon node positions (percent), matched 1:1 to BRAND_LOGOS order
const POS = [
  { x: 50, y: 10 },  // messenger (top)
  { x: 85, y: 30 },  // instagram (top-right)
  { x: 85, y: 70 },  // whatsapp (bottom-right)
  { x: 50, y: 90 },  // shopify (bottom)
  { x: 15, y: 70 },  // telegram (bottom-left)
  { x: 15, y: 30 },  // facebook (top-left)
];

// per-spoke colour matched to each brand (BRAND_LOGOS order)
const WIRE = ["#0084FF", "#D62976", "#25D366", "#95BF47", "#29A9EB", "#1877F2"];

// perimeter edges connecting adjacent nodes → node-to-node mesh
const EDGES = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]];

export function Integrations() {
  const { lang } = useLang();
  const t = T[lang].integrations;

  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/[0.06] blur-[150px]" />
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} accent={t.titleAccent} sub={t.sub} />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 aspect-square w-full max-w-xl">
            {/* wires */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
              {/* node-to-node perimeter mesh */}
              {EDGES.map(([a, b], i) => (
                <line
                  key={`e${i}`}
                  x1={POS[a].x} y1={POS[a].y} x2={POS[b].x} y2={POS[b].y}
                  stroke="#9aa3c8" strokeOpacity="0.14" strokeWidth="0.35"
                />
              ))}
              {/* spokes from the core to each brand */}
              {POS.map((p, i) => (
                <g key={`s${i}`}>
                  <line x1="50" y1="50" x2={p.x} y2={p.y} stroke={WIRE[i]} strokeOpacity="0.4" strokeWidth="0.5" />
                  <line
                    x1="50" y1="50" x2={p.x} y2={p.y}
                    stroke={WIRE[i]} strokeOpacity="0.95" strokeWidth="0.7"
                    strokeDasharray="3 6" className="animate-dash"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  />
                  {/* energy pulse travelling out to the logo */}
                  <circle r="1" fill={WIRE[i]}>
                    <animateMotion dur="2.6s" begin={`${i * 0.35}s`} repeatCount="indefinite" path={`M50,50 L${p.x},${p.y}`} />
                    <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
                  </circle>
                  {/* connection node dot at the brand anchor */}
                  <circle cx={p.x} cy={p.y} r="1.1" fill={WIRE[i]} fillOpacity="0.9" />
                </g>
              ))}
            </svg>

            {/* central AI core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full">
                <span className="absolute inset-0 rounded-full border border-cyan/40 animate-ping-slow" style={{ transformOrigin: "center" }} />
                <span className="absolute inset-2 rounded-full border border-purple/40 animate-ping-slow" style={{ animationDelay: "1.2s", transformOrigin: "center" }} />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-purple shadow-[0_0_50px_-6px_rgba(43,231,255,0.7)]">
                  <span className="font-display text-lg font-bold text-bg">AI</span>
                </div>
              </div>
            </div>

            {/* floating brand logos */}
            {BRAND_LOGOS.map((b, i) => {
              const p = POS[i];
              const { Comp } = b;
              return (
                <div
                  key={b.id}
                  className="absolute animate-float"
                  style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%,-50%)", animationDelay: `${i * 0.6}s` }}
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line-2 bg-surface/90 backdrop-blur transition hover:scale-110 md:h-[4.5rem] md:w-[4.5rem]"
                    style={{ boxShadow: `0 10px 40px -12px ${b.glow}` }}
                  >
                    <Comp className="h-8 w-8 md:h-9 md:w-9" />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
