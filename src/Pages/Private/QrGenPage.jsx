import TextHeader from 'Components/Elements/TextHeader'
import QrGen from 'Components/QrGen/QrGen'
import { useParams } from 'react-router'

const QrGenPage = () => {
  const { checkoutType } = useParams()

  return (
    <>
      <TextHeader text="Cobra con QR" />
      <QrGen checkoutType={checkoutType} />
    </>
  )
}

export default QrGenPage
