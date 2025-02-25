"use client";

import { useEffect, useState } from "react";
import TicTacToeBoard from "./TicTacToeBoard";
import { useTicTacToeState } from "./TicTacToeContext";

function TicTacToeGame(): JSX.Element {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const {
    ticTacToeWon,
    setTicTacToeWon,
    calculateWinner,
    setTicTacToeStatus,
    ticTacToeStatus,
    setShowTicTacToe,
    showTicTacToe,
  } = useTicTacToeState();

  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares: (string | null)[] = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]): void {
    setHistory(prevHistory => [...prevHistory.slice(0, currentMove + 1), nextSquares]);
    setCurrentMove(prevMove => prevMove + 1);
  }

  function restartGame(): void {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setTicTacToeStatus("playing");
  }

  useEffect(() => {
    function handleGameOutcome(winner: string | null): void {
      if (winner === "X") {
        setTicTacToeStatus("userWon");
        setTicTacToeWon(true);
        setShowTicTacToe(false);
      } else if (winner === "O") {
        setTicTacToeStatus("opponentWon");
      } else if (currentSquares.every(square => square !== null)) {
        setTicTacToeStatus("draw");
      }
    }

    function makeOpponentMove(): void {
      const emptyIndices = currentSquares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val): val is number => val !== null);

      if (emptyIndices.length > 0) {
        const randomMove = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        setTimeout(() => {
          setHistory(prevHistory => {
            const latestSquares = [...prevHistory[prevHistory.length - 1]];
            latestSquares[randomMove] = "O";
            return [...prevHistory, latestSquares];
          });
          setCurrentMove(prevMove => prevMove + 1);
        }, 500);
      }
    }

    const winner = calculateWinner(currentSquares);
    handleGameOutcome(winner);

    if (!xIsNext && ticTacToeStatus === "playing" && !winner) {
      makeOpponentMove();
    }
  }, [
    currentMove,
    setTicTacToeWon,
    currentSquares,
    xIsNext,
    ticTacToeStatus,
    calculateWinner,
    setShowTicTacToe,
    setTicTacToeStatus,
  ]);

  return (
    <>
      {showTicTacToe && !ticTacToeWon ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-[#F5F5F5] p-8 rounded-3xl shadow-lg border border-[#D4A5A5]/30 relative">
            <h2 className="text-2xl font-bold text-center mb-4 text-[#D4A5A5]">Play to Unlock Image</h2>
            <TicTacToeBoard squares={currentSquares} onPlay={handlePlay} />
            {(ticTacToeStatus === "opponentWon" || ticTacToeStatus === "draw") && (
              <div className="mt-6">
                <p className="text-red-600 text-sm text-center mb-2">
                  {ticTacToeStatus === "opponentWon" ? "You lost! Try again." : "It's a draw! Try again."}
                </p>
                <button
                  className="w-full py-2 bg-[#A5D4A5] hover:bg-[#A5D4A5]/80 text-white rounded-lg transition-colors"
                  onClick={restartGame}
                >
                  Restart Game
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TicTacToeGame;
