import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import PaymentMethods from 'Services/PaymentMethods'
import Transactions from 'Services/Transactions'
import UserInfo from 'Services/User'

const useGateway = (sellerInfo) => {
  const navigate = useNavigate()
  const [buyerToken, setBuyerToken] = useState(null)
  const [transactionInfo, setTransactionInfo] = useState({ ...sellerInfo })
  const [funds, setFunds] = useState(null)
  const [payMets, setPayMets] = useState([])

  useEffect(() => {
    if (buyerToken) {
      const req = async () => {
        const { funds, payMets } = await getBuyerInfo()

        canAffordPurschase(funds, payMets)

        const res = await postTransaction(sellerInfo, buyerToken)
        const addTransInfo = {
          ...transactionInfo,
          transactionUuid: res.transactionUuid,
        }

        setFunds(funds)
        setPayMets(payMets)
        setTransactionInfo(addTransInfo)
      }
      req()
    }
  }, [buyerToken])

  const handleRadioDonation = (value) => {
    console.log(value)
    setTransactionInfo({
      ...transactionInfo,
      totalAmount: value,
    })
  }

  const getBuyerInfo = async () => {
    const { funds } = await getUserFunds(buyerToken)
    const payMets = await getPayMets(buyerToken)
    return { funds, payMets }
  }

  const getUserFunds = async (token) => {
    try {
      const res = await UserInfo.getUserInfo(token)
      return res.data
    } catch (error) {
      handleError(error)
    }
  }

  const getPayMets = async (token) => {
    try {
      const res = await PaymentMethods.getPayMets(token)
      return res.data
    } catch (error) {
      handleError()
    }
  }

  const canAffordPurschase = (funds, payMets) => {
    const hasPayMets = !!payMets.length
    const hasEnoughFunds = parseInt(funds) > parseInt(sellerInfo.totalAmount)

    if (!hasPayMets && !hasEnoughFunds) {
      resetPage()
      toast.error('No tienes fondos suficientes para realizar esta compra')
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

  const confirmTransaction = async (payMet) => {
    const pMetId = payMet === 'buyerFunds' ? payMet : payMet.paymentMethodUuid

    const updateInfo = {
      paymentMethodUuid: pMetId,
      transactionUuid: transactionInfo.transactionUuid,
      userCompleted: true,
      wentThrough: true,
    }
    const toastId = toast.loading('Enviando datos...')

    try {
      await Transactions.confirmTransaction(updateInfo, buyerToken)
      handlePurchaseSuccess(toastId)
    } catch (error) {
      handleError()
    }
  }

  const handlePurchaseSuccess = (toastId) => {
    const toastOpts = {
      duration: 5000,
      id: toastId,
    }
    toast.success('Pago realizado correctamente', toastOpts)
    setTimeout(() => navigate('/home'), 2500)
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
  }

  const isUserAuth = (status) => {
    if (status === 401) {
      toast.error('Usuario no autorizado')
    }
  }

  const isResourceFound = (status, msg = null) => {
    if (status === 404 || status === 400) {
      toast.error(msg || 'Algo salio mal. Intentelo de nuevo en unos minutos.')
    }
  }

  return {
    buyerToken,
    setBuyerToken,
    funds,
    transactionInfo,
    payMets,
    confirmTransaction,
    handleRadioDonation,
  }
}

export default useGateway
