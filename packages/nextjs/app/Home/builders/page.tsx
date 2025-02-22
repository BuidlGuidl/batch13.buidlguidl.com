"use client";

import { useEffect, useState } from "react";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export default function Home() {
  const { data: totalCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const parsedCounter = typeof totalCounter === "bigint" ? totalCounter.toString() : totalCounter;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-6 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Checked-In Builders: <span className="text-white">{parsedCounter ?? "Loading..."}</span>
        </h1>
        <p className="text-center text-gray-300 italic">Discover the builders who&apos;ve joined the network.</p>
      </div>
      <Members />
    </div>
  );
}

interface Event {
  args?: {
    builder?: string;
    checkInContract?: string;
    first?: boolean;
  };
}

function Members() {
  const {
    data: events,
    isLoading,
    error,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 131801148n,
  });

  const [builders, setBuilders] = useState<{ builder: string; checkInContract: string }[]>([]);

  useEffect(() => {
    console.log("Raw events data:", events);

    if (!events || !Array.isArray(events)) {
      console.error("Expected events to be an array, but got:", typeof events, events);
      return;
    }

    const extractedBuilders = events
      .filter((event: Event) => event.args?.first === true)
      .map((event: Event) => ({
        builder: event.args!.builder as string,
        checkInContract: event.args!.checkInContract as string,
      }));

    setBuilders(extractedBuilders);
    console.log("Filtered builders:", extractedBuilders);
  }, [events]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-300">Check-Ins</h2>

        {isLoading ? (
          <p className="text-center text-gray-400">Loading events...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error.message}</p>
        ) : builders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-lg">
              <thead className="bg-gray-700 text-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left">Builder Address</th>
                  <th className="px-4 py-3 text-left">Check-In Contract</th>
                  <th className="px-4 py-3 text-center">Profile</th>
                </tr>
              </thead>
              <tbody>
                {builders.map((builderData, index) => (
                  <tr key={index} className="border-b border-gray-600 hover:bg-gray-700 transition-colors duration-200">
                    <td className="px-4 py-3 font-mono break-words">{builderData.builder}</td>
                    <td className="px-4 py-3 font-mono break-words">{builderData.checkInContract}</td>
                    <td className="px-4 py-3 text-center">
                      <a
                        href={`http://localhost:3000/builders/${builderData.builder}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transition duration-300"
                      >
                        View Profile
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-400">No first-time builders found.</p>
        )}
      </div>
    </div>
  );
}
