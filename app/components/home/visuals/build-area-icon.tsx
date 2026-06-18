import type { ReactNode } from "react";

type BuildAreaIconType = "ai" | "automation" | "analytics";

type BuildAreaIconProps = {
  type: BuildAreaIconType;
};

const iconBoxStyle = {
  background:
    "linear-gradient(180deg, rgba(207, 228, 246, 0.96) 0%, rgba(191, 219, 242, 0.9) 100%)",
  color: "var(--brand-icon-fg)",
  borderColor: "var(--brand-icon-border)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.55), 0 8px 20px var(--brand-icon-shadow)",
} as const;

const iconStrokeProps = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-2xl border"
      style={iconBoxStyle}
    >
      {children}
    </div>
  );
}

function AIProductIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 5.2v2.1M12 16.7v2.1M5.2 12h2.1M16.7 12h2.1" {...iconStrokeProps} />
      <path d="M7.3 7.3 8.8 8.8M15.2 15.2l1.5 1.5M16.7 7.3l-1.5 1.5M8.8 15.2l-1.5 1.5" {...iconStrokeProps} />
      <path
        d="m12 8.2 1.05 2.25 2.45.28-1.82 1.67.48 2.43L12 13.62l-2.16 1.23.48-2.43-1.82-1.67 2.45-.28L12 8.2Z"
        {...iconStrokeProps}
      />
    </svg>
  );
}

function AutomationSystemIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="3.25" y="4" width="5.5" height="5.5" rx="1.5" {...iconStrokeProps} />
      <rect x="15.25" y="4" width="5.5" height="5.5" rx="1.5" {...iconStrokeProps} />
      <rect x="9.25" y="14.5" width="5.5" height="5.5" rx="1.5" {...iconStrokeProps} />
      <path d="M8.75 6.75h2.5c1.05 0 1.9.85 1.9 1.9v2.05" {...iconStrokeProps} />
      <path d="M15.25 6.75h-2.5c-1.05 0-1.9.85-1.9 1.9v2.05" {...iconStrokeProps} />
      <path d="M12 10.7v1.8" {...iconStrokeProps} />
      <path d="m10.6 11.15 1.4 1.35 1.4-1.35" {...iconStrokeProps} />
    </svg>
  );
}

function AnalyticsTelecomIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M4.25 18.75V6.25M4.25 18.75H19.75" {...iconStrokeProps} />
      <rect
        x="7"
        y="12"
        width="2.75"
        height="6.75"
        rx="0.9"
        fill="currentColor"
        fillOpacity="0.16"
        {...iconStrokeProps}
      />
      <rect
        x="11.15"
        y="9"
        width="2.75"
        height="9.75"
        rx="0.9"
        fill="currentColor"
        fillOpacity="0.22"
        {...iconStrokeProps}
      />
      <rect
        x="15.3"
        y="13.2"
        width="2.75"
        height="5.55"
        rx="0.9"
        fill="currentColor"
        fillOpacity="0.14"
        {...iconStrokeProps}
      />
      <path d="M8.35 8.1a4.6 4.6 0 0 1 6.9 0" {...iconStrokeProps} />
      <path d="M10.05 9.85a2.25 2.25 0 0 1 3.5 0" {...iconStrokeProps} />
    </svg>
  );
}

export function BuildAreaIcon({ type }: BuildAreaIconProps) {
  return (
    <IconFrame>
      {type === "ai" ? <AIProductIcon /> : null}
      {type === "automation" ? <AutomationSystemIcon /> : null}
      {type === "analytics" ? <AnalyticsTelecomIcon /> : null}
    </IconFrame>
  );
}
