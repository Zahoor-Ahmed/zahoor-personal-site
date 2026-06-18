import type { HomeContent } from "@/app/lib/get-home-content";
import { homeSectionPaddingX, homeSectionMaxWidth, sectionDarkBodyText } from "@/app/components/home/section-layout";

type CtaSectionProps = {
  contact: HomeContent["contact"];
};

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
      <path d="M3 7v10h18V7" />
    </svg>
  );
}

function ContactGraphic() {
  const dotGrid = (
    <div className="flex gap-3 sm:gap-4">
      {Array.from({ length: 3 }).map((_, column) => (
        <div key={column} className="flex flex-col gap-3">
          {Array.from({ length: 4 }).map((__, row) => (
            <span
              key={row}
              className="h-1.5 w-1.5 rounded-full bg-sky-300/80"
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative mx-auto flex h-40 w-full max-w-xs items-center justify-center sm:h-48">
      <div className="absolute inset-0 flex items-center justify-between px-1 opacity-35 sm:px-3">
        {dotGrid}
        {dotGrid}
      </div>

      <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
        <span className="absolute inset-0 rounded-full border border-sky-400/15" />
        <span className="absolute inset-3 rounded-full border border-sky-400/20" />
        <span className="absolute inset-7 rounded-full border border-sky-400/25" />
        <span className="absolute inset-0 rounded-full bg-sky-500/10 blur-2xl" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb,#1d4ed8)] shadow-[0_0_40px_rgba(37,99,235,0.45)] sm:h-20 sm:w-20">
          <EnvelopeIcon className="h-8 w-8 text-white sm:h-9 sm:w-9" />
        </span>
      </div>
    </div>
  );
}

export function CtaSection({ contact }: CtaSectionProps) {
  const [primaryLink, secondaryLink] = contact.links;

  return (
    <section id="contact" className={homeSectionPaddingX}>
      <div className={`mx-auto ${homeSectionMaxWidth} animate-fade-up-soft animation-delay-400`}>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-[linear-gradient(135deg,#070b14_0%,#0f172a_42%,#1e3a8a_100%)] px-5 py-9 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-8 sm:py-11">
          <div className="pointer-events-none absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="space-y-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-sky-300/90">
                  {contact.eyebrow}
                </p>
                <span className="mt-3 block h-0.5 w-12 rounded-full bg-sky-400" />
              </div>

              <h2 className="max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {contact.title}
                <span className="text-sky-400">?</span>
              </h2>

              <p className={`max-w-xl ${sectionDarkBodyText}`}>
                {contact.description}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <ContactGraphic />

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                {primaryLink ? (
                  <a
                    href={primaryLink.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(255,255,255,0.14)] transition hover:bg-slate-100"
                  >
                    <EnvelopeIcon className="h-4 w-4" />
                    {primaryLink.label}
                  </a>
                ) : null}
                {secondaryLink ? (
                  <a
                    href={secondaryLink.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/50 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {secondaryLink.label}
                    <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
