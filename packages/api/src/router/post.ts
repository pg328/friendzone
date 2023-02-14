import {
  router,
  publicProcedure,
  type PostType,
  type PostTypeWithBody,
  Slug,
} from "../trpc";
import { z } from "zod";
import SanityClient from "../sanity/sanityClient";

const queries = {

  slugs: `*[_type=="post"]{
    _id,
    slug {
      current
    }
  }`,

  all: `*[_type == "post"]{
    _id,
    publishedAt, 
    author -> {
      name, 
      image
    }, 
    mainImage,
    slug, 
    title 
    }
`,

  byId: `*[_type == "post" && slug.current==$SLUG ][0]{
    _id,
    publishedAt, 
    author -> {
      name, 
      image
    }, 
    mainImage,
    slug, 
    title, 
    body 
  }
`
}


export const postRouter = router({

  all: publicProcedure
    .query(async () => (await SanityClient.fetch(queries.all) as PostType[])),

  byId: publicProcedure
    .input(z.string())
    .query(async ({ input: SLUG }) => (await SanityClient.fetch(queries.byId, { SLUG })) as PostTypeWithBody),

  slugs: publicProcedure
    .query(async () => (await SanityClient.fetch(queries.slugs)) as { _id: string; slug: Slug; }[]),
});
