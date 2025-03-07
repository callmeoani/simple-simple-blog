// import { useState } from "react";
import { Link } from "react-router";
import useBlogsStore from "../stores/blogsStore";
import useCheck from "../hooks/useCheck";
import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

export default function Sidebar() {
  const setSelectedPost = useBlogsStore((state) => state.setSelectedPost);
  // const [postId, setPostId] = useState("");
  const checking = useCheck("4");
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div className="px-4 py-8 flex flex-col items-start border-r border-r-solid border-r-black/30">
        <button onClick={() => setSelectedPost(null)}>all posts</button>
        <div className="my-4 flex flex-col">
          <label htmlFor="postIdInput">Search post ID</label>
          <input
            id={"postIdInput"}
            placeholder="post id"
            // value={postId ?? ""}
            value={checking.initial}
            // onChange={(e) => setPostId(e.target.value)}
            onChange={(e) => {
              checking.print();
              checking.setInitial(e.target.value);
            }}
            className="border-solid border border-black rounded-sm px-2 py-1  "
          />
          <p>Output: {checking.initial}</p>
        </div>
        <ul>
          <li>post 1</li>
          <li>post 1</li>
          <li>post 1</li>
        </ul>
        <p>current theme: {theme.theme}</p>
        <button
          onClick={() =>
            theme.setTheme(theme.theme === "light" ? "dark" : "light")
          }
          className={`border-black rounded-lg border px-4 py-2 ${
            theme.theme === "light"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
        >
          Change theme
        </button>
      </div>
      <div className="flex items-center gap-4 justify-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/game"}>Game</Link>
      </div>
    </div>
  );
}
