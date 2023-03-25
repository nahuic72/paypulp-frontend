import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useMatch, useNavigate } from 'react-router-dom'
import Auth from '../Services/Auth'

/**
 * Handle login logic
 * @param {boolean} isOnGateway if redirected from QR link -> redirect to checkout
 * @returns {error, errorSetter, onSubmit}
 */
export default function useLogin(setBuyerToken) {
  const [loginError, setLoginError] = useState(null)
  const navigate = useNavigate()
  const isOnGateway = !useMatch('/login')

  const onSubmit = async (userData) => {
    try {
      const apiRes = await Auth.login(userData)
      const userToken = apiRes.data.token
      if (isOnGateway) {
        setBuyerToken(userToken)
      } else if (!isOnGateway) {
        sessionStorage.setItem('token', userToken)
        navigate('/home')
      }
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        const msg = `There's been a problem. Check your internet conection.`
        toast.error(msg)
      }

      if (error.response?.status === 401) {
        const msg = error.response.data
        toast.error(msg)
      }
    }
  }

  return { loginError, setLoginError, onSubmit }
}
