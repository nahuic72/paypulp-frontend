import { useContext, useEffect, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import { userContext } from 'Context/UserContext'
import ConfirmPurchase from 'Components/ConfirmPurchase'
import Submitting from 'Components/Submitting'
import PaymentGateway from 'Services/PaymentGateway'
import Login from 'Components/Login/Login'
import QrLinksReqs from 'Services/QrLinks'
import { toast, Toaster } from 'react-hot-toast'
import PaymentMethods from 'Services/PaymentMethods'
import Checkout from 'Components/Gateway/Checkout'
import Transactions from 'Services/Transactions'

const GatewayPage = () => {
  const { slug, isOnGateway } = useLoaderData()
  const [buyerToken, setBuyerToken] = useState(null)
  const [transactionInfo, setTransactionInfo] = useState({})
  const [payMets, setPayMets] = useState([])
  const [submitState, setSubmitState] = useState(null)

  useEffect(() => {
    if (buyerToken && !submitState) {
      const req = async () => {
        const res = await getData()
        console.log(transactionInfo, buyerToken)
      }
      req()
    }
  }, [buyerToken, submitState])

  useEffect(() => {
    if (Object.keys(transactionInfo).length > 0) {
      const req = async () => {
        const tran = await postTransaction(transactionInfo, buyerToken)
        console.log('post', tran)
      }
      req()
    }
  }, [transactionInfo])

  const getData = async () => {
    const resQrInfo = await getQrInfo(slug, buyerToken)
    const resPayMets = await getPayMets(buyerToken)
    setTransactionInfo(resQrInfo)
    setPayMets(resPayMets)
    // POST transaction
  }

  const getQrInfo = async (slug, token) => {
    try {
      const res = await QrLinksReqs.getQrLinkInfo(slug, token)
      return res.data[0]
    } catch (error) {
      const status = error.response.status
      if (status === 401) {
        toast.error('Unauthorized')
        setBuyerToken(null)
      }
      if (status === 404) {
        toast.error('Bad QR. Please ask the seller to generate a new one!')
      }
    }
  }

  const postTransaction = async (newTransaction, token) => {
    try {
      const res = await Transactions.postTransaction(newTransaction, token)
      return res.data[0]
    } catch (error) {
      const status = error.response.status
      if (status === 401) {
        toast.error('Unauthorized')
        setBuyerToken(null)
      }
      if (status === 404) {
        toast.error('Bad QR. Please ask the seller to generate a new one!')
      }
    }
  }

  const getPayMets = async (token) => {
    try {
      const res = await PaymentMethods.getPayMetsGateway(token)
      return res.data
    } catch (error) {
      const status = error.response.status
      if (status === 404) {
        toast.error('There has been an error. Try again later')
      }
    }
  }

  return (
    <main>
      {!buyerToken && !submitState && <Login isOnGateway={true} setBuyerToken={setBuyerToken} />}
      {buyerToken && !submitState && (
        <Checkout transactionInfo={transactionInfo} payMets={payMets} />
      )}
      <Toaster />
    </main>
  )
}

export default GatewayPage
