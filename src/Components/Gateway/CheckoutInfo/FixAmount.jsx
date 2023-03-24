import FundsInput from 'Components/Elements/FundsInput'
import Seller from './Seller'

const FixAmount = ({ totalAmount }) => {
  return (
    <div className="checkout__transaction-info">
      <Seller />
      <div className="checkout__fix-amount">
        <span>{totalAmount} €</span>
      </div>
    </div>
  )
}

export default FixAmount
