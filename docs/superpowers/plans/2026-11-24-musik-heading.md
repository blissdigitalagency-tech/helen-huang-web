# Musik Heading Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** The Musik section heading becomes a big "Musik" / "Music" with no small label above it.

**Architecture:** Copy-only change in the locale files plus removing the kicker line from the section markup.

**Tech Stack:** Next.js 16 static export, TypeScript.

**Spec:** `docs/superpowers/specs/2026-11-24-musik-heading-design.md`

## Global Constraints

- Heading style unchanged (white, upright, same size as other section headings).
- Buttons, player and layout unchanged. No commits (user commits on request).

## Review Focus

- English page shows "Music", not "Musik" (grep `out/en/index.html`).
- "Dengarkan Sekarang" / "Listen Now" no longer appear anywhere (grep `out/`).

---

### Task 1: Big "Musik" heading

**Files:** Modify `content/types.ts` (`music`), `content/id.ts`, `content/en.ts`, `components/SitePage.tsx` (`.listen-col`)

- [ ] **Step 1: RED.** `grep -c "Dengarkan Sekarang" out/index.html` → 1 (old heading present).
- [ ] **Step 2:** `Content["music"]` becomes `{ title: string }`; `id.ts` `music: { title: "Musik" }`; `en.ts` `music: { title: "Music" }`; remove the `<p className="kicker">{c.music.label}</p>` line in `.listen-col`.
- [ ] **Step 3: GREEN.** `npx tsc --noEmit && npm run build` passes; `grep -cE "Dengarkan Sekarang|Listen Now" out/index.html out/en/index.html` → 0 each; `grep -c ">Musik</h2>" out/index.html` → 1; `grep -c ">Music</h2>" out/en/index.html` → 1.
- [ ] **Step 4:** Preview at 1440 px: heading on one line directly above the three buttons.
