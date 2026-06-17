import { buildAreas } from "@/app/data/home-content";
import { SectionHeading } from "@/app/components/home/section-heading";
import { homeSectionPaddingX, sectionCardShadow, sectionCardSurface, sectionCardInnerSurface } from "@/app/components/home/section-layout";
import { BuildAreaIcon } from "@/app/components/home/visuals/build-area-icon";

function CardArcDecoration() {
  return (
    <>
      <span className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full border border-sky-100" />
      <span className="pointer-events-none absolute -right-3 -bottom-3 h-16 w-16 rounded-full border border-sky-100/80" />
      <span className="pointer-events-none absolute right-4 bottom-4 h-8 w-8 rounded-full border border-sky-100/60" />
    </>
  );
}

export function BrandSection() {
  return (
    <section className={homeSectionPaddingX}>
      <div className="mx-auto max-w-6xl animate-fade-up-soft animation-delay-100">
        <div className={`relative grid gap-8 rounded-[2.25rem] px-6 py-8 ${sectionCardSurface} ${sectionCardShadow} sm:px-8 sm:py-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-10`}>
          <SectionHeading
            eyebrow="What I Build"
            eyebrowSizeClassName="text-[0.95rem] sm:text-base"
            eyebrowClassName="font-bold tracking-[0.28em] text-[var(--brand-accent)]"
            showEyebrowAccent
            title="Practical AI, data, and automation systems"
            description="I build useful digital systems that help people reduce manual work, make clearer decisions, and move ideas from concept to execution. My long-term direction is applying this work at the intersection of AI, analytics, and telecom systems."
            descriptionClassName="text-base leading-7 text-slate-700"
          />

          <div className="relative grid gap-4 sm:grid-cols-3">
            {buildAreas.map((area, index) => (
              <div
                key={area.title}
                className={`relative rounded-[1.75rem] p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] ${sectionCardInnerSurface}`}
              >
                <CardArcDecoration />

                <div className="relative flex items-start justify-between gap-3">
                  <BuildAreaIcon type={area.icon} />
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                    0{index + 1}
                  </p>
                </div>

                <h3 className="relative mt-4 text-lg font-bold leading-snug tracking-tight text-slate-950 sm:text-xl">
                  {area.title}
                </h3>
                <span className="relative mt-2 block h-0.5 w-10 rounded-full bg-[var(--brand-accent-line)]" />
                <p className="relative mt-3 text-sm leading-7 text-slate-600">
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
