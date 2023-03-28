import TextHeader from 'Components/Elements/TextHeader'
import { QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router'

const PayWithQR = () => {
  const navigate = useNavigate()

  const camStyle = {
    position: 'relative',
    top: '38%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const previewStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }

  const goBack = () => {
    navigate('/home')
  }

  return (
    <>
      <TextHeader text={'Paga con QR'} navigate={goBack} />
      <div style={camStyle}>
        <QrReader
          onResult={(result, error) => {
            if (result) {
              const url = result.text.match(/^https?:\/\/[^/]+(\/[^?#]*)/i)[1]
              navigate(url)
            }

            if (error) {
              console.info(error)
            }
          }}
          style={previewStyle}
        />
      </div>
    </>
  )
}

export default PayWithQR
