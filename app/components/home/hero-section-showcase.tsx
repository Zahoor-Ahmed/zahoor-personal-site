import Image from "next/image";

import { heroContent } from "@/app/data/home-content";
import { homeSectionPaddingX, sectionCardShadow } from "@/app/components/home/section-layout";

function TaglineIcon({ type }: { type: "chip" | "rocket" }) {
  if (type === "chip") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[var(--hero-showcase-accent)]" fill="none" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4h6M9 20h6M4 9v6M20 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[var(--hero-showcase-accent)]" fill="none" aria-hidden="true">
      <path
        d="M12 2.5l1.3 4.2 4.2 1.3-4.2 1.3L12 13.5l-1.3-4.2-4.2-1.3 4.2-1.3L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 18.5c1.8-1.1 3.6-1.7 5.5-1.7s3.7.6 5.5 1.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ButtonIcon({ type }: { type: "briefcase" | "user" | "mail" }) {
  if (type === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2.2" />
      </svg>
    );
  }

  if (type === "user") {
    return (
      <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m2 7 10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShowcasePortraitFrame() {
  const profile = heroContent.profileImage.classic;

  return (
    <div className="hero-showcase-photo-frame mx-auto lg:mx-0 lg:justify-self-end">
      <div className="hero-showcase-photo-card">
        <Image
          src={profile.src}
          alt={profile.alt}
          fill
          sizes="(max-width: 1024px) 84vw, 340px"
          className="object-cover object-top"
          style={{ objectPosition: "top center" }}
          priority
        />
      </div>

      <div className="hero-showcase-value-badge">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
            <polyline
              points="22 7 13.5 15.5 8.5 10.5 2 17"
              stroke="var(--hero-showcase-accent)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="16 7 22 7 22 13"
              stroke="var(--hero-showcase-accent)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-[0.83rem] leading-snug text-[var(--hero-showcase-badge-text)]">
          Building practical systems.
          <br />
          Creating{" "}
          <strong className="font-semibold text-[var(--hero-showcase-accent)]">
            {heroContent.valueOverlay.highlight}
          </strong>
        </p>
      </div>
    </div>
  );
}

export function HeroSectionShowcase() {
  return (
    <section id="top" className={`relative ${homeSectionPaddingX}`}>
      <div className="relative mx-auto max-w-6xl animate-fade-up-soft">
        <div
          className={`hero-card-showcase relative overflow-hidden rounded-[2.25rem] px-6 py-8 ${sectionCardShadow} sm:px-8 sm:py-10 lg:px-10`}
        >
          <div
            aria-hidden="true"
            className="hero-showcase-dots pointer-events-none absolute top-0 right-0 h-full w-[40%]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-6">
            <div className="z-[1] space-y-0 lg:pr-8">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="hero-showcase-dot-icon shrink-0" aria-hidden="true" />
                <p className="text-[1.15rem] font-semibold tracking-[0.01em] text-[var(--hero-showcase-name)]">
                  {heroContent.name}
                </p>
              </div>

              <div className="mb-6 flex max-w-xl flex-col gap-1.5">
                {heroContent.taglines.map((tagline) => (
                  <div
                    key={tagline.text}
                    className="flex items-center gap-2.5 text-[0.88rem] text-[var(--hero-showcase-tagline)]"
                  >
                    <TaglineIcon type={tagline.icon} />
                    <p>{tagline.text}</p>
                  </div>
                ))}
              </div>

              <div className="hero-showcase-divider mb-7" aria-hidden="true" />

              <p className="mb-2 text-[4rem] font-bold leading-none tracking-[-0.04em] text-white sm:text-[6.5rem]">
                {heroContent.greeting}
              </p>

              <p className="mb-[1.1rem] text-[1.45rem] font-semibold text-[var(--hero-showcase-subheading)]">
                {heroContent.subheading}
              </p>

              <p className="mb-8 max-w-[420px] text-[0.92rem] leading-[1.7] text-[var(--hero-showcase-bio)]">
                {heroContent.description}
              </p>

              <div className="flex flex-wrap gap-3.5">
                {heroContent.buttons.map((button) =>
                  button.variant === "primary" ? (
                    <a
                      key={button.label}
                      href={button.href}
                      className="hero-showcase-btn-primary inline-flex items-center justify-center gap-2 rounded-full px-[1.4rem] py-[0.62rem] text-[0.88rem] font-medium transition"
                    >
                      <ButtonIcon type={button.icon} />
                      {button.label}
                    </a>
                  ) : (
                    <a
                      key={button.label}
                      href={button.href}
                      className="hero-showcase-btn-outline inline-flex items-center justify-center gap-2 rounded-full px-[1.4rem] py-[0.62rem] text-[0.88rem] font-medium transition"
                    >
                      <ButtonIcon type={button.icon} />
                      {button.label}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div className="z-[1]">
              <ShowcasePortraitFrame />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
