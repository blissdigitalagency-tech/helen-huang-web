import type { Content } from "./types";

// Bahasa Indonesia (default locale, served at /).

const GOLD_STAR = "11th Malaysia Gold Star Awards";

export const id: Content = {
  locale: "id",
  meta: {
    title: "Helen Huang",
    description:
      "Helen Huang, penyanyi Mandopop Indonesia. Pemegang Rekor MURI untuk konser berbahasa Mandarin pertama oleh penyanyi Indonesia di kapal pesiar.",
  },

  nav: {
    music: "Musik",
    discography: "Diskografi",
    awards: "Penghargaan",
    performances: "Penampilan",
    booking: "Booking",
    menu: "Menu",
    close: "Tutup",
  },

  hero: { listen: "Dengarkan", book: "Undang untuk tampil" },

  music: { label: "Musik", title: "Listen Now" },

  discography: {
    label: "Diskografi",
    title: "Single &amp; Album",
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
    label: "Penghargaan",
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
            name: "Rekor MURI",
            from: "Penyanyi Indonesia pertama yang menggelar konser Mandarin di kapal pesiar.",
          },
        ],
      },
      {
        year: "2020",
        items: [
          {
            badge: "my",
            name: 'Outstanding Vocal Artistry <span lang="zh">歌艺超群</span>',
            from: 'Perkumpulan sosial di Selangor, Malaysia <span lang="zh">雪州五條港義益福利會</span>',
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
        items: [{ badge: "id", name: "Plakat Penghargaan", from: "Yayasan Sinar Kasih, Surabaya" }],
      },
    ],
  },

  performances: {
    label: "Penampilan",
    title: "Deretan Penampilan",
    // TODO: replace the bracketed rows with Helen's real performance list
    items: [
      { when: "April 2025", what: "Konser Mandarin di kapal pesiar Star Voyager", where: "Rekor MURI" },
      { when: "Imlek", what: "[Nama acara]", where: "Medan" },
      { when: "Imlek", what: "[Nama acara]", where: "Singkawang" },
      { when: "[Tahun]", what: "[Nama acara]", where: "Malaysia" },
      { when: "[Tahun]", what: "[Nama acara]", where: "Singapura" },
    ],
  },

  contact: {
    eyebrow: "Wedding · Gathering · Anniversary · Private Party · Pub &amp; Club",
    title: "Undang Helen ke Acara Anda",
    button: "WhatsApp",
    message: "Halo, saya mau undang Helen Huang ke acara saya. Boleh tahu info lebih lanjut?",
    social: "Helen Huang di {network}",
    inactive: "Segera aktif",
  },
};
