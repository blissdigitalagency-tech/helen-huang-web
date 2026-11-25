"use client";

import { useEffect, useRef, useState } from "react";
import type { Content, Locale } from "@/content/types";
import { SHOW_PERFORMANCES } from "./SitePage";

const LOGO = "/media/logo/helen-huang-logo-cropped.webp";

function navLinks(nav: Content["nav"]) {
  return [
    { href: "#music", label: nav.music },
    { href: "#discography", label: nav.discography },
    { href: "#awards", label: nav.awards },
    ...(SHOW_PERFORMANCES ? [{ href: "#performances", label: nav.performances }] : []),
  ];
}

/** ID / EN switch. Keeps the current section (hash) and any UTM query. */
function LangSwitch({ locale }: { locale: Locale }) {
  const go = (target: Locale) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (target === locale) return;
    const base = target === "id" ? "/" : "/en/";
    window.location.href = base + window.location.search + window.location.hash;
  };
  return (
    <span className="lang">
      <a href="/" hrefLang="id" lang="id" aria-current={locale === "id" ? "true" : undefined} onClick={go("id")}>
        ID
      </a>
      <span aria-hidden="true">/</span>
      <a href="/en/" hrefLang="en" lang="en" aria-current={locale === "en" ? "true" : undefined} onClick={go("en")}>
        EN
      </a>
    </span>
  );
}

export function Header({ c }: { c: Content }) {
  const links = navLinks(c.nav);
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const lastOpener = useRef<HTMLButtonElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  // Slim sticky header once the hero is out of view.
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), { rootMargin: "-120px 0px 0px 0px" });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Full-screen menu: lock scroll, Esc closes, focus moves in and back.
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("no-scroll");
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
      lastOpener.current?.focus();
    };
  }, [open]);

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    lastOpener.current = e.currentTarget;
    setOpen(true);
  };

  const tools = (
    <div className="top-tools">
      <LangSwitch locale={c.locale} />
      <a className="btn btn-lux btn-sm" href="#booking">
        {c.nav.booking}
      </a>
      <button type="button" className="menu-btn" aria-expanded={open} aria-controls="menu" onClick={openMenu}>
        <span className="menu-lines" aria-hidden="true" />
        <span className="sr-only">{c.nav.menu}</span>
      </button>
    </div>
  );

  return (
    <>
      {/* Header over the hero */}
      <header className="top-bar">
        <nav className="top-nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        {tools}
      </header>

      {/* Slim sticky header after the hero */}
      <div className={`sticky-bar${stuck ? " is-on" : ""}`} aria-hidden={!stuck} inert={!stuck}>
        <a href="#top" className="sticky-logo">
          <img src={LOGO} alt="Helen Huang" width={889} height={514} />
        </a>
        {tools}
      </div>

      {/* Mobile menu overlay */}
      <div id="menu" className="menu" role="dialog" aria-modal="true" aria-label={c.nav.menu} hidden={!open}>
        <button ref={closeBtn} type="button" className="menu-close" onClick={() => setOpen(false)}>
          <span aria-hidden="true">×</span>
          <span className="sr-only">{c.nav.close}</span>
        </button>
        <nav aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-lux" href="#booking" onClick={() => setOpen(false)}>
            {c.nav.booking}
          </a>
        </nav>
        <LangSwitch locale={c.locale} />
      </div>
    </>
  );
}
