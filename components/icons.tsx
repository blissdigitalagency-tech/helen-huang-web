// Small shared SVGs. All decorative.

const STAR = "M12 0C12.9 7.4 16.6 11.1 24 12C16.6 12.9 12.9 16.6 12 24C11.1 16.6 7.4 12.9 0 12C7.4 11.1 11.1 7.4 12 0Z";

export function Star({ className, size = 12 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={STAR} fill="currentColor" />
    </svg>
  );
}

// Social icons (simple line/fill marks in currentColor).
export function SocialIcon({ network, size = 20 }: { network: "YouTube" | "TikTok" | "Facebook"; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {network === "YouTube" && (
        <>
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" />
        </>
      )}
      {network === "TikTok" && (
        <path
          d="M16.5 3c.4 2.1 1.7 3.5 3.8 3.7v2.8c-1.4 0-2.7-.4-3.8-1.1v6.1c0 3.3-2.6 5.5-5.6 5.5S5.5 17.6 5.5 14.8c0-3.2 2.9-5.6 6.3-5v2.9c-.4-.2-.9-.3-1.4-.2-1.3.1-2.2 1.1-2.1 2.4.1 1.2 1.1 2.1 2.3 2.1 1.4 0 2.3-1 2.3-2.5V3z"
          fill="currentColor"
        />
      )}
      {network === "Facebook" && (
        <path
          d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}

// Chat bubble with a handset, drawn to read as WhatsApp at small sizes.
export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 2.8a9.2 9.2 0 0 0-7.9 13.9L3 21l4.4-1.1A9.2 9.2 0 1 0 12 2.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 7.6c-.3 0-.7.1-.9.4-.4.5-.8 1.1-.8 2 0 1.6 1.2 3.2 1.4 3.4.2.2 2.3 3.6 5.6 4.9 2.8 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.6.1-.4.1-.8 0-1-.1-.2-.4-.3-.8-.5l-2-1c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.7-2.2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6Z"
        fill="currentColor"
        transform="translate(-1.6 -1.2) scale(0.9)"
      />
    </svg>
  );
}

// Thin jewellery glint: four-ray cross, fainter diagonal cross, cream centre.
export function GlintPaths({ fill }: { fill: string }) {
  return (
    <>
      <path d="M24 0L24.9 23.1L48 24L24.9 24.9L24 48L23.1 24.9L0 24L23.1 23.1Z" fill={fill} />
      <path d="M24 13L24.5 23.5L35 24L24.5 24.5L24 35L23.5 24.5L13 24L23.5 23.5Z" fill={fill} opacity=".55" transform="rotate(45 24 24)" />
      <circle cx="24" cy="24" r="1.7" fill="#fff4d6" />
    </>
  );
}
