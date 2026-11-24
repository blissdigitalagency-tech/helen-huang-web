import { Bodoni_Moda, Jost, Noto_Serif_SC, Pinyon_Script } from "next/font/google";

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--f-display",
  display: "swap",
});

export const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--f-body",
  display: "swap",
});

// Large CJK font: Google serves it in unicode-range slices, so only the
// handful of characters on the page are downloaded. Not preloaded.
export const notoSerifSC = Noto_Serif_SC({
  weight: ["300", "500"],
  variable: "--f-zh",
  display: "swap",
  preload: false,
});

export const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-script",
  display: "swap",
});

export const fontVars = [bodoni.variable, jost.variable, notoSerifSC.variable, pinyon.variable].join(" ");
