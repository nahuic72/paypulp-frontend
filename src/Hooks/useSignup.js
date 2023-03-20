import { userContext } from 'Context/UserContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dates from 'Helpers/Dates'
import Auth from 'Services/Auth'

const useSignup = () => {
  const { setUserInfo, setTransactions, setPaymentMethods } = useContext(userContext)
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [submitting, setSubmitting] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const onSubmit = async (userData) => {
    if (userData) {
      delete userData.confirmPassword
      userData = {
        ...userData,
        timeZone: Dates.getTimezone(),
      }
    }
    setSubmitting('waiting')
    try {
      const res = await Auth.signup(userData)
      if (res.statusText === 'OK') {
        const success = () => {
          setTransactions([])
          setPaymentMethods([])
          const redirect = () => navigate('/dashboard')
          setSubmitting('success')
          const newUserInfo = {
            ...res.data.userInfo,
            ...res.data.customerInfo,
          }
          localStorage.setItem('token', res.data.token)
          setUserInfo(newUserInfo)
          setTimeout(redirect, 2000)
        }
        success()
      }
      // just faking api call
      // setTimeout(success, 3000);
    } catch (error) {
      setSubmitting('error')
      if (error.response) setErrorMessage(error.response.data)
      console.error(error)
    }
  }

  return {
    page,
    setPage,
    submitting,
    setSubmitting,
    errorMessage,
    onSubmit,
  }
}

export default useSignup
