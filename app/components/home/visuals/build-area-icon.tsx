type BuildAreaIconType = "ai" | "automation" | "analytics";

type BuildAreaIconProps = {
  type: BuildAreaIconType;
};

const iconBoxStyle = {
  backgroundColor: "var(--brand-icon-bg)",
  color: "var(--brand-icon-fg)",
  borderColor: "var(--brand-icon-border)",
  boxShadow: "0 4px 14px var(--brand-icon-shadow)",
} as const;

export function BuildAreaIcon({ type }: BuildAreaIconProps) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl border"
      style={iconBoxStyle}
    >
      {type === "ai" ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M12 3l1.4 3.3L17 8l-3.6 1.5L12 13l-1.4-3.5L7 8l3.6-1.7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 4.5l.8 1.8 1.8.8-1.8.8-.8 1.8-.8-1.8-1.8-.8 1.8-.8.8-1.8-.8-1.8.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
      {type === "automation" ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <rect x="14" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <rect x="8.5" y="14" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M6.5 10v2.5h5V14M17.5 10v2.5h-5V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      ) : null}
      {type === "analytics" ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M4 19V5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <rect x="7" y="12" width="3" height="7" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
          <rect x="12" y="8" width="3" height="11" rx="1" fill="currentColor" fillOpacity="0.45" stroke="currentColor" strokeWidth="1.5" />
          <rect x="17" y="10" width="3" height="9" rx="1" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : null}
    </div>
  );
}
