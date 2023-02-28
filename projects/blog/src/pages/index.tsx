import { createProxySSGHelpers } from '@trpc/react-query/ssg'
import type { NextPage } from "next";
import { SignedIn, UserButton } from "@clerk/nextjs";
import PostCards from "components/PostCards";
import { createContextInner } from "api/src/context";
import { appRouter } from "api";

const Home: NextPage<{ posts: any }> = ({ posts }) => {


  return (
    <>
      <SignedIn>
        <div className="flex h-16 w-full items-center justify-end pr-4 pt-4">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "3rem",
                  height: "3rem",
                },
              },
            }}
          />
        </div>
      </SignedIn>

      <main className="flex h-full w-full flex-col items-center  text-white">
        <div className="container mt-72 flex flex-col items-center justify-center gap-12 px-4 py-8">
          <h1 className="text-5xl lg:text-9xl font-extrabold tracking-tighter transition-all sm:text-[5rem]">
            fr<span className="text-green-400">i</span>endz
            <span className="text-rose-700">o</span>ne.
          </h1>
          <h2 className="text-3xl">a new way to connect.</h2>
          <PostCards data={posts} />
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {

  const ctx = await createContextInner({ user: null })

  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx
  })

  const posts = await ssg.post.all.fetch()

  return { props: { posts }, revalidate: 60 }
}
