import { signupSchema } from 'Helpers/validationSchemas'
import TextInput from 'Components/Elements/TextInput'
import { useNavigate } from 'react-router-dom'
import 'Styles/Auth.css'
import 'Styles/Signup.css'

const Registration1 = ({ register, setPage, watch, errors, isValid }) => {
  const schema = signupSchema(watch)
  const { shortText, email, password, confirmPassword, phone } = schema
  const navigate = useNavigate()

  const goToLogin = () => navigate('/login')

  return (
    <div>
      <div className="signup-call__wrapper">
        <svg
          onClick={goToLogin}
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.5303 19.5303C10.2374 19.8232 9.76256 19.8232 9.46967 19.5303L0.469671 10.5303C0.176778 10.2374 0.176778 9.76256 0.469671 9.46967L9.46967 0.469669C9.76256 0.176777 10.2374 0.176777 10.5303 0.469669C10.8232 0.762564 10.8232 1.23744 10.5303 1.53033L2.06066 10L10.5303 18.4697C10.8232 18.7626 10.8232 19.2374 10.5303 19.5303Z"
            fill="#29EFCB"
          />
        </svg>
        <h2 className="signup__call">Regístrate</h2>
      </div>
      <div className="signup__form">
        <div className="signup-form__inputs">
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
        </div>

        <div className="signup-button__spacing">
          <button className="btn btn-solid btn-long" onClick={() => setPage(2)} disabled={!isValid}>
            REGISTRARSE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Registration1
