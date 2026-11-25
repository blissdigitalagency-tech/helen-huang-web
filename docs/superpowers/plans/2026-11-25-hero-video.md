# Hero Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hero loop with six stitched Noya scenes: a 16:9 desktop file and a 9:16 phone file.

**Architecture:** ffmpeg trims each scene, crops (desktop) or scales (phone), joins them with `xfade`, strips audio and encodes H.264 with faststart. `HeroVideo.tsx` picks the phone file under 768 px.

**Tech Stack:** ffmpeg 8, Next.js static export, React.

**Spec:** `docs/superpowers/specs/2026-11-25-hero-video-design.md`

## Global Constraints

- Scene list and crop centres exactly as in the spec. No audio, no grade. No commits.

## Review Focus

- Loop seam: the end fades into the start without a jump.
- Phone file actually used on phones (network request for `hero-loop-mobile.mp4` at 393 px, not the desktop file).
- File sizes small enough for a hero (desktop ≲ 6 MB, phone ≲ 4 MB).
- Reduced motion / Save-Data still show only the poster.

---

### Task 1: Encode the loops

**Files:** Create `public/media/hero-loop.mp4` (replace), `public/media/hero-loop-mobile.mp4`, `public/media/hero-poster.jpg` (replace), `public/media/hero-poster-mobile.jpg`

- [ ] **Step 1:** Encode desktop 1920×1080 30 fps and phone 720×1280 30 fps with the six scenes and 0.35 s crossfades, plus 0.3 s fade-in/out to black; `-an -c:v libx264 -crf 26 -pix_fmt yuv420p -movflags +faststart`.
- [ ] **Step 2:** Verify with ffprobe: duration ≈ 7 s, sizes, no audio stream; extract one frame per scene and check framing visually.
- [ ] **Step 3:** Posters from scene 1 at 0.6 s into the loop.

### Task 2: Phone source in `HeroVideo.tsx`

**Files:** Modify `components/HeroVideo.tsx`

- [ ] **Step 1:** Pick `SRC_MOBILE` / `POSTER_MOBILE` when `matchMedia("(max-width: 767px)")` matches, else the desktop pair; keep the reduced-motion and Save-Data early return.
- [ ] **Step 2:** `npx tsc --noEmit && npm run build` pass; preview at 1440 px and 393 px shows the right file playing (network log), no console errors.
