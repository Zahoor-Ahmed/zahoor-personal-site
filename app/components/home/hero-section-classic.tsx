import Image from "next/image";

import { heroContent } from "@/app/data/home-content";
import { homeSectionPaddingX, sectionCardShadow } from "@/app/components/home/section-layout";

export function HeroSectionClassic() {
  const profile = heroContent.profileImage.classic;

  return (
    <section id="top" className={`relative ${homeSectionPaddingX}`}>
      <div className="relative mx-auto max-w-6xl animate-fade-up-soft">
        <div
          className={`hero-card overflow-hidden rounded-[2.25rem] px-6 py-[28px] ${sectionCardShadow} sm:px-8 lg:px-10`}
        >
          <div className="grid gap-5">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-[22px] w-[22px] rounded-full bg-[var(--brand-primary)] ring-4 ring-white" />
                <p className="text-[1.8rem] font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                  {heroContent.name}
                </p>
              </div>
              <div className="max-w-xl space-y-0.5 pl-9 text-sm leading-[1.7] text-slate-900 sm:text-[0.98rem]">
                {heroContent.taglines.map((tagline) => (
                  <p key={tagline.text}>{tagline.text}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-[20rem] lg:mx-0 lg:justify-self-center xl:max-w-[22rem]">
                <div className="relative aspect-square overflow-hidden rounded-full border-[3px] border-white bg-[#d5d5d5] shadow-[0_18px_36px_rgba(15,23,42,0.10)]">
                  <Image
                    src={profile.src}
                    alt={profile.alt}
                    fill
                    sizes="(max-width: 1024px) 72vw, 384px"
                    className={profile.className}
                    style={profile.style}
                    priority
                  />
                </div>
              </div>

              <div className="max-w-2xl space-y-4">
                <div className="space-y-4">
                  <p className="-ml-0.5 text-[3.35rem] font-semibold leading-none tracking-tight text-slate-950 sm:text-[4.1rem]">
                    {heroContent.greeting}
                  </p>
                  <p className="pl-0.5 text-[1.55rem] font-semibold tracking-tight text-slate-950 sm:text-[1.7rem]">
                    {heroContent.subheading}
                  </p>
                </div>

                <p className="max-w-xl pl-0.5 text-[0.98rem] leading-7 text-slate-900 sm:text-[1rem]">
                  {heroContent.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {heroContent.buttons.map((button) =>
                    button.variant === "primary" ? (
                      <a
                        key={button.label}
                        href={button.href}
                        className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-[0.95rem] font-medium tracking-tight text-white shadow-[0_4px_14px_var(--brand-primary-shadow)] transition hover:bg-[var(--brand-primary-hover)]"
                      >
                        {button.label}
                      </a>
                    ) : (
                      <a
                        key={button.label}
                        href={button.href}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-[0.95rem] font-medium tracking-tight text-slate-950 transition hover:border-slate-300 hover:bg-slate-50"
                      >
                        {button.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
