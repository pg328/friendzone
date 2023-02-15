import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Image from "components/SanityImage";
import PortableText from "components/PortableText";

const Post = () => {
  const slug = useRouter().query.id as string;

  const { data: post, isLoading } = trpc.post.byId.useQuery(slug, {
    enabled: !!slug,
  });

  if (isLoading || !post) return <p>Loading...</p>;
  console.log({ post });


  // Outermost div *CANNOT* be flex, it breaks everything
  return (
    <div className="h-full w-full py-12 overflow-y-scroll overflow-x-hidden">
      <main className="bg-gray-200 mx-5 rounded-xl p-5 2xl:mx-80 2xl:p-40">
        <div className="flex w-full justify-center">
          <h1 className="text-6xl text-center md:text-9xl font-extrabold my-8">{post.title}</h1>
        </div>
        <div className="">
          <div className="flex w-full justify-center">
            <div className="flex w-3/6 items-center justify-around">
              <div className="relative mr-4 h-8 w-8 overflow-hidden rounded-full">
                {post && (
                  <Image
                    asset={post.author.image}
                    fit="object-cover"
                    alt={`Profile picture for author: ${post.author.name}`}
                  />
                )}
              </div>
              <div className="flex flex-col items-center justify-around">
                <span className="font-light whitespace-nowrap">{post.author.name}</span>
                <span className="font-light">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <div className="flex xl:h-96 lg:h-80 md:h-60 sm:h-40 w-full min-w-[10rem] min-h-[10rem]">
            <div className="relative m-5 w-full h-auto overflow-hidden rounded-xl">
              {post && (
                <Image
                  asset={post.mainImage}
                  priority
                  fit="object-cover"
                  alt={`Hero Image`}
                />
              )}
            </div>
          </div>
        </div>
        <article>
          <PortableText text={post.body} />
        </article>
      </main>
    </div>
  );
};

export default Post;
