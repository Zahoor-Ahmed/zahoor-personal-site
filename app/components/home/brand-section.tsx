import type { HomeContent } from "@/app/lib/get-home-content";
import { SectionHeading } from "@/app/components/home/section-heading";
import {
  homeSectionPaddingX,
  homeSectionMaxWidth,
  sectionCardShadow,
  sectionCardSurface,
  sectionCardInnerSurface,
  sectionIntroText,
  sectionCardText,
} from "@/app/components/home/section-layout";
import { BuildAreaIcon } from "@/app/components/home/visuals/build-area-icon";

type BrandSectionProps = {
  whatIBuild: HomeContent["whatIBuild"];
};

function CardArcDecoration() {
  return (
    <>
      <span className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full border border-sky-100" />
      <span className="pointer-events-none absolute -right-3 -bottom-3 h-16 w-16 rounded-full border border-sky-100/80" />
      <span className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 rounded-full border border-sky-100/60" />
    </>
  );
}

export function BrandSection({ whatIBuild }: BrandSectionProps) {
  return (
    <section id="what-i-build" className={`relative z-10 ${homeSectionPaddingX}`}>
      <div className={`mx-auto ${homeSectionMaxWidth} animate-fade-up-soft animation-delay-100`}>
        <div className={`relative grid gap-5 rounded-[2rem] px-5 py-6 ${sectionCardSurface} ${sectionCardShadow} sm:px-6 sm:py-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:px-7`}>
          <SectionHeading
            eyebrow={whatIBuild.eyebrow}
            eyebrowSizeClassName="text-[0.95rem] sm:text-base"
            eyebrowClassName="font-bold tracking-[0.28em] text-[var(--brand-accent)]"
            showEyebrowAccent
            title={whatIBuild.title}
            description={whatIBuild.description}
            descriptionClassName={sectionIntroText}
          />

          <div className="relative grid gap-3 sm:grid-cols-3">
            {whatIBuild.buildAreas.map((area, index) => (
              <div
                key={area.title}
                className={`relative rounded-[1.5rem] p-4 shadow-[0_10px_28px_rgba(15,23,42,0.05)] ${sectionCardInnerSurface}`}
              >
                <CardArcDecoration />

                <div className="relative flex items-start justify-between gap-3">
                  <BuildAreaIcon type={area.icon} />
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                    0{index + 1}
                  </p>
                </div>

                <h3 className="relative mt-2.5 text-base font-bold leading-snug tracking-tight text-slate-950 sm:text-lg">
                  {area.title}
                </h3>
                <span className="relative mt-2 block h-0.5 w-10 rounded-full bg-[var(--brand-accent-line)]" />
                <p className={`relative mt-2.5 ${sectionCardText}`}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
