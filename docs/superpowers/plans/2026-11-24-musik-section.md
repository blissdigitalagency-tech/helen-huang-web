# Musik Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the glass-card Musik section with an open two-column layout: Spotify player left, a faded stage photo right with "Listen now" and three stacked buttons over it.

**Architecture:** Same pattern as the Discography (`.disco-sec`) and Awards (`.awards-sec`) sections: an absolutely positioned, masked photo layer, a dark wash pseudo-element behind the text column, and content in `.wrap`. Copy lives in `content/{id,en}.ts`; photos in `content/site.ts`.

**Tech Stack:** Next.js 16 static export, React 19, TypeScript, plain CSS (`app/globals.css`), Pillow for the image crop.

**Spec:** `docs/superpowers/specs/2026-11-24-musik-section-design.md`

## Global Constraints

- No colour grading or overlay on any photo (user removed all warm grades).
- Photo 37 only as a tight stage crop with no identifiable guests (dev kit do-not-use list).
- Heading style matches "Winning Awards": white, no italic.
- Streaming buttons stay `.btn-ghost` glass pills; the black-pill A/B choice is out of scope.
- Do not commit; the user commits on request.
- Project has no test runner: verification is `npx tsc --noEmit`, `npm run build`, grep on `out/`, and the browser preview at 1440 px and 375 px.

## Review Focus

- Guests visible at the crop's right edge: the exported image must end left of the crowd behind the cake tower (check the exported file visually).
- Text over the photo on wide screens: the heading and buttons must stay readable where the photo reaches under them (preview at 1440 px).
- Spotify iframe height on phones: the player must not overflow or push the page sideways at 375 px (`scrollWidth === innerWidth`).
- English page: `/en/` must show "Listen now" and "Music", not Indonesian text (grep `out/en/index.html`).
- Removed copy: "Lagu-lagu Helen" / "Helen’s songs" must no longer appear in either page (grep `out/`).

---

### Task 1: Photo asset and content

**Files:**
- Create: `public/media/photos/music-37.webp`
- Modify: `content/types.ts` (the `music` block), `content/id.ts`, `content/en.ts`, `content/site.ts` (`PHOTOS`)

**Interfaces:**
- Produces: `Content["music"] = { label: string; title: string }`; `PHOTOS.music: Photo` with id `"music-37"`.

- [ ] **Step 1: Export the crop.** From `37.png` (1080 × 1350) crop box `(0, 0, 575, 452)` (Helen, lanterns, spotlight, most of the cake tower; crowd excluded), save as WebP quality 85 to `public/media/photos/music-37.webp`. Open the result and confirm no guest faces are visible.
- [ ] **Step 2: Change `music` in `content/types.ts`** to `{ label: string; title: string }` (drop `listenLabel`, `listenTitle`).
- [ ] **Step 3: Set copy.** `id.ts`: `music: { label: "Musik", title: "Dengarkan sekarang" }`. `en.ts`: `music: { label: "Music", title: "Listen now" }`.
- [ ] **Step 4: Add `music: p("music-37", 575, 452, "Helen Huang singing on a stage with red lanterns under a spotlight")` to `PHOTOS` in `content/site.ts`.**
- [ ] **Step 5: Run `npx tsc --noEmit`.** Expected: errors only in `components/SitePage.tsx` (old `listenLabel`/`listenTitle` references), fixed in Task 2.

### Task 2: Section markup and styles

**Files:**
- Modify: `components/SitePage.tsx` (the `#music` section), `app/globals.css` (replace the "Music: listen card" block and the `#music .wrap::before` glow)

**Interfaces:**
- Consumes: `c.music.label`, `c.music.title`, `PHOTOS.music`, `LINKS.spotify | appleMusic | youtube | spotifyEmbed`, existing `Img`, `Glints`.

- [ ] **Step 1: Rewrite the `#music` section** as `section#music.section.bg.music-sec` containing `div.music-photo > Img`, `Glints`, and `div.wrap.music-grid` with two children: the Spotify `iframe` (unchanged attributes) and `div.listen-col` holding `p.kicker` (label), `h2` (title) and `div.listen-buttons` with the three `a.btn.btn-ghost` links (same hrefs, `target="_blank" rel="noopener"`).
- [ ] **Step 2: Replace the CSS.** Remove `.listen*` rules and `#music .wrap::before`. Add, mirroring `.awards-sec`: `.music-photo` absolute right, `width: min(58%, 900px)`, the same horizontal/vertical mask as `.awards-photo`, `object-position: 45% 40%`; `.music-sec::before` dark wash from the right edge of the left column (transparent at the photo's centre, ~0.85 behind `.listen-col`); `.music-grid` two columns `minmax(0,1fr) minmax(0,1fr)`, gap `clamp(40px,6vw,88px)`, `align-items: center`; iframe `border-radius: 18px`; `.listen-buttons` flex column, gap 12px, buttons `width: min(300px, 100%)`; `.listen-col h2` same size as `.awards h2`. Under 900 px: photo static on top (height 360px, bottom fade), wash hidden, grid one column with `.listen-col` before the iframe (`order: -1`).
- [ ] **Step 3: Run `npx tsc --noEmit && npm run build`.** Expected: no errors, 4 static pages generated.
- [ ] **Step 4: Grep the output.** `grep -c "Dengarkan sekarang" out/index.html` → 1; `grep -c "Listen now" out/en/index.html` → 1; `grep -cE "Lagu-lagu Helen|Helen’s songs" out/index.html out/en/index.html` → 0 each; `grep -c "music-37.webp" out/index.html` → 1.
- [ ] **Step 5: Preview check** at 1440 × 1000 and 375 × 812 on `/` and `/en/`: photo right fading in, heading and stacked buttons readable, player left; on phone photo → text → player, `document.documentElement.scrollWidth === innerWidth`, no console errors.
