import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Featured Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow label",
      type: "string",
      description: 'Small label above the title, e.g. "AI Sales System"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "visual",
      title: "Card visual",
      type: "string",
      options: {
        list: [
          { title: "EZ Leads", value: "ez-leads" },
          { title: "Automation", value: "automation" },
          { title: "Analytics", value: "analytics" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "href",
      title: "Link URL",
      type: "url",
      validation: (rule) =>
        rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first (1, 2, 3…)",
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
  },
});
