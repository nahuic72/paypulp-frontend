import CheckboxInput from 'Components/Elements/CheckboxInput'
import TextInput from 'Components/Elements/TextInput'
import useLogin from 'Hooks/useLogin'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'react-hot-toast'

const FormLogin = ({ isOnGateway }) => {
  const { loginError, setLoginError, onSubmit } = useLogin(true)
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '2@ratking.com',
      password: '1234Q@we',
    },
  })

  // const notify = () => toast.error('This is an error!');

  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__call">Inicia sesión para continuar</div>
        <TextInput name="email" label="Email" register={register} />
        <TextInput name="password" label="Contraseña" register={register} />
        <div className="login__forgot-pass">
          <button className="btn__text-only">Olvide mi contraseña</button>
        </div>
        <CheckboxInput name="staySigned" label="Mantener sesión iniciada" />
        <button className="btn-solid btn-long" onClick={handleSubmit}>
          INICIAR SESION
        </button>
        <button className="btn-solid btn-short self-center">Registrarse</button>
        <div className="login__social">
          <div className="MOCK-social-login">icon</div>
          <div className="MOCK-social-login">icon</div>
          <div className="MOCK-social-login">icon</div>
        </div>
      </form>
      <Toaster />
    </>
  )
}

export default FormLogin
