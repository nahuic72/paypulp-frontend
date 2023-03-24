import CardImageFunds from 'Components/Elements/CardImageFunds'
import CardsArray from 'Components/Elements/CardsArray'
import TextHeader from 'Components/Elements/TextHeader'
import { isArrEmpty } from 'Helpers/ToBoolean'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import 'Styles/Checkout.css'
import FixAmount from './CheckoutInfo/FixAmount'

const Checkout = ({ sellerInfo, payMets, funds, confirmTransaction }) => {
  const { checkoutType, totalAmount } = sellerInfo
  const [isDisabled, setIsDisabled] = useState(false)

  const pay = () => {
    setIsDisabled(true)
    confirmTransaction()
  }

  return (
    <>
      <TextHeader text="Completa el checkout" />
      <div className="checkout__wrapper">
        {checkoutType === 'fixed' && <FixAmount totalAmount={totalAmount} />}

        {payMets.length > 0 ? (
          <CardsArray payMets={payMets} />
        ) : (
          <div className="checkout__no-cards">
            <CardImageFunds funds={funds} key="c" />
          </div>
        )}

        <button
          className="checkout__pay-btn btn btn-solid btn-long"
          onClick={pay}
          disabled={isDisabled}>
          PAGAR
        </button>
      </div>
    </>
  )
}

export default Checkout
