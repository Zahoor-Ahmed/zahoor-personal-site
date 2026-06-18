import Image from "next/image";

import type { HomeContent } from "@/app/lib/get-home-content";
import { homeSectionPaddingX, homeSectionMaxWidth, sectionCardShadow } from "@/app/components/home/section-layout";

type HeroSectionClassicProps = {
  content: HomeContent;
};

export function HeroSectionClassic({ content }: HeroSectionClassicProps) {
  const { siteName, profileImage, heroClassic, heroButtons } = content;

  return (
    <section id="top" className={`relative ${homeSectionPaddingX}`}>
      <div className={`relative mx-auto ${homeSectionMaxWidth} animate-fade-up-soft`}>
        <div
          className={`hero-card overflow-hidden rounded-[2rem] px-5 py-6 ${sectionCardShadow} sm:px-7 lg:px-8`}
        >
          <div className="grid gap-5">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-[22px] w-[22px] rounded-full bg-[var(--brand-primary)] ring-4 ring-white" />
                <p className="text-[1.55rem] font-semibold tracking-tight text-slate-950 sm:text-[1.75rem]">
                  {siteName}
                </p>
              </div>
              <div className="max-w-lg space-y-0.5 pl-9 text-sm leading-[1.65] text-slate-900">
                {heroClassic.taglines.map((tagline) => (
                  <p key={tagline.text}>{tagline.text}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-[18rem] lg:mx-0 lg:justify-self-center xl:max-w-[20rem]">
                <div className="relative aspect-square overflow-hidden rounded-full border-[3px] border-white bg-[#d5d5d5] shadow-[0_18px_36px_rgba(15,23,42,0.10)]">
                  <Image
                    key={profileImage.src}
                    src={profileImage.src}
                    alt={profileImage.alt}
                    fill
                    sizes="(max-width: 1024px) 72vw, 320px"
                    className="scale-[1.22] object-cover"
                    style={{ objectPosition: "center -4%" }}
                    priority
                  />
                </div>
              </div>

              <div className="max-w-xl space-y-3">
                <div className="space-y-4">
                  <p className="-ml-0.5 text-[2.8rem] font-semibold leading-none tracking-tight text-slate-950 sm:text-[3.35rem]">
                    {heroClassic.greeting}
                  </p>
                  <p className="pl-0.5 text-[1.3rem] font-semibold tracking-tight text-slate-950 sm:text-[1.45rem]">
                    {heroClassic.subheading}
                  </p>
                </div>

                <p className="max-w-lg pl-0.5 text-[0.94rem] leading-6 text-slate-900">
                  {heroClassic.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {heroButtons.map((button) => {
                    const isExternal = button.href.startsWith("http");

                    return button.variant === "primary" ? (
                      <a
                        key={button.label}
                        href={button.href}
                        className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-medium tracking-tight text-white shadow-[0_4px_14px_var(--brand-primary-shadow)] transition hover:bg-[var(--brand-primary-hover)]"
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {button.label}
                      </a>
                    ) : (
                      <a
                        key={button.label}
                        href={button.href}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium tracking-tight text-slate-950 transition hover:border-slate-300 hover:bg-slate-50"
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {button.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
