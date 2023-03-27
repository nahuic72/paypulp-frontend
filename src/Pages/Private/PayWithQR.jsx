import TextHeader from 'Components/Elements/TextHeader'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router'

const PayWithQR = () => {
  const navigate = useNavigate()
  return (
    <>
      <TextHeader text={'Paga con QR'} />
      <div style={{ height: '100vh' }}>
        <QrReader
          onResult={(result, error) => {
            if (result) {
              navigate(`/${result}`)
            }

            if (error) {
              console.info(error)
            }
          }}
          style={{ width: '100%', height: '100%;' }}
        />
      </div>
    </>
  )
}

export default PayWithQR
