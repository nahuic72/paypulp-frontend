import FundsInput from 'Components/Elements/FundsInput'
import Seller from './Seller'

const UserInputAmount = () => {
  return (
    <div className="MOCK checkout__transaction-info">
      <Seller />
      <FundsInput name="funds" label="€" />
    </div>
  )
}

export default UserInputAmount
