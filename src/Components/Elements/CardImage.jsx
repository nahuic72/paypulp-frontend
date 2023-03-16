import { userContext } from 'Context/UserContext'
import { useContext } from 'react'
import 'Styles/CardImage.css'

const CardImage = () => {
  // const { userInfo, paymentMethods } = useContext(userContext)

  const formatCardNumber = (cardNumber) => {
    const length = cardNumber.length
    const lastNums = cardNumber.substring(length - 5, length - 1)
    return `**** **** **** ${lastNums}`
  }

  return (
    <div className="card-container">
      <div className="card-background">
        <div className="card card__gradient--1">
          <div className="card__top-info">
            <div className="card__text">Credit Card</div>
            <div className="card__text">Logo</div>
          </div>
          <div className="card__number">0000 0000 0000 0000</div>
          <div className="card__bottom-info">
            <div className="card__text">First M Lastname</div>
            <div className="card__text">00/00</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardImage
