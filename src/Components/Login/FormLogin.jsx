import TextInput from 'Components/Elements/TextInput'
import useLogin from 'Hooks/useLogin'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormLogin = ({ isOnGateway, setBuyerToken }) => {
  const navigate = useNavigate()
  const { onSubmit } = useLogin(isOnGateway, setBuyerToken)
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '1@ratking.com',
      password: '1234Q@we',
    },
  })

  const goToRegister = () => navigate('/signup')

  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="login__call">Inicia sesión para continuar</h2>
        <div className="login-form__inputs">
          <TextInput name="email" label="Email" register={register} />
          <TextInput type="password" name="password" label="Contraseña" register={register} />
        </div>
        <div className="login__forgot-pass">
          <button className="btn-text-only">Olvide mi contraseña</button>
        </div>
        <div className="login-form__buttons">
          <button className="btn btn-solid btn-long" onClick={handleSubmit}>
            Iniciar Sesión
          </button>
          <button className="login-form__register-btn btn btn-text-only" onClick={goToRegister}>
            Registrarse
          </button>
        </div>
        <div className="login__social">
          <div className="MOCK-logo">icon</div>
          <div className="MOCK-logo">icon</div>
          <div className="MOCK-logo">icon</div>
        </div>
      </form>
    </>
  )
}

export default FormLogin
