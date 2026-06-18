import type { SanityImageSource } from "@sanity/image-url";

import { defaultFaviconResponse } from "@/app/lib/default-favicon";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { siteFaviconQuery } from "@/sanity/queries/site";

type FaviconDocument = {
  favicon?: {
    asset?: {
      url?: string;
      mimeType?: string;
    };
  };
};

export async function getSiteFaviconUrl(size: number): Promise<string | null> {
  try {
    const data = await client.fetch<FaviconDocument | null>(siteFaviconQuery, {}, { cache: "no-store" });

    if (!data?.favicon?.asset) {
      return null;
    }

    return urlFor(data.favicon as SanityImageSource)
      .width(size)
      .height(size)
      .fit("crop")
      .auto("format")
      .url();
  } catch {
    return null;
  }
}

export async function fetchSiteFavicon(size: number): Promise<Response | null> {
  const url = await getSiteFaviconUrl(size);

  if (!url) {
    return null;
  }

  const response = await fetch(url, { next: { revalidate: 60 } });

  if (!response.ok) {
    return null;
  }

  const buffer = await response.arrayBuffer();
  const contentType = response.headers.get("content-type") ?? "image/png";

  return new Response(buffer, {
    headers: { "Content-Type": contentType },
  });
}

export async function resolveSiteFavicon(size: number): Promise<Response> {
  return (await fetchSiteFavicon(size)) ?? defaultFaviconResponse(size);
}
