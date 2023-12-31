import { CallToActionButton } from "@/components/call-to-action-button"
import CustomConnectButton from "@/components/custom-connect-button"
import { Card } from "@/components/ui/card"
import { FilterKey } from "@/types/types"
import { useAccount } from "wagmi"

interface NoRoleNotConnectedProps {
  keyToFilterOn: FilterKey
}
const NoRoleNotConnected = ({ keyToFilterOn }: NoRoleNotConnectedProps) => {
  const { isConnected } = useAccount()

  const role = (key: FilterKey) => {
    if (key) {
      if (key === "deployer") {
        return "owner"
      } else if (key === "beneficiary") {
        return "recipient"
      } else if (key === "arbiters") {
        return "arbiter"
      } else if (key === "managers") {
        return "manager"
      } else return key
    }
  }
  return (
    <>
      {isConnected ? (
        <Card className="flex flex-col items-center gap-8 p-4 mx-auto mt-12 w-fit">
          {keyToFilterOn === "all_contracts" ? (
            <p className="text-lg font-semibold">No contracts found</p>
          ) : (
            <p className="text-lg font-semibold">
              No contracts found where you are the
              <span className="capitalize"> {role(keyToFilterOn)}</span>
            </p>
          )}
          <CallToActionButton />
        </Card>
      ) : (
        <Card className="flex flex-col items-center gap-8 p-4 mx-auto mt-12 w-fit">
          {keyToFilterOn === "all_contracts" ? (
            <p className="text-lg font-semibold">No contracts found</p>
          ) : (
            <p className="text-xl font-semibold">
              Connect your wallet to see if you are the{" "}
              <span className="capitalize">{role(keyToFilterOn)}</span>
            </p>
          )}
          <CustomConnectButton />
        </Card>
      )}
    </>
  )
}
export default NoRoleNotConnected
