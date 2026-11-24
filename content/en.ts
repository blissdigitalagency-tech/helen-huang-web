import type { Content } from "./types";

// English (served at /en/).
// Copy carried over word for word from the approved site (js/i18n.js, 23 Nov 2026).

export const en: Content = {
  locale: "en",
  meta: {
    title: "Helen Huang — Mandopop Singer",
    description:
      "Helen Huang, Indonesian Mandopop singer. MURI record holder for the first Mandarin-language concert by an Indonesian singer on a cruise ship.",
  },

  nav: {
    about: "About",
    journey: "Journey",
    music: "Music",
    gallery: "Gallery",
    stage: "Stage",
    booking: "Booking",
    menu: "Menu",
    close: "Close",
  },

  hero: {
    eyebrow: "Indonesian Mandopop Singer",
    lead: "An Indonesian voice for Mandarin song. Over a decade on stage across Indonesia, Malaysia and Singapore.",
    listen: "Listen",
    book: "Book a performance",
    sealRecord: "Record",
  },

  ribbon: [
    "First Indonesian singer to hold a Mandarin-language concert on a cruise ship",
    "MURI Record · April 2025",
    "Star Voyager",
  ],

  about: {
    label: "About",
    title: "“I learned the language<br><em>to feel the song.”</em>",
    p1: "Helen Huang spent two years studying Mandarin at a university in Beijing. She credits that time with helping her understand and feel the lyrics she sings.",
    p2: "She began her career on stage as an MC at events. Around 2010 she started singing, at first in Indonesian and English, and turned to Mandarin songs when she saw how much audiences wanted them. Since around 2015, Mandarin has been the heart of her repertoire.",
    quote:
      "Mandarin ballads ask for soaring head-voice ornaments and precise breath control, a craft she continues to refine.",
    photoAlt: "Helen Huang in a burgundy velvet gown, looking over her shoulder",
  },

  journey: {
    label: "",
    title: "The Journey",
    items: [
      { year: "c. 2010", title: "First songs", text: "After starting out as an MC, she begins singing, at first in Indonesian and English." },
      { year: "c. 2015", title: "Turning to Mandarin", text: "Seeing strong demand for Mandarin singers, she makes Mandarin songs her focus." },
      { year: "2023", title: "Her own label", text: "Recordings begin releasing through her own company, Helen Huang Enterprise." },
      { year: "2024", title: '<span lang="zh">付出</span> Fu Chu', text: "Album released 5 July 2024 through Varia Music Production." },
      {
        year: "2025",
        title: "A record at sea",
        text: "A Mandarin-language concert aboard the <em>Star Voyager</em>. On 25 April 2025, MURI recognises her as the first Indonesian singer to do so.",
        highlight: true,
      },
    ],
  },

  bridge: {
    label: "",
    title: "Two languages,<br><em>one voice.</em>",
    text: "Helen sings where Indonesian and Mandarin song meet. Her repertoire includes “Chuan Ge”, a Mandarin version of the Batak folk song “Sing Sing So”, and her YouTube covers move freely between Mandarin, Indonesian and English.",
    from: "Batak folk song",
    to: "Mandarin version",
  },

  music: {
    label: "",
    title: "Music",
    listenLabel: "Listen now",
    listenTitle: "Helen’s songs, on your favourite platform.",
    albumMeta: "Released 5 July 2024 · Varia Music Production",
    albumLink: "Listen on Apple Music →",
    tracks: [
      { zh: "挥手", title: "Hui Shou", text: "“A Wave of the Hand”. Original single, lyrics by Julius Shen." },
      { zh: "搀扶", title: "Chan Fu", text: "Single, 2025." },
      { title: "Chuan Ge", text: "A Mandarin version of “Sing Sing So”, from her stage repertoire." },
    ],
    videoMore: "Covers in Mandarin, Indonesian &amp; English <strong>Watch on YouTube →</strong>",
  },

  gallery: {
    label: "",
    title: "Gallery",
    prev: "Previous photo",
    next: "Next photo",
    close: "Close",
  },

  stage: {
    label: "",
    title: "On Stage",
    lead: "Solo and alongside fellow Indonesian artists, from Medan to Singkawang and across the straits. Lunar New Year is her busiest season.",
    places: ["Medan", "Singkawang", "Malaysia", "Singapore"],
    sharedLabel: "Has shared the stage with",
    honoursLabel: "Honours",
    honours: [
      "<strong>2025 · MURI Record</strong> First Indonesian singer to hold a Mandarin-language concert on a cruise ship.",
      "Two awards from welfare associations in Malacca and Selangor, Malaysia.",
      "Plaque of appreciation from Yayasan Sinar Kasih, Surabaya.",
    ],
  },

  contact: {
    eyebrow: "Private events · Lounges &amp; clubs · Lunar New Year",
    title: "Book Helen <em>for your event</em>",
    note: "Booking details coming soon.",
  },
};
