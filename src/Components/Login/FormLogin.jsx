import CheckboxInput from 'Components/Elements/CheckboxInput'
import TextInput from 'Components/Elements/TextInput'

const FormLogin = () => {
  return (
    <form className="login__form">
      <div className="login__call">Inicia sesión para continuar</div>
      <TextInput name="email" label="Email" />
      <TextInput name="password" label="Contraseña" />
      <div className="login__forgot-pass">
        <button className="btn__text-only">Olvide mi contraseña</button>
      </div>
      <CheckboxInput name="staySigned" label="Mantener sesión iniciada" />
      <button className="btn-solid btn-long">INICIAR SESION</button>
      <button className="btn-solid btn-short self-center">Registrarse</button>
      <div className="login__social">
        <div className="MOCK-social-login">icon</div>
        <div className="MOCK-social-login">icon</div>
        <div className="MOCK-social-login">icon</div>
      </div>
    </form>
  )
}

export default FormLogin
