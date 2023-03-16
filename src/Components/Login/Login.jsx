import HeaderLogin from './HeaderLogin'
import 'Styles/Login.css'
import FormLogin from './FormLogin'

const Login = ({ isOnGateway }) => {
  return (
    <div className="login">
      <HeaderLogin />
      <FormLogin isOnGateway={isOnGateway} />
    </div>
  )
}

export default Login
