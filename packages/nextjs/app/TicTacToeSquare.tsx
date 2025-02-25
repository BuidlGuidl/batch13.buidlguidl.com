interface TicTacToeSquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function TicTacToeSquare({ value, onSquareClick }: TicTacToeSquareProps): JSX.Element {
  return (
    <button
      className="w-20 h-20 text-4xl font-bold bg-zinc-300 hover:bg-zinc-400 flex items-center justify-center rounded-xl border-2 border-[#A5D4D4]/50 transition-colors"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default TicTacToeSquare;
