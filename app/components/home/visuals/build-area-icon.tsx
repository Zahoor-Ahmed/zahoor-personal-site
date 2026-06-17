type BuildAreaIconType = "ai" | "automation" | "analytics";

type BuildAreaIconProps = {
  type: BuildAreaIconType;
};

export function BuildAreaIcon({ type }: BuildAreaIconProps) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
      {type === "ai" ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect
            x="4"
            y="16"
            width="16"
            height="5"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M8 18.5h.01M12 18.5h.01M16 18.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : null}
      {type === "automation" ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="8.5" y="14" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.5 10v2.5h5V14M17.5 10v2.5h-5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : null}
      {type === "analytics" ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <path d="M4 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="7" y="12" width="3" height="7" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
          <rect x="12" y="8" width="3" height="11" rx="1" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" />
          <rect x="17" y="10" width="3" height="9" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ) : null}
    </div>
  );
}
