import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
import { type Image as SImage } from "../trpc";

const sc = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

export const builder = ImageUrlBuilder(sc);

export const urlFor = (source: SImage) => builder.image(source);

export default sc;
