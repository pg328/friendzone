import { initTRPC, TRPCError } from "@trpc/server";
import { type Context } from "./context";
import superjson from "superjson";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);

export type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

export type Slug = {
  _type: "slug";
  current: string;
};

export type Author = {
  image: Image;
  name: string;
};

export type PostType = {
  _id: string;
  author: Author;
  mainImage: Image;
  publishedAt: Date;
  slug: Slug;
  title: string;
};

export interface PostTypeWithBody extends PostType {
  body: Array<any>;
}
