import Login from 'Components/Login/Login'
import { useLoaderData } from 'react-router-dom'
import 'Styles/Auth.css'

const LoginPage = () => {
  const isOnGateway = false // get query queryParams (if logging on gateway or main app)

  return <Login isOnGateway={isOnGateway} />
}

export default LoginPage
