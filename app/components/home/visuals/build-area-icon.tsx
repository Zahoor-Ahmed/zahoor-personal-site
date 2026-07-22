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
  strokeWidth: 1.65,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[18px] border"
      style={iconBoxStyle}
    >
      {children}
    </div>
  );
}

function AIProductIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M24 10V6" {...iconStrokeProps} />
      <circle cx="24" cy="4.5" r="2" {...iconStrokeProps} />
      <rect x="10" y="15" width="28" height="22" rx="9" {...iconStrokeProps} />
      <path d="M10 22H7.5a3.5 3.5 0 0 0-3.5 3.5v3A3.5 3.5 0 0 0 7.5 32H10M38 22h2.5a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5H38" {...iconStrokeProps} />
      <rect x="16" y="21" width="16" height="10" rx="5" {...iconStrokeProps} />
      <circle cx="21" cy="26" r="1.2" fill="currentColor" />
      <circle cx="27" cy="26" r="1.2" fill="currentColor" />
      <path d="M34 12V5h10v8h-6l-3.5 3v-4H34Z" {...iconStrokeProps} />
      <path d="M37 8h4M37 10.5h2.5" {...iconStrokeProps} />
    </svg>
  );
}

function AutomationSystemIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <circle cx="19" cy="17" r="9" {...iconStrokeProps} />
      <circle cx="19" cy="17" r="3.5" {...iconStrokeProps} />
      <path d="M19 5v3M19 26v3M7 17h3M28 17h3M10.5 8.5l2.2 2.2M25.3 23.3l2.2 2.2M27.5 8.5l-2.2 2.2M12.7 23.3l-2.2 2.2" {...iconStrokeProps} />
      <path d="M20 29v11h17" {...iconStrokeProps} />
      <path d="M20 34h9v-8h9" {...iconStrokeProps} />
      <circle cx="20" cy="41" r="2.5" {...iconStrokeProps} />
      <circle cx="30" cy="34" r="2.5" {...iconStrokeProps} />
      <circle cx="39" cy="26" r="2.5" {...iconStrokeProps} />
      <circle cx="38" cy="41" r="2.5" {...iconStrokeProps} />
    </svg>
  );
}

function AnalyticsTelecomIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
      <path d="M7 40h35" {...iconStrokeProps} />
      <rect x="10" y="31" width="5" height="9" {...iconStrokeProps} />
      <rect x="19" y="26" width="5" height="14" {...iconStrokeProps} />
      <rect x="28" y="20" width="5" height="20" {...iconStrokeProps} />
      <rect x="37" y="13" width="5" height="27" {...iconStrokeProps} />
      <path d="M9 22c8 0 14-2 19-6 4-3 7-7 11-13" {...iconStrokeProps} />
      <path d="m33 5 7-2 1 7" {...iconStrokeProps} />
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
