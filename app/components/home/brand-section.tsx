import type { HomeContent } from "@/app/lib/get-home-content";
import {
  homeSectionPaddingX,
  homeSectionMaxWidth,
  sectionCardShadow,
  sectionCardSurface,
  sectionCardInnerSurface,
} from "@/app/components/home/section-layout";
import { BuildAreaIcon } from "@/app/components/home/visuals/build-area-icon";

import "./brand-section.css";

type BrandSectionProps = {
  whatIBuild: HomeContent["whatIBuild"];
};

function CardArcDecoration() {
  return (
    <span className="services-card-arcs" aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

export function BrandSection({ whatIBuild }: BrandSectionProps) {
  return (
    <section id="services" className={`relative z-10 ${homeSectionPaddingX}`}>
      <div className={`mx-auto ${homeSectionMaxWidth} animate-fade-up-soft animation-delay-100`}>
        <div className={`services-shell ${sectionCardSurface} ${sectionCardShadow}`}>
          <span className="services-shell-arcs" aria-hidden="true">
            <span />
            <span />
          </span>

          <div className="services-intro">
            <div>
              <p className="services-eyebrow">{whatIBuild.eyebrow}</p>
              <span className="services-eyebrow-line" aria-hidden="true" />
            </div>
            <h2>{whatIBuild.title}</h2>
            <p className="services-description">{whatIBuild.description}</p>
          </div>

          <div className="services-grid">
            {whatIBuild.buildAreas.map((area, index) => (
              <article
                key={area.title}
                className={`services-card ${sectionCardInnerSurface}`}
              >
                <CardArcDecoration />

                <div className="services-card-topline">
                  <BuildAreaIcon type={area.icon} />
                  <p className="services-card-number">
                    0{index + 1}
                  </p>
                </div>

                <h3>{area.title}</h3>
                <span className="services-card-line" aria-hidden="true" />
                <p className="services-card-description">{area.description}</p>

                <a
                  href={area.ctaHref}
                  className="services-card-cta"
                  {...(area.ctaHref.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span>{area.ctaLabel}</span>
                  <ArrowRightIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
