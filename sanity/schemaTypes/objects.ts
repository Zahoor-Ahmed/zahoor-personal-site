import { defineField, defineType } from "sanity";

export const navLink = defineType({
  name: "navLink",
  title: "Navigation link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({
      name: "href",
      title: "URL",
      type: "string",
      description: "Use #services, #products, #about, or a full URL",
    }),
  ],
});

export const heroButton = defineType({
  name: "heroButton",
  title: "Hero button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Destination",
      type: "string",
      description: "Use a section link such as #products or #contact, or a full https:// URL.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Outline", value: "outline" },
        ],
        layout: "radio",
      },
      initialValue: "outline",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon (optional)",
      type: "string",
      description: "Leave empty for a text-only button.",
      options: {
        list: [
          { title: "Services", value: "services" },
          { title: "Products", value: "products" },
          { title: "Consultation", value: "consultation" },
          { title: "Briefcase", value: "briefcase" },
          { title: "User", value: "user" },
          { title: "Mail", value: "mail" },
          { title: "LinkedIn", value: "linkedin" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "href",
    },
  },
});

export const tagline = defineType({
  name: "tagline",
  title: "Tagline",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Chip", value: "chip" },
          { title: "Rocket", value: "rocket" },
        ],
      },
    }),
    defineField({ name: "text", title: "Text", type: "string" }),
  ],
});

export const valueOverlay = defineType({
  name: "valueOverlay",
  title: "Value overlay",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name line",
      type: "string",
      description: "Optional first line, for example Engineer Zahoor Ahmed.",
    }),
    defineField({ name: "lead", title: "Lead line", type: "string" }),
    defineField({ name: "highlight", title: "Highlighted line", type: "string" }),
  ],
});

export const buildArea = defineType({
  name: "buildArea",
  title: "Build area card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "AI", value: "ai" },
          { title: "Automation", value: "automation" },
          { title: "Analytics", value: "analytics" },
        ],
      },
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
});

export const aboutHighlight = defineType({
  name: "aboutHighlight",
  title: "About highlight",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "value", title: "Value", type: "text", rows: 2 }),
  ],
});

export const ctaLink = defineType({
  name: "ctaLink",
  title: "CTA link",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "href", title: "URL", type: "string" }),
  ],
});

export const sectionIntro = defineType({
  name: "sectionIntro",
  title: "Section intro",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
  ],
});
