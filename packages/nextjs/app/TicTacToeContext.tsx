"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { images } from "~~/utils/scaffold-eth/batchMembersImages";

type TicTacToeStatus = "playing" | "userWon" | "opponentWon" | "draw";

interface TicTacToeState {
  ticTacToeWon: boolean;
  activeImages: boolean[];
  setActiveImages: (images: boolean[]) => void;
  setTicTacToeStatus: (status: TicTacToeStatus) => void;
  ticTacToeStatus: TicTacToeStatus;
  setTicTacToeWon: (won: boolean) => void;
  setShowTicTacToe: (show: boolean) => void;
  showTicTacToe: boolean;
  showTicTacToeModal: boolean;
  setShowTicTacToeModal: (show: boolean) => void;
  calculateWinner: (squares: (string | null)[]) => string | null;
}

// Create the context with an undefined initial value
const TicTacToeContext = createContext<TicTacToeState | undefined>(undefined);

// Provider component
function TicTacToeProvider({ children }: { children: ReactNode }): JSX.Element {
  const [ticTacToeWon, setTicTacToeWon] = useState<boolean>(false);
  const [activeImages, setActiveImages] = useState<boolean[]>(Array(images.length).fill(false));
  const [ticTacToeStatus, setTicTacToeStatus] = useState<TicTacToeStatus>("playing");
  const [showTicTacToe, setShowTicTacToe] = useState<boolean>(false);
  const [showTicTacToeModal, setShowTicTacToeModal] = useState<boolean>(true);

  useEffect(() => {
    const storedTicTacToeWon = localStorage.getItem("ticTacToeWon");
    const storedActiveImages = localStorage.getItem("activeImages");

    if (storedTicTacToeWon !== null) {
      try {
        setTicTacToeWon(JSON.parse(storedTicTacToeWon));
      } catch (error) {
        console.error("Failed to parse gameWon from localStorage:", error);
        setTicTacToeWon(false);
      }
    }

    if (storedActiveImages !== null) {
      try {
        const parsedImages: unknown = JSON.parse(storedActiveImages);
        if (Array.isArray(parsedImages) && parsedImages.length === images.length) {
          setActiveImages(parsedImages as boolean[]);
        } else {
          console.warn("Invalid activeImages length in localStorage, resetting to default");
          setActiveImages(Array(images.length).fill(false));
        }
      } catch (error) {
        console.error("Failed to parse activeImages from localStorage:", error);
        setActiveImages(Array(images.length).fill(false));
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("ticTacToeWon", JSON.stringify(ticTacToeWon));
      localStorage.setItem("activeImages", JSON.stringify(activeImages));
    } catch (error) {
      console.error("Failed to save state to localStorage:", error);
    }
  }, [ticTacToeWon, activeImages]);

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorage.removeItem("ticTacToeWon");
      localStorage.removeItem("activeImages");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function calculateWinner(squares: (string | null)[]): string | null {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <TicTacToeContext.Provider
      value={{
        ticTacToeWon,
        setTicTacToeWon,
        activeImages,
        setActiveImages,
        setTicTacToeStatus,
        ticTacToeStatus,
        setShowTicTacToe,
        showTicTacToe,
        calculateWinner,
        showTicTacToeModal,
        setShowTicTacToeModal,
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
}

// Custom hook to use the context
function useTicTacToeState(): TicTacToeState {
  const context = useContext(TicTacToeContext);
  if (!context) {
    throw new Error("useTicTacToeState must be used within a TicTacToeProvider");
  }
  return context;
}

export { TicTacToeProvider, useTicTacToeState, images };
