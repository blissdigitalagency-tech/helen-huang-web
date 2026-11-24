"use client";

import { useEffect } from "react";

/** Scroll reveals, and pauses glitter layers that are off screen. */
export function Motion() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const fx = document.querySelectorAll<HTMLElement>(".fx");

    const revealIO = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealIO.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => revealIO.observe(el));

    const fxIO = new IntersectionObserver((entries) =>
      entries.forEach((e) => e.target.classList.toggle("is-paused", !e.isIntersecting))
    );
    fx.forEach((el) => fxIO.observe(el));

    return () => {
      revealIO.disconnect();
      fxIO.disconnect();
    };
  }, []);

  return null;
}
