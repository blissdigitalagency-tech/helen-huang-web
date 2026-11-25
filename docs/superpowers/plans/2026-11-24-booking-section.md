# Booking Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the Booking section into a centred WhatsApp call to action with a pre-filled message, the number as text and a "who answers" line.

**Architecture:** The number lives in one constant in `content/site.ts` with a helper that returns the `wa.me` link or `null` while the number is a placeholder. Copy lives in `content/{id,en}.ts`. `SitePage.tsx` renders a live link when the helper returns a URL, and a visibly inactive button otherwise.

**Tech Stack:** Next.js 16 static export, React 19, TypeScript, plain CSS.

**Spec:** `docs/superpowers/specs/2026-11-24-booking-section-design.md`

## Global Constraints

- No photo; faint "请" stays; centred layout.
- Primary button uses the current `.btn-lux` style (A/B choice out of scope).
- No `wa.me` link may ship with a placeholder number.
- No staff names. No commits (user commits on request).
- No test runner: verify with `npx tsc --noEmit`, `npm run build`, grep on `out/`, preview at 1440 px and 375 px.

## Review Focus

- Placeholder state: `out/index.html` contains no `wa.me/` while `BOOKING_WHATSAPP` is empty (grep).
- Real number: with a test number set temporarily, the link is `https://wa.me/<digits>?text=<encoded ID message>` on `/` and the EN message on `/en/` (grep, then revert).
- Number formatting: a number entered with `+`, spaces or dashes still produces a digits-only `wa.me` path.
- Removed copy: "segera hadir" / "coming soon" no longer in the Booking section (grep `out/`).
- Phone width: button and number fit at 375 px without sideways scroll.

---

### Task 1: WhatsApp number helper and copy

**Files:** Modify `content/site.ts`, `content/types.ts` (`contact`), `content/id.ts`, `content/en.ts`

**Interfaces:**
- Produces: `BOOKING_WHATSAPP: string` (empty = placeholder); `whatsappLink(message: string): string | null` (strips non-digits; `null` when no digits); `Content["contact"] = { eyebrow: string; title: string; button: string; message: string; numberPlaceholder: string; answeredBy: string; inactive: string }`.

- [ ] **Step 1: RED.** `grep -c "segera hadir" out/index.html` → 1.
- [ ] **Step 2:** Add `BOOKING_WHATSAPP = ""` (comment: international digits, e.g. 62812…) and `whatsappLink` to `content/site.ts`.
- [ ] **Step 3:** Update `contact` type and copy. ID: button "WhatsApp", message "Halo, saya ingin booking Helen Huang. Tanggal: , Kota: , Jenis acara: ", numberPlaceholder "[Nomor WhatsApp]", answeredBy "Dibalas oleh tim Helen Huang Enterprise", inactive "Segera aktif". EN: button "WhatsApp", message "Hi, I would like to book Helen Huang. Date: , City: , Event type: ", numberPlaceholder "[WhatsApp number]", answeredBy "Answered by the Helen Huang Enterprise team", inactive "Not active yet". Remove `note`.
- [ ] **Step 4:** `npx tsc --noEmit` → errors only in `components/SitePage.tsx` (old `note`).

### Task 2: Booking markup and styles

**Files:** Modify `components/SitePage.tsx` (`#booking`), `app/globals.css` (Contact block), `components/icons.tsx` (add `WhatsAppIcon`)

**Interfaces:**
- Consumes: `BOOKING_WHATSAPP`, `whatsappLink`, `Content["contact"]` from Task 1.

- [ ] **Step 1:** `WhatsAppIcon({ size }: { size?: number })` in `icons.tsx`: inline stroke/fill SVG, `aria-hidden`.
- [ ] **Step 2:** Booking markup: eyebrow, h2, then a `.booking-cta` stack: if `whatsappLink(c.contact.message)` is a URL, `<a class="btn btn-lux booking-btn" href=… target="_blank" rel="noopener">` with icon + label; else a `<span class="btn btn-lux booking-btn is-inactive" aria-disabled="true">` with icon, label and a small `c.contact.inactive` tag. Below: `p.booking-number` (formatted `+<digits>` or the placeholder) and `p.booking-who` (answeredBy).
- [ ] **Step 3:** CSS: `.booking-cta` centred column, gap 14px, margin-top 36px; `.booking-btn` min-width 240px, icon gap 12px; `.is-inactive` opacity .6, cursor default, no hover lift; `.booking-number` display font 22px, `user-select: all`; `.booking-who` 13px muted. Remove `.contact .muted` usage if unused.
- [ ] **Step 4: GREEN.** `npx tsc --noEmit && npm run build` pass; `grep -c "wa.me/" out/index.html` → 0; `grep -c "Dibalas oleh tim Helen Huang Enterprise" out/index.html` → 1; `grep -c "Answered by the Helen Huang Enterprise team" out/en/index.html` → 1; `grep -c "segera hadir" out/index.html` → 0.
- [ ] **Step 5: Real-number check.** Temporarily set `BOOKING_WHATSAPP = "+62 812-0000-0000"`, build, expect `grep -o 'wa.me/6281200000000?text=Halo' out/index.html` and `grep -o 'wa.me/6281200000000?text=Hi' out/en/index.html` to match; revert to `""` and rebuild.
- [ ] **Step 6:** Preview at 1440 px and 375 px: centred, button and number visible, no sideways scroll, no console errors.
