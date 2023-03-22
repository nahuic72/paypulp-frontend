import { signupSchema } from 'Helpers/validationSchemas'
import TextInput from 'Components/Elements/TextInput'
import { useNavigate } from 'react-router-dom'

const Registration1 = ({ register, setPage, watch, errors, isValid }) => {
  const schema = signupSchema(watch)
  const { shortText, email, password, confirmPassword, phone } = schema
  const navigate = useNavigate()

  const goToLogin = () => navigate('/login')

  return (
    <>
      <h2>Regístrate</h2>
      <TextInput
        name="firstName"
        type="text"
        label="Nombre:"
        register={register}
        validationType={shortText}
        errors={errors}
      />
      <TextInput
        name="lastName"
        type="text"
        label="Apellido:"
        register={register}
        validationType={shortText}
        errors={errors}
      />
      <TextInput
        name="phone"
        type="text"
        label="Numero de teléfono:"
        register={register}
        validationType={phone}
        errors={errors}
      />
      <TextInput
        name="email"
        type="text"
        label="Email:"
        register={register}
        validationType={email}
        errors={errors}
      />
      <TextInput
        name="password"
        type="password"
        label="Contraseña:"
        register={register}
        validationType={password}
        errors={errors}
      />
      <TextInput
        name="confirmPassword"
        type="password"
        label="Confirma Contraseña:"
        register={register}
        validationType={confirmPassword}
        errors={errors}
      />

      <div className="checkout__btns">
        <button className="btn btn-solid btn-long" onClick={() => setPage(2)} disabled={!isValid}>
          REGISTRARSE
        </button>

        <button className="btn btn-text-only btn-short" onClick={goToLogin}>
          Prefiero iniciar sesíon
        </button>
      </div>
    </>
  )
}

export default Registration1
