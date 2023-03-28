import FundsInput from 'Components/Elements/FundsInput'
import { userContext } from 'Context/UserContext'
import { useContext, useState } from 'react'
import QRCode from 'react-qr-code'
import { useNavigate } from 'react-router'
import 'Styles/QrGen.css'

const QrGen = ({ checkoutType, goToHome }) => {
  const navigate = useNavigate()
  const { userCtxt } = useContext(userContext)
  const [write, setWrite] = useState('')

  const handleChange = (amount) => {
    const baseUrl = process.env.REACT_APP_FRONT_URL
    const sellerUuid = userCtxt.userUuid

    const url = `${baseUrl}/gateway/${sellerUuid}/${checkoutType}/${amount}`
    setWrite(url)
  }

  return (
    <div className="qr-gen">
      {checkoutType === 'fixed' && (
        <>
          <div className="qr-gen__input-wrapper">
            <FundsInput label="€" handleChange={handleChange} />
            <div className="qr-gen__text-aux text-aux">Ingresa el monto a cobrar</div>
          </div>
          <h3 className="qr-gen__call-text">
            Pídele a tu cliente que escanee el código QR y siga las instrucciones
          </h3>
        </>
      )}
      {checkoutType === 'donate' && (
        <div className="qr-gen__donate-amount-wrapper">
          <h3>Comparte este código con tu público y pídeles que lo escaneen con Paypulp.</h3>
          <h3>Podrán elegir qué donación hacer.</h3>
        </div>
      )}
      <div
        style={{
          height: 'auto',
          margin: '0 auto',
          minWidth: 60,
          maxWidth: 194,
          width: '100%',
        }}>
        <QRCode
          size={256}
          style={{
            height: 'auto',
            maxWidth: '100%',
            width: '100%',
          }}
          value={write}
          viewBox={`0 0 256 256`}
        />
      </div>
      <button className="btn btn-solid btn-short">Kit Imprimible</button>
      <button className="btn text-only-btn qr-gen__cancel-btn" onClick={goToHome}>
        Cancelar
      </button>
    </div>
  )
}

export default QrGen
