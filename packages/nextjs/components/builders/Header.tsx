export function Header({ parsedCounter }: { parsedCounter: string | undefined }) {
  return (
    <div className="p-8 mb-6 rounded-3xl shadow-lg bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 from-orange-400 via-yellow-300 to-red-400">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Checked-In Builders: <span className="text-white dark:text-gray-200">{parsedCounter ?? "Loading..."}</span>
      </h1>
      <p className="text-center text-gray-800 dark:text-gray-100 italic">
        Discover the builders who&apos;ve joined the network.
      </p>
    </div>
  );
}
