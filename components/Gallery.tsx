"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PHOTOS } from "@/content/site";
import type { Content } from "@/content/types";

const src = (id: string) => `/media/photos/${id}.webp`;

export function Gallery({ c }: { c: Content["gallery"] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const touchX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);

  const open = (i: number, btn: HTMLButtonElement) => {
    opener.current = btn;
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback((d: number) => setIndex((i) => (i + d + PHOTOS.length) % PHOTOS.length), []);

  useEffect(() => {
    const dlg = dialog.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    // <dialog> handles Esc and keeps focus inside; give focus back on close.
    const onClose = () => requestAnimationFrame(() => opener.current?.focus());
    dlg.addEventListener("keydown", onKey);
    dlg.addEventListener("close", onClose);
    return () => {
      dlg.removeEventListener("keydown", onKey);
      dlg.removeEventListener("close", onClose);
    };
  }, [step]);

  const photo = PHOTOS[index];

  return (
    <>
      <div className="masonry">
        {PHOTOS.map((p, i) => (
          <button key={p.id} type="button" className="masonry-item" onClick={(e) => open(i, e.currentTarget)}>
            <img src={src(p.id)} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={c.title}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <img key={photo.id} src={src(photo.id)} alt={photo.alt} width={photo.w} height={photo.h} />
        <p className="lb-count" aria-live="polite">
          {index + 1} / {PHOTOS.length}
        </p>
        <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label={c.prev}>
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label={c.next}>
          <span aria-hidden="true">›</span>
        </button>
        <button type="button" className="lb-btn lb-close" onClick={close} aria-label={c.close} autoFocus>
          <span aria-hidden="true">×</span>
        </button>
      </dialog>
    </>
  );
}
