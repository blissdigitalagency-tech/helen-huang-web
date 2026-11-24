import { SitePage } from "@/components/SitePage";
import { id } from "@/content/id";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(id);

export default function Page() {
  return <SitePage c={id} />;
}
