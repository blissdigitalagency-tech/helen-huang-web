import type { AwardBadge as Badge } from "@/content/types";

// Drawn flags (simplified, not official artwork) and the MURI logo.

function FlagMY() {
  return (
    <svg viewBox="0 0 28 14" role="img" aria-label="Malaysia" focusable="false">
      <rect width="28" height="14" fill="#ffffff" />
      <g fill="#cc0001">
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect key={y} y={y} width="28" height="1" />
        ))}
      </g>
      <rect width="14" height="8" fill="#010066" />
      <circle cx="5.2" cy="4" r="2.9" fill="#ffcc00" />
      <circle cx="6.1" cy="4" r="2.5" fill="#010066" />
      <polygon fill="#ffcc00" points="10.5,1.6 11.1,3.3 12.9,3.3 11.4,4.3 12,6 10.5,5 9,6 9.6,4.3 8.1,3.3 9.9,3.3" />
    </svg>
  );
}

function FlagID() {
  return (
    <svg viewBox="0 0 36 22" role="img" aria-label="Indonesia" focusable="false">
      <rect width="36" height="11" fill="#ce1126" />
      <rect y="11" width="36" height="11" fill="#ffffff" />
    </svg>
  );
}

export function AwardBadge({ badge }: { badge: Badge }) {
  if (badge === "muri") {
    // TODO: stand-in image (stock download with watermarks). Replace with the official MURI file before launch.
    return <img className="muri-logo" src="/media/muri.png" alt="MURI" width={240} height={240} loading="lazy" />;
  }
  return <span className="flag">{badge === "my" ? <FlagMY /> : <FlagID />}</span>;
}
