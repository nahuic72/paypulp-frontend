import FundsInput from 'Components/Elements/FundsInput'
import { userContext } from 'Context/UserContext'
import { useContext, useState } from 'react'
import QRCode from 'react-qr-code'
import 'Styles/QrGen.css'

const QrGen = ({ checkoutType }) => {
  const { userCtxt, setUserCtxt } = useContext(userContext)
  const [write, setWrite] = useState('')

  const handleChange = (amount) => {
    const baseUrl = process.env.REACT_APP_FRONT_URL
    const sellerUuid = userCtxt.userUuid

    const url = `${baseUrl}/gateway/${sellerUuid}/${checkoutType}/${amount}`
    setWrite(url)
  }

  return (
    <div className="qr-gen">
      <div className="qr-gen__input-wrapper">
        <FundsInput label="€" handleChange={handleChange} />
        <div className="qr-gen__text-aux text-aux">Ingresa el monto a cobrar</div>
      </div>
      <h3 className="qr-gen__call-text">
        Pídele a tu cliente que escanee el código QR y siga las instrucciones
      </h3>
      <div style={{ height: 'auto', margin: '0 auto', minWidth: 60, maxWidth: 194, width: '100%' }}>
        <QRCode
          size={256}
          style={{
            height: 'auto',
            maxWidth: '100%',
            width: '100%',
          }}
          bgColor="#363b3e"
          fgColor="#2bffd9"
          value={write}
          viewBox={`0 0 256 256`}
        />
      </div>
      <button className="btn btn-solid btn-short">Kit Imprimible</button>
      <button className="btn text-only-btn qr-gen__cancel-btn">Cancelar</button>
    </div>
  )
}

export default QrGen
