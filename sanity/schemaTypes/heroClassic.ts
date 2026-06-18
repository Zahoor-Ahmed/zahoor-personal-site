import { defineField, defineType } from "sanity";

export const heroClassic = defineType({
  name: "heroClassic",
  title: "Hero (classic)",
  type: "document",
  fields: [
    defineField({
      name: "taglines",
      title: "Taglines",
      type: "array",
      of: [{ type: "tagline" }],
    }),
    defineField({ name: "greeting", title: "Greeting", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "valueOverlay",
      title: "Value overlay",
      type: "valueOverlay",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero (classic)" }),
  },
});
