import { useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router-dom'
import useLogin from 'Hooks/useLogin'
import 'Styles/Auth.css'
import Login from 'Components/Login/Login'

const LoginPage = ({ setIsAuth }) => {
  const queryParams = useLoaderData() // get query queryParams (if logging on gateway or main app)
  const { loginError, setLoginError, onSubmit } = useLogin(queryParams.isOnGateway, setIsAuth)
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: 'abc@abc.com',
      password: '1234Q@we',
    },
  })

  return <Login />
}

export default LoginPage
