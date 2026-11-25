"use client";

import { useEffect, useRef } from "react";

// Six Noya performance scenes: cropped wide for desktop/tablet, natural vertical for phones.
const DESKTOP = { src: "/media/hero-loop.mp4", poster: "/media/hero-poster.jpg" };
const PHONE = { src: "/media/hero-loop-mobile.mp4", poster: "/media/hero-poster-mobile.jpg" };
const PHONE_QUERY = "(max-width: 767px)";

/** Decorative background loop. Poster only for reduced motion or Save-Data. */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const media = window.matchMedia(PHONE_QUERY).matches ? PHONE : DESKTOP;
    v.poster = media.poster;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;

    v.src = media.src;
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

  return <video ref={ref} className="hero-video" poster={DESKTOP.poster} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} />;
}
