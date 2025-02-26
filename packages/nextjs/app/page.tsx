"use client";

import Link from "next/link";
import BatchProfilesPyramid from "./BatchProfilesPyramid";
import TicTacToeGame from "./TicTacToeGame";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

function DetailsComponent(): JSX.Element {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 bg-base-200 min-h-screen">
      <h1 className="text-center text-5xl font-bold mb-12 text-[#D4A5A5] tracking-wide">Welcome to Batch 13</h1>

      <TicTacToeGame />
      <BatchProfilesPyramid />
    </div>
  );
}

function MiscellaneousComponent(): JSX.Element {
  const { data: checkedInCount } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <div className="flex-grow bg-base-300 w-full mt-20 px-8 py-12">
      <p className="text-lg flex gap-2 justify-center">
        <span className="font-bold">Checked in builders count:</span>
        <span>{checkedInCount?.toString() || "0"}</span>
      </p>
      <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <BugAntIcon className="h-8 w-8 fill-[#A5D4D4]" />
          <p className="text-[#D4A5D4]">
            Tinker with your smart contract using the{" "}
            <Link href="/debug" passHref className="link text-[#A5D4A5]">
              Debug Contracts
            </Link>{" "}
            tab.
          </p>
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <MagnifyingGlassIcon className="h-8 w-8 fill-[#A5D4D4]" />
          <p className="text-[#D4A5D4]">
            Explore your local transactions with the{" "}
            <Link href="/blockexplorer" passHref className="link text-[#A5D4A5]">
              Block Explorer
            </Link>{" "}
            tab.
          </p>
        </div>
      </div>
    </div>
  );
}

function Home(): JSX.Element {
  return (
    <>
      <DetailsComponent />
      <MiscellaneousComponent />
    </>
  );
}

export default Home;
