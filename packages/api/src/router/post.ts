import { z } from "zod";

const ZImage = z.object({
  "_type": z.string(),
  "asset": z.object({
    "_ref": z.string(),
    "_type": z.string()
  })
})


const ZSlug = z.object({
  _id: z.string(),
  slug: z.object({ current: z.string() })
})

const ZSlugs = z.array(ZSlug)

const ZPost = z.object({
  _id: z.string(),
  publishedAt: z.date(),
  author: z.object({
    name: z.string(),
    image: ZImage,
  }),
  mainImage: ZImage,
  slug: ZSlug,
  title: z.string()
})

const ZPortableText = z.array(
  z.object({
    _type: z.string(),
    children: z.array(
      z.object({
        marks: z.array(z.string()),
        text: z.string()
      })
    ),
    markDefs: z.array(z.string()),
    style: z.string()
  })
)

const ZPostHasBody = z.object({ body: ZPortableText })

const ZById = ZPost.merge(ZPostHasBody)

const ZAll = z.array(ZPost)

export type PortableText = z.infer<typeof ZPortableText>
export type All = z.infer<typeof ZAll>
export type ById = z.infer<typeof ZById>
export type Slugs = z.infer<typeof ZSlugs>

export const SanityQueries = {

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

export default SanityQueries
