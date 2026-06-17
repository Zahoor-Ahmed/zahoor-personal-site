import { featuredProjects } from "@/app/data/home-content";
import { SectionHeading } from "@/app/components/home/section-heading";
import { homeSectionPaddingX } from "@/app/components/home/section-layout";

export function FeaturedProjects() {
  return (
    <section id="projects" className={homeSectionPaddingX}>
      <div className="mx-auto max-w-6xl space-y-10 animate-fade-up-soft animation-delay-300">
        <SectionHeading
          eyebrow="Featured Projects"
          eyebrowSizeClassName="text-[0.95rem] sm:text-base"
          eyebrowClassName="font-bold tracking-[0.28em] text-sky-600"
          title="Practical work across AI, automation, and analytics"
          description="A selection of products, workflows, and data systems I'm building or have worked on, focused on usefulness, execution, and real-world decision support."
          descriptionClassName="max-w-2xl text-base leading-7 text-slate-700"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600 sm:text-sm">
                  {project.eyebrow}
                </p>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
