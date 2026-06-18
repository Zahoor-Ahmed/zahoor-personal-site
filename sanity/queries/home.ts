import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  ...,
  profileImage{
    alt,
    asset->{
      _id,
      url,
      metadata { dimensions, lqip }
    }
  },
  favicon{
    asset->{
      _id,
      url,
      mimeType
    }
  }
}`;
export const heroShowcaseQuery = groq`*[_type == "heroShowcase"][0]`;
export const heroClassicQuery = groq`*[_type == "heroClassic"][0]`;
export const whatIBuildQuery = groq`*[_type == "whatIBuild"][0]`;
export const aboutPageQuery = groq`*[_type == "aboutPage"][0]`;
export const projectsSectionQuery = groq`*[_type == "projectsSection"][0]`;
export const contactSectionQuery = groq`*[_type == "contactSection"][0]`;
