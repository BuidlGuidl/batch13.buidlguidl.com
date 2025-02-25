import { useMemo } from "react";
import { BuilderRow } from "./BuilderRow";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

export function Members() {
  const {
    data: events,
    isLoading,
    error,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 131801148n,
  });

  const builders = useMemo(() => {
    if (!events || !Array.isArray(events)) return [];
    return events.filter(event => event.args?.first === true).map(event => ({ builder: event.args.builder }));
  }, [events]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-6 rounded-3xl shadow-lg bg-gradient-to-r dark:from-gray-700 dark:to-gray-800 from-blue-200 to-green-300">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700 dark:text-blue-300">Check-Ins</h2>
        {isLoading ? (
          <p className="text-center text-gray-600 dark:text-gray-400">Loading events...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error.message}</p>
        ) : builders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg table-auto">
              <thead className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                <tr>
                  <th className="px-4 py-3 text-left">Builder Address</th>
                  <th className="px-4 py-3 text-center">Profile</th>
                </tr>
              </thead>
              <tbody>
                {builders.map((builderData, index) => (
                  <BuilderRow key={index} builderData={{ builder: builderData.builder ?? "" }} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">No first-time builders found.</p>
        )}
      </div>
    </div>
  );
}
