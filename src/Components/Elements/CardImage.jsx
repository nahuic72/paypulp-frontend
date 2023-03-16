import { userContext } from 'Context/UserContext'
import { useContext } from 'react'
import 'Styles/CardImage.css'

const CardImage = () => {
  const { userInfo, paymentMethods } = useContext(userContext)

  const preferredPayMethod = paymentMethods.find((payMethod) => payMethod.isPreferred === true)

  const formatCardNumber = (cardNumber) => {
    const length = cardNumber.length
    const lastNums = cardNumber.substring(length - 5, length - 1)
    return `**** **** **** ${lastNums}`
  }

  return (
    <div className="card-container">
      <div className="card-background">
        <div className="card">
          <div className="card__top-info">
            <div>{preferredPayMethod.cardType || 'bank'}</div>
            <div>{preferredPayMethod.cardName || 'card name'}</div>
          </div>
          <div className="card__owner-info">
            <div>
              {userInfo?.firstName} {userInfo?.lastName || ''}
            </div>
            <div>{formatCardNumber(preferredPayMethod.cardNumber)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardImage
