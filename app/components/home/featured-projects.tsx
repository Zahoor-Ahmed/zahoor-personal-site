import { featuredProjects } from "@/app/data/home-content";
import { SectionHeading } from "@/app/components/home/section-heading";

export function FeaturedProjects() {
  return (
    <section id="projects" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12 animate-fade-up-soft animation-delay-300">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work shaped around practical AI, analytics, and product thinking"
          description="These highlights reflect the kind of systems and experiences I’m interested in building: useful, grounded, and designed to support real work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,250,252,0.94))] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.05)] ring-1 ring-slate-200/60 transition hover:-translate-y-1 hover:shadow-[0_30px_72px_rgba(56,189,248,0.12)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700/75">
                  {project.eyebrow}
                </p>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800/80">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-sky-800">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200/90 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
