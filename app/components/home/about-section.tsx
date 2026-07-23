"use client";

import { useState } from "react";

import type { HomeContent } from "@/app/lib/get-home-content";
import { AboutIntro } from "@/app/components/home/about-intro";
import {
  homeSectionMaxWidth,
  homeSectionPaddingX,
  sectionCardShadow,
  sectionCardSurface,
} from "@/app/components/home/section-layout";

type AboutSectionProps = { about: HomeContent["about"] };

const journeyCards = [
  { title: "Where I started", description: "Telecom analytics, reporting, and customer experience", icon: "telecom" },
  { title: "What I learned", description: "How to turn complex data and messy operations into clearer decisions", icon: "insight" },
  { title: "What I build now", description: "Practical AI, automation, and analytics systems for real business execution", icon: "execution" },
] as const;

function JourneyIcon({ icon }: { icon: (typeof journeyCards)[number]["icon"] }) {
  if (icon === "telecom") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 17v23M18 40h12M20 28h8M21.5 23h5L31 40H17l4.5-17Z" /><path d="M16.5 12.5a10.5 10.5 0 0 0 0 15M31.5 12.5a10.5 10.5 0 0 1 0 15M12 8a17 17 0 0 0 0 24M36 8a17 17 0 0 1 0 24" /></svg>;
  }

  if (icon === "insight") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M32.5 29.5c3.4-2.6 5.5-6.7 5.5-11.2C38 10.4 31.7 4 24 4S10 10.4 10 18.3c0 4.6 2.1 8.7 5.5 11.2 2.1 1.6 3.5 4 3.5 6.5h10c0-2.5 1.4-4.9 3.5-6.5Z" /><path d="M19 40h10M21 44h6M24 0v-3M7 8 3.5 4.5M41 8l3.5-3.5M5 20H0M48 20h-5" /></svg>;
  }

  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29.5 5.5c6.5-1.5 11-1 13-1-.1 2.4-.7 7.5-5.7 13.7L26 29l-8-8L29.5 5.5Z" /><path d="m21 18-9 1-6 6 11 2M29 27l-1 9-6 6-2-11M29 12l6 6M14 32l-8 8M14 38l-4 4" /><circle cx="31" cy="16" r="2.5" /></svg>;
}

export function AboutSection({ about }: AboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className={homeSectionPaddingX}>
      <div className={`mx-auto ${homeSectionMaxWidth}`}>
        <div className={`grid gap-8 rounded-[1.75rem] px-7 py-9 ${sectionCardSurface} ${sectionCardShadow} sm:px-9 sm:py-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-x-10 lg:gap-y-6`} data-scroll-reveal="up">
          <AboutIntro
            eyebrow={about.eyebrow}
            title={about.title}
            paragraphs={about.paragraphs}
            isExpanded={isExpanded}
            onExpandedChange={setIsExpanded}
          />

          <div className="grid gap-5 sm:grid-cols-3 lg:mt-14">
            {journeyCards.map((card, index) => (
              <article key={card.title} className="flex min-h-[320px] flex-col rounded-[1.35rem] border border-[#cbd9e9] bg-white/10 px-6 pb-8 pt-6 shadow-[0_12px_32px_rgba(66,102,143,0.06)]" data-scroll-reveal="right" data-reveal-delay={index * 110}>
                <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#e5eef9] text-[#258cf1]">
                  <span className="block h-11 w-11 [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.8] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]">
                    <JourneyIcon icon={card.icon} />
                  </span>
                </div>
                <h3 className="mt-4 text-[1.05rem] font-bold leading-6 text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                <span className="mt-auto block h-0.5 w-11 bg-[#9dcdf8]" aria-hidden="true" />
              </article>
            ))}
          </div>

          {isExpanded ? (
            <div className="space-y-3 lg:col-span-2">
              {about.readMoreParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="w-full whitespace-pre-line text-sm leading-6 text-slate-700 sm:text-[0.95rem]"
                >
                  {paragraph}
                </p>
              ))}
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center text-sm font-bold text-[#1685ed] transition hover:text-[#0874d5]"
                aria-expanded="true"
              >
                Show less
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
