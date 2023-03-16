import HeaderLogin from './HeaderLogin'
import 'Styles/Login.css'
import FormLogin from './FormLogin'

const Login = ({ isOnGateway, setBuyerToken }) => {
  return (
    <div className="login">
      <HeaderLogin />
      <FormLogin isOnGateway={isOnGateway} setBuyerToken={setBuyerToken} />
    </div>
  )
}

export default Login
