import { aboutPillars, credibilityPoints } from "@/app/data/home-content";
import { SectionHeading } from "@/app/components/home/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] animate-fade-up-soft animation-delay-200">
        <SectionHeading
          eyebrow="About"
          title="A technical builder with a strong bias toward useful outcomes"
          description="I’m focused on work that helps people move faster, make clearer decisions, and ship smarter systems. The goal is not just to prototype ideas, but to turn them into something credible and genuinely useful."
        />

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {credibilityPoints.map((point) => (
              <div
                key={point.label}
                className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.9))] p-5 shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(56,189,248,0.10)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700/75">
                  {point.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {point.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-[linear-gradient(135deg,#0f172a,#111827_50%,#172554)] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] transition hover:shadow-[0_28px_86px_rgba(29,78,216,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/80">
              What I bring
            </p>
            <div className="mt-6 space-y-4">
              {aboutPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <p className="text-sm leading-7 text-slate-200">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
