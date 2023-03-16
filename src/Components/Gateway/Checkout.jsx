import CardImage from 'Components/Elements/CardImage'
import 'Styles/Checkout.css'
import FixAmount from './CheckoutInfo/FixAmount'

const Checkout = () => {
  return (
    <div className="checkout__wrapper">
      <FixAmount />
      <div className="checkout__cards">
        <CardImage />
      </div>
      <div className="checkout__btns">
        <button className="btn btn-solid btn-long">PAGAR</button>
        <button className="btn btn-text-only btn-short">cancelar</button>
      </div>
    </div>
  )
}

export default Checkout
