import { brandSignals } from "@/app/data/home-content";
import { SectionHeading } from "@/app/components/home/section-heading";

export function BrandSection() {
  return (
    <section className="px-4 pt-[30px] pb-12 sm:px-6 sm:pb-14 lg:px-8">
      <div className="mx-auto max-w-6xl animate-fade-up-soft animation-delay-100">
        <div className="grid gap-8 rounded-[2.25rem] border border-white/70 bg-white/78 px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/60 backdrop-blur-xl sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <SectionHeading
            eyebrow="Brand Direction"
            title="A sectioned, credible homepage built to grow with Zahoor’s work"
            description="The site should feel like a strong personal platform: clear positioning at the top, proof of work in the middle, and room to publish more projects, products, and insights over time."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {brandSignals.map((signal, index) => (
              <div
                key={signal}
                className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,250,252,0.9))] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(56,189,248,0.10)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700/75">
                  0{index + 1}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
