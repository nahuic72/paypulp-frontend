import Login from 'Components/Login/Login'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import 'Styles/Auth.css'

const LoginPage = () => {
  const { isOnGateway } = useLoaderData() // get query queryParams (if logging on gateway or main app)

  return <Login isOnGateway={isOnGateway} />
}

export default LoginPage
