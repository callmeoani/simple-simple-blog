import { Post } from "../../types/post-types";

type Props = {
  posts: Post[];
  handleClick: (id: number) => void;
};

export default function PostsListing({ posts, handleClick }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="flex flex-col justify-start text-left gap-2">
        {posts.map((post) => (
          <li key={post.id} className="">
            <button
              onClick={() => handleClick(post.id)}
              className="text-blue-600 hover:underline text-left"
            >
              {post.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
