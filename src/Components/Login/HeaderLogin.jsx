import PayPulpLogo from 'Components/Elements/Icons/PayPulpLogo'

const HeaderLogin = () => {
  return (
    <div className="login__header">
      <PayPulpLogo />
      <span>
        <h1 className="login-header__h1">PayPulp</h1>
        <h3>Pagos al instante</h3>
      </span>
    </div>
  )
}

export default HeaderLogin
