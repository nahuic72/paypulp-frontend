import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dates from 'Helpers/Dates'
import PaymentMethods from 'Services/PaymentMethods'
import toast, { Toaster } from 'react-hot-toast'

const useAddPaymentMethod = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const onSubmit = async (paymentData) => {
    paymentData = {
      ...paymentData,
    }

    try {
      const res = await PaymentMethods.addPaymentMethod(paymentData)
      if (res.status === 201) {
        // show success message for a few sec and redirect to home
        toast.success('Su método de pago ha sido agregado con éxito!')
        navigate('/home')
      }
    } catch (error) {
      const msg = error.response.data
      // show error msg
      toast.error('Se produjo un error. Por favor, vuelve a intentarlo más tarde.')
    }
  }

  return {
    errorMessage,
    onSubmit,
  }
}

export default useAddPaymentMethod
