import { useState } from "react";

type Props = {
  isForUpdate?: boolean;
};

export default function Form({ isForUpdate = false }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting");
  };
  return (
    <div className="border-t border-t-solid border-t-black/30 py-4 my-8">
      <h2 className="text-3xl font-bold mb-6 ">
        {isForUpdate ? "Update blog" : "Create new blog"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-solid border border-gray-400 rounded-lg py-1 px-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-solid border-gray-400 rounded-lg"
          />
        </div>
        <button className="mt-20 border-solid border border-gray-500 px-4 py-2 rounded-lg ">
          {isForUpdate ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
