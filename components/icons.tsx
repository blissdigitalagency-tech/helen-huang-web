// Small shared SVGs. All decorative.

const STAR = "M12 0C12.9 7.4 16.6 11.1 24 12C16.6 12.9 12.9 16.6 12 24C11.1 16.6 7.4 12.9 0 12C7.4 11.1 11.1 7.4 12 0Z";

export function Star({ className, size = 12 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={STAR} fill="currentColor" />
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
