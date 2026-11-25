# Helen Huang — Artist Website

Profile site for Helen Huang, Indonesian Mandopop singer. Built with [Next.js](https://nextjs.org) as a
static export, prototyped on Netlify (no custom domain yet).

## Run it

```bash
npm install
npm run dev       # http://localhost:5500
npm run build     # static site in out/
npm start         # serve the built out/ locally
```

Requires Node 20.9 or newer.

## Deploy (Netlify)

`netlify.toml` is already set up: build command `npm run build`, publish folder `out`.
Connect the repo in Netlify, or run `npm run build` and drag `out/` into Netlify Drop.

## Where things live

| Path | What it is |
| --- | --- |
| `content/id.ts` | All **Indonesian** copy. Indonesian is the default, served at `/`. |
| `content/en.ts` | All **English** copy, served at `/en/`. Same keys as `id.ts`. |
| `content/site.ts` | Streaming / YouTube links and which photos appear in each section (with alt text). |
| `components/SitePage.tsx` | The page layout, section by section. |
| `app/globals.css` | All styling. Colours and fonts are CSS variables at the top. |
| `public/media/` | Hero video and poster, logo, photos (from the dev kit), MURI logo. |

To change text, edit `content/id.ts` and `content/en.ts` only; components don't hold copy.
Fields marked `html` in `content/types.ts` may use `<em>`, `<i>`, `<strong>` and `<br>`.

## Content rules

The copy is the approved site copy (originally in `index.html` / `js/i18n.js`), not the copy in the
dev kit's `PROMPT.md`. The dev kit is used for the visual design and assets only.
Facts come from published sources. Don't add claims about Helen that aren't sourced or confirmed by her team.

## Still to do

- [ ] Official MURI logo. `public/media/muri.png` is a stand-in stock image with watermarks; replace before launch.
- [ ] Performance list. Only the Star Voyager row is real; the bracketed rows are placeholders.
- [ ] Booking contact (email / WhatsApp / manager). Booking section says "coming soon".
- [ ] Title of the second album (2024), if it has one.
- [ ] Social links (Instagram, Facebook, TikTok), once supplied.
