import { useTicTacToeState } from "./TicTacToeContext";
import TicTacToeSquare from "./TicTacToeSquare";

interface TicTacToeBoardProps {
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

function TicTacToeBoard({ squares, onPlay }: TicTacToeBoardProps): JSX.Element {
  const { calculateWinner } = useTicTacToeState();
  function handleClick(i: number): void {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = "X"; // User is always X
    onPlay(nextSquares);
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {squares.map((square, i) => (
        <TicTacToeSquare key={i} value={square} onSquareClick={() => handleClick(i)} />
      ))}
    </div>
  );
}

export default TicTacToeBoard;
