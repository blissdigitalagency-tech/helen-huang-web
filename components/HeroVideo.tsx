"use client";

import { useEffect, useRef } from "react";

const SRC = "/media/hero-loop.mp4";
const POSTER = "/media/hero-poster.jpg";

/** Decorative background loop. Poster only for reduced motion or Save-Data. */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;

    v.src = SRC;
    v.muted = true;
    const play = () => {
      v.play().catch(() => {});
    };
    play();

    // Pause while the hero is off screen.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? play() : v.pause()));
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} className="hero-video" poster={POSTER} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />;
}
