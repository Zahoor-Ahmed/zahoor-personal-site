import { resolveSiteFavicon } from "@/app/lib/get-site-favicon";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default async function Icon() {
  return resolveSiteFavicon(size.width);
}
