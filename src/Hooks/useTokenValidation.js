import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from 'Context/UserContext'
import UserInfo from 'Services/User'

export default function useTokenValidation() {
  const { userInfo, setUserInfo, setTransactions, setPaymentMethods } = useContext(userContext)
  const navigate = useNavigate()
  const [tokenError, setTokenError] = useState(false)

  // if token is active, get customer info
  useEffect(() => {
    if (sessionStorage.getItem('token') && Object.keys(userInfo).length === 0) {
      const getUserInfo = async () => {
        try {
          const res = await UserInfo.getUserInfo()
          setUserInfo(res.data.userInfo)
          setPaymentMethods(res.data.paymentMethods)
        } catch (error) {
          console.error(error)
          sessionStorage.clear()
          setUserInfo({})
          setTransactions([])
          setPaymentMethods([])
          setTokenError(true)
          navigate('/login')
        }
      }
      getUserInfo()
    }
  }, [])

  return { tokenError }
}
