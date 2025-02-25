import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface CheckedInIcon {
  className?: string; // Additional classes can be added
  checkedIn?: boolean; // Used to display if connected address is checked into Batch 13 contract or not
}

export const CheckedInIcon: React.FC<CheckedInIcon> = ({ className = "", checkedIn }) => {
  return (
    <div
      className={`batch-13-icon flex items-center justify-center text-black dark:text-white font-bold px-2 rounded-full shadow-lg ${checkedIn ? "dark:bg-green-800 bg-green-500" : "dark:bg-red-800 bg-red-500"}${className}`}
      style={{ width: 30, height: 30, fontSize: 30 * 0.4 }}
    >
      {checkedIn ? <FaCheckCircle /> : <FaTimesCircle />}
    </div>
  );
};
