import type { StructureResolver } from "sanity/structure";

const singleton = (S: Parameters<StructureResolver>[0], typeName: string, title: string, id: string) =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(typeName).documentId(id));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      singleton(S, "siteSettings", "Site settings", "siteSettings"),
      S.divider(),
      singleton(S, "heroShowcase", "Hero (showcase)", "heroShowcase"),
      singleton(S, "heroClassic", "Hero (classic)", "heroClassic"),
      S.divider(),
      singleton(S, "whatIBuild", "What I Build", "whatIBuild"),
      singleton(S, "aboutPage", "About", "aboutPage"),
      singleton(S, "projectsSection", "Products intro", "projectsSection"),
      S.documentTypeListItem("project").title("Products"),
      singleton(S, "contactSection", "Contact", "contactSection"),
    ]);
