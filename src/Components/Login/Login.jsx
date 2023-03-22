import HeaderLogin from './HeaderLogin'
import 'Styles/Login.css'
import FormLogin from './FormLogin'

const Login = ({ isOnGateway, setBuyerToken }) => {
  return (
    <div className="login">
      <div className="login__header-wrapper">
        <HeaderLogin />
      </div>
      <FormLogin isOnGateway={isOnGateway} setBuyerToken={setBuyerToken} />
    </div>
  )
}

export default Login
