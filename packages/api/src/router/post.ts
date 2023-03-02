import {
  router,
  publicProcedure,
  type PostType,
  type PostTypeWithBody,
} from "../trpc";
import { z } from "zod";
import SanityClient from "../sanity/sanityClient";


const ZSlug = z.object({
  _id: z.string(),
  slug: z.object({ current: z.string() })
})

const ZSlugs = z.array(ZSlug)

type Slugs = z.infer<typeof ZSlugs>

const ZPost = z.object({
  _id: z.string(),
  publishedAt: z.date(),
  // author: {
  // name: z.string(),
  // image: ZImage
  // },
  // mainImage: ZImage,
  slug: ZSlug,
  title: z.string()
})

// const ZPostHasBody = z.object({ body: ZPortableText })

// const ZAll = z.array(Post)

type All = z.infer<typeof ZAll>

export enum SanityQueries {

}

export const sanityQueries = {

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

export default sanityQueries
