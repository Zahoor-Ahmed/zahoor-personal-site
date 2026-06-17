import {
  aboutHighlights,
  aboutIntro,
  aboutPillars,
} from "@/app/data/home-content";
import { AboutIntro } from "@/app/components/home/about-intro";
import { homeSectionPaddingX, sectionCardShadow, sectionCardSurface, sectionCardInnerSurface } from "@/app/components/home/section-layout";

export function AboutSection() {
  return (
    <section id="about" className={homeSectionPaddingX}>
      <div className="mx-auto max-w-6xl animate-fade-up-soft animation-delay-200">
        <div className={`grid gap-8 rounded-[2.25rem] px-6 py-8 ${sectionCardSurface} ${sectionCardShadow} sm:px-8 sm:py-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-10`}>
          <AboutIntro
            eyebrow="About"
            title={aboutIntro.title}
            paragraphs={aboutIntro.paragraphs}
            readMoreParagraphs={aboutIntro.readMoreParagraphs}
          />

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((point) => (
                <div
                  key={point.label}
                  className={`rounded-[1.75rem] p-5 ${sectionCardInnerSurface}`}
                >
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
                    {point.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {point.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-slate-800/80 bg-[linear-gradient(135deg,#0f172a,#111827_50%,#172554)] p-6 text-white sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-200/90">
                What I bring
              </p>
              <div className="mt-6 space-y-4">
                {aboutPillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400" />
                    <p className="text-sm leading-7 text-slate-200">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
