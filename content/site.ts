// Links and media shared by both locales.

export const LINKS = {
  spotify: "https://open.spotify.com/artist/0K4GaoKj0G2eu0QVOMB5SJ",
  spotifyEmbed: "https://open.spotify.com/embed/artist/0K4GaoKj0G2eu0QVOMB5SJ?utm_source=generator&theme=0",
  appleMusic: "https://music.apple.com/id/artist/helen-huang/1791490240",
  appleMusicAlbum: "https://music.apple.com/id/album/%E4%BB%98%E5%87%BA/1758739799",
  youtube: "https://www.youtube.com/@HelenHuang",
} as const;

// Gallery order and alt text from the dev kit brief (photos cleared for use).
export const PHOTOS = [
  { id: "p13", w: 1080, h: 1350, alt: "Helen Huang on stage in a burgundy cape and gold crown" },
  { id: "p34", w: 933, h: 1400, alt: "Helen Huang in a burgundy velvet gown with a sculpted ruffle collar" },
  { id: "p09", w: 1080, h: 1350, alt: "Helen Huang singing in a gold peacock-embroidered gown" },
  { id: "p10", w: 1050, h: 1400, alt: "Helen Huang in a red embroidered gown with wide sleeves and a gold corset" },
  { id: "p27", w: 916, h: 1400, alt: "Helen Huang facing a crowd holding up their phone lights" },
  { id: "p25", w: 933, h: 1400, alt: "Helen Huang in a gold corset gown among red curtains and candles" },
  { id: "p16", w: 1080, h: 1350, alt: "Helen Huang on stage in navy velvet sleeves with silver butterflies" },
  { id: "p46", w: 933, h: 1400, alt: "Helen Huang in burgundy embroidery holding a peacock-feather fan" },
  { id: "p21", w: 1050, h: 1400, alt: "Helen Huang on stage in a white organza gown under the lights" },
  { id: "p14", w: 933, h: 1400, alt: "Helen Huang singing in a pink embroidered gown" },
  { id: "p20", w: 933, h: 1400, alt: "Helen Huang in an iridescent organza costume" },
  { id: "p07", w: 1080, h: 1350, alt: "Helen Huang singing in a navy satin gown" },
] as const;

export type Photo = (typeof PHOTOS)[number];
