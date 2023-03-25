import CardImage from 'Components/Elements/CardImage'
import CardImageFunds from 'Components/Elements/CardImageFunds'
import CardsArray from 'Components/Elements/CardsArray'
import TextHeader from 'Components/Elements/TextHeader'
import { useState } from 'react'
import 'Styles/Checkout.css'
import FixAmount from './CheckoutInfo/FixAmount'

const Checkout = ({ sellerInfo, payMets, funds, confirmTransaction }) => {
  const { checkoutType, totalAmount } = sellerInfo
  const [isDisabled, setIsDisabled] = useState(false)
  const [position, setPosition] = useState(['cards__first', 'cards__second', 'cards__third'])

  const rotate = () => {
    const arr = position
    const first = arr.shift()
    arr.push(first)
    setPosition([...arr])
  }

  const pay = () => {
    setIsDisabled(true)
    if (position[0] === 'cards__first') confirmTransaction('buyer_funds')
    if (position[0] === 'cards__second') confirmTransaction(payMets[0])
    if (position[0] === 'cards__third') confirmTransaction(payMets[1])
  }

  return (
    <>
      <TextHeader text="Completa el checkout" />
      <div className="checkout__wrapper">
        {checkoutType === 'fixed' && <FixAmount totalAmount={totalAmount} />}

        {payMets.length > 0 ? (
          <CardsArray payMets={payMets} funds={funds} rotate={rotate} position={position} />
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
