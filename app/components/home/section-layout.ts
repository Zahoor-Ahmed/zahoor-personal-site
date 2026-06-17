/** Horizontal padding shared by all home sections */
export const homeSectionPaddingX = "px-4 sm:px-6 lg:px-8";

/**
 * Max content width — navbar, hero, and all section cards.
 * Adjust here only; every section imports this constant.
 *
 * Common values:
 *   max-w-6xl        → 1152px (default)
 *   max-w-[1200px]   → 1200px (slightly wider)
 *   max-w-7xl        → 1280px (widest)
 */
export const homeSectionMaxWidth = "max-w-7xl";

/** Section intro paragraphs (left column under each heading) */
export const sectionIntroText = "text-lg leading-8 text-slate-700 sm:text-xl";

/** Body text inside inner cards and tiles */
export const sectionCardText = "text-base leading-7 text-slate-600 sm:text-lg";

/** Body text on dark panels (e.g. About pillars) */
export const sectionDarkBodyText = "text-base leading-7 text-slate-200 sm:text-lg";

/** Shared elevation for white section cards on the page background */
export const sectionCardShadow = "shadow-[var(--section-card-shadow)]";

/** Dimmer gradient surfaces for section cards (hero uses .hero-card instead) */
export const sectionCardSurface = "section-card overflow-hidden";
export const sectionCardInnerSurface = "section-card-inner overflow-hidden";

/**
 * Vertical gap between home sections.
 * Change this one value to adjust spacing between Hero, What I Build, About, etc.
 * Examples: gap-4 (16px), gap-5 (20px), gap-6 (24px), gap-8 (32px)
 */
export const homeSectionGap = "gap-8";
