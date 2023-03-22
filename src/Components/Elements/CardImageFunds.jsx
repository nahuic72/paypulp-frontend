import { userContext } from 'Context/UserContext'
import { useContext } from 'react'
import 'Styles/CardImage.css'

const CardImageFunds = ({ funds, position }) => {
  // const { userInfo, paymentMethods } = useContext(userContext)

  const formatCardNumber = (cardNumber) => {
    const length = cardNumber.length
    const lastNums = cardNumber.substring(length - 5, length - 1)
    return `**** **** **** ${lastNums}`
  }

  return (
    <div className={`card-funds card-funds__gradient ${position}`}>
      <div className="card-funds__top-info">
        <div className="card-funds__text">PAYPULP COIN</div>
        <div className="card-funds__text">Logo</div>
      </div>
      <div className="card-funds__number">Saldo disponible {funds} €</div>
      <div className="card-funds__bottom-info">
        <div className="card-funds__text">First M Lastname</div>
        <div className="card-funds__text">00/00</div>
      </div>
    </div>
  )
}

export default CardImageFunds
