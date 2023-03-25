import { userContext } from 'Context/UserContext'
import { useContext } from 'react'
import 'Styles/CardImage.css'

const CardImage = ({ gradient, position, cardInfo }) => {
  const { cardNumber, cardOwnerName } = cardInfo

  const formatCardNumber = (cardNumber) => {
    const length = cardNumber.length
    const lastNums = cardNumber.substring(length - 5, length - 1)
    return `**** **** **** ${lastNums}`
  }

  return (
    <div className={`card ${gradient} ${position}`}>
      <div className="card__top-info">
        <div className="card__text">Credit Card</div>
        <div className="card__text">Logo</div>
      </div>
      <div className="card__number">{formatCardNumber(cardNumber)}</div>
      <div className="card__bottom-info">
        <div className="card__text">{cardOwnerName}</div>
        <div className="card__text">00/00</div>
      </div>
    </div>
  )
}

export default CardImage
