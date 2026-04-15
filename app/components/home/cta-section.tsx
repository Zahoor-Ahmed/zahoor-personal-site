import { ctaLinks } from "@/app/data/home-content";

export function CtaSection() {
  return (
    <section id="contact" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl animate-fade-up-soft animation-delay-400">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-[linear-gradient(135deg,#0f172a,#111827_45%,#1d4ed8)] px-6 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-sky-200/80">
                Contact
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                If you need a builder who can think through the product and ship
                the implementation, let&apos;s talk.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                I&apos;m open to selected opportunities across AI systems,
                analytics-heavy products, automation workflows, and modern
                digital experiences.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={ctaLinks[0].href}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-[0_14px_34px_rgba(255,255,255,0.14)] transition hover:bg-slate-100"
              >
                {ctaLinks[0].label}
              </a>
              <a
                href={ctaLinks[1].href}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/12"
              >
                {ctaLinks[1].label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
