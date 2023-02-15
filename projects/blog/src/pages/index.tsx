import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { SignedIn, UserButton } from "@clerk/nextjs";
import PostCards from "components/PostCards";

const Home: NextPage = () => {
  const { data } = trpc.post.all.useQuery();

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
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            fr<span className="text-green-400">i</span>endz
            <span className="text-rose-700">o</span>ne.
          </h1>
          <h2 className="text-3xl">a new way to connect.</h2>
          {data && <PostCards data={data} />}
        </div>
      </main>
    </>
  );
};

export default Home;
