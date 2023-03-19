import { useContext, useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
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
import { isObjEmpty } from 'Helpers/ToBoolean'

const GatewayPage = () => {
  const navigate = useNavigate()
  const { slug, isOnGateway } = useLoaderData()
  const [buyerToken, setBuyerToken] = useState(null)
  const [transactionInfo, setTransactionInfo] = useState({})
  const [payMets, setPayMets] = useState([])
  const [submitState, setSubmitState] = useState(null)

  useEffect(() => {
    if (buyerToken && !submitState) {
      const req = async () => {
        await getData()
      }
      req()
    }
  }, [buyerToken, submitState])

  useEffect(() => {
    if (!isObjEmpty(transactionInfo)) {
      const req = async () => {
        try {
          const res = await postTransaction(transactionInfo, buyerToken)
          const addInfo = {
            ...transactionInfo,
            transactionUuid: res.transactionUuid,
          }
          setTransactionInfo(addInfo)
        } catch (error) {
          console.error(error)
          // redirect
        }
      }
      req()
    }
  }, [transactionInfo.sellerUuid])

  const confirmTransaction = async (tranUuid) => {
    const req = async () => {
      const updateInfo = {
        transactionUuid: tranUuid,
        userCompleted: true,
        wentThrough: true,
      }
      setSubmitState('loading')
      try {
        await Transactions.confirmTransaction(updateInfo, buyerToken)
        setSubmitState('success')
      } catch (error) {
        const status = error.response.status
        if (status === 401) {
          toast.error('Usuario no autorizado')
          setBuyerToken(null)
        }
        if (status === 404) {
          toast.error('Algo salio mal')
        }
      }
    }
    const toastMsgs = {
      loading: 'Procesando el pago...',
      success: <b>Compra realizada!</b>,
      error: <b>Ha habido un error</b>,
    }
    const toastOpts = {
      success: {
        duration: 5000,
        icon: '🔥',
      },
    }
    await toast.promise(req(), toastMsgs, toastOpts)
    setTimeout(() => navigate('/'), 5000)
  }
  const getData = async () => {
    const resQrInfo = await getQrInfo(slug, buyerToken)
    if (!resQrInfo) return
    const resPayMets = await getPayMets(buyerToken)
    if (!resPayMets) return
    setTransactionInfo(resQrInfo)
    setPayMets(resPayMets)
  }

  const getQrInfo = async (slug, token) => {
    try {
      const res = await QrLinksReqs.getQrLinkInfo(slug, token)
      return res.data[0]
    } catch (error) {
      const status = error.response.status
      setBuyerToken(null)
      if (status === 401) {
        toast.error('Usuario no autorizado')
      }
      if (status === 404) {
        toast.error('Codigo QR obsoleto')
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
        toast.error('Usuario no autorizado')
        setBuyerToken(null)
      }
      if (status === 404) {
        toast.error('Algo salio mal. Intentelo de nuevo en unos minutos.')
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
        toast.error('Algo salio mal. Intentelo de nuevo en unos minutos.')
      }
    }
  }

  return (
    <main>
      {!buyerToken && !submitState && <Login isOnGateway={true} setBuyerToken={setBuyerToken} />}
      {buyerToken && !isObjEmpty(transactionInfo) && (
        <Checkout
          transactionInfo={transactionInfo}
          payMets={payMets}
          confirmTransaction={confirmTransaction}
        />
      )}
      <Toaster />
    </main>
  )
}

export default GatewayPage
