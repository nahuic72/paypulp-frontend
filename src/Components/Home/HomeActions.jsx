import React from 'react'

const HomeActions = () => {
  return (
    <div className="home-actions">
      <button className="btn btn-long btn-solid">Añadir método de pago</button>
      <div className="home-actions__bottom-btns">
        <div className="home-actions__bottom-btn">Pagar con QR</div>
        <div className="home-actions__bottom-btn">Cobrar con QR</div>
        <div className="home-actions__bottom-btn">Recibir donaciones</div>
      </div>
    </div>
  )
}

export default HomeActions
