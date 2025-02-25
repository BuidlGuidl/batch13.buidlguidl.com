"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface GameState {
  gameWon: boolean;
  activeImages: boolean[];
  setGameWon: (won: boolean) => void;
  setActiveImages: (images: boolean[]) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

const images: string[] = [
  "/ntk.webp",
  "/nft.jpg",
  "/diego-profile-pic.webp",
  "/buidlguidl_punk.png",
  "https://i.pinimg.com/474x/d7/31/4c/d7314c015805cbf159e1099c869233ee.jpg",
  "/luffy.webp",
  "/pfp-0x8CBdaac423dEC5E99d1a87ed8205054AE24A6dAD.jpg",
  "/punkvibes.png",
  "/blitnaut.webp",
  "https://emerald-many-salmon-332.mypinata.cloud/ipfs/bafkreie42v4sxapftnagsrxodxvyab6mq546pvlxlucieitgruzoj7q2qe",
];

export const TicTacToeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [activeImages, setActiveImages] = useState<boolean[]>(Array(images.length).fill(false));

  useEffect(() => {
    const storedGameWon = localStorage.getItem("gameWon");
    const storedActiveImages = localStorage.getItem("activeImages");

    if (storedGameWon !== null) {
      try {
        setGameWon(JSON.parse(storedGameWon));
      } catch (error) {
        console.error("Failed to parse gameWon from localStorage:", error);
        setGameWon(false);
      }
    }

    if (storedActiveImages !== null) {
      try {
        const parsedImages = JSON.parse(storedActiveImages);
        if (Array.isArray(parsedImages) && parsedImages.length === images.length) {
          setActiveImages(parsedImages);
        } else {
          console.warn("Invalid activeImages length in localStorage, resetting to default");
          setActiveImages(Array(images.length).fill(false));
        }
      } catch (error) {
        console.error("Failed to parse activeImages from localStorage:", error);
        setActiveImages(Array(images.length).fill(false)); // Fallback to default
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("gameWon", JSON.stringify(gameWon));
      localStorage.setItem("activeImages", JSON.stringify(activeImages));
    } catch (error) {
      console.error("Failed to save state to localStorage:", error);
    }
  }, [gameWon, activeImages]); // Runs whenever gameWon or activeImages changes

  // Clear localStorage on page close
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("gameWon");
      localStorage.removeItem("activeImages");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <GameContext.Provider value={{ gameWon, activeImages, setGameWon, setActiveImages }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameState = (): GameState => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameState must be used within a GameProvider");
  }
  return context;
};

export { images };
