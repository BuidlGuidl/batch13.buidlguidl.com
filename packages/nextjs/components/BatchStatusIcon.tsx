import { useMemo } from "react";
import { Tooltip } from "./Tooltip";
import { Batch13Icon } from "./assets/Batch13Icon";
import { CheckedInIcon } from "./assets/CheckedInIcon";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const BatchStatusIcon = ({ userAddress }: { userAddress: string | undefined }): React.ReactNode => {
  /**
   * Retrieve BatchRegisty.sol contract data
   */
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

  const isInBatch13 = !!allowList;
  const isCheckedIn = yourContractAddress !== "0x0000000000000000000000000000000000000000";

  /**
   * State Machine
   */
  const batchState = useMemo(() => {
    if (!isInBatch13) return "NOT_IN_BATCH";
    if (!isCheckedIn) return "IN_BATCH_NOT_CHECKED_IN";
    return "IN_BATCH_CHECKED_IN";
  }, [isInBatch13, isCheckedIn]);

  /**
   * Object Mapping: key = state, value = output/result of state
   */
  const statusComponents: Record<string, JSX.Element> = {
    NOT_IN_BATCH: (
      <div className="flex items-center gap-2">
        <Tooltip tooltip="Not in Batch 13">
          <CheckedInIcon checkedIn={false} />
        </Tooltip>
      </div>
    ),

    IN_BATCH_NOT_CHECKED_IN: (
      <div className="flex items-center gap-2">
        <Tooltip tooltip="Need to Check In">
          <Batch13Icon className="dark:bg-yellow-600 bg-yellow-400" />
        </Tooltip>
      </div>
    ),

    IN_BATCH_CHECKED_IN: (
      <div className="flex items-center gap-2">
        <Tooltip tooltip="Batch 13 - Checked In">
          <CheckedInIcon checkedIn={true} />
        </Tooltip>
      </div>
    ),
  };

  return statusComponents[batchState] || null;
};
