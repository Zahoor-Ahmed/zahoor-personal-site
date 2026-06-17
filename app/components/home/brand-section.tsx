import { buildAreas } from "@/app/data/home-content";
import { SectionHeading } from "@/app/components/home/section-heading";
import { homeSectionPaddingX } from "@/app/components/home/section-layout";
import { BuildAreaIcon } from "@/app/components/home/visuals/build-area-icon";

export function BrandSection() {
  return (
    <section className={homeSectionPaddingX}>
      <div className="mx-auto max-w-6xl animate-fade-up-soft animation-delay-100">
        <div className="grid gap-8 rounded-[2.25rem] bg-white px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-10">
          <SectionHeading
            eyebrow="What I Build"
            eyebrowSizeClassName="text-[0.95rem] sm:text-base"
            eyebrowClassName="font-bold tracking-[0.28em] text-sky-600"
            title="Practical AI, data, and automation systems"
            description="I build useful digital systems that help people reduce manual work, make clearer decisions, and move ideas from concept to execution. My long-term direction is applying this work at the intersection of AI, analytics, and telecom systems."
            descriptionClassName="text-base leading-7 text-slate-700"
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {buildAreas.map((area, index) => (
              <div
                key={area.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <BuildAreaIcon type={area.icon} />
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
                    0{index + 1}
                  </p>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug tracking-tight text-slate-950 sm:text-xl">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
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
