import { PostType as Post } from "api/src/trpc";
import PostCard from "components/PostCard";

const PostCards: React.FC<{ data: Post[] }> = ({ data }) => (
  <section>
    <div className="flex flex-wrap flex-col gap-10 md:flex-row">
      {data
        ?.sort((post1: Post, post2: Post) => {
          const date1 = new Date(post1.publishedAt);
          const date2 = new Date(post2.publishedAt);
          if (date1 <= date2) return 1;
          return -1;
        })
        .map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
    </div>
  </section>
);

export default PostCards
