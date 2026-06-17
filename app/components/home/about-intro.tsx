"use client";

import { useState } from "react";

import { SectionHeading } from "@/app/components/home/section-heading";

type AboutIntroProps = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  readMoreParagraphs: readonly string[];
};

export function AboutIntro({
  eyebrow,
  title,
  paragraphs,
  readMoreParagraphs,
}: AboutIntroProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <SectionHeading
        eyebrow={eyebrow}
        eyebrowSizeClassName="text-[0.95rem] sm:text-base"
        eyebrowClassName="font-bold tracking-[0.28em] text-sky-600"
        title={title}
        descriptions={paragraphs}
        descriptionClassName="text-base leading-7 text-slate-700"
      />

      {isExpanded ? (
        <div className="space-y-4">
          {readMoreParagraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-7 text-slate-700"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="inline-flex items-center text-sm font-semibold text-sky-600 transition hover:text-sky-700"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Read less" : "Read more →"}
      </button>
    </div>
  );
}
