import { PortableText as SanityPortableText } from '@portabletext/react'
import { type PortableText as TPortableText } from 'api/src/router/post';
import { FC } from 'react';
import { urlFor } from 'api/src/sanity/sanityClient'

interface ISanityComponents {
  types?: {
    image?: any
  },
  block?: {
    normal: any,
    blockquote: any,
    h1: any,
    h2: any,
    h3: any,
    h4: any,
    h5: any,
    h6: any,
  },
  marks?: {
    em: any,
    strong: any,
    code: any,
    underline: any,
    'strike-through': any,
    link: any
  },
  list?: {
    number: any,
    bullet: any
  },
  listItem?: any,
  hardbreak?: any,
}

//@TODO: Fix alt tag here!

const components: ISanityComponents = {
  types: {
    image: ({ value }: any) => <div className="flex my-8 2xl:h-[40rem] xl:h-96 lg:h-84 md:h-72 sm:h-40 w-full justify-center min-w-[10rem] min-h-[10rem]">
      <div className="relative m-5 aspect-auto overflow-hidden rounded-xl">
        <img className="object-contain" src={urlFor(value).url()} alt="Image from article" />
      </div>
    </div>,
  },
  block: {
    normal: ({ children }: any) => <p className="w-full m-1">{children}</p>,
    blockquote: ({ children }: any) => <div className="my-4 w-full flex items-center justify-evenly italic font-thin">
      <div className="bg-gray-400 w-2 h-20" />
      <blockquote className="text-2xl w-11/12">{children}</blockquote>
    </div>,
    h1: ({ children }: any) => <h1 className="md:text-7xl text-5xl font-extrabold my-12 w-full" >{children}</h1>,
    h2: ({ children }: any) => <h2 className="md:text-6xl text-4xl font-bold my-12 w-full">{children}</h2>,
    h3: ({ children }: any) => <h3 className="md:text-4xl text-3xl font-bold my-8 w-full">{children}</h3>,
    h4: ({ children }: any) => <h4 className="md:text-3xl text-2xl font-bold my-4 w-full">{children}</h4>,
    h5: ({ children }: any) => <h5 className="md:text-2xl text-xl font-bold m-2 w-full">{children}</h5>,
    h6: ({ children }: any) => <h6 className="md:text-xl text-lg font-bold m-1 w-full">{children}</h6>,
  },
  marks: {
    em: ({ children }: any) => <em className="w-full">{children}</em>,
    strong: ({ children }: any) => <strong className="w-full">{children}</strong>,
    code: ({ children }: any) => <code className="w-full">{children}</code>,
    underline: ({ children }: any) => <span className="w-full underline">{children}</span>,
    'strike-through': ({ children }: any) => <del className="w-full">{children}</del>,
    link: ({ children, value }: any) => {

      return <a href={value?.href} className="font-semibold underline">{children}</a>
    }
  },
  list: {
    number: ({ children }: any) => <ol className="w-full">{children}</ol>,
    bullet: ({ children }: any) => <ul className="w-full flex flex-col px-12 list-disc my-4 list-outside">{children}</ul>,
  },
  listItem: ({ children }: any) => <li>{children}</li>,
  hardbreak: undefined,
};


const PortableText: FC<{ value: TPortableText }> = ({ value }) => <SanityPortableText value={value} components={components} />

export default PortableText


