import useGameStore from "../../stores/gameStore";
import {
  calculateStatus,
  calculateTurns,
  calculateWinner,
} from "../../utilities/game-helpers";
import Square from "./Square";

type Props = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: () => void;
};

export default function Board({ xIsNext, squares, onPlay }: Props) {
  const player = xIsNext ? "X" : "O";
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const status = calculateStatus(winner, turns, player);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    // setXIsNext(!xIsNext);
  };
  return (
    <div>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
