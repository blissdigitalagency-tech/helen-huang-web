# Musik section redesign

Date: 2026-11-24 · Status: approved

## Intent

Make the Musik section match Discography and Awards so the three read as one set: open two-column
layouts on the dark background, each with a large photo of Helen fading into the dark. The glass
card makes Musik look like a different site.

## Goals

- Spotify player on the left.
- Right side: only "Listen now" with Spotify, Apple Music and YouTube as a vertical column of buttons.
- A large photo on the right, behind the "Listen now" content, fading into the page.
- Photos alternate down the page: right (Musik), left (Discography), right (Awards).

## Non-goals

- The black-pill button A/B choice (still open; the streaming buttons stay glass pills).
- Copy changes beyond removing the lines listed below.

## Anti-goals

- Guests identifiable in the photo. Photo 37 is on the dev kit's do-not-use list because guests'
  faces are visible; only a tight crop of the stage with no identifiable guests is allowed.

## Decisions

- **Photo:** `37.png`, top half only, tightly cropped to Helen on stage with the lanterns, spotlight
  and cake tower (roughly the left 56% and top 33% of the file). No grading or colour overlay.
  Known limit: the crop is about 600 × 450 px, so it will be soft at large sizes; swap in a higher
  resolution original if Helen's team supplies one.
- **Right column content:** small gold kicker "Musik" / "Music"; big white heading
  "Dengarkan sekarang" / "Listen now" in the same size and style as "Winning Awards" (no italic);
  three glass pill buttons stacked, equal width (~300 px).
- **Removed:** the glass card and its gold glow, the big "Musik" title above it, and the line
  "Lagu-lagu Helen, di platform favorit Anda." / "Helen's songs, on your favourite platform."
- **Readability:** a dark wash behind the right column where the photo reaches under the text,
  as in Awards.
- **Phones:** photo on top fading down, then kicker, heading and buttons, then the player.

## Approaches considered

1. **Photo right, behind "Listen now" (chosen).** Keeps the right/left/right rhythm with the
   sections below.
2. Photo left with the player floating on top. Puts two left-side photos back to back.
3. One full-width dimmed photo behind the section. Competes with the hero video and makes the
   player harder to read.

## Left to the builder

Exact crop box, fade stops, wash strength and column widths, matched to the Awards and
Discography sections; ID/EN keys for the new heading text.
