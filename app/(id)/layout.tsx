import "../globals.css";
import { fontVars } from "@/lib/fonts";

export { viewport } from "@/lib/metadata";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={fontVars}>
      <body>{children}</body>
    </html>
  );
}
