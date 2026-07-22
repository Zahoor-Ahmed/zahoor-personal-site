import { defineArrayMember, defineField, defineType } from "sanity";

export const heroShowcase = defineType({
  name: "heroShowcase",
  title: "Hero (showcase)",
  type: "document",
  fields: [
    defineField({
      name: "taglines",
      title: "Top taglines",
      type: "array",
      of: [{ type: "tagline" }],
      validation: (rule) => rule.max(2),
    }),
    defineField({
      name: "headlineBefore",
      title: "Headline (before accent word)",
      type: "string",
    }),
    defineField({
      name: "headlineAccent",
      title: "Headline accent word",
      type: "string",
      description: "Shown in blue, e.g. value",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroButtons",
      title: "Hero action buttons",
      type: "array",
      description:
        "Edit the View Products, Contact Me, and LinkedIn buttons. Drag items to change their order.",
      of: [defineArrayMember({ type: "heroButton" })],
      validation: (rule) => rule.max(3).unique(),
    }),
    defineField({
      name: "valueOverlay",
      title: "Portrait value card",
      type: "valueOverlay",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero (showcase)" }),
  },
});
