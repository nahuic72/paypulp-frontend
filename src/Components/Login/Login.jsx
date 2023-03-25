import HeaderLogin from './HeaderLogin'
import 'Styles/Login.css'
import FormLogin from './FormLogin'

const Login = ({ setBuyerToken }) => {
  return (
    <div className="login">
      <div className="login__header-wrapper">
        <HeaderLogin />
      </div>
      <FormLogin setBuyerToken={setBuyerToken} />
    </div>
  )
}

export default Login
