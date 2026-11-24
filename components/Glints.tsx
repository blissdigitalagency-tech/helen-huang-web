import type { CSSProperties } from "react";
import { GlintPaths } from "./icons";

const COLOURS = ["#e9cb85", "#d9b56a", "#f3dca0", "#c9a24e"];

// Seeded PRNG so server and client render identical positions.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
const sec = (n: number) => `${n.toFixed(1)}s`;

/** One decorative glitter layer. Place inside a positioned parent. */
export function Glints({ seed, glints = 4, dots = 16 }: { seed: number; glints?: number; dots?: number }) {
  const r = mulberry32(seed);
  const stars = Array.from({ length: glints }, () => {
    const size = Math.round(12 + r() * 22);
    const dur = 4.5 + r() * 3;
    return {
      size,
      fill: COLOURS[Math.floor(r() * COLOURS.length)],
      style: {
        left: pct(r() * 0.96),
        top: pct(r() * 0.94),
        width: size,
        height: size,
        animationDuration: sec(dur),
        animationDelay: sec(-r() * dur),
      } as CSSProperties,
    };
  });
  const specks = Array.from({ length: dots }, () => {
    const size = +(1.5 + r() * 1.5).toFixed(1);
    const dur = 3 + r() * 3;
    return {
      left: pct(r()),
      top: pct(r()),
      width: size,
      height: size,
      animationDuration: sec(dur),
      animationDelay: sec(-r() * dur),
    } as CSSProperties;
  });

  return (
    <div className="fx" aria-hidden="true">
      {stars.map((s, i) => (
        <svg key={`g${i}`} className="fx-glint" viewBox="0 0 48 48" style={s.style} focusable="false">
          <GlintPaths fill={s.fill} />
        </svg>
      ))}
      {specks.map((style, i) => (
        <span key={`d${i}`} className="fx-dot" style={style} />
      ))}
    </div>
  );
}
