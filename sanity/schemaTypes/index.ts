import { type SchemaTypeDefinition } from "sanity";

import { heroClassic } from "./heroClassic";
import { heroShowcase } from "./heroShowcase";
import {
  aboutHighlight,
  buildArea,
  ctaLink,
  heroButton,
  navLink,
  sectionIntro,
  tagline,
  valueOverlay,
} from "./objects";
import { project } from "./project";
import {
  aboutPage,
  contactSection,
  projectsSection,
  whatIBuild,
} from "./sections";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navLink,
    heroButton,
    tagline,
    valueOverlay,
    buildArea,
    aboutHighlight,
    ctaLink,
    sectionIntro,
    siteSettings,
    heroShowcase,
    heroClassic,
    whatIBuild,
    aboutPage,
    projectsSection,
    contactSection,
    project,
  ],
};
