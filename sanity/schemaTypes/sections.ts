import { defineField, defineType } from "sanity";

export const whatIBuild = defineType({
  name: "whatIBuild",
  title: "What I Build",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Section intro", type: "sectionIntro" }),
    defineField({
      name: "buildAreas",
      title: "Build area cards",
      type: "array",
      of: [{ type: "buildArea" }],
      validation: (rule) => rule.max(3),
    }),
  ],
  preview: {
    prepare: () => ({ title: "What I Build" }),
  },
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", initialValue: "About" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "paragraphs",
      title: "Intro paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "readMoreParagraphs",
      title: "Read more paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "highlights",
      title: "Highlight cards",
      type: "array",
      of: [{ type: "aboutHighlight" }],
    }),
    defineField({
      name: "pillarsHeading",
      title: "Pillars heading",
      type: "string",
      initialValue: "What I bring",
    }),
    defineField({
      name: "pillars",
      title: "Pillars list",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "About" }),
  },
});

export const projectsSection = defineType({
  name: "projectsSection",
  title: "Products intro",
  type: "document",
  fields: [
    defineField({ name: "intro", title: "Section intro", type: "sectionIntro" }),
  ],
  preview: {
    prepare: () => ({ title: "Products intro" }),
  },
});

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", initialValue: "Contact" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "links",
      title: "CTA links",
      type: "array",
      of: [{ type: "ctaLink" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact" }),
  },
});
