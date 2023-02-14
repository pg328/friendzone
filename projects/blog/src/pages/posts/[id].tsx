import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import { urlFor } from "api/src/sanity/sanityClient";
import Image from "next/image";
import PortableText from "components/PortableText";

const Post = () => {
  const slug = useRouter().query.id as string;

  const { data: post, isLoading } = trpc.post.byId.useQuery(slug, {
    enabled: !!slug,
  });

  if (isLoading || !post) return <p>Loading...</p>;
  console.log({ post });

  return (
    <>
      <div className="h-1/12 fixed top-5 right-5 z-10 m-5 w-60">
        <div className="flex w-full items-center justify-around rounded-2xl bg-slate-200 p-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            {post && (
              <Image
                src={urlFor(post.author.image).url()}
                sizes="100%"
                fill
                alt={`Profile picture for author: ${post.author.name}`}
              />
            )}
          </div>
          <div className="flex flex-col items-center justify-around">
            <span className="font-light">{post.author.name}</span>
            <span className="font-light">
              {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <main className="z-20 my-60 flex w-9/12 flex-col items-center rounded-3xl bg-white p-40 pt-4 text-white">
        <div className="flex w-full items-center justify-center">
          <h1 className="mt-12 text-5xl font-bold">{post.title}</h1>
        </div>
        <div className="relative my-12 h-60 w-2/3 border-2 border-gray-300">
          {post && (
            <Image
              src={urlFor(post.mainImage).width(900).height(300).url()}
              sizes="100%"
              priority={true}
              fill
              alt={`Hero Image`}
            />
          )}
        </div>
        <PortableText text={post.body} />
        <PortableText text={post.body} />
        <PortableText text={post.body} />
        <PortableText text={post.body} />
        <PortableText text={post.body} />
      </main>
    </>
  );
};

export default Post;
