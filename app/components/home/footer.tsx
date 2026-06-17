import { homeSectionPaddingX, homeSectionMaxWidth } from "@/app/components/home/section-layout";

export function Footer() {
  return (
    <footer className={`${homeSectionPaddingX} pb-8`}>
      <div className={`mx-auto flex ${homeSectionMaxWidth} flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between`}>
        <p>© 2026 Zahoor Ahmed. Built with Next.js and Tailwind CSS.</p>
        <p className="flex items-center gap-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500" />
          Focused on practical AI, analytics, automation, and telecom
          intelligence.
        </p>
      </div>
    </footer>
  );
}
