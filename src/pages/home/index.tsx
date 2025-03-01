import { useState } from "react";
import Form from "../../components/home/Form";
import PostsListing from "../../components/home/PostsListing";
import BlogPost from "../../components/home/BlogPost";

const sampleData = [
  {
    id: "1",
    title: "How not to code",
    link: "",
    content: "hello there my people! ",
  },
];

export default function HomePage() {
  const [selectedPost, setSelectedPost] = useState("");
  const handleClick = (postId: string) => {
    setSelectedPost(postId);
  };
  return (
    <div className="py-8 px-4">
      {selectedPost ? (
        <BlogPost
          post={sampleData.filter((item) => item.id === selectedPost)?.[0]}
        />
      ) : (
        <PostsListing posts={sampleData} handleClick={handleClick} />
      )}
      <Form isForUpdate={!!selectedPost} />
    </div>
  );
}
