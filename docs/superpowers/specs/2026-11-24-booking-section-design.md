# Booking section redesign

Date: 2026-11-24 · Status: approved · Size: small change

## Intent

The end of the page is where an organiser convinced by the music and awards takes the next step.
Booking should get them into a WhatsApp chat with Helen's team in one tap. WhatsApp is how
organisers in Indonesia and Malaysia usually book.

## Goals

- One main action: a "WhatsApp" button that opens a chat with a pre-filled message.
- The number also shown as plain text, because the link does not open WhatsApp on every device.
- A line saying who answers: Helen's manager or staff under Helen Huang Enterprise (not Bliss).

## Non-goals

- The button style itself (A double gold line / B gold fill is still open; use the current primary style).
- A form, email or social links.

## Anti-goals

- A broken WhatsApp link going live: while the number is a placeholder, the button must not open
  `wa.me` with a fake number.
- A personal staff name on the site (goes stale as staff change).

## Decisions

- **Layout:** centred, no photo, faint "请" kept behind; the page's finale, deliberately unlike the
  photo sections.
- **Content, top to bottom:** gold line "Acara privat · Lounge &amp; klub · Imlek" /
  "Private events · Lounges &amp; clubs · Lunar New Year"; heading "Undang Helen ke Acara Anda" /
  "Book Helen for Your Event"; black-and-gold pill "WhatsApp" with a small WhatsApp icon; the number
  as text; small line "Dibalas oleh tim Helen Huang Enterprise" /
  "Answered by the Helen Huang Enterprise team".
- **Pre-filled message:** ID "Halo, saya ingin booking Helen Huang. Tanggal: , Kota: , Jenis acara: ";
  EN "Hi, I would like to book Helen Huang. Date: , City: , Event type: ".
- **Number:** one constant in one place; placeholder until Helen's team supplies it. While it is a
  placeholder the button is shown but marked as not yet active, and the text reads "[Nomor WhatsApp]" /
  "[WhatsApp number]".
- **Removed:** "Informasi pemesanan segera hadir." / "Booking details coming soon."

## Approaches considered

1. **WhatsApp button + number as text (chosen).** One tap for organisers; works without a backend.
2. Enquiry form. Needs somewhere to send messages; this static site has none.
3. Manager's name and number. Personal details go stale as staff change.

## Left to the builder

Icon drawing, spacing, how "not yet active" looks, and the ID/EN keys.
