# Helen Huang — Artist Website

Profile site for Helen Huang, Indonesian Mandopop singer. A single landing page, front-end only:
plain HTML, CSS and JavaScript, with [Vite](https://vite.dev) as the local dev server and build tool.

## Run it

```bash
npm install
npm run dev       # http://localhost:5500, reloads on save
npm run build     # production files in dist/
npm run preview   # serve the built dist/ locally
```

Requires Node 20.19 or newer.

## Where things live

| Path | What it is |
| --- | --- |
| `index.html` | The page. All **Indonesian** copy lives here (Indonesian is the default language). |
| `js/i18n.js` | All **English** copy, keyed to the `data-i18n` attributes in `index.html`. |
| `js/main.js` | Language switch, mobile menu, scroll reveals, header behaviour. |
| `css/styles.css` | All styling. Colours and fonts are CSS variables at the top of the file. |
| `assets/images/` | Images. `portrait.jpg` is the hero portrait. |

### Editing text

- Change Indonesian text in `index.html`.
- Change English text in `js/i18n.js`, using the same key as the element's `data-i18n` value.
- New translatable element: give it `data-i18n="section.key"` in the HTML and add that key to `js/i18n.js`.

## Content rules

Facts on the site come from published sources (Jawa Pos, innews, Liputan6, RRI, Tren24, Orasi Rakyat,
Apple Music, Spotify). Don't add claims about Helen that aren't sourced or confirmed by her team.

## Still to do

- [ ] Colour palette: Helen asked for gold. The current gold-base version is a draft under review.
- [ ] Booking contact (email / WhatsApp / manager), marked `TODO` in `index.html`.
- [ ] Album artwork for 付出 (Fu Chu).
- [ ] YouTube video embeds.
- [ ] Chinese characters for "Chuan Ge", once confirmed.
- [ ] Confirm "Sing Sing So" is described correctly as a Batak folk song.
