import { groq } from "next-sanity";

export const featuredProjectsQuery = groq`
  *[_type == "project"] | order(sortOrder asc) {
    title,
    eyebrow,
    visual,
    description,
    tags,
    href
  }
`;

export type SanityFeaturedProject = {
  title: string;
  eyebrow: string;
  visual: "ez-leads" | "automation" | "analytics";
  description: string;
  tags: string[];
  href: string;
};
