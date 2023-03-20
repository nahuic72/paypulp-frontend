import CheckboxInput from 'Components/Elements/CheckboxInput'
import TextInput from 'Components/Elements/TextInput'
import useLogin from 'Hooks/useLogin'
import { useForm } from 'react-hook-form'

const FormLogin = ({ isOnGateway, setBuyerToken }) => {
  const { onSubmit } = useLogin(isOnGateway, setBuyerToken)
  const { register, handleSubmit } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '2@ratking.com',
      password: '1234Q@we',
    },
  })

  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__call">Inicia sesión para continuar</div>
        <TextInput name="email" label="Email" register={register} />
        <TextInput name="password" label="Contraseña" register={register} />
        <div className="login__forgot-pass">
          <button className="btn-text-only">Olvide mi contraseña</button>
        </div>
        <CheckboxInput name="staySigned" label="Mantener sesión iniciada" />
        <button className="btn btn-solid btn-long" onClick={handleSubmit}>
          INICIAR SESION
        </button>
        <div className="btn btn-solid btn-short self-center">Registrarse</div>
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
