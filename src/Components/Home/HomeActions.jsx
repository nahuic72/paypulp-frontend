import { useNavigate } from 'react-router'

const HomeActions = ({ accountType }) => {
  const navigate = useNavigate()

  const goToQrGen = (checkoutType) => {
    const url = `/qrgen/${accountType}/${checkoutType}`
    navigate(url)
  }

  return (
    <div className="home-actions">
      <button className="btn btn-long btn-solid">Añadir método de pago</button>
      <div className="home-actions__bottom-btns">
        <div className="home-actions__bottom-btn">Pagar con QR</div>
        <div className="home-actions__bottom-btn" onClick={() => goToQrGen(`fixed`)}>
          Cobrar con QR
        </div>
        <div className="home-actions__bottom-btn" onClick={() => goToQrGen(`donate`)}>
          Recibir donaciones
        </div>
      </div>
    </div>
  )
}

export default HomeActions
