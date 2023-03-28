import TextHeader from 'Components/Elements/TextHeader'
import QrGen from 'Components/QrGen/QrGen'
import { useNavigate, useParams } from 'react-router'

const QrGenPage = () => {
  const { checkoutType } = useParams()
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/home')
  }

  return (
    <>
      <TextHeader text="Cobra con QR" navigate={goToHome} />
      <QrGen checkoutType={checkoutType} goToHome={goToHome} />
    </>
  )
}

export default QrGenPage
