"use client"
import Approve from "@/app/contract/standard/[address]/components/action-section/aprove"
import Deposit from "@/app/contract/standard/[address]/components/action-section/deposit"
import { Button } from "@/components/ui/button"
import { useIsApproved } from "@/hooks/useIsApproved"
import { useStandardAccountRoles } from "@/hooks/useStandardAccountRoles"

interface ActionSectionProps {
  contractAddress: string
}
const ActionSection = ({ contractAddress }: ActionSectionProps) => {
  const { isArbiter, isDeployer } = useStandardAccountRoles(contractAddress)
  const { data: isApproved, refetch: refetchIsApproved } =
    useIsApproved(contractAddress)

  return (
    <div>
      {isApproved ? (
        isDeployer && (
          <Deposit
            contractAddress={contractAddress}
            refetchIsApproved={refetchIsApproved}
          />
        )
      ) : isArbiter ? (
        <Approve
          contractAddress={contractAddress}
          refetchIsApproved={refetchIsApproved}
        />
      ) : (
        <Button
          className="w-full text-lg text-center text-orange-700"
          variant={"ghost"}
        >
          Waiting for arbiter to approve
        </Button>
      )}
    </div>
  )
}
export default ActionSection
