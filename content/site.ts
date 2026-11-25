// Links and photos shared by both locales.

export const LINKS = {
  spotify: "https://open.spotify.com/artist/0K4GaoKj0G2eu0QVOMB5SJ",
  spotifyEmbed: "https://open.spotify.com/embed/artist/0K4GaoKj0G2eu0QVOMB5SJ?utm_source=generator&theme=0",
  appleMusic: "https://music.apple.com/id/artist/helen-huang/1791490240",
  youtube: "https://www.youtube.com/@HelenHuang",
} as const;

// Booking WhatsApp, answered by Helen's manager/staff (Helen Huang Enterprise).
// TODO: fill in when Helen's team supplies it. International format, e.g. "+62 812-3456-7890".
// While empty, the Booking button shows as "not active yet" and no wa.me link is published.
export const BOOKING_WHATSAPP = "";

const digits = (n: string) => n.replace(/\D/g, "");

/** wa.me link with a pre-filled message, or null while the number is still a placeholder. */
export function whatsappLink(message: string): string | null {
  const d = digits(BOOKING_WHATSAPP);
  return d ? `https://wa.me/${d}?text=${encodeURIComponent(message)}` : null;
}

/** The number for display, e.g. "+62 812-3456-7890", or null while it is a placeholder. */
export function whatsappDisplay(): string | null {
  return digits(BOOKING_WHATSAPP) ? BOOKING_WHATSAPP.trim() : null;
}

export interface Photo {
  id: string;
  w: number;
  h: number;
  alt: string;
}

const p = (id: string, w: number, h: number, alt: string): Photo => ({ id, w, h, alt });

// Photos cleared for use in the dev kit brief, grouped by where they appear.
export const PHOTOS = {
  discography: p("disco-50", 1100, 1650, "Helen Huang singing in a silver gown on stage under purple lights"),
  awards: p("awards-21", 1100, 1773, "Helen Huang on stage in a white organza gown under blue stage lights"),
  performances: [
    p("p27", 916, 1400, "Helen Huang facing a crowd holding up their phone lights"),
    p("p13", 1080, 1350, "Helen Huang on stage in a burgundy cape and gold crown"),
    p("p16", 1080, 1350, "Helen Huang on stage in navy velvet sleeves with silver butterflies"),
    p("p07", 1080, 1350, "Helen Huang singing in a navy satin gown"),
  ],
};

export const photoSrc = (id: string) => `/media/photos/${id}.webp`;
