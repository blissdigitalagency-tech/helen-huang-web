import type { Content } from "./types";

// English (served at /en/).

const GOLD_STAR = "11th Malaysia Gold Star Awards";

export const en: Content = {
  locale: "en",
  meta: {
    title: "Helen Huang",
    description:
      "Helen Huang, Indonesian Mandopop singer. MURI record holder for the first Mandarin-language concert by an Indonesian singer on a cruise ship.",
  },

  nav: {
    music: "Music",
    discography: "Discography",
    awards: "Awards",
    performances: "Performances",
    booking: "Booking",
    menu: "Menu",
    close: "Close",
  },

  hero: { listen: "Listen", book: "Book a performance" },

  music: { label: "Music", title: "Listen Now" },

  discography: {
    label: "Discography",
    title: "Singles &amp; Albums",
    releases: [
      { year: "2026", title: "Yong Gan Xiang Qian Chuang", zh: "勇敢向前闯", note: "Single" },
      { year: "2024", title: "Tian Huang Di Lao Zhi Shi Ge Chuan Shuo", zh: "天荒地老只是个传说", note: "Single" },
      { year: "2024", title: "Fu Chu", zh: "付出", note: "Single" },
      { year: "2020", title: "Hui Shou", zh: "挥手", note: "Single" },
      { year: "2024", title: "It’s Me Helen Huang", ordinal: "2nd", note: "Album" },
      { year: "2019", title: "Helenism World", ordinal: "1st", note: "Album" },
    ],
  },

  awards: {
    label: "Awards",
    title: "Winning Awards",
    groups: [
      {
        year: "2026",
        event: GOLD_STAR,
        items: [
          { badge: "my", zh: "海外杰出当红歌手大奖", name: "Overseas Outstanding Singer Award" },
          { badge: "my", zh: "海外杰出歌手大奖", name: "Outstanding Overseas Acclaimed Singer Award" },
          { badge: "my", zh: "海外杰出华裔艺术家", name: "Outstanding Chinese Artist Overseas" },
        ],
      },
      {
        year: "2025",
        items: [
          {
            badge: "muri",
            name: "MURI Record",
            from: "First Indonesian singer to hold a Mandarin concert on a cruise ship.",
          },
        ],
      },
      {
        year: "2020",
        items: [
          {
            badge: "my",
            name: 'Outstanding Vocal Artistry <span lang="zh">歌艺超群</span>',
            from: 'Welfare association in Selangor, Malaysia <span lang="zh">雪州五條港義益福利會</span>',
          },
        ],
      },
      {
        year: "2019",
        items: [
          {
            badge: "my",
            name: "Outstanding and Dazzling Indonesian Singer",
            from: 'Malacca Sanchuan Welfare and Fellowship Association, Malaysia <span lang="zh">印尼傑出歌手表彰牌，由馬來西亞馬六甲三川福利聯誼會敬贈</span>',
          },
        ],
      },
      {
        year: "2018",
        items: [{ badge: "id", name: "Plaque of Appreciation", from: "Yayasan Sinar Kasih, Surabaya" }],
      },
    ],
  },

  performances: {
    label: "Performances",
    title: "Selected Performances",
    items: [
      { when: "April 2025", what: "Mandarin concert on the Star Voyager cruise ship", where: "MURI Record" },
      { when: "Lunar New Year", what: "[Event name]", where: "Medan" },
      { when: "Lunar New Year", what: "[Event name]", where: "Singkawang" },
      { when: "[Year]", what: "[Event name]", where: "Malaysia" },
      { when: "[Year]", what: "[Event name]", where: "Singapore" },
    ],
  },

  contact: {
    eyebrow: "Private events · Lounges &amp; clubs · Lunar New Year",
    title: "Book Helen for Your Event",
    button: "WhatsApp",
    message: "Hi, I would like to book Helen Huang. Date: , City: , Event type: ",
    numberPlaceholder: "[WhatsApp number]",
    inactive: "Not active yet",
  },
};
