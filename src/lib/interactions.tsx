"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/* ------------------------------------------------------------------
   SpotlightCard — a soft champagne glow follows the cursor across the
   card; pairs with the .lux-card hover border for an elegant effect.
------------------------------------------------------------------ */
export function SpotlightCard({
  children,
  className = "",
  radius = 360,
}: {
  children: ReactNode;
  className?: string;
  radius?: number;
}) {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const bg = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, rgba(227,192,129,0.12), transparent 70%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }
  function onLeave() {
    x.set(-9999);
    y.set(-9999);
  }

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className={`lux-card group relative overflow-hidden ${className}`}>
      <motion.div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: bg }} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------
   TiltCard — subtle 3D tilt toward the cursor. Great for portraits.
------------------------------------------------------------------ */
export function TiltCard({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max);
    rx.set(-py * max);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`[transform-style:preserve-3d] ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Parallax — translates children on scroll for depth.
------------------------------------------------------------------ */
export function Parallax({
  children,
  className = "",
  distance = 80,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export { motion };
