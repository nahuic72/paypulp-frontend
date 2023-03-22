import toast, { Toaster } from 'react-hot-toast'
import 'Styles/Inputs.css'
import { useEffect } from 'react'

const TextInput = ({ name, label, register, validationType, errors, type }) => {
  const errorMessage = errors?.[name]?.message
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { id: name, position: 'top-center' })
    } else {
      toast.dismiss(name)
    }
  }, [errorMessage, name])

  return (
    <div>
      <div className="text-input__wrapper">
        <label htmlFor={name}>{label}</label>
        <input type={type} {...register(name, validationType)} />
        {name === 'email' && <div>Email MUI</div>}
        {name === 'password' && <div>password icon</div>}
      </div>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
    </div>
  )
}

export default TextInput
