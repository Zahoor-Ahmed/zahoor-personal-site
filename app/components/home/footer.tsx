import type { HomeContent } from "@/app/lib/get-home-content";
import { homeSectionPaddingX, homeSectionMaxWidth } from "@/app/components/home/section-layout";

type FooterProps = {
  footer: HomeContent["footer"];
};

export function Footer({ footer }: FooterProps) {
  return (
    <footer className={`${homeSectionPaddingX} pb-8`}>
      <div className={`mx-auto flex ${homeSectionMaxWidth} flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between`}>
        <p>{footer.copyright}</p>
        <p className="flex items-center gap-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500" />
          {footer.tagline}
        </p>
      </div>
    </footer>
  );
}
