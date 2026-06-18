import Image from "next/image";

import type { HomeContent } from "@/app/lib/get-home-content";
import { homeSectionPaddingX, homeSectionMaxWidth } from "@/app/components/home/section-layout";

import "./hero-showcase.css";

type HeroSectionShowcaseProps = {
  content: HomeContent;
};

function ChipTaglineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      <path d="M10 10h4v4h-4z" />
    </svg>
  );
}

function RocketTaglineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 16c-2 2-2.5 5-2.5 5s3-.5 5-2.5l2-2-2.5-2.5-2 2z" />
      <path d="M13 11l-4 4" />
      <path d="M14.5 2.5c3.5-.5 7 3 6.5 6.5l-1.2 4.8-10.4 10.4-4.6-4.6L15.2 9.2l4.8-1.2z" />
    </svg>
  );
}

function ProductsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h18v12H3z" />
      <path d="M8 7V5h8v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16v14H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ShowcasePortraitStage({
  profile,
  valueOverlay,
}: {
  profile: HomeContent["profileImage"];
  valueOverlay: HomeContent["heroShowcase"]["valueOverlay"];
}) {
  return (
    <div className="hero-showcase-portrait-stage" aria-hidden="true">
      <div className="hero-showcase-portrait-cluster">
        <div className="hero-showcase-portrait-frame" />
        <div className="hero-showcase-portrait-wave" />
        <div className="hero-showcase-portrait">
          <Image
            key={profile.src}
            src={profile.src}
            alt={profile.alt}
            fill
            sizes="(max-width: 900px) 310px, 330px"
            priority
          />
        </div>
        <div className="hero-showcase-value-card">
          <p>
            {valueOverlay.lead}
            <br />
            <strong>{valueOverlay.highlight}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroSectionShowcase({ content }: HeroSectionShowcaseProps) {
  const { heroShowcase, siteName, heroButtons, profileImage } = content;
  const firstTagline = heroShowcase.taglines[0] ?? { icon: "chip" as const, text: "" };
  const secondTagline = heroShowcase.taglines[1] ?? { icon: "rocket" as const, text: "" };

  return (
    <section id="top" className={`relative z-0 ${homeSectionPaddingX}`}>
      <div className={`relative mx-auto ${homeSectionMaxWidth} animate-fade-up-soft`}>
        <div className="hero-card-showcase" aria-label="Zahoor Ahmed hero section">
          <div className="hero-showcase-corner-lines" />

          <div className="hero-showcase-content">
            <div className="hero-showcase-name-row">
              <span className="hero-showcase-orb" aria-hidden="true" />
              <h1 className="hero-showcase-name">{siteName}</h1>
            </div>

            <div className="hero-showcase-mini-lines">
              <div className="hero-showcase-mini-line">
                <ChipTaglineIcon />
                <span>{firstTagline.text}</span>
              </div>
              <div className="hero-showcase-mini-line">
                <RocketTaglineIcon />
                <span>{secondTagline.text}</span>
              </div>
            </div>

            <div className="hero-showcase-blue-line" aria-hidden="true" />

            <h2 className="hero-showcase-hello hero-showcase-headline">
              {heroShowcase.headline.before}
              <span className="hero-showcase-headline-accent">
                {heroShowcase.headline.accent}
              </span>
            </h2>
            <p className="hero-showcase-desc">{heroShowcase.description}</p>

            <div className="hero-showcase-actions">
              {heroButtons.map((button) => {
                const isExternal = button.href.startsWith("http");

                return button.variant === "primary" ? (
                  <a
                    key={button.label}
                    href={button.href}
                    className="hero-showcase-btn hero-showcase-btn-primary"
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {button.icon === "briefcase" ? <ProductsIcon /> : null}
                    {button.label}
                  </a>
                ) : (
                  <a
                    key={button.label}
                    href={button.href}
                    className="hero-showcase-btn"
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {button.icon === "user" ? <ContactIcon /> : null}
                    {button.icon === "mail" ? <EmailIcon /> : null}
                    {button.icon === "linkedin" ? <LinkedInIcon /> : null}
                    {button.label}
                  </a>
                );
              })}
            </div>
          </div>

          <ShowcasePortraitStage profile={profileImage} valueOverlay={heroShowcase.valueOverlay} />
        </div>
      </div>
    </section>
  );
}
