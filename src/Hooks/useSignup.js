import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dates from 'Helpers/Dates'
import Auth from 'Services/Auth'

const useSignup = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  const onSubmit = async (userData) => {
    delete userData.confirmPassword
    userData = {
      ...userData,
      timeZone: Dates.getTimezone(),
    }

    // set submitting msg

    try {
      const res = await Auth.signup(userData)
      if (res.status === 201) {
        // show success message for a few sec and redirect to login
      }
    } catch (error) {
      const msg = error.response.data
      // show error msg
    }
  }

  return {
    page,
    setPage,
    onSubmit,
  }
}

export default useSignup
