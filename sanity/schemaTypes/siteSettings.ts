import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "heroVariant",
      title: "Hero design",
      type: "string",
      options: {
        list: [
          { title: "Showcase (dark)", value: "showcase" },
          { title: "Classic (light)", value: "classic" },
        ],
        layout: "radio",
      },
      initialValue: "showcase",
    }),
    defineField({
      name: "siteName",
      title: "Site name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "navLinks",
      title: "Navigation links",
      type: "array",
      of: [{ type: "navLink" }],
    }),
    defineField({
      name: "heroButtons",
      title: "Hero buttons",
      type: "array",
      of: [{ type: "heroButton" }],
    }),
    defineField({
      name: "profileImage",
      title: "Profile image",
      type: "image",
      description: "After uploading, expand the image and fill in Alt text — Publish stays disabled until alt text is set.",
      options: { hotspot: true },
      validation: (rule) =>
        rule.custom((value: { alt?: string; asset?: { _ref?: string } } | undefined) => {
          if (value?.asset?._ref && !value.alt?.trim()) {
            return "Add alt text inside the image field before publishing.";
          }
          return true;
        }),
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Required for accessibility when an image is uploaded.",
          initialValue: "Portrait of Zahoor Ahmed",
        }),
      ],
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "Square image works best (32×32 or larger). Shown in browser tabs and bookmarks.",
      options: { accept: "image/png,image/svg+xml,image/jpeg,image/webp" },
    }),
    defineField({
      name: "footerCopyright",
      title: "Footer copyright line",
      type: "string",
    }),
    defineField({
      name: "footerTagline",
      title: "Footer tagline",
      type: "string",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
