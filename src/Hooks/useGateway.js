import { isObjEmpty } from 'Helpers/ToBoolean'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import PaymentMethods from 'Services/PaymentMethods'
import QrLinksReqs from 'Services/QrLinks'
import Transactions from 'Services/Transactions'

const useGateway = (slug) => {
  const navigate = useNavigate()
  const [buyerToken, setBuyerToken] = useState(null)
  const [transactionInfo, setTransactionInfo] = useState({})
  const [payMets, setPayMets] = useState([])
  const [isSubmit, setIsSubmit] = useState(null)

  useEffect(() => {
    if (buyerToken && !isSubmit) {
      const req = async () => {
        await getTransactionInfo()
      }
      req()
    }
  }, [buyerToken, isSubmit])

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
      setIsSubmit('loading')

      try {
        await Transactions.confirmTransaction(updateInfo, buyerToken)
        setIsSubmit('success')
      } catch (error) {
        handleError()
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
      },
    }

    await toast.promise(req(), toastMsgs, toastOpts)
    setTimeout(() => navigate('/'), 5000)
  }

  const getTransactionInfo = async () => {
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
      const msg = 'Codigo QR obsoleto'
      handleError(error, msg)
    }
  }

  const getPayMets = async (token) => {
    try {
      const res = await PaymentMethods.getPayMetsGateway(token)
      return res.data
    } catch (error) {
      handleError(error)
    }
  }

  const postTransaction = async (newTransaction, token) => {
    try {
      const res = await Transactions.postTransaction(newTransaction, token)
      return res.data[0]
    } catch (error) {
      handleError(error)
    }
  }
  const handleError = (err, msg) => {
    resetPage()
    const status = err.response.status
    isUserAuth(status)
    isResourceFound(status, msg)
  }

  const resetPage = () => {
    setBuyerToken(null)
    setTransactionInfo({})
    setPayMets([])
    setIsSubmit(null)
  }

  const isUserAuth = (status) => {
    if (status === 401) {
      toast.error('Usuario no autorizado')
    }
  }

  const isResourceFound = (status, msg = null) => {
    if (status === 404) {
      toast.error(msg || 'Algo salio mal. Intentelo de nuevo en unos minutos.')
    }
  }

  return { buyerToken, setBuyerToken, transactionInfo, payMets, isSubmit, confirmTransaction }
}

export default useGateway
