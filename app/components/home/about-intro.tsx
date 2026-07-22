type AboutIntroProps = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  isExpanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
};

export function AboutIntro({
  eyebrow,
  title,
  paragraphs,
  isExpanded,
  onExpandedChange,
}: AboutIntroProps) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#258cf1] sm:text-[0.95rem]">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-[440px] text-[1.7rem] font-semibold leading-[1.2] text-slate-950 sm:text-[2rem]">
        {title}
      </h2>
      <div className="mt-4 space-y-3">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="whitespace-pre-line text-sm leading-6 text-slate-700 sm:text-[0.95rem]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {!isExpanded ? (
        <button
          type="button"
          onClick={() => onExpandedChange(true)}
          className="mt-4 inline-flex items-center text-sm font-bold text-[#1685ed] transition hover:text-[#0874d5]"
          aria-expanded="false"
        >
          <>
            More about my background <span aria-hidden="true">&rarr;</span>
          </>
        </button>
      ) : null}
    </div>
  );
}
