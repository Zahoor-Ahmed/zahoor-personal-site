import { groq } from "next-sanity";

export const siteFaviconQuery = groq`*[_type == "siteSettings"][0]{
  favicon{
    asset->{
      url,
      mimeType
    }
  }
}`;
