import { create } from "zustand";
import { combine } from "zustand/middleware";

const useBlogsStore = create(
  combine({ selectedPost: null as number | null }, (set) => {
    return {
      setSelectedPost: (postId: number | null) => {
        set(() => ({
          selectedPost: postId,
        }));
      },
    };
  })
);

export default useBlogsStore;
