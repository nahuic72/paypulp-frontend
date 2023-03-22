import TextHeader from 'Components/Elements/TextHeader'
import { useParams } from 'react-router'

const QrGenPage = () => {
  const params = useParams()

  return (
    <>
      <TextHeader text="Cobra con QR" />
    </>
  )
}

export default QrGenPage
