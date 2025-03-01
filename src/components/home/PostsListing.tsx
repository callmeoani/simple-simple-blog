import { Post } from "../../types/post-types";

type Props = {
  posts: Post[];
  handleClick: (id: string) => void;
};

export default function PostsListing({ posts, handleClick }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <button
              onClick={() => handleClick(post.id)}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
