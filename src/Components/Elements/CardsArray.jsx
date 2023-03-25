import CardImage from './CardImage'
import CardImageFunds from './CardImageFunds'

const CardsArray = ({ payMets = null, funds, rotate, position = null }) => {
  return (
    <div className="home-cards" onClick={rotate}>
      {payMets.length >= 3 && (
        <CardImage position={position?.[2]} cardInfo={payMets?.[1]} gradient="card__gradient--2" />
      )}
      {payMets.length >= 2 && (
        <CardImage position={position?.[1]} cardInfo={payMets?.[0]} gradient="card__gradient--1" />
      )}
      <CardImageFunds position={position?.[0]} funds={funds} />
    </div>
  )
}

export default CardsArray
