import { useEffect, useState } from "react";
import Form from "../../components/home/Form";
import PostsListing from "../../components/home/PostsListing";
import BlogPost from "../../components/home/BlogPost";
import useBlogsStore from "../../stores/blogsStore";
import { Post } from "../../types/post-types";
import usePosts from "../../hooks/usePosts";

// const sampleData = [
//   {
//     id: "1",
//     title: "How not to code",
//     link: "",
//     content: "hello there my people! ",
//   },
// ];

export default function HomePage() {
  const selectedPost = useBlogsStore((state) => state.selectedPost);
  const setSelectedPost = useBlogsStore((state) => state.setSelectedPost);
  const handleClick = (postId: number | null) => {
    setSelectedPost(postId);
  };
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  const postHook = usePosts();

  // useEffect(() => {
  //   async function fetchPosts() {
  //     await fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log("here are the posts: ", json);
  //         setAllPosts(json);
  //       })
  //       .catch((err) => console.log("here is the error: ", err));
  //   }

  //   fetchPosts();
  // }, []);

  return (
    <div className="py-8 px-4">
      {selectedPost ? (
        <BlogPost
          post={postHook.posts.filter((item) => item?.id === selectedPost)?.[0]}
        />
      ) : (
        // <PostsListing posts={allPosts.slice(0, 10)} handleClick={handleClick} />
        <PostsListing
          posts={postHook.posts.slice(0, 10)}
          handleClick={handleClick}
        />
      )}
      <Form isForUpdate={!!selectedPost} />
    </div>
  );
}
