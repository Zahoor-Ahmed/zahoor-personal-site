/**
 * Homepage layout switches.
 * Change `heroVariant` to swap hero designs without touching component code.
 *
 * - "showcase" — dark card hero (reference design)
 * - "classic"  — original light gradient hero
 */
export type HeroVariant = "classic" | "showcase";

export const homeConfig = {
  heroVariant: "showcase" satisfies HeroVariant,
} as const;
