// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";
import Head from "components/Head";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  console.log({ pageProps })
  return (
    <>
      <Head />
      <ClerkProvider __unstable_invokeMiddlewareOnAuthStateChange={false} {...pageProps}>
        <div className="flex h-screen w-screen flex-col items-center justify-center overflow-scroll bg-gradient-to-tr from-green-400 to-rose-400">
          <Component {...pageProps} />
        </div>
      </ClerkProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
