import { useContext, useEffect, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import { userContext } from 'Context/UserContext'
import ConfirmPurchase from 'Components/ConfirmPurchase'
import Submitting from 'Components/Submitting'
import PaymentGateway from 'Services/PaymentGateway'
import Login from 'Components/Login/Login'
import QrLinksReqs from 'Services/QrLinks'
import { toast, Toaster } from 'react-hot-toast'

const GatewayPage = () => {
  const { slug, isOnGateway } = useLoaderData()
  const [buyerToken, setBuyerToken] = useState(null)
  const [transactionInfo, setTransactionInfo] = useState({})
  const [submitState, setSubmitState] = useState(null)

  useEffect(() => {

    if (buyerToken && !submitState) {
      const transactionInfo = qrInfo(slug, buyerToken)

      // get qrLink
    }
  }, [buyerToken, submitState])

  const qrInfo = async (slug, token) => {
    try {
      const res = await QrLinksReqs.getQrLinkInfo(slug, token)
      return res
    } catch (error) {
      const status = error.response.status
      if (status === 404) {
        toast.error('Bad QR. Please ask the seller to generate a new one!')}
    }
  }

  return (
    <main>
      {!buyerToken && !submitState && <Login isOnGateway={true} setBuyerToken={setBuyerToken} />}
      {buyerToken && !submitState && <div>Checkout</div>}
      <div className="submit-state-message">
        {submitState && <Submitting submitState={submitState} location="gateway" />}
      </div>
      <Toaster />
    </main>
  )
}

export default GatewayPage
