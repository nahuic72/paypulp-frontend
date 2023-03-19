import CardImage from 'Components/Elements/CardImage'
import { useNavigate } from 'react-router-dom'
import 'Styles/Checkout.css'
import FixAmount from './CheckoutInfo/FixAmount'

const Checkout = ({ transactionInfo, payMets }) => {
  const navigate = useNavigate()
  const { checkoutType, totalAmount } = transactionInfo

  const goToApp = () => navigate('/login')

  return (
    <div className="checkout__wrapper">
      {checkoutType === 'fixed' && <FixAmount totalAmount={totalAmount} />}
      <div className="checkout__cards">
        {payMets ? (
          <CardImage payMets={payMets} />
        ) : (
          <div>You don&apos;t have any active payment methods</div>
        )}
      </div>
      <div className="checkout__btns">
        <button className="btn btn-solid btn-long">PAGAR</button>
        <button className="btn btn-text-only btn-short" onClick={goToApp}>
          cancelar
        </button>
      </div>
    </div>
  )
}

export default Checkout
