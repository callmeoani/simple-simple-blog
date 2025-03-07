import { useEffect, useState } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState<unknown>();
  const [status, setStatus] = useState("loading");

  const refetch = async () => {
    try {
      setStatus("loading");
      const posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((res) => res.json());
      // console.log("the pOsts: ", posts);
      setPosts(posts);
      setError(null);
      setStatus("success");
    } catch (error) {
      setError(error);
      setStatus("error");
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return {
    posts,
    status,
    error,
    refetch,
  };
}
