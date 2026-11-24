// Shape shared by every locale file. Fields marked "html" may contain
// <em>, <i>, <strong> or <br>; everything else is plain text.

export type Locale = "id" | "en";

export interface Content {
  locale: Locale;
  meta: { title: string; description: string };

  nav: {
    about: string;
    journey: string;
    music: string;
    gallery: string;
    stage: string;
    booking: string;
    menu: string;
    close: string;
  };

  hero: {
    eyebrow: string;
    lead: string;
    listen: string;
    book: string;
    sealRecord: string;
  };

  ribbon: string[];

  about: {
    label: string;
    /** html */
    title: string;
    p1: string;
    p2: string;
    /** html */
    quote: string;
    photoAlt: string;
  };

  journey: {
    label: string;
    title: string;
    items: { year: string; /** html */ title: string; /** html */ text: string; highlight?: boolean }[];
  };

  bridge: {
    label: string;
    /** html */
    title: string;
    /** html */
    text: string;
    from: string;
    to: string;
  };

  music: {
    label: string;
    title: string;
    listenLabel: string;
    listenTitle: string;
    albumMeta: string;
    albumLink: string;
    tracks: { zh?: string; title: string; text: string }[];
    /** html */
    videoMore: string;
  };

  gallery: {
    label: string;
    title: string;
    prev: string;
    next: string;
    close: string;
  };

  stage: {
    label: string;
    title: string;
    lead: string;
    places: string[];
    sharedLabel: string;
    honoursLabel: string;
    /** html */
    honours: string[];
  };

  contact: {
    /** html */
    eyebrow: string;
    /** html */
    title: string;
    note: string;
  };
}
