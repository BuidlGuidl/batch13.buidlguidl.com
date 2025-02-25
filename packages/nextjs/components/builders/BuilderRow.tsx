import { useEffect, useState } from "react";
import Link from "next/link";
import { Address } from "../scaffold-eth";

export function BuilderRow({ builderData }: { builderData: { builder: string } }) {
  const [pageExists, setPageExists] = useState<boolean | null>(null);

  useEffect(() => {
    const checkPageExists = async () => {
      try {
        const response = await fetch(`./builders/${builderData.builder}`);
        setPageExists(response.ok);
      } catch (error) {
        console.error("Error checking page existence:", error);
        setPageExists(false);
      }
    };
    checkPageExists();
  }, [builderData.builder]);

  return (
    <tr className="border-b border-gray-300 dark:border-gray-600 hover:bg-green-200 dark:hover:bg-gray-700 transition-colors duration-200">
      <td className="px-4 py-3 font-mono break-all">
        <Address address={builderData.builder} />
      </td>
      <td className="px-4 py-3 text-center">
        {pageExists === null ? (
          <div className="w-24 h-6 skeleton"></div>
        ) : pageExists ? (
          <Link
            href={`./builders/${builderData.builder}`}
            className="inline-block px-4 py-2 bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-pink-500 to-yellow-500 text-white rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            View Profile
          </Link>
        ) : (
          <span className="text-gray-600 dark:text-gray-400 italic">Profile Page does not exist</span>
        )}
      </td>
    </tr>
  );
}
