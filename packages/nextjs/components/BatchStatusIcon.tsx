import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const BatchStatusIcon = ({ userAddress }: { userAddress: string | undefined }): React.ReactNode => {
  const { data: allowList } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [userAddress],
  });

  const { data: yourContractAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [userAddress],
  });

  function isInBatch13() {
    return allowList;
  }
  function isCheckedIn() {
    return yourContractAddress == "0x0000000000000000000000000000000000000000" ? false : true;
  }

  /**
   * Batch Info header icons
   */
  interface Batch13Icon {
    className?: string; // Additional classes can be added
  }

  const Batch13Icon: React.FC<Batch13Icon> = ({ className }) => {
    return (
      <div
        className={`batch-13-icon flex items-center justify-center dark:text-white font-bold px-2 rounded-full shadow-lg ${className}`}
        style={{ width: 30, height: 30, fontSize: 30 * 0.4 }}
      >
        13
      </div>
    );
  };

  interface CheckedInIcon {
    className?: string; // Additional classes can be added
    checkedIn?: boolean; // Used to display if connected address is checked into Batch 13 contract or not
  }

  const CheckedInIcon: React.FC<CheckedInIcon> = ({ className = "", checkedIn }) => {
    return (
      <div
        className={`batch-13-icon flex items-center justify-center text-black dark:text-white font-bold px-2 rounded-full shadow-lg ${checkedIn ? "dark:bg-green-800 bg-green-500" : "dark:bg-red-800 bg-red-500"}${className}`}
        style={{ width: 30, height: 30, fontSize: 30 * 0.4 }}
      >
        {checkedIn ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>
    );
  };

  /**
   * State Machine
   */
  const userState = () => {
    if (!isInBatch13()) return "NOT_IN_BATCH";
    if (!isCheckedIn()) return "IN_BATCH_NOT_CHECKED_IN";
    return "IN_BATCH_CHECKED_IN";
  };

  const renderUserStatus = () => {
    switch (userState()) {
      case "NOT_IN_BATCH":
        return (
          <div className="flex items-center gap-2">
            <CheckedInIcon checkedIn={false} />
          </div>
        );

      case "IN_BATCH_NOT_CHECKED_IN":
        return (
          <div className="flex items-center gap-2">
            <Batch13Icon className="dark:bg-yellow-600 bg-yellow-400" />
          </div>
        );

      case "IN_BATCH_CHECKED_IN":
        return (
          <div className="flex items-center gap-2">
            <CheckedInIcon checkedIn={true} />
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderUserStatus()}</>;
};
