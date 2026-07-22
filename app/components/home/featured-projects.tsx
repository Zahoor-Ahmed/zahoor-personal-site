import { featuredProjects } from "@/app/data/home-content";
import type { HomeContent } from "@/app/lib/get-home-content";
import { SectionHeading } from "@/app/components/home/section-heading";
import {
  homeSectionPaddingX,
  homeSectionMaxWidth,
  sectionCardShadow,
  sectionCardSurface,
  sectionIntroText,
  sectionCardText,
} from "@/app/components/home/section-layout";
import { ProjectVisual } from "@/app/components/home/visuals/project-visual";
import { ProductComingSoonButton } from "@/app/components/home/product-coming-soon-button";
import { client } from "@/sanity/lib/client";
import {
  featuredProjectsQuery,
  type SanityFeaturedProject,
} from "@/sanity/queries/projects";

type FeaturedProjectsProps = {
  intro: HomeContent["projectsSection"];
};

async function getFeaturedProjects(): Promise<SanityFeaturedProject[]> {
  try {
    const projects = await client.fetch<SanityFeaturedProject[]>(
      featuredProjectsQuery,
      {},
      { cache: "no-store" },
    );
    return projects ?? [];
  } catch {
    return [];
  }
}

export async function FeaturedProjects({ intro }: FeaturedProjectsProps) {
  const sanityProjects = await getFeaturedProjects();
  const projects =
    sanityProjects.length > 0
      ? sanityProjects
      : featuredProjects.map((project) => ({ ...project }));

  return (
    <section id="products" className={homeSectionPaddingX}>
      <div className={`mx-auto ${homeSectionMaxWidth} space-y-6 animate-fade-up-soft animation-delay-300`}>
        <SectionHeading
          eyebrow={intro.eyebrow}
          eyebrowSizeClassName="text-[0.95rem] sm:text-base"
          eyebrowClassName="font-bold tracking-[0.28em] text-sky-600"
          title={intro.title}
          description={intro.description}
          descriptionClassName={`max-w-2xl ${sectionIntroText}`}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`flex h-full flex-col rounded-[1.5rem] ${sectionCardSurface} ${sectionCardShadow}`}
            >
              <div className="p-4 pb-0">
                <ProjectVisual type={project.visual} title={project.title} />
              </div>

              <div className="flex flex-1 flex-col p-5 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600 sm:text-sm">
                    {project.eyebrow}
                  </p>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                  {project.title}
                </h3>
                <p className={`mt-3 flex-1 ${sectionCardText}`}>
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ProductComingSoonButton productTitle={project.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
