import CardRow from "@/components/card-row"
import { HoverCopy } from "@/components/hover-copy"
import { formatAddress } from "@/lib/utils"

const ContractRecipient = ({ beneficiary }: { beneficiary: string }) => {
  return (
    <CardRow
      label="Recipient"
      description={
        <HoverCopy trigger={formatAddress(beneficiary)} content={beneficiary} />
      }
    />
  )
}
export default ContractRecipient
