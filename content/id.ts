import type { Content } from "./types";

// Bahasa Indonesia (default locale, served at /).
// Copy carried over word for word from the approved site (index.html, 23 Nov 2026).

export const id: Content = {
  locale: "id",
  meta: {
    title: "Helen Huang — Penyanyi Mandopop",
    description:
      "Helen Huang, penyanyi Mandopop Indonesia. Pemegang Rekor MURI untuk konser berbahasa Mandarin pertama oleh penyanyi Indonesia di kapal pesiar.",
  },

  nav: {
    about: "Tentang",
    journey: "Perjalanan",
    music: "Musik",
    gallery: "Galeri",
    stage: "Panggung",
    booking: "Pemesanan",
    menu: "Menu",
    close: "Tutup",
  },

  hero: {
    eyebrow: "Penyanyi Mandopop Indonesia",
    lead: "Suara Indonesia untuk lagu-lagu Mandarin. Lebih dari satu dekade di atas panggung di Indonesia, Malaysia, dan Singapura.",
    listen: "Dengarkan",
    book: "Undang untuk tampil",
    sealRecord: "Rekor",
  },

  ribbon: [
    "Penyanyi Indonesia pertama yang menggelar konser berbahasa Mandarin di kapal pesiar",
    "Rekor MURI · April 2025",
    "Star Voyager",
  ],

  about: {
    label: "Tentang",
    title: "“Saya belajar bahasa<br><em>untuk merasakan lagunya.”</em>",
    p1: "Helen Huang belajar bahasa Mandarin selama dua tahun di sebuah universitas di Beijing. Menurutnya, pengalaman itu membantunya memahami sekaligus menghayati lirik lagu yang ia bawakan.",
    p2: "Ia mengawali karier di panggung sebagai pembawa acara (MC). Sekitar tahun 2010 ia mulai bernyanyi, awalnya lagu berbahasa Indonesia dan Inggris, lalu beralih ke lagu Mandarin setelah melihat besarnya permintaan penonton. Sejak sekitar 2015, lagu Mandarin menjadi inti repertoarnya.",
    quote:
      "Lagu balada Mandarin menuntut cengkok tinggi dengan <i>head voice</i> dan pengaturan napas yang presisi, keahlian yang terus ia asah.",
    photoAlt: "Helen Huang in a burgundy velvet gown, looking over her shoulder",
  },

  journey: {
    label: "",
    title: "Perjalanan",
    items: [
      { year: "± 2010", title: "Lagu-lagu pertama", text: "Setelah memulai sebagai MC, ia mulai bernyanyi, awalnya dalam bahasa Indonesia dan Inggris." },
      { year: "± 2015", title: "Beralih ke Mandarin", text: "Melihat tingginya permintaan akan penyanyi Mandarin, ia memfokuskan diri pada lagu Mandarin." },
      { year: "2023", title: "Label sendiri", text: "Rekamannya mulai dirilis melalui perusahaannya sendiri, Helen Huang Enterprise." },
      { year: "2024", title: '<span lang="zh">付出</span> Fu Chu', text: "Album dirilis 5 Juli 2024 melalui Varia Music Production." },
      {
        year: "2025",
        title: "Rekor di atas laut",
        text: "Konser berbahasa Mandarin di kapal pesiar <em>Star Voyager</em>. Pada 25 April 2025, MURI mencatatnya sebagai penyanyi Indonesia pertama yang melakukannya.",
        highlight: true,
      },
    ],
  },

  bridge: {
    label: "",
    title: "Dua bahasa,<br><em>satu suara.</em>",
    text: "Helen bernyanyi di titik temu lagu Indonesia dan lagu Mandarin. Repertoarnya antara lain “Chuan Ge”, versi Mandarin dari lagu daerah Batak “Sing Sing So”, dan video <i>cover</i>-nya di YouTube berpindah bebas antara bahasa Mandarin, Indonesia, dan Inggris.",
    from: "Lagu daerah Batak",
    to: "Versi Mandarin",
  },

  music: {
    label: "",
    title: "Musik",
    listenLabel: "Dengarkan sekarang",
    listenTitle: "Lagu-lagu Helen, di platform favorit Anda.",
    albumMeta: "Dirilis 5 Juli 2024 · Varia Music Production",
    albumLink: "Dengarkan di Apple Music →",
    tracks: [
      { zh: "挥手", title: "Hui Shou", text: "“Lambaian Tangan”. Singel orisinal, lirik oleh Julius Shen." },
      { zh: "搀扶", title: "Chan Fu", text: "Singel, 2025." },
      // TODO: add Chinese characters for "Chuan Ge" once confirmed
      { title: "Chuan Ge", text: "Versi Mandarin dari lagu “Sing Sing So”, bagian dari repertoar panggungnya." },
    ],
    videoMore: "Cover berbahasa Mandarin, Indonesia &amp; Inggris <strong>Tonton di YouTube →</strong>",
  },

  gallery: {
    label: "",
    title: "Galeri",
    prev: "Foto sebelumnya",
    next: "Foto berikutnya",
    close: "Tutup",
  },

  stage: {
    label: "",
    title: "Di Atas Panggung",
    lead: "Tampil solo maupun bersama sesama artis Indonesia, dari Medan hingga Singkawang, sampai ke negeri jiran. Musim Imlek adalah masa tersibuknya.",
    places: ["Medan", "Singkawang", "Malaysia", "Singapura"],
    sharedLabel: "Pernah sepanggung dengan",
    honoursLabel: "Penghargaan",
    honours: [
      "<strong>2025 · Rekor MURI</strong> Penyanyi Indonesia pertama yang menggelar konser berbahasa Mandarin di kapal pesiar.",
      "Dua penghargaan dari asosiasi kesejahteraan di Malaka dan Selangor, Malaysia.",
      "Plakat penghargaan dari Yayasan Sinar Kasih, Surabaya.",
    ],
  },

  contact: {
    eyebrow: "Acara privat · Lounge &amp; klub · Imlek",
    title: "Undang Helen <em>ke acara Anda</em>",
    // TODO: official booking contact (email / WhatsApp / manager)
    note: "Informasi pemesanan segera hadir.",
  },
};
