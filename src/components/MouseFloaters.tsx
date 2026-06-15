"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

type BlobDef = { color: string; depth: number; floatClass: string; style: React.CSSProperties };

const BLOBS: BlobDef[] = [
  { color: "bg-cyan/20", depth: 45, floatClass: "animate-float", style: { top: "8%", left: "6%", width: "22rem", height: "22rem" } },
  { color: "bg-purple/20", depth: -60, floatClass: "animate-float-slow", style: { top: "16%", right: "4%", width: "26rem", height: "26rem" } },
  { color: "bg-lime/12", depth: 34, floatClass: "animate-float", style: { bottom: "4%", left: "20%", width: "18rem", height: "18rem" } },
  { color: "bg-purple/15", depth: -38, floatClass: "animate-float-slow", style: { bottom: "10%", right: "22%", width: "16rem", height: "16rem" } },
];

function Blob({ mx, my, def }: { mx: MotionValue<number>; my: MotionValue<number>; def: BlobDef }) {
  const x = useTransform(mx, [-0.5, 0.5], [-def.depth, def.depth]);
  const y = useTransform(my, [-0.5, 0.5], [-def.depth, def.depth]);
  return <motion.div style={{ x, y, ...def.style }} className={`absolute rounded-full blur-[90px] ${def.color} ${def.floatClass}`} />;
}

export function MouseFloaters({ className = "" }: { className?: string }) {
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 38, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 38, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mxRaw.set(e.clientX / window.innerWidth - 0.5);
      myRaw.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mxRaw, myRaw]);

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {BLOBS.map((b, i) => (
        <Blob key={i} mx={mx} my={my} def={b} />
      ))}
    </div>
  );
}
