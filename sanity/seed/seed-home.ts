import { createReadStream } from "node:fs";
import { readFileSync } from "node:fs";
import { basename, join } from "node:path";

import { getCliClient } from "sanity/cli";

const client = getCliClient();

const PROFILE_IMAGE_PATH = join(process.cwd(), "public/zahoor-profile-r1.png");
const FAVICON_PATH = join(process.cwd(), "sanity/seed/favicon.svg");
const PROFILE_IMAGE_ALT = "Portrait of Zahoor Ahmed";
const NDJSON_PATH = join(process.cwd(), "sanity/seed/home-content.ndjson");

type SeedDocument = {
  _id: string;
  _type: string;
  [key: string]: unknown;
};

function loadDocuments(): SeedDocument[] {
  return readFileSync(NDJSON_PATH, "utf-8")
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line) as SeedDocument);
}

async function uploadProfileImage() {
  console.log(`Uploading profile image from ${PROFILE_IMAGE_PATH}`);

  const imageAsset = await client.assets.upload("image", createReadStream(PROFILE_IMAGE_PATH), {
    filename: basename(PROFILE_IMAGE_PATH),
  });

  console.log(`Uploaded profile image asset: ${imageAsset._id}`);

  return imageAsset;
}

async function uploadFavicon() {
  console.log(`Uploading favicon from ${FAVICON_PATH}`);

  const faviconAsset = await client.assets.upload("image", createReadStream(FAVICON_PATH), {
    filename: basename(FAVICON_PATH),
  });

  console.log(`Uploaded favicon asset: ${faviconAsset._id}`);

  return faviconAsset;
}

async function seedHomeContent() {
  const { projectId, dataset } = client.config();
  console.log(`Seeding homepage content to ${projectId}/${dataset}`);

  const [imageAsset, faviconAsset] = await Promise.all([uploadProfileImage(), uploadFavicon()]);
  const documents = loadDocuments();

  const transaction = client.transaction();

  for (const document of documents) {
    if (document._type === "siteSettings") {
      document.profileImage = {
        _type: "image",
        alt: PROFILE_IMAGE_ALT,
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      };
      document.favicon = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: faviconAsset._id,
        },
      };
    }

    transaction.createOrReplace(document);
  }

  await transaction.commit();

  console.log(`Seeded ${documents.length} homepage documents (including profile image).`);
}

seedHomeContent().catch((error: unknown) => {
  console.error("Homepage seed failed:", error);
  process.exit(1);
});
