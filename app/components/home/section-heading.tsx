type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  descriptions?: readonly string[];
  eyebrowClassName?: string;
  eyebrowSizeClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  descriptions,
  eyebrowClassName = "text-slate-500",
  eyebrowSizeClassName = "text-sm",
  descriptionClassName = "text-base leading-7 text-slate-600 sm:text-lg",
}: SectionHeadingProps) {
  const paragraphs = descriptions ?? (description ? [description] : []);

  return (
    <div className="max-w-2xl space-y-4">
      <p
        className={`${eyebrowSizeClassName} font-semibold uppercase tracking-[0.24em] ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>
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
