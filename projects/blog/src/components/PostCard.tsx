import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "api";
import React from 'react'
import Image from "components/SanityImage";

type Post = inferProcedureOutput<AppRouter["post"]["all"]>[number];

const PostCard: React.FC<Post> = (post) => {
  return (
    <article className="h-64 w-64 flex-col md:h-80 md:w-80 2xl:h-[30rem] 2xl:w-[40rem] rounded-2xl shadow-lg shadow-black hover:scale-110 transition-all">
      <a href={`/posts/${post.slug.current}`}>
        <div className="relative h-3/5 w-full overflow-hidden rounded-t-2xl">
          <Image
            asset={post.mainImage}
            fit={'object-cover'}
            alt={`Image for article titled: ${post.title}`}
          />
        </div>

        <div className="flex w-full h-2/5 rounded-b-2xl justify-center items-center bg-gray-200">
          <div className="flex w-5/6 gap-1 items-center justify-center lg:gap-3 flex-col">
            <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
            <div className="flex w-5/6 gap-5 items-center justify-around">
              <div className="relative h-8 w-8 md:h-16 md:w-16 lg:w-32 lg-h-32 overflow-hidden rounded-full">
                {post && (
                  <Image
                    asset={post.author.image}
                    fit="object-cover"
                    alt={`Profile picture for author: ${post.author.name}`}
                  />
                )}
              </div>
              <div className="flex flex-col items-center justify-around lg:text-2xl">
                <span className="font-light whitespace-nowrap">{post.author.name}</span>
                <span className="font-thin">
                  {new Date(post.publishedAt).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default PostCard
