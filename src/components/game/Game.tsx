import useGameStore from "../../stores/gameStore";
import Board from "./Board";

export default function Game() {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state) => state.setXIsNext);
  const currentSquares = history[history.length - 1];

  const handlePlay = () => {
    // TODO
  }

  return (
    <div className="flex items-start gap-8">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

      <div>
        <h2 className="mb-2">Moves</h2>
        <ul>
          <ol>first move</ol>
        </ul>
      </div>
    </div>
  );
}
