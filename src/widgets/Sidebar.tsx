import { useState } from "react";

export default function Sidebar() {
  const [postId, setPostId] = useState("");
  return (
    <div className="px-4 py-8 flex flex-col items-start border-r border-r-solid border-r-black/30">
      <button>all posts</button>
      <div className="my-4 flex flex-col">
        <label htmlFor="postIdInput">Search post ID</label>
        <input
          id={"postIdInput"}
          placeholder="post id"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          className="border-solid border border-black rounded-sm px-2 py-1  "
        />
      </div>
      <ul>
        <li>post 1</li>
        <li>post 1</li>
        <li>post 1</li>
      </ul>
    </div>
  );
}
