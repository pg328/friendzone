import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "api";
import React from 'react'
import Image from "components/SanityImage";
import { builder, urlFor } from "api/src/sanity/sanityClient";

type Post = inferProcedureOutput<AppRouter["post"]["all"]>[number];

const PostCard: React.FC<Post> = (post) => {
  return (
    <article className="h-64 w-64 flex-col rounded-2xl  shadow-lg shadow-gray-800">
      <a href={`/posts/${post.slug.current}`}>
        <div className="relative h-3/5 w-full overflow-hidden rounded-t-2xl">
          <Image
            asset={post.mainImage}
            fit={'object-cover'}
            alt={`Image for article titled: ${post.title}`}
          />
        </div>

        <div className="h-2/5 flex-col rounded-b-2xl bg-white">
          <div className="flex w-full justify-between p-3">
            <h1 className="w-3/4 text-xl font-bold">{post.title}</h1>
            <span className="text-sm font-thin">
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </div>

          <div className="flex w-full justify-between p-2">
            <span className="font-light">{post.author.name}</span>
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                asset={post.author.image}
                alt={`Image for article titled: ${post.title}`}
              />
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default PostCard
