"use client";

import { Header } from "../../components/builders/Header";
import { Members } from "../../components/builders/Members";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export default function Home() {
  const { data: totalCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const parsedCounter = typeof totalCounter === "bigint" ? totalCounter.toString() : totalCounter;

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 from-yellow-50 to-pink-100 text-gray-900 dark:text-white p-8">
      <Header parsedCounter={parsedCounter} />
      <Members />
    </div>
  );
}
