import { Post } from "../../types/post-types";

type Prop = {
  post: Post;
};

export default function BlogPost({ post }: Prop) {
  return (
    <>
      <h2 className="font-bold text-2xl">{post.title}</h2>
      <p className="mt-2 mb-4 font-semibold">{post.id}</p>
      <p>{post.body}</p>
    </>
  );
}
