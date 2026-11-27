// Links and photos shared by both locales.

export const LINKS = {
  spotify: "https://open.spotify.com/artist/0K4GaoKj0G2eu0QVOMB5SJ",
  spotifyEmbed: "https://open.spotify.com/embed/artist/0K4GaoKj0G2eu0QVOMB5SJ?utm_source=generator&theme=0",
  appleMusic: "https://music.apple.com/id/artist/helen-huang/1791490240",
  youtube: "https://www.youtube.com/@helenhuang",
  tiktok: "https://www.tiktok.com/@helenhuang.official",
  facebook: "https://www.facebook.com/share/1CGm2wGzC8/",
} as const;

/** Social profiles shown as round buttons in the Booking section. */
export const SOCIALS = [
  { network: "YouTube", href: LINKS.youtube },
  { network: "TikTok", href: LINKS.tiktok },
  { network: "Facebook", href: LINKS.facebook },
] as const;
export type SocialNetwork = (typeof SOCIALS)[number]["network"];

// Booking WhatsApp, answered by Helen's team. International format.
// If emptied, the Booking button shows as "not active yet" and no wa.me link is published.
export const BOOKING_WHATSAPP = "+62 811-5686-788";

const digits = (n: string) => n.replace(/\D/g, "");

/** wa.me link with a pre-filled message, or null while the number is still a placeholder. */
export function whatsappLink(message: string): string | null {
  const d = digits(BOOKING_WHATSAPP);
  return d ? `https://wa.me/${d}?text=${encodeURIComponent(message)}` : null;
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
