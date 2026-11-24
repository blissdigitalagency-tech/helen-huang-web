import { SitePage } from "@/components/SitePage";
import { en } from "@/content/en";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(en);

export default function Page() {
  return <SitePage c={en} />;
}
