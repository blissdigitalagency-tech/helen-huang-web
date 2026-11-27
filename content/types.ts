// Shape shared by every locale file. Fields marked "html" may contain
// <em>, <i>, <strong>, <br> or <span lang="zh">; everything else is plain text.

export type Locale = "id" | "en";

export interface Release {
  /** Year, or a roman numeral when the year is unknown. */
  year: string;
  title: string;
  zh?: string;
  /** Small uppercase line under the title. */
  note: string;
  /** Shown before the note without uppercasing, e.g. "2nd" in "2nd ALBUM". */
  ordinal?: string;
}

/** Icon shown beside an award: a country flag or the MURI logo. */
export type AwardBadge = "my" | "id" | "muri";

export interface Award {
  badge: AwardBadge;
  zh?: string;
  /** html */
  name: string;
  /** html */
  from?: string;
}

export interface Performance {
  when: string;
  what: string;
  where: string;
}

export interface Content {
  locale: Locale;
  meta: { title: string; description: string };

  nav: {
    music: string;
    discography: string;
    awards: string;
    performances: string;
    booking: string;
    menu: string;
    close: string;
  };

  hero: { listen: string; book: string };

  music: {
    /** Small gold label above the heading */
    label: string;
    title: string;
  };

  discography: {
    label: string;
    /** html */
    title: string;
    releases: Release[];
  };

  awards: {
    label: string;
    /** html */
    title: string;
    /** Newest first. */
    groups: { year: string; event?: string; items: Award[] }[];
  };

  performances: {
    label: string;
    /** html */
    title: string;
    items: Performance[];
  };

  contact: {
    /** html */
    eyebrow: string;
    /** html */
    title: string;
    button: string;
    /** Pre-filled WhatsApp message */
    message: string;
    /** Accessible name for each social button; "{network}" is replaced, e.g. "Helen Huang on YouTube" */
    social: string;
    /** Tag on the button while the number is a placeholder */
    inactive: string;
  };
}
