import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
  combine({ history: [Array(9).fill(null)], xIsNext: true }, (set) => {
    return {
      setHistory: (nextSquares: unknown) => {
        set((state) => ({
          history:
            typeof nextSquares === "function"
              ? nextSquares(state.history)
              : nextSquares,
        }));
      },
      setXIsNext: (nextXIsNext: unknown) => {
        set((state) => ({
          xIsNext:
            typeof nextXIsNext === "function"
              ? nextXIsNext(state.xIsNext)
              : nextXIsNext,
        }));
      },
    };
  })
);

export default useGameStore;
