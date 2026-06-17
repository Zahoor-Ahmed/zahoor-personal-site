type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  descriptions?: readonly string[];
  eyebrowClassName?: string;
  eyebrowSizeClassName?: string;
  showEyebrowAccent?: boolean;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  descriptions,
  eyebrowClassName = "text-slate-500",
  eyebrowSizeClassName = "text-sm",
  showEyebrowAccent = false,
  descriptionClassName = "text-base leading-7 text-slate-600 sm:text-lg",
}: SectionHeadingProps) {
  const paragraphs = descriptions ?? (description ? [description] : []);

  return (
    <div className="max-w-2xl space-y-4">
      <div>
        <p
          className={`${eyebrowSizeClassName} font-semibold uppercase tracking-[0.24em] ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
        {showEyebrowAccent ? (
          <span className="mt-3 block h-0.5 w-12 rounded-full bg-[var(--brand-accent-line)]" />
        ) : null}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <div className="space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={descriptionClassName}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
